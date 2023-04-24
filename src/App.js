import InfiniteScroll from './InfiniteScroll/InfiniteScroll';
import SkeletonPost from './Skeleton/SkeletonPost';
import Timeline from './Timeline/Timeline';
// import Timeline1 from './Timeline/Timeline1/Timeline1';
import SearchAndFilter from './searchAndFilter/SearchAndFilter';

function App() {
  return (
    <div className="App">
    {/* <Timeline1/>
      <br />
      <hr />
      <br /> */}
    <Timeline/>
      <br />
      <hr />
      <br />
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
