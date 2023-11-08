const bcrypt = require('bcrypt');
export const slugify = text => {
    return text
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-');
}
export const bcrptHash = async (text) => {
    const salt = await bcrypt.genSalt(12);
    return (await bcrypt.hash(text, salt)).toString();
}
export const hashCheck = async (text) => {
    const result = await bcrypt.compare(text, "$2b$12$O2ocFwia6c9RWI7PR9mBF.edm0lj7sVb5VWXTr69XPlyv4Ls.btuG");
    return result;
}