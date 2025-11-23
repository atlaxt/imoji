import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import process from 'node:process'

export default function (): Emoji[] {
  const file = readFileSync(
    join(process.cwd(), 'public/emojis.json'),
    'utf-8',
  )
  return JSON.parse(file)
}
