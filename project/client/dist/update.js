(()=>{"use strict";const t=function(t){return document.getElementById(t)},e=t("author"),n=t("title"),o=t("content"),a=new URLSearchParams(window.location.search).get("no"),c="http://localhost:8080",i=t("updateBtn"),l=t("cancelBtn");(function(t){return fetch(`${c}/post/${t}`,{method:"GET"}).then((t=>t.json())).catch((()=>{alert("존재하지 않는 게시물입니다."),window.location.href="/index.html"}))})(a).then((t=>{e.value=t.author,n.value=t.title,o.value=t.content})),i.addEventListener("click",(()=>{(function(t){return fetch(`${c}/post/${t}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({author:e.value,title:n.value,content:o.value})})})(a).then((()=>{alert("게시물이 수정되었습니다."),window.location.href="/index.html"})).catch((t=>{let e=400===t.status?"잘못된 요청입니다.":"존재하지 않는 게시물입니다.";alert(e),window.location.href="/index.html"}))})),l.addEventListener("click",(()=>{window.location.href="/view.html?no="+a}))})();