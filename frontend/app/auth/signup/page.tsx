'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { AuthData } from '@/types/auth'


const SignupForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const router = useRouter();
  const [apiError, setApiError] = useState<Error | null>(null);

  const onSubmit = async (data: AuthData) => {
    try {
      const res = await axios.post('localhost:3000', data);
      router.push('/dashboard')
    }  catch (error) {
      setApiError(error as Error);
    }
  }

  // APIエラーがある場合、error.tsx(エラー画面)にリダイレクト
  if (apiError) throw apiError;
  
  return (
    <form>
    </form>
  )
}

export default SignupForm