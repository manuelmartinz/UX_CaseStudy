import imgFacebook from "./a1394934f4b5f335debdfa58a2817c41b35c5440.png";

export default function Facebook({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[136px]"} data-name="FACEBOOK">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFacebook} />
    </div>
  );
}