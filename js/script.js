'use strict';


/* DISPLAY MENU _ SMALL RESOLUTION */
function toggleMenu() {
        document.querySelector('#a-sidebar').classList.toggle('-visible');
    }
/* ANIMATION HAMBURGER */
function toggleHamburger(){
        document.querySelector('.a-navigation-sidebar_hamburger').classList.toggle('active');
    }

document.querySelector('.a-navigation-sidebar_hamburger').addEventListener('click', function(e) {
    e.preventDefault();
    toggleMenu();
    toggleHamburger()
    });

/* MAIN MENU TOGGLE */
function toggleWallet(){
        document.querySelector('.a-navigation-mainmenu_itemDropdownContent').classList.toggle('active');
        document.querySelector('.a-navigation-mainmenu_itemWallet').classList.toggle('active');  
    }
document.querySelector('#a-arrow-down').addEventListener('click', function(e) {
        e.preventDefault();
        toggleWallet();
        change();
        });


function change() {
            var img1 = "https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-up-01-512.png",
                img2 = "https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-down-01-512.png";
            var imgElement = document.getElementById('a-arrow-down');
            imgElement.src = (imgElement.src === img1)? img2 : img1;
         }

document.querySelector('.a-navigation-sidebar_itemDropdown').addEventListener('click', function(e) {
            e.preventDefault();
            changeSideBar();
            });

function changeSideBar() {
            var img1 = "https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-up-01-512.png",
                img2 = "https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-down-01-512.png";
            var imgElement = document.getElementById('a-arrow-down-sidebar');
            imgElement.src = (imgElement.src === img1)? img2 : img1;
         }

/* TOP MENU IN SIDEBAR */
var dropdown = document.getElementsByClassName("a-navigation-sidebar_itemDropdown");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  var dropdownContent = document.getElementById('a-navigation-sidebar_itemDropdownContent');
  dropdownContent.style.display === "block" ? dropdownContent.style.display = "none" : dropdownContent.style.display = "block";
  });
}

/* NOTIFICATION DROPDOWN */
var dropdown = document.getElementsByClassName("notification");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  var dropdownContent = document.getElementById('a-navigation-sidebar_messagesDropdown');
  dropdownContent.style.display === "block" ? dropdownContent.style.display = "none" : dropdownContent.style.display = "block";
  document.querySelector('.a-navigation-sidebar_notification').classList.toggle('active'); 
  });
}

function notification(){
    document.querySelector('.a-navigation-mainmenu_itemNotifications').classList.toggle('disabled');
    document.querySelector('.a-navigation-mainmenu_itemProfile').classList.toggle('disabled');
    document.querySelector('.a-navigation-mainmenu_itemNotificationMessages').classList.toggle('active'); 
    document.querySelector('.a-navigation-mainmenu_itemNotificationDropdownContent').classList.toggle('active');
}
document.querySelector('.a-navigation-mainmenu_itemNotifications').addEventListener('click', notification);
document.querySelector('#notification-exit').addEventListener('click', notification);