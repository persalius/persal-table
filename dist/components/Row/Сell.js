import React from "react";
import TextareaAutosize from 'react-textarea-autosize';
import { Td, TdDelete } from "../../styled/row";

const Cell = ({
  value,
  onEdit,
  rowIndex,
  cellIndex
}) => {
  return (//@ts-ignore
    React.createElement(Td, {
      isHover: !!onEdit
    }, React.createElement(TextareaAutosize, {
      defaultValue: value ? value.toString() : "",
      readOnly: !onEdit //@ts-ignore
      ,
      onKeyUp: e => onEdit(rowIndex, e.target.value, cellIndex)
    }))
  );
};

export const CellDelete = ({
  deleteRow,
  index
}) => {
  return React.createElement(TdDelete, null, React.createElement("button", {
    onClick: () => deleteRow(index)
  }));
};
export default Cell;