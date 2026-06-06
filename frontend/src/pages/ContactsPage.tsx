import ContactListe from "../components/ContactListe";
import { useContacts } from "../hooks/useContacts";
import Form from "../components/Form";

export default function ContactsPage() {
  const { data: contacts, isLoading, isError } = useContacts();

  if (isLoading) {
    return (
      <div className="container mt-5">
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Chargement...</span>
          </div>

          <p className="mt-2 text-muted">Chargement des contacts...</p>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger text-center">
          Une erreur est survenue lors du chargement.
        </div>
      </div>
    );
  }

  return (
    <main className="container mt-3">
      <h3 className="mb-2">Liste des contacts</h3>
      <Form />

      <div className="card shadow-sm">
        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0">
            <thead className="table-dark">
              <tr>
                <th>Nom</th>
                <th>Téléphone</th>
                <th>Adresse</th>
              </tr>
            </thead>

            <tbody>
              {contacts && contacts.length > 0 ? (
                contacts.map((contact) => (
                  <ContactListe key={contact.id} contact={contact} />
                ))
              ) : (
                <tr>
                  <td colSpan={3} className="text-center text-muted py-4">
                    Aucun contact trouvé
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
