const titleInput = document.getElementById("title__input");
const priceInput = document.getElementById("price__input");
const weightInput = document.getElementById("weight__input");
const typeInput = document.getElementById("type__input");
const submitButton = document.getElementById("submit__button");
const bikeForm = document.getElementById("bikeform");

function checkForUnique() {
  const isUnique = !bikes.some((bike) => {
    return (
      bike.title === titleInput.value &&
      bike.price === parseFloat(priceInput.value) &&
      bike.weight === parseFloat(weightInput.value) &&
      bike.type === typeInput.value
    );
  });
  return isUnique;
}

bikeForm.addEventListener("submit", function (event) {
  event.preventDefault();
});

function checkFields() {
  const titleValue = titleInput.value.trim();
  const priceValue = priceInput.value.trim();
  const weightValue = weightInput.value.trim();
  const typeValue = typeInput.value.trim();
  return titleValue && priceValue && weightValue && typeValue;
}

const searchButton = document.getElementById("submit__button");
searchButton.addEventListener("click", function (event) {
  if (checkFields()) {
    if (checkForUnique()) {
      saveBike();
    } else {
      alert("This bike already exist.");
    }
  }
});
