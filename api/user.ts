import { user } from "@/constants/dashboard";
import axiosInstance from "@/lib/axios";
import { User } from "@/types/user";

// export async function getUser() {
//   const { data } = await axiosInstance.get("/app/me");
//   return data;
// }

export async function getUser(): Promise<User> {
  return user;
}

