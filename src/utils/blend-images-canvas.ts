export function blendTwoImages(
  image: HTMLImageElement,
  overlay: HTMLImageElement,
  x: number,
  y: number,
): string | undefined {
  const canvas = document.createElement('canvas')
  const context = canvas.getContext('2d')

  if (!context) {
    return
  }

  const { width, height } = image

  canvas.width = width
  canvas.height = height

  context.drawImage(image, 0, 0, width, height)

  context.globalCompositeOperation = 'source-over'

  context.drawImage(overlay, x, y, width, height)

  return canvas.toDataURL('image/jpeg', 1.0)
}
