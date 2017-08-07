function getFirstNode(ele){
    var node = ele.firstElementChild || ele.firstChild;
    return node;
}

function getLastNode(ele){
    return ele.lastElementChild || ele.lastChild;
}

function getPreNode(ele){
    return ele.previousElementSibling || ele.previousSibling;
}

function getEleOfIndex(ele,index){
    return ele.parentNode.children[index];
}

function getAllSiblingsNodes(ele){
    var newArr =[];
    var arr =ele.parentNode.children;
    for(var i=0;i<arr.length;i++){
        if(arr[i]!==ele){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
function fn(ele){
    return document.getElementById(ele);
}