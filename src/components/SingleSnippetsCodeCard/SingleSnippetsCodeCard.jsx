import React from "react";
import "./SingleSnippetsCodeCard.scss";

function SingleSnippetsCodeCard({ data }) {
  return (
    <div className="singleSnippetsCodeCard">
      <p>{data.name}</p>
    </div>
  );
}

export default SingleSnippetsCodeCard;
