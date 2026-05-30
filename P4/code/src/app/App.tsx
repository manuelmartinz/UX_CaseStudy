import { BrowserRouter, Routes, Route } from "react-router";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Inicio } from "./pages/Inicio";
import { Carta } from "./pages/Carta";
import { Restaurantes } from "./pages/Restaurantes";
import { SaboresConEncanto } from "./pages/SaboresConEncanto";
import { Participa } from "./pages/Participa";
import { Reserva } from "./pages/Reserva";

export default function App() {
  return (
    <BrowserRouter>
      {/* Cambiamos la fuente base a una sans-serif del sistema (muy legible para textos largos/personas mayores).
        La propiedad 'antialiased' mejora drásticamente el renderizado y nitidez de las letras en cualquier pantalla.
      */}
      <div className="min-h-screen flex flex-col bg-white font-sans antialiased text-gray-900">
        {/* Tu Header interno debería tener los botones del menú con texto claro y un tamaño generoso (text-lg o text-xl) */}
        <Header />

        {/* Contenedor principal flex-1 para asegurar que el footer siempre se vaya abajo */}
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/carta" element={<Carta />} />
          <Route
            path="/restaurantes"
            element={<Restaurantes />}
          />
          <Route
            path="/sabores-con-encanto"
            element={<SaboresConEncanto />}
          />
          <Route path="/participa" element={<Participa />} />
          <Route path="/reserva" element={<Reserva />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}