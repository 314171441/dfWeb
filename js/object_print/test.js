obj = {
    x: 555,
    y: "hi"
}
obj.myself = obj

var objectfy = function(obj){
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


console.log(objectfy(obj));
