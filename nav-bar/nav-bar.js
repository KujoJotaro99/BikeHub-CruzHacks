function route_to_Share_page(){
    location.href='../share-page/share-page.html';
}
function route_to_Home_page(){
  location.href='../home-page/home-page.html';
}
function route_to_Rentals_page(){
  location.href='../rentals-page/rentals-page.html';
}
function open_dropdown_menu(){
    var x=document.getElementById("drop-down-menu")
    if (x.style.display == "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
}