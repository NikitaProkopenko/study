function submitAnswer() {
    var str = $( "form" ).serialize();
    console.log(str);
  }

$("submit").on("click", submitAnswer);
  showValues();