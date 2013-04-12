var parseID = "zkNTyu8YupFvMyUeWykFSOC0WM1zHK0wo5PZTnph";
var parseRestKey = "cwAo71lBJT5v09nugbvgmdtHH8vNHWdBrJXV0ruD";

$(function () {
	
	getWords();

	$("#send").click(function(e){

		e.preventDefault();

		var word = $("input[name=word]").val();
		var sentence = $("input[name=sentence]").val();

		$.ajax({
			url: 'https://api.parse.com/1/classes/Word',
			headers: {
				'X-Parse-Application-Id': parseID,
				'X-Parse-REST-API-Key': parseRestKey
			},
			type: 'post',
			contentType: 'application/json',
			dataType: 'json',
			processData: false,
			data: JSON.stringify({
				'word' : word,
				'sentence' : sentence
			}),
			success: function (data) {
				console.log("sent");
				getWords();
			},
			error: function(){
				console.log("error");
			}
		});

	})	

	function getWords(){

		$.ajax({
			url: 'https://api.parse.com/1/classes/Word',
			headers: {
				'X-Parse-Application-Id': parseID,
				'X-Parse-REST-API-Key': parseRestKey
			},
			type: 'get',
			contentType: 'application/json',
			dataType: 'json',
			success: function (data) {
				console.log("get");
				updateView(data);
			},
			error: function(){
				console.log("error");
			}
		});



	}

	function updateView(words){

		var table = $('.table tbody');
		table.html('');
		$.each(words.results, function(index, value){
			var trEl = $('<tr><td>' + value.word + "</td><td>" + value.sentence + "</td></tr>");
			table.append(trEl);
		});


	}

	

});