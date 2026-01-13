// ALL FUNCTIONS LEAVING OUR SITE (Makes a request) must be asynchronous
let factURL = "https://meowfacts.herokuapp.com/?count=3";
let imgURL = "https://api.thecatapi.com/v1/images/search";
let body = document.querySelector("body"); // Refrencing html. Document = html page

axios.interceptors.request.use((request) => {
  console.log(`${request.method} Request Sent to ${request.url}`);
  return request;
});

axios.interceptors.response.use((response) => {
  console.log(
    `Reponse Recieved with a status of ${response.status} from ${response.config.url}`
  );

  return response;
});


axios.interceptors.request.use(request => {
    request.metadata = request.metadata || {};
    request.metadata.startTime = new Date().getTime();
    return request;
});

axios.interceptors.response.use(
    (response) => {
        response.config.metadata.endTime = new Date().getTime();
        response.config.metadata.durationInMS = response.config.metadata.endTime - response.config.metadata.startTime;

        console.log(`Request took ${response.config.metadata.durationInMS} milliseconds.`)
        return response;
    },
    (error) => {
        error.config.metadata.endTime = new Date().getTime();
        error.config.metadata.durationInMS = error.config.metadata.endTime - error.config.metadata.startTime;

        console.log(`Request took ${error.config.metadata.durationInMS} milliseconds.`)
        throw error;
});

getData();
getImage();

// Axios function (using 3rd part library)
async function getData() {
  try {
    // makes request to URL for data
    let response = await axios(factURL, { timeout: 3000 });

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
