import fs from 'fs/promises'
import path from 'path'

const sanitizeFileName = (fileName: string) => {
  return fileName.replace(/\s+/g, '_')
}

export const processFile = async (file: File) => {
  const arrayBuffer = await file.arrayBuffer()
  const buffer = Buffer.from(arrayBuffer)

  const sanitizedFileName = sanitizeFileName(file.name)

  const outputPath = path.join('./public', sanitizedFileName)

  await fs.writeFile(outputPath, buffer)

  return `${path.basename(outputPath)}`
}
