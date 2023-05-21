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
import Tolltip from "./components/Tooltip/Tolltip";
import Countup from "./components/Countup/Countup";
import ReactColor from "./components/ReactColor/ReactColor";
import DatePickerComponent from "./components/DatePicker/DatePickerComponent";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import Loader from "./components/Loader/Loader";

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
          <Route path="/tooltip" element={<Tolltip />} />
          <Route path="/countup" element={<Countup />} />
          <Route path="/reactcolor" element={<ReactColor />} />
          <Route path="/datepicker" element={<DatePickerComponent />} />
          <Route path="/videoplayer" element={<VideoPlayer />} />
          <Route path="/loader" element={<Loader />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
