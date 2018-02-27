module.exports = function check(str, bracketsConfig) {
  // config1 = [['(', ')']];
  // ((()))()', config1), true);
  var tmp = [];
  var bracketsOpen = [];
  var bracketsClose = [];  
  var check = 0;  

  for (var i=0; i<bracketsConfig.length; i++) {
    bracketsOpen[i] = bracketsConfig[i][0];
    bracketsClose[i] = bracketsConfig[i][1];
  }
  
 //console.log(bracketsOpen);
 //console.log(bracketsClose);

  for (var j=0; j<str.length; j++) {
    for (var k=0; k<bracketsOpen.length; k++) {
      if (str[j] == bracketsOpen[k]) {

        //console.log(str[i]);

        tmp.push(k);

        //console.log(tmp);

        check++;
      }

      if (str[j] == bracketsClose[k]) {
       //console.log(str[i]);
        if (k == tmp.pop()) {
          check--;
        }
        else {
          return false;
        }
      }
    }
   
    if (check < 0) {
      return false;
    }
  }
  
  if (check == 0) {
    return true;
  }
  else {
    return false;
  }


  
}
