import React from "react";
import { fireEvent, render } from "@testing-library/react";

import ReactSimpleExpandableTable from "./ReactSimpleExpandableTable";
import { ReactSimpleExpandableTableData } from "./react-simple-expandable-table-props";


const data: ReactSimpleExpandableTableData = {
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
            data: [
                {'col1-data': 'test1-1'},
                {'col1-data': 'test1-2'},
            ],
            rows: [
                {
                    data: [
                        {'col1-data': 'test1-1-1'},
                        {'col1-data': 'test1-1-2'},
                    ],
                    rows: [
                        {
                            data: [
                                {'col1-data': 'test1-1-1-1'},
                                {'col1-data': 'test1-1-2-1'},
                            ]
                        }
                    ]
                }
            ]
        },
        {
            data: [
                {'col1-data': 'test2-1'},
                {'col1-data': 'test2-2'}
            ],
        }
    ]
}

describe("Simple expandable table", () => {
    test("renders the component", () => {
        render(<ReactSimpleExpandableTable data={data}></ ReactSimpleExpandableTable>)
    })
    test('renders root rows', async ()=>{
        const component = render(<ReactSimpleExpandableTable data={data}></ ReactSimpleExpandableTable>)
    
        const actual = await component.findAllByRole("simple-expandable-row");
    
        expect(actual.length).toBe(2);
    })
    test('expand row', async () => {
        const component = render(<ReactSimpleExpandableTable data={data}></ ReactSimpleExpandableTable>)

        const expandElement = await component.findByRole("expand-collapse");
        fireEvent.click(expandElement);

        const actual = await component.findAllByRole("simple-expandable-row");

        expect(actual.length).toBe(3);
    })
})

