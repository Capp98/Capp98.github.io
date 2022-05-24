function showTopics(element) {
    let el = document.getElementsByClassName('topics')[0];
    console.log(el.style.marginLeft);
    if (el.style.marginLeft != '0px') {
        el.style.marginLeft = '0px'
        element.style.transform = 'rotate(180deg)'
    } else if (el.style.marginLeft != '-160px') {
        el.style.marginLeft = '-160px'
        element.style.transform = 'rotate(0deg)'
    }
}