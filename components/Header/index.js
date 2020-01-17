// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    // Elements Created
    const header = document.createElement('div'),
          date = document.createElement('span'),
          headerTitle = document.createElement('h1'),
          temp = document.createElement('span');

          // Added Classes
          header.classList.add('header');
          date.classList.add('date');
          temp.classList.add('temp')
          
          // Appened elements together
          header.append(date);
          header.append(headerTitle);
          header.append(temp);

          // Added information to elements
          date.textContent = 'SMARCH 28, 2019';
          headerTitle.textContent = 'Lambda Times';
          temp.textContent = '98°';

          return header;
}

// Appened Component to page
document.querySelector('.header-container').append(Header());
