import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Contact } from "../types/contact";
import { createContact } from "../api/contactApi";
import toast from "react-hot-toast";

export const useCreateContact = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: Omit<Contact, "id">) => createContact(data),
    onSuccess: () => {
      toast.success("Nouveau contact ajouté");
      queryClient.invalidateQueries({ queryKey: ["contacts"] });
    },
    onError: () => {
      toast.error("Erreur lors de la creation du contact");
    },
  });
};
