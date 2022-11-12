import React, { useCallback } from 'react';
import RadioGroupInput from '../../../forms/field-types/RadioGroup/Input';
import { useTheme } from '../../../utilities/Theme';
export const ToggleTheme = () => {
    const { theme, setTheme, autoMode } = useTheme();
    const onChange = useCallback((newTheme) => {
        setTheme(newTheme);
    }, [setTheme]);
    return (React.createElement(RadioGroupInput, { name: "theme", label: "Admin Theme", value: autoMode ? 'auto' : theme, onChange: onChange, options: [
            {
                label: 'Automatic',
                value: 'auto',
            },
            {
                label: 'Light',
                value: 'light',
            },
            {
                label: 'Dark',
                value: 'dark',
            },
        ] }));
};
