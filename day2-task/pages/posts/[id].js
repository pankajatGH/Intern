import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function PostDetail() {
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    if (!id) return

    const fetchPost = async () => {
      setLoading(true)
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      const data = await res.json()
      setPost(data)
      setLoading(false)
    }

    fetchPost()
  }, [id])

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f0f4f8',
      padding: '40px 20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        maxWidth: '700px',
        margin: '0 auto'
      }}>

        <Link href="/posts" style={{
          display: 'inline-block',
          marginBottom: '24px',
          color: '#0070f3',
          textDecoration: 'none',
          fontSize: '14px'
        }}>
          ← Back to Posts
        </Link>

        {loading ? (
          <p style={{ textAlign: 'center', color: '#888', fontSize: '18px' }}>
            Loading...
          </p>
        ) : post ? (
          <div style={{
            backgroundColor: '#fff',
            padding: '32px',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
          }}>
            <p style={{
              fontSize: '12px',
              color: '#0070f3',
              marginBottom: '8px'
            }}>
              Post #{post.id}
            </p>
            <h1 style={{
              fontSize: '22px',
              color: '#333',
              textTransform: 'capitalize',
              marginBottom: '16px'
            }}>
              {post.title}
            </h1>
            <p style={{
              fontSize: '16px',
              color: '#555',
              lineHeight: '1.7'
            }}>
              {post.body}
            </p>
          </div>
        ) : (
          <p style={{ textAlign: 'center', color: 'red' }}>Post not found!</p>
        )}
      </div>
    </div>
  )
}