import { useState } from 'react'

const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY

const getWeatherTheme = (condition) => {
  const c = condition?.toLowerCase()
  if (c?.includes('clear') || c?.includes('sun'))
    return { bg: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)', emoji: '☀️' }
  if (c?.includes('cloud'))
    return { bg: 'linear-gradient(135deg, #89a4c7 0%, #b0bec5 100%)', emoji: '⛅' }
  if (c?.includes('rain') || c?.includes('drizzle'))
    return { bg: 'linear-gradient(135deg, #4e54c8 0%, #8f94fb 100%)', emoji: '🌧️' }
  if (c?.includes('thunder') || c?.includes('storm'))
    return { bg: 'linear-gradient(135deg, #232526 0%, #414345 100%)', emoji: '⛈️' }
  if (c?.includes('snow'))
    return { bg: 'linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)', emoji: '❄️' }
  if (c?.includes('mist') || c?.includes('fog') || c?.includes('haze'))
    return { bg: 'linear-gradient(135deg, #bdc3c7 0%, #2c3e50 100%)', emoji: '🌫️' }
  return { bg: 'linear-gradient(135deg, #43cea2 0%, #185a9d 100%)', emoji: '🌈' }
}

const getDayName = (dateStr) => {
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })
}

export default function Home() {
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState(null)
  const [forecast, setForecast] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchWeather = async () => {
    if (!city.trim()) return
    setLoading(true)
    setError('')
    setWeather(null)
    setForecast([])

    try {
      // Current weather
      const weatherRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      )
      if (!weatherRes.ok) throw new Error('City not found!')
      const weatherData = await weatherRes.json()

      // 5 day forecast
      const forecastRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      )
      const forecastData = await forecastRes.json()

      // Get one entry per day (every 8th item = 24hrs apart)
      const daily = forecastData.list.filter((_, index) => index % 8 === 0).slice(0, 5)

      setWeather(weatherData)
      setForecast(daily)
    } catch (err) {
      setError(err.message)
    }

    setLoading(false)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') fetchWeather()
  }

  const theme = weather ? getWeatherTheme(weather.weather[0].description) : null

  return (
    <div style={{
      minHeight: '100vh',
      background: theme ? theme.bg : 'linear-gradient(135deg, #43cea2 0%, #185a9d 100%)',
      transition: 'background 1s ease',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '40px 20px',
    }}>

      {/* Title */}
      <h1 style={{
        color: '#fff',
        fontSize: '36px',
        fontWeight: '700',
        marginBottom: '8px',
        textShadow: '0 2px 8px rgba(0,0,0,0.2)'
      }}>
        🌍 Weather App
      </h1>
      <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '32px' }}>
        Search any city to get live weather
      </p>

      {/* Search Box */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '32px' }}>
        <input
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={handleKeyDown}
          style={{
            padding: '12px 20px',
            borderRadius: '30px',
            border: 'none',
            fontSize: '16px',
            width: '280px',
            outline: 'none',
            boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
          }}
        />
        <button
          onClick={fetchWeather}
          disabled={loading}
          style={{
            padding: '12px 24px',
            borderRadius: '30px',
            border: 'none',
            backgroundColor: 'rgba(255,255,255,0.25)',
            color: '#fff',
            fontSize: '16px',
            cursor: 'pointer',
            fontWeight: '600',
            boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
            backdropFilter: 'blur(10px)',
          }}
        >
          {loading ? '...' : 'Search'}
        </button>
      </div>

      {/* Error */}
      {error && (
        <p style={{
          color: '#fff',
          backgroundColor: 'rgba(255,0,0,0.3)',
          padding: '10px 24px',
          borderRadius: '10px',
          marginBottom: '20px'
        }}>
          ❌ {error}
        </p>
      )}

      {/* Loading */}
      {loading && (
        <p style={{ color: '#fff', fontSize: '20px' }}>Loading... ⏳</p>
      )}

      {/* Current Weather Card */}
      {weather && !loading && (
        <div style={{
          backgroundColor: 'rgba(255,255,255,0.2)',
          backdropFilter: 'blur(15px)',
          borderRadius: '24px',
          padding: '36px 48px',
          textAlign: 'center',
          color: '#fff',
          boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
          marginBottom: '24px',
          minWidth: '320px',
        }}>
          <p style={{ fontSize: '64px', marginBottom: '8px' }}>{theme.emoji}</p>
          <h2 style={{ fontSize: '32px', fontWeight: '700' }}>
            {weather.name}, {weather.sys.country}
          </h2>
          <p style={{
            fontSize: '72px',
            fontWeight: '800',
            lineHeight: '1.1',
            margin: '8px 0'
          }}>
            {Math.round(weather.main.temp)}°C
          </p>
          <p style={{
            fontSize: '20px',
            textTransform: 'capitalize',
            marginBottom: '24px',
            opacity: '0.9'
          }}>
            {weather.weather[0].description}
          </p>

          {/* Stats Row */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '32px',
            flexWrap: 'wrap'
          }}>
            <div>
              <p style={{ fontSize: '13px', opacity: '0.75' }}>Feels Like</p>
              <p style={{ fontSize: '20px', fontWeight: '600' }}>
                {Math.round(weather.main.feels_like)}°C
              </p>
            </div>
            <div>
              <p style={{ fontSize: '13px', opacity: '0.75' }}>Humidity</p>
              <p style={{ fontSize: '20px', fontWeight: '600' }}>
                💧 {weather.main.humidity}%
              </p>
            </div>
            <div>
              <p style={{ fontSize: '13px', opacity: '0.75' }}>Wind Speed</p>
              <p style={{ fontSize: '20px', fontWeight: '600' }}>
                💨 {weather.wind.speed} m/s
              </p>
            </div>
            <div>
              <p style={{ fontSize: '13px', opacity: '0.75' }}>Condition</p>
              <p style={{ fontSize: '20px', fontWeight: '600' }}>
                {weather.weather[0].main}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 5 Day Forecast */}
      {forecast.length > 0 && !loading && (
        <div style={{
          backgroundColor: 'rgba(255,255,255,0.15)',
          backdropFilter: 'blur(15px)',
          borderRadius: '24px',
          padding: '24px 32px',
          color: '#fff',
          boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
          width: '100%',
          maxWidth: '600px',
        }}>
          <h3 style={{
            textAlign: 'center',
            marginBottom: '20px',
            fontSize: '18px',
            fontWeight: '600',
            opacity: '0.9'
          }}>
            📅 5-Day Forecast
          </h3>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '10px',
            flexWrap: 'wrap'
          }}>
            {forecast.map((day, index) => {
              const dayTheme = getWeatherTheme(day.weather[0].description)
              return (
                <div key={index} style={{
                  textAlign: 'center',
                  flex: '1',
                  minWidth: '80px',
                  backgroundColor: 'rgba(255,255,255,0.15)',
                  borderRadius: '16px',
                  padding: '12px 8px',
                }}>
                  <p style={{ fontSize: '11px', opacity: '0.8', marginBottom: '4px' }}>
                    {getDayName(day.dt_txt)}
                  </p>
                  <p style={{ fontSize: '28px', margin: '4px 0' }}>{dayTheme.emoji}</p>
                  <p style={{ fontSize: '18px', fontWeight: '700' }}>
                    {Math.round(day.main.temp)}°C
                  </p>
                  <p style={{ fontSize: '11px', opacity: '0.75', textTransform: 'capitalize' }}>
                    {day.weather[0].main}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}