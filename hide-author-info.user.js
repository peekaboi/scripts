// ==UserScript==
// @name         Hide author info
// @version      1
// @description  Hides the author information from posts
// @require      https://code.jquery.com/jquery-2.1.4.min.js
// @author       Peeka
// @include      http://hackforums.net/showthread.php?tid=*
// ==/UserScript==

var script = {
    elements: {
        by_class: {
            author_info: '.post_author_info'
        }
    }
};


$(script.elements.by_class.author_info).hide();
