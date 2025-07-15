document.addEventListener("DOMContentLoaded", () => {
  const link = document.getElementById("viz-link");
  const message = document.getElementById("message");

  link.addEventListener("click", () => {
    message.textContent = "Loading brain visualization...";
  });
});
