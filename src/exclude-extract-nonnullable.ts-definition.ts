export {};

type MyExclude<T, U> = T extends U ? never : T;
type DebugType = () => void;
type SomeTypes = string | number | DebugType;

type FunctionType = Exclude<SomeTypes, string | number> // type FunctionType = () => void
type MyFunctionType = MyExclude<SomeTypes, string | number>


type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;  // type FunctionTypeByExtract = () => void


type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>; // type NonNullableTypes = string | number