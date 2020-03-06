import React from "react";
import {Th, Thd, TdDelete} from "../styled/row";
import {v4 as uuidv4} from "uuid";

const HeaderRow = ({headers, onRemove}) => {
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
