export function output( message = "", outputTag = "outputTag", shouldAppend = true ) {
    debugger;

    if ( shouldAppend ) window[outputTag].innerHTML += message;
    else window[outputTag].innerHTML = message;
}