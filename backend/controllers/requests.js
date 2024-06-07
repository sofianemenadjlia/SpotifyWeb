
client_id = process.env.CLIENT_ID
client_secret = process.env.SPOTIFY_CLIENT_SECRET
redirect_uri = process.env.SPOTIFY_CALLBACK_URL
AUTHORIZE = "https://accoutns.spotify.com/authorize"
token = "https://accoutns.spotify.com/token"

function authorize(){
  let url = AUTHORIZE;
  url+= "?client_id=" + client_id;
  url+= "&response_type=code";
  url+= "&redirect_uri=" + encodeURI(redirect_uri);
  url+=  "&show_dialog=true";
  url+= "&scope-=user-read-private user-read-email user-read-playback-state user-top-read";
  window.location.href = url;
}

//front function
function onPageLoad(){
  if (window.location.search.length > 0){
    handleRedirect();
  } else {
    console.log("get songs");
  }
}

function handleRedirect(){
  let code = getCode();
  fetchAccessToken(code);
  window.history.pushState("", "", redirect)
}

function getCode() {
  let code = null;
  const queryString = window.location.search;
  if (queryString.length > 0){
    const urlParams = new URLSearchParams(queryString)
    code = urlParams.get('code');
  }
  return code;
}

function fetchAccessToken(code){
  let body = "grant_type=authorization_code";
  body+= "code=" + code;
  url+= "&redirect_uri=" + encodeURI(redirect_uri);
  url+= "?client_id=" + client_id;
  url+= "&client_secret=" + client_secret;
  callAuthApi(body);
}

function callAuthApi(body) {
  let xhr = new XMLHttpRequest();
  xhr.open("POST", token, true);
  xhr.setRequestHeader('Content-Type-', 'application/x-www-form-urlencoded');
  xhr.setRequestHeader('Authorization', 'Basic ' + btoa(client_id + ":" + client_secret));
  xhr.send(body);
  xhr.onload = handleAuthResponse;
}

function refreshAccessToken(){
  refrsh_token = localStorage.getItem("refresh_token");
  let body = "grant_type=refresh_token";
  url+= "&refresh_token=" + refresh_token
  url+= "?client_id=" + client_id;
  callAuthApi(body);
}

function handleAuthResponse(){
  if (this.status == 200){
    let data = JSON.parse(this.responseText);
    if (data.access_token!= undefined){
      access_token = data.access_token;
      localStorage.setItem("access_token", access_token);
    }
    if (data.refresh_token!= undefined){
      refresh_token = data.refresh_token;
      localStorage.setItem("refresh_token", refresh_token);
    }
    getSuggestion();
  } else {
    console.log(this.responseText);
    alert(this.reponseText);
  }
}

function getSuggestion()
{
  // callApi("GET", tracks, null, handleSongResponse);
}

function callApi(method, url, body, callback) {
  let xhr = new XMLHttpRequest();
  xhr.open(method, url, true);
  xhr.setRequestHeader('Content-Type-', 'application/json');
  xhr.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem("access_token"));
  xhr.send(body);
  xhr.onload = callbcak;
}

function handleSongResponse(){
  if (this.status == 200){
    let data = JSON.parse(this.responseText);
    console.log(data);
    //do smthn
  } else if (this.status == 401){
    refreshAccessToken();
  } else {
    console.log(this.responseText);
    alert(this.responseText);
  }
}

app.get(
  "/api/auth/new",
  authorize()

);