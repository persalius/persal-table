import React, {useEffect, useState} from 'react';
import Table from "./lib";
import {data_one, data_two} from "./data";

function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        async function getData() {
            await setTimeout(() => {
                setData(data_two);
            }, 2000);
        };
        getData().catch(() => console.log("Error loading data"));
    });

    const addRow = () => {
        console.log("Add new row");
    };

    const removeRow = (index) => {
        console.log(index);
    };

    const editCell = (rowIndex, newText, cellIndex) => {
        console.log(rowIndex, newText, cellIndex);
    };

    return (
        <div className="App">
            <Table data={data} onAdd={addRow} onRemove={removeRow} onEdit={editCell} />
        </div>
    );
}

export default App;
