export {};

type Profile = {
    name: string,
    age: number,
};

type PartialProfile = Partial<Profile>;
type PropertyTypes = keyof Profile;


type Optional<T> = { [P in keyof T]?: T[P] | undefined | null; }
type OptionalProfile = Optional<Profile>;