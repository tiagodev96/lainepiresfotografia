// React
import { Route } from "react-router";
import { Routes } from "react-router-dom";

import { DefaultLayout } from "./layouts/DefaultLayout";

// Pages
import { Home } from "./pages/Home";
import { Gallery } from "./pages/Gallery";
import { Packs } from "./pages/Packs";
import { PhotoDisplay } from "./components/Gallery/PhotoDisplay";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/galeria/:essayCategory?" element={<Gallery />} />
        <Route path="/pacotes" element={<Packs />} />
        <Route path="/galeria/album/:essay" element={<PhotoDisplay />} />
      </Route>
    </Routes>
  );
}
