
import "./App.css"
import Pagination from "./components/Pagination";
import ResultsList from "./components/ResultsList";
import SearchBar from "./components/SearchBar";
function App() {
  return (
    <>
      <div className="sticky">

        <SearchBar />
        <Pagination />
      </div>
      <ResultsList />
    </>
  );
}

export default App;
