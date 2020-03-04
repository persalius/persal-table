import React from "react";
import styled from "styled-components";
const Div = styled.div.withConfig({
  displayName: "Table__Div",
  componentId: "sc-1rsicxd-0"
})(["width:50px;height:50px;background:green;transition:0.3s all;.text{background:black;}&:hover{background:blue;}"]);

const Index = () => {
  return React.createElement(Div, null, React.createElement("p", {
    className: "text"
  }, "Hello"));
};

export default Index;