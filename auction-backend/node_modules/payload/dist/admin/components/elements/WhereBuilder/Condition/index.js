import React, { useState, useEffect } from 'react';
import RenderCustomComponent from '../../../utilities/RenderCustomComponent';
import ReactSelect from '../../ReactSelect';
import Button from '../../Button';
import Date from './Date';
import Number from './Number';
import Text from './Text';
import Relationship from './Relationship';
import useDebounce from '../../../../hooks/useDebounce';
import './index.scss';
const valueFields = {
    Date,
    Number,
    Text,
    Relationship,
};
const baseClass = 'condition';
const Condition = (props) => {
    var _a, _b, _c;
    const { fields, dispatch, value, orIndex, andIndex, } = props;
    const fieldValue = Object.keys(value)[0];
    const operatorAndValue = (value === null || value === void 0 ? void 0 : value[fieldValue]) ? Object.entries(value[fieldValue])[0] : undefined;
    const operatorValue = operatorAndValue === null || operatorAndValue === void 0 ? void 0 : operatorAndValue[0];
    const queryValue = operatorAndValue === null || operatorAndValue === void 0 ? void 0 : operatorAndValue[1];
    const [activeField, setActiveField] = useState(() => fields.find((field) => fieldValue === field.value));
    const [internalValue, setInternalValue] = useState(queryValue);
    const debouncedValue = useDebounce(internalValue, 300);
    useEffect(() => {
        const newActiveField = fields.find((field) => fieldValue === field.value);
        if (newActiveField) {
            setActiveField(newActiveField);
        }
    }, [fieldValue, fields]);
    useEffect(() => {
        dispatch({
            type: 'update',
            orIndex,
            andIndex,
            value: debouncedValue || '',
        });
    }, [debouncedValue, dispatch, orIndex, andIndex]);
    const ValueComponent = valueFields[activeField === null || activeField === void 0 ? void 0 : activeField.component] || valueFields.Text;
    return (React.createElement("div", { className: baseClass },
        React.createElement("div", { className: `${baseClass}__wrap` },
            React.createElement("div", { className: `${baseClass}__inputs` },
                React.createElement("div", { className: `${baseClass}__field` },
                    React.createElement(ReactSelect, { value: fields.find((field) => fieldValue === field.value), options: fields, onChange: (field) => dispatch({
                            type: 'update',
                            orIndex,
                            andIndex,
                            field: field.value,
                        }) })),
                React.createElement("div", { className: `${baseClass}__operator` },
                    React.createElement(ReactSelect, { disabled: !fieldValue, value: activeField.operators.find((operator) => operatorValue === operator.value), options: activeField.operators, onChange: (operator) => {
                            dispatch({
                                type: 'update',
                                orIndex,
                                andIndex,
                                operator: operator.value,
                            });
                        } })),
                React.createElement("div", { className: `${baseClass}__value` },
                    React.createElement(RenderCustomComponent, { CustomComponent: (_c = (_b = (_a = activeField === null || activeField === void 0 ? void 0 : activeField.props) === null || _a === void 0 ? void 0 : _a.admin) === null || _b === void 0 ? void 0 : _b.components) === null || _c === void 0 ? void 0 : _c.Filter, DefaultComponent: ValueComponent, componentProps: {
                            ...activeField === null || activeField === void 0 ? void 0 : activeField.props,
                            operator: operatorValue,
                            value: internalValue,
                            onChange: setInternalValue,
                        } }))),
            React.createElement("div", { className: `${baseClass}__actions` },
                React.createElement(Button, { icon: "x", className: `${baseClass}__actions-remove`, round: true, buttonStyle: "icon-label", iconStyle: "with-border", onClick: () => dispatch({
                        type: 'remove',
                        orIndex,
                        andIndex,
                    }) }),
                React.createElement(Button, { icon: "plus", className: `${baseClass}__actions-add`, round: true, buttonStyle: "icon-label", iconStyle: "with-border", onClick: () => dispatch({
                        type: 'add',
                        field: fields[0].value,
                        relation: 'and',
                        orIndex,
                        andIndex: andIndex + 1,
                    }) })))));
};
export default Condition;
