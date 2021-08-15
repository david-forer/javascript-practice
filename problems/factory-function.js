// use prvious problem and do a factory function and then a constructor function to crete the address

function newAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode,
    }
    
}

let address = newAddress('123 Main St', 'Toronto', '54623')
console.log(address)

function Address2(street, city, zipCode) {
    this.street = street,
    this.city = city,
    this.zipCode = zipCode   
}

let address2 = new Address2('1414 Little ST', 'Milwaukee', '53711')
console.log(address2)