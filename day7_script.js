function createCard() {
  const nameValue = document.getElementById("name").value;
  const ageValue = document.getElementById("age").value;
  const imgValue = document.getElementById("img").value;

  const card = document.createElement("div");
  card.style.border = "1px solid black";
  card.style.padding = "10px";
  card.style.margin = "10px";
  card.style.width = "200px";
  card.style.backgroundColor = "#f5f5f5";

  const name = document.createElement("h3");
  name.innerText = "Name: " + nameValue;

  const age = document.createElement("p");
  age.innerText = "Age: " + ageValue;

  const image = document.createElement("img");
  image.src = imgValue;
  image.alt = "Profile Picture";
  image.style.width = "100%";

  // 🧨 Append everything to card
  card.appendChild(name);
  card.appendChild(age);
  card.appendChild(image);

  // 🧃 Add card to the container
  document.getElementById("cardContainer").appendChild(card);

  // Clear input fields after creating the card
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("img").value = "";
}
