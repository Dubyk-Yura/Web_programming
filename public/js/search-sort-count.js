result = [];

const displaySortedBikes = async () => {
  const sortBikes = await getSortedBike();
  bikes = sortBikes;
  display(bikes);
};

function SortBikes() {
  displaySortedBikes();
  TotalByPrice(showedlist);
}

function TotalByPrice(bikes) {
  let totalPrice = 0;
  bikes.forEach((bike) => {
    totalPrice += parseFloat(bike.price);
  });
  const totalPriceElement = document.getElementById("total__price");
  totalPriceElement.textContent = `Total Price: ${totalPrice}`;
}

function SearchBikes() {
  const findBikeTitle = document
    .getElementById("search__title")
    .value.toLowerCase();
  result = bikes.filter(bike=>bike.name.includes(findBikeTitle));
  display(result);
  TotalByPrice(result);
  showedlist = result;
}

function restore() {
  displayAllBikes();
  TotalByPrice(bikes);
  showedlist = bikes;
}
