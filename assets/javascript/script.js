
// fetch('https://wolnelektury.pl/api/books/studnia-i-wahadlo/?format=json')
//  .then(response => response.json())

fetch('https://wolnelektury.pl/api/books/studnia-i-wahadlo/?format=json')
  .then(response => response.json())
  .then(book => {
    const title = book.fragment_data.title;
    const author = book.authors[0].name; // Since `authors` is an array, get the first author
    const picture = book.cover;
    document.getElementById('cover').src=picture;
    document.getElementById('cover').alt= title;
    document.getElementById('title').textContent = title;
    document.getElementById('author').textContent = author;


  })
  .catch(error => console.error('Error fetching data:', error));


  fetch('https://wolnelektury.pl/api/authors/adam-mickiewicz/kinds/liryka/parent_books/?format=json')
  .then(response => response.json())
  .then(books => {
    const lastFourBooks = books.slice(-4); // Get the last four books
    const cardsContainer = document.querySelector('.cards-container');
    const cardTemplate = document.querySelector('.card'); // Get the single card template

    // Clear the initial card from HTML to avoid duplication
    cardsContainer.innerHTML = '';

    // Loop through the last four books and populate cards
    lastFourBooks.forEach(book => {
      // Clone the card template
      const card = cardTemplate.cloneNode(true);

      // Set image, title, and author
      card.querySelector('.card-img-top').src = book.simple_thumb || 'placeholder.jpg';
      card.querySelector('.card-title').textContent = book.title;
      card.querySelector('.card-author').textContent = book.author;

      // Append the card to the container
      cardsContainer.appendChild(card);
    });
  })
  .catch(error => console.error('Error fetching books:', error));

  document.addEventListener("DOMContentLoaded", () => {
    fetch('https://wolnelektury.pl/api/authors/adam-mickiewicz/kinds/liryka/parent_books/?format=json')
      .then(response => response.json())
      .then(books => {
        const cardsContainer = document.querySelector('.cards-container2');
        const cardTemplate = document.querySelector('.card-template2'); // Get the card template
        const selectedBooks = books.slice(0, 8); // Select the first 8 books
        
        selectedBooks.forEach(book => {
          // Clone the template card
          const card = cardTemplate.cloneNode(true);
          card.style.display = "block"; // Make the card visible
          card.classList.remove('card-template2'); // Remove the template class
          
          // Set the book details
          card.querySelector('.card-img-top2').src = book.simple_thumb || 'placeholder.jpg';
          card.querySelector('.card-title2').textContent = book.title;
          card.querySelector('.card-author2').textContent = book.author;
          
          // Append the card to the container
          cardsContainer.appendChild(card);
        });
      })
      .catch(error => console.error('Error fetching books:', error));
  });
  