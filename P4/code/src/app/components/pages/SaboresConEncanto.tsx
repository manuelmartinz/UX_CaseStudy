import imgMg from "../../imports/Concurso/ab71a12bccd5f75e536d59a7ac7d178703516418.png";
import imgPigma from "../../imports/Concurso/1dc284f73e69d8d8e781f2a8857903882eb5ffa1.png";
import imgGluten from "../../imports/Concurso/3fbe42176af1af6857925d7d97a72fdbcdbbb002.png";
import imgRetro from "../../imports/Concurso/6db84912896cdf4aa955b82004ff4b68224f6812.png";
import imgHuevos from "../../imports/Concurso/fcfe3767690f01aa0317ab4a716af609527a8dc1.png";
import imgM30 from "../../imports/Concurso/b15824dd5587901bccd4d7c5be0833c714eb6884.png";
import imgInstagram from "../../imports/Concurso/964d76696a04a272e85d944b8e22e5763536a67f.png";
import imgX from "../../imports/Concurso/911cd488e51e4cfbb3e594a48bf1f09d512c943a.png";
import imgFacebook from "../../imports/Concurso/a1394934f4b5f335debdfa58a2817c41b35c5440.png";
import imgSabEnc from "../../imports/Concurso/bce33eb1d8e7f11096b8e958315fd396b73ece16.png";
import imgCrustaceos from "../../imports/Concurso/8ff8a1dc40d16bc4f4d81cd8b82c79f26561a754.png";
import imgPescado from "../../imports/Concurso/ccb64e4cb2c6773d0cf86ecd17ab81bde2c945f9.png";
import { Link } from "react-router";

