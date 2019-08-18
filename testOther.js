/*obj = { x:"a", y: "b" };
obj.child = obj;
console.log(obj)
try{
    json = JSON.stringify(obj);
    console.log(json)
}catch(e){
    console.log(e);
}*/

/*obj = { x:"a", y: "b" };
obj.child = obj;

console.log(print(obj));

function print(obj){
    try{
        var seen = [];
        json = JSON.stringify(obj, function(key, val) {
            if (typeof val == "object") {
                if (seen.indexOf(val) >= 0) return;
                seen.push(val)
            }
            return val;
        });
        return json;
    }catch(e){
        return e;
    }
}*/

obj = {
    x: 555,
    y: "hi"
}
obj.myself = obj

var jsonify = function(obj){
    var seen = [];
    var json = JSON.stringify(obj, function(key, value){
        if (typeof value === 'object') {
            if ( !seen.indexOf(value) ) {
                return '__cycle__' + (typeof value) + '[' + key + ']';
            }
            seen.push(value);
        }
        return value;
    }, 4);
    return json;
};

console.log(jsonify(obj));


