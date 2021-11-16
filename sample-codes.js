/*Write a code to print the numbers in the array
Output: 1234567891011*/
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = “”;
 
for (var i = 1; i <= 11; i++) {
 new_string += numsArr[i] 
}
console.log(new_string);

/*Write a code to print the numbers in the array
Output: 1,2,3,4,5,6,7,8,9,10,11*/
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = “”;
 
for (var i = 1; i <= 11; i++) {
 new_string += numsArr[i] + "," 
}
console.log(new_string);

/*Write a code to print from last to first with spaces (Make sure there is no space after the last element 1)
Output: 11 10 9 8 7 6 5 4 3 2 1*/
var new_string = “”;
 
for (var i = 11; i > 0; i-- ) {
 new_string += numsArr[i] + “ “ 
}
console.log(new_string.trim());

/*Write a code to replace the array value — If the number is even, replace it with ‘even’.
Output:[ 1, “even”, 3, “even”, 5, “even”, 7, “even”, 9, “even”, … ]
*/
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
 if(numsArr[i] %2 === 0 )
 {
 numsArr[i] = "even"
 }
}
console.log(numsArr);

/*Write a code to replace the array value — If the index is even, replace it with ‘even’.
Output: [ “even”, 2, “even”, 4, “even”, 6, “even”, 8, “even”, 10, … ]*/
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
 if(i % 2 === 0 )
 {
 numsArr[i] = "even"
 }
}
console.log(numsArr);

/*Write a code to add all the numbers in the array
Output: 66*/
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum = 0;
for (var i = 0; i <=10; i++) {
 
 sum += numsArr[i]
}
console.log(sum);

