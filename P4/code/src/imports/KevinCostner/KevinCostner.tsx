import imgGluten from "./3fbe42176af1af6857925d7d97a72fdbcdbbb002.png";
import imgCrustaceos from "./8ff8a1dc40d16bc4f4d81cd8b82c79f26561a754.png";
import imgKevinC from "./a0032d41b7a7dc50a68df748ef2e2f86ba06450e.png";

function Gluten({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[69px]"} data-name="gluten">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGluten} />
    </div>
  );
}

function Crustaceos({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[69px]"} data-name="crustaceos">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCrustaceos} />
    </div>
  );
}

function Component({ className }: { className?: string }) {
  return (
    <div className={className || "h-[28px] relative w-[41px]"} data-name="13 €">
      <p className="absolute font-['Bebas_Neue:Regular',sans-serif] inset-[0_-41.46%_0_0] leading-[normal] not-italic text-[32px] text-white whitespace-pre-wrap">{`13 €   `}</p>
    </div>
  );
}

function KevinC({ className }: { className?: string }) {
  return (
    <div className={className || "h-[186px] relative w-[187px]"} data-name="KEVIN.C">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgKevinC} />
    </div>
  );
}

export default function KevinCostner({ className }: { className?: string }) {
  return (
    <div className={className || "h-[292px] relative w-[234px]"} data-name="KEVIN COSTNER">
      <div className="absolute inset-[0_0_-10.96%_0]" data-name="fondo b">
        <div className="absolute bg-black inset-0 rounded-[18px]" />
      </div>
      <KevinC className="absolute aspect-[395/392] left-[5.13%] right-[4.7%] top-[15px]" />
      <Component className="absolute inset-[82.53%_77.35%_7.88%_5.13%]" />
      <Crustaceos className="absolute aspect-[1254/1254] left-[63.25%] right-[18.38%] top-[237px]" />
      <Gluten className="absolute aspect-[1254/1254] left-[81.62%] right-0 top-[237px]" />
    </div>
  );
}