//@ts-ignore
export type headerType = Array<{title: string}>;
export type cellType = {value: string | number | undefined};
export type rowsType = Array<Array<cellType>>;

export type tableDataType1 = {
    header: headerType,
    rows: rowsType
};

export type tableDataType2 = Array<Array<string>>;



