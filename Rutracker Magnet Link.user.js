// ==UserScript==
// @name         Rutracker Magnet Link
// @version      0.1
// @description  Add Magnet Link below torrent file download link
// @author       RasAlhague
// @match        http://rutracker.org/forum/viewtopic.php?t=*
// @grant        none
// @run-at       document-idle
// ==/UserScript==


var torDwnlLink = document.querySelector("#tor-reged > table.attach.bordered.med > tbody > tr:nth-child(2) > td.tCenter.pad_6 > p:nth-child(2)");
var torrentHash = document.querySelector("#tor-hash");

var magnetLinkElem = document.createElement("a");
var magnetLinkText = document.createTextNode("Magnet Link");
magnetLinkElem.appendChild(magnetLinkText);
magnetLinkElem.title = "Magnet Link";
magnetLinkElem.href = "magnet:?xt=urn:btih:" + torrentHash.innerHTML;
magnetLinkElem.className = magnetLinkElem.className + " dl-stub dl-link";

torDwnlLink.parentNode.insertBefore(magnetLinkElem, torDwnlLink);
