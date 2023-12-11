const justFood = numPeople => {
  const price = numPeople * 50;
  return `Catering od Just Food pro ${numPeople} lidí za ${price} Kč`;
};

const yourMama = numPeople => {
  const price = numPeople * 100;
  return `Catering od Your Mama pro ${numPeople} lidí za ${price} Kč`;
};

const flavourHaven = numPeople => {
  const price = numPeople * 300;
  return `Catering od Flavour Haven pro ${numPeople} lidí za ${price} Kč`;
};

const createEvent = () => {
  const eventName = prompt("Zadejte název události:");
  const numPeople = prompt("Zadejte počet lidí:");
  const cateringOption = prompt("Vyberte cateringovou společnost (1-Just Food, 2-Your Mama, 3-Flavour Haven):");

  let cateringFunction;

  if (cateringOption === '1') {
      cateringFunction = justFood;
  } else if (cateringOption === '2') {
      cateringFunction = yourMama;
  } else if (cateringOption === '3') {
      cateringFunction = flavourHaven;
  } else {
      return "Neplatná volba cateringové společnosti";
  }

  const cateringMessage = cateringFunction(numPeople);
  return `Událost ${eventName} s ${cateringMessage}`;
};

console.log(createEvent());
