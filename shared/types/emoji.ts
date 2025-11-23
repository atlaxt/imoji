declare global {

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

}
