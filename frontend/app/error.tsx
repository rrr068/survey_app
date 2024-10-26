'use client'

import { useEffect } from 'react'
import { ErrorProps } from '@/types/error';

const Error = ({ error, reset }: ErrorProps) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Error</h2>
      <p>{error.message}</p>
      <button onClick={() => reset()}>再読み込み</button>
    </div>
  )
}

export default Error