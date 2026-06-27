/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { ProjectDetail } from "./pages/ProjectDetail";
import { Notes } from "./pages/Notes";
import { About } from "./pages/About";
import { Consultation } from "./pages/Consultation";
import { Contact } from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="proyek" element={<Projects />} />
          <Route path="proyek/:id" element={<ProjectDetail />} />
          <Route path="catatan" element={<Notes />} />
          <Route path="tentang" element={<About />} />
          <Route path="konsultasi" element={<Consultation />} />
          <Route path="kontak" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

