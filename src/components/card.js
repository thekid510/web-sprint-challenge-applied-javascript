import axios from "axios";
// TASK 5
  // --------------test change-------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

const Card = (article) => {
  console.log(article);
  const {headline, authorPhoto, authorName} = article;
  // Hierarchy 
  const root = document.createElement("div");
  const header = document.createElement("div");
  const author = document.createElement("div");
  const imageContainer = document.createElement("div");
  const img = document.createElement("img");
  const span = document.createElement("span");
// adding class names
  root.classList.add("card");
  header.classList.add("headline");
  author.classList.add("author");
  imageContainer.classList.add("img-container");
// setting image attribute 
  img.setAttribute(`src`, authorPhoto);
  header.textContent = `${ headline }`;
  span.textContent = `By ${ authorName }`;
// appending 
  author.appendChild(imageContainer);
  root.appendChild(header);
  root.appendChild(author); 
  author.appendChild(span);
  imageContainer.appendChild(img);
  // event listener to console log headliner
  root.addEventListener('click', (event) => {
    console.log(header);
 });
 return root;
  
}
 // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
const cardAppender = (selector) => {
  const card = document.querySelector(selector);
  axios
  .get("https://lambda-times-api.herokuapp.com/articles")
  .then((res)=> {
    const {articles} = res.data;
    Object.keys(articles).forEach(article => {
    for(let item of articles[article]){
      const element = new Card(item);
        console.log(articles[article]);
        card.appendChild(element);
        console.log(card);
    }
    
    })
    
  })
  .catch((err) => {
    console.log(err);
  })

 
}

export { Card, cardAppender }
