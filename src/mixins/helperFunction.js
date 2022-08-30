export function json_parse(str) {
    try {
        str = JSON.parse(str);
    } catch (e) {
        return str
    }
    return str
}
export function isJson(str) {
    try {
        str = JSON.parse(str);
    } catch (e) {
        return false
    }
    return true
}