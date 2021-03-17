function b(){
    let a = document.querySelector("input").value;
    switch(a){
        case "耗子尾汁":
            window.location.href="words/耗子尾汁/index.html";
            break;
        case "黑人抬棺":
            window.location.href="words/黑人抬棺/index.html";
            break;
        case "坎油揣":
            window.location.href="words/坎油揣/index.html";
            break;
        case "迷hotel":
            window.location.href="words/迷hotel/index.html";
            break;
        case "闹太套":
            window.location.href="words/闹太套/index.html";
            break;
        case "夏啵":
            window.location.href="words/夏啵/index.html";
            break;
        case "":
            break;
        default:
            window.location.href="https://www.baidu.com/s?wd="+a;

    }
}