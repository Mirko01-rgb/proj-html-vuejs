function initVue() {
    new Vue({
        el: '#app',
        data: {
          navDown:[
            {
              link: 'Home',
              chevron:true
            },
            {
              link: 'Shop',
              chevron:true
            },
            {
              link: 'About',
              chevron:false
            },
            {
              link: 'Blog',
              chevron:false,
            },
            {
              link: 'Contact',
              chevron:false,

            },
            {
              link: 'Shop by brand',
              chevron:true
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
