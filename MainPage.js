import renderHome from "./home.js"
import renderAbout from "./about.js"
import renderSkills from "./skills.js"
import renderNews, { renderNewsItem } from "./news.js"
import renderProjects, { renderProjectItem } from "./projects.js"

export default function renderMainPage(data) {
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