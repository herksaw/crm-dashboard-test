export const invert = obj => {
    let result = {};
    Object.entries(obj).map(([key, value]) => result[value] = key );
    return result;
};
