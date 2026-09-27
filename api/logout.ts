import axiosInstance from "@/lib/axios";

export async function handleLogout() {
  const { data } = await axiosInstance.delete("");
  return data;
}

