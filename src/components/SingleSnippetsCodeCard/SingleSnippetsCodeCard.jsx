import React from "react";
import "./SingleSnippetsCodeCard.scss";
import { snippetsActions } from "../../store/SnippetsSlice";
import { useDispatch, useSelector } from "react-redux";

function SingleSnippetsCodeCard(param) {
  const { name, text, lang, cardId } = param;
  const dispatch = useDispatch();
  const active = useSelector((state) => state.snippetsSlice.activeCard);
  return (
    <div
      className={`singleSnippetsCodeCard ${
        active === cardId ? "singleSnippetsCodeCard__active" : ""
      }`}
      onClick={() => {
        dispatch(snippetsActions.setCode({ title: name, text, lang }));
        dispatch(snippetsActions.setActiveCard(cardId));
        console.log(param);
      }}
    >
      <p>{name}</p>
    </div>
  );
}

export default SingleSnippetsCodeCard;
