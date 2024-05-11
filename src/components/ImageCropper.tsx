import 'cropperjs/dist/cropper.css'
import { ReactElement, forwardRef, useMemo, useState } from 'react'
import { Cropper } from 'react-cropper'

interface ImageCropperProps {
  aspectRatio: number
  image: File | null
  onCrop: (croppedImage: string) => void
}

const ImageCropper = (props: ImageCropperProps, ref: any) => {
  const { image, aspectRatio } = props

  const [cropper, setCropper] = useState<ReactElement | null>(null)

  useMemo(() => {
    const cropper = (
      <Cropper
        src={image ? URL.createObjectURL(image) : ''}
        style={{ height: '456px', width: '100%' }}
        initialAspectRatio={aspectRatio ?? 1 / 1}
        guides={true}
        onDragEnd={() => {
          console.log('onDragEnd')
        }}
        ref={ref}
      />
    )

    ref.current?.cropper?.setAspectRatio(aspectRatio ?? 1 / 1)

    setCropper(cropper)
  }, [image, aspectRatio])

  return cropper
}

export default forwardRef(ImageCropper)
