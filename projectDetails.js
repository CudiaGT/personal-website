export default function renderProjectDetails(project) {
  const main = document.querySelector("main");
  main.innerHTML = `
    <section id="detail-project">
      <div class="container project">
        <div class="project-left">
          <div class="project-detail-title">
            <h2>${project.title}</h2>
          </div>
          <div class="project-description">
            <p>${project.description}</p>
          </div>
        </div>
        <div class="project-right">
          <div class="project-detail-image">
            <a href="${project.link}">
              <img src="${project.image}" alt="${project.title}" />
            </a>
          </div>
          <div class="project-info">
            <p>Project Duration: ${project.info.duration}</p>
            <p>Languages/Tools: ${project.info.tools}</p>
          </div>
        </div>
      </div>
    </section>
  `;
}
