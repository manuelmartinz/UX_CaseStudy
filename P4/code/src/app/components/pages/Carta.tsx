import { useState } from "react";
import { Euro, AlertCircle, Flame } from "lucide-react";

// Importaciones de imágenes
import imgImage9 from "../../imports/CartaHamb/826ec1f6c7e38d0efc1a071a699051fbcdf18221.png";
import imgGluten from "../../imports/CartaHamb/3fbe42176af1af6857925d7d97a72fdbcdbbb002.png";
import imgHuevos from "../../imports/CartaHamb/fcfe3767690f01aa0317ab4a716af609527a8dc1.png";
import imgM30 from "../../imports/CartaHamb/b15824dd5587901bccd4d7c5be0833c714eb6884.png";
import imgPigma from "../../imports/CartaHamb/1dc284f73e69d8d8e781f2a8857903882eb5ffa1.png";
import imgCrustaceos from "../../imports/CartaHamb/8ff8a1dc40d16bc4f4d81cd8b82c79f26561a754.png";
import imgKevinC from "../../imports/CartaHamb/a0032d41b7a7dc50a68df748ef2e2f86ba06450e.png";
import imgFondo from "../../imports/image-7.png";

// ==========================================
// COMPONENTE: BurgerCard (Tarjeta de Producto)
// ==========================================
interface BurgerCardProps {
  name: string;
  price: string;
  image: string;
  allergen1: string;
  allergen2: string;
}

