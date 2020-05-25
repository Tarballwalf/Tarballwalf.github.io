var messages = [
    'Not Found',
    'You seem to be lost...',
    'What are you doing?',
]
function newMessage() {
    document.onload();
    {
        var randomNumber = Math.floor(Math.random() * (messages.length));
        document.getElementById('messsageDisplay').innerHTML = messages[randomNumber];
    }
}