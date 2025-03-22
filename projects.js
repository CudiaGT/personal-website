export default function renderProjects(projects) {
  return `
    <section id="projects">
      <h2 class="section-title">Projects</h2>
      <div class="search project">
        <input type="search" name="project" placeholder="Search Project...">
      </div>
      <div class="container project">
        ${projects.map(renderProjectItem).join("")}
      </div>
    </section>
  `;
}

export function renderProjectItem(project) {
  return `
    <div class="project-card">
      <div class="project-image">
        <a href="?project=${project.id}">
          <img src="${project.image}" alt="${project.title}" />
        </a>
      </div>
      <div class="project-title">
        <h3>${project.title}</h3>
      </div>
    </div>
  `;
}