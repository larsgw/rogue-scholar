import { createClient } from "@supabase/supabase-js"

import { Database } from "@/types/supabase"

/*
  Create an admin client for supabase to manage the database
*/
export const supabaseAdmin = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY || ""
)
