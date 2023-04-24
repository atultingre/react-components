import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import InfiniteScroll from "./InfiniteScroll/InfiniteScroll";
import SkeletonPost from "./Skeleton/SkeletonPost";
import Timeline from "./Timeline/Timeline";
import Timeline1 from "./Timeline1/Timeline1";
import SearchAndFilter from "./searchAndFilter/SearchAndFilter";
import ProgressBar from "./ProgressBar/ProgressBar";
import NavBar from "./Navbar/NavBar";

function App() {
  return (
    <div>
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Timeline />} />
          <Route path="/progressbar" element={<ProgressBar />} />
          <Route path="/timeline1" element={<Timeline1 />} />
          <Route path="/skeleton" element={<SkeletonPost />} />
          <Route path="/search&filter" element={<SearchAndFilter />} />
          <Route path="/infinitescroll" element={<InfiniteScroll />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
