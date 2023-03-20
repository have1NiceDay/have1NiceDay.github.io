var app = new Vue({
    el: '#app',
    data: {
      open: false,
      text: 'Happy Anniversary 2 years & 11 month'
    },
    methods: {
      click: function() {
        if (!this.open){
        this.open = true; 
        }
      }
    },
    watch:{
      open: function() {
        if (this.open === true) {
            document.body.className = 'open';
            }
      }
    }
  })