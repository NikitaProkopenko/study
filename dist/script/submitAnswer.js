console.log(window.location.href);
function submitAnswer(event) {
	event.preventDefault();
	//take a data from the form
	var str = $("form").serialize();
	//encode special characters like: , / ? : @ & = + $ #
	var res = encodeURIComponent(str);
	//take url of a lesson
	var url = window.location.href;
	var result = url + "?" + str;
	//paste the url with answers to the textarea in the modal window
	$("#urlTextArea").val(result);
}
$("form").on("submit", submitAnswer);

function parseUrl() {
	//take a url
	var url = window.location.href;
	//split url and encoded answers
	var arr = url.split("?");
	//decode answers
	var answerArr = decodeURIComponent(arr[1]).split("&");
	//insert answers to the array like key->value
	var answerKeyValue = [];
	for (var i = 0; i < answerArr.length; i++) {
		var key = answerArr[i].split("=");
		answerKeyValue.push(key);
	}
	//insert answers to the form inputs
	for (var x = 0; x < answerKeyValue.length; x++) {
		var text = answerKeyValue[x][1];
		$("#" + answerKeyValue[x][0]).val(text);
	}
}
parseUrl();

//copy link when user press copyButton
function copy() {
	var copyText = document.querySelector("#urlTextArea");
	copyText.select();
	document.execCommand("Copy");
  }
//close modal after when link copied
function closeModal() {
	$('#urlModal').modal('hide');
}
document.querySelector("#copyButton").addEventListener("click", copy);
document.querySelector("#copyButton").addEventListener("click", closeModal);