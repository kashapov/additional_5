module.exports = function check(str, bracketsConfig) {
  //let str = '[]()';
  //let bracketsConfig = [['(', ')'], ['[', ']']];

  //let str = '([{}])';
  //let bracketsConfig = [['(', ')'], ['[', ']'], ['{', '}']];

  if (str.length % 2 === 1) {
    return false;
  }

  let brackets = [];

  for (let i = 0; i < bracketsConfig.length; i++) {
    brackets.push(bracketsConfig[i][0] + bracketsConfig[i][1]);
  }

  //console.log(brackets);

  for (let i = 0; i <= brackets.length; i++) {
    if (!str) continue;

    for (let j = 0; j <= brackets.length; j++) {
      for (let k = 0; k <= str.length; k++) {
        //console.log(str+'---'+brackets[j]);
        if (str.indexOf(brackets[j]) != -1) {
          let deletePosition = str.indexOf(brackets[j]);
          //console.log('del='+deletePosition);
          str = str.substring(0, deletePosition) + str.substring(deletePosition + 2);

          k--;
        }

      }
    }

  }
  //console.log('-------------');

  if (str.length == 0) {
    return true;
  }
  else {
    return false;
  }

}
