// import { Cancel, CancelOutlined } from "@mui/icons-material";
// import { IconButton } from "@mui/material";
import React from "react";
import { CopyBlock, nord } from "react-code-blocks";
import "./SingleSnippetsCode.scss";
// import { snippetsActions } from "../../store/SnippetsSlice";
import { useDispatch, useSelector } from "react-redux";
function SingleSnippetsCode(props) {
  const code = useSelector((state) => state.snippetsSlice.code);
  // const dispatch = useDispatch();
  // const { title, code, lang, croxxx } = props;
  return (
    <div className="singleSnippetsCode">
      <div className="singleSnippetsCode__header">
        <p> {code.title} </p>
        {/* {croxxx && (
          <IconButton
            onClick={() => {
              dispatch(snippetsActions.setShowCodeCard(false));
            }}
          >
            <CancelOutlined />
          </IconButton>
        )} */}
      </div>
      <div>
        <CopyBlock
          text={code.text}
          language={code.lang}
          theme={nord}
          showLineNumbers={true}
          codeBlock={true}
        />
      </div>
    </div>
  );
}

export default SingleSnippetsCode;
