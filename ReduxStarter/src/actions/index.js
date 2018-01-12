export function selectBook(book) {
  //console.log('A book has been selected: ', book.title);
  //SELECT BOOK is an ACtion creator and needs to return an action - an object with a type property.

  //an action contains a type and a payload. 
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
