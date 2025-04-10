import { processImage } from '../services/imageService.js'
import { processFile } from '../services/fileService.js'
 
const serverDomain: any = process.env.SERVER_DOMAIN

export const handleUpload = async (c: any) => {
  const formData = await c.req.formData()
  const file = formData.get('file') as File | null

  if (!file) return c.json({ error: 'No file was uploaded' }, 400)

  // Verificamos si el archivo es una imagen
  if (file.type.startsWith('image/')) {
    const filePath = await processImage(file)
    return c.json({ file: serverDomain + '/' + filePath })
  } else {
    const filePath = await processFile(file)
    return c.json({ file: serverDomain + '/' + filePath })
  }
}
