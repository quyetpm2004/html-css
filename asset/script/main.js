
var $ = document.querySelector.bind(document)
var $$ = document.querySelectorAll.bind(document)



var navItems = $$('.nav-two__item')

var appContents = $$('.app__content')


navItems.forEach(function(navItem, index) {

    var appContent = appContents[index];

    navItem.onclick = function() {
        $('.app__content.app__content--active').classList.remove('app__content--active')
        appContent.classList.add('app__content--active');
    }
});