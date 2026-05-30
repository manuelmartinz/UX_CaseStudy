import imgX from "./911cd488e51e4cfbb3e594a48bf1f09d512c943a.png";

export default function X({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[136px]"} data-name="X">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgX} />
    </div>
  );
}