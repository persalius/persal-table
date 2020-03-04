import React, {useEffect, useState} from 'react';
import Table from "./components/Table";
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
    return (
        <div className="App">
            <Table data={data} onAdd onRemove onEdit />
        </div>
    );
}

export default App;
