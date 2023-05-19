import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CustomToast = ({ closeToast }) => {
  return (
    <div>
      Something ernt wrong!
      <button onClick={closeToast}>Close</button>
    </div>
  );
};
const Toastify = () => {
  const notify = () => {
    // toast("Basic notification", {
    //   position: toast.POSITION.TOP_RIGHT,
    //   autoClose: 8000,
    // });
    // toast.success("Success notification", {
    //   position: toast.POSITION.TOP_LEFT,
    //   progress: undefined,
    // });
    // toast.info("Info notification", {
    //   position: toast.POSITION.TOP_CENTER,
    //   hideProgressBar: false,
    // });
    // toast.warn("Warn notification", {
    //   position: toast.POSITION.BOTTOM_RIGHT,
    //   closeOnClick: true,
    // });
    // toast.error("Error notification", {
    //   position: toast.POSITION.BOTTOM_LEFT,
    //   pauseOnHover: true,
    // });
    toast(<CustomToast />, {
      position: toast.POSITION.BOTTOM_CENTER,
      draggable: true,
      autoClose: 10000,
    });
    toast.success("Success notification", {
      position: toast.POSITION.BOTTOM_CENTER,
      draggable: true,
      autoClose: 9000,
    });
    toast.warn("Warning notification", {
      position: toast.POSITION.BOTTOM_CENTER,
      progress: undefined,
      autoClose: 8000,
    });
    toast.error("Error notification", {
      position: toast.POSITION.BOTTOM_CENTER,
      pauseOnHover: true,
      autoClose: 7000,
    });
    toast.info("Info notification", {
      position: toast.POSITION.BOTTOM_CENTER,
      hideProgressBar: false,
      autoClose: 6000,
    });
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}>
      <h1>Toastify</h1>
      <button onClick={notify}>Notify!</button>
      <ToastContainer />
    </div>
  );
};

export default Toastify;
