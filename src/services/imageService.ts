import sharp from 'sharp'
import fs from 'fs/promises'
import path from 'path'
const imageQuality = parseInt(process.env.IMAGE_QUALITY || '70') 
const imageWidth = parseInt(process.env.IMAGE_WIDTH || '1280') 

export const processImage = async (file: File) => {
  const arrayBuffer = await file.arrayBuffer()
  const buffer = Buffer.from(arrayBuffer)

  const output = await sharp(buffer)
    .webp({ quality: imageQuality })
    .withMetadata({})
    .resize({ width: imageWidth, withoutEnlargement: true }).toBuffer()

  const outputPath = path.join('./public', `${Date.now()}.webp`)
  await fs.writeFile(outputPath, output)

  return `${path.basename(outputPath)}`
}
