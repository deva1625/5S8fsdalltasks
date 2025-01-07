const product={
    id:"19",
    name:"laptop",
    price:5000,
    category:"electronics"
}
let {id,name,...other}=product
const p2={
    id:id,
    name:name,
    discount:10,
    inStock:true
}
console.log(p2)