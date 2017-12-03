console.log(window.location.href);
function submitAnswer(event) {
	event.preventDefault();
	var str = $("form").serialize();
	console.log($(this).serialize());
	var url = window.location.href;
	console.log(url);
	var result = url + "?" + str;
	console.log(result);
}
$("form").on("submit", submitAnswer);

function parseUrl() {
	var url = window.location.href;
	var arr = url.split("?");
	console.log(arr);
	var answerArr = arr[1].split("&");
	console.log(answerArr);

	var answerKeyValue = [];
	for (var i = 0; i < answerArr.length; i++) {
		var key = answerArr[i].split("=");
		answerKeyValue.push(key);
	}
	console.log(answerKeyValue);

	for (var x = 0; x < answerKeyValue.length; x++) {
		var text = answerKeyValue[x][1];
		console.log(text);
		$("#" + answerKeyValue[x][0]).val(text);
	}
}
parseUrl();