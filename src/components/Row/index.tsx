import React from "react";
import {Tr} from "../../styled/row";
import Cell, {CellDelete} from "./Сell";
import { v4 as uuidv4 } from 'uuid';
// Types
import {rowsType, tableDataType2} from "../../types/table";

interface IProps {
    data: {
        rows?: rowsType
    } & tableDataType2,
    deleteRow: (index: number) => void,
    onRemove: boolean | undefined,
    onEdit: boolean | undefined
}

const Row: React.FC<IProps> = ({data, deleteRow, onRemove, onEdit}) => {
    return (
        <>
            {
                // if rows?: rowsType
                data.rows ? data.rows.map((row, i) => (
                    <Tr key={uuidv4()}>
                        {
                            row.map((item, j) => (
                                <Cell key={uuidv4()} value={item.value} onEdit={onEdit} />
                            ))
                        }
                        {onRemove === true && <CellDelete deleteRow={deleteRow} index={i} />}
                    </Tr>
                )) :

                // if type tableDataType2
                data.map((element, i) => (
                    <Tr key={uuidv4()}>
                        {
                            element.map((item, j) => (
                                <Cell key={uuidv4()} value={item} onEdit={onEdit} />
                            ))
                        }
                        <CellDelete deleteRow={deleteRow} index={i} />
                    </Tr>
                ))
            }
        </>
    );
};

export default Row;
