var data = [
  {name: 'benjerry', price: 5.95, qtty: 0},
  {name: 'caffelatte', price: 1.27, qtty: 0},
  {name: 'calippo', price: 4.10, qtty: 0},
  {name: 'evax', price: 2.40, qtty: 0},
  {name: 'pizza', price: 4.95, qtty: 0},
  {name: 'scottex', price: 4.50, qtty: 0},
  {name: 'spaghetti', price: 1.25, qtty: 0},
  {name: 'triangulos', price: 2.35, qtty: 0},
  {name: 'xibeca', price: 3.75, qtty: 0},
  {name: 'chipsahoy', price: 2.20, qtty: 0}
];

function addItem(event) {
  let name = event.target.parentElement.id;
  let item = data.find((item) => item.name === name);
  item.qtty += 1;
  // todo: update basket
  console.log(item);
}

function removeItem(event) {
  let name = event.target.parentElement.id;
  let item = data.find((item) => item.name === name);
  if (item.qtty > 0) {
    item.qtty -= 1;
  }
  // todo: update basket
  console.log(item);
}

function render_list_of_items() {
  let itemList = document.getElementById('itemList');
  for (let i = 0; i < data.length; i++) {
    let item = document.createElement('div');
    let name = data[i].name;
    item.id = name;

    let nameDiv = document.createElement('div');
    nameDiv.classList.add('name');
    let nameText = document.createTextNode(name);
    nameDiv.appendChild(nameText);
    item.appendChild(nameDiv);

    let priceDiv = document.createElement('div');
    priceDiv.classList.add('price');
    let priceText = document.createTextNode(data[i].price);
    priceDiv.appendChild(priceText);
    item.appendChild(priceDiv);

    let imgDiv = document.createElement('div');
    priceDiv.classList.add('itemImg');
    let img = document.createElement('img');
    img.src = `./assets/img/${data[i].name}.jpg`;
    imgDiv.appendChild(img);
    item.appendChild(imgDiv);

    let qttyDiv = document.createElement('div');
    qttyDiv.classList.add('qtty');
    let qttyText = document.createTextNode(data[i].qtty);
    qttyDiv.appendChild(qttyText);
    item.appendChild(qttyDiv);

    let buttonMinus = document.createElement('button');
    buttonMinus.addEventListener('click', (e) => {
      removeItem(e);
    });
    let buttonMinusText = document.createTextNode('-');
    buttonMinus.appendChild(buttonMinusText);
    item.appendChild(buttonMinus);

    let buttonPlus = document.createElement('button');
    buttonPlus.addEventListener('click', (e) => {
      addItem(e);
    });
    let buttonPlusText = document.createTextNode('+');
    buttonPlus.appendChild(buttonPlusText);
    item.appendChild(buttonPlus);

    itemList.appendChild(item);
  }
}

render_list_of_items();