import supabase from './supabase'

export const uploadToSupabase = async (file: Buffer, filename: string) => {
  const { data, error } = await supabase.storage
    .from(process.env.SUPABASE_BUCKET!)
    .upload(`uploads/${filename}`, file, {
      cacheControl: '3600',
      upsert: false,
    })

  if (error) {
    throw new Error(`Supabase Storage Error: ${error.message}`)
  }

  return data.path
}
