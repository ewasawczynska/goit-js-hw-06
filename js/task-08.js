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
    const data = {
      email: email.value,
      password: password.value,
    };
    console.log(data);
  }
  event.currentTarget.reset();
}
