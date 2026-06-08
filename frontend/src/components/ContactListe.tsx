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
  return (
    <tr>
      <td> {name} </td>
      <td> {phone} </td>
      <td> {address} </td>
      <td className="">
        <Link className="btn btn-info btn-sm me-2" to={`/contacts/${id}`}>
          Voir
        </Link>
        <button
          disabled={isPending}
          onClick={() => deleteContact(id)}
          className="btn btn-danger btn-sm"
        >
          {isPending ? "Suppression" : "Supprimer"}
        </button>
      </td>
    </tr>
  );
}
