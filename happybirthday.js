var app = new Vue({
    el: '#app',
    data: {
      open: false,
      text: 'Happy Birthday!',
    },
    methods: {
      click: function() {
        if (!this.open){
            this.open = true; 
            var audio = new Audio();
            audio.src = "https://181850036.oss-cn-hangzhou.aliyuncs.com/songf.mp3";
            audio.loop = true;
            audio.play();
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