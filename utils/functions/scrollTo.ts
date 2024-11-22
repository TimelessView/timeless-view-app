export default function scrollTo(id: string) {
  const htmlElement = document.getElementById(id);
  htmlElement?.scrollIntoView({ behavior: `smooth` });
}
