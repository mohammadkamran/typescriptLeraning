class Person {
    constructor(readonly name: string) { }
}

function expect(x:Person) {
    return {
        toBe(y:Person) {
            if(x !== y) {
                throw new Error(`Expected ${x} to be ${y}`);
            }
        },
        toEqual(y:Person) {
            const isEqual = JSON.stringify(x) === JSON.stringify(y);
            if (!isEqual) {
                throw new Error(`Expected ${JSON.stringify(x)} to equal ${JSON.stringify(y)}`);
            }
        }
    }
}

// DO NOT CHANGE AFTER THIS

const p1 = new Person('john');
const p2 = new Person('jack');
const p3 = new Person('john');

(() => {
    let count = 0
    try { expect(p1).toEqual(p3); ++count } catch { }
    try { expect(p1).toBe(p3); } catch { ++count }
    try { expect(p1).toBe(p1); ++count } catch { }
    console.log(`${count}/3 passed`);
})();