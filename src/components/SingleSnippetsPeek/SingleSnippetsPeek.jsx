import React from "react";
import SingleSnippetsCode from "../SingleSnippetsCode/SingleSnippetsCode";
import "./SingleSnippetsPeek.scss";

function SingleSnippetsPeek() {
  return (
    <div className="singleSnippetsPeek">
      <div>
        <SingleSnippetsCode
          croxxx
          title={"sample code"}
          code={`function print() {  
  var t = this.top - 1; // as top variable points to the element position  
  while(t >= 0) {   
    console.log(this.data[t]);  
    t--;  
  }  
}  
import React from "react";
import SingleSnippetsCode from "../SingleSnippetsCode/SingleSnippetsCode";
import "./SingleSnippetsPeek.scss";
function SingleSnippetsPeek() {
  return (
    <div className="singleSnippetsPeek">
      <div>
        <SingleSnippetsCode
          title={"sample code"}
          code={function print() {  
  var t = this.top - 1; // as top variable points to the element position  
  while(t >= 0) {   
    console.log(this.data[t]);  
    t--;  
  }  
}  }
          lang={"js"}
        />
      </div>
    </div>
  );
}

export default SingleSnippetsPeek;


`}
          lang={"js"}
        />
      </div>
    </div>
  );
}

export default SingleSnippetsPeek;
