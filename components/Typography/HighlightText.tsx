interface HighlightTextTextType {
  text: string;
  highlightColor?: `white` | `yellow` | `red`;
  // children: ReactNode;
}

function HighlightText({ text, highlightColor = `white` }: HighlightTextTextType) {
  const colorStyles = highlightColor === `white` ? `text-white` :
    highlightColor === `yellow` ? `text-yellow-500` : `text-red-600`;
  return (
    <>
      <span className={`font-semibold ${colorStyles}`}>{text}</span>
    </>
  );
}

export default HighlightText;
