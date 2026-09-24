
const taskOneHeading = document.querySelector("#taskOneHeading");
const changeHeadingButton = document.querySelector("#changeHeadingButton");

changeHeadingButton.addEventListener("click", function () {
    taskOneHeading.textContent = "Updated heading!";
});

const changeStyleButton = document.querySelector("#changeStyleButton");
changeStyleButton.addEventListener("click", function () {
    taskOneHeading.classList.toggle("highlight");
});

const animalText = document.querySelector("#animalText");
const changeTextButton = document.querySelector("#changeTextButton");

changeTextButton.addEventListener("click", function () {

   animalText.textContent = "Elephants are intelligent, social animals that live in family groups.";
    
});

animalText.textContent += " Elephants have strong family bonds.";

const backgroundButton = document.querySelector("#backgroundButton");

backgroundButton.addEventListener("click", function () {

   document.body.style.backgroundColor = "lightblue";

});

const animalContent = document.querySelector("#animalContent");

const animalHeading = document.createElement("h3");
animalHeading.textContent = "Animal of the Day";
animalHeading.classList.add("animal-heading");

const animalParagraph = document.createElement("p");
animalParagraph.textContent = "Penguins are excellent swimmers and spend much of their lives in the water.";

const animalImage = document.createElement("img");
animalImage.src = "images/elephant.png";
animalImage.alt = "Elephant";

animalContent.append(animalHeading);
animalContent.append(animalParagraph);
animalContent.append(animalImage);

const hideAnimalButton = document.querySelector("#hideAnimalButton");
const showAnimalButton = document.querySelector("#showAnimalButton");

hideAnimalButton.addEventListener("click", function () {
    animalContent.style.display = "none";
});

showAnimalButton.addEventListener("click", function () {
    animalContent.style.display = "block";
});


const animalSelect = document.querySelector("#animalSelect");
const animalName = document.querySelector("#animalName");
const selectedAnimalImage = document.querySelector("#animalImage");
const animalDescription = document.querySelector("#animalDescription");

animalSelect.addEventListener("change", function () {
    const selectedAnimal = animalSelect.value;
    if (selectedAnimal === "elephant") {
        animalName.textContent = "Elephant";
        selectedAnimalImage.src = "images/elephant.png";
        animalDescription.textContent = "Elephants are the world's largest land animals.";
}
else if (selectedAnimal === "tiger") {
    animalName.textContent = "Tiger";
    selectedAnimalImage.src = "images/tiger.png";
    animalDescription.textContent = "Tigers are the largest members of the cat family.";
}
else if (selectedAnimal === "penguin") {
    animalName.textContent = "Penguin";
    selectedAnimalImage.src = "images/penguin.png";
    animalDescription.textContent = "Penguins are excellent swimmers and spend much of their lives in the water.";

}
else if (selectedAnimal === "panda") {
    animalName.textContent = "Panda";
    selectedAnimalImage.src = "images/panda.png";
    animalDescription.textContent = "Giant pandas spend much of their time eating bamboo.";
}
});
selectedAnimalImage.addEventListener("mouseenter", function () {
    selectedAnimalImage.classList.add("image-highlight");
});

selectedAnimalImage.addEventListener("mouseleave", function () {
    selectedAnimalImage.classList.remove("image-highlight");
});


const animalForm = document.querySelector("#animalForm");
const animalNameInput = document.querySelector("#observationAnimal");
const animalHabitatInput = document.querySelector("#observationLocation");
const animalDateInput = document.querySelector("#observationDate");
const animalTableBody = document.querySelector("#observationTableBody");


animalForm.addEventListener("submit", function (event) {
    event.preventDefault();

const animalNameValue = animalNameInput.value;
const animalHabitatValue = animalHabitatInput.value;
const animalDateValue = animalDateInput.value;

if (
    animalNameValue === "" ||
    animalHabitatValue === "" ||
    animalDateValue === ""
) {
    alert("Please fill in all fields.");
    return;
}


const newRow = document.createElement("tr");

const nameCell = document.createElement("td");
nameCell.textContent = animalNameValue;

const habitatCell = document.createElement("td");
habitatCell.textContent = animalHabitatValue;

const dateCell = document.createElement("td");
dateCell.textContent = animalDateValue;

const deleteButton = document.createElement("button");
deleteButton.textContent = "Delete";

const deleteCell = document.createElement("td");
deleteCell.append(deleteButton);

deleteButton.addEventListener("click", function () {
    newRow.remove();
});

newRow.append(nameCell);
newRow.append(habitatCell);
newRow.append(dateCell);
newRow.append(deleteCell);

animalTableBody.append(newRow);
animalNameInput.value = "";
animalHabitatInput.value = "";
animalDateInput.value = "";
});



