var app = new Vue({
    el: '#app',
    data: {
      open: false,
      text: 'Happy Birthday!',
      smallText: (window.innerWidth > 1000 && window.innerHeight > 1000) ? 'Being with you and not being with you is the only way I have to measure time' : 'Being with you and not being with you<br>&nbsp;&nbsp;is the only way I have to measure time'
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
