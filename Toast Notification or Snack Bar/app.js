let toastbox = document.getElementById("toast-box");
let success = `<span class="material-symbols-outlined">check_circle</span> Success! Your account is now active.`;
let error = `<span class="material-symbols-outlined">dangerous</span> Error! Unable to process your request`;
let invalid = `<span class="material-symbols-outlined">error</span> Invalid username or password.`;

function showToast(message) {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = message;
  toastbox.appendChild(toast);

  if (message.includes("Error")) {
    toast.classList.add("error");
  }
  if (message.includes("Invalid")) {
    toast.classList.add("invalid");
  }

  setTimeout(() => {
    toast.remove();
  }, 3000);
}

document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", function (e) {
    if (e.target.id == "sucess-btn") {
      message = success;
    } else if (e.target.id == "erorr-btn") {
      message = error;
    } else {
      message = invalid;
    }
    showToast(message);
  });
});
