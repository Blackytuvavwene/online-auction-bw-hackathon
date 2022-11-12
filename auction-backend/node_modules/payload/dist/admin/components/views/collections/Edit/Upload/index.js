import React, { useState, useRef, useEffect, useCallback, } from 'react';
import useField from '../../../../forms/useField';
import Button from '../../../../elements/Button';
import FileDetails from '../../../../elements/FileDetails';
import Error from '../../../../forms/Error';
import './index.scss';
const baseClass = 'file-field';
const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
};
const validate = (value) => {
    if (!value && value !== undefined) {
        return 'A file is required.';
    }
    return true;
};
const Upload = (props) => {
    var _a, _b;
    const inputRef = useRef(null);
    const dropRef = useRef(null);
    const [selectingFile, setSelectingFile] = useState(false);
    const [dragging, setDragging] = useState(false);
    const [dragCounter, setDragCounter] = useState(0);
    const [replacingFile, setReplacingFile] = useState(false);
    const { data = {}, collection, } = props;
    const { filename } = data;
    const { value, setValue, showError, errorMessage, } = useField({
        path: 'file',
        validate,
    });
    const handleDragIn = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragCounter((count) => count + 1);
        if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
            setDragging(true);
        }
    }, []);
    const handleDragOut = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragCounter((count) => count - 1);
        if (dragCounter > 1)
            return;
        setDragging(false);
    }, [dragCounter]);
    const handleDrop = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            setValue(e.dataTransfer.files[0]);
            setDragging(false);
            e.dataTransfer.clearData();
            setDragCounter(0);
        }
        else {
            setDragging(false);
        }
    }, [setValue]);
    // Only called when input is interacted with directly
    // Not called when drag + drop is used
    // Or when input is cleared
    const handleInputChange = useCallback(() => {
        var _a, _b;
        setSelectingFile(false);
        setValue(((_b = (_a = inputRef === null || inputRef === void 0 ? void 0 : inputRef.current) === null || _a === void 0 ? void 0 : _a.files) === null || _b === void 0 ? void 0 : _b[0]) || null);
    }, [inputRef, setValue]);
    useEffect(() => {
        if (selectingFile) {
            inputRef.current.click();
            setSelectingFile(false);
        }
    }, [selectingFile, inputRef, setSelectingFile]);
    useEffect(() => {
        const div = dropRef.current;
        if (div) {
            div.addEventListener('dragenter', handleDragIn);
            div.addEventListener('dragleave', handleDragOut);
            div.addEventListener('dragover', handleDrag);
            div.addEventListener('drop', handleDrop);
            return () => {
                div.removeEventListener('dragenter', handleDragIn);
                div.removeEventListener('dragleave', handleDragOut);
                div.removeEventListener('dragover', handleDrag);
                div.removeEventListener('drop', handleDrop);
            };
        }
        return () => null;
    }, [handleDragIn, handleDragOut, handleDrop, value]);
    useEffect(() => {
        setReplacingFile(false);
    }, [data]);
    const classes = [
        baseClass,
        dragging && `${baseClass}--dragging`,
        'field-type',
    ].filter(Boolean).join(' ');
    return (React.createElement("div", { className: classes },
        React.createElement(Error, { showError: showError, message: errorMessage }),
        (filename && !replacingFile) && (React.createElement(FileDetails, { doc: data, collection: collection, handleRemove: () => {
                setReplacingFile(true);
                setValue(null);
            } })),
        (!filename || replacingFile) && (React.createElement("div", { className: `${baseClass}__upload` },
            value && (React.createElement("div", { className: `${baseClass}__file-selected` },
                React.createElement("span", { className: `${baseClass}__filename` }, value.name),
                React.createElement(Button, { icon: "x", round: true, buttonStyle: "icon-label", iconStyle: "with-border", onClick: () => {
                        setValue(null);
                    } }))),
            !value && (React.createElement(React.Fragment, null,
                React.createElement("div", { className: `${baseClass}__drop-zone`, ref: dropRef },
                    React.createElement(Button, { size: "small", buttonStyle: "secondary", onClick: () => setSelectingFile(true) }, "Select a file"),
                    React.createElement("span", { className: `${baseClass}__drag-label` }, "or drag and drop a file here")))),
            React.createElement("input", { ref: inputRef, type: "file", accept: (_b = (_a = collection === null || collection === void 0 ? void 0 : collection.upload) === null || _a === void 0 ? void 0 : _a.mimeTypes) === null || _b === void 0 ? void 0 : _b.join(','), onChange: handleInputChange })))));
};
export default Upload;
