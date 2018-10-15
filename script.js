function dropHandler(e) {
    e.stopPropagation();
    e.preventDefault();

    var files = e.dataTransfer.files;
    for(var i = 0, len = files.length; i < len; i++) {
        var f = files[i];
        var reader = new FileReader();
        reader.onload = (function(file) {
            return function(e) {
               centerImage.src=this.result;
               localStorage.setItem("img0",this.result);
            };
        })(f);
        reader.readAsDataURL(f);
    }
}
function dragOverHandler(e) {
    e.stopPropagation();
    e.preventDefault();
    e.dataTransfer.dragEffect = 'copy';
}
var openFileButton = document.getElementById('OpenFileButton');
var centerImage = document.getElementById('centerImage');
openFileButton.addEventListener('drop', dropHandler, false);
openFileButton.addEventListener('dragover', dragOverHandler, false);
centerImage.src=localStorage.getItem("img0");