const title = document.querySelector("#title");
const author = document.querySelector("#author");
const year = document.querySelector("#year");
const btn = document.querySelector("#btn");
const bookList = document.querySelector("#book-list");

btn.addEventListener("click", (event) => {
  event.preventDefault();

  if (title.value === "" && author.value === "" && year.value === "") {
    alert("Iltimos malumot kiriting");
  } else {
    const newRow = document.createElement("tr");

    const newTitle = document.createElement("th");
    newTitle.innerText = title.value;
    newRow.appendChild(newTitle);

    const newAuthor = document.createElement("th");
    newAuthor.innerText = author.value;
    newRow.appendChild(newAuthor);

    const newYear = document.createElement("th");
    newYear.innerText = year.value;
    newRow.appendChild(newYear);

    // Displaying in UI
    bookList.appendChild(newRow);

    title.value = "";
    author.value = "";
    year.value = "";
  }
});
