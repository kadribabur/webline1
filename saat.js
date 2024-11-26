const Clock = document.querySelector(".Clock");

// Saatin her saniye güncellenmesi için fonksiyon
const tick = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    Clock.textContent = `${hours}:${minutes}:${seconds}`;
};

setInterval(tick, 1000);

document.addEventListener("DOMContentLoaded", function() {
    // İlk "DOMContentLoaded" olayı dinleyicisi
    const trashIcons = document.querySelectorAll('.bi-trash');
    
    // Her bir "bi-trash" simgesine tıklama olayı ekle
    trashIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            // İkonun içindeki en yakın div elementini bul ve gizle
            this.closest('.Box').style.display = 'none';
        });
    });
    
    // İkinci "DOMContentLoaded" olayı dinleyicisi
    const trashIcons1 = document.querySelectorAll('.heee1');
    const trashIcons2 = document.querySelector(".kadr11");
    
    
    trashIcons1.addEventListener("click", function() {
        trashIcons2.style.display = "block";
    });
    
});



document.addEventListener("DOMContentLoaded",function()
{
    const Hackleme = document.querySelector('.Hackleme');
    const Hackleme1 = document.querySelector('.kadr111');
    const Hackleme2 = document.querySelector('.kadr222')
    
    Hackleme.addEventListener("click",function()
    {
        Hackleme1.style.display = 'block';
        Hackleme2.style.display = 'none';
    });
});


document.addEventListener("DOMContentLoaded",function()
{
    
    const Hackleme3 = document.querySelector('.kadr111');
    const Hackleme4 = document.querySelector('.kadr222');
    const Hackleme5 = document.querySelector('.BackPage');
    
    Hackleme5.addEventListener("click",function()
    {
        Hackleme3.style.display = 'none';
        Hackleme4.style.display = 'block';
    });
});



document.addEventListener('DOMContentLoaded',function()
{
    function searchFunction() {
        const input = document.getElementById('searchInput');
        const filter = input.value.toLowerCase();
        const taskList = document.getElementById('taskList');
        const tasks = taskList.getElementsByClassName('APP2_1');
        
        for (let i = 0; i < tasks.length; i++) {
            const task = tasks[i];
            let text = task.textContent || task.innerText;
            if (text.toLowerCase().indexOf(filter) > -1) {
                task.style.display = "";
            } else {
                task.style.display = "none";
            }
        }
    }
    
    // "Danger" butonuna tıklama olayını dinleme ve seçenek ekleme
    document.getElementById('addOptionButton').addEventListener('click', function() {
        const input = document.getElementById('searchInput').value.trim();
        if (input === '') {
            alert('Lütfen eklemek için bir kelime girin.');
            return;
        }
        
        const taskList = document.getElementById('taskList');
        
        // Yeni seçenek div'i oluşturma
        const newOption = document.createElement('div');
        newOption.className = 'APP2_1 Box Box1 Box1_1';
        
        // SVG ikonunu tekrar kullanma (Gerekirse farklı ikonlar kullanabilirsiniz)
        const svgIcon = `
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                class="bi bi-trash" viewBox="0 0 16 16">
                <path
                    d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"></path>
                <path
                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"></path>
            </svg>
        `;
        
        // Yeni seçeneğe metni ekleme
        newOption.innerHTML = `
            ${svgIcon}
            <p>${input}</p>
        `;
        
        // Yeni seçeneği "taskList" içine ekleme
        taskList.appendChild(newOption);
        
        // Arama kutusunu temizleme
        document.getElementById('searchInput').value = '';
    });
    
    
    document.getElementById('searchForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Formun submit edilmesini engeller
        addTask();
    });
    
    
})


//  ------------------------Tree column için js ------------------


document.addEventListener("DOMContentLoaded",function()
{
    const Kadr3 = document.querySelector('.Saldiri');
    const Kadr33= document.querySelector('.kadr222');
    const Kadr333 = document.querySelector('.kadr333')
    
    Kadr3.addEventListener("click",function()
    {
        Kadr333.style.display = 'block';
        Kadr33.style.display = 'none';
    });
});


document.addEventListener("DOMContentLoaded",function()
{
    
    const Hackleme3 = document.querySelector('.kadr333');
    const Hackleme4 = document.querySelector('.kadr222');
    const Hackleme5 = document.querySelector('.BackPage1');
    
    Hackleme5.addEventListener("click",function()
    {
        Hackleme3.style.display = 'none';
        Hackleme4.style.display = 'block';
    });
});

