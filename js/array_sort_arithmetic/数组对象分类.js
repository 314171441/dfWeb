var arr = [
    { page: 1, name: "menu1", pid: 1 },
    { page: 1, name: "menu2", pid: 2 },
    { page: 1, name: "menu3", pid: 3 },
    { page: 2, name: "menu4", pid: 4 },
    { page: 2, name: "menu5", pid: 5 },
    { page: 2, name: "menu6", pid: 6 },
    { page: 3, name: "menu7", pid: 7 },
];

var newArr = [], newArrObj = {};
for (var i = 0; i < arr.length; i++) {
    var arrI = arr[i];
    if (!newArrObj[arrI.page]) {
        newArr.push({
            page: arrI.page,
            data: [arrI]
        });
        newArrObj[arrI.page] = arrI;
    } else {
        for (var j = 0; j < newArr.length; j++) {
            var dj = newArr[j];
            if (dj.page == arrI.page) {
                dj.data.push(arrI);
                break;
            }
        }
    }
}
console.log(newArr);
newArr.forEach(function(obj,i){
    for(var a=0;a<obj.data.length;a++){
        console.log(obj.data[a])
    }
})
