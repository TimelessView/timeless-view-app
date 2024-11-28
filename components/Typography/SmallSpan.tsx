// 'use client';

type SmallSpanType = {
  text: string;
  customClasses?: string;
  // children: ReactNode;
}

export default function SmallSpan({ text, customClasses }: SmallSpanType) {
  return (
    <>
      <span className={`text-sm text-zinc-400 ${customClasses}`}>{text}</span>
    </>
  );
}
