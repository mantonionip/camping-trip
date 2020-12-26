//All of the campers' information is stored here
var campers = [{
    name: "Michael Imperial",
    item: "axe",
    group: "A",
  },
  {
    name: "Mark Wilkins",
    item: "coffee",
    group: "A",
  },
  {
    name: "Emma Koza",
    item: "bug spray",
    group: "A",
  },
  {
    name: "Zoe Simpson",
    item: "blankets",
    group: "A",
  },
  {
    name: "Alex Janssen",
    item: "S'mores",
    group: "B",
  },
  {
    name: "Colin Coller",
    item: "bluetooth speaker",
    group: "B",
  },
  {
    name: "Nick Evans",
    item: "first aid kit",
    group: "B",
  },
  {
    name: "Marta Montero",
    item: "screetch",
    group: "C",
  },
  {
    name: "Jason Hoffman",
    item: "Bungee Cords",
    group: "C",
  },
  {
    name: "Dylan Foster",
    item: "Candy",
    group: "C",
  },
  {
    name: "Jess Roycroft",
    item: "Adventure Cat",
    group: "C",
  },
];

campers.forEach(function (camper) {
  let item = document.createElement("li");
  item.innerHTML = `${camper.name} - ${camper.item}`;
  const groupName = camper.group.toLowerCase();
  document.querySelector(".camping-group-" + groupName).append(item);
});

function validateEmail(inputText) {
  const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const isValid = Boolean(inputText.value.match(mailformat))

  if (!isValid) {
    const emailError = document.querySelector(".email-error");
    emailError.style.display = "block";
  }

  return isValid;
}

document.querySelector(".submit").addEventListener("click", function (e) {
  e.preventDefault();
  clearErrors();

  const email = document.querySelector(".email");
  const name = document.querySelector(".firstName");
  const equipment = document.querySelector(".equipment");
  validateEmail(email);
  validateName(name);
  validateEquipment(equipment)
})

const findCamper = function (campers, camperName) {
  const index = campers.findIndex(function (camper) {
    return camper.name.toLowerCase() === camperName.toLowerCase().trim()
  });

  if (index > -1) {
    return campers[index]
  }
}

const findEquipment = function (campers, itemName) {
  const index = campers.findIndex(function (camper) {
    return camper.item.toLowerCase() === itemName.toLowerCase().trim()
  });
  if (index > -1) {
    return campers[index]
  }
}

const validateName = function (nameInput) {
  if (findCamper(campers, nameInput.value)) {
    showError("repeat-name");
  }
  if (!nameInput.value) {
    showError("name");
  }
}

const validateEquipment = function (equipmentInput) {
  if (findEquipment(campers, equipmentInput.value) || !equipmentInput.value) {
    showError("equipment");
  }
}

const showError = function (input) {
  const message = document.querySelector(`.${input}-error`);
  message.style.display = "block";
}

const clearErrors = function () {
  document.querySelectorAll(".error-message").forEach(function (message) {
    message.style.display = "none";
  })
}