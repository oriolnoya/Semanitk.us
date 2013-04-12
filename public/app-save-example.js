
$(function () {
	
	var applicationId = "zkNTyu8YupFvMyUeWykFSOC0WM1zHK0wo5PZTnph";
	var parseJavascriptKey = "Kc5Nq2OuAxwUXMf0pfeAQjXqEN8vReqPpLiNqbPl";

	Parse.initialize(applicationId, parseJavascriptKey);

	var Word = Parse.Object.extend("Word");
	var word = new Word();

	word.save({
		word:"Happy",
		sentence: "Oriol was happy"
	}, {
		success: function(object){
			console.log("Parse.com object is saved: "+object);
		},
		error: function(object){
			console.log("Error! Parse.com object is not saved: "+object);
		}
	});

});