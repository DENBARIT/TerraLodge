import {createClient} from '@supabase/supabase-js'
export const supabaseUrl = "https://asuuwxpourukkpotjcac.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzdXV3eHBvdXJ1a2twb3RqY2FjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODczMjUzOTYsImV4cCI6MjEwMjkwMTM5Nn0.asGbvWPL12FpM2VZ_Vc1oGuwjc8J4fLxyB7mYPGhdgo";
const supabase=createClient(supabaseUrl, supabaseKey);
export default supabase;