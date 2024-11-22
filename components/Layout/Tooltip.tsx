interface TooltipType {
  label: string;
  // children: ReactNode;
}

function Tooltip({ label }: TooltipType) {
  return (
    <>
      <div className={`max-w-screen-xl m-auto mt-3`}>
        <p className={`text-zinc-500`}>* {label}</p>
      </div>
    </>
  );
}

export default Tooltip;
