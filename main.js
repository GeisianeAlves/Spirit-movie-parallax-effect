

    let text = document.getElementById('text');
    let mountain = document.getElementById('mountain');
    let birds = document.getElementById('birds');
    let eagle = document.getElementById('eagle');
    let eagle2 = document.getElementById('eagle2');
    
    let horse = document.getElementById('horse');
    let pine1 = document.getElementById('pine1');
    let pine2 = document.getElementById('pine2');
    let colina = document.getElementById('colina');
    let btn = document.getElementById('btn');
    let header = document.getElementById('header');

    window.addEventListener('scroll', function() {
        let value = window.scrollY;

        birds.style.left = value * -0.5 + 'px',
        birds.style.bottom = value * -1.5 + 'px',

    

        text.style.top = 30 +value * -0.12+ '%',      
        eagle.style.left = value * -1.5 + 'px',       
        eagle.style.top = value * -1 + 'px',              
         
        eagle2.style.marginRight = value * 1.5 + 'px',
        eagle2.style.top = value * 1.12+ 'px',

        /*btn.style.marginTop = value * 1.5 + 'px',*/
        
        pine1.style.right= value * 0.5  + 'px',
        pine2.style.top = value * -0.5 + 'px',

        /*colina.style.bottom = value * 1.5 + 'px',*/
        horse.style.top = value * -0.25 + 'px',

        mountain.style.top = value * 0.25 + 'px',
        header.style.top = value * 0.5 + 'px'
    })

    
   