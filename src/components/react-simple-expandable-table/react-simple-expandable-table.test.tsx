import React from "react";
import { render } from "@testing-library/react";

import ReactSimpleExpandableTable from "./ReactSimpleExpandableTable";


const data = {
    columns: [
        {
            description: 'col1',
            dataBinding: 'col1-data',
        },
        {
            description: 'col2',
            dataBinding: 'col2-data'
        },
    ],
    rows: [
        {
            'col1-data': 'test1',
            'col2-data': 'test2',
        }]
}

describe("Simple expandable table", () => {
    test("renders the component", () => {
        render(<ReactSimpleExpandableTable data={data}></ ReactSimpleExpandableTable>)
    })
})