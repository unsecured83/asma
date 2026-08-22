// Konfigurasi Kredensial Supabase
const SUPABASE_URL = 'https://hgbgghngbvxyqwugwhrw.supabase.co'; 
const SUPABASE_ANON_KEY = 'sb_publishable_31-0APFdEWMH3ob-Lm0nZA_NfAxssDX';

// Inisialisasi Supabase Client (Standardisasi untuk semua halaman)
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    auth: {
        storage: window.sessionStorage, 
        autoRefreshToken: true,
        persistSession: true
    }
});
