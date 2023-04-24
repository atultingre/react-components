// import './App.css';
import InfiniteScroll from './InfiniteScroll/InfiniteScroll';
import SkeletonPost from './Skeleton/SkeletonPost';
import SearchAndFilter from './searchAndFilter/SearchAndFilter';

function App() {
  return (
    <div className="App">
      <SkeletonPost/>
      <br />
      <hr />
      <br />
      <SearchAndFilter/>
      <br />
      <hr />
      <br />
      <InfiniteScroll/>
      <br />
      <hr />
      <br />
    </div>
  );
}

export default App;
