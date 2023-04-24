// import './App.css';
import InfiniteScroll from './InfiniteScroll/InfiniteScroll';
import SearchAndFilter from './searchAndFilter/SearchAndFilter';

function App() {
  return (
    <div className="App">
      <SearchAndFilter/>
      <br />
      <hr />
      <br />
      <InfiniteScroll/>
    </div>
  );
}

export default App;
