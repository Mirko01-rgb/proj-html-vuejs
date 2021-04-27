function initVue() {
    new Vue({
        el: '#app',
        data: {
          navDown:[
            {
              link: 'Home',
            },
            {
              link: 'Shop'
            },
            {
              link: 'About'
            },
            {
              link: 'Blog'
            },
            {
              link: 'Contact'
            },
            {
              link: 'Shop by brand'
            },

          ]
        },
        methods: {

        },

    });
}
function init() {
    initVue();
}
document.addEventListener('DOMContentLoaded', init);
