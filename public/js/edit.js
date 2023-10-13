const HIDE_CLASSNAME = "hide";
const edit = document.querySelector(".edit");
let globalBikeId;

const startEdit = (bikeId) => {
  edit.classList.remove(HIDE_CLASSNAME);
  const foundBike = bikes.find((bike) => bike.id === bikeId);
  document.getElementById("title__input__edit").value = `${foundBike.name}`;
  document.getElementById("price__input__edit").value = `${foundBike.price}`;
  document.getElementById("weight__input__edit").value = `${foundBike.weight}`;
  document.getElementById("type__input__edit").value = `${foundBike.type}`;
  globalBikeId = bikeId;
};

const saveEdit = () => {
  const titleUpdated = document.getElementById("title__input__edit").value;
  const priceUpdated = document.getElementById("price__input__edit").value;
  const weightUpdated = document.getElementById("weight__input__edit").value;
  const typeUpdated = document.getElementById("type__input__edit").value;

  const bike = {
    id: globalBikeId,
    name: titleUpdated,
    price: priceUpdated,
    weight: weightUpdated,
    type: typeUpdated,
  };
  let isUnique = true;
  bikes.forEach((item) => {
    console.log(bike.name);
    console.log(item.name);
    if (
      item.name === bike.name &&
      parseFloat(item.price) === parseFloat(bike.price) &&
      parseFloat(item.weight) === parseFloat(bike.weight) &&
      item.type === bike.type
    ) {
      isUnique = false;
      return;
    } 
  });
  if(isUnique){
  editBike(bike).then(displayAllBikes);
  }else{
    alert("This bike already exist.");

  }
  edit.classList.add(HIDE_CLASSNAME);
};

const cancelEdit = () => {
  edit.classList.add(HIDE_CLASSNAME);
};
