// api/sendMessage.js (ubicación exacta)
export default async function handler(req, res) {
  // Configurar CORS
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' })
  }

  const { name, email, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Faltan campos requeridos' })
  }

  // ✅ Variables de entorno SIN prefijo VITE_
  const botToken = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  if (!botToken || !chatId) {
    console.error('Faltan variables de entorno en Vercel')
    return res.status(500).json({ error: 'Configuración del servidor incompleta' })
  }

  try {
    const text = `📩 Nuevo mensaje desde el formulario:\n\n👤 Nombre: ${name}\n📧 Email: ${email}\n💬 Mensaje:\n${message}`

    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text }),
    })

    if (!response.ok) {
      throw new Error(`Telegram API: ${response.status}`)
    }

    return res.status(200).json({ success: true })
  } catch (error) {
    console.error('Error en /api/sendMessage:', error)
    return res.status(500).json({ error: 'Error al enviar el mensaje' })
  }
}
