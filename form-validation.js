const formAll = document.querySelector(".form-container");
const userInput = document.getElementById("user");
const emailInput = document.getElementById("email");
const passInput = document.getElementById("pass");
const repeatPassInput = document.getElementById("repeatpass");
// Variables del menú para el carrito
const menuBurger = document.querySelector(".hamburger");
const menuMobile = document.querySelector(".mobile-menu");

// Abrir y cerrar el menú

menuBurger.addEventListener("click", (e) => {
  e.target.classList.toggle("active");
  if (e.target.classList.contains("active")) {
    menuMobile.classList.add("active");
  } else {
    menuMobile.classList.remove("active");
  }
});

const checkUsername = () => {
  let valid = false;
  const min = 3;
  const max = 10;
  const userValue = userInput.value.trim();
  if (!isEmpty(userValue)) {
    showError(userInput, "El nombre es obligatorio");
  } else if (!isBetween(userValue.length, min, max)) {
    showError(
      userInput,
      `El usuario debe contener entre ${min} y ${max} carácteres`
    );
  } else {
    showSuccess(userInput);
    valid = true;
  }
  return valid;
};

const checkEmail = () => {
  let valid = false;
  const emailValue = emailInput.value.trim();
  if (!isEmpty(emailValue)) {
    showError(emailInput, "El email es obligatorio");
  } else if (!isEmailValid(emailValue)) {
    showError(emailInput, "El email no es válido");
  } else {
    showSuccess(emailInput);
    valid = true;
  }
  return valid;
};

const checkPassword = () => {
  let valid = false;
  const passValue = passInput.value.trim();
  if (!isEmpty(passValue)) {
    showError(passInput, "La contraseña es obligatoria");
  } else if (!isPasswordValid(passValue)) {
    showError(
      passInput,
      "La contraseña debe tener al menos 8 caracteres, una mayuscula, una minuscula, y números"
    );
  } else {
    showSuccess(passInput);
    valid = true;
  }
  return valid;
};

const checkRepeatPassword = () => {
  let valid = false;
  const passValue = passInput.value.trim();
  const passRepeatValue = repeatPassInput.value.trim();
  if (!isEmpty(passRepeatValue)) {
    showError(repeatPassInput, "La contraseña es obligatoria");
  } else if (!isPasswordValid(passRepeatValue)) {
    showError(
      repeatPassInput,
      "La contraseña debe tener al menos 8 caracteres, una mayuscula, una minuscula"
    );
  } else if (passValue !== passRepeatValue) {
    showError(repeatPassInput, "Las contraseñas no son iguales");
  } else {
    showSuccess(repeatPassInput);
    valid = true;
  }
  return valid;
};

const isEmpty = (value) => (value === "" ? false : true);

const isBetween = (length, min, max) =>
  length < min || length > max ? false : true;

const isEmailValid = (email) => {
  const re = /^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  return re.test(email);
};

const isPasswordValid = (pass) => {
  const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  return re.test(pass);
};

const showError = (input, msg) => {
  const formField = input.parentElement;
  formField.classList.remove("success");
  formField.classList.add("error");
  const error = formField.querySelector("small");
  error.textContent = msg;
};

const showSuccess = (input) => {
  const formField = input.parentElement;
  formField.classList.remove("error");
  formField.classList.add("success");
  const error = formField.querySelector("small");
  error.textContent = "";
};

formAll.addEventListener("submit", (e) => {
  e.preventDefault();
  let isUsernameValid = checkUsername();
  let isEmailValid = checkEmail();
  let isPasswordValid = checkPassword();
  let isPasswordRepeatValid = checkRepeatPassword();

  let isFormValid =
    isUsernameValid && isEmailValid && isPasswordValid && isPasswordRepeatValid;

  if (isFormValid) {
    alert("Registrado con éxito");
    document.querySelector("form").submit();
  }
});

const debounces = (fn, delay = 500) => {
  let timeout;
  return (...args) => {
    if (timeout) clearTimeout;
    setTimeout(() => {
      fn.apply(null, args);
    }, delay);
  };
};

formAll.addEventListener(
  "input",
  debounces((e) => {
    switch (e.target.id) {
      case "user":
        checkUsername();
        break;
      case "email":
        checkEmail();
        break;
      case "pass":
        checkPassword();
        break;
      case "repeatpass":
        checkRepeatPassword();
        break;
    }
  })
);
