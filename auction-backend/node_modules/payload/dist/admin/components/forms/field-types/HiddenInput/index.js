import React, { useEffect } from 'react';
import useField from '../../useField';
import withCondition from '../../withCondition';
const HiddenInput = (props) => {
    const { name, path: pathFromProps, value: valueFromProps, disableModifyingForm = true, } = props;
    const path = pathFromProps || name;
    const { value, setValue } = useField({
        path,
    });
    useEffect(() => {
        if (valueFromProps !== undefined) {
            setValue(valueFromProps, disableModifyingForm);
        }
    }, [valueFromProps, setValue, disableModifyingForm]);
    return (React.createElement("input", { id: `field-${path.replace(/\./gi, '__')}`, type: "hidden", value: value || '', onChange: setValue, name: path }));
};
export default withCondition(HiddenInput);
