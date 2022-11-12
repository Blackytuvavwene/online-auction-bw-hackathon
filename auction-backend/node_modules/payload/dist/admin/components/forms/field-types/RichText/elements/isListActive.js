import { Editor, Element } from 'slate';
const isListActive = (editor, format) => {
    var _a;
    let parentLI;
    try {
        parentLI = Editor.parent(editor, editor.selection);
    }
    catch (e) {
        // swallow error, Slate
    }
    if (((_a = parentLI === null || parentLI === void 0 ? void 0 : parentLI[1]) === null || _a === void 0 ? void 0 : _a.length) > 0) {
        const ancestor = Editor.above(editor, {
            at: parentLI[1],
        });
        return Element.isElement(ancestor[0]) && ancestor[0].type === format;
    }
    return false;
};
export default isListActive;
