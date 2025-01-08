import supabaseClient from "@/utils/supabase";

export async function getPost(token) {
  const supabase = await supabaseClient(token);

  const { data, error } = await supabase.from("posts").select("*,users(*)");

  if (error) {
    console.error("Error fetching companies", error);
    return null;
  }

  return data;
}
