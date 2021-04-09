const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

// Hierarchy 
const root = document.createElement("div");
const day = document.createElement("span");
const header = document.createElement("h1");
const degrees = document.createElement("span");
// Class Names
root.classList.add("header");
day.classList.add("date");
degrees.classList.add("temp");
// Text Content 
day.textContent = `${ date }`
degrees.textContent = `${ temp }`
header.textContent = `${ title }`
// Appending 
root.appendChild(date);
root.appendChild(header);
root.appendChild(degrees);

return root;
}
console.log(root);
const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Header, headerAppender }
