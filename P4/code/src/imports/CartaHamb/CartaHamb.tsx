import imgImage10 from "./5050c290e98ec3a428685f4d89d3298ae8d1dcd9.png";
import imgImage11 from "./8d9b2b5dd0f75b09ada9d6bbdc8f37004233db0e.png";
import imgImage12 from "./dc5d9ee47f4a80d7d18229364e8e9aebc6136f73.png";
import imgImgLogo from "./93174737d309b6acbbbbd1a28e9c9cb84091e691.png";
import imgImage9 from "./826ec1f6c7e38d0efc1a071a699051fbcdf18221.png";
import imgImage23 from "./09116449575c6852692f41d03696daf4501f3abb.png";
import imgGluten from "./3fbe42176af1af6857925d7d97a72fdbcdbbb002.png";
import imgHuevos from "./fcfe3767690f01aa0317ab4a716af609527a8dc1.png";
import imgM30 from "./b15824dd5587901bccd4d7c5be0833c714eb6884.png";
import imgPigma from "./1dc284f73e69d8d8e781f2a8857903882eb5ffa1.png";
import imgCrustaceos from "./8ff8a1dc40d16bc4f4d81cd8b82c79f26561a754.png";
import imgKevinC from "./a0032d41b7a7dc50a68df748ef2e2f86ba06450e.png";

function Rsss({ className }: { className?: string }) {
  return (
    <div className={className || "h-[67px] relative w-[338px]"} data-name="RSSS">
      <div className="absolute bg-white inset-0" />
      <div className="absolute aspect-[92/87] left-[72.06%] right-[12.38%] top-[10px]" data-name="image 10">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage10} />
      </div>
      <div className="absolute aspect-[91/95] left-[42.86%] right-[42.86%] top-[10px]" data-name="image 11">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage11} />
      </div>
      <div className="absolute aspect-[101/86] left-[10.48%] right-[72.06%] top-[10px]" data-name="image 12">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage12} />
      </div>
    </div>
  );
}

function BotFoot({ className }: { className?: string }) {
  return (
    <div className={className || "h-[47px] relative w-[167px]"} data-name="BOT-FOOT">
      <div className="absolute bg-[red] inset-0 rounded-[30px]" />
      <p className="absolute font-['Bebas_Neue:Regular',sans-serif] inset-[12.77%_27.54%_23.4%_28.14%] leading-[normal] not-italic text-[32px] text-center text-white">ayudA</p>
    </div>
  );
}

function Footer({ className }: { className?: string }) {
  return (
    <div className={className || "h-[142px] relative w-[1024px]"} data-name="FOOTER">
      <div className="absolute bg-white inset-0" />
      <BotFoot className="absolute inset-[35.21%_78.32%_33.1%_5.76%]" />
      <Rsss className="absolute inset-[29.01%_4.2%_29.63%_65.04%]" />
      <div className="absolute font-['Montserrat:Bold',sans-serif] font-bold inset-[31.69%_39.16%_31.69%_32.03%] leading-[0] text-[14px] text-black text-center whitespace-pre-wrap">
        <p className="leading-[30px] mb-0">{`AVISO LEGAL  ·  POLÍTICA DE COOKIES  · `}</p>
        <p className="leading-[30px]">CONDICIONES DE VENTA</p>
      </div>
    </div>
  );
}

function BotRes({ className }: { className?: string }) {
  return (
    <div className={className || "h-[47px] relative w-[151px]"} data-name="BOT-RES">
      <div className="absolute bg-[red] inset-0 rounded-[30px]" />
      <p className="absolute font-['Bebas_Neue:Regular',sans-serif] inset-[12.77%_17.22%_6.38%_17.88%] leading-[normal] not-italic text-[32px] text-white whitespace-nowrap">Reservar</p>
    </div>
  );
}

function BotPed({ className }: { className?: string }) {
  return (
    <div className={className || "h-[47px] relative w-[172px]"} data-name="BOT-PED">
      <div className="absolute bg-black inset-0 rounded-[30px]">
        <div aria-hidden="true" className="absolute border-3 border-solid border-white inset-[-3px] pointer-events-none rounded-[33px]" />
      </div>
      <p className="absolute font-['Bebas_Neue:Regular',sans-serif] inset-[12.77%_9.88%_6.38%_9.88%] leading-[normal] not-italic text-[32px] text-white whitespace-nowrap">HACER PEDIDO</p>
    </div>
  );
}

function ImgLogo({ className }: { className?: string }) {
  return (
    <div className={className || "h-[103px] relative w-[86px]"} data-name="IMG-LOGO">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImgLogo} />
    </div>
  );
}

function MenLat({ className }: { className?: string }) {
  return (
    <div className={className || "h-[81px] relative w-[52px]"} data-name="MEN-LAT">
      <div className="absolute font-['Bebas_Neue:Regular',sans-serif] inset-0 leading-[0] not-italic text-[20px] text-white">
        <p className="leading-[normal] mb-0">________</p>
        <p className="leading-[normal] mb-0">________</p>
        <p className="leading-[normal]">________</p>
      </div>
    </div>
  );
}

function Header({ className }: { className?: string }) {
  return (
    <div className={className || "h-[120px] relative w-[1024px]"} data-name="HEADER">
      <div className="absolute bg-black inset-[0.83%_0_-0.83%_0]" />
      <MenLat className="absolute inset-[15.83%_89.41%_16.67%_5.3%]" />
      <ImgLogo className="absolute aspect-[86/103] left-[24.34%] right-[66.9%] top-[8px]" />
      <BotPed className="absolute inset-[30%_31.87%_30.83%_50.61%]" />
      <BotRes className="absolute inset-[30%_6.21%_30.83%_78.41%]" />
    </div>
  );
}

