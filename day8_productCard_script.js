function createCard() {
  const name = document.getElementById("nameInput").value;
  const price = document.getElementById("priceInput").value;
  const image = document.getElementById("imageInput").value;
  const color = document.getElementById("bgColor").value;

  const card = document.createElement("div");
  card.className = "card";
  card.style.backgroundColor = color;

  const h3 = document.createElement("h3");
  h3.innerText = name;

  const p = document.createElement("p");
  p.innerText = "₹" + price;

  const img = document.createElement("img");
  img.src = image;

  const editBtn = document.createElement("button");
  editBtn.innerText = "Edit";
  editBtn.onclick = function () {
    document.getElementById("nameInput").value = name;
    document.getElementById("priceInput").value = price;
    document.getElementById("imageInput").value = image;
    document.getElementById("bgColor").value = color;
    card.remove();
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.onclick = function () {
    card.remove();
  };

  card.appendChild(h3);
  card.appendChild(p);
  card.appendChild(img);
  card.appendChild(editBtn);
  card.appendChild(deleteBtn);

  document.getElementById("cardContainer").appendChild(card);

  document.getElementById("nameInput").value = "";
  document.getElementById("priceInput").value = "";
  document.getElementById("imageInput").value = "";
}
