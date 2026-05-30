import imgGluten from '../../imports/Gluten/3fbe42176af1af6857925d7d97a72fdbcdbbb002.png';
import imgCrustaceos from '../../imports/Crustaceos/8ff8a1dc40d16bc4f4d81cd8b82c79f26561a754.png';

interface BurgerCardProps {
  name: string;
  price: string;
  image: string;
  allergens?: ('gluten' | 'crustaceos')[];
}

export function BurgerCard({ name, price, image, allergens = [] }: BurgerCardProps) {
  const allergenIcons = {
    gluten: imgGluten,
    crustaceos: imgCrustaceos,
  };

  return (
    <div
      className="bg-black rounded-3xl p-5 hover:scale-105 transition-transform cursor-pointer"
      style={{
        border: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <h3 className="text-white text-2xl tracking-wide mb-4 font-bold">
        {name}
      </h3>

      <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-4 mb-4 flex items-center justify-center">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-contain"
        />
      </div>

      <div className="flex items-center justify-between">
        <p className="text-white text-3xl font-bold">{price}</p>
        <div className="flex items-center gap-3">
          {allergens.map((allergen, index) => (
            <div
              key={index}
              className="w-12 h-12 rounded-full overflow-hidden"
            >
              <img
                src={allergenIcons[allergen]}
                alt={allergen}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
