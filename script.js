// your code here
const nameInput = document.getElementById("name");
const yearInput = document.getElementById("year");
const button = document.getElementById("button");
const urlText = document.getElementById("url");

// Prevent form submission reload behavior
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const nameValue = nameInput.value.trim();
  const yearValue = yearInput.value.trim();

  let url = "https://localhost:8080/";

  const params = [];

  if (nameValue) {
    params.push(`name=${encodeURIComponent(nameValue)}`);
  }
  if (yearValue) {
    params.push(`year=${encodeURIComponent(yearValue)}`);
  }

  if (params.length > 0) {
    url += "?" + params.join("&");
  }

  urlText.textContent = url;
});
