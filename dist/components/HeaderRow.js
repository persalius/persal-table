import React from "react";
import { Th, Thd, TdDelete } from "../styled/row";
import { v4 as uuidv4 } from "uuid";

const HeaderRow = ({
  headers,
  onRemove
}) => {
  return React.createElement(Th, null, headers ? headers.map(item => React.createElement(Thd, {
    key: uuidv4()
  }, item.title)) : null, onRemove && React.createElement(TdDelete, null));
};

export default HeaderRow;