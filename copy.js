document.addEventListener('DOMContentLoaded', function() {
    var url = document.getElementById('copyButton');
    url.addEventListener('click', function(){
        document.getElementById('url').select();
        document.execCommand('copy');
    })
})