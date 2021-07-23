/*function fetchbooks(){
  fetch ('https://anapioficeandfire.com/api/books')
  .then (function (response) {
      return response.json()
  })
  .then (function (data) {
      console.log(data)
      arrayOfCharacters = []
      for (i=0; i<data.length; i++){
          for (j of data[i].characters){
              arrayOfCharacters.push(j) //Then push or append everything into the array //[] or {} is this the difference between the two?
          } 
      }
      console.log(arrayOfCharacters[1030])})}
  fetchbooks()*/
      //console.log(data[4].name
     /*  for (i=0; i< data.length; i++){
          //console.log('No of pages' + data[i].numberOfPages)
          totalPages = totalPages + data[i].numberOfPages}
      console.log(totalPages)
      }
          )
          console.log(totalPages)
          return totalPages 
  )}

      //console.log(data.results[4].name)//The 5th book in the series

/*         data.results.forEach(
          function(char){
              console.log(char.name)
          }) 
  


fetchbooks()
  

//The 1031st character in the series

function submitData(){

}
 */

function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
  .then (function(response){
    return response.json()})
  .then (function(json){
    return renderBooks(json)})}

function renderBooks(books){
  const main = document.querySelector('main')
  books.forEach(function(book){
    const h2 = document.createElement('h2')
    h2.innerText = book.name
    main.appendChild(h2)
  })}

document.addEventListener("DOMContentLoaded", function() {fetchBooks()})
