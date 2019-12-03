export function funcIE() {
    const a = { prop1: 'okay1', prop2: 'okay2'};
    const b = { prop1: 'okay1', prop2: 'okay2'};
    console.log({...a, ...b});
}