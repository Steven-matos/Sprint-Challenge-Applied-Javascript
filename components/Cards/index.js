// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(res => {
    console.log(res.data.articles)
    Object.entries(res.data.articles).forEach(article => {
        console.log(article[1])
        article[1].forEach(info =>
            document.querySelector('.cards-container').append(Cards(info)))
    })
})
.catch(err => {
    console.error(err); 
})

function Cards(data) {
    const card = document.createElement('div'),
          headline = document.createElement('div'),
          authorContainer = document.createElement('div'),
          imgContainer = document.createElement('div'),
          cardImg = document.createElement('img'),
          author = document.createElement('span');

    card.append(headline);
    card.append(authorContainer);
    authorContainer.append(imgContainer);
    authorContainer.append(author);
    imgContainer.append(cardImg);

    card.classList.add('card');
    headline.classList.add('headline');
    authorContainer.classList.add('author');
    imgContainer.classList.add('img-container');

    headline.textContent = data.headline;
    cardImg.src = data.authorPhoto;
    author.textContent = `By ${data.authorName}`;

    return card;
}