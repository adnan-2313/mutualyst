import supabaseClient, { supabaseUrl } from "@/utils/supabase";

export async function addNewUser(token, _, UserData) {
  const supabase = await supabaseClient(token);

  const { data, error } = await supabase
    .from("users")
    .insert([UserData])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Error Creating Job");
  }

  return data;
}
