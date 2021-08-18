let projects = [
  {
    projectImg: "CONTACTFORM.png",
    nameHead: "Contact Form",
    Description: "an easy to style contact form with multiple uses.",
    language: "Html/Css",
    liveLink: "https://clever-allen-20c6a0.netlify.app/",
    githubLink: "https://github.com/matty-allison/CONTACT-FORM",
  },
  {
    projectImg: "Timeline.png",
    nameHead: "Timeline",
    Description:
      "to display your work/life history this timeline can be styled either way.",
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
    projectImg: "Sneakerstore.png",
    nameHead: "Sneaker Store",
    Description:
      "a small sneaker project myself and two other co-workers completed as one of the first projects at Life choices academy.",
    language: "Html/Css",
    liveLink: "https://relaxed-saha-d93563.netlify.app/",
    githubLink: "https://github.com/matty-allison/Sneaker-website",
  },
  {
    projectImg: "BMI.png",
    nameHead: "BMI calculator",
    Description: "calculate your body mass index with this BMI calculator",
    language: "Python",
    liveLink: "https://replit.com/@mattyallison/BMI-calculator#.replit",
    githubLink: "https://github.com/matty-allison/BMI-calculator",
  },
  {
    projectImg: "calculator].png",
    nameHead: "Calculator",
    Description:
      "A full functional Calculator made from javascript, Html amd Css visit it anytime.",
    language: "Javascript",
    liveLink: "https://matthew-calculator.netlify.app",
    githubLink: "https://github.com/matty-allison/Calculator",
  },
  {
    projectImg: "pokeball.png",
    nameHead: "Pokedex",
    Description:
      "Looking for a Pokemon, well why don't you check for it here in the Pokemon index",
    language: "Javascript",
    liveLink: "https://pokedex-matthew.netlify.app/",
    githubLink: "https://github.com/matty-allison/pokedex",
  },
  {
    projectImg: "FLITERpng",
    nameHead: "Fliter",
    Description:
      "A Javascript fliter and search bar for any website implementation.",
    language: "Javascript",
    liveLink: "https://modest-stonebraker-b120c3.netlify.app/",
    githubLink:
      "https://github.com/matty-allison/DOM_manipulation/tree/main/dom%20manipultion",
  },
  {
    projectImg: "easyticket.png",
    nameHead: "easy ticket project",
    Description:
      "the easy ticket project is an app for buying tickets for example the movies",
    language: "Python",
    liveLink: "https://replit.com/@mattyallison/OOP-assignment#.replit",
    githubLink: "https://github.com/matty-allison/OOP-assignment",
  },
];

function createProject(project) {
  let createProject = `<div class="card" language=${project.language} style="background: linear-gradient( 0deg, rgba(0, 0, 0, 0.6),
  rgba(0, 0, 0, 0.6)),
  url(./Images/${project.projectImg});"> 
    <div class="card-details">
    <h2 class="card-heading">${project.nameHead}</h2>
    <p>${project.Description}</p>
    <h3 class="card-title">${project.language}</h3>
      <div class="buttons">
        <a href="${project.liveLink}" target="_blank" class="button2" >Live</a>
        <a href="${project.githubLink}" target="_blank" class="button2">Github</a>
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

// let hobbies = [
//   {
//     pic: "./Images/games.jpg",
//     title: "Video Games",
//     hobbiesDescription:
//       "This is probably my biggest hobbie I have. If it wasn't for video games I probably wouldn't have been interested in technology.",
//   },
//   {
//     pic: "./Images/p1-min.jpeg",
//     title: "Art",
//     hobbiesDescription:
//       "Drawing started out as a hobbie for me but now my dream is to become and animator!",
//   },
//   {
//     pic: "./Images/swimming.jpg",
//     title: "Swimming",
//     hobbiesDescription:
//       "I love swimming and I have been doing it throughout my life.",
//   },
//   {
//     pic: "./Images/hiking.jpg",
//     title: "Hiking",
//     hobbiesDescription:
//       "As a family, myself, my two siblings and my parents go on regular hikes. We love the fresh air and amazing views",
//   },
// ];

// function createHobbies(hobbie) {
//   let createHobbies = `
//   <div class="hobbie-container">
//     <div class="cardpic">
//       <img src="${hobbie.pic}" alt="" class="imgBx">
//       <div class="content">
//         <h2>${hobbie.title}</h2>
//         <p>${hobbie.hobbiesDescription}</p>
//       </div>
//     </div>
//   </div>`;
//   return createHobbies;
// }

// function displayHobbies() {
//   let hobbiesContainer = document.querySelector("#hobbies");
//   for (hobbie of hobbies) {
//     let fun = createHobbies(hobbie);
//     hobbiesContainer.innerHTML += fun;
//   }
// }

// displayHobbies();
