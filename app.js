let phrase_span = document.getElementById("phrase-content");

const button = document.getElementById("button");

function main() {
    button.addEventListener('click', function() {
        const phrases = ["Your eyes (they say it all)", "Your long ass legs", "The way you laugh", "The way you smile", 
                        "The way you roast me", "The way you text with me (Englishhhh)", "Your chin :dd", 
                        "The fact you're smarter than me", "How mature you are", "Your approach", "Your gift-giving skills",
                        "Laughing with you", "Your dirty jokes", "Your cool ass style", "The fact you have your own style", 
                        "Your opinions", "That you are caring", "That you think about others", "The way you kiss :d", 
                        "Spending time with you", "Just your existence", 
                        "Taking aesthetic (had to google how to spell it) pics with you", "Your body", 
                        "Brushing teeth with your toothbrush", "Your cooking", "Tvoje kroketyyyyy", "Your risotto!", "Your hug",
                        "Your presence", "Your independence", "Your strength", 
                        "The fact you're taller than me (delete this after)", "Memories we have together", 
                        "Doing literally anything with you", "The fact you know who Chandrasekhar is", "Loooooooks", 
                        "Your cute face", "Your personality", "Your traits", "Your lifestyle (I can flex with that :dd)"];

        const randomNumber = Math.floor(Math.random() * phrases.length);
    
        phrase_span.innerHTML = phrases[randomNumber]
    })
}

main();
