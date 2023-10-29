import React, { useState } from 'react'
import styles from './index.css'
export default function index() {
  const [number, setNumber] = useState(0)
  return (
    <div>
      <h1>首页 SSR {number}</h1>
      <button
        className={styles['beauty-button']}
        onClick={() => setNumber(number + 1)}
      >
        点击
      </button>
    </div>
  )
}
