import React from "react";
import { CopyBlock, nord } from "react-code-blocks";
import "./SingleSnippetsCode.scss";

function SingleSnippetsCode(props) {
  const { title, code, lang } = props;
  return (
    <div className="singleSnippetsCode">
      <div className="singleSnippetsCode__header">
        <p> {title} </p>
      </div>
      <div>
        <CopyBlock
          text={code}
          language={lang}
          theme={nord}
          showLineNumbers={true}
          codeBlock={true}
        />
      </div>
    </div>
  );
}

export default SingleSnippetsCode;
