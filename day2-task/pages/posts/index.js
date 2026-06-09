import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Posts() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
      const data = await res.json()
      setPosts(data)
      setLoading(false)
    }

    fetchPosts()
  }, [])

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f0f4f8',
      padding: '40px 20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{
        textAlign: 'center',
        color: '#333',
        marginBottom: '30px'
      }}>
        Posts
      </h1>

      {loading ? (
        <p style={{ textAlign: 'center', color: '#888', fontSize: '18px' }}>
          Loading...
        </p>
      ) : (
        <div style={{
          maxWidth: '700px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          {posts.map(post => (
            <Link
              href={`/posts/${post.id}`}
              key={post.id}
              style={{ textDecoration: 'none' }}
            >
              <div style={{
                backgroundColor: '#fff',
                padding: '20px 24px',
                borderRadius: '10px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                cursor: 'pointer',
                transition: 'box-shadow 0.2s',
              }}>
                <p style={{
                  fontSize: '12px',
                  color: '#0070f3',
                  marginBottom: '6px'
                }}>
                  Post #{post.id}
                </p>
                <h2 style={{
                  fontSize: '16px',
                  color: '#333',
                  margin: '0 0 8px 0',
                  textTransform: 'capitalize'
                }}>
                  {post.title}
                </h2>
                <p style={{
                  fontSize: '14px',
                  color: '#888',
                  margin: 0
                }}>
                  {post.body.substring(0, 80)}...
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}