let a = {
    name: "kashif",
    address : {
        first: "keshav nagar",
        last: "anna market"
    }
}

let b = JSON.parse(JSON.stringify(a))

b.address.first= "pritinagar";

function person(name, age){
    this.name = name
    this.age = age
}
let p2 = new person("kashif", 34)

let p1 = new person("abc", 12)

console.log(p1, p2)
console.log(a,b)



