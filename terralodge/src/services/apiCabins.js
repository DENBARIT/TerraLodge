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

export async function createEditCabin(newCabin,id){
  const hasImagePath=newCabin.image?.startsWith?.(supabaseUrl);
let imageName;
let imagePath;
if(hasImagePath){
  imagePath=newCabin.image;
}
if(!hasImagePath){  
   imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll("/", "");
    imagePath = `${supabaseUrl}/storage/v1/object/public/Cabins/${imageName}`;
}
  let query=supabase.from('Cabins');
if(!id){query=query.insert([
     {...newCabin,image:imagePath}
    ])}
    if(id){query=query.update({ ...newCabin,image:imagePath })
  .eq('id', id)
    }

const {data, error} = await query.select().single();
    if(error){
    console.error(error);
    throw new Error("Cabin could not be created");
     

  }

  if(hasImagePath)return data;

  // here we get the image from the newCabin object
  const {  error:storageError } = await supabase.storage.from('Cabins').upload(imageName, newCabin.image);
  if(storageError){
    if(!id){
    await supabase
      .from('Cabins')
      .delete()
      .eq('id', data.id);}
      if(id){
        console.error(storageError);
        throw new Error("Cabin image could not be uploaded while updating the cabin");
      }
    console.error(storageError);
    throw new Error("Cabin image could not be uploaded");
  }
  return data;
 }