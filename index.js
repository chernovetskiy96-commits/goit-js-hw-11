import{S as m,i as a}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const d="https://pixabay.com/api/",p="55106557-17a58ac065e1340b333cc7179";function g(s){const o=new URLSearchParams({key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${d}?${o}`).then(t=>{if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);return t.json()})}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),h=new m(".gallery a",{captionsData:"alt",captionDelay:250});function y(s){const o=s.map(({webformatURL:t,largeImageURL:n,tags:e,likes:r,views:i,comments:f,downloads:u})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${n}">
            <img
              class="gallery-image"
              src="${t}"
              alt="${e}"
            />
          </a>
          <div class="info">
            <p class="info-item"><b>Likes</b> ${r}</p>
            <p class="info-item"><b>Views</b> ${i}</p>
            <p class="info-item"><b>Comments</b> ${f}</p>
            <p class="info-item"><b>Downloads</b> ${u}</p>
          </div>
        </li>
      `).join("");c.insertAdjacentHTML("beforeend",o),h.refresh()}function b(){c.innerHTML=""}function L(){l.classList.add("is-visible")}function w(){l.classList.remove("is-visible")}const S=document.querySelector(".form");S.addEventListener("submit",s=>{s.preventDefault();const o=s.currentTarget.elements["search-text"].value.trim();o&&(b(),L(),g(o).then(t=>{if(!t.hits||t.hits.length===0){a.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fff",backgroundColor:"#ef4040",position:"topRight"});return}y(t.hits)}).catch(t=>{a.show({message:t.message,messageColor:"#fff",backgroundColor:"#ef4040",position:"topRight"})}).finally(()=>{w()}))});
//# sourceMappingURL=index.js.map
