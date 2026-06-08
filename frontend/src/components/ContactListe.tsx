import { Link } from "react-router-dom";
import type { Contact } from "../types/contact";

type ContactProps = {
  contact: Contact;
};
export default function ContactListe({
  contact: { id, name, phone, address },
}: ContactProps) {
  return (
    <tr>
      <td> {name} </td>
      <td> {phone} </td>
      <td> {address} </td>
      <td>
        <Link className="btn btn-info btn-sm" to={`/contacts/${id}`}>
          Voir
        </Link>
      </td>
    </tr>
  );
}
