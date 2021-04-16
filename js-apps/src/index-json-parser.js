
var emp = {
    id: 1,
    name: 'hello'
}
console.log(typeof emp);
emp = {
    "id": 1,
    "name": 'hello'
}
console.log(typeof emp);
////////////////////////////////////////////////////////////////////////

var profiles = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },
    { id: 3, name: 'c' },
    { id: 4, name: 'd' },
];
console.log(typeof profiles);
//object to string conversion
var profilesJson = JSON.stringify(profiles);
console.log(typeof profilesJson)
console.log(profiles)
console.log(profilesJson)
var profilesObj = JSON.parse(profilesJson);
console.log(typeof profilesObj)


