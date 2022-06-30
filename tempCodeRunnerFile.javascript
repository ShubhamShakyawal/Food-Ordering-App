const cartContent = [
    {
        name: "chowmein",
        img : "/images/chowmein.jpg",
        price : "150",
        qty : '2'
    },
    {
        name: "chowmein",
        img : "/images/chowmein.jpg",
        price : "150",
        qty : '2'
    },
    {
        name: "chowmein",
        img : "/images/chowmein.jpg",
        price : "150",
        qty : '2'
    }
];

cartContent.forEach(element => {
    console.log(` ${element.name}
        img = 
        ${element.img}
        price = ${element.price}
        qty = ${element.qty}
`)
})
