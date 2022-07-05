# react-simple-expandable-table
Simple expandable table component for React

Source code at https://github.com/dabarma/react-simple-expandable-table

## Installation

    npm install --save react-simple-expandable-table

or

    yarn add react-simple-expandable-table

## Usage


``` 
import React from 'react';
import { ReactSimpleExpandableTable, ReactSimpleExpandableTableData } from 'react-simple-expandable-table';

function Demo(){

    const tableDefinition: ReactSimpleExpandableTableData = {
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
                data: {
                    'col1-data': 'test1',
                    'col2-data': 'test2'      
                },
                rows: [
                    {
                        data: {
                            'col1-data': 'test1-1',
                            'col2-data': 'test2-1'      
                        },
                        rows: [
                            {
                                data: {
                                    'col1-data': 'test1-1-1',
                                    'col2-data': 'test2-1-1'      
                                }
                            }
                        ]
                    }
                ]
            },
            {
                data: {
                    'col1-data': 'test3',
                    'col2-data': 'test4'      
                },
            }
        ]
    }

    return(
        <ReactSimpleExpandableTable data={tableDefinition}></ReactSimpleExpandableTable>
    )
}

export default Demo;
```