export function SaboresConEncanto() {
  return (
    <main className="flex-1 bg-black">
      {/* SECCIÓN EXPANDIDA: py-24 px-8/xl:px-14 para mayor amplitud vertical y horizontal */}
      <section className="bg-black py-24 px-8 xl:px-14">
        {/* MODIFICADO: De max-w-7xl a max-w-[1550px] para ocupar todo el ancho visual sin dejar huecos negros */}
        <div className="max-w-[1550px] mx-auto">
          
          {/* TÍTULO PRINCIPAL: Más grande, con paddings generosos estilo macro */}
          <div className="mb-16">
            <div className="bg-red-600 rounded-[30px] md:rounded-[50px] inline-block px-10 py-5 max-w-full shadow-md">
              <p className="font-['Bebas_Neue',sans-serif] text-[38px] md:text-[54px] text-white leading-[normal] text-center md:text-left break-words tracking-wide">
                CREA SABORES CON ENCANTO
              </p>
            </div>
          </div>

          {/* SECCIÓN PRINCIPAL (Hamburguesa + Ingredientes + Redes) */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mb-24 relative">
            
            {/* Contenedor de Foto + Info */}
            <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-center md:items-start flex-1 w-full">
              
              {/* Foto de la hamburguesa principal */}
              <div className="flex-shrink-0 w-full md:w-auto flex flex-col items-center md:items-start">
                {/* Caja de nombre escalada a max-w-[600px] y texto md:text-[38px] */}
                <div className="bg-black border-3 border-white rounded-[27px] p-8 mb-8 w-full max-w-[600px]">
                  <p className="font-['Bebas_Neue',sans-serif] text-[28px] md:text-[38px] text-white leading-[normal] break-words tracking-wide">
                    NOMBRE:{" "}
                    <span className="block md:inline md:ml-4 text-red-500 md:text-white">
                      BURGUER TURQUESA EXPLOSIVA
                    </span>
                  </p>
                </div>
                {/* Contenedor de imagen gigante: md:w-[600px] y md:h-[480px] */}
                <div className="w-full max-w-[600px] md:w-[600px] h-[350px] md:h-[480px]">
                  <img
                    src={imgSabEnc}
                    alt="Hamburguesa ganadora"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Sección de Precio e Ingredientes */}
              <div className="flex-1 space-y-10 w-full">
                {/* Bloque Precio Gigante */}
                <div className="flex items-center gap-6">
                  <p className="font-['Bebas_Neue',sans-serif] text-[34px] md:text-[42px] text-white leading-[normal] tracking-wide">
                    PRECIO:
                  </p>
                  <div className="bg-red-600 rounded-[30px] px-8 py-3 shadow-md">
                    <p className="font-['Bebas_Neue',sans-serif] text-[34px] md:text-[42px] text-white leading-[normal]">
                      14 €
                    </p>
                  </div>
                </div>

                {/* Recuadro de Ingredientes de mayor formato */}
                <div className="bg-black border-3 border-white rounded-[30px] p-8 md:p-10 shadow-lg">
                  <p className="font-['Anton',sans-serif] text-[32px] md:text-[42px] text-white mb-6 md:mb-8 tracking-wide">
                    INGREDIENTES:
                  </p>
                  {/* Letras de ingredientes aumentadas de 23px a 28px */}
                  <div className="font-['Anton',sans-serif] text-[22px] md:text-[28px] text-white space-y-2 md:space-y-3 mb-10 tracking-wide">
                    <p>•Pan sésamo</p>
                    <p>•Carne</p>
                    <p>•Queso Brie</p>
                    <p>•Tomate</p>
                    <p>•Mayonesa</p>
                  </div>
                  {/* Iconos de alérgenos escalados a 80px */}
                  <div className="flex flex-wrap gap-5">
                    <img src={imgGluten} alt="Gluten" className="w-[60px] h-[60px] md:w-[80px] md:h-[80px]" />
                    <img src={imgHuevos} alt="Huevos" className="w-[60px] h-[60px] md:w-[80px] md:h-[80px]" />
                    <img src={imgPescado} alt="Pescado" className="w-[60px] h-[60px] md:w-[80px] md:h-[80px]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Redes Sociales Laterales: Iconos ampliados a 72px */}
            <div className="flex flex-row lg:flex-col gap-6 justify-center lg:ml-10 lg:self-center">
              <img src={imgInstagram} alt="Instagram" className="w-[60px] h-[60px] md:w-[72px] md:h-[72px] cursor-pointer hover:scale-110 transition-transform" />
              <img src={imgX} alt="X" className="w-[60px] h-[60px] md:w-[72px] md:h-[72px] cursor-pointer hover:scale-110 transition-transform" />
              <img src={imgFacebook} alt="Facebook" className="w-[60px] h-[60px] md:w-[72px] md:h-[72px] cursor-pointer hover:scale-110 transition-transform" />
            </div>
          </div>

          {/* Likes del creador: Textos e iconos aumentados */}
          <div className="flex flex-wrap items-center gap-8 md:gap-12 mb-16 border-b border-neutral-900 pb-8">
            <div className="flex items-center gap-4">
              <img
                src={imgMg}
                alt="Me gusta"
                className="w-[60px] h-[54px] md:w-[75px] md:h-[68px]"
              />
              <p className="font-['Bebas_Neue',sans-serif] text-[26px] md:text-[34px] text-red-600 tracking-wide">
                10 MIL
              </p>
            </div>
            <p className="font-['Anton',sans-serif] text-[24px] md:text-[34px] text-white tracking-wide">
              Creador: Manuel y Lola
            </p>
          </div>

          {/* Botón Participa Ya: Enorme y con gran relieve */}
          <div className="border-t border-b border-white py-12 mb-20">
            <div className="flex justify-center">
              <Link to="/participa" className="w-full sm:w-auto text-center">
                <button className="bg-red-600 rounded-[40px] px-14 sm:px-28 py-5 hover:bg-[#FF9E42] transition-colors cursor-pointer w-full sm:w-auto shadow-xl transform hover:scale-105 duration-200">
                  <p className="font-['Bebas_Neue',sans-serif] text-[28px] md:text-[38px] text-white leading-[normal] tracking-wider">
                    PARTICIPA YA
                  </p>
                </button>
              </Link>
            </div>
          </div>

          {/* Título de Galería */}
          <div className="mb-16">
            <div className="bg-orange-400 rounded-[60px] px-16 sm:px-24 py-6 inline-block shadow-md">
              <p className="font-['Bebas_Neue',sans-serif] text-[42px] md:text-[54px] text-white leading-[normal] tracking-wide">
                GALERÍA
              </p>
            </div>
          </div>

          {/* TARJETAS DE LA GALERÍA CON FLEX WRAP */}
          {/* gap aumentado a 10 para repartir simétricamente el espacio macro de las nuevas tarjetas */}
          <div className="flex flex-wrap justify-center lg:justify-between gap-10 mb-16">
            <BurgerVoteCard
              name="M-30"
              price="12 €"
              image={imgM30}
              votes="10 MIL"
              creator="Creador: Manuel y Lola"
              allergen1={imgGluten}
              allergen2={imgHuevos}
            />
            <BurgerVoteCard
              name="RETRO"
              price="12€"
              image={imgRetro}
              votes="10 MIL"
              creator="Creador: Manuel y Lola"
              allergen1={imgPescado}
              allergen2={imgGluten}
            />
            <BurgerVoteCard
              name="PIGMA"
              price="14 €"
              image={imgPigma}
              votes="10 MIL"
              creator="Creador: Manuel y Lola"
              allergen1={imgPescado}
              allergen2={imgCrustaceos}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

{/* =========================================================================
    COMPONENTE TARJETA ESCALADO (ZOOM 150%)
    - Aumentado el ancho base de sm:w-[340px] a sm:w-[420px] para rellenar los huecos negros.
    - Fuentes, imágenes e iconos un 150% más contundentes.
   ========================================================================= */}
function BurgerVoteCard({
  name,
  price,
  image,
  votes,
  creator,
  allergen1,
  allergen2,
}: {
  name: string;
  price: string;
  image: string;
  votes: string;
  creator: string;
  allergen1: string;
  allergen2: string;
}) {
  return (
    <div className="bg-black border-3 border-white rounded-[30px] p-8 hover:scale-105 transition-transform w-full sm:w-[420px] flex-shrink-0 shadow-lg">
      <div className="mb-6">
        <div className="bg-red-600 rounded-[30px] px-6 py-2.5 inline-block">
          <p className="font-['Bebas_Neue',sans-serif] text-[22px] md:text-[24px] text-white leading-[normal] tracking-wide">
            PRECIO: {price}
          </p>
        </div>
      </div>

      {/* h-[280px] para que las hamburguesas de la galería luzcan imponentes */}
      <div className="mb-8 h-[220px] md:h-[280px] flex items-center justify-center">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="flex items-center gap-3 mb-4">
        <img
          src={imgMg}
          alt="Me gusta"
          className="w-[32px] h-[28px] md:w-[38px] md:h-[34px]"
        />
        <p className="font-['Bebas_Neue',sans-serif] text-[22px] md:text-[26px] text-red-600 tracking-wide">
          {votes}
        </p>
      </div>

      <p className="font-['Anton',sans-serif] text-[22px] md:text-[26px] text-white mb-6 tracking-wide">
        {creator}
      </p>

      <div className="flex gap-5">
        <img src={allergen1} alt="" className="w-[55px] h-[55px] md:w-[70px] md:h-[70px]" />
        <img src={allergen2} alt="" className="w-[55px] h-[55px] md:w-[70px] md:h-[70px]" />
      </div>
    </div>
  );
}