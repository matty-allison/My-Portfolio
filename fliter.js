let projects = [
  {
    projectImg: "CONTACT FORM.png",
    nameHead: "Contact Form",
    Description: "a easy to style contact form with multiple uses.",
    language: "Html/Css",
    liveLink: "https://clever-allen-20c6a0.netlify.app/",
    githubLink: "https://github.com/matty-allison/CONTACT-FORM",
  },
  {
    projectImg: "Timeline.png",
    nameHead: "Timeline",
    Description:
      "to display your work history or your life history this timeline can be styled either way.",
    language: "Html/Css",
    liveLink: "https://vigilant-roentgen-6b0c0e.netlify.app/",
    githubLink: "https://github.com/matty-allison/Timeline",
  },
  {
    projectImg: "Testimonial.png",
    nameHead: "Testimonial",
    Description: "a comment or testimonial section for anything you desire.",
    language: "Html/Css",
    liveLink: "https://friendly-minsky-e9427d.netlify.app/",
    githubLink: "https://github.com/matty-allison/Testimonial",
  },
  {
    projectImg: "Sneaker store.png",
    nameHead: "Sneaker Store",
    Description:
      "a small sneaker project myself and two other co-workers completed at Lifechoices academy.",
    language: "Html/Css",
    liveLink: "https://relaxed-saha-d93563.netlify.app/",
    githubLink: "https://github.com/matty-allison/Sneaker-website",
  },
  {
    nameHead: "Lotto game",
    Description:
      "A fun Lotto game, log in and see if you can guess the numbers",
    language: "Python",
    githubLink: "https://github.com/matty-allison/Lotto-game",
  },
  {
    nameHead: "Calculator",
    Description:
      "A full functional Calculator made from javascript, Html amd Css visit it anytime.",
    language: "Javascript",
    liveLink: "https://matthew-calculator.netlify.app",
    githubLink: "https://github.com/matty-allison/Calculator",
  },
];

function createProject(project) {
  let createProject = `<div id="img2" class="card" language=${project.language} data-aos="zoom-out-top" style="background:linear-gradient(0deg, rgba(24, 23, 24, 0.3), rgba(24, 23, 24, 0.3)), url('./Images/${projects.projectImg}')"> 
    <div class="card-details">
    <h2 class="card-heading">${project.nameHead}</h2>
    <p>${project.Description}</p>
    <h3 class="card-title">${project.language}</h3>
      <div class="buttons">
        <a href="${project.liveLink}" target="blank" class="button2" >Live</a>
        <a href="${project.githubLink}" target="blank" class="button2">Github</a>
      </div>
    </div>
  </div>`;
  return createProject;
}

function displayProject() {
  let projectContainer = document.querySelector(".cards-container");
  for (card of projects) {
    let work = createProject(card);
    projectContainer.innerHTML += work;
  }
}

displayProject();

function flitering(catergory) {
  let cards = document.getElementsByClassName("card");
  if (catergory == "All") {
    for (card of cards) {
      card.style.display = "block";
    }
    return;
  }
  for (card of cards) {
    card.style.display = "none";
  }
  let selectCards = document.querySelectorAll(`[language='${catergory}']`);
  for (card of selectCards) {
    card.style.display = "block";
  }
}

let hobbies = [
  {
   close: "X",
   title: "Video Games",
   hobbiesDescription: "This is probably my biggest hobbie I have, If it wasn't for video games I probably wouldn't have been interested in technology."
  },
  {
    close: "X",
    title: "Art",
    hobbiesDescription: "Drawing started out as a hobbie for me but now my dream is to become and animator!"
   },
   {
    close: "X",
    title: "Swimming",
    hobbiesDescription: "I love swimming and I have been doing it throughout my life."
   },
   {
    close: "X",
    title: "Hiking",
    hobbiesDescription: "As a family, myself, my brother, sister, mom and dad go on hikes for fresh air and amazing views"
   }
]

function createHobbies(hobbie) {
  let createHobbies = `<div class="popup" id="popup-1">
    <div class="overlay"></div>
    <div class="content">
      <div class="close-btn">${hobbie.close}</div>
      <h1>${hobbie.title}</h1>
      <p>${hobbie.hobbiesDescription}</p>
      </div>
      </div>`;
      return createHobbies
}

function displayHobbies() {
  let hobbies = document.querySelector("#hobbies");
  for (hobbie of thehobbies) {
    let fun = createHobbies(hobbie);
    hobbies.innerHTML += fun;
  }
}

displayHobbies();