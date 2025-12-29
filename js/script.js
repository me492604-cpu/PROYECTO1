const input = document.getElementById("tarea");
const button = document.getElementById("anadir_tarea");
const list = document.getElementById("lista");

button.addEventListener("click", () => {
  const text = input.value.trim();
  if (text === "") return;

  const li = document.createElement("li");
  li.textContent = text;

  li.addEventListener("click", () => {
    li.classList.toggle("done");
  });

  list.appendChild(li);
  input.value = "";
});
