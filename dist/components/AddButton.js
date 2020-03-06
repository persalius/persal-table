import React from "react";
import { Button } from "../styled/button";

const AddButton = ({
  addRow
}) => {
  return React.createElement(Button, {
    onClick: addRow
  }, "Add new row");
};

export default AddButton;