
var numbClicks = 0;

function titleClicked(){
    numbClicks++;
    //In the console you can call the function titleClicked and the DOM will be
    //be updated with the number of times that function is executed/called.
    document.getElementById('title').innerText = 'numbClicks=' + numbClicks;

}
//This function will present an alert upon loading the page
// window.onload = function(){
//     alert('hello');
// }

//This function will enable the same functionality as the onclick="titleClicked()"
//that was on the html document, now it's no longer necessary to be used there
//and will reference the function below instead.
window.onload = function(){
    document.getElementById('title').addEventListener('click', titleClicked);

};

// function mouseEnter(){
//     console.log('here');
// }
// //The function below will keep track of the number of times the mouse hovers over
// //the ordered list and will keep count of this event in chrome's console -
// //this is reported by the console.log created on line 25
// window.onload = function(){
//     document.getElementById('title').addEventListener('click', titleClicked);
//     var lis = document.getElementsByTagName('li');
//         for (var i = 0; i < lis.length; i++){
//             var li = lis[i];
//             li.addEventListener('mouseenter', mouseEnter);
//         }
// };

//This iteration from the function above replaces the console.log with event.target
//.innerText, which directly adds *HOVER* to the DOM when the mouse hover's over
//the list.
function mouseEnter(event){
    event.target.innerText = event.target.innerText + ' *HOVER*'
}
//The function below will keep track of the number of times the mouse hovers over
//the ordered list and will keep count of this event in chrome's console -
//this is reported by the console.log created on line 25
// window.onload = function(){
//     document.getElementById('title').addEventListener('click', titleClicked);
//     var lis = document.getElementsByTagName('li');
//         for (var i = 0; i < lis.length; i++){
//             var li = lis[i];
//             li.addEventListener('mouseenter', mouseEnter);
//         }
// };

//This function is similar to the one above, however, instead of adding the text
//*Hover* everytime the mouse hovers over the list, it show's the initial *HOVER* text
//but it's removed once the mouse hovers over another element in the list. 
function mouseLeave(event){
    event.target.innerText = event.target.innerText.replace(' *HOVER*', '');
}

window.onload = function(){
    document.getElementById('title').addEventListener('click', titleClicked);
    var lis = document.getElementsByTagName('li');
        for (var i = 0; i < lis.length; i++){
            var li = lis[i];
            li.addEventListener('mouseenter', mouseEnter);
            li.addEventListener('mouseleave', mouseLeave);
        }
};
