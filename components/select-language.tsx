'use client'

import { useRouter } from 'next/navigation'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from './ui/select'

const languages = [
  { value: 'hy', label: 'Հայերեն' },
  { value: 'ru', label: 'Русский' },
  { value: 'en', label: 'English' },
]

export default function SelectLanguage({ locale }: { locale: string }) {
  const router = useRouter()

  const handleChange = (newLocale: string | null) => {
    if (!newLocale) return
    
    router.push(`/${newLocale}`)
  }

  return (
    <Select value={locale} onValueChange={handleChange}>
      <SelectTrigger size="default">
        <SelectValue/>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {languages.map((language) => (
            <SelectItem key={language.value} value={language.value}>
              {language.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
