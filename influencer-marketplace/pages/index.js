import Head from 'next/head'
import Image from 'next/image'

const influencers = [
  {
    id: 1,
    name: 'Susan Adams',
    location: 'Barcelona, ESP',
    followers: '870k',
    category: 'Comedy',
    categoryColor: 'bg-green-100 text-green-700',
    price: '$5200',
    socials: ['instagram', 'youtube', 'tiktok'],
    image: '/influencers/susan.jpg',
  },
  {
    id: 2,
    name: 'Tamara Brown',
    location: 'Wellington, NZ',
    followers: '440k',
    category: 'Lifestyle',
    categoryColor: 'bg-purple-100 text-purple-700',
    price: '$2400',
    socials: ['instagram', 'tiktok'],
    image: '/influencers/tamara.jpg',
  },
  {
    id: 3,
    name: 'Jay Keller',
    location: 'New York, USA',
    followers: '315k',
    category: 'Fashion',
    categoryColor: 'bg-pink-100 text-pink-600',
    price: '$2150',
    socials: ['instagram', 'youtube', 'twitter'],
    image: '/influencers/jay.jpg',
  },
]

const SocialIcon = ({ type }) => {
  const icons = {
    instagram: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
    youtube: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
      </svg>
    ),
    tiktok: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
      </svg>
    ),
    twitter: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  }
  return <span className="text-gray-500 hover:text-gray-800 cursor-pointer transition-colors">{icons[type]}</span>
}

