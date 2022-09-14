    // burger
    const burgerBtn = document.querySelector(".burger-button");
    const headerTop = document.querySelector(".header__top");
    const burgerLine = document.querySelector(".burger-line");
    const navLink = document.querySelectorAll(".nav__link");

    burgerBtn.addEventListener("click", function() {
      document.body.classList.toggle("body-lock");
      headerTop.classList.toggle("is-active");
      burgerLine.classList.toggle("active");
      burgerLine.classList.toggle("animate");
    });

    navLink.forEach(function(anchorClose) {
      anchorClose.addEventListener("click", function() {
        document.body.classList.remove("body-lock");
        headerTop.classList.remove("is-active");
        burgerLine.classList.remove("active", "animate");
      })
    });

    // search

    const searchBtnOpen = document.querySelector(".search__btn-open");
    const searchForm = document.querySelector(".search__form");
    const searchBtnClose = document.querySelector(".search__btn-close");

    searchBtnOpen.addEventListener("click", function() {
      searchForm.classList.add("search__form--active");
      searchBtnOpen.classList.add("active");
    });

    searchBtnClose.addEventListener("click", function(e) {
      const target = e.target;
      if (!target.closest(".search")) {
        searchForm.classList.remove("search__form--active");
        searchForm.querySelector("input").value = "";
        searchBtnOpen.classList.remove("active")
      }
    });

    searchBtnClose.addEventListener("click", function() {
      searchBtnOpen.classList.remove("active");
      searchForm.classList.remove("search__form--active");
    });


    // dropdown & scroll

      const params = {
        btnClassName: "js-header-dropdown-btn",
        dropClassName: "js-header-drop",
        activeClassName: "is-active",
        disabledClassName: "is-disabled"
      };

      function onDisable(evt) {
        if (evt.target.classList.contains(params.disabledClassName)) {
          evt.target.classList.remove(
            params.disabledClassName,
            params.activeClassName
          );
          evt.target.removeEventListener("animationend", onDisable);
        }
      }

      function setMenuListener() {
        document.body.addEventListener("click", (evt) => {
          const activeElements = document.querySelectorAll(
            `.${params.btnClassName}.${params.activeClassName}, .${params.dropClassName}.${params.activeClassName}`
          );

          if (
            activeElements.length &&
            !evt.target.closest(`.${params.activeClassName}`)
          ) {
            activeElements.forEach((current) => {
              if (current.classList.contains(params.btnClassName)) {
                current.classList.remove(params.activeClassName);
              } else {
                current.classList.add(params.disabledClassName);
              }
            });
          }

          if (evt.target.closest(`.${params.btnClassName}`)) {
            const btn = evt.target.closest(`.${params.btnClassName}`);
            const path = btn.dataset.dropPath;
            const drop = document.querySelector(
              `.${params.dropClassName}[data-drop-target="${path}"]`
            );

            btn.classList.toggle(params.activeClassName);

            if (!drop.classList.contains(params.activeClassName)) {
              drop.classList.add(params.activeClassName);
              drop.addEventListener("animationend", onDisable);
            } else {
              drop.classList.add(params.disabledClassName);
            }
          }
        });
      }

      setMenuListener();


    // hero-swiper

    document.addEventListener("DOMContentLoaded", () => {
    const swiper = new Swiper('.hero-swiper', {
      allowTouchMove: false,
        loop: true,
        effect: 'fade',
        speed: 5000,
        autoplay: {
          delay: 5000
        },
    })});


    // gallery-select

    document.addEventListener("DOMContentLoaded", function() {
      const selector = document.querySelector(".choices")

      const choices = new Choices(selector, {
        searchEnabled: false,
        classNames: {
          containerOuter: 'choices header_choices',
         },

         itemSelectText: ''
      });
    });


    // gallery-swiper

    document.addEventListener("DOMContentLoaded", () => {
      let gallerySlider = new Swiper(".gallery-swiper", {
        spaceBetween: 20,
        slidesPerGroup: 3,

        pagination: {
          el: ".gallery .gallery__pagination",
          type: "fraction"
        },

        navigation: {
          nextEl: ".gallery__next",
          prevEl: ".gallery__prev"
        },

        breakpoints: {
          320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },

          576: {
            slidesPerView: 2,
            spaceBetween: 38,
            slidesPerGroup: 2,
          },

          1200: {
            slidesPerView: 2,
            spaceBetween: 34,
            slidesPerGroup: 2,
          },

          1400: {
            slidesPerGroup: 3,
            slidesPerView: 3,
            spaceBetween: 50,
          },
        },

        //  можно управлять с клавиатуры стрелками влево/вправо
        a11y: false,
        keyboard: {
          enabled: true,
          onlyInViewport: true
        },

        // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        slideVisibleClass: "slide-visible",

        on: {
          init: function () {
            this.slides.forEach((slide) => {
              if (!slide.classList.contains("slide-visible")) {
                slide.tabIndex = "-1";
              } else {
                slide.tabIndex = "";
              }
            });
          },

          slideChange: function () {
            this.slides.forEach((slide) => {
              if (!slide.classList.contains("slide-visible")) {
                slide.tabIndex = "-1";
              } else {
                slide.tabIndex = "";
              }
            });
          }
        }
      });
    });


    // catalog-accordion

    (() => {
      new Accordion(".js-accordion-container", {
        openOnInit: [0]
      });
    })();

    // catalog-tabs

    document.querySelectorAll('.tabs-btn-js').forEach(function(tabsBtn){
      tabsBtn.addEventListener('click', function(e){
      const path = e.currentTarget.dataset.catPath;

      document.querySelectorAll('.catalog-article').forEach(function(tabsBtn){
        tabsBtn.classList.remove('article-active')});

        document.querySelector(`[data-cat-target="${path}"]`).classList.add('article-active');
      });
    });

    // events-swiper

    document.addEventListener("DOMContentLoaded", () => {
      const EventsSwiper = new Swiper('.events__swiper', {
        spaceBetween: 50,
        navigation: {
          nextEl: ".events__next",
          prevEl: ".events__prev"
        },

        loop: false,
        speed: 300,
        slidesPerGroup: 3,

        pagination: {
          el: '.events-swiper-pagination',
          type: 'bullets',
          clickable: true,
          },

          breakpoints: {
            320: {
              slidesPerView: 1,
              slidesPerGroup: 1
            },

            768: {
              slidesPerView: 2,
              spaceBetween: 34,
              slidesPerGroup: 2
            },

            992: {
              slidesPerView: 3,
              spaceBetween: 27,
              slidesPerGroup: 3
            },

            1300: {
              slidesPerView: 3,
              spaceBetween: 50,
              slidesPerGroup: 3
            }
          },

        a11y: false,
        // можно управлять с клавиатуры стрелками влево/вправо
        keyboard: {
          enabled: true,
          onlyInViewport: true
        },

        // то, что ниже, нужно для того, чтобы фокус не попадал на элементы слайдов за пределами области видимости
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        slideVisibleClass: "slide-visible",

        on: {
          init: function () {
            this.slides.forEach((slide) => {
              const links = slide.querySelectorAll('a');
              const btns = slide.querySelectorAll('button');
              const interactive = [...links, ...btns];

              if (!slide.classList.contains("slide-visible")) {
                slide.tabIndex = "-1";
                interactive.forEach(el => {
                  el.tabIndex = "-1";
                });
              } else {
                slide.removeAttribute('tabindex');
                interactive.forEach(el => {
                  el.removeAttribute('tabindex');
                });
              }
            });
          },
          slideChange: function () {
            this.slides.forEach((slide) => {
              const links = slide.querySelectorAll('a');
              const btns = slide.querySelectorAll('button');
              const interactive = [...links, ...btns];

              if (!slide.classList.contains("slide-visible")) {
                slide.tabIndex = "-1";
                interactive.forEach(el => {
                  el.tabIndex = "-1";
                });
              } else {
                slide.removeAttribute('tabindex');
                interactive.forEach(el => {
                  el.removeAttribute('tabindex');
                });
              }
            });
          }
        }
       })
      });



    // tooltip

    tippy('.tlp-btn-1', {
      content: "Пример современных тенденций - современная методология разработки",
      theme: 'violet',
      animation: 'shift-away',
    });

    tippy('.tlp-btn-2', {
      content: "Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции",
      theme: 'violet',
      animation: 'shift-away',
    });

    tippy('.tlp-btn-3', {
      content: "В стремлении повысить качество",
      theme: 'violet',
      animation: 'shift-away',
    });


    // projects-swiper

      document.addEventListener("DOMContentLoaded", () => {
        const projectsSlider = new Swiper(".projects__swiper", {
          spaceBetween: 50,
          navigation: {
            nextEl: ".projects__next",
            prevEl: ".projects__prev",
          },

          breakpoints: {
            320: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 38,
            },
            1200: {
              slidesPerView: 2,
              spaceBetween: 34,
            },
            1300: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          },

          a11y: false,
          // можно управлять с клавиатуры стрелками влево/вправо
          keyboard: {
            enabled: true,
            onlyInViewport: true
          },
          // то, что ниже, нужно для того, чтобы фокус не попадал на элементы слайдов за пределами области видимости
          watchSlidesProgress: true,
          watchSlidesVisibility: true,
          slideVisibleClass: "slide-visible",
          on: {
            init: function () {
              this.slides.forEach((slide) => {
                const links = slide.querySelectorAll('a');
                const btns = slide.querySelectorAll('button');
                const interactive = [...links, ...btns];
                if (!slide.classList.contains("slide-visible")) {
                  slide.tabIndex = "-1";
                  interactive.forEach(el => {
                    el.tabIndex = "-1";
                  });
                } else {
                  slide.removeAttribute('tabindex');
                  interactive.forEach(el => {
                    el.removeAttribute('tabindex');
                  });
                }
              });
            },
            slideChange: function () {
              this.slides.forEach((slide) => {
                const links = slide.querySelectorAll('a');
                const btns = slide.querySelectorAll('button');
                const interactive = [...links, ...btns];
                if (!slide.classList.contains("slide-visible")) {
                  slide.tabIndex = "-1";
                  interactive.forEach(el => {
                    el.tabIndex = "-1";
                  });
                } else {
                  slide.removeAttribute('tabindex');
                  interactive.forEach(el => {
                    el.removeAttribute('tabindex');
                  });
                }
              });
            }
          }
        })
      });

    // Yandex-map

    document.addEventListener("DOMContentLoaded", () => {
    ymaps.ready(init);
      function init(){
        var myMap = new ymaps.Map("map", {
            center: [55.758468, 37.601088],
            zoom: 15,
            behaviors: ['multiTouch'],
            controls: []
            },
            {suppressMapOpenBlock: true}),

        myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
          iconLayout: 'default#image',
          iconImageHref: 'img/mapIcon.svg',
          iconImageSize: [20, 20],
        });

        myMap.geoObjects.add(myPlacemark);

        myMap.behaviors.disable('scrollZoom');

          myMap.controls.add('zoomControl', {
            size: 'smal',
            float: 'none',
            position: {
                top: '275px',
                right: '10px',
            }
          });

        myMap.controls.add('geolocationControl', {
          position: {
            bottom: '310px',
            right: '10px'
          }
        });

        myMap.events.add("sizechange", function (e) {
          if (window.matchMedia("(max-width: 1200px)").matches) {
            if (Object.keys(myMap.controls._controlKeys).length) {
              myMap.controls.remove('zoomControl');
              myMap.controls.remove('geolocationControl');
            }
          }
        });
      }
    })


    // modal-windows

    const modal = new GraphModal();


    // form-valodation / phone-mask  /  send mail

    var selector = document.querySelector("input[type='tel']");

    var im = new Inputmask("+7 (999) 999 - 99 - 99");

    im.mask(selector);

    const validation = new JustValidate('.footer__form', {
      errorLabelStyle: {
        fontSize: '12px',
        lineHeight: '20px',
        color: '#D11616',
      },
    });

    validation
      .addField('#name', [
        {
          rule: 'required',
          errorMessage: 'Вы не ввели имя',
        },
      ])

      .addField('#phone', [
        {
          rule: 'required',
          errorMessage: 'Вы не ввели телефон',
        },

        {
          rule: 'function',
          validator: function() {
           const phone = selector.inputmask.unmaskedvalue()
           return phone.length === 10;
          },
          errorMessage: 'Введите корректый номер',
        },

      ]).onSuccess((event) => {
        console.log('Validation passes and form submitted', event);

        let formData = new FormData(event.target);

        console.log(...formData);

        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              console.log('Отправлено');
            }
          }
        }

        xhr.open('POST', 'mail.php', true);
        xhr.send(formData);

        event.target.reset();
      });


    // soft scroll

    document.querySelectorAll('.js-scroll-nav').forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault();

          const href = this.getAttribute('href').substring(1);
          const scrollTarget = document.getElementById(href);
          const elementPosition = scrollTarget.getBoundingClientRect().top;

          window.scrollBy({
              top: elementPosition,
              behavior: 'smooth'
          })
      })});

      document.querySelectorAll('.js-scroll-gallery').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href').substring(1);
            const scrollTarget = document.getElementById(href);
            const elementPosition = scrollTarget.getBoundingClientRect().top;
            window.scrollBy({
                top: elementPosition,
                behavior: 'smooth'
            })
        })});

      document.querySelectorAll('.js-scroll-hero').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

          const href = link.dataset.scroll;
          const scrollTarget = document.getElementById(href);
          const elementPosition = scrollTarget.getBoundingClientRect().top;

          window.scrollBy({
            top: elementPosition,
            behavior: 'smooth'
          });
        })
      })


    const MOBILE_WIDTH = 992;

    function getWindowWidth () {
      return Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.body.clientWidth,
        document.documentElement.clientWidth
      )
    }

    function scrollToContent (link, isMobile) {
      if (isMobile && getWindowWidth() > MOBILE_WIDTH) {
        return;
      }

      const href = link.dataset.scroll;
      const scrollTarget = document.getElementById(href);
      const elementPosition = scrollTarget.getBoundingClientRect().top;

      window.scrollBy({
          top: elementPosition,
          behavior: 'smooth'
      });
    }

    document.querySelectorAll('.js-scroll-link').forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault();

          // вместо false нужно указать true, если скролл нужен только на мобильном
          scrollToContent(this, true);
      });
    });


    // form-valodation for enter-modal

    const validationModal = new JustValidate('.enter-modal__form', {
      errorLabelStyle: {
        fontSize: '12px',
        lineHeight: '16px',
        color: '#D11616',
      },
    });

    validationModal
      .addField('#login', [
        {
          rule: 'required',
          errorMessage: 'Вы не ввели логин',
        },
      ])
      .addField('#password', [
        {
          rule: 'required',
          errorMessage: 'Вы не ввели пароль',
        },
        {
          rule: 'password',
          errorMessage: 'Минимум 8 символов, латинские буквы и цифры',
        },
      ]);
