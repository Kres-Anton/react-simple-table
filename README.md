# react-simple-table

A simple react component wich allow you to show data as table.

## Engines
node >= v8.11.3
npm >= v5.6.0

## Installation

The easiest way to install react-simple-table is from [`npm`](https://www.npmjs.com/):

```sh
npm install --save react-simple-table
```

Alternately, you can download the source and build react-simple-table yourself:

```sh
git clone https://github.com/Kres-Anton/react-simple-table.git
cd react-simple-table
npm install
npm run build
```

## Available props

**title**
	title of the table (String);

**titleStyle**
	custom styles wich would be appllied to title (Object);

**rowStyle**
	custom styles wich would be appllied to all rows in table (with out header's row) (Object);

**cellStyle**
	custom styles wich would be appllied to all cells in table(with out header's cells) (Object);

**headerRowStyle**
	custom styles wich would be appllied to header's row (Object);

**headerCellStyle**
	custom styles wich would be appllied to all header's cells (Object);

**containerStyle**
	custom styles wich would be appllied to table container (Object);

**headerWrapperStyle**
	custom styles wich would be appllied to header's section wrapper (Object);

**contentWrapperStyle**
	custom styles wich would be appllied to content's section wrapper (Object);

**footerSectionStyle**
	custom styles wich would be appllied to footer's section (Object);

**allowAdd**
	allow user to add new row to the table (boolean)

**allowDelete**
	allow user to delete rows in the table (boolean)

**deleteCellStyle**
	custom styles wich would be appllied to header cell and table cell wich response for delete button (Object);

**deleteButtonStyle**
	custom styles wich would be appllied to delete row button (Object);

**addButtonStyle**
	custom styles wich would be appllied to add new row button (Object);

**allowEdit**
	allow user to edit values in the table (boolean)

**loader**
	allow show loader while data isn't be sent to table (boolean)

**loaderComponent**
	custom loader component (Func)

**data**
	data of the table wich would be shown inside table (look to "Expected data's format section");


## Expected data's format

  Object wich consist of header and rows array:
   header - array of objects with title and cellStyle property;
   rows - array of arrays wich consists of values wich would be shown in table;

 Example of expected format : 
 ```js
 const data = {
    header: [
      { title: "title1", cellStyle: { backgroundColor: "white", justifyContent: "flex-end" } },
      { title: "title2" },

    ],
    rows: [
      [
        {
          value: "Test",
          cellStyle: { backgroundColor: "white", justifyContent: "flex-end" }
        },
        { value: 1 },
        { value: "test data" },
        { value: 20000000 },
        { value: "more test data text for example" }
      ]
    ]
  };
```

## Callbacks

**onAdd**
	callback wich would be called after, new row will be added to the table by user

**onDelete**
	callback wich would be called with index of deleted row and data of a row after, row will be deleted from the table by user

**onEdit**
	callback wich would be called with index of edited row and data of a row after, row will be edited by user


## Example 
```js
import React, { Component } from "react";
import ReactSimpleTable from "reaact-simple-table";

class App extends Component {
    render() {
        const data = {
            header: [
            { title: "title1", cellStyle: { backgroundColor: "white", justifyContent: "flex-end" } },
            { title: "title2" },

            ],
            rows: [
            [
                {
                value: "Test",
                cellStyle: { backgroundColor: "white", justifyContent: "flex-end" }
                },
                { value: 1 },
                { value: "test data" },
                { value: 20000000 },
                { value: "more test data text for example" }
            ]
            ]
        };

    return (
      <div className="App">
        <ReactSimpleTable
          data={data}
          title={"Test title"}
        />
      </div>
    );
  }
}
```