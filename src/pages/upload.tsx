import { useContext, useRef } from 'react'
import InstructionsList from '../components/InstructionsList'
import { ImageContext } from '../ImageContext'
import { useNavigate } from 'react-router-dom'

const UploadPage = () => {
  const ref = useRef<HTMLInputElement>(null)

  const [imageContext, setImageContext] = useContext(ImageContext)

  const navigate = useNavigate()

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    if (file) {
      const reader = new FileReader()

      reader.onload = (e) => {
        const result = e.target?.result

        if (typeof result === 'string') {
          setImageContext({
            ...imageContext,
            imageSrc: result,
          })

          navigate('/view')
        }
      }

      reader.readAsDataURL(file)
    }
  }

  const handleFileUploadClick = () => {
    ref.current?.click()
  }

  return (
    <div className="page uploader">
      <h1 className="mb-14 mt-14">Upload your picture</h1>

      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        hidden
        ref={ref}
      />

      <div
        style={{
          height: '300px',
          width: 'min(100%, 400px)',
        }}
        onClick={handleFileUploadClick}
        className="relative file-uploader flex flex-col items-center justify-center border border-solid border-gray-400 rounded-lg hover:border-gray-500 transition active:border-gray-600 cursor-pointer p-4 shadow-md mb-20"
      >
        <div className="absolute w-full h-full file-uploader-bg bg-gradient-to-br from-blue-400 to-blue-200 bg-opacity-30 opacity-50"></div>

        <div className="text-center flex items-center flex-col z-10">
          <svg
            width="63"
            height="64"
            viewBox="0 0 63 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.625 42.5V26.75H13.125L31.5 8.375L49.875 26.75H39.375V42.5H23.625ZM13.125 53V47.75H49.875V53H13.125Z"
              fill="black"
            />
          </svg>
          <span className="text-sm font-medium">
            browse your phone files<br></br>or drag an image
          </span>
        </div>
      </div>

      <InstructionsList></InstructionsList>
    </div>
  )
}

export default UploadPage
