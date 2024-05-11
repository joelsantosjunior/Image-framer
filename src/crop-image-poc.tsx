import { useRef, useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import { AspectRatio } from './utils/aspect-ratios'
import ImageCropper from './components/ImageCropper'
import { ReactCropperElement } from 'react-cropper'
import { blendTwoImages } from './utils/blend-images-canvas'
import { loadImage } from './utils/load-image'

const frames = [
  {
    src: './src/assets/frames/festa-junina.png',
  },
  {
    src: './src/assets/frames/dia-das-maes.png',
  },
]

function App() {
  const [image, setImage] = useState<File | null>(null)
  const [selectedFrame, setSelectedFrame] = useState<string | null>(null)
  const [ratio, setRatio] = useState<number>(AspectRatio.STORY)
  const cropperRef = useRef<ReactCropperElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setImage(file)
    }
  }

  const handleClickDownload = async () => {
    if (cropperRef) {
      const cropper = cropperRef.current?.cropper
      const croppedImage = cropper?.getCroppedCanvas().toDataURL('image/jpeg')

      if (croppedImage && selectedFrame) {
        const frame = await loadImage(selectedFrame)
        const image = await loadImage(croppedImage)

        const blendedImages = blendTwoImages(image, frame, 0, 0)

        const link = document.createElement('a')

        link.href = blendedImages!
        link.download = 'image.jpg'
        link.click()
      }
    }
  }

  return (
    <>
      <div
        style={{
          maxWidth: '500px',
        }}
        className="flex flex-col items-start p-5 md:container md:mx-auto"
      >
        <div className="mb-5 mt-5 self-start">
          <h1 className="font-display text-5xl">Upload da imagem</h1>
        </div>
        <div className="mb-5 flex flex-col items-start gap-2 self-start text-left">
          <label htmlFor="image-format">
            Selecione o tipo de imagem que deseja enviar
          </label>
          <select
            id="image-format"
            onChange={(e) => setRatio(+e.target.value)}
            className=" rounded-sm"
          >
            <option value={AspectRatio.POST_BIG}>Post Grande</option>
            <option value={AspectRatio.POST_MEDIUM}>Post Médio</option>
            <option value={AspectRatio.POST_SMALL}>Post Pequeno</option>
            <option value={AspectRatio.STORY}>Story</option>
          </select>
        </div>

        <div className="file-uploader mb-3 w-full">
          <input
            type="file"
            accept="image/*"
            className="w-full rounded-lg border px-3 py-2 text-gray-700 focus:outline-none"
            onChange={handleFileChange}
          />
        </div>

        <div className="framer-selection flex flex-row gap-3 mb-3">
          {frames.map(({ src }) => (
            <div
              onClick={() => setSelectedFrame(src)}
              style={{
                height: '80px',
                width: '80px',
              }}
              className="shadow-md flex flex-col items-center bg-white border rounded-md border-black hover:cursor-pointer transition active:scale-90"
            >
              <img
                style={{
                  maxHeight: '80px',
                }}
                src={src}
                alt="frame"
              />
            </div>
          ))}
        </div>

        <ImageCropper
          aspectRatio={ratio}
          image={image}
          ref={cropperRef}
        ></ImageCropper>

        {image && (
          <div className="buttons mt-10 flex gap-2">
            <button className="rounded-md bg-blue-500 px-6 py-2 text-lg text-white transition hover:shadow-md active:bg-blue-600">
              preview
            </button>

            <button
              onClick={handleClickDownload}
              className="text-l rounded-md bg-blue-500 px-6 py-2 text-lg text-white transition hover:shadow-md active:bg-blue-600"
            >
              download
            </button>

            <button
              onClick={() => {
                setImage(null)
              }}
              className="text-l rounded-md bg-blue-500 px-6 py-2 text-lg text-white transition hover:shadow-md active:bg-blue-600"
            >
              reset
            </button>
          </div>
        )}

        <Footer>
          Feito com 💚 + 🍕 por{' '}
          <a href="https://joelsantos.dev" target="_blank">
            Joel Santos
          </a>
        </Footer>
      </div>
    </>
  )
}

export default App
