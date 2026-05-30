import imgImage21 from "../../imports/Carta/e0f49610b736fbe1a15d07ac0d345cfb4ce50af4.png";
import imgHambKevin from "../../imports/HambKevin/e1a42c6143f8fa1e09ac6536607fddbf6a0823f0.png";
import imgPanHamb from "../../imports/MainPage/26652b974a344f713dc4933b4b013d230df55ccf.png";
import { Link } from "react-router";

export function Inicio() {
  return (
    <main className="flex-1 bg-black">
      {/* SECCIÓN 1: PORTADA "CARTA" OPTIMIZADA */}
      <section className="relative h-[calc(100vh-90px)] md:h-[calc(100vh-120px)] w-full overflow-hidden">
        {/* Fondo optimizado */}
        <div className="absolute inset-0 w-full h-full">
          <img
            alt="Fondo Carta"
            className="w-full h-full object-cover object-center"
            src={imgImage21}
          />
        </div>

        {/* Texto "CARTA": Centrado absoluto sobre la foto */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <Link
            to="/carta"
            className="cursor-pointer hover:opacity-90 transition-opacity px-4 w-full text-center"
          >
            <h1 className="font-['Anton',sans-serif] text-[90px] sm:text-[140px] md:text-[180px] lg:text-[210px] text-white leading-none tracking-wide drop-shadow-2xl select-none">
              CARTA
            </h1>
          </Link>
        </div>
      </section>

      {/* SECCIÓN 2: DESCRIPCIÓN DEL CONCURSO (CON EFECTO ZOOM 150%) */}
      {/* py-24 da más aire vertical y px-8/xl:px-14 ensancha el contenido en los bordes */}
      <section className="bg-black py-24 px-8 xl:px-14 relative min-h-[612px]">
        {/* MODIFICADO: Cambiado max-w-6xl a max-w-[1450px] para estirar todo hacia los lados y eliminar los márgenes negros grandes */}
        <div className="max-w-[1450px] mx-auto">
          {/* Botón de título adaptable y más grande */}
          <div className="mb-20 text-center md:text-left">
            <Link
              to="/sabores-con-encanto"
              className="inline-block max-w-full"
            >
              {/* padding aumentado a px-14 py-5 y texto escalado a md:text-[54px] */}
              <div className="bg-red-600 rounded-[30px] md:rounded-[50px] px-8 md:px-14 py-5 cursor-pointer hover:bg-[#FF9E42] transition-colors shadow-lg">
                <p className="font-['Bebas_Neue',sans-serif] text-[32px] sm:text-[42px] md:text-[54px] text-white leading-[normal] text-center break-words tracking-wide">
                  CREA SABORES CON ENCANTO
                </p>
              </div>
            </Link>
          </div>

          {/* GRID RESPONSIVO: Se aumenta el gap-x-20 para distanciar armónicamente el contenido ensanchado */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-20 md:gap-y-28 items-center">
            {/* Bloque Texto 1: Escalado a md:text-[42px] con un interlineado potente md:leading-[62px] */}
            <div className="text-white text-center md:text-right order-1">
              <p className="font-['Montserrat',sans-serif] font-medium text-[22px] sm:text-[32px] md:text-[38px] lg:text-[42px] leading-relaxed md:leading-[62px] tracking-wide">
                Crea tu propia hamburguesa y participa en este
                concurso en el que podrás ganar un mes de
                hamburguesas ¡¡¡ GRATIS !!!
              </p>
            </div>

            {/* Bloque Imagen 1 (Hamburguesa Gourmet): Caja contenedora ampliada */}
            <div className="flex items-center justify-center order-2 w-full">
              {/* MODIFICADO: max-w-[650px] y altura md:h-[420px] para que la foto se vea enorme */}
              <div className="w-full max-w-[650px] h-[260px] sm:h-[350px] md:h-[420px] overflow-hidden relative rounded-2xl transform hover:scale-102 transition-transform duration-300">
                <img
                  src={imgHambKevin}
                  alt="Hamburguesa gourmet"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Bloque Imagen 2 (Medio Pan de Hamburguesa): Caja contenedora ampliada */}
            <div className="flex items-center justify-center order-4 md:order-3 w-full">
              {/* MODIFICADO: max-w-[400px] y h-[400px] para que el pan acompañe el tamaño gigante general */}
              <div className="w-full max-w-[400px] h-[300px] sm:h-[380px] md:h-[400px] flex items-center justify-center overflow-hidden">
                <div className="-rotate-90 w-full h-full flex items-center justify-center">
                  <img
                    alt="Pan de hamburguesa"
                    className="max-w-full max-h-full object-contain"
                    src={imgPanHamb}
                  />
                </div>
              </div>
            </div>

            {/* Bloque Texto 2: Escalado idéntico al bloque 1 para mantener la simetría */}
            <div className="text-white text-center md:text-left order-3 md:order-4">
              <p className="font-['Montserrat',sans-serif] font-medium text-[22px] sm:text-[32px] md:text-[38px] lg:text-[42px] leading-relaxed md:leading-[62px] tracking-wide">
                Elige tus ingredientes favoritos, sé creativo y
                vota tu hamburguesa en la galería de
                hamburguesas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}