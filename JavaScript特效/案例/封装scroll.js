function scroll(){
    return {
        "left":window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft,
        "top":window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,
    }
}