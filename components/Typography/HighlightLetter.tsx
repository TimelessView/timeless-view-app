type HighlightLetterType = {
  text: string;
  // children: ReactNode;
}

export default function HighlightLetter({ text }: HighlightLetterType) {
  return (
    <>
      <span
        className={`font-lavishlyYours`}>{text}</span>
    </>
  );
}
