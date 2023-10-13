const HIDE_CLASSNAME = "hide";

const edit = document.querySelector(".edit");

let currentElement;
const editBike = (element) => {
  edit.classList.remove(HIDE_CLASSNAME);
  currentElement = element;
  const titleElement = currentElement.querySelector(".card__title").textContent;
  const priceElement = currentElement
    .querySelector(".card__bike__price")
    .textContent.split(": ");
  const weightElement = currentElement
    .querySelector(".card__bike__weight")
    .textContent.split(": ");
  const typeElement = currentElement
    .querySelector(".card__bike__type")
    .textContent.split(": ");
  document.getElementById("title__input__edit").value = `${titleElement}`;
  document.getElementById("price__input__edit").value = `${priceElement[1]}`;
  document.getElementById("weight__input__edit").value = `${weightElement[1]}`;
  document.getElementById("type__input__edit").value = `${typeElement[1]}`;
};

const saveEdit = () => {
  const titleUpdated = document.getElementById("title__input__edit").value;
  const priceUpdated = document.getElementById("price__input__edit").value;
  const weightUpdated = document.getElementById("weight__input__edit").value;
  const typeUpdated = document.getElementById("type__input__edit").value;

  const titleElement = currentElement.querySelector(".card__title");
  const priceElement = currentElement.querySelector(".card__bike__price");
  const weightElement = currentElement.querySelector(".card__bike__weight");
  const typeElement = currentElement.querySelector(".card__bike__type");

  const title = titleElement.textContent;
  const price = priceElement.textContent.split(": ");
  const weight = weightElement.textContent.split(": ");

  titleElement.textContent = titleUpdated;
  priceElement.textContent = "Bike price: " + priceUpdated;
  weightElement.textContent = "Bike weight: " + weightUpdated;
  typeElement.textContent = "Bike type: " + typeUpdated;

  for (let i = 0; i < bikes.length; i++) {
    if (
      bikes[i].title === title &&
      bikes[i].price === parseFloat(price[1]) &&
      bikes[i].weight === parseFloat(weight[1])
    ) {
      bikes[i].title = titleUpdated;
      bikes[i].price = parseFloat(priceUpdated);
      bikes[i].weight = parseFloat(weightUpdated);
      bikes[i].type = typeUpdated;
    }
  }
  edit.classList.add(HIDE_CLASSNAME);
  TotalByPrice(bikes);
};
const cancelEdit = () => {
    edit.classList.add(HIDE_CLASSNAME);

}
