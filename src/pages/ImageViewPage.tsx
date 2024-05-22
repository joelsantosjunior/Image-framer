import InstructionsList from '../components/InstructionsList'
import PrimaryButton from '../components/PrimaryButton'
import ImageViewer from '../components/ImageViewer'
import { ImageContext } from '../ImageContext'
import { useContext, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { blendTwoImages } from '../utils/blend-images-canvas'
import { loadImage } from '../utils/load-image'

const ImageView = () => {
  const [imageContext, setImageContext] = useContext(ImageContext)
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)

  useMemo(async () => {
    if (imageContext.imageSrc && imageContext.frame) {
      setIsLoading(true)
      const image = await loadImage(imageContext.imageSrc)
      const frame = await loadImage(imageContext.frame)

      const result = await blendTwoImages(image, frame, 0, 0)

      if (result) setImageContext({ ...imageContext, result })
      setIsLoading(false)
    }
  }, [imageContext.imageSrc, imageContext.frame])

  const handleClickDownload = async (image: string) => {
    if (image) {
      const link = document.createElement('a')

      link.href = image
      link.download = 'image.jpg'
      link.click()
    }
  }

  const image = imageContext.result ?? imageContext.imageSrc

  return (
    <div className="page">
      <h1 className="mb-14 mt-14">Escolha uma moldura</h1>
      {isLoading ? (
        <div
          style={{
            height: '428px',
          }}
          className=""
        ></div>
      ) : (
        <ImageViewer imageSrc={image} />
      )}
      <PrimaryButton
        onClick={() => {
          navigate('/frame')
        }}
      >
        <span>molduras</span>
      </PrimaryButton>
      <div className="mb-3"></div>
      <PrimaryButton
        onClick={() => {
          handleClickDownload(image)
        }}
      >
        <span>download</span>
      </PrimaryButton>
      <div className="mb-5"></div>
      <InstructionsList></InstructionsList>
    </div>
  )
}

export default ImageView
