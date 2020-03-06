import React from "react";
import TextareaAutosize from 'react-textarea-autosize';
import {Td, TdDelete} from "../../styled/row";

const Cell = ({value, onEdit, rowIndex, cellIndex}) => {
    return (
        //@ts-ignore
        <Td isHover={!!onEdit}>
            <TextareaAutosize
                defaultValue={value ? value.toString() : ""}
                readOnly={!onEdit}
                //@ts-ignore
                onKeyUp={typeof onEdit === "function" ? (e => onEdit(rowIndex, e.target.value, cellIndex)) : null}
            />
        </Td>
    );
};

export const CellDelete = ({deleteRow, index}) => {
    return (
        <TdDelete>
            <button onClick={() => deleteRow(index)} />
        </TdDelete>
    );
};

export default Cell;
