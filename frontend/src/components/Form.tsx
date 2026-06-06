import { useForm } from "react-hook-form";
import { contactSchema, type contactFormData } from "../schemas/contactSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateContact } from "../hooks/useCreateContact";

export default function Form() {
  const createContact = useCreateContact();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<contactFormData>({
    resolver: zodResolver(contactSchema),
  });
  const onSubmit = (data: contactFormData) => {
    createContact.mutate(data, {
      onSuccess: () => {
        reset();
      },
    });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="row g-2 mb-4">
      <div className="col-md-3">
        <input
          type="text"
          className="form-control"
          placeholder="Nom"
          {...register("name")}
        />
        <small className="text-danger">{errors.name?.message}</small>
      </div>

      <div className="col-md-3">
        <input
          type="text"
          className="form-control"
          placeholder="Téléphone"
          {...register("phone")}
        />
        <small className="text-danger">{errors.phone?.message}</small>
      </div>

      <div className="col-md-4">
        <input
          type="text"
          className="form-control"
          placeholder="Adresse"
          {...register("address")}
        />
        <small className="text-danger">{errors.address?.message}</small>
      </div>

      <div className="col-md-2">
        <button type="submit" className="btn btn-primary w-100">
          Ajouter
        </button>
      </div>
    </form>
  );
}
