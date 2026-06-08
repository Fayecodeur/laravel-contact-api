import { useQuery } from "@tanstack/react-query";
import { getContacts } from "../api/contactApi";

export const useContacts = () => {
  return useQuery({
    queryKey: ["contacts"],
    queryFn: getContacts,
  });
};