export function BurgerCard({
  name,
  price,
  image,
  allergen1,
  allergen2,
}: BurgerCardProps) {
  return (
    <div className="bg-black rounded-[24px] p-5 flex flex-col justify-between w-full max-w-[360px] mx-auto transition-transform hover:scale-[1.02] duration-300 shadow-xl">
      {/* Contenedor de la Imagen */}
      <div className="w-full h-[240px] sm:h-[270px] rounded-[16px] overflow-hidden bg-neutral-900">
        <img
          alt={name}
          className="w-full h-full object-cover object-center"
          src={image}
        />
      </div>

      {/* Info del producto: Nombre, Precio y Alérgenos */}
      <div className="mt-5 flex flex-col gap-2">
        <h3 className="font-['Bebas_Neue',sans-serif] text-[28px] sm:text-[32px] text-white tracking-wide leading-tight uppercase truncate">
          {name}
        </h3>

        <div className="flex items-center justify-between mt-2">
          {/* Precio */}
          <p className="font-['Bebas_Neue',sans-serif] text-[38px] sm:text-[46px] text-white leading-none">
            {price}
          </p>

          {/* Alérgenos */}
          <div className="flex gap-3">
            <img
              alt="Alérgeno 1"
              className="w-[45px] h-[45px] sm:w-[52px] sm:h-[52px] object-contain"
              src={allergen1}
            />
            <img
              alt="Alérgeno 2"
              className="w-[45px] h-[45px] sm:w-[52px] sm:h-[52px] object-contain"
              src={allergen2}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// COMPONENTE PRINCIPAL: Carta
// ==========================================
export function Carta() {
  const [showFilters, setShowFilters] = useState(false);
  const [priceFilter, setPriceFilter] = useState<number[]>([]);
  const [allergenFilter, setAllergenFilter] = useState<
    string[]
  >([]);
  const [spiceFilter, setSpiceFilter] = useState<string>("");

  const togglePrice = (level: number) => {
    if (priceFilter.includes(level)) {
      setPriceFilter(priceFilter.filter((p) => p !== level));
    } else {
      setPriceFilter([...priceFilter, level]);
    }
  };

  const toggleAllergen = (allergen: string) => {
    if (allergenFilter.includes(allergen)) {
      setAllergenFilter(
        allergenFilter.filter((a) => a !== allergen),
      );
    } else {
      setAllergenFilter([...allergenFilter, allergen]);
    }
  };

  return (
    <main className="flex-1 bg-white">
      {/* SECCIÓN IMAGEN DE FONDO DECORATIVA */}
      <section
        className="relative h-[220px] sm:h-[300px] md:h-[348px] overflow-hidden"
        style={{
          backgroundImage: `url(${imgFondo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
      </section>

      {/* CONTENEDOR DE PRODUCTOS Y FILTROS */}
      <section className="py-12 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto">
        {/* Cabecera de la sección */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          <div className="bg-red-600 rounded-[60px] px-8 sm:px-12 py-3 w-full sm:w-auto text-center">
            <p className="font-['Bebas_Neue',sans-serif] text-[28px] sm:text-[36px] text-white leading-[normal] whitespace-nowrap">
              NUESTRAS BURGUERS:
            </p>
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="bg-black rounded-[30px] px-6 py-3 flex items-center justify-center gap-2 cursor-pointer hover:opacity-90 transition-opacity w-full sm:w-auto"
          >
            <p className="font-['Bebas_Neue',sans-serif] text-[20px] text-white leading-[normal]">
              FILTROS
            </p>
            <img
              alt=""
              className="w-[24px] h-auto"
              src={imgImage9}
            />
          </button>
        </div>

        {/* Panel Desplegable de Filtros */}
        {showFilters && (
          <div className="mb-10 bg-black rounded-[30px] p-6 sm:p-8 transition-all">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              {/* Filtro Precio */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <Euro
                    className="w-5 h-5 text-white"
                    strokeWidth={2.5}
                  />
                  <p className="font-['Bebas_Neue',sans-serif] text-[24px] text-white leading-[normal]">
                    PRECIO
                  </p>
                </div>
                <div className="flex gap-3">
                  {[1, 2, 3].map((level) => (
                    <button
                      key={level}
                      onClick={() => togglePrice(level)}
                      className={`rounded-full px-6 py-2 border-2 transition-all ${
                        priceFilter.includes(level)
                          ? "bg-red-600 border-red-600 text-white"
                          : "bg-transparent border-white text-white hover:bg-white/10"
                      }`}
                    >
                      <p className="font-['Bebas_Neue',sans-serif] text-[20px] leading-[normal]">
                        {"€".repeat(level)}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Filtro Alérgenos */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <AlertCircle
                    className="w-5 h-5 text-white"
                    strokeWidth={2.5}
                  />
                  <p className="font-['Bebas_Neue',sans-serif] text-[24px] text-white leading-[normal]">
                    ALÉRGENOS
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {[
                    "gluten",
                    "lactosa",
                    "frutos secos",
                    "huevo",
                    "soja",
                  ].map((allergen) => (
                    <button
                      key={allergen}
                      onClick={() => toggleAllergen(allergen)}
                      className={`rounded-full px-5 py-2 border-2 transition-all ${
                        allergenFilter.includes(allergen)
                          ? "bg-red-600 border-red-600 text-white"
                          : "bg-transparent border-white text-white hover:bg-white/10"
                      }`}
                    >
                      <p className="font-['Bebas_Neue',sans-serif] text-[16px] leading-[normal] uppercase">
                        {allergen}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Filtro Picante */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <Flame
                    className="w-5 h-5 text-white"
                    strokeWidth={2.5}
                  />
                  <p className="font-['Bebas_Neue',sans-serif] text-[24px] text-white leading-[normal]">
                    PICANTE
                  </p>
                </div>
                <div className="flex gap-3">
                  {[
                    { value: "nada", label: "NADA" },
                    { value: "medio", label: "MEDIO" },
                    { value: "alto", label: "ALTO" },
                  ].map((level) => (
                    <button
                      key={level.value}
                      onClick={() =>
                        setSpiceFilter(
                          spiceFilter === level.value
                            ? ""
                            : level.value,
                        )
                      }
                      className={`rounded-full px-6 py-2 border-2 transition-all ${
                        spiceFilter === level.value
                          ? "bg-red-600 border-red-600 text-white"
                          : "bg-transparent border-white text-white hover:bg-white/10"
                      }`}
                    >
                      <p className="font-['Bebas_Neue',sans-serif] text-[18px] leading-[normal]">
                        {level.label}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* GRILLA RESPONSIVA DE PRODUCTOS */}
        {/* ¡MODIFICADO!: Separamos el gap. 
            - gap-x-6 sm:gap-x-8 mantiene un espacio lateral prudente.
            - gap-y-16 md:gap-y-24 empuja fuertemente las tarjetas hacia abajo respecto a las de arriba. */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 sm:gap-x-8 gap-y-16 md:gap-y-24 justify-items-center">
          <BurgerCard
            name="KEVIN COSTNER"
            price="13 €"
            image={imgKevinC}
            allergen1={imgCrustaceos}
            allergen2={imgGluten}
          />
          <BurgerCard
            name="PIGMA"
            price="13 €"
            image={imgPigma}
            allergen1={imgHuevos}
            allergen2={imgGluten}
          />
          <BurgerCard
            name="M-30"
            price="13 €"
            image={imgM30}
            allergen1={imgHuevos}
            allergen2={imgGluten}
          />
          <BurgerCard
            name="KEVIN COSTNER"
            price="13 €"
            image={imgKevinC}
            allergen1={imgCrustaceos}
            allergen2={imgGluten}
          />
          <BurgerCard
            name="PIGMA"
            price="13 €"
            image={imgPigma}
            allergen1={imgHuevos}
            allergen2={imgGluten}
          />
          <BurgerCard
            name="M-30"
            price="13 €"
            image={imgM30}
            allergen1={imgHuevos}
            allergen2={imgGluten}
          />
        </div>
      </section>
    </main>
  );
}