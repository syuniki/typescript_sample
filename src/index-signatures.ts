export {};

interface Profile {
    underTwinty: boolean;
    [index: string]: string | number | boolean;
}

let profile: Profile = {
    underTwinty: false,
}

// How to write index signature
//  { [ index: typeForIndex ]: typeForValue }

profile.name = 'Syuniki';
profile.age = 30;
profile.nationality = 'Japan';

console.log({ profile });