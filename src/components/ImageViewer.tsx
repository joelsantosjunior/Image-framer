interface ImageViewerProps {
  imageSrc: string
}

const ImageViewer = ({ imageSrc }: ImageViewerProps) => {
  return (
    <div
      style={{
        height: '400px',
        width: '100dvw',
      }}
      className="image-view relative mb-12 border-dashed border-2 border-gray-200"
    >
      <div className="absolute bg-blue-200  w-full h-full opacity-50"></div>

      {imageSrc && (
        <div
          className="relative flex items-center justify-center w-full h-full"
          style={{
            aspectRatio: '1/1',
          }}
        >
          <img
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain',
              objectPosition: 'center',
            }}
            src={imageSrc}
          />
        </div>
      )}
    </div>
  )
}

export default ImageViewer
