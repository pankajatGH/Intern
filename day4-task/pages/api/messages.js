import fs from 'fs'
import path from 'path'

const filePath = path.join(process.cwd(), 'messages.json')

export default function handler(req, res) {
  if (req.method === 'GET') {
    const data = fs.readFileSync(filePath, 'utf-8')
    const messages = JSON.parse(data)
    res.status(200).json(messages)
  }

  else if (req.method === 'POST') {
    const data = fs.readFileSync(filePath, 'utf-8')
    const messages = JSON.parse(data)

    const newMessage = {
      id: Date.now(),
      sender: req.body.sender,
      text: req.body.text,
      timestamp: new Date().toLocaleTimeString()
    }

    messages.push(newMessage)
    fs.writeFileSync(filePath, JSON.stringify(messages, null, 2))
    res.status(201).json(newMessage)
  }

  else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}