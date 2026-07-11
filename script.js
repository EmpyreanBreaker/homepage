const projectContainer = document.querySelector(".main__projects");

const projectList = [
  {
    title: "Project 1",
    description: "Short description of Project 1. Just a couple sentences will do.",
    imageUrl: "images/main/pexels-andersonportella-9396155.jpg",
    imageAlt: "Elderly woman seated outdoors drinking yerba mate",
    githubLink: "#",
  },
  {
    title: "Project 2",
    description: "Short description of Project 2. Just a couple sentences will do.",
    imageUrl: "images/main/pexels-arjunadinata-30700873.jpg",
    imageAlt: "Smiling bride in traditional attire having makeup applied",
    githubLink: "#",
  },
  {
    title: "Project 3",
    description: "Short description of Project 3. Just a couple sentences will do.",
    imageUrl: "images/main/pexels-faizanmeer-31205651.jpg",
    imageAlt: "Carpet vendor smiling through a shop window at a traditional market",
    githubLink: "#",
  },
  {
    title: "Project 4",
    description: "Short description of Project 4. Just a couple sentences will do.",
    imageUrl: "images/main/pexels-fucacima-12244555.jpg",
    imageAlt: "Two young boys smiling with their arms around each other",
    githubLink: "#",
  },
  {
    title: "Project 5",
    description: "Short description of Project 5. Just a couple sentences will do.",
    imageUrl: "images/main/pexels-musa-emin-ozdemir-1015372176-23626340.jpg",
    imageAlt: "Two whirling dervishes performing onstage",
    githubLink: "#",
  },
  {
    title: "Project 6",
    description: "Short description of Project 6. Just a couple sentences will do.",
    imageUrl: "images/main/pexels-simon-phillips-1402891771-26596530.jpg",
    imageAlt: "Two subway passengers looking at a smartphone",
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
    image.alt = project.imageAlt;
    imageContainer.appendChild(image);

    const projectDetailsContainer = document.createElement("div");
    projectDetailsContainer.classList.add("main__project-details-container");

    const title = document.createElement("h3");
    title.classList.add("main__project-title");
    title.textContent = project.title;

    const linkContainer = document.createElement("div");
    linkContainer.classList.add("project__links");

    const githubLink = document.createElement("a");
    githubLink.classList.add("project__link");
    githubLink.href = project.githubLink;
    githubLink.setAttribute("aria-label", `${project.title} GitHub repository`);

    const githubIcon = document.createElement("img");
    githubIcon.classList.add("project__link-icon");
    githubIcon.src = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"; // Replace with actual GitHub icon path
    githubIcon.alt = "";
    githubLink.appendChild(githubIcon);

    const externalLink = document.createElement("a");
    externalLink.classList.add("project__link");
    externalLink.href = project.githubLink; // Replace with actual external link if available
    externalLink.target = "_blank";
    externalLink.rel = "noopener noreferrer";
    externalLink.setAttribute("aria-label", `View ${project.title} live`);

    const externalIcon = document.createElement("img");
    externalIcon.classList.add("project__link-icon");
    externalIcon.src = "images/open-in-new.svg";
    externalIcon.alt = "";
    externalLink.appendChild(externalIcon);

    linkContainer.append(githubLink, externalLink);
    projectDetailsContainer.append(title, linkContainer);

    const description = document.createElement("p");
    description.classList.add("main__project-description");
    description.textContent = project.description;

    card.append(imageContainer, projectDetailsContainer, description);
    projectContainer.appendChild(card);

    count++;
  });
})();
