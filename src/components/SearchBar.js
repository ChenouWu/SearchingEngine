import {useState}  from "react";
import './SearchBar.css'
function SearchiBar({onSubmit}){
    const [inputValue,setInputValue]=useState("");
    const handleSubmit=(event)=>{
        event.preventDefault();
        onSubmit(inputValue)
    }
    const handleChange=(event)=>{
        setInputValue(event.target.value);
    }
    return(
        <div className="SearchBar">
            <form onSubmit={handleSubmit}>
            <label className="Label"><strong>Seach your interest</strong></label>
            <input value={inputValue} onChange={handleChange}/>
            </form>
        </div>
    )
}
export default SearchiBar;