import { useState, useEffect, useRef } from 'react'

export default function Chat() {
  const [username, setUsername] = useState('')
  const [joined, setJoined] = useState(false)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef(null)

  // Polling every 2 seconds
  useEffect(() => {
    if (!joined) return

    const fetchMessages = async () => {
      const res = await fetch('/api/messages')
      const data = await res.json()
      setMessages(data)
    }

    fetchMessages()
    const interval = setInterval(fetchMessages, 2000)
    return () => clearInterval(interval)
  }, [joined])

  // Auto scroll to bottom
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const sendMessage = async () => {
    if (!input.trim()) return
    setLoading(true)

    await fetch('/api/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sender: username, text: input })
    })

    setInput('')
    setLoading(false)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') sendMessage()
  }

  const handleJoin = () => {
    if (username.trim()) setJoined(true)
  }

  // Username screen
  if (!joined) {
    return (
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Segoe UI, sans-serif'
      }}>
        <div style={{
          backgroundColor: 'rgba(255,255,255,0.15)',
          backdropFilter: 'blur(15px)',
          borderRadius: '24px',
          padding: '48px',
          textAlign: 'center',
          boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
          minWidth: '320px'
        }}>
          <p style={{ fontSize: '48px', marginBottom: '8px' }}>💬</p>
          <h1 style={{
            color: '#fff',
            fontSize: '28px',
            fontWeight: '700',
            marginBottom: '8px'
          }}>
            Welcome to Chat
          </h1>
          <p style={{
            color: 'rgba(255,255,255,0.7)',
            marginBottom: '28px',
            fontSize: '14px'
          }}>
            Enter your name to start chatting
          </p>
          <input
            type="text"
            placeholder="Your name..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleJoin()}
            style={{
              width: '100%',
              padding: '12px 16px',
              borderRadius: '12px',
              border: 'none',
              fontSize: '16px',
              marginBottom: '16px',
              outline: 'none',
              boxSizing: 'border-box'
            }}
          />
          <button
            onClick={handleJoin}
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '12px',
              border: 'none',
              backgroundColor: 'rgba(255,255,255,0.25)',
              color: '#fff',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
            }}
          >
            Join Chat 🚀
          </button>
        </div>
      </div>
    )
  }

  // Chat screen
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Segoe UI, sans-serif',
      padding: '20px'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '600px',
        height: '85vh',
        backgroundColor: 'rgba(255,255,255,0.1)',
        backdropFilter: 'blur(20px)',
        borderRadius: '24px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
      }}>

        {/* Header */}
        <div style={{
          padding: '20px 24px',
          borderBottom: '1px solid rgba(255,255,255,0.15)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div>
            <h2 style={{
              color: '#fff',
              fontSize: '20px',
              fontWeight: '700',
              margin: 0
            }}>
              💬 Live Chat
            </h2>
            <p style={{
              color: 'rgba(255,255,255,0.6)',
              fontSize: '12px',
              margin: '2px 0 0 0'
            }}>
              Syncs every 2 seconds
            </p>
          </div>
          <div style={{
            backgroundColor: 'rgba(255,255,255,0.2)',
            padding: '6px 14px',
            borderRadius: '20px',
            color: '#fff',
            fontSize: '13px',
            fontWeight: '600'
          }}>
            👤 {username}
          </div>
        </div>

        {/* Messages */}
        <div style={{
          flex: 1,
          overflowY: 'auto',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
          {messages.length === 0 && (
            <p style={{
              textAlign: 'center',
              color: 'rgba(255,255,255,0.5)',
              marginTop: '40px',
              fontSize: '14px'
            }}>
              No messages yet. Say hello! 👋
            </p>
          )}

          {messages.map((msg) => {
            const isMe = msg.sender === username
            return (
              <div key={msg.id} style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: isMe ? 'flex-end' : 'flex-start'
              }}>
                <p style={{
                  fontSize: '11px',
                  color: 'rgba(255,255,255,0.6)',
                  marginBottom: '4px',
                  paddingLeft: isMe ? '0' : '4px',
                  paddingRight: isMe ? '4px' : '0',
                }}>
                  {isMe ? 'You' : msg.sender}
                </p>
                <div style={{
                  backgroundColor: isMe
                    ? 'rgba(255,255,255,0.9)'
                    : 'rgba(255,255,255,0.2)',
                  color: isMe ? '#333' : '#fff',
                  padding: '10px 16px',
                  borderRadius: isMe
                    ? '18px 18px 4px 18px'
                    : '18px 18px 18px 4px',
                  maxWidth: '75%',
                  fontSize: '15px',
                  lineHeight: '1.4',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}>
                  {msg.text}
                </div>
                <p style={{
                  fontSize: '10px',
                  color: 'rgba(255,255,255,0.4)',
                  marginTop: '4px',
                  paddingLeft: isMe ? '0' : '4px',
                  paddingRight: isMe ? '4px' : '0',
                }}>
                  {msg.timestamp}
                </p>
              </div>
            )
          })}
          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <div style={{
          padding: '16px 20px',
          borderTop: '1px solid rgba(255,255,255,0.15)',
          display: 'flex',
          gap: '10px'
        }}>
          <input
            type="text"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            style={{
              flex: 1,
              padding: '12px 18px',
              borderRadius: '24px',
              border: 'none',
              fontSize: '15px',
              outline: 'none',
              backgroundColor: 'rgba(255,255,255,0.9)',
              color: '#333'
            }}
          />
          <button
            onClick={sendMessage}
            disabled={loading}
            style={{
              padding: '12px 20px',
              borderRadius: '24px',
              border: 'none',
              backgroundColor: 'rgba(255,255,255,0.25)',
              color: '#fff',
              fontSize: '20px',
              cursor: 'pointer',
            }}
          >
            {loading ? '...' : '➤'}
          </button>
        </div>
      </div>
    </div>
  )
}