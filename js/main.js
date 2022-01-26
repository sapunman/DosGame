(function () {
  let startBtn = $(".startBtn");
  let mainInput = $(".main-input");
  let allLines = $(".line");

  startBtn.on("click", startGame);

  function startGame() {
    $(this).hide();

    //setup
    let speed = 1;
    let textLength = 3;
    let typingWords = words.filter((word) => word.length == textLength);
    let lvl = 6;

    //insert spans
    function insertSpans() {
      for (let i = 0; i < allLines.length; i++) {
        let rand = Math.floor(Math.random() * 20);
        if (rand <= lvl) {
          let text = chooseText();
          $(allLines[i]).append(`<span>${text}</span>`);
        }
      }
    }
    insertSpans();

    function chooseText() {
      let rand = Math.floor(Math.random() * typingWords.length);
      let savedText = typingWords[rand];
      typingWords.splice(rand, 1);

      return savedText;
    }
  }
})();
