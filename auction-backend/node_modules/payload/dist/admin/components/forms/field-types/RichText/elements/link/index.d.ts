/// <reference types="react" />
declare const link: {
    Button: ({ fieldProps }: {
        fieldProps: any;
    }) => JSX.Element;
    Element: ({ attributes, children, element, editorRef, fieldProps }: {
        attributes: any;
        children: any;
        element: any;
        editorRef: any;
        fieldProps: any;
    }) => JSX.Element;
    plugins: ((incomingEditor: import("slate").BaseEditor & import("slate-react").ReactEditor & import("slate-history").HistoryEditor) => import("slate").BaseEditor & import("slate-react").ReactEditor & import("slate-history").HistoryEditor)[];
};
export default link;
