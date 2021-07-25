
var Title= function(arr)  {

 
  var results=arr.map(
   str => str.split(' ').map(s => s[0].toUpperCase() + s.substr(1)).join(' ')
 )
 
 console.log(results);}
 Title([
    'hi',
    'welcome',
    'nithysha'
   ]);