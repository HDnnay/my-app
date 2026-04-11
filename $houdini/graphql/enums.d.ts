
type ValuesOf<T> = T[keyof T]
	
export declare const DedupeMatchMode: {
    readonly Variables: "Variables";
    readonly Operation: "Operation";
    readonly None: "None";
}

export type DedupeMatchMode$options = ValuesOf<typeof DedupeMatchMode>
 
export declare const SortEnumType: {
    readonly ASC: "ASC";
    readonly DESC: "DESC";
}

export type SortEnumType$options = ValuesOf<typeof SortEnumType>
 