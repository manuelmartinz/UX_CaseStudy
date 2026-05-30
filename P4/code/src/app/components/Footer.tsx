import imgInstagram from "../../imports/Instagram/964d76696a04a272e85d944b8e22e5763536a67f.png";
import imgFacebook from "../../imports/Facebook/a1394934f4b5f335debdfa58a2817c41b35c5440.png";
import imgX from "../../imports/X/911cd488e51e4cfbb3e594a48bf1f09d512c943a.png";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      {/* - max-w-6xl: Le da el extra de separación horizontal que buscabas para el efecto 150%.
        - py-12 md:py-10: Más altura vertical para que el contenedor acompañe al tamaño de los elementos.
        - px-10 xl:px-14: Mayor colchón en los bordes.
      */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 py-12 md:py-10 px-10 xl:px-14 w-full">
        {/* BOTÓN DE AYUDA: Tamaño imponente con paddings extra grandes */}
        <button className="bg-red-600 text-white px-14 py-4.5 rounded-full hover:bg-[#FF9E42] transition-colors font-['Bebas_Neue',sans-serif] text-[34px] sm:text-[38px] md:text-[42px] leading-none tracking-wide w-full sm:w-auto text-center shadow-lg transform hover:scale-105 duration-200">
          AYUDA
        </button>

        {/* ENLACES LEGALES: Texto grande y bien espaciado, estilo zoom */}
        <div className="font-['Montserrat',sans-serif] font-bold text-[15px] sm:text-[16px] md:text-[18px] text-black text-center leading-relaxed md:leading-[40px] tracking-wide order-3 md:order-2">
          <a
            href="#"
            className="hover:text-red-600 transition-colors"
          >
            AVISO LEGAL
          </a>
          <span className="mx-4 text-gray-300">·</span>
          <a
            href="#"
            className="hover:text-red-600 transition-colors"
          >
            POLÍTICA DE COOKIES
          </a>
          <span className="mx-4 text-gray-300">·</span>
          <br className="hidden sm:inline md:hidden" />{" "}
          <a
            href="#"
            className="hover:text-red-600 transition-colors"
          >
            CONDICIONES DE VENTA
          </a>
        </div>

        {/* REDES SOCIALES: Iconos masivos de 72px en escritorio para rematar el efecto macro */}
        <div className="flex items-center justify-center gap-7 order-2 md:order-3">
          <a
            href="#"
            className="hover:scale-110 transition-transform duration-200"
            aria-label="Instagram"
          >
            <img
              src={imgInstagram}
              alt="Instagram"
              className="w-[55px] h-[55px] sm:w-[65px] sm:h-[65px] md:w-[72px] md:h-[72px] object-contain"
            />
          </a>
          <a
            href="#"
            className="hover:scale-110 transition-transform duration-200"
            aria-label="X (Twitter)"
          >
            <img
              src={imgX}
              alt="X"
              className="w-[55px] h-[55px] sm:w-[65px] sm:h-[65px] md:w-[72px] md:h-[72px] object-contain"
            />
          </a>
          <a
            href="#"
            className="hover:scale-110 transition-transform duration-200"
            aria-label="Facebook"
          >
            <img
              src={imgFacebook}
              alt="Facebook"
              className="w-[55px] h-[55px] sm:w-[65px] sm:h-[65px] md:w-[72px] md:h-[72px] object-contain"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}