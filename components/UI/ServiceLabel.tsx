interface ServiceLabelType {
  number: string;
  label: string;
  active?: boolean;
  // children: ReactNode;
}

function ServiceLabel({ number, label, active = false }: ServiceLabelType) {
  const inactiveStyles = `text-zinc-500 transition-all duration-300`;
  const activeStyles = `text-zinc-100 transition-all duration-300`;
  const textColor = active ? activeStyles : inactiveStyles;
  return (
    <>
      <div className={`flex items-end gap-5 cursor-pointer`}>
        <span className={`font-lavishlyYours md:text-6xl text-4xl ${textColor}`}>{number}</span>
        <h3 className={`font-italiana text-4xl md:text-6xl uppercase ${textColor}`}>{label}</h3>
      </div>
    </>
  );
}

export default ServiceLabel;
