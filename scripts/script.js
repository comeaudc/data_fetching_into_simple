// ALL FUNCTIONS LEAVING OUR SITE (Makes a request) must be asynchronous
let factURL = "https://meowfacts.herokuapp.com/?count=3";
let imgURL = "https://api.thecatapi.com/v1/images/search";
let body = document.querySelector("body");

getData();
getImage();

// Axios function (using 3rd part library)
async function getData() {
  try {
    // makes request to URL for data
    let response = await axios.get(factURL);

    //Used helper function to display data on website
    displayData(response.data.data);
  } catch (err) {
    console.error(`❌ Error: ${err.message}`);
  }
}

// Fetch - build in JS function
async function getImage() {
  try {
    // makes HTTP request to URL for data
    let response = await fetch(imgURL);

    // Parse data into useable JSON
    response = await response.json();

    let img = document.createElement("img");

    img.setAttribute("src", response[0].url);

    body.appendChild(img);
  } catch (err) {
    console.error(`❌ Error: ${err.message}`);
  }
}

function displayData(arr) {
  for (let item of arr) {
    const par = document.createElement("p");

    par.textContent = item;

    body.appendChild(par);
  }
}

// Make requests
// Receive reponses
