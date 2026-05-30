import { X } from "lucide-react";
import imgImgLogo from "../../imports/ImgLogo/93174737d309b6acbbbbd1a28e9c9cb84091e691.png";
import { useState } from "react";
import { Link, useLocation } from "react-router";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: "Inicio", path: "/" },
    { name: "Carta", path: "/carta" },
    { name: "Restaurantes", path: "/restaurantes" },
    {
      name: "Sabores con Encanto",
      path: "/sabores-con-encanto",
    },
    { name: "MiGoiko", path: "/mi-goiko" },
  ];

  const handleMenuClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header
        className="bg-black text-white relative border-b border-neutral-900"
        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
      >
        {/* =========================================================================
            ¡CAMBIO CLAVE AQUÍ!
            Cambiado 'max-w-7xl mx-auto' por 'w-full px-4 sm:px-8 md:px-12 xl:px-16'.
            Esto elimina el tope de 1280px en ordenadores y estira los elementos 
            hacia los extremos absolutos de la pantalla.
           ========================================================================= */}
        <div className="w-full h-[90px] sm:h-[120px] flex items-center justify-between px-4 sm:px-8 md:px-12 xl:px-16">
          {/* CONTENEDOR IZQUIERDO: Ahora tocará casi el borde izquierdo en pantallas grandes */}
          <div className="flex items-center gap-4 sm:gap-6">
            {/* BOTÓN HAMBURGUESA PERSONALIZADO */}
            <button
              className="text-white hover:opacity-70 transition-opacity flex flex-col justify-center gap-[6px] min-w-[44px] min-h-[44px] focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Abrir menú"
            >
              <span className="w-9 h-[2px] bg-white rounded-full"></span>
              <span className="w-9 h-[2px] bg-white rounded-full"></span>
              <span className="w-9 h-[2px] bg-white rounded-full"></span>
            </button>

            {/* LOGO GOIKO */}
            <Link
              to="/"
              className="flex items-center transition-opacity hover:opacity-90"
            >
              <img
                src={imgImgLogo}
                alt="GOIKO"
                className="h-[60px] w-auto sm:h-[85px] md:h-[95px] object-contain cursor-pointer"
              />
            </Link>
          </div>

          {/* CONTENEDOR DE ACCIONES: Ahora tocará casi el borde derecho en pantallas grandes */}
          <div className="flex items-center gap-2 sm:gap-4 md:gap-6 justify-end">
            <button className="border-2 sm:border-3 border-white text-white px-3 py-1.5 sm:px-5 sm:py-2 rounded-full hover:bg-white hover:text-black transition-colors text-[16px] sm:text-[24px] md:text-[30px] lg:text-[32px] leading-none tracking-wide whitespace-nowrap">
              HACER PEDIDO
            </button>
            <Link to="/reserva">
              <button className="bg-red-600 text-white px-4 py-2 sm:px-6 sm:py-2.5 rounded-full hover:bg-[#FF9E42] transition-colors text-[16px] sm:text-[24px] md:text-[30px] lg:text-[32px] leading-none tracking-wide whitespace-nowrap">
                RESERVAR
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* OVERLAY / FONDO OSCURO */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/70 z-50"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* MENÚ LATERAL DESPLEGABLE */}
      <nav
        className={`fixed top-0 left-0 h-full w-[280px] sm:w-80 bg-black z-50 transform transition-transform duration-300 ease-in-out shadow-2xl ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
      >
        <div className="p-6 h-full flex flex-col">
          {/* Cabecera del menú lateral */}
          <div className="flex items-center justify-between mb-10 pb-4 border-b border-neutral-900">
            <img
              src={imgImgLogo}
              alt="GOIKO"
              className="h-16 w-auto object-contain"
            />
            <button
              className="text-white hover:text-red-500 transition-colors p-2 flex items-center justify-center min-w-[44px] min-h-[44px]"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Cerrar menú"
            >
              <X size={32} strokeWidth={2.5} />
            </button>
          </div>

          {/* Lista de enlaces */}
          <ul className="space-y-3 flex-1 overflow-y-auto">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  onClick={handleMenuClick}
                  className={`block text-2xl sm:text-3xl tracking-wide py-3 px-4 rounded-xl transition-all ${
                    location.pathname === item.path
                      ? "text-red-600 bg-neutral-900 font-bold"
                      : "text-white hover:text-red-500 hover:bg-neutral-900/50"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}