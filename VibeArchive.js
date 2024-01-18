// signup button
document.addEventListener('DOMContentLoaded', function() {
    var signupElement = document.getElementById('signup'); //getElementByID(id값 넣기)

    signupElement.addEventListener('click', function() {
        window.location.href = 'Signup.html'; 
    });
});

// login button 
document.addEventListener('DOMContentLoaded', function() {
    var signupElement = document.getElementById('login');

    signupElement.addEventListener('click', function() {
        window.location.href = 'Login.html'; 
    });
});

// Home button 
document.addEventListener('DOMContentLoaded', function() {
    var signupElement = document.getElementById('home');

    signupElement.addEventListener('click', function() {
        window.location.href = 'VibeArchive.html'; 
    });
});


// Your Archive page
document.addEventListener('DOMContentLoaded', function() {
    var signupElement = document.getElementById('Archive');

    signupElement.addEventListener('click', function() {
        window.location.href = 'Your Archive.html'; 
    });
});



// Create Playlist


// document.getElementById('loginForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // 폼의 기본 제출 동작 방지

//     var username = document.getElementById('username').value;
//     var password = document.getElementById('password').value;
//     var messageElement = document.getElementById('loginMessage');

//     // 서버에 로그인 요청을 보내는 코드가 여기에 위치해야 합니다.
//     // 아래는 로그인 검증 로직을 가정한 예시 코드입니다.
//     if (username === "user" && password === "pass") {
//         // 로그인 성공
//         messageElement.textContent = "Log in Successfully";
//         setTimeout(function() {
//             window.location.href = 'homepage.html'; // 홈페이지로 리디렉션
//         }, 2000); // 2초 후 페이지 이동
//     } else {
//         // 로그인 실패
//         messageElement.textContent = "Your ID or password is incorrect";
//     }
// });

// Log in form
// document.getElementById('myForm').addEventListener('loginpage', function(event) {
//     event.preventDefault(); // 폼의 기본 제출 동작 방지

//     var username = document.getElementById('logemail').value;
//     var password = document.getElementById('logpass').value;
    // var messageElement = document.getElementById('loginMessage');

    function check(form)
    {
        if (form.logemail.value == "1" && form.logpass.value == "1") {
            alert ("You log in successfully");
            window.open('VibeArchive.html');
            window.close('login.page.html');
    }   else if (form.logemail.value == "" || form.logpass.value == "") {
            alert("You didn't enter ID or password. Try again");
    }   else {
            alert("Error UserID or Password. Try Again");
    }
}

// function check(form1)
// {
//     if (form1.userid.value == "1" && form1.userpassword.value == "1") {
//         alert ("Created the account successfully");
//         window.open('VibeArchive.html');
//         window.close('login.page.html');
//     } else if (form1.userid.value == "" || form1.userpassword.value == "") {
//         alert("You didn't enter ID or password. Try again");
//     } else {
//         alert("Error UserID or Password. Try Again");
//     }
// }

// // Sign up
//     function check(form) 
//         {
//             if (form.logemail1.value !== "" && form.logpass1.value !== "" &&form.logname1.value !=="") {
//                 alert("Created the account successfully");
//                 window.open('VibeArchive.html');
//                 // Note: window.close might not work as expected due to browser security restrictions
//             } else {
//                 alert("You didn't enter ID or password. Try again");
//             }
//         }


// Search
function searchToggle(obj, evt){
    var container = $(obj).closest('.search-wrapper');
        if(!container.hasClass('active')){
            container.addClass('active');
            evt.preventDefault();
        }
        else if(container.hasClass('active') && $(obj).closest('.input-holder').length == 0){
            container.removeClass('active');
            // clear input
            container.find('.search-input').val('');
        }
}




// var form = document.getElementById('submit');
// var userid = form.userid.value;
// var userpassword = form.userpassword.value;



function addToPlaylist(song) {
    alert('You added the song to Your Archive: ' + song);
    // Add further logic here if needed
}

function deleteFromPlaylist(song) {
    alert('You deleted the song from Your Archive: ' + song);
    // Add further logic here if needed
}

var likesCount = {};

function likeSong(song) {
    if (likesCount[song]) {
        likesCount[song]++;
    } else {
        likesCount[song] = 1;
    }
    alert('Likes for ' + song + ': ' + likesCount[song]);
}