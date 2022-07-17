import React, { useState } from "react";
import { CopyBlock, nord } from "react-code-blocks";
import { useDispatch, useSelector } from "react-redux";
import { Collapse, IconButton } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { TransitionGroup } from "react-transition-group";
import "./SingleSnippetsCode.scss";

function SingleSnippetsCode(props) {
  const code = useSelector((state) => state.snippetsSlice.code);
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="singleSnippetsCode">
      <div
        className="singleSnippetsCode__header"
        onClick={() => setExpanded(!expanded)}
      >
        <p> {code.title} </p>
        <IconButton
          sx={{ color: "white" }}
          onClick={() => {
            setExpanded(!expanded);
          }}
        >
          <ExpandMore sx={{ color: "white" }} />
        </IconButton>
      </div>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <TransitionGroup>
          <div>
            <CopyBlock
              text={code.text}
              language={code.lang}
              theme={nord}
              showLineNumbers={true}
              codeBlock={true}
            />
          </div>
        </TransitionGroup>
      </Collapse>
    </div>
  );
}

export default SingleSnippetsCode;
