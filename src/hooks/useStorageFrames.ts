import { useEffect, useState } from 'react'

export interface Frame {
  src: string
  name: string
  dimensions?: string
  ratio?: string
  bg?: string
}

const useStorageFrames = (): [Frame[], (frames: Frame[]) => void] => {
  const [storageFrames, set] = useState<Frame[]>([])

  const initialFrames: Frame[] = [
    {
      src: 'assets/frames/festa-junina.png',
      name: 'Festa Junina',
    },
    {
      src: 'assets/frames/dia-das-maes.png',
      name: 'Dia das Mães',
    },
  ]

  useEffect(() => {
    const savedFrames = localStorage.getItem('frames')
    if (savedFrames) {
      const parsedFrames = JSON.parse(savedFrames)
      if (!parsedFrames.length) {
        set(initialFrames)
        return
      }
      set(parsedFrames)
    } else {
      updateFrames(initialFrames)
    }
  }, [])

  const updateFrames = (frames: Frame[]) => {
    localStorage.setItem('frames', JSON.stringify(frames))
    set(frames)
  }

  return [storageFrames, updateFrames]
}

export default useStorageFrames
