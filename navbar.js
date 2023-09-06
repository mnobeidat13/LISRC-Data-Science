// Function to create an element with attributes
function createElementWithAttributes(tag, attributes) {
    const element = document.createElement(tag);
    Object.entries(attributes).forEach(([attr, value]) => {
      element.setAttribute(attr, value);
    });
    return element;
  }

// Function to create the navbar component
function createNavbar() {
    const navbar = createElementWithAttributes('div', { class: 'navbar', id:'navbar'});

    const logoAndName = createElementWithAttributes('div', { class: 'logo-and-name' });
    const logoImg = createElementWithAttributes('img', { class: 'logo-img', src: 'logo.png', alt: 'logo', style: 'width: 25px;' });
    const logoLabel = createElementWithAttributes('label', { class: 'logo-label' });
    logoLabel.textContent = 'LISRC Data Science Course';
    logoAndName.appendChild(logoImg);
    logoAndName.appendChild(logoLabel);
    logoAndName.addEventListener('click', function(){
      window.location.href = './'
    })


    const navItemsContainer = createElementWithAttributes('div', { class: 'nav-items-container' , id:'nav-items-container'});
    const homeLink = createElementWithAttributes('a', { href: './index.html', class: 'home-label' });
    homeLink.textContent = 'Syllabus';
    const workoutLink = createElementWithAttributes('a', { href: './tools.html', class: 'workout-label' });
    workoutLink.textContent = 'Tools';
    const dataLink = createElementWithAttributes('a', { href: './slides.html', class: 'data-label' });
    dataLink.textContent = 'Slides';
    const notebooks = createElementWithAttributes('a', { href: './notebooks.html', class: 'notebooks-label' });
    notebooks.textContent = 'Notebooks';
    navItemsContainer.appendChild(homeLink);
    navItemsContainer.appendChild(workoutLink);
    navItemsContainer.appendChild(dataLink);
    navItemsContainer.appendChild(notebooks);


    navbar.appendChild(logoAndName);
    navbar.appendChild(navItemsContainer);

    return navbar;
  }
