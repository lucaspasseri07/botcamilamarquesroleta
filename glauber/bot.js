function iHaveTelegram(){}
 
var delay = 23;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function welcome(){
    var text1 = "Hey whats up? Glad you got here, I'm very happy! For more fun, check below which button you want.";
    addTextInChat(text1);

    var no = "Legal! Preciso saber então qual a versão do seu telefone:";

    var lg = (text1.length * delay);

    var element = document.createElement('div');
    element.setAttribute("id", "question");

    setTimeout(addQuestionButtonToChat, lg, "Quack (APP more HOT❤️‍🔥)", quackApp, element);
    setTimeout(addQuestionButtonToChat, lg, "Telegram FREE Exclusive💖", telegramFree, element);
}

function telegramFree(){
    addUserTextInChat("Telegram FREE Exclusive💖");
    document.getElementById("question").remove();
    var msg = "Now i need to know if you already have Telegram installed (if you already have, just click join the group)"
    setTimeout(addTextInChat, 700, msg);
    
    var textElement = document.createElement('div');
    textElement.setAttribute("id", "question");

    setTimeout(btDownloadForAndroid, (msg.length * delay * 1.4), "DOWNLOAD FOR ANDROID", downloadForAndroid, textElement);
    setTimeout(btDownloadForIphone, (msg.length * delay * 1.4), "DOWNLOAD FOR IPHONE", downloadForIphone, textElement);
    setTimeout(btJoinFreeGroup, (msg.length * delay * 1.4), "JOIN IN THE EXCLUSIVE FREE GROUP", joinFreeGroup, textElement);
}


function quackApp(){
    document.getElementById("question").remove();
    addUserTextInChat("Quack (APP more HOT❤️‍🔥)");
    var msg = "Now i need to know if you already have Quack installed (if you already have, just click join the group)"
    setTimeout(addTextInChat, 700, msg);
    
    var textElement = document.createElement('div');
    textElement.setAttribute("id", "question");

    setTimeout(btDownloadForAndroid, (msg.length * delay * 1.4), "DOWNLOAD FOR ANDROID", downloadQuackAndroid, textElement);
    setTimeout(btDownloadForIphone, (msg.length * delay * 1.4), "DOWNLOAD FOR IPHONE", downloadQuackIphone, textElement);
    setTimeout(btJoinFreeGroup, (msg.length * delay * 1.4), "SEE MORE IN QUACK", joinQuackGroup, textElement);
}

function downloadForAndroid(){
    window.open("https://play.google.com/store/apps/details?id=org.telegram.messenger");
}

function downloadForIphone(){
    window.open("https://apps.apple.com/br/app/telegram-messenger/id686449807");
}


function downloadQuackIphone(){
    window.open("https://apps.apple.com/US/app/id1437397847?mt=8");
}

function downloadQuackAndroid(){
    window.open("https://play.google.com/store/apps/details?id=com.quack.app&referrer=af_tranid%3DoZnIL4oC77xQREP7GwpglQ%26pid%3Dquack_star_channel%26af_channel%3DPartnerDeeplinkRedirect%26af_sub1%3Dm21CCmU3JAld%26af_c_id%3Dm21CCmU3JAld%26is_retargeting%3Dtrue%26af_click_lookback%3D12h%26af_sub2%3DC4oUQoiHiWQoxfXZIPSGUi21L2coWBCXWKNX-J9e7MflEnTn42Cw7Bso5YTGCDYppU38HR2DlMk");
}


function joinFreeGroup(){
    window.open("https://t.me/+82r4VYs9eDFlYzVh");
}

function joinQuackGroup(){
    window.open("https://quackapp.com/Glauberrsousa");
}

function btDownloadForAndroid(text, func, element){
    var bt = document.createElement("button");
    bt.setAttribute("id", "bot-DownloadAndroid");
    bt.innerHTML = text;
    bt.onclick = func;

    element.appendChild(bt);
    document.getElementById("chatbox").appendChild(element);

    element.scrollIntoView();
}

function btDownloadForIphone(text, func, element){
    var bt = document.createElement("button");
    bt.setAttribute("id", "bot-DownloadIphone");
    bt.innerHTML = text;
    bt.onclick = func;

    element.appendChild(bt);
    document.getElementById("chatbox").appendChild(element);

    element.scrollIntoView();
}

function btJoinFreeGroup(text, func, element){
    var bt = document.createElement("button");
    bt.setAttribute("id", "bot-JoinFreeGroup");
    bt.innerHTML = text;
    bt.onclick = func;

    element.appendChild(bt);
    document.getElementById("chatbox").appendChild(element);

    element.scrollIntoView();
}


function addTimeToDiv(content){
    var tm = document.createElement('div');
    tm.setAttribute("id", "time");
    var today = new Date();
    var time = today.getDate() + "/" + (today.getMonth()+1) + '/' + today.getFullYear() + " " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    tm.innerHTML = time;
    content.appendChild(tm);
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

    typeWriter(text, p);

    avatar.scrollIntoView();
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