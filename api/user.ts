import axiosInstance from "@/lib/axios";

export async function getUser() {
  const { data } = await axiosInstance.get("/app/me");
  return data;
}

