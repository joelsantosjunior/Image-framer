import InstructionsList from '../components/InstructionsList'
import PrimaryButton from '../components/PrimaryButton'
import ImageViewer from '../components/ImageViewer'
import { ImageContext } from '../ImageContext'
import { useContext } from 'react'

const ImageView = () => {
  const [imageContext, _] = useContext(ImageContext)

  return (
    <div className="page">
      <h1 className="mb-14 mt-14">Select a frame to apply</h1>
      <ImageViewer imageSrc={imageContext.imageSrc} />

      <PrimaryButton>
        <span>molduras</span>
      </PrimaryButton>
      <div className="mb-5"></div>
      <InstructionsList></InstructionsList>
    </div>
  )
}

export default ImageView
