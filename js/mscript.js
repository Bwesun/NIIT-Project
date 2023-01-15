// DISPLAY OTHER ICONS CLOSE TO INPUT
let iconPlusButton = document.querySelector(".icon-toggle");
let iconSub = document.querySelector(".icon-sub");
iconPlusButton.onclick = function(){
    iconSub.classList.toggle('icon-sub-show');
}

// DISPLAY OWN USER PROFILE SECTION
let mainProfileButton = document.querySelector(".open-profile");
let mainProfileSection = document.querySelector(".aside-profile");
mainProfileButton.onclick = function(){
    mainProfileSection.classList.add('show-profile');
}

let closeProfileBtn = document.querySelector(".close-profile");
closeProfileBtn.onclick = function(){
    mainProfileSection.classList.remove('show-profile');
}

// DISPLAY CHATTING USER PROFILE
let openUserProfileBtn = document.querySelector(".user-open-profile");
let userProfileSection = document.querySelector(".user-profile");
openUserProfileBtn.onclick = function(){
    userProfileSection.classList.add('user-profile-show');
}

let closeUserProfileBtn = document.querySelector(".user-close-profile");
closeUserProfileBtn.onclick = function(){
    userProfileSection.classList.remove('user-profile-show');
}