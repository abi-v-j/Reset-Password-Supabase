import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wtqzqtnofaxczcpohdfw.supabase.co'; // Replace with your Supabase URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind0cXpxdG5vZmF4Y3pjcG9oZGZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzExNTcwODcsImV4cCI6MjA0NjczMzA4N30.9q09jTP1QuyrDNmIxSoafAnFbaQ70rhQhBBda-c4zGY'; // Replace with your Supabase Anon Key
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;