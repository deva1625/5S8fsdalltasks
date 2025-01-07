function mergeArray(...arr){

    return[].concat(...arr)
}
let arrays=mergeArray([1,2],[3,7],[4,5]);
console.log(arrays)