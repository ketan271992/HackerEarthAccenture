process.stdin.resume();
    var magicChars = new Map();
var charCodeArr = [];
for(var i="A".charCodeAt(0);i<="z".charCodeAt(0);i++){
  var flag = false;
  for(var j=2; j <= Math.floor(i/2);j++){
    if(i%j==0 ){
      flag = true;
      break;
    }

  }
  if(!flag){
    magicChars.set(String.fromCharCode(i),i);
    charCodeArr.push(i);
  }
}
process.stdin.setEncoding("utf-8");
var abc = "";

process.stdin.on("data", function (input) {
    abc += input;                               // Reading input from STDIN
});

process.stdin.on("end", function () {
    var testCaseCount = parseInt(abc.split("\n")[0]);
    var testCases=abc.split("\n");
    var f=0;
    while(f<testCases.length-1){
      //  process.stdout.write(testCases[f+2])
        main(testCases[f+2]);
        f+=2;
    }
});

function main(a) {
    
    // process.stdout.write("Hi, " + a.split("\n")[2] + ".\n");       // Writing output to STDOUT




var result = "";
for(var k=0;k< a.length;k++){
  if(magicChars.has(a[k]))
    result += a[k];
  else{
    var key=a.charCodeAt(k);
    var poss=find(charCodeArr,key);
   

    if(poss[1]<key){
      result+=String.fromCharCode(poss[1]);
    }
    else if(poss[0]>key){
      result+=String.fromCharCode(poss[0]);
    }
    else{
      if(Math.abs(poss[0]-key) < Math.abs(poss[1]-key))
      {
        result+=String.fromCharCode(poss[0]);
      }
      else if(Math.abs(poss[0]-key) > Math.abs(poss[1]-key)){
        result+=String.fromCharCode(poss[1]);
      }
      else{
        result+=String.fromCharCode(poss[0]);
      }
    }

  }
}


function find(arr, k){
  if(arr.length === 2){
    return arr;
  }else{
    var pivot = Math.floor(arr.length/2);
    if(arr[pivot] > k){
      return find(arr.slice(0,pivot+1),k);
    }else{
      return find(arr.slice(pivot),k);
    }
  }
}


process.stdout.write( result +'\n');
}
