let bikes = [];
let showedlist = bikes;

const displayAllBikes = async () => {
  const allBikes = await getAllBikes();
  bikes = allBikes;
  showedlist = bikes;
  display(bikes);
  TotalByPrice(showedlist);
};

const saveBike = () => {
  const titleInput = document.getElementById("title__input").value;
  const priceInput = parseFloat(document.getElementById("price__input").value);
  const weightInput = parseFloat(
    document.getElementById("weight__input").value
  );
  const typeInput = document.getElementById("type__input").value;
  const bike = {
    name: titleInput,
    price: priceInput,
    weight: weightInput,
    type: typeInput,
  };
  postBike(bike).then(displayAllBikes);
  showedlist = bikes;
  TotalByPrice(showedlist);
};

function bikeDelete(bikeId) {
  deleteBike(bikeId).then(displayAllBikes);
  TotalByPrice(showedlist);
}

displayAllBikes();
