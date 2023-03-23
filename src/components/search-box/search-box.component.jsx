
import './search-box.styles.css';

const SearchBox = (props) => {
 
    return (
        <input
        className={`monster-search ${props.className}`}
        type="search"
        placeholder= {props.placeholder}
        onChange={props.onChangeHandler}
    />
    )

}

export default SearchBox