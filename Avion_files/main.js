(() => {
  var modules = {
    336: () => {
        const burger = document.querySelector('.header__burger')
        const burgerLine = document.querySelectorAll('.header__burger-line')
        const burgerMenu = document.querySelector('.header__bottom')
        const header = document.querySelector('.header')
        burger.addEventListener('click', ()=>{
            burgerLine.forEach(item=>item.classList.toggle('active'))
            burgerMenu.classList.toggle('active-b')
            header.classList.toggle('active')
        })
    },
    
    937: () => {
      new Swiper(".mySwiper", {
        slidesPerView: 2,
        spaceBetween: 20
      });
    },
    
    860: () => {
      function applyFocusVisiblePolyfill(scope) {
        var hadKeyboardEvent = true,
            hadFocusVisibleRecently = false,
            hadFocusVisibleRecentlyTimeout = null,
            inputTypesAllowlist = {
              text: true,
              search: true,
              url: true,
              tel: true,
              email: true,
              password: true,
              number: true,
              date: true,
              month: true,
              week: true,
              time: true,
              datetime: true,
              "datetime-local": true
            };
        
        function isFocusable(element) {
          return !!(element && element !== document && 
                   element.nodeName !== "HTML" && 
                   element.nodeName !== "BODY" && 
                   "classList" in element && 
                   "contains" in element.classList);
        }
        
        function addFocusVisibleClass(element) {
          if (!element.classList.contains("focus-visible")) {
            element.classList.add("focus-visible");
            element.setAttribute("data-focus-visible-added", "");
          }
        }
        
        function onKeyDown(e) {
          if (e.metaKey || e.altKey || e.ctrlKey) return;
          if (isFocusable(scope.activeElement)) {
            addFocusVisibleClass(scope.activeElement);
          }
          hadKeyboardEvent = true;
        }
        
        function onPointerDown() {
          hadKeyboardEvent = false;
        }
        
        function onInitialPointerMove() {
          document.removeEventListener("mousemove", onInitialPointerMove);
          document.removeEventListener("mousedown", onInitialPointerMove);
          document.removeEventListener("mouseup", onInitialPointerMove);
          document.removeEventListener("pointermove", onInitialPointerMove);
          document.removeEventListener("pointerdown", onInitialPointerMove);
          document.removeEventListener("pointerup", onInitialPointerMove);
          document.removeEventListener("touchmove", onInitialPointerMove);
          document.removeEventListener("touchstart", onInitialPointerMove);
          document.removeEventListener("touchend", onInitialPointerMove);
          hadKeyboardEvent = false;
        }
        
        function initializeEventListeners() {
          document.addEventListener("keydown", onKeyDown, true);
          document.addEventListener("mousedown", onPointerDown, true);
          document.addEventListener("pointerdown", onPointerDown, true);
          document.addEventListener("touchstart", onPointerDown, true);
          
          document.addEventListener("visibilitychange", (e) => {
            if (document.visibilityState === "hidden") {
              if (hadFocusVisibleRecently) {
                hadKeyboardEvent = true;
              }
              initializePointerEvents();
            }
          }, true);
          
          initializePointerEvents();
        }
        
        function initializePointerEvents() {
          document.addEventListener("mousemove", onInitialPointerMove);
          document.addEventListener("mousedown", onInitialPointerMove);
          document.addEventListener("mouseup", onInitialPointerMove);
          document.addEventListener("pointermove", onInitialPointerMove);
          document.addEventListener("pointerdown", onInitialPointerMove);
          document.addEventListener("pointerup", onInitialPointerMove);
          document.addEventListener("touchmove", onInitialPointerMove);
          document.addEventListener("touchstart", onInitialPointerMove);
          document.addEventListener("touchend", onInitialPointerMove);
        }
        
        scope.addEventListener("focus", (e) => {
          if (isFocusable(e.target)) {
            const target = e.target;
            const tagName = target.tagName;
            const type = target.type;
            
            if (hadKeyboardEvent || 
                (tagName === "INPUT" && inputTypesAllowlist[type] && !target.readOnly) || 
                (tagName === "TEXTAREA" && !target.readOnly) || 
                target.isContentEditable) {
              addFocusVisibleClass(target);
            }
          }
        }, true);
        
        scope.addEventListener("blur", (e) => {
          if (isFocusable(e.target)) {
            if (e.target.classList.contains("focus-visible") || 
                e.target.hasAttribute("data-focus-visible-added")) {
              hadFocusVisibleRecently = true;
              window.clearTimeout(hadFocusVisibleRecentlyTimeout);
              hadFocusVisibleRecentlyTimeout = window.setTimeout(() => {
                hadFocusVisibleRecently = false;
              }, 100);
              
              if (e.target.hasAttribute("data-focus-visible-added")) {
                e.target.classList.remove("focus-visible");
                e.target.removeAttribute("data-focus-visible-added");
              }
            }
          }
        }, true);
        
        if (scope.nodeType === Node.DOCUMENT_FRAGMENT_NODE && scope.host) {
          scope.host.setAttribute("data-js-focus-visible", "");
        } else if (scope.nodeType === Node.DOCUMENT_NODE) {
          document.documentElement.classList.add("js-focus-visible");
          document.documentElement.setAttribute("data-js-focus-visible", "");
        }
      }
      
      if (typeof window !== "undefined" && typeof document !== "undefined") {
        let event;
        window.applyFocusVisiblePolyfill = applyFocusVisiblePolyfill;
        
        try {
          event = new CustomEvent("focus-visible-polyfill-ready");
        } catch (e) {
          event = document.createEvent("CustomEvent");
          event.initCustomEvent("focus-visible-polyfill-ready", false, false, {});
        }
        
        window.dispatchEvent(event);
      }
      
      if (typeof document !== "undefined") {
        applyFocusVisiblePolyfill(document);
      }
    }
  };
  
  const moduleCache = {};
  
  function requireModule(moduleId) {
    var cachedModule = moduleCache[moduleId];
    if (cachedModule !== undefined) return cachedModule.exports;
    
    var module = moduleCache[moduleId] = {
      exports: {}
    };
    
    return modules[moduleId](module, module.exports, requireModule), module.exports;
  }
  
  (() => {
    "use strict";
    
    requireModule(860);
    
    const globals = {
      windowEl: window,
      documentEl: document,
      htmlEl: document.documentElement,
      bodyEl: document.body
    };
    
    console.log((() => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      
      if (/android/i.test(userAgent)) {
        globals.htmlEl.classList.add("page--android");
        return "Android";
      } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        globals.htmlEl.classList.add("page--ios");
        return "iOS";
      }
      return "unknown";
    })());
    
    requireModule(336);
    requireModule(937);
    
    console.log("components");
  })();
})();

document.addEventListener('DOMContentLoaded', () => {
    const swipeElem1 = document.querySelector('.brand__list');
    const swipeElem2 = document.querySelector('.popular');
    const cards = document.querySelectorAll('.card-new');

    let swipeElem1Animated = false;
    let cardsAnimated = false;
    let swipeElem2Animated = false;

    function handleScroll() {
        const windowHeight = window.innerHeight;

        if (swipeElem1 && !swipeElem1Animated) {
            const rect1 = swipeElem1.getBoundingClientRect();
            if (rect1.top < windowHeight) {
                swipeElem1.classList.add('animate');
                swipeElem1Animated = true;
            }
        }

        if (cards.length > 0 && !cardsAnimated) {
            const firstCardRect = cards[0].getBoundingClientRect();
            if (firstCardRect.top + 500 < windowHeight) {
                cardsAnimated = true;
                cards.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('animate-card');
                    }, index * 200);
                });
            }
        }

        if (swipeElem2 && !swipeElem2Animated) {
            const rect2 = swipeElem2.getBoundingClientRect();
            if (rect2.top + 500 < windowHeight) {
                swipeElem2.classList.add('animate');
                swipeElem2Animated = true;
            }
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();
});