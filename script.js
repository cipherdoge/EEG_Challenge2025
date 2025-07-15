document.addEventListener("DOMContentLoaded", () => {
  const link = document.getElementById("viz-link");
  const message = document.getElementById("message");

  link.addEventListener("mouseover", () => {
    message.textContent = "You're about to see the magic!";
  });

  link.addEventListener("mouseout", () => {
    message.textContent = "";
  });

  link.addEventListener("click", () => {
    message.textContent = "Loading brain visualization...";
  });
});
