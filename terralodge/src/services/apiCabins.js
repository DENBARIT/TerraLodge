import supabase,{supabaseUrl} from "./supabase";
export async function getCabins() {


const { data, error } = await supabase
  .from('Cabins')
  .select('*');
  if(error){
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }
  return data;
}

export async function deleteCabin(id) {
const { error } = await supabase
  .from('Cabins')
  .delete()
  .eq('id', id);
  if(error){
    console.error(error);
    throw new Error("Cabin could not be deleted");
  } 




}

export async function createCabin(newCabin){
const imageName=`${Math.random()}-${newCabin.image.name}`.replaceAll("/","");
const imagePath=`${supabaseUrl}/storage/v1/object/public/Cabins/${imageName}`;
const { data, error } = await supabase
  .from('Cabins')
  .insert([
   {...newCabin,image:imagePath}
  ])
  .select()
  if(error){
    console.error(error);
    throw new Error("Cabin could not be created");
  }

  const {  error:storageError } = await supabase.storage.from('Cabins').upload(imageName, newCabin.image);
  if(storageError){
    await supabase
      .from('Cabins')
      .delete()
      .eq('id', data[0].id);
    console.error(storageError);
    throw new Error("Cabin image could not be uploaded");
  }
  return data;
 }