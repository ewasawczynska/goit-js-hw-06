const form = document.querySelector(".login-form");
const message = "Please fill in all the fields!";

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert(message);
  } else {
    return console.log(`Email: ${email.value}, Password: ${password.value}`);
  }
  event.currentTarget.reset();
}


{ email: cos, password: cos };