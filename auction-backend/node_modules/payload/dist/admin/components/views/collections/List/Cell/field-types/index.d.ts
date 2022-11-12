/// <reference types="react" />
declare const _default: {
    array: import("react").FC<{
        data: Record<string, unknown>;
        field: import("../../../../../../../fields/config/types").ArrayField;
    }>;
    blocks: ({ data, field }: {
        data: any;
        field: any;
    }) => JSX.Element;
    code: ({ data }: {
        data: any;
    }) => JSX.Element;
    checkbox: ({ data }: {
        data: any;
    }) => JSX.Element;
    date: ({ data }: {
        data: any;
    }) => JSX.Element;
    relationship: (props: any) => JSX.Element;
    richText: ({ data }: {
        data: any;
    }) => JSX.Element;
    select: ({ data, field }: {
        data: any;
        field: import("../../../../../../../fields/config/types").SelectField;
    }) => JSX.Element;
    textarea: ({ data }: {
        data: any;
    }) => JSX.Element;
    upload: (props: any) => JSX.Element;
};
export default _default;
