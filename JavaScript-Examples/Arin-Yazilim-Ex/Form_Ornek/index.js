let userForm = document.querySelector("#userForm");
userForm.addEventListener("submit", formHandler);

function formHandler(event) {
  event.preventDefault();
  const USER_NAME = document.querySelector("#username");
  const SCORE = document.querySelector("#score");
  if (USER_NAME.value && SCORE.value) {
    addItem(USER_NAME.value, SCORE.value);
    USER_NAME.value = "";
    SCORE.value = "";
  }
}

const userList = document.querySelector("#userlist");
const addItem = (username, score) => {
  let li = document.createElement("li");
  let span = document.createElement("span");
  span.innerHTML = score;
  span.classList.add("badge", "bg-primary", "rounded-pill");
  li.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-center"
  );
  li.innerHTML = username;
  li.append(span);
  userList.append(li);
};

/*  <span class="badge bg-primary rounded-pill">14</span> */
