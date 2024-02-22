// Додавання стилів для галереї
const style = document.createElement('style');
style.textContent = `
  .gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: center; 
    align-items: center; 
    gap: 10px; 
    padding: 0;
    margin: 0;
    list-style: none;
    width: 1128px; /* Фіксована ширина галереї */
    height: 300px; /* Фіксована висота галереї */
  }
  .gallery li {
    flex-basis: calc(33.333% - 20px); 
    display: flex;
    justify-content: center; 
    align-items: center;
  }
  .gallery img {
    width: 100%; 
    height: auto; 
    max-width: 100%;
    
  }
`;
document.head.appendChild(style);

// Дані для галереї
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// Створення та додавання галереї
const galleryEl = document.querySelector('.gallery');
const markup = images.map(({url, alt}) => `<li><img src="${url}" alt="${alt}"></li>`).join('');
galleryEl.insertAdjacentHTML('beforeend', markup);

//вирівнювання висоти фотографій
window.addEventListener('load', () => {
  const galleryImages = document.querySelectorAll('.gallery img');
  const galleryHeight = '300px'; // Висота галереї

  galleryImages.forEach(img => {
    img.style.height = galleryHeight;
  });
});