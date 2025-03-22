fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    renderHeader(data.header);
    renderFooter(data.footer);

    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get("project");
    const page = projectId == null ? "main" : "project-detail";

    if (page === "main") {
      renderMainPage(data);
    } else {
      const project = data.projects.find((p) => p.id === projectId);
      renderProjectDetails(project);
    }
  });

function renderHeader(headerData) {
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

function renderMainPage(data) {
  const main = document.querySelector("main");
  main.innerHTML = `
    ${renderHome(data.home)}
    ${renderAbout(data.about)}
    ${renderSkills(data.skills)}
    ${renderNews(data.news)}
    ${renderProjects(data.projects)}
  `;

  // Search Bar for News
  const newsSearch = document.querySelector(".search.news");
  console.log(newsSearch);
  newsSearch.addEventListener("input", (e) => {
    console.log(e.currentTarget);
    console.log(e.target);
    console.log(e.target.value);
    const value = e.target.value;

    const filteredNews = data.news.filter((newsItem) =>
      newsItem.title.toLowerCase().includes(value.toLowerCase())
    );
    console.log(filteredNews);

    const newsList = document.querySelector(".container.news");
    console.log(newsList);
    newsList.innerHTML = filteredNews
      .map((newsItem) => renderNewsItem(newsItem))
      .join("");
  });

  // Search Bar for Projects
  const projectSearch = document.querySelector(".search.project");
  console.log(projectSearch);
  projectSearch.addEventListener("input", (e) => {
    console.log(e.currentTarget);
    console.log(e.target);
    console.log(e.target.value);
    const value = e.target.value;

    const filteredProjects = data.projects.filter((projectItem) =>
      projectItem.title.toLowerCase().includes(value.toLowerCase())
    );
    console.log(filteredProjects);

    const projectList = document.querySelector(".container.project");
    console.log(projectList);
    projectList.innerHTML = filteredProjects
      .map((projectItem) => renderProjectItem(projectItem))
      .join("");
  });
}

function renderHome(home) {
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

function renderAbout(about) {
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

function renderSkills(skills) {
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

// Broke down render news into two parts to follow instructions from lecture
function renderNews(newsItems) {
  return `
    <section id="news">
      <h2 class="section-title">News</h2>
      <div class="search news">
        <input type="search" name="news" placeholder="Search News...">
      </div>
      <div class="container news">
        ${newsItems.map(renderNewsItem).join("")}
      </div>
    </section>
  `;
}

function renderNewsItem(news) {
  return `
    <div class="news-card">
      <div class="news-title">
        <i class="${news.icon}"></i>
        <h3>${news.title}</h3>
      </div>
      <div class="news-description">
        <p>${news.description}</p>
      </div>
    </div>
  `;
}

// Broke down render projects into two parts to follow instructions from lecture
function renderProjects(projects) {
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

function renderProjectItem(project) {
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

function renderFooter(footerData) {
  const footer = document.querySelector("footer");
  footer.innerHTML = `<p>${footerData.text}</p>`;
}

function renderProjectDetails(project) {
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
