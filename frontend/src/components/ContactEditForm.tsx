import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, Link } from "react-router-dom";

import { useUpdateContact } from "../hooks/useUpdateContact";
import { contactSchema, type contactFormData } from "../schemas/contactSchema";
import type { Contact } from "../types/contact";
import toast from "react-hot-toast";

type Props = {
  contact: Contact;
};

export default function ContactEditForm({ contact }: Props) {
  const updateContact = useUpdateContact();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<contactFormData>({
    resolver: zodResolver(contactSchema),
  });

  // remplir form
  useEffect(() => {
    reset({
      name: contact.name,
      phone: contact.phone,
      address: contact.address ?? "",
    });
  }, [contact, reset]);

  const navigate = useNavigate();

  const onSubmit = (data: contactFormData) => {
    updateContact.mutate(
      {
        id: contact.id,
        data,
      },
      {
        onSuccess: () => {
          toast.success("Contact modifié avec succès");
          navigate("/");
        },

        onError: () => {
          toast.error("Erreur lors de la modification");
        },
      },
    );
  };

  return (
    <div className="container mt-4 d-flex justify-content-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="card shadow-sm p-4 w-100"
        style={{ maxWidth: "500px" }}
      >
        <h5 className="mb-3 text-center">Modifier contact</h5>

        <div className="mb-3">
          <label className="form-label">Nom</label>
          <input className="form-control" {...register("name")} />
          <small className="text-danger">{errors.name?.message}</small>
        </div>

        <div className="mb-3">
          <label className="form-label">Téléphone</label>
          <input className="form-control" {...register("phone")} />
          <small className="text-danger">{errors.phone?.message}</small>
        </div>

        <div className="mb-3">
          <label className="form-label">Adresse</label>
          <input className="form-control" {...register("address")} />
          <small className="text-danger">{errors.address?.message}</small>
        </div>

        <div className="d-flex justify-content-between">
          <Link to="/" className="btn btn-secondary">
            Retour
          </Link>

          <button
            className="btn btn-warning"
            type="submit"
            disabled={updateContact.isPending}
          >
            {updateContact.isPending ? "Modification..." : "Modifier"}
          </button>
        </div>
      </form>
    </div>
  );
}
