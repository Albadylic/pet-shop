const availablePets = document.querySelector(".avail-pets");
const homedPets = document.querySelector(".homed-pets");

// Function to add an element to the page

const renderOneElement = (dataEntry, parent) => {
  let article = document.createElement("article");

  let title = document.createElement("h3");
  let titleText = document.createTextNode(dataEntry.name);
  title.appendChild(titleText);
  article.appendChild(title);

  let img = document.createElement("img");
  // Check type of dataEntry, assign image src and alt
  let animalType = dataEntry.type;
  img.src = `/assets/${animalType}.jpg`;
  img.alt = `An image of a ${animalType}`;
  article.appendChild(img);

  const nature = document.createElement("p");
  const natureText = document.createTextNode(dataEntry.nature);
  nature.appendChild(natureText);
  article.appendChild(nature);

  parent.appendChild(article);
};

// Function to check the status, pass parent to renderOneElement

// Function to render all data, Iterate and run RenderOneElement for all
