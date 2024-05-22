import { ImageContext } from '../ImageContext'
import { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PrimaryButton from '../components/PrimaryButton'
import { useFile } from '../hooks/useFile'
import useStorageFrames from '../hooks/useStorageFrames'

const FrameSelectionPage = () => {
  const [imageContext, setImageContext] = useContext(ImageContext)
  const [_, setMoldura] = useState('')
  const navigate = useNavigate()
  const ref = useRef<HTMLInputElement>(null)
  const [file, inputProps] = useFile()
  const [frames, setFrames] = useStorageFrames()

  const handleSelectMolduras = (frameSrc: string) => {
    setMoldura(frameSrc)
    setImageContext({
      ...imageContext,
      frame: frameSrc,
    })

    navigate('/view')
  }

  useEffect(() => {
    if (file) {
      setFrames([
        ...frames,
        {
          src: file,
          name: 'Custom',
        },
      ])
    }
  }, [file])

  return (
    <div className="page">
      <h1 className="mb-14 mt-14">Molduras</h1>

      <input type="file" hidden ref={ref} {...inputProps} accept="image/png" />

      <div
        style={{
          maxWidth: 'min(100%, 400px)',
        }}
        className="frames grid grid-cols-3 gap-2 mb-4"
      >
        {frames.map((frame) => (
          <div
            key={frame.name}
            onClick={() => handleSelectMolduras(frame.src)}
            style={{
              backgroundColor: 'rgb(101 145 233)',
            }}
            className="frame-slot h-32 shadow-md border-2 border-dashed border-blue-100 flex justify-center items-center cursor-pointer"
          >
            <img src={frame.src} />
          </div>
        ))}
      </div>

      <div className="mt-auto w-full mb-4">
        <PrimaryButton
          onClick={() => {
            ref.current?.click()
          }}
        >
          <span>Upload</span>
        </PrimaryButton>
      </div>
    </div>
  )
}

export default FrameSelectionPage
