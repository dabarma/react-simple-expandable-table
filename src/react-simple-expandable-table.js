import { useState } from "react";
import './react-simple-expandable-table.css';
import toggleCollapse from './img/toggle-collapse.png';
import toggleExpand from './img/toggle-expand.png';

export default function ReactSimpleExpandableTable(props){

    const [expandedRows, setExpandedRows] = useState([]);

    const renderContent = ()=>{

        return props.data.rows.map((row,index) =>{
            return renderRow(row,index)
        });
    }

    const renderHeaders = () => {
        return (
            <tr>
                <th className="th-icon"></th>
                {props.data.columns.map((column,index) =>{
                    return <th key={index}>{column.description}</th>
                })}
            </tr>)
    }

    const renderRow = (row, index, deep = 0) => {

        const expanded = expandedRows.includes(index)
        const hasChilds = row.rows && row.rows.length > 0;

        let tds = [];

        tds.push(<tr key={index}>
            {hasChilds ?
            <td>{expanded ? 
                <img className="expandCollapseIcon" style={{paddingLeft:(15*deep) + 'px'}} alt="collapse" src={toggleCollapse} onClick={()=> collapse(index)} /> : 
                <img className="expandCollapseIcon" style={{paddingLeft:(15*deep) + 'px'}} alt="expand" src={toggleExpand} onClick={()=> expand(index)} />}</td> : 
            <td></td>
            }
            {props.data.columns.map((column,index) =>{
                return  <td key={index}>{column.render ? column.render(row[column.dataBinding]) : row[column.dataBinding]}</td>
            })}</tr>);

        if(expanded && hasChilds)
        {
            row.rows.forEach((subRow, index) => {
                tds.push(renderRow(subRow,index.toString() + '-' + deep + '-' + index.toString(),deep+1));
            });
        }
          
        return tds;
    }

    const expand = (index) =>{
		setExpandedRows([index, ...expandedRows]);
	}

    const collapse = (index) => {
        setExpandedRows(expandedRows.filter(x=> x!==index));
	}

    return(
        <table className="expandable-table">
            <thead>
                {renderHeaders()}
            </thead>		
            <tbody>
               {renderContent()}
            </tbody>
        </table>
    ) 
}