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
export const hashCheck = async (text,hashPas) => {
    const result = await bcrypt.compare(text,hashPas);
    return result;
}