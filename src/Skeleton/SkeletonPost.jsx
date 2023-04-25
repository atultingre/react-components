import React from "react";
import "./Skeleton.css";
import Skeleton from "./Skeleton";

const SkeletonPost = () => {
  return (
    <>
      <div className="post">
        <Skeleton classes="profile-circle width-50" />
        <Skeleton classes="title width-50" />
        <Skeleton classes="text width-60" />
        <Skeleton classes="text width-80" />
        <Skeleton classes="text width-100" />
      </div>

      <div className="post">
        <Skeleton classes="title width-50" />
        <Skeleton classes="text width-60" />
        <Skeleton classes="text width-80" />
        <Skeleton classes="text width-100" />
        <div className="skeleton-flex">
          <Skeleton classes="text width-10 circle" />
          <Skeleton classes="text width-10 circle" />
          <Skeleton classes="text width-10 circle" />
        </div>
      </div>

      <div className="post">
        <Skeleton classes="profile-square width-50" />
        <Skeleton classes="title width-50" />
        <Skeleton classes="text width-60" />
        <Skeleton classes="text width-80" />
        <Skeleton classes="text width-100" />
      </div>

      <div className="post">
        <Skeleton classes="title width-50" />
        <Skeleton classes="text width-60" />
        <Skeleton classes="text width-80" />
        <Skeleton classes="text width-100" />
      </div>
    </>
  );
};

export default SkeletonPost;
