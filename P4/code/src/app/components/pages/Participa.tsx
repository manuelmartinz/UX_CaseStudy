import { useState } from "react";

import imgHambConfigurada from "../../imports/ConfiguracionHamb/ec2a426aeb7bbbd7a2660c3f647788a6ddc80c9f.png";

interface Ingredient {
  name: string;

  price: number;
}

const INGREDIENTS = {
  pan: [
    { name: "Sésamo", price: 0.75 },

    { name: "Potato Roll", price: 1.0 },

    { name: "Brioche", price: 1.5 },

    { name: "Pretzel", price: 2.0 },

    { name: "Negro", price: 2.5 },

    { name: "Sin gluten", price: 1.75 },
  ],

  carne: [
    { name: "Smash vaca madurada", price: 4.5 },

    { name: "Pollo crispy", price: 3.5 },

    { name: "Angus", price: 5.5 },

    { name: "Wagyu", price: 8.5 },

    { name: "Veggie burger", price: 3.0 },

    { name: "Doble smash", price: 6.0 },
  ],

  verdura: [
    { name: "Lechuga iceberg", price: 0.25 },

    { name: "Tomate fresco", price: 0.5 },

    { name: "Cebolla caramelizada", price: 1.0 },

    { name: "Pepinillo", price: 0.5 },

    { name: "Jalapeños", price: 0.75 },

    { name: "Guacamole", price: 2.5 },
  ],

  queso: [
    { name: "Cheddar", price: 0.75 },

    { name: "Americano", price: 0.75 },

    { name: "Azul", price: 1.5 },

    { name: "Cabra", price: 1.75 },

    { name: "Parmesano", price: 1.5 },

    { name: "Raclette", price: 2.5 },
  ],

  salsa: [
    { name: "Goiko BBQ", price: 0.75 },

    { name: "Mayo trufada", price: 1.5 },

    { name: "Chipotle", price: 1.0 },

    { name: "Mostaza miel", price: 0.75 },

    { name: "Salsa bourbon", price: 1.5 },

    { name: "Salsa picante", price: 1.0 },
  ],

  otros: [
    { name: "Bacon crispy", price: 1.5 },

    { name: "Huevo frito", price: 1.25 },

    { name: "Nachos", price: 2.0 },

    { name: "Donut glazeado", price: 3.5 },

    { name: "Cebolla crunch", price: 1.25 },

    { name: "Mac & Cheese", price: 3.0 },
  ],
};

const BASE_PRICE = 8.0;

