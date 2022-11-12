import React from 'react';
export declare type Column = {
    accessor: string;
    components: {
        Heading: React.ReactNode;
        renderCell: (row: any, data: any) => React.ReactNode;
    };
};
export declare type Props = {
    columns: Column[];
    data: unknown[];
};
