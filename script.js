// For addbook.html page
const addButton = document.querySelector(".add");
const message = document.querySelector(".text");

if (addButton) {
  addButton.addEventListener("click", (event) => {
    event.preventDefault();
    const tittle = document.querySelector(".tittle").value.trim();
    const author = document.querySelector(".author").value.trim();
    const page = document.querySelector(".page").value.trim();
    const status = document.querySelector(".status").value;

    if (tittle && author && page && status) {
      const newBook = { tittle, author, page, status };

      // Get existing books or empty array
      let books = JSON.parse(localStorage.getItem("books")) || [];
      books.push(newBook);

      // Save back to localStorage
      localStorage.setItem("books", JSON.stringify(books));

      message.textContent = "Book added successfully!";
      message.style.color = "green";
setTimeout(()=>{
    message.textContent="";
}, 3000);
      // Optionally clear form fields
      document.querySelector(".tittle").value = "";
      document.querySelector(".author").value = "";
      document.querySelector(".page").value = "";
      document.querySelector(".status").value = "";
    } else {
      message.textContent = "Please fill in all fields!";
      message.style.color = "red";

      setTimeout(()=>{
    message.textContent="";
}, 3000);
    }
  });
}

// For index.html page
const tableBody = document.querySelector(".tbody");
if (tableBody) {
  const books = JSON.parse(localStorage.getItem("books")) || [];
  books.forEach(book => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${book.tittle}</td>
      <td>${book.author}</td>
      <td>${book.page}</td>
      <td>${book.status}</td>
    `;
    tableBody.appendChild(row);
  });
}
