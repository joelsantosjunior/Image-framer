import { useState } from 'react'
export const useFile = (): [
  string | null,
  { onChange: (e: React.ChangeEvent<HTMLInputElement>) => void },
] => {
  const [file, setFile] = useState<string | null>(null)

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]

    if (file) {
      const reader = new FileReader()

      reader.onload = (e) => {
        const result = e.target?.result

        if (typeof result === 'string') {
          setFile(result)
        }
      }

      reader.readAsDataURL(file)
    }
  }

  return [file, { onChange: handleFileChange }]
}
