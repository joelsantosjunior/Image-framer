import { useState } from "react"
import "./App.css"
import Footer from "./components/Footer"
import { AspectRatio } from "./utils/aspect-ratios"
import ImageCropper from "./components/ImageCropper"
// import { ImageSizes } from "./utils/image-sizes"

function App() {
  const [image, setImage] = useState<File | null>(null)
  const [ratio, setRatio] = useState<number>(AspectRatio.STORY)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setImage(file)
    }
  }

  return (
    <>
      <div
        style={{
          maxWidth: "500px",
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

        <ImageCropper aspectRatio={ratio} image={image}></ImageCropper>

        {/* <div
          style={{
            width: "min(100%, 456px)",
            height: "456px",
            position: "relative",
          }}
          className="image-container flex border-spacing-1 items-center justify-center border-2 border-dashed border-blue-500"
        >
          <div
            className="image flex items-center justify-center"
            style={{
              maxHeight: "100%",
              aspectRatio: ratio,
              position: "absolute",
              zIndex: 1,
            }}
          >
            <img
              style={{
                maxHeight: "100%",
                maxWidth: "100%",
              }}
              src={`https://via.placeholder.com/${ImageSizes[ratio]}`}
              alt="Imagem"
              className="object-cover"
            />
          </div>

          <div
            style={{
              zIndex: 2,
            }}
          >
            {image && (
              <img
                style={{
                  maxHeight: "100%",
                  maxWidth: "100%",
                }}
                src={URL.createObjectURL(image)}
                alt="Imagem"
                className="object-cover"
              />
            )}
          </div>
        </div> */}

        {image && (
          <div className="buttons mt-10 flex gap-2">
            <button className="rounded-md bg-blue-500 px-6 py-2 text-lg text-white transition hover:shadow-md active:bg-blue-600">
              crop
            </button>

            <button className="text-l rounded-md bg-blue-500 px-6 py-2 text-lg text-white transition hover:shadow-md active:bg-blue-600">
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

        <div className=""></div>

        <Footer>
          Feito com ❤️ + ☕️ por{" "}
          <a href="https://joelsantos.dev" target="_blank">
            Joel Santos
          </a>
        </Footer>
      </div>
    </>
  )
}

export default App
