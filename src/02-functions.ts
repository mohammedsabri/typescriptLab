import {Friend, Colleague } from './myTypes'


function older(f: Friend) : string {
    f.age += 1
    return `${f.name} is now ${f.age}` 
}
function allOlder(friends) {
    return friends.map(friend => {
        friend.age += 1; // Increment age by 1
        return `${friend.age}`; // Convert to string
    });
}

function addColleague(colleagues, name, department, email) {
    const maxExtension = colleagues.reduce((max, colleague) => Math.max(max, colleague.extension), 0);
    const newColleague = {
        name,
        department,
        email,
        extension: maxExtension + 1
    };
    colleagues.push(newColleague);
}


const friend1: Friend = {
    name: "Paul Fleming",
    phone: "087-12345",
    age: 25,
};

function findFriends(friends, criterion) {
    return friends.filter(criterion);
}
function sortColleagues(
    colleagues: Colleague[],
    sorter: (c1: Colleague, c2: Colleague) => number
  ): EmailContact[] {
    const sorted = colleagues.sort(sorter); // Colleague[] inferred
    const result: EmailContact[] = sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
    return result 
  }
  
  console.log(sortColleagues(colleagues.current, (a, b) => a.contact.extension - b.contact.extension));
  console.log(sortColleagues(colleagues.current, (a, b) => a.name.length - b.name.length));
  

console.log(older(friends[0]))


// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]): Colleague {
    const result = cs.sort(
      (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];
  }
  console.log(highestExtension(colleagues.current));
  