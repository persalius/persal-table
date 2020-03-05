## Persal Table for React.js 
### Install
```
npm i persal-table
```
### Usage
```
import Table from "persal-table";
...
<Table data={data} />
```
Data transferred to the table in form of props, which are mandatory.
Table data is described using an array (example 1) or object (example 2):
#### example 1

```
const data = [
    ['cell1', 'cell2', 'cell3', 'cell4'],
    ['cell1', 'cell2', 'cell3', 'cell4'],
    ['cell1', 'cell2', 'cell3', 'cell4'],
    ['cell1', 'cell2', 'cell3', 'cell4'],
];
```
#### example 2
```
const data = {
    header: [
        { title: "Name" },
        { title: "Age" },
        { title: "Email" },
        { title: "City" },
        { title: "Language" }
    ],
    rows: [
        [
            { value: "Sergey" },
            { value: 30 },
            { value: "mail@gmail.com" },
            { value: "Dnepr" },
            { value: "JavaScript" }
        ],
        [
            { value: "Dima" },
            { value: 32 },
            { value: "dima@gmail.com" },
            { value: "Kiev" },
            { value: "C++" }
        ],
        [
            { value: "Denis" },
            { value: 20 },
            { value: "denis@gmail.com" },
            { value: "Odessa" },
            { value: "PHP" }
        ]
    ]
};
```

### Props
##### Table accepts 4 props:
    1. data - table date. Mandatory prop
    2. onAdd - after adding this props into the table, button will show up that will allow you add new rows to the table. Type - boolean | Function
    3. onRemove - after adding this props each row will feature with button, clicking on which you will be able to remove the corresponding row. Type - boolean | Function
    4. onEdit - after adding this props you will be able to edit each cell. Type - boolean | Function
    
    Props onAdd, onRemove, onEdit accept values of two types: boolean or Function
    1. For onAdd props, function as won't accept anything as argument
    2. For onRemove props, function will accept index of deleted row as argument
    3. For onEdit props, function will accept the following three values as arguments:
        1st argument - row index
        2nd argument - new cell value
        3rd argument - cell index
##### Example without functions
```
<Table data={data} onAdd onRemove onEdit />
```
##### Example with functions
```
const addRow = () => {
    console.log("Add new row");
};

const removeRow = (index) => {
    console.log(index);
};

const editCell = (rowIndex, newText, cellIndex) => {
    console.log(rowIndex, newText, cellIndex);
};

<Table data={data} onAdd={addRow} onRemove={removeRow} onEdit={editCell} />
```
