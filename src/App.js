import "./App.css";
import SortByTitle from "./components/sortByTitle";
import NavBar from "./components/NavBar";
import SearchBox from "./components/searchBox";
import BoxCard from "./components/boxCard";
import { useState, useEffect } from "react";
import Pagination from "./components/pagination";
import { paginate } from "./components/paginate";
import _ from "lodash";
import axios from "axios";

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedError) {
    alert("An unexpected error occurred.");
  }
  return Promise.reject(error);
});
function App() {
  const [post, setPost] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setcurrentPage] = useState(1);
  const [sortedData, setsortedData] = useState([]);
  const [sortOrder, setsortOrder] = useState("asc");
  const pageSize = 10;

  const handleSortBy = (path) => {
    if (path == "title") {
      const sortedPost = _.orderBy(post, "title", sortOrder);
      setsortedData(sortedPost);
    }
    if (path == "body") {
      const sortedPost = _.orderBy(post, "body", sortOrder);
      setsortedData(sortedPost);
    }
  };

  const paginateSortedData = paginate(sortedData, currentPage, pageSize);

  const paginateData = paginate(post, currentPage, pageSize);
  {
    console.log(paginateData);
  }

  const handlePageChange = (page) => {
    setcurrentPage(page);
  };

  const getUrl = () => {
    if (searchQuery !== "") {
      return `https://jsonplaceholder.typicode.com/posts?q=${searchQuery}`;
    } else {
      return `https://jsonplaceholder.typicode.com/posts`;
    }
  };
  useEffect(() => {
    axios
      .get(getUrl())
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        alert("Posts are not available");
      });
  }, [post]);

  return (
    <div className="App">
      <NavBar />
      <div className="header">
        <div className="search-div">
          <SearchBox searchQuery={searchQuery} handleChange={setSearchQuery} />
          <SortByTitle onSort={handleSortBy} />
        </div>

        {post.length > 0 ? (
          paginateSortedData.length === 0 ? (
            <div>
              {paginateData.map((data) => (
                <BoxCard title={data.title} description={data.body} />
              ))}
            </div>
          ) : (
            <div>
              {paginateSortedData.map((data) => (
                <BoxCard title={data.title} description={data.body} />
              ))}
            </div>
          )
        ) : (
          <div className="noResultFound">
            <p>No Result Found !</p>
          </div>
        )}

        {post && post.length > 10 && (
          <div className="pagination-div">
            <Pagination
              handlePageChange={handlePageChange}
              count={post.length}
              currentPage={currentPage}
              pageSize={pageSize}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
