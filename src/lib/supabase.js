import { createClient } from '@supabase/supabase-js'

const getMissingSupabaseEnvVars = () => {
  const missing = []

  if (!import.meta.env.VITE_SUPABASE_URL) {
    missing.push('VITE_SUPABASE_URL')
  }

  if (!import.meta.env.VITE_SUPABASE_ANON_KEY) {
    missing.push('VITE_SUPABASE_ANON_KEY')
  }

  return missing
}

const getSupabaseClient = () => {
  const missing = getMissingSupabaseEnvVars()

  if (missing.length > 0) {
    const message = `Missing Supabase environment variable(s): ${missing.join(', ')}`
    console.error(message)
    throw new Error(message)
  }

  return createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true,
    },
  })
}

export const supabase = (() => {
  try {
    return getSupabaseClient()
  } catch (error) {
    console.error('Supabase client failed to initialize:', error.message)
    return null
  }
})()
