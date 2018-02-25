module.exports = function check(str, bracketsConfig) {
  // config1 = [['(', ')']];
  // ((()))()', config1), true);

  var tmp = {};
  var brackets = [];

  if (str.length % 2) {
    return false;
    //console.log('false 1');
  }
  
  for (var i = 0; i < bracketsConfig.length; i++) {
    tmp[bracketsConfig[i][0]] = bracketsConfig[i][1];    
  }

  //console.log(tmp);

  str = str.split('');

  //console.log(str);
  
  for (var i = 0; i < str.length; i++) {
    //console.log(str[i]);
    if (tmp[str[i]]) {
      brackets.push(str[i]);
    } else {
      brackets.pop();
    }

    if (tmp[str[i]] == str[i]) {
      brackets.pop();
    }
  }
  
  if (brackets.length >= 0)
    return true;
  else
    return false;
  
}
