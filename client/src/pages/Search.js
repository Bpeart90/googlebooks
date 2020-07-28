import React from "react";
import Form from "../components/Form";
import API from "../utils/API";
import Results from "../components/Results";

class Search extends React.Component {
    state = {
        userInput: "",
        value: "",
        books: []
    };

    makeBook = bookData => {
        return {
            _id: bookData.id,
            title: bookData.volumeInfo.title,
            authors: bookData.volumeInfo.authors,
            description: bookData.volumeInfo.description,
            image: bookData.volumeInfo.imageLinks.thumbnail,
            link: bookData.volumeInfo.previewLink
        }
    }

    searchBook = query => {
        API.getGoogle(query)
            // .then(res => this.setState({ books: res.data.items.map(bookData => this.makeBook(bookData)) }))
            // .then(console.log(this.state.books))
            .then(res => this.setState({ books: res.data }))
            // .then(res => console.log(res))
            // .then(res => console.log(res.data.map(book => this.setState({ books: book }))))

            .catch(err => console.error(err));
    };

    handleInputChange = event => {
        // const name = event.target.name;
        const value = event.target.value;
        this.setState({
            userInput: value
        });
        console.log(value)
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchBook(this.state.userInput);

    };
    saveBook = (book) => {
        console.log(book)
    }

    render() {
        console.log(this.state.books)
        return (
            <div>
                <Form
                    search={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                />
                <div className="container">
                    <h2>Saved books</h2>
                    <Results books={this.state.savedBooks} />

                    {this.state.books.map((book, i) => {
                        return <div className="bookCard" key={i}>
                            <h3>{book.volumeInfo.title}</h3>
                            <p>{book.volumeInfo.authors} </p>
                            <p>{book.volumeInfo.description} </p>
                            <p>{book.volumeInfo.imageLinks.smallThumbnail} </p>
                            <p>{book.volumeInfo.infoLink} </p>
                            <button onClick={() => this.saveBook(book)}>Save</button>
                        </div>


                    })}

                </div>
            </div>
        )
    }
}

export default Search;