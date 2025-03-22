export default function renderHeader(headerData) {
  const header = document.querySelector("header");
  header.innerHTML = `
    <a href="${headerData.logo.link}" class="home-link">
      <img src="${headerData.logo.src}" alt="${
    headerData.logo.alt
  }" class="header-icon" />
    </a>
    <nav>
      <ul>
        ${headerData.navItems
          .map((item) => `<li><a href="${item.link}">${item.title}</a></li>`)
          .join("")}
      </ul>
    </nav>
  `;
}