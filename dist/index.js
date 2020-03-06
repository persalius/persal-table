import React, { useEffect, useState, useCallback } from "react";
import { TableBlock } from "./styled/tableBlock";
import HeaderRow from "./components/HeaderRow";
import Row from "./components/Row";
import Preloader from "./components/Preloader";
import AddButton from "./components/AddButton";

const Table = ({
  data,
  onAdd,
  onRemove,
  onEdit
}) => {
  const [tableData, setTableData] = useState(null);
  const [rowLength, setRowLength] = useState(0);
  useEffect(() => {
    setTableData(data);

    if (data) {
      if (data.header) setRowLength(data.header.length);else setRowLength(data[0].length);
    }
  }, [data]); // ========== ADD NEW ROW ==========

  const addNewRow = useCallback(() => {
    if (onAdd instanceof Function) onAdd();

    if (tableData.rows) {
      const newRow = [];

      for (let i = 0; i < rowLength; i++) {
        newRow.push({
          value: ""
        });
      }

      const rows = [...tableData.rows, newRow];
      setTableData({ ...tableData,
        rows
      });
    } else {
      const newRow = [];

      for (let i = 0; i < rowLength; i++) {
        newRow.push("");
      }

      setTableData([...tableData, newRow]);
    }
  }, [tableData, rowLength, onAdd]); // ========== DELETE ROW ==========

  const deleteRow = useCallback(index => {
    if (onRemove instanceof Function) onRemove(index);

    if (tableData.rows) {
      const newData = tableData;
      newData.rows.splice(index, 1);
      setTableData({ ...newData
      });
    } else {
      const newData = tableData;
      newData.splice(index, 1);
      setTableData([...newData]);
    }
  }, [tableData, onRemove]); // ========== EDIT CELL ==========

  const editCell = useCallback((rowIndex, newText, cellIndex) => {
    if (onEdit instanceof Function) onEdit(rowIndex, newText, cellIndex);
  }, [onEdit]);
  return React.createElement(TableBlock, null, onAdd && tableData && React.createElement(AddButton, {
    addRow: addNewRow
  }), tableData && tableData.header ? React.createElement(HeaderRow, {
    headers: tableData.header,
    onRemove: onRemove
  }) : null, tableData ? React.createElement(Row, {
    data: tableData,
    deleteRow: deleteRow,
    onRemove: onRemove,
    onEdit: onEdit instanceof Function ? editCell : onEdit
  }) : React.createElement(Preloader, null));
};

export default Table;