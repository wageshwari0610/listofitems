import SearchIcon from "@mui/icons-material/Search";
import "./searchBox.css";
function SearchBox(props) {
  return (
    <div className="search-box">
      <span className="icon-box">
        <SearchIcon />
      </span>
      <input
        className="searchbox"
        value={props.searchQuery}
        onChange={(e) => props.handleChange(e.target.value)}
      ></input>
    </div>
  );
}

export default SearchBox;
