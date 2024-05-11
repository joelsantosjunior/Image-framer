import { createContext } from 'react'

export interface ImageContext {
  imageSrc: string
  frame: string
  result: string
}

export const ImageContext = createContext<
  [ImageContext, React.Dispatch<React.SetStateAction<ImageContext>>]
>([
  {
    imageSrc: '',
    frame: '',
    result: '',
  },
  () => {},
])
