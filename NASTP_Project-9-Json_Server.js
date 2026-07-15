const FOX_URL = "https://randomfox.ca/floof/";
// It's safer to select the container inside the function, or ensure your script runs after the DOM loads
async function addNewFox() {
  const foxes = document.getElementById("fox-target3");
  if (!foxes) {
    console.error("Could not find the element with ID 'fox-target3'");
    return;
  }

  try {
    const promise = await fetch(FOX_URL);
    const processedResponse = await promise.json();
    
    // 1. Create an <img> element
    const img = document.createElement("img");
    
    // 2. Set its source to the image URL from the API response
    img.src = processedResponse.image;
    img.alt = "Cute Fox";
    img.style.minWidth = "300px"; // Optional: keep the image a reasonable size
    img.style.minHeight = "300px"; // Optional: keep the image a reasonable size


    // 3. Append the image to your target container
    foxes.appendChild(img);
  } catch (error) {
    console.error("Error fetching the fox image:", error);
  }
} 

// Ensure the button exists before adding the listener
const foxBtn = document.getElementById("fox-btn3");
if (foxBtn) {
  foxBtn.addEventListener("click", addNewFox);
}





// JSON Data Handling callback function and event listener for the "Get Data" button

// 1. Define the elements
const getDataBtn = document.getElementById("fetchDataButton"); // Button to trigger data fetch
const dataOutput = document.getElementById("result");  // Element to display the fetched data
const jsonString = '[{"name": "Zain Ul Abideen", "age": 24}, {"name": "Sana", "age": 30}, {"name": "Ahmer Raza", "age": 28}, {"name": "Rimsha", "age": 35}, {"name": "Usman", "age": 40}]';
const personObjects = JSON.parse(jsonString);
let personIndex = 0;

// 2. Define what happens when the button is clicked
function showData() {
  if (!dataOutput) return;

  const person = personObjects[personIndex % personObjects.length];
  personIndex++;

  console.log(`Name: ${person.name}`);
  console.log(`Age: ${person.age}`);

  dataOutput.innerHTML += `<br><strong>Name:</strong> ${person.name} <br><strong>Age:</strong> ${person.age} <br> <hr>`;
}

// 3. Attach the event listener to the "Get Data" button
if (getDataBtn) {
  getDataBtn.addEventListener("click", showData);
}