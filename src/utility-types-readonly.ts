export {};

type Profile = {
    name: string;
    age: number;
};

const me: Profile = {
    name: 'Syuniki',
    age: 30,
};

me.age++;

console.log({ me });
type PersonalDataType = Readonly<Profile>;

const kitsune: PersonalDataType = {
    name: 'kitsune',
    age: 5,
};

// kitsune.age++;

type YomitoriSenyo<T> = {
    readonly [P in keyof T]: T[P]
};

type YomitoriSenyoProfile = YomitoriSenyo<Profile>;

