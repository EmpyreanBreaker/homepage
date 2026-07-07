const projectContainer = document.querySelector(".main__projects");

const projectList = [
  {
    title: "Project 1",
    description: "Short description of Project 1. Just a couple sentences will do.",
    imageUrl: "",
    githubLink: "#",
  },
  {
    title: "Project 2",
    description: "Short description of Project 2. Just a couple sentences will do.",
    imageUrl: "",
    githubLink: "#",
  },
  {
    title: "Project 3",
    description: "Short description of Project 3. Just a couple sentences will do.",
    imageUrl: "",
    githubLink: "#",
  },
  {
    title: "Project 4",
    description: "Short description of Project 4. Just a couple sentences will do.",
    imageUrl: "",
    githubLink: "#",
  },
  {
    title: "Project 5",
    description: "Short description of Project 5. Just a couple sentences will do.",
    imageUrl: "",
    githubLink: "#",
  },
  {
    title: "Project 6",
    description: "Short description of Project 6. Just a couple sentences will do.",
    imageUrl: "",
    githubLink: "#",
  },
];

const createCards = (() => {
  let count = 1;

  projectList.forEach((project) => {
    const card = document.createElement("div");
    card.classList.add("main__project-card");

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("main__project-image-container");

    const image = document.createElement("img");
    image.classList.add("main__project-image");
    image.src = project.imageUrl;
    imageContainer.appendChild(image);

    const placeholder = document.createElement("p");
    placeholder.classList.add("main__project-image-placeholder");
    placeholder.textContent = `screenshot of project  ${count}`;
    imageContainer.appendChild(placeholder);

    const projectDetailsContainer = document.createElement("div");
    projectDetailsContainer.classList.add("main__project-details-container");

    const title = document.createElement("h3");
    title.classList.add("main__project-title");
    title.textContent = project.title;

    const links = document.createElement("a");
    links.classList.add("main__project-link");
    links.href = project.githubLink;
    links.target = "_blank";

    const linkIcon = document.createElement("img");
    linkIcon.classList.add("main__project-link-icon");
    linkIcon.src = "github-icon.png"; // Replace with actual GitHub icon path
    links.appendChild(linkIcon);

    projectDetailsContainer.append(title, links);

    const description = document.createElement("p");
    description.classList.add("main__project-description");
    description.textContent = project.description;

    card.append(imageContainer, projectDetailsContainer, description);
    projectContainer.appendChild(card);

    count++;
  });
})();
