import { Routes, Route } from "react-router-dom";
import ContactsPage from "./pages/ContactsPage";
import { Toaster } from "react-hot-toast";
import ContactShowPage from "./pages/ContactShowPage";
import ContactEditPage from "./pages/ContactEditPage";

function App() {
  return (
    <>
      <Toaster />

      <Routes>
        <Route path="/" element={<ContactsPage />} />

        <Route path="/contacts" element={<ContactsPage />} />

        <Route path="/contacts/:id" element={<ContactShowPage />} />

        <Route path="/contacts/:id/edit" element={<ContactEditPage />} />
      </Routes>
    </>
  );
}

export default App;
