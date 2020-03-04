import React, {useEffect, useState, useCallback} from "react";
import {TableBlock} from "../styled/tableBlock";
import HeaderRow from "./HeaderRow";
import Row from "./Row";
import Preloader from "./Preloader";
import AddButton from "./AddButton";
// Types
import {tableDataType1, tableDataType2, cellType} from "../types/table";

interface IProps {
    data: tableDataType1 & tableDataType2,
    onAdd?: boolean,
    onRemove?: boolean,
    onEdit?: boolean
}

const Table: React.FC<IProps> = ({data, onAdd, onRemove, onEdit}) => {
    const [tableData, setTableData] = useState<any>(null);
    const [rowLength, setRowLength] = useState<number>(0);

    useEffect(() => {
        setTableData(data);
        if (data) {
            if (data.header) setRowLength(data.header.length);
            else setRowLength(data[0].length);
        }
    }, [data]);

    // ========== ADD NEW ROW ==========
    const addNewRow = useCallback(() => {
        if (tableData.rows) {
            const newRow: Array<cellType> = [];
            for (let i = 0; i < rowLength; i++) {
                newRow.push({value: ""});
            }
            const rows = [...tableData.rows, newRow];
            setTableData({...tableData, rows});
        } else {
            const newRow: Array<string> = [];
            for (let i = 0; i < rowLength; i++) {
                newRow.push("");
            }
            setTableData([...tableData, newRow]);
        }

        },[tableData, rowLength]
    );

    // ========== DELETE ROW ==========
    const deleteRow = useCallback((index) => {
        if (tableData.rows) {
            const newData = tableData;
            newData.rows.splice(index, 1);
            setTableData({...newData});
        } else {
            const newData = tableData;
            newData.splice(index, 1);
            setTableData([...newData]);
        }
        }, [tableData]);

    return (
        <TableBlock>
            {onAdd === true && tableData && <AddButton addRow={addNewRow} />}

            {
                tableData && tableData.header ? <HeaderRow headers={tableData.header} onRemove={onRemove} /> : null
            }

            {tableData ?
                <Row
                    data={tableData}
                    deleteRow={deleteRow}
                    onRemove={onRemove}
                    onEdit={onEdit}
                />
                : <Preloader
                />}
        </TableBlock>
    );
};

export default Table;
