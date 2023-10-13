function SortBikes(bikeslist) {
  const bikeList = document.getElementById("bikelist");
  bikeList.innerHTML = "";

  bikeslist.sort((a, b) => a.weight - b.weight);
  bikeslist.forEach((bike) => {
    const bikeInfo = document.createElement("div");
    bikeInfo.classList.add("bike-info");

    bikeInfo.innerHTML = `
        <div class="card__body">
          <h1 class="card__title">${bike.title}</h1>
          <h2 class="card__bike__price">Bike price: ${bike.price}</h2>
          <h2 class="card__bike__weight">Bike weight: ${bike.weight}</h2>
          <h2 class="card__bike__type">Bike type: ${bike.type}</h2>
          <button type="button" class="delete__button" onclick="deleteBike(this.parentElement)">Delete</button>
        </div>
      `;

    bikeList.appendChild(bikeInfo);
  });
  TotalByPrice();
}

function TotalByPrice(listbike) {
  let totalPrice = 0;
  listbike.forEach((bike) => {
    totalPrice += bike.price;
  });
  console.log(totalPrice);
  const totalPriceElement = document.getElementById("total__price");
  totalPriceElement.textContent = `Total Price: ${totalPrice}`;
}

function SearchBikes() {
  const findBicycle = document
    .getElementById("search__title")
    .value.toLowerCase();
  const new_bikes = bikes;
  const result = bikes.filter((bike) => {
    return bike.title.toLowerCase().includes(findBicycle);
  });
  display(result);
  TotalByPrice(result);
  showedlist = result;
}

function restore(){
  display(bikes);
  TotalByPrice(bikes);
  showedlist = bikes;
}
