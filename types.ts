export interface Emoji {
  emoji: string
  name: string
  group: string
  subgroup: string
  unicode_version: string
  codepoints: string[]
}

export type EmojiGroupKey = '' | 'Smileys & Emotion' | 'People & Body' | 'Animals & Nature' | 'Food & Drink' | 'Travel & Places' | 'Activities' | 'Objects' | 'Symbols' | 'Flags'
export interface EmojiGroup {
  key: EmojiGroupKey
  icon: string
}

export type EmojiSkinToneKey = '' | 'light' | 'medium-light' | 'medium' | 'medium-dark' | 'dark'
export interface SkinTone {
  key: EmojiSkinToneKey
  color: string
}

export interface Emoticon {
  emoticon: string
  group: string
}

export type EmoticonGroupKey = | '' | 'Classic' | 'Happy' | 'Greeting' | 'Acting cute' | 'Sad' | 'Angry' | 'Surprised/Speechless'

export interface EmoticonGroup {
  key: EmoticonGroupKey
  icon: string
}
