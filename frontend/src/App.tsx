import { Routes, Route } from "react-router-dom";
import ContactsPage from "./pages/ContactsPage";
import { Toaster } from "react-hot-toast";
import ContactShowPage from "./pages/ContactShowPage";

function App() {
  return (
    <>
      <Toaster />

      <Routes>
        <Route path="/" element={<ContactsPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path={"/contacts/:id"} element={<ContactShowPage />} />
      </Routes>
    </>
  );
}

export default App;
