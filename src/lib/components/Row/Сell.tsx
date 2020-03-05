import React from "react";
import TextareaAutosize from 'react-textarea-autosize';
import {Td, TdDelete} from "../../styled/row";

interface IProps {
    value: string | number | undefined,
    onEdit: any,
    rowIndex: number,
    cellIndex: number
}

const Cell: React.FC<IProps> = ({value, onEdit, rowIndex, cellIndex}) => {
    return (
        //@ts-ignore
        <Td isHover={!!onEdit}>
            <TextareaAutosize
                defaultValue={value ? value.toString() : ""}
                readOnly={!onEdit}
                //@ts-ignore
                onKeyUp={(e: KeyboardEvent<HTMLTextAreaElement>) => onEdit(rowIndex, e.target.value, cellIndex)}
            />
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
