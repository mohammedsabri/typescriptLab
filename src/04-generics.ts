import {friends, colleagues} from "./01-basics";
import {Friend, Colleague} from "./myTypes";

function findMatch<T>( data : T[], criteria: (d: T) => boolean ) : T | undefined {
    return data.find((criteria))
}
 

function sort<T>(data: T[], compareFn: (a: T, b: T) => number): T[] {
    return [...data].sort(compareFn);
}
console.log(sort<Friend>(friends, (a, b) => a.age - b.age));
// Sort colleagues by extension number
console.log(
    sort<Colleague>(
        colleagues.current,
        (a, b) => a.contact.extension - b.contact.extension
    )
);