import React, { useState, useEffect } from 'react'

const UPDATE_CYCLE = 1000

const KEY_LOCALE = 'KEY_LOCALE'

enum Locale {
  US = 'en-US',
  JP = 'ja-JP',
}

const getLocaleFromString = (text: string) => {
  switch (text) {
    case Locale.US:
      return Locale.US
    case Locale.JP:
      return Locale.JP
    default:
      return Locale.US
  }
}

export const Clock = () => {
  const [timeStamp, setTimeStamp] = useState(new Date())
  const [locale, setLocale] = useState(Locale.US)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeStamp(new Date())
    }, UPDATE_CYCLE)

    return () => {
      clearInterval(timer)
    }
  }, [])

  useEffect(() => {
    const savedLocale = localStorage.getItem(KEY_LOCALE)

    if (savedLocale !== null) {
      setLocale(getLocaleFromString(savedLocale))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(KEY_LOCALE, locale)
  }, [locale])

  return (
    <div>
      <p>
        <span id="curent-time-label">現在時刻</span>
        <span>:{timeStamp.toLocaleString(locale)}</span>
      </p>

      <select
        value={locale}
        onChange={(e) => setLocale(getLocaleFromString(e.target.value))}
      >
        <option value="en-US">en-US</option>
        <option value="ja-JP">ja-JP</option>
      </select>
    </div>
  )
}

export default Clock
