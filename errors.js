//Creating a math program for square root and throwing an errors when anything
//besides a number is utilized.

    function getRoot(text){
        var num = Number(text);
            if(isNaN(num)){
                throw text + " is not a number" //will see this in console - chrome
            }
            if(num < 0){
                throw num + " is not a positive number"
            }
        var root = Math.sqrt(num);
        return root;
    }

    var text = -1;//-1; //'asdfsd';//81;
        //could add try which will 'catch' the error and not finish executing the
        //program but will provide the user with an alert.
        try{
            var root = getRoot(text);
            alert(root);
        } catch (err) {
            alert('Error: ' + err);
        //could also add finally - which will 'always' execute regardless
    } finally {
        alert('finally');
    }
    alert('exiting');
