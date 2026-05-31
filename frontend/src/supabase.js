import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://uybuqrizzxgncculygtq.supabase.co";
const supabaseAnonKey = "sb_publishable_MoSkt_7ujyuzaRSEpNSeyQ_5MDPGiD0";

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);