// --------------------foor column---------------------------

document.addEventListener('DOMContentLoaded',function()
{
    const Hack1 = document.querySelector('.btn-danger-syber');
    const Hack2 = document.querySelector('.kadr444');
    const Hack3 = document.querySelector('.kadr333');
    
    Hack1.addEventListener('click',function()
    {
        Hack2.style.display = 'block';
        Hack3.style.display = 'none';   
    });
    
    
});


document.addEventListener("DOMContentLoaded",function()
{
    
    const Hack4 = document.querySelector('.kadr444');
    const Hack5 = document.querySelector('.kadr333');
    const Hack6 = document.querySelector('.BackPage2');
    
    Hack6.addEventListener('click',function()
    {
        Hack4.style.display = 'none';
        Hack5.style.display = 'block';
    });
});


// --------------------- Instagram tools -----------------------


document.addEventListener('DOMContentLoaded',function()
{
    const InstaTools1 = document.querySelector('.btn-danger1');
    const InstaTools2 = document.querySelector('.kadr111');
    const InstaTools3 = document.querySelector('.kadr555');
    
    InstaTools1.addEventListener('click',function()
    {
        InstaTools2.style.display = 'none';
        InstaTools3.style.display = 'block';   
    });
    
    
});

document.addEventListener("DOMContentLoaded",function()
{
    
    const InstaTools1_3 = document.querySelector('.kadr111');
    const InstaTools1_2 = document.querySelector('.kadr555');
    const InstaTools1_1 = document.querySelector('.BackPage3');
    
    InstaTools1_1.addEventListener('click',function()
    {
        InstaTools1_2.style.display = 'none';
        InstaTools1_3.style.display = 'block';
    });
});

// -------------------------------Silahlan --------------------------------------

document.addEventListener('DOMContentLoaded',function()
{
    const InstaTools4 = document.querySelector('.silahlan');
    const InstaTools5 = document.querySelector('.kadr222');
    const InstaTools6 = document.querySelector('.kadr666');
    
    InstaTools4.addEventListener('click',function()
    {
        InstaTools5.style.display = 'none';
        InstaTools6.style.display = 'block';   
    });
    
    
});


document.addEventListener("DOMContentLoaded",function()
{
    
    const H1 = document.querySelector('.kadr222');
    const H2 = document.querySelector('.kadr666');
    const H3 = document.querySelector('.BackPage4');
    
    H3.addEventListener('click',function()
    {
        H1.style.display = 'block';
        H2.style.display = 'none';
    });
});


// -------------------------------------- Yıldızlar ----------------------------

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


// ------------------------------- Termux Six column --------------------------------------

document.addEventListener('DOMContentLoaded',function()
{
    const TermuxTools4 = document.querySelector('.termux');
    const TermuxTools5 = document.querySelector('.kadr222');
    const TermuxTools6 = document.querySelector('.kadr777');
    
    TermuxTools4.addEventListener('click',function()
    {
        TermuxTools5.style.display = 'none';
        TermuxTools6.style.display = 'block';   
    });
    
    
});


document.addEventListener("DOMContentLoaded",function()
{
    
    const H1 = document.querySelector('.kadr222');
    const H2 = document.querySelector('.kadr777');
    const H3 = document.querySelector('.BackPage6');
    
    H3.addEventListener('click',function()
    {
        H1.style.display = 'block';
        H2.style.display = 'none';
    });
});




// ----------------------------------------------- SEYEHAT --------------------------------------------------


document.addEventListener('DOMContentLoaded',function()
{
    const TermuxTools4 = document.querySelector('.Hotel');
    const TermuxTools5 = document.querySelector('.kadr222');
    const TermuxTools6 = document.querySelector('.kadr888');
    
    TermuxTools4.addEventListener('click',function()
    {
        TermuxTools5.style.display = 'none';
        TermuxTools6.style.display = 'block';   
    });
    
    
});


document.addEventListener("DOMContentLoaded",function()
{
    
    const H1 = document.querySelector('.kadr222');
    const H2 = document.querySelector('.kadr777');
    const H3 = document.querySelector('.BackPage6');
    
    H3.addEventListener('click',function()
    {
        H1.style.display = 'block';
        H2.style.display = 'none';
    });
});




document.addEventListener("DOMContentLoaded",function()
{
    
    const H1 = document.querySelector('.kadr222');
    const H3 = document.querySelector('.Hotel');
    
    H3.addEventListener('click',function()
    {
        H1.style.display = 'block';
        
    });
});

