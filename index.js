import{a as m,S as d,i as n}from"./assets/vendor-dNBuWDsd.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const p="https://pixabay.com/api/",g="55106557-17a58ac065e1340b333cc7179";function y(s){return m.get(p,{params:{key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),h=new d(".gallery a",{captionsData:"alt",captionDelay:250});function b(s){const r=s.map(({webformatURL:o,largeImageURL:a,tags:e,likes:t,views:i,comments:f,downloads:u})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${a}">
            <img
              class="gallery-image"
              src="${o}"
              alt="${e}"
            />
          </a>
          <div class="info">
            <p class="info-item"><b>Likes</b> ${t}</p>
            <p class="info-item"><b>Views</b> ${i}</p>
            <p class="info-item"><b>Comments</b> ${f}</p>
            <p class="info-item"><b>Downloads</b> ${u}</p>
          </div>
        </li>
      `).join("");c.insertAdjacentHTML("beforeend",r),h.refresh()}function L(){c.innerHTML=""}function v(){l.classList.add("is-visible")}function S(){l.classList.remove("is-visible")}const q=document.querySelector(".form");q.addEventListener("submit",s=>{s.preventDefault();const r=s.currentTarget.elements["search-text"].value.trim();r&&(L(),v(),y(r).then(o=>{if(!o.hits||o.hits.length===0){n.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fff",backgroundColor:"#ef4040",position:"topRight"});return}b(o.hits)}).catch(o=>{n.show({message:o.message,messageColor:"#fff",backgroundColor:"#ef4040",position:"topRight"})}).finally(()=>{S()}))});
//# sourceMappingURL=index.js.map
