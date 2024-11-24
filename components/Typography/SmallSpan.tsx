// 'use client';

type SmallSpanType = {
  text: string;
  // children: ReactNode;
}

export default function SmallSpan({ text }: SmallSpanType) {
  return (
    <>
      <span className={`text-sm text-zinc-400`}>{text}</span>
    </>
  );
}
