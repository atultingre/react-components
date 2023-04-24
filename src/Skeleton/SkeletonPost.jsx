import React from "react";
import "./Skeleton.css";
import Skeleton from "./Skeleton";

const SkeletonPost = () => {
  return (
    <div className="post">
      <Skeleton classes="profile-circle width-50" />
      <Skeleton classes="title width-50" />
      <Skeleton classes="text width-60" />
      <Skeleton classes="text width-80" />
      <Skeleton classes="text width-100" />
    </div>
  );
};

export default SkeletonPost;
