const button = document.querySelector("button")
const paragraph = document.querySelector("p")

// 1.Take the button and wait for a prompt using the addEventlistener
button.addEventListener("click", function() {
    button.textContent = "hello!";
    // 2.Waiting on the prompt to be triggered using "click"
    // 3.When the prompt is triggered, a name will be asked
    const mood = prompt("What is your mood?");
    // 4.The heading with change due to the textContent
    paragraph.textContent = `Hi, my name is Elijah lategan and im feeling ${mood}` ;
    // console.log allows us to see the output in the console via inspect
    console.log("The button has been clicked and it displays my mood");
 })

// button.addEventListener("click", function() {
//     const mood = prompt('What is feeling today');
//     paragraph.textContent = `I am feeling ${mood}`;
//     console.log("You clicked the button!")
// })