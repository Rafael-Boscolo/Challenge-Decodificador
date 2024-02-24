const changeThemeBtn = document.querySelector("#change-theme");

function toggleDarkMode (){
    document.body.classList.toggle("dark");
}

// Carregar o thema de preferencia
function loadTheme () {
    const darkMode = localStorage.getItem("dark");

    if (darkMode){
        toggleDarkMode();
    }
}

loadTheme(); 

changeThemeBtn.addEventListener("change", function() {
    toggleDarkMode();    

    // save
    localStorage.removeItem("dark");

    if(document.body.classList.contains("dark")){
        localStorage.setItem("dark", 1)
    }
});