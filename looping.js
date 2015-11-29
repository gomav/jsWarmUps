
//Using the while loop
/*var x = 1;
    while(x <= 10){
        document.write(x);
        document.write('<br/>');
        x += 1;
    }
*/
//Using do with a while loop

/*var x = 2;
    do{
        document.write('#');
        document.write('<br/>');
        x += 1;
    } while (x <= 20);
*/

//For loop
/*var x = 0;
    for(x = 1;x <= 10; x++){
        document.write('$');
        document.write('<br/>');
}
*/
//You can express the For loop above in a while loop
/*x = 1;
while(x <= 10){
    document.write('$');
    document.write('<br/>');
    x++
}
*/

//Looping with an array
var a = [5, 2, 7, 1];
    for(var i = 0; i < a.length; i++){
        document.write(a[i]);
        document.write('<br/>');
    }
