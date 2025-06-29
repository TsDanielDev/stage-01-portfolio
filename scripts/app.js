document.addEventListener("DOMContentLoaded", () =>{
   

const projects = [
    {
      title: "Калькулятор",
      description: "Мини-приложение на JS калькулятор",
      demo: "https://example.com/calorie",
      repo: "https://github.com/tsdanieldev/calculator"
    },
  ];


  const container = document.getElementById("project-list");

  projects.forEach((project) => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
      <h3 class="project-title">${project.title}</h3>
      <p class="project-desc">${project.description}</p>
      <div class="project-links">
        ${project.demo ? `<a href="${project.demo}" target="_blank">Демо</a>` : ""}
        <a href="${project.repo}" target="_blank">GitHub</a>
      </div>
    `;
    container.appendChild(card);
  });
});


