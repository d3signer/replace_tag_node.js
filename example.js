var replaceTag = require('./index');
console.log('       Replace Tag example');
console.log('   ________________________________________________________');
var html = '<p>Replace Tag without regex or xregex example' 
    + '<br />' 
    + '<a> must remove me</a>'
    + '<a> first example me too, :D must remove me</a>'
    + ' another text</p>';

console.log('Sample html code:', html);
console.log('   ________________________________________________________');
// first example, just remove first tag
var replacedHtml = replaceTag(html, 'a', false);
console.log('First example, remove first tag, search for tag \'a\'');
console.log('Replaced html code:', replacedHtml);

console.log('   ________________________________________________________');
// second example remove all tag :D
var replacedHtml = replaceTag(html, 'a');
console.log('Second example, remove all tag, search for tag \'a\'');
console.log('Replaced html code:', replacedHtml);

console.log('   ________________________________________________________');
console.log('       Enjoy it, contact me for any problem, narsic');
