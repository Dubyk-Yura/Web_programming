function display(bikes) {
  const bikeList = document.getElementById("bikelist");
  bikeList.innerHTML = "";
  bikes.forEach((bike) => {
    const bikeInfo = document.createElement("div");
    bikeInfo.classList.add("bike-info");
    bikeInfo.innerHTML = `
      <div class="card__body">
        <h1 class="card__title">${bike.name}</h1>
        <h2 class="card__bike__price">Bike price: ${bike.price}</h2>
        <h2 class="card__bike__weight">Bike weight: ${bike.weight}</h2>
        <h2 class="card__bike__type">Bike type: ${bike.type}</h2>
        <button type="button" class="delete__button" onclick="bikeDelete(${bike.id})">Delete</button>
        <button type="button" class="edit__button" onclick="startEdit(${bike.id})">Edit</button>
      </div>
    `;
    bikeList.appendChild(bikeInfo);
  });
}
