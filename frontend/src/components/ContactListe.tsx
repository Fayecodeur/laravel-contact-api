import { Link } from "react-router-dom";
import type { Contact } from "../types/contact";
import { useDeleteContact } from "../hooks/useDeleteContact";

type ContactProps = {
  contact: Contact;
};

export default function ContactListe({
  contact: { id, name, phone, address },
}: ContactProps) {
  const { mutate: deleteContact, isPending } = useDeleteContact();

  const handleDelete = () => {
    const confirmDelete = window.confirm("Voulez-vous supprimer ce contact ?");

    if (confirmDelete) {
      deleteContact(id);
    }
  };

  return (
    <tr>
      <td>{name}</td>

      <td>{phone}</td>

      <td>{address}</td>

      <td>
        <Link className="btn btn-info btn-sm me-2" to={`/contacts/${id}`}>
          Voir
        </Link>

        <Link
          className="btn btn-warning btn-sm me-2"
          to={`/contacts/${id}/edit`}
        >
          Modifier
        </Link>

        <button
          disabled={isPending}
          onClick={handleDelete}
          className="btn btn-danger btn-sm"
        >
          {isPending ? "Suppression..." : "Supprimer"}
        </button>
      </td>
    </tr>
  );
}