export default function Home() {
  return (
    <>
      <Head>
        <title>InfluenceHub — Find Influencers</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>

      <div className="min-h-screen bg-[#EBEBEB]" style={{ fontFamily: 'Inter, sans-serif' }}>
        <div className="max-w-[1200px] mx-auto p-4">

          {/* ===== MAIN CARD ===== */}
          <div className="bg-[#111111] rounded-3xl overflow-hidden">

            {/* NAVBAR */}
            <nav className="flex items-center justify-between px-8 py-5 border-b border-white/5">
              {/* Logo */}
              <div className="flex items-center gap-6">
                <div className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center">
                  <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
                    <path d="M4 6h16M4 10h16M4 14h8" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" />
                  </svg>
                </div>
                <div className="flex items-center gap-6 text-sm text-gray-400">
                  {['Home', 'Search', 'Messages', 'Community', 'Resources'].map((item, i) => (
                    <a key={item} href="#" className={`hover:text-white transition-colors ${i === 0 ? 'text-[#C8F135] border-b-2 border-[#C8F135] pb-1' : ''}`}>
                      {item}
                    </a>
                  ))}
                </div>
              </div>

              {/* Right side */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                  <span>London, UK</span>
                </div>
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white cursor-pointer">
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="3" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                  </svg>
                </div>
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white cursor-pointer">
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" />
                  </svg>
                </div>
                <div className="flex items-center gap-2 text-white text-sm font-medium">
                  <span>Evelyn Munoz</span>
                  {/* ↓ REPLACE THIS with your avatar image */}
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-orange-400 overflow-hidden">
                    <img src="/avatar.jpg" alt="avatar" className="w-full h-full object-cover" onError={(e) => { e.target.style.display = 'none' }} />
                  </div>
                </div>
              </div>
            </nav>

            {/* HERO CONTENT */}
            <div className="px-8 py-12 flex items-start justify-between gap-8">

              {/* Left - Heading + Search */}
              <div className="flex-1">
                <h1 className="text-white font-black leading-tight mb-8" style={{ fontSize: '64px', lineHeight: 1.05 }}>
                  Find{' '}
                  <span className="inline-flex items-center border-2 border-white/30 rounded-full px-4 py-1 mx-2" style={{ fontSize: '48px' }}>
                    <svg width="28" height="28" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24">
                      <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
                    </svg>
                  </span>
                  Influencers
                  <br />
                  {/* Avatar stack */}
                  <span className="inline-flex items-center mr-4">
                    {[
                      { bg: 'from-pink-400 to-rose-500', img: '/influencers/susan.jpg' },
                      { bg: 'from-gray-600 to-gray-800', img: '/influencers/jay.jpg' },
                      { bg: 'from-yellow-400 to-orange-400', img: '/influencers/tamara.jpg' },
                    ].map((av, i) => (
                      <div
                        key={i}
                        className={`w-12 h-12 rounded-full bg-gradient-to-br ${av.bg} border-2 border-[#111] overflow-hidden`}
                        style={{ marginLeft: i === 0 ? 0 : '-10px', zIndex: 3 - i }}
                      >
                        <img src={av.img} alt="" className="w-full h-full object-cover" onError={(e) => { e.target.style.display = 'none' }} />
                      </div>
                    ))}
                  </span>
                  to collaborate
                  <br />
                  with
                  {/* Search bar inline */}
                  <span className="inline-flex items-center bg-white/10 rounded-2xl px-4 py-2 ml-4 gap-2" style={{ verticalAlign: 'middle' }}>
                    <input
                      type="text"
                      placeholder="Search"
                      className="bg-transparent text-white text-2xl font-normal outline-none placeholder-gray-500 w-48"
                    />
                    <svg width="22" height="22" fill="none" stroke="#C8F135" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" /><path d="M19 10v2a7 7 0 01-14 0v-2M12 19v4M8 23h8" />
                    </svg>
                    <button className="w-10 h-10 bg-[#C8F135] rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg width="18" height="18" fill="none" stroke="#111" strokeWidth="2.5" viewBox="0 0 24 24">
                        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
                      </svg>
                    </button>
                  </span>
                </h1>
              </div>

              {/* Right - See how it's done card */}
              <div className="bg-[#C8F135] rounded-2xl p-8 min-w-[280px] min-h-[200px] relative overflow-hidden flex flex-col justify-between cursor-pointer hover:opacity-95 transition-opacity">
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 bg-[#111] rounded-full flex items-center justify-center">
                    <svg width="18" height="18" fill="none" stroke="#C8F135" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M7 17L17 7M7 7h10v10" />
                    </svg>
                  </div>
                </div>
                {/* Decorative circles */}
                <div className="absolute bottom-0 right-0 w-40 h-40 border-2 border-[#111]/20 rounded-full translate-x-1/4 translate-y-1/4" />
                <div className="absolute bottom-8 right-8 w-24 h-24 border-2 border-[#111]/20 rounded-full" />
                <div className="absolute top-4 left-4 w-10 h-10 bg-[#111] rounded-full flex items-center justify-center">
                  <svg width="18" height="18" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.9L15 14M3 8a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                  </svg>
                </div>
                <div />
                <h3 className="text-[#111] font-black text-3xl leading-tight relative z-10">
                  See how
                  <br />
                  it's done
                </h3>
              </div>
            </div>
          </div>

          {/* ===== INFLUENCER CARDS ===== */}
          <div className="bg-white rounded-3xl -mt-12 p-6 relative z-10">
            <div className="grid grid-cols-4 gap-4">

              {/* Influencer Cards */}
              {influencers.map((inf) => (
                <div key={inf.id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  {/* Photo */}
                  {/* ↓ REPLACE src with your actual image path */}
                  <div className="w-full h-56 bg-gray-200 overflow-hidden">
                    <img
                      src={inf.image}
                      alt={inf.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.parentElement.style.backgroundColor = '#e5e7eb'
                      }}
                    />
                  </div>

                  <div className="p-4">
                    {/* Name + followers */}
                    <div className="flex items-start justify-between mb-1">
                      <div className="flex items-center gap-1">
                        <span className="font-bold text-sm text-[#111111]">{inf.name}</span>
                        <svg width="14" height="14" fill="#3b82f6" viewBox="0 0 24 24">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-sm text-[#111111]">{inf.followers}</p>
                         <p className="text-xs text-[#111111]">Followers</p>
                      </div>
                    </div>

                    {/* Location */}
                    <p className="text-xs text-[#111111] mb-3">{inf.location}</p>

                    {/* Socials + category */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        {inf.socials.map(s => <SocialIcon key={s} type={s} />)}
                      </div>
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${inf.categoryColor}`}>
                        {inf.category}
                      </span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs text-[#111111]">Advertising Price</span>
                       <span className="font-black text-base text-[#111111]">{inf.price}</span>
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center gap-2">
                      <button className="w-8 h-8 border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                        <svg width="14" height="14" fill="none" stroke="#111111" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                        </svg>
                      </button>
                      <button className="w-8 h-8 border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                        <svg width="14" height="14" fill="none" stroke="#111111" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
                        </svg>
                      </button>
                      <button className="flex-1 bg-[#C8F135] text-[#111] text-sm font-bold py-2 rounded-xl hover:opacity-90 transition-opacity">
                        Send message
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Show All Card - Purple */}
              <div className="bg-[#A855F7] rounded-2xl flex flex-col items-center justify-between p-6 cursor-pointer hover:opacity-95 transition-opacity min-h-[400px]">
                <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center self-end">
                  <svg width="18" height="18" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>

                <div className="text-center">
                  <h3 className="text-white font-black text-4xl mb-1">Show All</h3>
                  <p className="text-white/70 text-sm">13 150 bloggers</p>
                </div>

                {/* Bottom avatars + sparkle */}
                <div className="relative w-full flex justify-center">
                  <span className="text-[#C8F135] text-4xl absolute -top-8 left-4">✦</span>
                  <div className="flex">
                    {[
                      { img: '/influencers/tamara.jpg', bg: 'from-pink-300 to-pink-500' },
                      { img: '/influencers/jay.jpg', bg: 'from-gray-400 to-gray-600' },
                      { img: '/influencers/susan.jpg', bg: 'from-blue-300 to-blue-500' },
                    ].map((av, i) => (
                      <div
                        key={i}
                        className={`w-12 h-12 rounded-full bg-gradient-to-br ${av.bg} border-2 border-[#A855F7] overflow-hidden`}
                        style={{ marginLeft: i === 0 ? 0 : '-10px' }}
                      >
                        <img src={av.img} alt="" className="w-full h-full object-cover" onError={(e) => { e.target.style.display = 'none' }} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  )
}