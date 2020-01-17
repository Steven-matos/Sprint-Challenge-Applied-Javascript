/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
 let Images = [
   "./assets/carousel/mountains.jpeg",
   "./assets/carousel/computer.jpeg",
   "./assets/carousel/trees.jpeg",
   "./assets/carousel/turntable.jpeg"
 ];

function Carousel() {
  const carousel = document.createElement('div'),
        leftBtn = document.createElement('div'),
        carouselImg = document.createElement('img'),
        rightBtn = document.createElement('div');
        
  const imgs = document.querySelector('img')

  carousel.classList.add('carousel');
  leftBtn.classList.add('left-button');
  rightBtn.classList.add('right-button');

  carousel.append(leftBtn);
  carousel.append(carouselImg);
  carousel.append(rightBtn);

  leftBtn.textContent = '<';
  rightBtn.textContent = '>';
        
  carouselImg.src = "./assets/carousel/mountains.jpeg";
                
  rightBtn.addEventListener('click', () => {
    const imgs = document.querySelector('.carousel img')
    if (imgs.style.display == 'inline-block')
      imgs.style.display = 'none';
    else
      imgs.style.display = 'inline-block';
  })

  leftBtn.addEventListener('click', () => { cfghghgfvc 
    if (imgs.style.display == 'inline-block')
      imgs.style.display = 'none';
    else
      imgs.style.display = 'inline-block';
  })

  carouselImg.addEventListener('onload', () => {
    const imgs = document.querySelector('.carousel img')
    if (imgs.style.display == 'none')
      imgs.style.display = 'block';
    
  })

  return carousel;
}
  

document.querySelector('.carousel-container').append(Carousel())


