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
import ReactSimpleExpandableTable from 'react-simple-expandable-table';

function Demo(){

    const data = {
    columns: [
      {
        description: 'col1',
        dataBinding: 'col1-data',
        render: (data)=> {
          return <div>{data}rendered</div>
        }
      },
      {
        description: 'col2',
        dataBinding: 'col2-data'
      },
      {
        description: 'col3',
        dataBinding: 'col3-data'
      },
      {
        description: 'col4',
        dataBinding: 'col4-data'
      },
      {
        description: 'col5',
        dataBinding: 'col5-data'
      }
    ],
    rows: [
      {
        'col1-data': 'test1',
        'col2-data': 'test2',
        'col3-data': 'test3',
        'col4-data': 'test4',
        'col5-data': 'test5',
        rows: [
            {
                'col1-data': 'test1-1',
                'col2-data': 'test2-1',
                'col3-data': 'test3-1',
                'col4-data': 'test4-1',
                'col5-data': 'test5-1'
            }
      }
    ]
  }

    return(
        <React.Fragment>
            <div>
                <ReactSimpleExpandableTable 
                    data={'smooth'}
                    IconSize={'5rem'}
                    appearCoordinate={1200}
                />    
            </div> 
        </React.Fragment>
    )
}

export default Demo;
```
