import type { Emoticon, EmoticonGroup, EmoticonGroupKey } from '~/types'

export const useEmoticonStore = defineStore('emoticon', () => {
  const emoticons = ref<Emoticon[]>([])
  const lastEmoticons = ref<Emoticon[]>([])
  const selectedGroupKey = ref<EmoticonGroupKey>('Classic')
  const isLoading = ref(true)

  const groupOptions = ref<EmoticonGroup[]>([{
    key: 'Classic',
    icon: 'fa6-solid:clock-rotate-left',
  }, {
    key: 'Happy',
    icon: 'fa6-solid:face-smile',
  }, {
    key: 'Greeting',
    icon: 'fluent:hand-wave-16-filled',
  }, {
    key: 'Acting cute',
    icon: 'fa-solid:heart',
  }, {
    key: 'Sad',
    icon: 'fa6-solid:face-sad-tear',
  }, {
    key: 'Angry',
    icon: 'fa6-solid:face-angry',
  }, {
    key: 'Surprised/Speechless',
    icon: 'fa6-solid:face-flushed',
  }])

  const filteredEmoticons = computed(() =>
    emoticons.value.filter(e =>
      !selectedGroupKey.value || e.group.toLowerCase() === selectedGroupKey.value.toLowerCase(),
    ),
  )

  const fetchEmoticons = async () => {
    if (emoticons.value.length)
      return
    isLoading.value = true
    try {
      const res = await fetch('/emoticons.json')
      emoticons.value = await res.json()
    }
    catch (e) {
      console.error('Emoticons fetch error:', e)
    }
    finally {
      isLoading.value = false
    }
  }

  const fetchLastEmoticons = () => {
    const raw = localStorage.getItem('last-emoticons')
    lastEmoticons.value = raw ? JSON.parse(raw) : []
  }

  const isSameEmoticon = (a: Emoticon, b: Emoticon) =>
    a.emoticon === b.emoticon && a.group === b.group

  const addLastEmoticon = (emoticon: Emoticon) => {
    const key = 'last-emoticons'
    let list = [...lastEmoticons.value]

    list = list.filter(e => !isSameEmoticon(e, emoticon))
    list.unshift(emoticon)

    if (list.length > 20)
      list = list.slice(0, 20)

    localStorage.setItem(key, JSON.stringify(list))
    lastEmoticons.value = list
  }

  return {
    emoticons,
    lastEmoticons,
    selectedGroupKey,
    groupOptions,
    isLoading,
    filteredEmoticons,
    fetchEmoticons,
    fetchLastEmoticons,
    addLastEmoticon,
  }
})
