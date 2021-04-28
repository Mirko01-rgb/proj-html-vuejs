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
                  link:'Bed'
                },
                {
                  link:'Food'
                },
                {
                 link:'Toys'
                },
                {
                  link:'Transport'
                },

              ]},

          ],

          items: [
                {
                  name:'Shop by brand' ,
                  sub: [
                    { title: 'Bed'},
                    { title: 'Food'},
                    { title: 'Toys'},
                    { title: 'Transport'},
                  ]},
                ],

                links: [
                     {
                       names:'Useful links' ,
                       subs: [
                         { titles: 'My account'},
                         { titles: 'Orders'},
                         { titles: 'Checkout'},
                         { titles: 'Cart'},
                       ]},
                     ],
        },


        methods: {

        },

    });
}
function init() {
    initVue();
}
document.addEventListener('DOMContentLoaded', init);
