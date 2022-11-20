import "./Style/App.scss";

import { Route, Routes } from "react-router-dom";
import {
  AboutUs,
  BulkPreview,
  BulkStep,
  Career,
  Choice,
  ComingSoon,
  ContactUs,
  Dashboard,
  EditBulk,
  Error,
  FAQ,
  Layout,
  Modify,
  Pricing,
  SinglePreview,
  Team,
  Templates,
  Terms,
} from "./pages";
// import Footer from './Component/Footer';

import Home from "./pages/Home";

function App() {
  return (
    <>
      <Layout>
        <main className="App">
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/comingsoon" element={<ComingSoon />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/templates" element={<Templates />} />
            <Route path="/career" element={<Career />} />
            <Route path="choice" element={<Choice />} />
            <Route path="modify" element={<Modify />} />
            <Route path="/team" element={<Team />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/single_preview" element={<SinglePreview />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/FAQ" element={<FAQ />} />
            <Route path="/bulk_preview" element={<BulkPreview />} />
            <Route path="/bulk_step" element={<BulkStep />} />
            <Route path="/edit_bulk" element={<EditBulk />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
      </Layout>
    </>
  );
}

export default App;
