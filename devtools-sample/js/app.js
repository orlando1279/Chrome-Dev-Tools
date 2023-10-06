import {l as e, s as o} from "./actions-f0eb5c8e.js";
function t({cookiePreference: e}) {
    window.dataLayer.push({
        cookiePreference: e
    })
}
document.body.classList.remove("unresolved"),
matchMedia("(prefers-reduced-motion)").matches && document.querySelectorAll("video[autoplay]").forEach((e=>{
    e.removeAttribute("autoplay"),
    e.setAttribute("controls", "")
}
)),
e(),
o.subscribe(t),
t(o.getState()),
function() {
    if ("serviceWorker"in navigator)
        navigator.serviceWorker.getRegistrations().then((e=>Promise.all(e.map((e=>e.unregister()))))).then((e=>{
            e.length && window.location.reload()
        }
        ))
}();
