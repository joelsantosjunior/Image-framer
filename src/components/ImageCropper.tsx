import "cropperjs/dist/cropper.css"
import { useEffect, useRef } from "react"
import { Cropper, ReactCropperElement } from "react-cropper"

interface ImageCropperProps {
  aspectRatio: number
  image: File | null
  onCrop: (croppedImage: string) => void
}

const ImageCropper = ({ aspectRatio, image }: ImageCropperProps) => {
  const cropperRef = useRef<ReactCropperElement>(null)

  const onCrop = () => {}

  useEffect(() => {
    const cropper = cropperRef.current?.cropper
    cropper?.setAspectRatio(aspectRatio ?? 1 / 1)
  }, [aspectRatio])

  return (
    <Cropper
      src={image ? URL.createObjectURL(image) : ""}
      style={{ height: 400, width: "100%" }}
      initialAspectRatio={aspectRatio ?? 1 / 1}
      guides={true}
      crop={onCrop}
      ref={cropperRef}
    />
  )
}

export default ImageCropper
