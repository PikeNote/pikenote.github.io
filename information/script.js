const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const subjectToGet = urlParams.get("subject");
const grade = urlParams.get("grade");

var getUrl = window.location;
var baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];

function b64DecodeUnicode(str) {
    return decodeURIComponent(atob(str).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
}

document.getElementById("tab-1").style.visibility="hidden";
document.getElementById("tab-2").style.visibility="hidden";
document.getElementById("tab-3").style.visibility="hidden";
document.getElementById("tab-4").style.visibility="hidden";

document.getElementById("tab1").style.visibility="hidden";
document.getElementById("tab2").style.visibility="hidden";
document.getElementById("tab3").style.visibility="hidden";
document.getElementById("tab4").style.visibility="hidden";


function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

var baseRe = httpGet(`${baseUrl}/info/${grade}/${subjectToGet}.json`);

baseRe = JSON.parse(baseRe);

for (i=0; i<baseRe.length; i++) {
  console.log(i);
  document.getElementById(`tab-${i+1}`).style.visibility = "visible";
  document.getElementById(`tab${i+1}`).style.visibility = "visible";
  document.getElementById(`tab${i+1}`).innerHTML=baseRe[i]["title"];
  document.getElementById(`con${i+1}-title`).innerHTML=baseRe[i]["title"];
  document.getElementById(`con${i+1}`).innerHTML += `<p><img src="${baseUrl}/img/${grade}/${baseRe[i]["image"]}" align="left" style="padding-right: 15px;"/>${baseRe[i]["desc"]}</p>`

  if(baseRe[i].hasOwnProperty("embed")) {
    document.getElementById(`con${i+1}`).innerHTML += `<a href="#ex${i+1}" rel="modal:open" class="button button2">View Project</a>`

    document.getElementById("mainsec").innerHTML += `<div id="ex${i+1}" class="modal">${b64DecodeUnicode(baseRe[i]["embed"])}</div>`
  }
}
