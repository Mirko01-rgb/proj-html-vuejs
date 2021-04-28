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
          ],
          info:[
            {
              title: 'Shop by brand',
              voces:[
                {
                  bed:'Bed'
                },
                {
                  food:'Food'
                },
                {
                  toys:'Toys'
                },
                {
                  transport:'Transport'
                },

              ]
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
