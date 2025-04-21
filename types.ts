export interface Emoji {
  emoji: string
  name: string
  group: string
  subgroup: string
  unicode_version: string
  codepoints: string[]
}

export type GroupKey = '' | 'Smileys & Emotion' | 'People & Body' | 'Animals & Nature' | 'Food & Drink' | 'Travel & Places' | 'Activities' | 'Objects' | 'Symbols' | 'Flags'
export interface Group {
  key: GroupKey
  icon: string
}

export type SkinToneKey = '' | 'light' | 'medium-light' | 'medium' | 'medium-dark' | 'dark'
export interface SkinTone {
  key: SkinToneKey
  color: string
}
