import { useQuery } from "@tanstack/react-query";
import { getContact } from "../api/contactApi";

export const useContacts = () => {
  return useQuery({
    queryKey: ["contacts"],
    queryFn: getContact,
  });
};
