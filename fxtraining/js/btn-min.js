let subMenu=document.querySelector(".useful-links");function toggleClass(e,t,o){e.className=e.className==t?o:t}subMenu.onclick=function(e){let t=e.target;window.innerWidth<=730&"useful-links"==subMenu.className&&toggleClass(subMenu,"useful-links","sub-menu"),e.offsetX>subMenu.offsetWidth-65&"caption"==t.className&&toggleClass(subMenu,"useful-links","sub-menu")};let regBtn=document.querySelector(".deal__top-reg-btn"),formBg=document.querySelector(".form-bg"),formCross=document.querySelector(".reg-window--cross"),regBtn2=document.querySelector(".how-make-money__btn"),cryptoTable=document.querySelector(".crypto-rate-table");regBtn.onclick=function(e){e.target;formBg.style.display="block"},regBtn2.onclick=function(){formBg.style.display="block"},cryptoTable.onclick=function(e){"crypto-rate-table__btn"==e.target.className&&(formBg.style.display="block")},formCross.onclick=function(e){e.target;formBg.style.display="none"};