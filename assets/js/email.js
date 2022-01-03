const $form = document.querySelector("#form");
const $button = document.querySelector("#trucazo");

$form.addEventListener("submit", hanledsubmit);

function hanledsubmit(even) {
  even.preventDefault();
  const form = new FormData(this);
  $button.setAttribute(
    "href",
    `mailto:victormigueltejeda@gmail.com? subject=${form.get("name")}${form.get(
      "email"
    )}&body=${form.get("message")}`
  );
  $button.click();
}