export function Participa() {
  const [selections, setSelections] = useState<
    Record<string, Ingredient | null>
  >({
    pan: null,

    carne: null,

    verdura: null,

    queso: null,

    salsa: null,

    otros: null,
  });

  const [openDropdown, setOpenDropdown] = useState<
    string | null
  >(null);

  const toggleDropdown = (field: string) => {
    setOpenDropdown(openDropdown === field ? null : field);
  };

  const selectIngredient = (
    category: string,

    ingredient: Ingredient,
  ) => {
    setSelections((prev) => ({
      ...prev,

      [category]: ingredient,
    }));

    setOpenDropdown(null);
  };

  const calculateTotalPrice = () => {
    let total = BASE_PRICE;

    Object.values(selections).forEach((ingredient) => {
      if (ingredient) {
        total += ingredient.price;
      }
    });

    return total.toFixed(2);
  };

  return (
    <main className="flex-1 bg-black flex flex-col">
      <section className="bg-black py-6 px-6 md:px-16">
        <div className="bg-black py-4">
          <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 w-full md:w-auto">
              <p className="font-['Bebas_Neue',sans-serif] text-[28px] md:text-[32px] text-white leading-[normal]">
                NOMBRE:
              </p>

              <div className="bg-black border-3 border-white rounded-[20px] md:rounded-[27px] px-6 md:px-8 py-3 w-full sm:w-auto text-center">
                <p className="font-['Bebas_Neue',sans-serif] text-[22px] sm:text-[28px] md:text-[32px] text-white leading-[normal] break-words">
                  BURGUER TURQUESA EXPLOSIVA
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 self-end md:self-auto">
              <p className="font-['Bebas_Neue',sans-serif] text-[28px] md:text-[32px] text-white leading-[normal]">
                PRECIO:
              </p>

              <div className="bg-red-600 rounded-[30px] px-6 py-3">
                <p className="font-['Bebas_Neue',sans-serif] text-[28px] md:text-[32px] text-white leading-[normal]">
                  {calculateTotalPrice()} €
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-7xl mx-auto mt-6 mb-8 items-center lg:items-start">
          <div className="flex-1 flex flex-col w-full max-w-[600px] order-1">
            <div className="relative mb-6 h-[450px] sm:h-[600px] flex items-end justify-center pb-12 bg-neutral-900/20 rounded-2xl border border-white/5">
              <BurgerVisualizer selections={selections} />
            </div>

            <button className="hidden lg:block bg-red-600 rounded-[30px] px-12 py-3 hover:bg-[#FF9E42] transition-colors w-full sm:w-auto self-start">
              <p className="font-['Bebas_Neue',sans-serif] text-[28px] md:text-[32px] text-white leading-[normal] text-center">
                TERMINAR
              </p>
            </button>
          </div>

          <div className="w-full lg:w-[550px] flex order-2">
            <div className="bg-black border-3 border-white rounded-[20px] p-6 md:p-8 flex flex-col w-full min-h-[600px] h-auto">
              <h2 className="font-['Anton',sans-serif] text-[36px] md:text-[48px] text-white mb-6 text-center lg:text-left">
                INGREDIENTES
              </h2>

              <div className="flex flex-col sm:grid sm:grid-cols-[110px_1fr] gap-y-5 sm:items-center flex-1">
                {[
                  "pan",

                  "carne",

                  "verdura",

                  "queso",

                  "salsa",

                  "otros",
                ].map((cat) => (
                  <IngredientSelector
                    key={cat}
                    label={`${cat.charAt(0).toUpperCase() + cat.slice(1)}:`}
                    category={cat}
                    ingredients={
                      INGREDIENTS[
                        cat as keyof typeof INGREDIENTS
                      ]
                    }
                    selected={selections[cat]}
                    isOpen={openDropdown === cat}
                    onToggle={() => toggleDropdown(cat)}
                    onSelect={(ingredient) =>
                      selectIngredient(cat, ingredient)
                    }
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="w-full max-w-[600px] order-3 block lg:hidden mt-2">
            <button className="bg-red-600 rounded-[30px] px-12 py-3 hover:bg-[#FF9E42] transition-colors w-full">
              <p className="font-['Bebas_Neue',sans-serif] text-[28px] md:text-[32px] text-white leading-[normal] text-center">
                TERMINAR
              </p>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

function BurgerVisualizer({
  selections,
}: {
  selections: Record<string, Ingredient | null>;
}) {
  const getIngredientImage = (
    category: string,

    ingredientName: string | undefined,
  ) => {
    if (!ingredientName) return null;

    const imageMap: Record<string, Record<string, string>> = {
      pan: {
        Sésamo: "https://i.postimg.cc/cJZFZSGF/pan-sesamo.jpg",

        "Potato Roll":
          "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400",

        Brioche:
          "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400",

        Pretzel:
          "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400",

        Negro:
          "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400",

        "Sin gluten":
          "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400",
      },

      carne: {
        "Smash vaca madurada":
          "https://i.postimg.cc/fyLwrpbj/carne-smash-vaca-madura.png",

        "Pollo crispy":
          "https://images.unsplash.com/photo-1562967914-608f82629710?w=400",

        Angus:
          "https://images.unsplash.com/photo-1558030006-450675393462?w=400",

        Wagyu:
          "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400",

        "Veggie burger":
          "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=400",

        "Doble smash":
          "https://images.unsplash.com/photo-1558030006-450675393462?w=400",
      },

      verdura: {
        "Lechuga iceberg":
          "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=400",

        "Tomate fresco":
          "https://images.unsplash.com/photo-1546470427-227a1e916d33?w=400",

        "Cebolla caramelizada":
          "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=400",

        Pepinillo:
          "https://i.postimg.cc/0NxVxs10/verdura-pepinillo.jpg",

        Jalapeños:
          "https://images.unsplash.com/photo-1598030877919-592e4e79caa9?w=400",

        Guacamole:
          "https://images.unsplash.com/photo-1604903660933-62c3710c6ad9?w=400",
      },

      queso: {
        Cheddar:
          "https://i.postimg.cc/7ZSKpLdQ/queso-cheddar.jpg",

        Americano:
          "https://images.unsplash.com/photo-1618164436241-4473940d1f5c?w=400",

        Azul: "https://images.unsplash.com/photo-1452195100486-9cc805987862?w=400",

        Cabra:
          "https://images.unsplash.com/photo-1452195100486-9cc805987862?w=400",

        Parmesano:
          "https://images.unsplash.com/photo-1452195100486-9cc805987862?w=400",

        Raclette:
          "https://images.unsplash.com/photo-1452195100486-9cc805987862?w=400",
      },

      salsa: {
        "Goiko BBQ":
          "https://i.postimg.cc/FKmTm4Xx/salsa-bbq.png",

        "Mayo trufada":
          "https://images.unsplash.com/photo-1563372320-20e1e7b20394?w=400",

        Chipotle:
          "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=400",

        "Mostaza miel":
          "https://images.unsplash.com/photo-1563372320-20e1e7b20394?w=400",

        "Salsa bourbon":
          "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=400",

        "Salsa picante":
          "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=400",
      },

      otros: {
        "Bacon crispy":
          "https://images.unsplash.com/photo-1528607929212-2636ec44253e?w=400",

        "Huevo frito":
          "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400",

        Nachos:
          "https://images.unsplash.com/photo-1582169296194-e4d644c48063?w=400",

        "Donut glazeado":
          "https://i.postimg.cc/XY9sTvm8/otros-donut-glaseado.png",

        "Cebolla crunch":
          "https://images.unsplash.com/photo-1618164436241-4473940d1f5c?w=400",

        "Mac & Cheese":
          "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?w=400",
      },
    };

    return imageMap[category]?.[ingredientName] || null;
  };

  const layers = [];

  if (selections.pan) {
    layers.push({
      type: "pan-top",

      name: selections.pan.name,

      image: getIngredientImage("pan", selections.pan.name),
    });
  }

  if (selections.otros) {
    layers.push({
      type: "otros",

      name: selections.otros.name,

      image: getIngredientImage("otros", selections.otros.name),
    });
  }

  if (selections.salsa) {
    layers.push({
      type: "salsa",

      name: selections.salsa.name,

      image: getIngredientImage("salsa", selections.salsa.name),
    });
  }

  if (selections.queso) {
    layers.push({
      type: "queso",

      name: selections.queso.name,

      image: getIngredientImage("queso", selections.queso.name),
    });
  }

  if (selections.carne) {
    layers.push({
      type: "carne",

      name: selections.carne.name,

      image: getIngredientImage("carne", selections.carne.name),
    });
  }

  if (selections.verdura) {
    layers.push({
      type: "verdura",

      name: selections.verdura.name,

      image: getIngredientImage(
        "verdura",

        selections.verdura.name,
      ),
    });
  }

  if (selections.pan) {
    layers.push({
      type: "pan-bottom",

      name: selections.pan.name,

      image: getIngredientImage("pan", selections.pan.name),
    });
  }

  return (
    <div className="relative w-full max-w-[340px] sm:w-[400px] h-full flex flex-col-reverse items-center justify-start gap-1 px-2">
      {layers.length === 0 ? (
        <div className="text-center text-white/50 mt-24 sm:mt-32">
          <p className="font-['Bebas_Neue',sans-serif] text-[28px] sm:text-[32px]">
            SELECCIONA TUS
          </p>

          <p className="font-['Bebas_Neue',sans-serif] text-[28px] sm:text-[32px]">
            INGREDIENTES
          </p>
        </div>
      ) : (
        layers.map((layer, index) => (
          <div
            key={`${layer.type}-${index}`}
            className="relative w-full transition-all duration-300 ease-in-out"
            style={{
              height: layer.type.includes("pan")
                ? "65px"
                : "50px",

              zIndex: layers.length - index,
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              {layer.image ? (
                <div className="relative w-full h-full overflow-hidden rounded-lg">
                  <img
                    src={layer.image}
                    alt={layer.name}
                    className="w-full h-full object-cover"
                    style={{
                      filter: "brightness(0.9) contrast(1.1)",
                    }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10" />

                  <div className="absolute bottom-1 left-0 right-0 text-center">
                    <p className="font-['Bebas_Neue',sans-serif] text-[12px] sm:text-[14px] text-white drop-shadow-lg">
                      {layer.name}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="w-full h-full bg-gradient-to-b from-gray-700 to-gray-800 rounded-lg flex items-center justify-center border-2 border-white/20">
                  <p className="font-['Bebas_Neue',sans-serif] text-[14px] sm:text-[16px] text-white">
                    {layer.name}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
}

function IngredientSelector({
  label,

  ingredients,

  selected,

  isOpen,

  onToggle,

  onSelect,
}: {
  label: string;

  category: string;

  ingredients: Ingredient[];

  selected: Ingredient | null;

  isOpen: boolean;

  onToggle: () => void;

  onSelect: (ingredient: Ingredient) => void;
}) {
  return (
    <>
      <p className="font-['Anton',sans-serif] text-[22px] sm:text-[26px] md:text-[28px] text-white whitespace-nowrap sm:text-right sm:pr-4">
        {label}
      </p>

      <div className="relative w-full mb-3 sm:mb-0">
        <button
          onClick={onToggle}
          className={`bg-black border-2 rounded-[50px] px-6 md:px-8 py-3 flex items-center justify-between w-full transition-all hover:bg-gray-900 ${
            isOpen
              ? "border-[#FF9E42]"
              : "border-white hover:border-[#FF9E42]"
          }`}
        >
          <span className="font-['Anton',sans-serif] text-[16px] md:text-[18px] text-white tracking-wide truncate pr-2">
            {selected ? selected.name : "Seleccionar"}
          </span>

          <svg
            className="w-[16px] h-[14px] md:w-[20px] md:h-[18px] flex-shrink-0 ml-auto"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 23.9246 21.25"
          >
            <path
              d="M11.9623 21.25L0 0H23.9246L11.9623 21.25Z"
              fill="#FF0000"
            />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-black border-2 border-white rounded-[25px] overflow-hidden z-50 shadow-2xl">
            {ingredients.map((ingredient, index) => (
              <button
                key={ingredient.name}
                onClick={() => onSelect(ingredient)}
                className={`w-full px-6 py-3 md:py-4 flex items-center justify-between hover:bg-[#FF9E42] hover:bg-opacity-20 transition-all ${
                  index !== ingredients.length - 1
                    ? "border-b border-white border-opacity-40"
                    : ""
                } ${selected?.name === ingredient.name ? "bg-[#FF9E42] bg-opacity-30" : ""}`}
              >
                <span className="font-['Anton',sans-serif] text-[16px] md:text-[18px] text-white">
                  {ingredient.name}
                </span>

                <span className="font-['Anton',sans-serif] text-[16px] md:text-[18px] text-white ml-2 flex-shrink-0">
                  +{ingredient.price.toFixed(2)}€
                </span>
              </button>
            ))}

            <button
              onClick={onToggle}
              className="w-full px-6 py-3 flex items-center justify-center bg-neutral-900 hover:bg-gray-900 transition-colors border-t border-white/20"
            >
              <svg
                className="w-[16px] h-[14px] md:w-[20px] md:h-[18px] rotate-180"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 23.9246 21.25"
              >
                <path
                  d="M11.9623 21.25L0 0H23.9246L11.9623 21.25Z"
                  fill="#FF0000"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </>
  );
}