'use client'

import { useState } from 'react'

export default function Page() {
  const [count, setCount] = useState(1)

  return (
    <div>
      This is a counter
      <p>
        count:
        {count}
      </p>
      <button onClick={() => setCount(count + 1)}>increment count</button>
    </div>
  )
}
