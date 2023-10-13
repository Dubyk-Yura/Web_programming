const titleInput = document.getElementById("title__input");
const priceInput = document.getElementById("price__input");
const weightInput = document.getElementById("weight__input");
const typeInput = document.getElementById("type__input");
const bikeForm = document.getElementById("bikeform");

function checkForUnique() {
  let isUnique = true;
  bikes.forEach((bike) => {
    if (
      bike.name === titleInput.value &&
      parseFloat(bike.price) === parseFloat(priceInput.value) &&
      parseFloat(bike.weight) === parseFloat(weightInput.value) &&
      bike.type === typeInput.value
    ) {
      isUnique = false;
    }
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
