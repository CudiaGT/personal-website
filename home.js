export default function renderHome(home) {
  return `
    <div id="home">
      <div class="container">
          <div class="home-left">
            <div class="landingsplash-text">
              <h1><span class="highlight">${home.firstName}</span>${home.lastName}</h1>
              <h1><span class="highlight">${home.subtitle1}</span>${home.subtitle2}</h1>
            </div>
          </div>
          <div class="home-right">
            <img src=${home.profileImage} alt=${home.alt}/>
          </div>
      </div>
    </div>
  `;
}
