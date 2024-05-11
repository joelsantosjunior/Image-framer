import { ImageContext } from '../ImageContext'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import '../assets/frames/dia-das-maes.png'
import '../assets/frames/festa-junina.png'

interface Frame {
  src: string
  name: string
  dimensions?: string
  ratio?: string
  bg?: string
}

const FrameSelectionPage = () => {
  const frames: Frame[] = [
    {
      src: 'src/assets/frames/festa-junina.png',
      name: 'Frame 1',
      bg: 'bg-gray-500',
    },
    {
      src: 'src/assets/frames/dia-das-maes.png',
      name: 'Frame 2',
      bg: 'bg-gray-500',
    },
    {
      src: 'src/assets/frames/dia-das-maes.png',
      name: 'Frame 3',
      bg: 'bg-gray-500',
    },
    {
      src: 'src/assets/frames/dia-das-maes.png',
      name: 'Frame 4',
      bg: 'bg-gray-500',
    },
  ]

  const [imageContext, setImageContext] = useContext(ImageContext)
  const [_, setMoldura] = useState('')
  const navigate = useNavigate()

  const handleSelectMolduras = (frameSrc: string) => {
    setMoldura(frameSrc)
    setImageContext({
      ...imageContext,
      frame: frameSrc,
    })

    navigate('/view')
  }

  return (
    <div className="page">
      <h1 className="mb-14 mt-14">Molduras</h1>

      <div
        style={{
          maxWidth: 'min(100%, 400px)',
        }}
        className="frames grid grid-cols-3 gap-2"
      >
        {frames.map((frame) => (
          <div
            key={frame.name}
            onClick={() => handleSelectMolduras(frame.src)}
            className={`frame-slot ${frame.bg} h-32 shadow-md border-2 border-dashed border-blue-100`}
          >
            <img src={frame.src} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default FrameSelectionPage
