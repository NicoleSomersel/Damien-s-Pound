
const wordText =document.querySelector(".word");
hintText =document.querySelector(".word");

const initGame = () =>{
  let randomObj = words[math.floor(math.random() * words.length)];
  let wordArray = randomObj.word.split("");
  for(let i = wordArray.length; i>0; i--){
    let j = math.floor.math.random()* (i+1);

    wordArray[i], wordArray[j] = wordArray[j], wordArray[i];
  }

  wordText.innerText = wordArray.join("");
  console.log(randomObj);
}
initGame();
