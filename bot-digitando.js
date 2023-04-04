function iHaveTelegram(){}
 
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function ola(){
    addTextInChat("Olá!! Que bom que você chegou até aqui. Você está a um passo de entrar no nosso grupo gratuito.");

    setTimeout(addTextInChat, 4500, "Preciso saber se você já tem o TELEGRAM instalado no seu telefone?");
    
    var textElement = document.createElement('div');
    textElement.setAttribute("id", "question");

    var no = "Legal! Preciso saber então qual a versão do seu telefone:";

    setTimeout(addQuestionButtonToChat, 8000, "Sim. Eu tenho!", iHaveTelegram, textElement);
    setTimeout(addQuestionButtonToChat, 8000, "Não Tenho", iDontHaveTelegram, textElement);
}
function iHaveTelegram(){
    addUserTextInChat("Sim. Eu tenho!");
    document.getElementById("question").remove();
    var msg = "Muito bom! Segue o link do nosso canal. Basta clicar e você será redirecionado para o Telegram, após isso, só confirmar a entrada no grupo. Boa sorte! Basta clicar no botão abaixo"
    setTimeout(addTextInChat, 500, msg);

    var textElement = document.getElementById("chatbox");

    setTimeout(addButtonToChat, 4600, "Telegram", openTelegram, textElement);
}

function addTimeToDiv(content){
    var tm = document.createElement('div');
    tm.setAttribute("id", "time");
    var today = new Date();
    var time = today.getDate() + "/" + (today.getMonth()+1) + '/' + today.getFullYear() + " " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    tm.innerHTML = time;
    content.appendChild(tm);
}

function iDontHaveTelegram(){
    addUserTextInChat("Não tenho.");
    document.getElementById("question").remove();
    var msg = "Legal! Preciso saber então qual a versão do seu telefone:"
    setTimeout(addTextInChat, 10, msg);

    var textElement = document.getElementById("chatbox");

    var questionElement = document.createElement('div');
    questionElement.setAttribute("id", "question");

    setTimeout(addQuestionButtonToChat, 1800, "Android", android, questionElement);
    setTimeout(addQuestionButtonToChat, 1800, "Iphone", iphone, questionElement);
}

function android(){
    addUserTextInChat("Android");
    document.getElementById("question").remove();

    var msg = "Assista esse vídeo simples e rápido explicando TODOS OS PASSOS pra instalar e entrar no TELEGRAM:";
    setTimeout(addTextInChat, 400, msg);
    setTimeout(addVideoToChat, 2500, "https://blackboxsports.com.br/wp-content/uploads/2022/07/Android-E9fee31-1.mp4");

    setTimeout(addTextInChat, 3000, "E caso já saiba instalar, clique no botão abaixo para baixar o aplicativo.");

    var textElement = document.getElementById("chatbox");
    setTimeout(addButtonToChat, 4600, "Baixar Telegram", downloadTelegramAndroid, textElement);
}

function iphone(){
    addUserTextInChat("Iphone");
    document.getElementById("question").remove();

    var msg = "Assista esse vídeo simples e rápido explicando TODOS OS PASSOS pra instalar e entrar no TELEGRAM:";
    setTimeout(addTextInChat, 400, msg);
    setTimeout(addVideoToChat, 2500, "https://blackboxsports.com.br/wp-content/uploads/2022/07/Android-E9fee31-1.mp4");

    setTimeout(addTextInChat, 3000, "E caso já saiba instalar, clique no botão abaixo para baixar o aplicativo.");

    var textElement = document.getElementById("chatbox");
    setTimeout(addButtonToChat, 4600, "Baixar Telegram", downloadTelegramIphone, textElement);


}

function downloadTelegramAndroid(){
    window.open("https://play.google.com/store/apps/details?id=org.telegram.messenger&hl=pt_BR")
}

function downloadTelegramIphone(){
    window.open("https://apps.apple.com/br/app/telegram-messenger/id686449807")
}

function openTelegram(){
    window.open('https://t.me/+_CSUoK6EeDFhOTc5');
}

function addVideoToChat(videoURL){
    var avatar = document.createElement('img');
    avatar.setAttribute("id", "avatar");
    avatar.setAttribute("src", "bot.png");

    var textElement = document.createElement('div');
    textElement.setAttribute("id", "chat-text");

    textElement.appendChild(avatar);

    var video = document.createElement('video');
    video.src = videoURL;
    video.controls = true;
    video.muted = false;
    video.height = 240;
    video.width = 320;

    textElement.appendChild(video);

    document.getElementById("chatbox").appendChild(textElement);

    avatar.scrollIntoView();

    addTimeToDiv(textElement)
}
function addLinkInChat(text, link){
    var avatar = document.createElement('img');
    avatar.setAttribute("id", "avatar");
    avatar.setAttribute("src", "bot.png");

    var textElement = document.createElement('div');
    textElement.setAttribute("id", "chat-text");

    textElement.appendChild(avatar);

    var p = document.createElement('p');

    textElement.appendChild(p);

    document.getElementById("chatbox").appendChild(textElement);

    var a = document.createElement('a');
    a.setAttribute("href", link);
    textElement.appendChild(a);

    typeWriter(text, a);
    
    addTimeToDiv(textElement);

    avatar.scrollIntoView();
}

function addQuestionButtonToChat(text, func, element){
    var bt = document.createElement("button");
    bt.setAttribute("id", "user-bt");
    bt.innerHTML = text;
    bt.onclick = func;

    element.appendChild(bt);
    document.getElementById("chatbox").appendChild(element);

    bt.scrollIntoView();
}

function addButtonToChat(text, func, element){
    var bt = document.createElement("button");
    bt.setAttribute("id", "bot-bt");
    bt.innerHTML = text;
    bt.onclick = func;

    element.appendChild(bt);
    document.getElementById("chatbox").appendChild(element);

    element.scrollIntoView();
}

function addTextInChat(text){
    const delay = ms => new Promise(res => setTimeout(res, ms));

    var avatar = document.createElement('img');
    avatar.setAttribute("id", "avatar");
    avatar.setAttribute("src", "bot.png");

    var textElement = document.createElement('div');
    textElement.setAttribute("id", "chat-text");

    textElement.appendChild(avatar);

    var p = document.createElement('p');

    textElement.appendChild(p);

    document.getElementById("chatbox").appendChild(textElement);

    addTimeToDiv(textElement);

    p.innerText = "Digitando...";

    setTimeout(writeText, 2000, text, p);

    avatar.scrollIntoView();
}


function writeText(text, p){
    p.innerText = "";
    typeWriter(text, p);
}

function addUserTextInChat(text){
    var textElement = document.createElement('div');
    textElement.setAttribute("id", "chat-user-text");
    
    var p = document.createElement('p');

    textElement.appendChild(p);

    document.getElementById("chatbox").appendChild(textElement);

    typeWriter(text, p);

    textElement.scrollIntoView();

    var tm = document.createElement('div');
    tm.setAttribute("id", "time-user");
    var today = new Date();
    var time = today.getDate() + "/" + (today.getMonth()+1) + '/' + today.getFullYear() + " " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    tm.innerHTML = time;
    textElement.appendChild(tm);
}

function typeWriter(txt, div) {
    let i = 0;

    typeWriterHandler = () => {
        txt = txt.slice(1);
        typeWriter(txt, div);
    }
    if (i < txt.length) {
        div.innerHTML += txt.charAt(i)
        i++;
        setTimeout(typeWriterHandler, 20);
    }
}