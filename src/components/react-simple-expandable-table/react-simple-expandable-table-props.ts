export class ReactSimpleExpandableTableProps {
    public data?: ReactSimpleExpandableTableData;
}

export class ReactSimpleExpandableTableData {
    public columns: ReactSimpleExpandableTableDataColumn[] = [];
    public rows: ReactSimpleExpandableTableDataRow[] = [];
}

export class ReactSimpleExpandableTableDataColumn {
    public description: string = '';
    public dataBinding: string = '';
    public render?: (cellValue: string) => JSX.Element;
}

export class ReactSimpleExpandableTableDataRow {
    public data?: {[key: string]: string}
    public rows?: ReactSimpleExpandableTableDataRow[];
}