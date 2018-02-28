module.exports = function check(str, bracketsConfig) {
  //var bracketsConfig = [['(', ')'], ['[', ']']];
  //var str = '[]()';

  //var bracketsConfig = [['(', ')'], ['[', ']'], ['{', '}']];
  //var str = '([{}])';
  
  var brackets = [];
  
  for (var i = 0; i < bracketsConfig.length; i++) {	
    brackets.push(bracketsConfig[i][0] + bracketsConfig[i][1]);
  };

  //console.log(brackets);
  for (i = 0; i < brackets.length + 1; i++) {
    for (var j = 0; j < brackets.length; j++) {
      for (var k = 0; k < str.length; k++) {
        if (str.indexOf(brackets[j]) != -1) {
          var deletePosition = str.indexOf(brackets[j]);
          str = str.substring(0, deletePosition) + str.substring(deletePosition + 2);
          
          k--;
        }
      }
    }
  }


  if (str.length == 0) {
    return true;
  }
  else {
    return false;
  }

}
