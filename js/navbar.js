function myFunction(){
    var menu = document.getElementById('navbar');
  
    if(menu.className === "topnav"){
      menu.className += "responsive";
    }
    else{
      menu.className = "topnav";
    }
}