const entryPoint = document.querySelector(".header-container");
const Header = (title, date, temp) => {
  ///instantiating 
  const root = document.createElement("div");
  root.classList.add("header");
  const day = document.createElement("span");
  const head = document.createElement("h1");
  const temperature = document.createElement("span");
  ///setting class names / attributes / text 
  day.classList.add("date");
  day.textContent = `${ date }`;
  head.textContent = `${ title }`;
  temperature.classList.add("temp");
  temperature.textContent = `${ temp }`
  root.appendChild(day);
  root.appendChild(head);
  root.appendChild(temperature);
  
  return root;
}

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

const headerAppender = (selector) => {
 const newCard = Header("Lambda Times", "January 6, 2021","26°");
  
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Header, headerAppender }
