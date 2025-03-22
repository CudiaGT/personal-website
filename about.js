export default function renderAbout(about) {
  return `
    <section id="about">
        <h2 class="section-title">${about.title}</h2>
        <div class="container">
          <div class="about">
            <div class="about-heading">
              <h3>${about.intro}</h3>
            </div>
            <div class="about-content">
              <p>${about.content}</p>
            </div>
            <div class="about-contact">
              <p>Please contact me through:</p>
              ${about.contacts
                .map(
                  (contact) =>
                    `<a href="${contact.link}"><i class="${contact.icon}"></i></a>`
                )
                .join("")}
            </div>
          </div>
        </div>
    </section>
  `;
}