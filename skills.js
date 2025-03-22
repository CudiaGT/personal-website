export default function renderSkills(skills) {
  return `
    <section id="skills">
      <h2 class="section-title">Skills</h2>
        <div class="container">
          ${skills
            .map(
              (skillSection) => `
            <div class="skill-section">
              <h3 class="type">${skillSection.category}</h3>
                ${skillSection.skills
                  .map(
                    (skill) =>
                      `<div class="skill-card"><i class="${skill.icon}"></i> <p>${skill.name}</p></div>`
                  )
                  .join("")}
            </div>
            `
            )
            .join("")}
        </div>
    </section>
  `;
}