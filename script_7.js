const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 9 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 2 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 6 },
  { title: 'Les frères Karamazov', id: 450911, rented: 5 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];


//Est-ce que tous les livres ont été au moins empruntés une fois ?

books.forEach(info => {
  if (info.rented >= 1) {
    console.log("Les livres ont tous été empruntés au moins une fois.");
  }
  else{
    console.log("Les livres n'ont pas tous été victime du même succès = pas tous emprunté ")
  }
})

//Quel est livre le plus emprunté ?


const most = Math.max.apply(Math, books.map(
function(book) {return book.rented}));
console.log('le livre le plus emprunté est : ');
console.log(books.find(book => book.rented === most));


//Quel est le livre le moins emprunté ?

const min= Math.min.apply(Math, books.map(
  function(book) {return book.rented}));
  console.log('le livre le moins emprunté est : ');
  console.log(books.find(book => book.rented === min));

//Trouve le livre avec l'ID: 873495
const missingId = books.find( book => book.id === 873495);
console.log("le livre avec l'ID: 873495  est: ")
console.log(missingId);

//Supprime le livre avec l'ID: 133712

const deleteBook = books.find( book => book.id === 133712);
console.log('livre à supprimer : ')
console.log(deleteBook);

arr = books.filter(item => item !== deleteBook)
console.log('Array après suppression : ')
console.log(arr)

//Trie les livres par ordre alphabétique

let sortedName = books.sort(function(a, b){
  if(a.title < b.title) { return -1; }
  if(a.title > b.title) { return 1}
  return 0;
})

console.log(sortedName);