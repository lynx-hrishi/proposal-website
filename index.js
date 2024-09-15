const div = document.querySelector('.wrapper');
const divRect = div.getBoundingClientRect();
const body = document.querySelector('body');
const showLastBox = document.querySelector('.show-last');
const lastMsg = document.getElementById('last-msg');
const heading = document.getElementById('heading');

showLastBox.style.display = 'none';
heading.style.display = 'none'

const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const noBtnRect = noBtn.getBoundingClientRect();

let counter = 0;

yesBtn.addEventListener('mouseover', ()=>{
    yesBtn.textContent = 'Click karde🫠';
    yesBtn.style.backgroundColor = "hsl(120, 84%, 50%)"
})

yesBtn.addEventListener("click", () =>{
    yesBtn.textContent = "I love you too..❤️"
})

yesBtn.addEventListener('mouseout', ()=>{
    yesBtn.style.transition = '.2s linear';
    yesBtn.style.backgroundColor = "hsl(120, 84%, 38%)"
    yesBtn.textContent = 'Yes😍';
})

noBtn.addEventListener('mouseover', ()=>{
    const i = Math.floor(Math.random() * (divRect.width - noBtnRect.width)) + 1;
    const j = Math.floor(Math.random() * (divRect.height - noBtnRect.height)) + 1;
    noBtn.style.left = i + "px";
    noBtn.style.top = j + "px";
    counter++;
    // console.log(i)
    // console.log(j)


    if (counter === 10){
        noBtn.style.display = 'none';
        showLastBox.style.display = 'block';
    }
})

showLastBox.addEventListener('mouseover',()=>{
    lastMsg.textContent = "Maan bhi Jaa Ab😫";
    heading.style.display = 'block'
    div.style.opacity = "0";
    showLastBox.style.boxShadow = "0 0 20px rgba(0, 0, 0, 1)"
    showLastBox.style.backgroundColor = "transparent"
    body.style.backgroundImage = "url('3.jpeg')";
    body.style.backgroundPosition = "center";
    body.style.backgroundSize = "cover"
    body.style.backgroundAttachment = "fixed"
})

showLastBox.addEventListener('mouseout',()=>{
    lastMsg.textContent = "Thak Gaya Mai Sameeksha😵‍💫"
    heading.style.display = 'none'
    div.style.opacity = "1"
    showLastBox.style.backgroundColor = "red"
    showLastBox.style.boxShadow = "0 0 20px red"
    body.style.backgroundImage = "url('proposal-background.jpg')";
})