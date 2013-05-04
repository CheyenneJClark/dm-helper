characterList = [
	    
	    {
	    	"name": "Pinketta",
	    	"iniative": "20"
	    },
	    {
	    	"name": "Mendale",
	    	"iniative": "13"
	    },
	    {
	    	"name": "Fabrozi",
	    	"iniative": "11"
	    },
	    {
	    	"name": "Corte",
	    	"iniative": "9"
	    }
	];

var  disChars = {

	displayCharacters: function(){

        var count = characterList.length,
            target = document.getElementsByTagName("ol")[0],
            i;

        if(count > 0){
            for(i = 0; i < count; i++){

                var character = characterList[i];

                target.innerHTML += '<li>'+ character.name + ': ' + character.iniative + '</li>';
            }
        }
    }

}

var getBtn = document.getElementById("get-characters");
getBtn.addEventListener("click", disChars.displayCharacters, false);

