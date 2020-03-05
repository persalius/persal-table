import React from "react";
import {Th, Thd, TdDelete} from "../styled/row";
import {v4 as uuidv4} from "uuid";

interface IProps {
    headers: Array<{title: string}>,
    onRemove: any
}

const HeaderRow: React.FC<IProps> = ({headers, onRemove}) => {
    return (
        <Th>
            {
                headers ? headers.map(item => (
                    <Thd key={uuidv4()}>{item.title}</Thd>
                ))
                    : null
            }
            {onRemove && <TdDelete />}
        </Th>
    );
};

export default HeaderRow;
