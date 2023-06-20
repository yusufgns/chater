import { Database } from "./supabase";

export type Post = Database["public"]["Tables"]["user"]["Row"]