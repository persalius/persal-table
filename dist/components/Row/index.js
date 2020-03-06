import React from "react";
import { Tr } from "../../styled/row";
import Cell, { CellDelete } from "./Сell";
import { v4 as uuidv4 } from 'uuid';

const Row = ({
  data,
  deleteRow,
  onRemove,
  onEdit
}) => {
  return React.createElement(React.Fragment, null, // if rows?: rowsType
  data.rows ? data.rows.map((row, i) => React.createElement(Tr, {
    key: uuidv4()
  }, row.map((item, j) => React.createElement(Cell, {
    key: uuidv4(),
    value: item.value,
    onEdit: onEdit,
    rowIndex: i,
    cellIndex: j
  })), onRemove && React.createElement(CellDelete, {
    deleteRow: deleteRow,
    index: i
  }))) : // if type tableDataType2
  data.map((element, i) => React.createElement(Tr, {
    key: uuidv4()
  }, element.map((item, j) => React.createElement(Cell, {
    key: uuidv4(),
    value: item,
    onEdit: onEdit,
    rowIndex: i,
    cellIndex: j
  })), React.createElement(CellDelete, {
    deleteRow: deleteRow,
    index: i
  }))));
};

export default Row;