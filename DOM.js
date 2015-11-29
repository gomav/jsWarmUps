//If you call the test() function within the Chrome's console log the title will
//be updated to the new value - 'new title'
function test(){
    var title=document.getElementById('title');
    title.innerText = 'new title';
}

//This function will add a new element to list - 'List element 4'
//You can see this by using text2() in the console 
function test2(){
    var ul = document.getElementsByTagName('ul')[0];
    var li = document.createElement('li');
    var node = document.createTextNode('list element 4');
    li.appendChild(node);

    ul.appendChild(li);
}


/*
Many ways of finding elements on a page - the following can be executed within
the browser (chrome) console:

by Id - document.getElementById('title') *returns a single element

by class - document.getElementsByClassName('paragraph') *returns an array
which you can than use the position of the elements within the array to access.

by Tag Name - document.getElementsByTagName('ul') *also return an array

Than you can also do something like:
    var ul = document.getElementsByTagName('li')[0] *gives you the entire array
        ul.getElementsByTagName('li')[1] * which will give you List element 2


Another handy tool:
    var p = document.getElementsByClassName('paragraph')[0]
        no the p is = to <p class='paragraph'>Paragraph text 1</p>

        p.innerText = "Paragraph text 1"
        p.tagName = "P"
        p.getAttribute('class') = 'paragraph'

        document.getElementsByTagName('input')[0].value
            *This will give you what's written inside the input box

*/
