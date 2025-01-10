export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          name: string | null
          image: string | null
          created_at: string
        }
        Insert: {
          id?: string
          email: string
          name?: string | null
          image?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          email?: string
          name?: string | null
          image?: string | null
          created_at?: string
        }
      }
      // Add other tables as needed
    }
  }
} 