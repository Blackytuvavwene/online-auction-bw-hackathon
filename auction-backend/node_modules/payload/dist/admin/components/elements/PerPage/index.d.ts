import React from 'react';
import './index.scss';
declare type Props = {
    limits: number[];
    limit: number;
    handleChange?: (limit: number) => void;
    modifySearchParams?: boolean;
};
declare const PerPage: React.FC<Props>;
export default PerPage;
