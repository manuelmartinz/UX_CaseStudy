import imgInstagram from "./964d76696a04a272e85d944b8e22e5763536a67f.png";

export default function Instagram({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[136px]"} data-name="INSTAGRAM">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgInstagram} />
    </div>
  );
}