import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import InfiniteScroll from "./InfiniteScroll/InfiniteScroll";
import SkeletonPost from "./Skeleton/SkeletonPost";
import Timeline from "./Timeline/Timeline";
import Timeline1 from "./Timeline1/Timeline1";
import SearchAndFilter from "./searchAndFilter/SearchAndFilter";
import NavBar from "./Navbar/NavBar";
import Sidebar from "./Sidebar/Sidebar";
import SkillProgressBar from "./progressbar/SkillProgressBar";
import Toastify from "./Toastify/Toastify";
import ReactModal from "./components/Modal/ReactModal";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Timeline />} />
          <Route path="/progressbar" element={<SkillProgressBar />} />
          <Route path="/timeline1" element={<Timeline1 />} />
          <Route path="/skeleton" element={<SkeletonPost />} />
          <Route path="/search&filter" element={<SearchAndFilter />} />
          <Route path="/infinitescroll" element={<InfiniteScroll />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/toastify" element={<Toastify />} />
          <Route path="/modal" element={<ReactModal />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
