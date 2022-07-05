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
    public render?: () => void;
}

export class ReactSimpleExpandableTableDataRow {
    public data?: Array<{[key: string]: string}>;
    public rows?: ReactSimpleExpandableTableDataRow[];
}