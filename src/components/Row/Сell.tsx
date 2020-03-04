import React from "react";
import TextareaAutosize from 'react-textarea-autosize';
import {Td, TdDelete} from "../../styled/row";
// Types
import {cellType} from "../../types/table";

type newCellType = cellType & {onEdit: boolean | undefined};

const Cell: React.FC<newCellType> = ({value, onEdit}) => {
    return (
        //@ts-ignore
        <Td isHover={onEdit}>
            <TextareaAutosize defaultValue={value ? value.toString() : ""} readOnly={onEdit!==true} />
        </Td>
    );
};

interface ICellDelete {
    deleteRow: (index: number) => void,
    index: number
}

export const CellDelete: React.FC<ICellDelete> = ({deleteRow, index}) => {
    return (
        <TdDelete>
            <button onClick={() => deleteRow(index)} />
        </TdDelete>
    );
};

export default Cell;
