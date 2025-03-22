export default function renderFooter(footerData) {
  const footer = document.querySelector("footer");
  footer.innerHTML = `<p>${footerData.text}</p>`;
}