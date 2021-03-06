import React from 'react';
import PropTypes from 'prop-types';
import { Book } from './Book';
import { Hiring } from './Hiring';
import { NotHiring } from './NotHiring';

class Library extends React.Component {
    static defaultProps = {
        books: [
            { "title": "Tahoe Tales", "author": "Chet Whitley", "pages": 1000 }
        ]
    }

    state = {
        open: true,
        freeBookmark: false,
        hiring: false,
        data: [],
        loading: false
    }

    componentDidMount() {
        this.setState({ loading: true })
        fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
            .then(data => data.json())
            .then(data => this.setState({ data, loading: false }))
        console.log("The component is now mounted!")
    }

    componentDidUpdate() {
        console.log("The component just updated!")
    }

    toggleOpenClosed = () => {
        this.setState(prevState => ({
            open: !prevState.open
        }))
    }

    render() {
        // console.log(this.state)
        const { books } = this.props
        return (
            <div>
                {this.state.hiring ? <Hiring /> : <NotHiring />}

                {this.state.loading
                    ? "loading.."
                    : <div>
                        {this.state.data.map(product => {
                            return (
                                <div key={product.id}>
                                    <h3>Library Product of the week!</h3>
                                    <h4>{product.name}</h4>
                                    <img alt={product.name} src={product.image} height={100}></img>
                                </div>
                            )
                        })}
                    </div>}

                <h1>The library is {this.state.open ? 'open' : 'closed'}</h1>

                <button onClick={this.toggleOpenClosed}>Change</button>

                {books.map(
                    (book, i) =>

                        <Book
                            key={i}
                            title={book.title}
                            author={book.author}
                            pages={book.pages}
                            freeBookmark={this.state.freeBookmark} />

                )}

            </div>
        )
    }
}
// class FavoriteColorForm extends Component {
//     state = { value : ''}
//     newColor = e =>
//     this.setState({ value: e.target.value})
//     submit = e => {
//         console.log(`New Color: ${this.state.value}`)
//         e.preventDefault()
//     }
//     render(){
//         return (
//             <form onSubmit={this.submit}>
//                 <label>Favorite Color:  
//                     <input type="color"
//                     onChange={this.newColor}/>
//                 </label>
//                 <button>Submit</button>
//             </form>
//         )
//     }
// }

Library.PropTypes = {
    books: PropTypes.array
}

Book.PropTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    pages: PropTypes.number,
    freeBookmark: PropTypes.bool
}

export default Library