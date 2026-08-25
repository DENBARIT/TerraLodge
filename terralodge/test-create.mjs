import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://asuuwxpourukkpotjcac.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzdXV3eHBvdXJ1a2twb3RqY2FjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODczMjUzOTYsImV4cCI6MjEwMjkwMTM5Nn0.asGbvWPL12FpM2VZ_Vc1oGuwjc8J4fLxyB7mYPGhdgo";
const supabase = createClient(supabaseUrl, supabaseKey);

// Reproduce createEditCabin(newCabin, id) from apiCabins.js with id=undefined (create path)
async function createEditCabin(newCabin, id) {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
  let imageName;
  let imagePath;
  if (hasImagePath) {
    imagePath = newCabin.image;
  }
  if (!hasImagePath) {
    imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll("/", "");
    imagePath = `${supabaseUrl}/storage/v1/object/public/Cabins/${imageName}`;
  }
  let query = supabase.from('Cabins');
  console.log("PATH TAKEN:", id ? "UPDATE" : "INSERT", "id=", JSON.stringify(id));
  if (!id) {
    query = query.insert([{ ...newCabin, image: imagePath }]);
  }
  if (id) {
    query = query.update({ ...newCabin, image: imagePath }).eq('id', id);
  }

  const { data, error } = await query.select().single();
  if (error) {
    console.error("QUERY ERROR:", error);
    throw new Error("Cabin could not be created");
  }
  console.log("QUERY SUCCESS, data.id=", data.id);
  return data;
}

const testCabin = {
  name: "NodeTest Cabin",
  maxCapacity: "4",
  regularPrice: "200",
  discount: "0",
  description: "test via node",
  image: { name: "test.jpg" }, // fake File-like object
};

try {
  const result = await createEditCabin(testCabin, undefined);
  console.log("RESULT:", result);
} catch (e) {
  console.error("CAUGHT:", e.message);
}
