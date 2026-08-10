// Konfigurasi Kredensial Supabase
const SUPABASE_URL = 'https://ydxffmteemrtaeenlaal.supabase.co'; 
const SUPABASE_ANON_KEY = 'sb_publishable_4u5SvTvyQN4Yi04A1xIQVA_XFdbryHW'; 

// Inisialisasi Supabase Client (Standardisasi untuk semua halaman)
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    auth: {
        storage: window.sessionStorage, 
        autoRefreshToken: true,
        persistSession: true
    }
});