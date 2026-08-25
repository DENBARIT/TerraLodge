import  supabase  from "./supabase";

export async function getSettings() {
const  { data: Settings, error } = await supabase
  .from('Settings')
  .select('*').single();
  if(error){
    console.error(error);
    throw new Error("Settings could not be loaded");
  }
  return Settings;
}
export async function updateSettings(newSettings) {

const { data, error } = await supabase
  .from('Settings')
  .update({ other_column: 'otherValue' })
  .eq('some_column', 'someValue')
  .select()

  if(error){
    console.error(error);
    throw new Error("Settings could not be updated");
  }
  return data;
}