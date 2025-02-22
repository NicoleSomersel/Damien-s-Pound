
const wordText =document.querySelector(".word");
hintText =document.querySelector(".hint span");
refreshBtn =document.querySelector(".refresh"),
inputField =document.querySelector("input"),
timeText =document.querySelector(".time b"),
  
checkBtn =document.querySelector(".check");



let correctWord, timer;

const initTimer = () => {
  clearInterval(timer);
  timer = setInterval(()  => {
    if (maxtime> 0){
      maxtime--;
      return timeText.innerText = maxtime;
    }
    clearInterval(timer);
    alert('Oops Time is Over' ${userword.toUpperCase()} 'was the correct!');
    initGame();
  }, 1000);
};


const initGame = () =>{
  initTimer(30);
  let randomObj = words[math.floor(math.random() * words.length)];
  let wordArray = randomObj.word.split("");
  for(let i = wordArray.length; i>0; i--){
    let j = math.floor(math.random()* (i+1));

    wordArray[i], wordArray[j] = wordArray[j], wordArray[i];
  }

  wordText.innerText = wordArray.join("");
  hintText.innerText= randomObj.hint;
  correctWord = randomObj.word.toLowerCase;
  console.log(randomObj);
  inputField.value = "";
  intputField.setAttribute= ("Maximum length", correctWord.length);
}
initGame();
const checkWord = () =>{
  let userWord = inputField.value.toLowerCase();
  if(!userWord) return alert('Thats not a word.');
  if(userWord !== correctWord) return alert('Oh no' ${userword} 'is not correct! Try again.');
  alert('Yippee' ${userword.toUpperCase()} 'is correct!');
  initGame():
}

refreshBtn.addEventListner('click', initGame());
refreshBtn.addEventListner('click', checkWord());
initGame():
