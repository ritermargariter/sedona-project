let reviewForm=document.querySelector(".review-form"),modal=document.querySelector(".modal"),modalErr=document.querySelector(".modal__window--error"),modalSuccess=document.querySelector(".modal__window--success"),buttonSubmit=document.querySelector(".review-form__submit"),buttonErr=document.querySelector(".modal__button--err"),buttonSuccess=document.querySelector(".modal__button--success"),inputError=document.querySelector(".review-form__input"),firstName=document.querySelector("#name"),secondName=document.querySelector("#surname"),tel=document.querySelector("#tel"),email=document.querySelector("#email"),emotions=document.querySelector("#emotions");buttonSubmit.addEventListener("click",(function(e){firstName.value&&secondName.value&&tel.value&&email.value&&emotions.value?(e.preventDefault(),modal.classList.add("modal__window--show"),modalSuccess.classList.add("modal__window--show"),buttonSuccess.addEventListener("click",(function(){modalSuccess.classList.remove("modal__window--show"),modal.classList.remove("modal__window--show"),reviewForm.reset()}))):(e.preventDefault(),firstName.classList.add("review-form__input--error"),secondName.classList.add("review-form__input--error"),tel.classList.add("review-form__input--error"),email.classList.add("review-form__input--error"),emotions.classList.add("review-form__textarea--error"),firstName.onclick=function(){firstName.classList.remove("review-form__input--error")},secondName.onclick=function(){secondName.classList.remove("review-form__input--error")},tel.onclick=function(){tel.classList.remove("review-form__input--error")},email.onclick=function(){email.classList.remove("review-form__input--error")},emotions.onclick=function(){emotions.classList.remove("review-form__textarea--error")},modal.classList.add("modal__window--show"),modalErr.classList.add("modal__window--show"),buttonErr.addEventListener("click",(function(){modalErr.classList.remove("modal__window--show"),modal.classList.remove("modal__window--show")})))}));