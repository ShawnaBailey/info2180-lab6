window.onload = function(){

        var search = document.getElementById('search');
		//var searchbox = document.getElementById('searchbox');
		search.addEventListener('click', function (){
		
		var http = new XMLHttpRequest();
        //var data = "username=" + name + '&email=' + email;

    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // then handle the response
            alert(http.responseText);
        }
    };

    http.open('Get','request.php?q=definition', true);
    http.send();
		};
};