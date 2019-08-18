console.log("\251");
console.log("©");

var longString = 'Long\
long\
long \
string';
console.log(longString);


(function () { /*
line 1
line 2
line 3
*/}).toString().split('\n').slice(1, -1).join('\n')
// "line 1
// line 2
// line 3"
