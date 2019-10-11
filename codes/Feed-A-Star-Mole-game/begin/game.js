let score = 0;

function getSadInterval() {
  return Date.now() + 1000;
}

function getGoneInterval(){
  //Return a random between 1 and 2 second
  return Date.now() + Math.floor(Math.random() * 18000) + 2000;
}

function getHungryInterval () {
  return Date.now() + Math.floor(Math.random() * 3000) + 2000;
}

function getKingStatus() {
  return Math.random() > .9; //roughly 90% of time come true
}

const moles = [
  {
    status: "sad",
    next: getSadInterval(),
    king: true,
    node: document.getElementById("hole-0")
  },
  {
    status: "sad",
    next: getSadInterval(),
    king: true,
    node: document.getElementById("hole-1")
  },
  {
    status: "sad",
    next: getSadInterval(),
    king: true,
    node: document.getElementById("hole-2")
  },
  {
    status: "sad",
    next: getSadInterval(),
    king: true,
    node: document.getElementById("hole-3")
  },
  {
    status: "sad",
    next: getSadInterval(),
    king: true,
    node: document.getElementById("hole-4")
  },
  {
    status: "sad",
    next: getSadInterval(),
    king: true,
    node: document.getElementById("hole-5")
  },
  {
    status: "sad",
    next: getSadInterval(),
    king: true,
    node: document.getElementById("hole-6")
  },
  {
    status: "sad",
    next: getSadInterval(),
    king: true,
    node: document.getElementById("hole-7")
  },
  {
    status: "sad",
    next: getSadInterval(),
    king: true,
    node: document.getElementById("hole-8")
  },
  {
    status: "sad",
    next: getSadInterval(),
    king: true,
    node: document.getElementById("hole-9")
  }
];

function getNextStatus(mole){
  switch (mole.status) {
    case "sad": 
    case "fed":
      mole.next = getSadInterval();
      mole.status = "leaving";
      if(mole.king){
        mole.node.children[0].src = '../assets/king-mole-leaving.png';

      }else {
        mole.node.children[0].src = '../assets/mole-leaving.png';

      }
      break;
    case "leaving":
      mole.next = getGoneInterval();
      mole.status = "gone";
      mole.node.children[0].classList.add('gone');
      break;
    case "gone":
      mole.status = " hungry";
      mole.king = getKingStatus();
      mole.next = getHungryInterval();
      //if the mole is hungry the bird  will come with worm
      mole.node.children[0].classList.add('hungry');
      mole.node.children[0].classList.remove('gone');

      if(mole.king) {
        mole.node.children[0].src = "../assets/king-mole-hungry.png";

      }else {
        mole.node.children[0].src = "../assets/mole-hungry.png";


      }
      break;
    case "hungry":
      mole.status = "sad";
      mole.next = getSadInterval();
      mole.node.children[0].classList.remove("hungry");
      if(mole.king){
        '../assets/king-mole-sad.png'


      }else {
        '../assets/mole-sad.png'
      }
      mole.node.children[0].src = "../assets/mole-sad.png";
      break;

  }

}

function feed(event){
  if(event.target.tagName !== 'IMG' || 
  !event.target.classList.contains("hungry")){
    return;
  }

  const mole = moles[parseInt(event.target.dataset.index)];
mole.status = 'fed';
mole.next = getSadInterval();

if(mole.king) {
  score += 2;
  mole.node.children[0].src = '../assets/king-mole-fed.png';
}else {
  score++;
  mole.node.children[0].src = '../assets/mole-fed.png';

}
mole.node.children[0].classList.remove('hungry');

if(score >= 10) {
  win();

  }
  document.querySelector('.worm-container').style.width = ` ${10 * score}%`;
}

function win(){
  document.querySelector('.bg').classList.add('hide');
  document.querySelector('.win').classList.remove('hide');

}

let runAgainAt =  Date.now() + 100;

function nextFrame(){
const now = Date.now();
console.log('now');


if(runAgainAt <= now){
  for(let i = 0; i < moles.length; i++){
    if(moles[i].next <= now){
      getNextStatus(moles[i]);

    }

  }
  runAgainAt = now + 100;

}
//If the user is in other tab of the browser, the interval will pause
//But this wont happen if we use setInterval function-> it continues
//All burn out ur battery eventually
requestAnimationFrame(nextFrame);

}
document.querySelector('.bg').addEventListener('click',feed);

nextFrame();