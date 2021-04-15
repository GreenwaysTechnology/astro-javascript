//object class usefull methods

//Object.assign- return new object; immutablity

function updateProfile(city, profile) {

    //profile.city = city:cloning process from profile to {}
    return Object.assign({}, profile, { city })
}
var profile = {
    id: 1,
    name: 'ram',
    city: 'delhi'
}
var res = null
res = updateProfile('coimbatore', profile)
console.log(res);