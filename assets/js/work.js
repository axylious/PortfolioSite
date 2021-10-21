let theme = localStorage.getItem('theme')

if(theme == null){
   setTheme('light')
} else{
   setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')

for(var i=0; themeDots.length>1; i++){
   themeDots[i].addEventListener('click', function(){
      let mode = this.dataset.mode
      console.log('Button clicked', mode)
      setTheme(mode)
   })
}

function setTheme(mode){
   if(mode == 'light'){
      document.getElementById('theme-style').href = 'assets/css/index.css'
   }

   if(mode == 'blue'){
      document.getElementById('theme-style').href = 'assets/css/blue.css'
   }

   if(mode == 'retro'){
      document.getElementById('theme-style').href = 'assets/css/retro.css'
   }

   if(mode == 'dark'){
      document.getElementById('theme-style').href = 'assets/css/dark.css'
   }

   if(mode == 'season'){
      document.getElementById('theme-style').href = 'assets/css/season.css'
   }

   localStorage.setItem('theme', mode)
}
