import React from 'react';
import RenderFields from '../../RenderFields';
import withCondition from '../../withCondition';
import FieldDescription from '../../FieldDescription';
import { fieldAffectsData } from '../../../../../fields/config/types';
import { useCollapsible } from '../../../elements/Collapsible/provider';
import './index.scss';
import { GroupProvider, useGroup } from './provider';
import { useTabs } from '../Tabs/provider';
const baseClass = 'group-field';
const Group = (props) => {
    const { label, fields, name, path: pathFromProps, fieldTypes, admin: { readOnly, style, className, width, description, hideGutter = false, }, permissions, } = props;
    const isWithinCollapsible = useCollapsible();
    const isWithinGroup = useGroup();
    const isWithinTab = useTabs();
    const path = pathFromProps || name;
    return (React.createElement("div", { id: `field-${path.replace(/\./gi, '__')}`, className: [
            'field-type',
            baseClass,
            isWithinCollapsible && `${baseClass}--within-collapsible`,
            isWithinGroup && `${baseClass}--within-group`,
            isWithinTab && `${baseClass}--within-tab`,
            (!hideGutter && isWithinGroup) && `${baseClass}--gutter`,
            className,
        ].filter(Boolean).join(' '), style: {
            ...style,
            width,
        } },
        React.createElement(GroupProvider, null,
            React.createElement("div", { className: `${baseClass}__wrap` },
                (label || description) && (React.createElement("header", { className: `${baseClass}__header` },
                    label && (React.createElement("h3", { className: `${baseClass}__title` }, label)),
                    React.createElement(FieldDescription, { value: null, description: description }))),
                React.createElement(RenderFields, { permissions: permissions === null || permissions === void 0 ? void 0 : permissions.fields, readOnly: readOnly, fieldTypes: fieldTypes, fieldSchema: fields.map((subField) => ({
                        ...subField,
                        path: `${path}${fieldAffectsData(subField) ? `.${subField.name}` : ''}`,
                    })) })))));
};
export default withCondition(Group);
