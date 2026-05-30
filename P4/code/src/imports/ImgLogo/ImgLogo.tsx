import imgImgLogo from "./93174737d309b6acbbbbd1a28e9c9cb84091e691.png";

export default function ImgLogo({ className }: { className?: string }) {
  return (
    <div className={className || "h-[103px] relative w-[86px]"} data-name="IMG-LOGO">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImgLogo} />
    </div>
  );
}