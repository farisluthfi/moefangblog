function spoiler(obj) {
    if (obj.parentNode.parentNode.getElementsByTagName( & #39;div&# 39;)[1].getElementsByTagName( & #39;div&# 39;)[0].style.display != & #39;&# 39;) {
        obj.parentNode.parentNode.getElementsByTagName( & #39;div&# 39;)[1].getElementsByTagName( & #39;div&# 39;)[0].style.display = & #39;&# 39;;
        obj.innerText = & #39;&# 39;;
        obj.value = & #39;Hide&# 39;;
    } else {
        obj.parentNode.parentNode.getElementsByTagName( & #39;div&# 39;)[1].getElementsByTagName( & #39;div&# 39;)[0].style.display = & #39;none&# 39;;
        obj.innerText = & #39;&# 39;;
        obj.value = & #39;Show&# 39;;
    }
}
