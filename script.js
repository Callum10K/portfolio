function toggleMenu(){
    const menu = document.querySelector(".menu-list");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function sleep(ms){
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const phrase = ["Computer Scientist", "Software Engineer", "APU Student"];
const el = document.getElementById("typewriter");

let sleepTime = 100;

let curPhraseIndex = 0;

const writeLoop = async () => {
    while(true){
        let curWord = phrase[curPhraseIndex];

        for(let i = 0; i < curWord.length; i++){
            el.innerText = curWord.substring(0, i + 1);
            await sleep(sleepTime);
        }

        await sleep(sleepTime * 10);

        for(let i = curWord.length; i > 0; i--){
            el.innerText = curWord.substring(0, i - 1);
            await sleep(sleepTime);
        }

        await sleep(sleepTime * 5);

        if (curPhraseIndex === phrase.length - 1){
            curPhraseIndex = 0;
        } else{
            curPhraseIndex++;
        }
    }
};

writeLoop();