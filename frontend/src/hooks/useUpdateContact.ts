import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateContact } from "../api/contactApi";

export const useUpdateContact = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: any }) =>
      updateContact(id, data),

    onSuccess: (contact) => {
      queryClient.invalidateQueries({
        queryKey: ["contacts"],
      });

      queryClient.invalidateQueries({
        queryKey: ["contact", contact.id],
      });
    },
  });
};
