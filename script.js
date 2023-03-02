const email = document.getElementById("email");
const country = document.getElementById("country");
const zipCode = document.getElementById("zip-code");
const password = document.getElementById("password");
const passwordConf = document.getElementById("password-confirm");
const submitBtn = document.querySelector('button');
const form = document.querySelector('form');

email.addEventListener('change', emailValidity);
country.addEventListener('change', countryValidity);
zipCode.addEventListener('change', zipCodeValidity);
password.addEventListener('change', passwordValidity);
passwordConf.addEventListener('change', passwordConfValidity);
submitBtn.addEventListener('click', submitValidity);

function submitValidity(event) {
  event.preventDefault();
  emailValidity();
  countryValidity();
  zipCodeValidity();
  passwordValidity();
  passwordConfValidity();
  if(form.checkValidity()) {
    alert("Hooray!");
  }
}

function emailValidity() {
  const errorEle = getErrorEle(email);
  if(email.validity.valueMissing) {
    errorEle.textContent = "Please provide an email!";
    email.classList.add('invalid');
  } else if(email.validity.typeMismatch) {
    errorEle.textContent = "Input must be an email!";
    email.classList.add('invalid');
  } else {
    errorEle.textContent = "";
    email.classList.remove('invalid');
    email.classList.add('valid');
  }
}

function countryValidity() {
  const errorEle = getErrorEle(country);
  if(country.validity.valueMissing) {
    errorEle.textContent = "Please provide a country!";
    country.classList.add('invalid');
  } else {
    errorEle.textContent = "";
    country.classList.remove('invalid');
    country.classList.add('valid');
  }
}

function zipCodeValidity() {
  const constraint = new RegExp("\\d{5}-\\d{4}");
  const errorEle = getErrorEle(zipCode);
  if(zipCode.validity.valueMissing) {
    errorEle.textContent = "Please provide a valid Zip code";
    zipCode.classList.add('invalid');
  } else if(!constraint.test(zipCode.value)) {
    errorEle.textContent = "The Zip code must consist 5 digits, a hyphen followed by 4 digits";
    zipCode.classList.add('invalid');
  } else {
    errorEle.textContent = "";
    zipCode.classList.remove('invalid');
    zipCode.classList.add('valid');
  }
}

function passwordValidity() {
  const constraint = new RegExp("^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$");
  const errorEle = getErrorEle(password);
  if(password.validity.valueMissing) {
    errorEle.textContent = "Please provide a password";
    password.classList.add('invalid');
  } else if(!constraint.test(password.value)) {
    errorEle.textContent = "Password must include at least 8 characters, at least 1 letter and 1 number";
    password.classList.add('invalid');
  } else {
    errorEle.textContent = "";
    password.classList.remove('invalid');
    password.classList.add('valid');
  }
}

function passwordConfValidity() {
  const errorEle = getErrorEle(passwordConf);
  if(passwordConf.validity.valueMissing) {
    errorEle.textContent = "Please provide a password";
    passwordConf.classList.add('invalid');
  } else if(password.value !== passwordConf.value) {
    errorEle.textContent = "Password does not match";
    passwordConf.classList.add('invalid');
  } else {
    errorEle.textContent = "";
    passwordConf.classList.remove('invalid');
    passwordConf.classList.add('valid');
  }
}

function getErrorEle(ele) {
  return ele.parentNode.querySelector('.error');
}