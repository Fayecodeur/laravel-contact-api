import { useQuery } from "@tanstack/react-query";
import { getContactById } from "../api/contactApi";

export const useContact = (id: number) => {
  return useQuery({
    queryKey: ["contact", id],
    queryFn: () => getContactById(id),
  });
};
