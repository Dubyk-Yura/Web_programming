const bikes = [];
let showedlist = bikes;
const saveBike = () => {
  const bikeList = document.getElementById("bikelist");
  const titleInput = document.getElementById("title__input").value;
  const priceInput = parseFloat(document.getElementById("price__input").value);
  const weightInput = parseFloat(
    document.getElementById("weight__input").value
  );
  const typeInput = document.getElementById("type__input").value;
  const bike = {
    title: titleInput,
    price: priceInput,
    weight: weightInput,
    type: typeInput,
  };
  
  bikes.push(bike);
  const bikeInfo = document.createElement("div");
  bikeInfo.classList.add("bike-info");
  bikeInfo.innerHTML = `
      <div class="card__body">
        <h1 class="card__title">${bike.title}</h1>
        <h2 class="card__bike__price">Bike price: ${bike.price}</h2>
        <h2 class="card__bike__weight">Bike weight: ${bike.weight}</h2>
        <h2 class="card__bike__type">Bike type: ${bike.type}</h2>
        <button type="button" class="delete__button" onclick="deleteBike(this.parentElement)">Delete</button>
        <button type="button" class="edit__button" onclick="editBike(this.parentElement)">Edit</button>
      </div>
    `;
  bikeList.appendChild(bikeInfo);
  TotalByPrice(bikes);
  showedlist = bikes;
};

function display(bike) {
  const bikeList = document.getElementById("bikelist");
  bikeList.innerHTML = "";
  bike.forEach((item) => {
    const bikeInfo = document.createElement("div");
    bikeInfo.classList.add("bike-info");
    bikeInfo.innerHTML = `
        <div class="card__body">
          <h1 class="card__title">${item.title}</h1>
          <h2 class="card__bike__price">Bike price: ${item.price}</h2>
          <h2 class="card__bike__weight">Bike weight: ${item.weight}</h2>
          <h2 class="card__bike__type">Bike type: ${item.type}</h2>
          <button type="button" class="delete__button" onclick="deleteBike(this.parentElement)">Delete</button>
          <button type="button" class="edit__button" onclick="editBike(this.parentElement)">Edit</button>
        </div>
      `;
    bikeList.appendChild(bikeInfo);
  });
}

function deleteBike(element) {
  const titleInput = element.querySelector(".card__title");
  const title = titleInput.textContent;
  const priceInput = element.querySelector(".card__bike__price");
  const price = priceInput.textContent.split(": ");
  const weightInput = element.querySelector(".card__bike__weight");
  const weight = weightInput.textContent.split(": ");
  bikes.forEach((bike, index) => {
    console.log(
      bike.title === title &&
        bike.price === parseFloat(price[1]) &&
        bike.weight === parseFloat(weight[1])
    );
    if (
      bike.title === title &&
      bike.price === parseFloat(price[1]) &&
      bike.weight === parseFloat(weight[1])
    ) {
      bikes.splice(index, 1);
      element.remove();
    }
  });
  TotalByPrice(bikes);
}
