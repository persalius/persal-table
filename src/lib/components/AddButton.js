import React from "react";
import {Button} from "../styled/button";

const AddButton = ({addRow}) => {
    return (
        <Button onClick={addRow}>
            Add new row
        </Button>
    );
};

export default AddButton;
