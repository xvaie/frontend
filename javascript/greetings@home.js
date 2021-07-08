var greetings = [
    'Hello', 'Ni Hao', 'Apa Khabar', '여보세요', 'こんにちは', 'Hola', 'Ciao', 'Olá', 'Namaste', 'Merhaba', 'Hej', 'Hei', 'Guten tag',
    'Hallo', 'hyvää päivää'
]

var i = 0;
setInterval("loopGreetings(greetings)", 2000);

function loopGreetings(greetings) {
    var x = document.getElementById("greetings");
    if (i == greetings.length) {
        i = 0
    } else {
        x.innerText = greetings[i] + ", welcome to Xvton."
        i++
    }
}
