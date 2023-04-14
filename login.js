const inputs = document.querySelectorAll('.input');

function focusFunc(){
    let parent = this.parentnode.parentnode;
    parent.classlist.add('focus');
}
function blurFunc(){
    let parent = this.parentnode.parentnode;
    if(this.value == ""){
        parent.classlist.remove('focus');
    }
}


inputs.forEach(input =>{
    input.addEventListener('focus', focusFunc)
    input.addEventListener('blur', blurFunc)
});