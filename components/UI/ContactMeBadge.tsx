interface ContactMeBadgeType {
  span: string;
  content: string;
  href: string;
  // children: ReactNode;
}

function ContactMeBadge({ span, content, href }: ContactMeBadgeType) {
  return (
    <>
      <div className={`flex flex-col pb-3 border-b border-b-zinc-600`}>
        <span className={`uppercase text-zinc-600 text-[13px]`}>{span}</span>
        <a href={href}
           className={`text-zinc-600 uppercase font-semibold sm:text-3xl`}>{content}</a>
      </div>
    </>
  );
}

export default ContactMeBadge;
