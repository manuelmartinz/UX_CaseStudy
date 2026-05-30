import imgImage24 from "./26652b974a344f713dc4933b4b013d230df55ccf.png";
import imgHambKevin from "./e1a42c6143f8fa1e09ac6536607fddbf6a0823f0.png";
import imgImage10 from "./5050c290e98ec3a428685f4d89d3298ae8d1dcd9.png";
import imgImage11 from "./8d9b2b5dd0f75b09ada9d6bbdc8f37004233db0e.png";
import imgImage12 from "./dc5d9ee47f4a80d7d18229364e8e9aebc6136f73.png";
import imgImage21 from "./e0f49610b736fbe1a15d07ac0d345cfb4ce50af4.png";
import imgImgLogo from "./93174737d309b6acbbbbd1a28e9c9cb84091e691.png";

function PanHamb({ className }: { className?: string }) {
  return (
    <div className={className || "h-[157px] relative w-[283px]"} data-name="pan-hamb">
      <div className="absolute flex inset-0 items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-90 flex-none h-[100cqw] w-[100cqh]">
          <div className="relative size-full" data-name="image 24">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-full left-[-20.38%] max-w-none top-0 w-[120.38%]" src={imgImage24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CabHom({ className }: { className?: string }) {
  return (
    <div className={className || "h-[78px] relative w-[508px]"} data-name="CAB-HOM">
      <div className="absolute bg-[red] inset-0 rounded-[50px]" />
      <p className="absolute font-['Bebas_Neue:Regular',sans-serif] inset-[19.23%_8.86%_6.41%_8.66%] leading-[normal] not-italic text-[48px] text-white whitespace-nowrap">CREA SABORES CON ENCANTO</p>
    </div>
  );
}

function HambKevin({ className }: { className?: string }) {
  return (
    <div className={className || "h-[189px] relative w-[416px]"} data-name="hamb-kevin">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[115.34%] left-0 max-w-none top-[-15.34%] w-[104.81%]" src={imgHambKevin} />
      </div>
    </div>
  );
}

function CreaSaboresConEncanto({ className }: { className?: string }) {
  return (
    <div className={className || "h-[612px] relative w-[1024px]"} data-name="crea-sabores-con-encanto">
      <div className="absolute bg-black inset-0" />
      <p className="absolute font-['Montserrat:Medium',sans-serif] font-medium inset-[30.39%_54.98%_41.18%_6.25%] leading-[40px] text-[24px] text-right text-white">Crea tu propia hamburguesa y participa en este concurso en el que podrás ganar un mes de hamburguesas ¡¡¡ GRATIS !!!</p>
      <p className="absolute font-['Montserrat:Medium',sans-serif] font-medium inset-[64.54%_6.45%_13.89%_51.17%] leading-[40px] text-[24px] text-white">Elige tus ingredientes favoritos, sé creativo y vota tu hamburguesa en la galería de hamburguesas.</p>
      <HambKevin className="absolute aspect-[416/189] left-[51.17%] right-[8.2%] top-[178px]" />
      <CabHom className="absolute inset-[10.62%_44.14%_76.63%_6.25%]" />
    </div>
  );
}

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

function CartaBtn({ className }: { className?: string }) {
  return (
    <div className={className || "h-[301px] relative w-[506px]"} data-name="CARTA-BTN">
      <p className="absolute font-['Anton:Regular',sans-serif] inset-0 leading-[normal] not-italic text-[200px] text-center text-white">CARTA</p>
    </div>
  );
}

function Carta({ className }: { className?: string }) {
  return (
    <div className={className || "h-[638px] relative w-[1024px]"} data-name="CARTA">
      <div className="absolute flex inset-0 items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-90 flex-none h-[100cqw] w-[100cqh]">
          <div className="relative size-full" data-name="image 21">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage21} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Carta1({ className }: { className?: string }) {
  return (
    <div className={className || "h-[638px] relative w-[1024px]"} data-name="CARTA">
      <div className="absolute flex inset-0 items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-90 flex-none h-[100cqw] w-[100cqh]">
          <div className="relative size-full" data-name="image 21">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage21} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Carta2({ className }: { className?: string }) {
  return (
    <div className={className || "h-[638px] relative w-[1024px]"} data-name="CARTA">
      <div className="absolute flex inset-0 items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-90 flex-none h-[100cqw] w-[100cqh]">
          <div className="relative size-full" data-name="image 21">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage21} />
          </div>
        </div>
      </div>
      <CartaBtn className="absolute inset-[26.33%_25.29%_26.49%_25.29%]" />
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

export default function MainPage({ className }: { className?: string }) {
  return (
    <div className={className || "h-[1413px] relative w-[1024px]"} data-name="main-page">
      <div className="absolute inset-[-0.85%_0_92.29%_0]" data-name="HEADER">
        <div className="absolute bg-black inset-[0.83%_0_-0.83%_0]" />
        <MenLat className="absolute inset-[15.83%_89.41%_16.67%_5.3%]" />
        <ImgLogo className="absolute aspect-[86/103] left-[24.34%] right-[66.9%] top-[8px]" />
        <BotPed className="absolute inset-[30%_31.87%_30.83%_50.61%]" />
        <BotRes className="absolute inset-[30%_6.21%_30.83%_78.41%]" />
      </div>
      <Carta2 className="absolute inset-[7.71%_0_47.13%_0]" />
      <Footer className="absolute inset-[94.98%_0_-5.02%_0]" />
      <div className="absolute inset-[52.51%_0_4.18%_0]" data-name="crea-sabores-con-encanto">
        <div className="absolute bg-black inset-0" />
        <p className="absolute font-['Montserrat:Medium',sans-serif] font-medium inset-[30.39%_54.98%_41.18%_6.25%] leading-[40px] text-[24px] text-right text-white">Crea tu propia hamburguesa y participa en este concurso en el que podrás ganar un mes de hamburguesas ¡¡¡ GRATIS !!!</p>
        <p className="absolute font-['Montserrat:Medium',sans-serif] font-medium inset-[64.54%_6.45%_13.89%_51.17%] leading-[40px] text-[24px] text-white">Elige tus ingredientes favoritos, sé creativo y vota tu hamburguesa en la galería de hamburguesas.</p>
        <div className="absolute aspect-[416/189] left-[51.17%] right-[8.2%] top-[178px]" data-name="hamb-kevin">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[115.34%] left-0 max-w-none top-[-15.34%] w-[104.81%]" src={imgHambKevin} />
          </div>
        </div>
        <div className="absolute inset-[10.62%_44.14%_76.63%_6.25%]" data-name="CAB-HOM">
          <div className="absolute bg-[red] inset-0 rounded-[50px]" />
          <p className="absolute font-['Bebas_Neue:Regular',sans-serif] inset-[19.23%_8.86%_6.41%_8.66%] leading-[normal] not-italic text-[48px] text-white whitespace-nowrap">CREA SABORES CON ENCANTO</p>
        </div>
      </div>
      <PanHamb className="absolute aspect-[342.9999694824219/619.33544921875] left-[12.01%] right-[60.35%] top-[1117px]" />
    </div>
  );
}