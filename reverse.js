// Example outputs
// node reverse.js hello goodbye
// olleh
// eybdoog

// node reverse.js 1 fish 2 fish
// 1
// hsif
// 2
// hsif

// Write a program that takes any number of command line arguments, all strings,
// and reverses them before outputting them one at a time to the console.

// You can use the keyword arguments
// which is an array of the passed arguments, like this:


//process.argv
//[0, 1, ....]
function reverse_string(arr) {
  var singleStr = '';
  for (var i = 2 ; i < arr.length; i++) {
    singleStr = arr[i];
      //console.log(singleStr);
      var reversedStr = '';
      for (x = singleStr.length - 1; x >= 0; x--) {
        reversedStr += singleStr[x];
      }
      console.log(reversedStr);
    }};

// function reverse_string(arr) {
//   var reversedStr = '';
//   for (x = arr.length - 1; x >= 2; x--) {
//     reversedStr += arr.length[x];
//   };
//   console.log(reversedStr);}

  //console.log(singleStr);
    // var Str = [];
  // for(var i = 2; i < process.argv.length; i++)
  //   if (typeof process.argv[i] === 'string') {
  //     Str = Str + " " + process.argv[i];
  //   }

  // console.log(Str);

 // var splitStr = Str.split("");
 // console.log(splitStr.toString());

// var reversedStr = splitStr.reverse("");
//   // console.log(reversedStr );
//   var joinedStr = reversedStr.join("");

//   console.log(joinedStr );
//};

reverse_string(process.argv);














