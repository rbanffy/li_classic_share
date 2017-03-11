// Replaces the image used for the frog face emoji with a more appropriate one.

//     Copyright (C) 2017  Ricardo Bánffy

//     This program is free software: you can redistribute it and/or modify
//     it under the terms of the GNU General Public License as published by
//     the Free Software Foundation, either version 3 of the License, or
//     (at your option) any later version.

//     This program is distributed in the hope that it will be useful,
//     but WITHOUT ANY WARRANTY; without even the implied warranty of
//     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//     GNU General Public License for more details.

//     You should have received a copy of the GNU General Public License
//     along with this program.  If not, see <http://www.gnu.org/licenses/>.

// Injected in the page, runs from there


// var params = ['mini', 'url', 'title'];

var liClassicShare = function(url) {
    window.open(url, '_blank', "width=700,height=562");
}


// Responds to a click in the extension button.
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.message === 'clicked_browser_action') {
            console.log('clicked_browser_action triggered');
            if (!document.URL.startsWith("https://www.linkedin.com/uas/login?")
                && !document.URL.startsWith("https://www.linkedin.com/shareArticle")) {
                liClassicShare("https://www.linkedin.com/shareArticle?mini=true&url=" + encodeURIComponent(document.URL) +
                               "&title=" + encodeURIComponent(document.title));
            }
        }
    }
);
