import React from "react";
import "./index.css";
const Post = ({ body, heading, upVotes, publishedOn }) => {
  return (
    <div className="post-container">
      <h2>{heading}</h2>
      <div className="article-body">{body}</div>
      <div className="divider" />
      <InfoPill title="Up Votes" value={upVotes} />
      <InfoPill title="Published on" value={publishedOn} />
    </div>
  );
};

export default Post;

const InfoPill = ({ title, value }) => {
  return (
    <div className="info-con">
      <span className="info-title">{title} :</span>
      <span className="info-value">{value}</span>
    </div>
  );
};
InfoPill.defaultProps = {
  title: "Title",
  value: "Value",
};
