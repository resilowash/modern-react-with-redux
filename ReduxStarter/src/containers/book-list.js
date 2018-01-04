import React {Component} from 'react';

export default class BookList extends Component {
  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }

  renderList() {
    return this.props.book.map((book) => {
      return(
        <li className="list-group-item" key={book.title}>{book.title}</li>
      )
    })
  }
}
