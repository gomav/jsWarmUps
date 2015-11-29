//Three different ways of expressing conditionals

//If statements Boolean type conditions
var x = 1
/*
if ( x === 1 ){
    document.write('here\n');

} //else if statements
else if (x === 2){
    document.write('2 ')
}
else if (x === 3) {
    document.write('3 ')
} //else statements
else {
    document.write('else');
}
//Boolean condition followed by question mark
var y = (x == 1) ? 'yes' : 'no'
document.write(y + ' ');
document.write('\nexiting');

*/
//switch statements - note can use 'break', after any case, to prevent the code

from executing passed a met case
switch (x) {
    case 1:
        document.write('case 1 ');
    case 2:
        document.write('case 2 ');
    case 3:
        document.write('case 3 ');
    default:
        document.write('default ')

}

document.write('exiting');
