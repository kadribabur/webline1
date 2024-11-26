alert("you are my website...")



document.getElementById('Tikla').addEventListener('click' ,function()
{
    var targetElement = document.getElementById('targetElement');
    
    if (targetElement.style.display  === 'none')
        {
        targetElement.style.display= 'inline-block';
    }
    else
    {
        targetElement.style.display= 'none';
    }
    
})

document.addEventListener("DOMContentLoaded",function()
{
    
    const H1 = document.querySelector('.k_1');
    const H2 = document.querySelector('.kadr777');
    const H3 = document.querySelector('.American');
    
    H3.addEventListener('click',function()
    {
        H1.style.display = 'block';
        H2.style.display = 'none';
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const starsContainer = document.querySelector('.stars');
    
    for (let i = 0; i < 400; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + 'vw';
        star.style.top = Math.random() * 100 + 'vh';
        star.style.animationDuration = (Math.random() * 3 + 2) + 's';
        starsContainer.appendChild(star);
    }
});


