import React from "react";
import {Button} from "../styled/button";

interface IProps {
    addRow: () => void
}

const AddButton: React.FC<IProps> = ({addRow}) => {
    return (
        <Button onClick={addRow}>
            Add new row
        </Button>
    );
};

export default AddButton;
