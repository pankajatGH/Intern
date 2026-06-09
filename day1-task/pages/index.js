import { useState, useEffect } from 'react'

export default function Home() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)

  const fetchData = async () => {
    setLoading(true)
    const res = await fetch('/api/hello')
    const json = await res.json()
    setData(json)
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f0f4f8',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        backgroundColor: '#ffffff',
        padding: '40px 60px',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        textAlign: 'center'
      }}>
        <h1 style={{ color: '#333333', marginBottom: '20px' }}>
          Next.js API Test
        </h1>

        {loading && <p style={{ color: '#888' }}>Loading...</p>}

        {data && (
          <p style={{
            fontSize: '18px',
            color: '#444',
            marginBottom: '24px'
          }}>
            {data.message}
          </p>
        )}

        <button
          onClick={fetchData}
          disabled={loading}
          style={{
            backgroundColor: loading ? '#aaa' : '#0070f3',
            color: '#fff',
            border: 'none',
            padding: '10px 28px',
            borderRadius: '8px',
            fontSize: '16px',
            cursor: loading ? 'not-allowed' : 'pointer',
          }}
        >
          {loading ? 'Refreshing...' : 'Refresh'}
        </button>
      </div>
    </div>
  )
}