//address object show
// street
//city 
//zip code

//then show address with function

const address = {
    street: "123 Main St",
    city: "Tokyo",
    zipcode: "106 - 0045",
};

function showAddress(address) {
    for (let key in address)
        console.log(key, address[key]);
}

showAddress(address);