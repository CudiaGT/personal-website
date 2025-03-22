import renderHeader from "./header.js";
import renderMainPage from "./MainPage.js";
import renderProjectDetails from "./projectDetails.js";
import renderFooter from "./footer.js";

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