let theme = localStorage.getItem('theme')
let pic = localStorage.getItem('pic')

if(theme == null){
   setTheme('light')
} else{
   setTheme(theme, pic)
}

let themeDots = document.getElementsByClassName('theme-dot')

for(var i=0; themeDots.length>1; i++){
   themeDots[i].addEventListener('click', function(){
      let mode = this.dataset.mode
      console.log('Button clicked', mode)
      setTheme(mode)
   })
}

function setTheme(mode, pic){
   if(mode == 'light'){
      document.getElementById('theme-style').href = 'assets/css/index.css'
      document.getElementById('spotify').src = 'assets/images/Spotify_Icon_RGB_Black.png'
   }

   if(mode == 'blue'){
      document.getElementById('theme-style').href = 'assets/css/blue.css'
      document.getElementById('profile-pic').src = 'assets/images/AxelOlivas.jpg'
      document.getElementById('spotify').src = 'assets/images/Spotify_Icon_RGB_Green.png'
   }

   if(mode == 'retro'){
      document.getElementById('theme-style').href = 'assets/css/retro.css'
      document.getElementById('spotify').src = 'assets/images/Spotify_Icon_RGB_White.png'
   }

   if(mode == 'dark'){
      document.getElementById('theme-style').href = 'assets/css/dark.css'
      document.getElementById('profile-pic').src = 'assets/images/Axel-intro.JPEG'
      document.getElementById('spotify').src = 'assets/images/Spotify_Icon_RGB_Green.png'
   }

   if(mode == 'season'){
      document.getElementById('theme-style').href = 'assets/css/season.css'
      document.getElementById('spotify').src = 'assets/images/Spotify_Icon_RGB_Black.png'
   }

   localStorage.setItem('theme', mode)
   localStorage.setItem('pic', pic)
}
