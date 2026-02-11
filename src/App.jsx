import { useEffect } from "react"
import { supabase } from "./supabaseClient"

export default function App() {
  useEffect(() => {
    console.log("Supabase connected:", supabase)
  }, [])

  return (
    <div>
      Supabase connected! Check console.
    </div>
  )
}