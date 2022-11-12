import { Editor, Element } from 'slate';
export const isLastSelectedElementEmpty = (editor) => {
    var _a;
    const currentlySelectedNodes = Array.from(Editor.nodes(editor, {
        at: Editor.unhangRange(editor, editor.selection),
        match: (n) => !Editor.isEditor(n) && Element.isElement(n) && (!n.type || n.type === 'p'),
    }));
    const lastSelectedNode = currentlySelectedNodes === null || currentlySelectedNodes === void 0 ? void 0 : currentlySelectedNodes[(currentlySelectedNodes === null || currentlySelectedNodes === void 0 ? void 0 : currentlySelectedNodes.length) - 1];
    return lastSelectedNode && Element.isElement(lastSelectedNode[0])
        && (!lastSelectedNode[0].type || lastSelectedNode[0].type === 'p')
        && ((_a = lastSelectedNode[0].children) === null || _a === void 0 ? void 0 : _a[0].text) === '';
};
