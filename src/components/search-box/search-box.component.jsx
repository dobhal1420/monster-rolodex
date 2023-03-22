import { Component } from 'react';
import './search-box.styles.css';

class SearchBox extends Component {
 
    render() {

        const { ...args } = this.props
        return (
            <input
            className={`monster-search ${args.className}`}
            type="search"
            placeholder= {args.placeholder}
            onChange={args.onChangeHandler}
        />
        )
    }
}

export default SearchBox