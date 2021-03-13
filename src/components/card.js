import axios from "axios";

const Card = (article) => {
  console.log(article);
  const {headline, authorPhoto, authorName} = article;
  const root = document.createElement("div");
  const headliner = document.createElement("div");
  const writer = document.createElement("div");
  const imgCont = document.createElement("div");
  const img = document.createElement("img");
  const span = document.createElement("span");

  root.classList.add("card");
  headliner.classList.add("headline");
  writer.classList.add("author");
  imgCont.classList.add("img-container");

  img.setAttribute(`src`, authorPhoto);
  imgCont.appendChild(img);
  headliner.textContent = `${ headline }`;
  span.textContent = `By ${ authorName }`;

  writer.appendChild(imgCont);
  root.appendChild(headliner);
  root.appendChild(writer); 
  root.appendChild(span);

  root.addEventListener('click', (event) => {
    console.log(headliner);
 });
 return root;
  // TASK 5
  // ---------------------
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
}

const cardAppender = (selector) => {
  const card = document.querySelector(selector);
  axios
  .get("https://lambda-times-api.herokuapp.com/articles")
  .then((res)=> {
    const {articles} = res.data;
    Object.keys(articles).forEach(article => {
    for(let item of articles[article]){
      const element = Card(item);

        console.log(articles[article]);
        card.appendChild(element);
        console.log(card);
    }
    
    })
    
  })
  .catch((err) => {
    console.log(err);
  })

  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
