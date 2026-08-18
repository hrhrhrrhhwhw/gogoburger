'use client'

import { useState } from 'react'
import { Input } from './ui/input'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Button } from './ui/button'

const items = [
  { label: 'ARM +374', value: '+374' },
  { label: 'RUS +7', value: '+7' },
]

export default function PhoneForm() {
  const [countryCode, setCountryCode] = useState('+374')
  const [phone, setPhone] = useState('')

  const handleSubmit = () => {
    console.log({
      countryCode,
      phone,
    })
  }

  return (
    <div>
      <div className="flex items-center gap-1 mb-7">
        <Select value={countryCode} onValueChange={setCountryCode}>
          <SelectTrigger className="w-32">
            <SelectValue placeholder="Код" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {items.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Номер телефона" />
      </div>

      <Button onClick={handleSubmit} size="lg" className="w-full" type="submit">
        Продолжить
      </Button>
    </div>
  )
}
