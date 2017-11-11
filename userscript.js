// ==UserScript==
// @name         Github Solidity Highlighter
// @namespace    https://github.com/ldct/github-ethereum-highlighting/
// @version      0.1
// @description  synatx highlighting of ethereum languages (solidity, viper, LLL) on github
// @author       ldct
// @match        https://*.github.com/*.sol
// @require      https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js
// @require      https://cdn.jsdelivr.net/npm/highlightjs-solidity@1.0.5/solidity.min.js
// @require      https://code.jquery.com/jquery-3.2.1.min.js
// @resource     syntaxHighlightCSS https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/github.min.css
// @grant        GM_addStyle
// @grant        GM_getResourceText
// ==/UserScript==

(function() {
    'use strict';

    // install highlightjs CSS
    var syntax_highlighter_CSS = GM_getResourceText('syntaxHighlightCSS');
    GM_addStyle(syntax_highlighter_CSS);

    // install jQuery
    const $ = jQuery;

    // get code of page
    const f = $(".file .blob-wrapper table .blob-code").map(function (i, row) {
        return $(row).text().replace(/\n/g, "");
    }).toArray();
    const code = f.join("\n");

    hljs.registerLanguage('solidity', hljsDefineSolidity);

    $(".blob-wrapper").empty().append($("<code>", {
        text: code,
        class: "javascript",
    }).wrap("<pre>").parent());

    hljs.initHighlighting();

})();
