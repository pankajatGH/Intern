import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [openFeature, setOpenFeature] = useState(1)

  return (
    <>
      <Head>
        <title>FinFLO — Future of Private Equity</title>
        <link href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500;600;700;900&display=swap" rel="stylesheet" />
      </Head>

      <div style={{ fontFamily: 'Inter, sans-serif', backgroundColor: '#F5F0E8', color: '#1a1a0e' }}>

        {/* ===== HERO ===== */}
        <div style={{
          backgroundColor: '#E8590C',
          borderRadius: '0 0 32px 32px',
          overflow: 'hidden',
          position: 'relative',
          minHeight: '520px',
        }}>

          {/* Radial pattern */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'repeating-conic-gradient(#f97316 0% 25%, transparent 0% 50%)',
            backgroundSize: '40px 40px',
            opacity: 0.07,
          }} />

          {/* Navbar */}
          <nav style={{
            display: 'flex', alignItems: 'center',
            justifyContent: 'space-between',
            padding: '20px 48px',
            position: 'relative', zIndex: 10,
          }}>
            <span style={{
              fontFamily: 'Anton, sans-serif',
              fontSize: '24px', color: '#F5F0E8',
              letterSpacing: '1px',
            }}>
              FinFLO
            </span>
            <div style={{ display: 'flex', gap: '32px' }}>
              {['Learn', 'Use', 'Build', 'Participate', 'Research'].map(l => (
                <a key={l} href="#" style={{
                  color: '#F5F0E8', opacity: 0.85,
                  textDecoration: 'none', fontSize: '14px', fontWeight: 500,
                }}>
                  {l}
                </a>
              ))}
            </div>
            <button style={{
              backgroundColor: '#F5F0E8', color: '#1a1a0e',
              border: 'none', borderRadius: '999px',
              padding: '10px 24px', fontWeight: 700,
              fontSize: '13px', cursor: 'pointer',
              letterSpacing: '1px',
            }}>
              ADD MONEY
            </button>
          </nav>

          {/* Hero Body */}
          <div style={{
            position: 'relative', zIndex: 10,
            padding: '0 48px 48px',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            minHeight: '420px',
          }}>

            {/* Left - menu cards */}
            <div style={{
              display: 'flex', flexDirection: 'column',
              gap: '10px', minWidth: '200px', zIndex: 20,
            }}>
              {[
                { label: 'Personal', active: false },
                { label: 'Team', active: true },
                { label: 'Business', active: false },
              ].map(item => (
                <div key={item.label} style={{
                  display: 'flex', alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 18px',
                  borderRadius: '12px',
                  backgroundColor: item.active ? '#1a1a0e' : 'rgba(245,240,232,0.25)',
                  color: '#F5F0E8',
                  cursor: 'pointer',
                  fontWeight: 600,
                  fontSize: '14px',
                }}>
                  <span>{item.label}</span>
                  <span style={{ color: item.active ? '#E8590C' : '#F5F0E8' }}>→</span>
                </div>
              ))}
            </div>

            {/* Center - Big Title (behind monkey visually) */}
            <div style={{
              position: 'absolute',
              left: '50%', transform: 'translateX(-50%)',
              top: 0, width: '100%',
              textAlign: 'center',
              pointerEvents: 'none',
            }}>
              <h1 style={{
                fontFamily: 'Anton, sans-serif',
                fontSize: '160px',
                lineHeight: 0.9,
                color: '#F5F0E8',
                margin: 0,
                textTransform: 'uppercase',
                letterSpacing: '-2px',
                opacity: 0.95,
              }}>
                FUTURE OF
                <br />
                PRIVATE EQUITY
              </h1>
            </div>

            {/* Right - 2024 + tagline */}
            <div style={{ textAlign: 'right', zIndex: 20 }}>
              <p style={{
                fontFamily: 'Anton, sans-serif',
                fontSize: '96px',
                color: '#F5F0E8',
                lineHeight: 1,
                margin: 0,
              }}>
                2024
              </p>
              <p style={{
                color: 'rgba(245,240,232,0.75)',
                fontSize: '11px',
                letterSpacing: '3px',
                marginTop: '8px',
                textTransform: 'uppercase',
              }}>
                STEP INTO THE FUTURE OF FINANCE
              </p>
            </div>
          </div>
        </div>

        {/* ===== BELOW HERO ===== */}
        <div style={{
          maxWidth: '1280px', margin: '0 auto',
          padding: '64px 48px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '64px',
        }}>

          {/* ===== LEFT COLUMN ===== */}
          <div>

            {/* Big Heading */}
            <h2 style={{
              fontFamily: 'Anton, sans-serif',
              fontSize: '72px',
              lineHeight: 1,
              textTransform: 'uppercase',
              marginBottom: '48px',
            }}>
              WHY THE{' '}
              <span style={{ color: '#E8590C' }}>FUTURE</span>
              <br />
              OF PRIVATE EQUITY
              <br />
              MATTERS!
            </h2>

            {/* Two column: accordion + statement card */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>

              {/* Accordion */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {[
                  { title: 'Emerging Markets', desc: null },
                  { title: 'Technological Innovation', desc: 'Understand how AI, blockchain, and data analytics are revolutionizing private equity.' },
                  { title: 'Sustainable Investing', desc: null },
                ].map((f, i) => (
                  <div
                    key={f.title}
                    onClick={() => setOpenFeature(i)}
                    style={{
                      borderBottom: '1px solid rgba(26,26,14,0.15)',
                      padding: '14px 0',
                      cursor: 'pointer',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{
                        color: '#E8590C', fontWeight: 700,
                        fontSize: '18px', width: '16px',
                      }}>
                        {openFeature === i ? '−' : '+'}
                      </span>
                      <span style={{
                        fontWeight: 700, fontSize: '13px',
                        color: openFeature === i ? '#1a1a0e' : '#1a1a0e',
                      }}>
                        {f.title}
                      </span>
                    </div>
                    {openFeature === i && f.desc && (
                      <div style={{
                        backgroundColor: '#1a1a0e',
                        borderRadius: '12px',
                        padding: '12px 14px',
                        marginTop: '10px',
                        marginLeft: '26px',
                      }}>
                        <p style={{
                          color: '#F5F0E8', fontSize: '12px',
                          lineHeight: 1.6, margin: 0,
                        }}>
                          {f.desc}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Statement Card */}
              <div style={{
                backgroundColor: '#E8590C',
                borderRadius: '20px',
                padding: '24px',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute', inset: 0,
                  backgroundImage: 'repeating-conic-gradient(#f97316 0% 25%, transparent 0% 50%)',
                  backgroundSize: '30px 30px',
                  opacity: 0.1,
                }} />
                <div style={{ position: 'relative', zIndex: 10 }}>
                  <h4 style={{
                    fontFamily: 'Anton, sans-serif',
                    color: '#F5F0E8',
                    fontSize: '18px',
                    textTransform: 'uppercase',
                    marginBottom: '20px',
                    lineHeight: 1.2,
                  }}>
                    STATEMENT OF
                    <br />
                    CHANGES IN EQUITY
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{
                      backgroundColor: '#F5F0E8',
                      borderRadius: '8px',
                      padding: '10px 14px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                      <span style={{ fontSize: '11px', fontWeight: 700 }}>CLAIM WITH US</span>
                      <span style={{ fontSize: '11px', fontWeight: 700, color: '#16a34a' }}>18% ↑</span>
                    </div>
                    <div style={{
                      backgroundColor: '#F5F0E8',
                      borderRadius: '8px',
                      padding: '10px 14px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                      <span style={{ fontSize: '11px', fontWeight: 700 }}>INDIVIDUAL CLAIM</span>
                      <span style={{ fontSize: '11px', fontWeight: 700, color: '#dc2626' }}>4% ↓</span>
                    </div>
                  </div>
                  {/* Decorative curve */}
                  <div style={{ marginTop: '20px', borderTop: '1px solid rgba(245,240,232,0.3)', paddingTop: '12px' }}>
                    <div style={{
                      width: '14px', height: '14px',
                      borderRadius: '50%',
                      backgroundColor: '#F5F0E8',
                      marginLeft: 'auto',
                    }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <p style={{
              fontSize: '13px', color: 'rgba(26,26,14,0.55)',
              lineHeight: 1.8, marginTop: '32px', maxWidth: '480px',
            }}>
              The world of private equity is undergoing significant changes, driven by technological advancements, regulatory shifts, and new market opportunities. The traditional models are being disrupted, and those who adapt will reap the benefits. Explore how these changes can impact your investment strategies and what you need to know to thrive in this dynamic environment.
            </p>
          </div>

          {/* ===== RIGHT COLUMN ===== */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>

            {/* Investment Returns Card */}
            <div style={{
              backgroundColor: '#1a1a0e',
              borderRadius: '20px',
              padding: '32px',
              color: '#F5F0E8',
            }}>
              <h3 style={{
                fontFamily: 'Anton, sans-serif',
                fontSize: '32px',
                textTransform: 'uppercase',
                marginBottom: '12px',
                lineHeight: 1.1,
              }}>
                INVESTMENT
                <br />
                RETURNS
              </h3>
              <p style={{
                fontSize: '12px', color: 'rgba(245,240,232,0.45)',
                lineHeight: 1.7, marginBottom: '24px', maxWidth: '320px',
              }}>
                Despite the challenges of an increasingly competitive market, private equity continues to deliver strong returns. The average annual return on private equity has outperformed traditional asset classes.
              </p>

              {/* Stat cards */}
              <div style={{ display: 'flex', gap: '16px' }}>
                <div style={{
                  backgroundColor: '#F5F0E8', color: '#1a1a0e',
                  borderRadius: '14px', padding: '20px', flex: 1,
                }}>
                  <div style={{ display: 'flex', alignItems: 'flex-end', gap: '2px' }}>
                    <span style={{ fontFamily: 'Anton, sans-serif', fontSize: '48px', lineHeight: 1 }}>60</span>
                    <span style={{ fontSize: '18px', fontWeight: 700, marginBottom: '8px' }}>%</span>
                    <span style={{ fontSize: '11px', color: 'rgba(26,26,14,0.5)', marginBottom: '10px', marginLeft: '4px' }}>of Investor</span>
                  </div>
                  <div style={{ marginTop: '12px', display: 'flex', alignItems: 'flex-end', gap: '2px' }}>
                    <span style={{ fontFamily: 'Anton, sans-serif', fontSize: '36px', lineHeight: 1 }}>15</span>
                    <span style={{ fontSize: '16px', fontWeight: 700, marginBottom: '6px' }}>.8%</span>
                  </div>
                  <p style={{ fontSize: '11px', color: 'rgba(26,26,14,0.5)', margin: '4px 0 0' }}>Average Annual Returns</p>
                </div>

                <div style={{
                  backgroundColor: '#E8C547', color: '#1a1a0e',
                  borderRadius: '14px', padding: '20px', flex: 1,
                }}>
                  <p style={{ fontSize: '11px', fontWeight: 700, marginBottom: '8px' }}>USD</p>
                  <div style={{ display: 'flex', alignItems: 'flex-end', gap: '2px' }}>
                    <span style={{ fontFamily: 'Anton, sans-serif', fontSize: '56px', lineHeight: 1 }}>4</span>
                    <span style={{ fontSize: '22px', fontWeight: 700, marginBottom: '10px' }}>b</span>
                  </div>
                  <p style={{ fontSize: '11px', color: 'rgba(26,26,14,0.6)', marginTop: '8px' }}>Amount Invested</p>
                </div>
              </div>
            </div>

            {/* Numbers heading */}
            <h3 style={{
              fontFamily: 'Anton, sans-serif',
              fontSize: '48px',
              textTransform: 'uppercase',
              lineHeight: 1.05,
            }}>
              FUTURE OF PRIVATE{' '}
              <span style={{ color: '#E8590C' }}>+</span>
              <br />
              EQUITY BY THE NUMB
              <span style={{ color: 'rgba(26,26,14,0.15)' }}>ERS</span>
            </h3>

            {/* Feature highlight */}
            <div style={{ display: 'flex', gap: '16px' }}>
              <span style={{ color: '#E8590C', fontSize: '32px', lineHeight: 1, marginTop: '4px' }}>✦</span>
              <div>
                <h4 style={{ fontWeight: 900, fontSize: '20px', lineHeight: 1.3, marginBottom: '12px' }}>
                  Streamlining Investments with Cutting-Edge Technology
                </h4>
                <p style={{ fontSize: '13px', color: 'rgba(26,26,14,0.55)', lineHeight: 1.8 }}>
                  In the evolving world of private equity, technology is key to speeding up and simplifying investment processes. Through AI and advanced data analytics, we quickly identify the best opportunities with unmatched precision. Blockchain and smart contracts enhance security and transparency, reducing costs and eliminating barriers.
                </p>
              </div>
            </div>

            {/* Bottom rows */}
            <div style={{ borderTop: '1px solid rgba(26,26,14,0.12)', marginTop: '8px' }}>
              {[
                { title: 'NETWORKING OPPORTUNITIES', desc: 'Connect with industry peers and experts.', dark: false },
                { title: 'WEBINARS AND EVENTS', desc: 'Participate in exclusive events and live discussions.', dark: true },
                { title: 'NEWSLETTER', desc: 'Subscribe to receive the latest insights and updates directly to your inbox.', dark: false },
              ].map((row) => (
                <div
                  key={row.title}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    padding: '20px 20px',
                    borderBottom: '1px solid rgba(26,26,14,0.1)',
                    backgroundColor: row.dark ? '#1a1a0e' : 'transparent',
                    borderRadius: row.dark ? '12px' : '0',
                    marginBottom: row.dark ? '0' : '0',
                  }}
                >
                  <h5 style={{
                    fontFamily: 'Anton, sans-serif',
                    fontSize: '13px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    color: row.dark ? '#F5F0E8' : '#1a1a0e',
                    maxWidth: '160px',
                    lineHeight: 1.4,
                  }}>
                    {row.title}
                  </h5>
                  <p style={{
                    fontSize: '13px',
                    color: row.dark ? 'rgba(245,240,232,0.55)' : 'rgba(26,26,14,0.55)',
                    maxWidth: '200px',
                    lineHeight: 1.6,
                  }}>
                    {row.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Footer */}
        <footer style={{
          borderTop: '1px solid rgba(26,26,14,0.1)',
          padding: '24px 48px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1280px',
          margin: '0 auto',
        }}>
          <span style={{ fontFamily: 'Anton, sans-serif', fontSize: '20px' }}>FinFLO</span>
          <p style={{ fontSize: '12px', color: 'rgba(26,26,14,0.4)' }}>© 2026 FinFLO. All rights reserved.</p>
        </footer>

      </div>
    </>
  )
}