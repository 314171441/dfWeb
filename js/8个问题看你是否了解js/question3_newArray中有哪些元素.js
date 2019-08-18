var array = [];
for(var i = 0; i<3;i++){
    array.push(() => i)
}

console.log(array);
