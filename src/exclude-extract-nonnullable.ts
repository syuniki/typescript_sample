export {};

type DebugType = () => void;
type SomeTypes = string | number | DebugType;

// Exclude<K, T> 複数の型を持つユニオン型<K>から、指定した型<T>を除外できる 
type FunctionType = Exclude<SomeTypes, string | number> // type FunctionType = () => void
type NonFunctionType = Exclude<SomeTypes, DebugType> // type NonFunctionType = string | number
type TypeExcludingFunction = Exclude<SomeTypes, Function> // Function は関数の型の総称


// Extract<K, T> 複数の型を持つユニオン型<K>から、指定した型<T>を抽出できる
type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;  // type FunctionTypeByExtract = () => void
type NonFunctionTypeByExtract = Extract<SomeTypes, string | number | boolean>; // SomeTypesに存在しない boolean 型は実質取り出せない
type FunctionTypeExtractingFunction = Extract<SomeTypes, Function>;


// NonNullable<K> 複数の型を持つユニオン型<K>から、null, undefined型を除外できる
type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>; // type NonNullableTypes = string | number