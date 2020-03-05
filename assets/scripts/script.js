$(document).ready(function() {
    $(".m-menu-button").click(function() {
        $(".mobile-menu").addClass("m-menu-show");
        $("body").css("overflow", "hidden");
    });
    $(".close-menu").click(function() {
        $(".mobile-menu").removeClass("m-menu-show");
        $("body").css("overflow", "scroll");
    });


    $('form input').keydown(function(e) {
        if (e.keyCode == 13) {
            e.preventDefault();
            return false;
        }
    });

    // quote
    $.ajax({
        url: "https://type.fit/api/quotes",
        // method: "GET",
        dataType: "json",
        success: function(data) {
            console.log(data);
            var d = new Date().getDay();
            $(".quote-layer p").text(data[d].text);
            $(".quote-layer h5 span").text(data[d].author);
        },
    });


    // $("#voice").click(function() {
    //     annyang.pause();
    //     alert("a");
    // });

    // $("#submit").click(function() {
    //     annyang.start();
    //     alert("b");
    // });


    // // form filling
    // $(".first_name").click(function() {
    //     // annyang.pause();
    //     alert("a");
    //     var speech = true;
    //     window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    //     const recognition = new SpeechRecognition();
    //     recognition.interimResults = true;

    //     // const words = document.querySelector('.words');
    //     //words.appendChild(p);
    //     recognition.addEventListener('result', e => {
    //         const transcript = Array.from(e.results)
    //             .map(result => result[0])
    //             .map(result => result.transcript)
    //             .join('')
    //             //document.getElementById("p").innerHTML = transcript;
    //         $("#first_name").val(transcript);
    //         console.log(transcript);
    //     });

    //     if (speech == true) {
    //         recognition.start();
    //         recognition.addEventListener('end', recognition.start);
    //     }


    // });






});

// form validation
function validateForm() {
    var first_name = $("#first_name").val();
    console.log(first_name);
    var last_name = $("#last_name").val();
    var phone = $("#phone").val();
    var email = $("#email").val();
    var message = $("#message").val();
    if (first_name == "" || last_name == "" || phone == "" || email == "" || message == "") {
        alert("please fill all entries");
        return false;

    } else {
        return true;
    }
}


/** google_map js **/

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// Geolocation

function initMap() {
    // The location of Uluru
    var uluru = {
        lat: 28.482649,
        lng: 77.526178
    };
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 10,
            center: uluru
        });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}



if (annyang) {
    var a = document.body.clientHeight;
    console.log(a);
    // Let's define a command.
    var commands = {
        'red': function() {
            alert('Hello world!');
        },
        'open home': function() {
            window.location.href = "index.html";
        },
        'scroll down': function() {
            window.scrollBy({
                top: 400,
                left: 0,
                behavior: 'smooth'
            });
            console.log("scroll down");
        },
        'scroll up': function() {
            window.scrollBy({
                top: -400,
                left: 0,
                behavior: 'smooth'
            });
        },
        'scroll top': function() {
            window.scrollBy({
                top: -8000,
                left: 0,
                behavior: 'smooth'
            });
        },
        'scroll bottom': function() {
            window.scrollBy({
                top: 8000,
                left: 0,
                behavior: 'smooth'
            });
        },
        'submit': function() {
            window.location.href = "enquiry.php";
        },
        'open github': function() {
            window.open(
                'https://github.com/amarsharmamrj',
                '_blank'
            );
        },
        'open home': function() {
            window.location.href = "index.html";
        },
        'open linkedin': function() {
            window.open(
                'https://www.linkedin.com/in/amarnath-vishwakarma-7196b8178/',
                '_blank'
            );
        },
        'open facebook': function() {
            window.open(
                'https://www.facebook.com/amarnathmrj',
                '_blank'
            );
        },
        'open instagram': function() {
            window.open(
                'https://www.instagram.com/amarnathmrj/?hl=en',
                '_blank'
            );
        },
        'open pinterest': function() {
            window.open(
                'https://in.pinterest.com/amarsharmamrj/',
                '_blank'
            );
        },
        '10': function() {
            $("h1").css("font-size", "10px");
        },
        'youtube': function() {
            window.location.href = "https://www.youtube.com";
        }
    };

    // Add our commands to annyang
    // annyang.addCommands(commands);
    // $(".message").click(function() {
    //     $(this).prev().addClass("mice-on");
    //     $(".message img").attr("src", "assets/images/radio1.png");
    //     annyang.addCallback('result', function(wordMessage) {
    //         console.log(wordMessage);
    //         console.log(wordMessage[0]);
    //         $(".message-value").val(wordMessage[0]);
    //     });
    // });

    // Start listening.
    annyang.start();
}