function Filtros({ className }: { className?: string }) {
  return (
    <div className={className || "h-[46px] relative w-[126px]"} data-name="filtros">
      <div className="absolute bg-black inset-0 rounded-[30px]" />
      <p className="absolute font-['Bebas_Neue:Regular',sans-serif] inset-[23.91%_41.27%_23.91%_21.43%] leading-[normal] not-italic text-[20px] text-white whitespace-nowrap">FILTROS</p>
      <div className="absolute aspect-[860/798] left-[62.7%] right-[15.08%] top-[11px]" data-name="image 9">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage9} />
      </div>
    </div>
  );
}

function Cosa({ className }: { className?: string }) {
  return (
    <div className={className || "h-[80px] relative w-[572px]"} data-name="cosa">
      <div className="absolute bg-[red] inset-0 rounded-[60px]" />
      <p className="absolute font-['Bebas_Neue:Regular',sans-serif] inset-[13.75%_22.38%_13.75%_22.2%] leading-[normal] not-italic text-[48px] text-white whitespace-nowrap">nuestras burguers:</p>
    </div>
  );
}

function CartaHamb({ className }: { className?: string }) {
  return (
    <div className={className || "h-[348px] relative w-[1024px]"} data-name="Carta-hamb">
      <div className="absolute flex inset-0 items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-90 flex-none h-[100cqw] w-[100cqh]">
          <div className="relative size-full" data-name="image 23">
            <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full" src={imgImage23} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Gluten({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[69px]"} data-name="gluten">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGluten} />
    </div>
  );
}

function Huevos({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[69px]"} data-name="huevos">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHuevos} />
    </div>
  );
}

function M({ className }: { className?: string }) {
  return (
    <div className={className || "h-[186px] relative w-[188px]"} data-name="M-30">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgM30} />
    </div>
  );
}

function M1({ className }: { className?: string }) {
  return (
    <div className={className || "h-[292px] relative w-[234px]"} data-name="M-30">
      <div className="absolute inset-[0_0_-10.96%_0]" data-name="fondo b">
        <div className="absolute bg-black inset-0 rounded-[18px]" />
      </div>
      <M className="absolute aspect-[405/401] left-[5.13%] right-[4.7%] top-[13px]" />
      <div className="absolute border border-black border-solid inset-[81.85%_74.36%_7.53%_5.13%] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" data-name="13 €">
        <p className="absolute font-['Bebas_Neue:Regular',sans-serif] inset-[-1px_calc(-41.46%-1.83px)_-1px_-1px] leading-[normal] not-italic text-[32px] text-white whitespace-pre-wrap">{`13 €   `}</p>
      </div>
      <Huevos className="absolute aspect-[1254/1254] left-[58.12%] right-[20.94%] top-[232px]" />
      <Gluten className="absolute aspect-[1254/1254] left-[79.06%] right-0 top-[232px]" />
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

function Pigma({ className }: { className?: string }) {
  return (
    <div className={className || "h-[186px] relative w-[188px]"} data-name="PIGMA">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPigma} />
    </div>
  );
}

function Pigma1({ className }: { className?: string }) {
  return (
    <div className={className || "h-[292px] relative w-[234px]"} data-name="PIGMA">
      <div className="absolute inset-[0_0_-10.96%_0]" data-name="fondo b">
        <div className="absolute bg-black inset-0 rounded-[18px]" />
      </div>
      <Pigma className="absolute aspect-[399/395] left-[5.13%] right-[4.7%] top-[20px]" />
      <Component className="absolute inset-[82.88%_73.08%_6.85%_5.13%]" />
      <Huevos className="absolute aspect-[1254/1254] left-[63.25%] right-[17.95%] top-[239px]" />
      <Gluten className="absolute aspect-[1254/1254] left-[81.2%] right-0 top-[239px]" />
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

function KevinC({ className }: { className?: string }) {
  return (
    <div className={className || "h-[186px] relative w-[187px]"} data-name="KEVIN.C">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgKevinC} />
    </div>
  );
}

function KevinCostner({ className }: { className?: string }) {
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

function MenuBurguers({ className }: { className?: string }) {
  return (
    <div className={className || "h-[363px] relative w-[1024px]"} data-name="MENU BURGUERS">
      <div className="absolute bg-white inset-0" />
      <KevinCostner className="absolute inset-[9.64%_71%_9.92%_6.15%]" />
      <Pigma1 className="absolute inset-[9.64%_38.57%_9.92%_38.57%]" />
      <M1 className="absolute inset-[9.64%_6.15%_9.92%_71%]" />
    </div>
  );
}

export default function CartaHamb1({ className }: { className?: string }) {
  return (
    <div className={className || "h-[1211px] relative w-[1024px]"} data-name="carta-hamb">
      <div className="absolute bg-white inset-[38.65%_0_11.73%_0]" />
      <MenuBurguers className="absolute inset-[53.1%_0_16.93%_0]" />
      <CartaHamb className="absolute inset-[9.91%_0_61.35%_0]" />
      <Cosa className="absolute inset-[42.77%_39.55%_50.62%_4.59%]" />
      <Filtros className="absolute inset-[42.77%_5.86%_53.43%_81.84%]" />
      <Header className="absolute inset-[0_0_90.09%_0]" />
      <Footer className="absolute inset-[88.27%_0_0_0]" />
    </div>
  );
}