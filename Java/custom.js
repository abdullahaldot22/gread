var i = document.getElementById('input').value;
var btn = document.getElementById('btn');

function reload() {
    location.reload();
}


function sub() {
    switch (i) {
        case i >= 0 && i <= 32:
            document.getElementsByClassName('box')[0].innerHTML = '<span>' + 'You didnt Pass..' + '<br>' + 'Your gread is F!!' + '</span>' + '<br>' + '<button title="Gread" style="border-radius: 5px;" onclick="reload()">Try Again!</button>';
            break;

        case input.value <= 39 && input.value >= 33:
            document.getElementsByClassName('box')[0].innerHTML = 'You Passed!!' + '<br>' + 'Your gread is D & 1!!' + '<br>' + '<button title="Gread" style="border-radius: 5px;" onclick="reload()">Try Again!</button>';
            break;

        case input.value <= 49 && input.value >= 40:
            document.getElementsByClassName('box')[0].innerHTML = 'You Passed!!' + '<br>' + 'Your gread is C & 2!!' + '<br>' + '<button title="Gread" onclick="reload()">Try Again!</button>';
            break;

        case input.value <= 59 && input.value >= 50:
            document.getElementsByClassName('box')[0].innerHTML = 'You Passed!!' + '<br>' + 'Your gread is B & 3!!' + '<br>' + '<button title="Gread" onclick="reload()">Try Again!</button>';
            break;

        case input.value <= 69 && input.value >= 60:
            document.getElementsByClassName('box')[0].innerHTML = 'You Passed!!' + '<br>' + 'Your gread is A- & 3.5!!' + '<br>' + '<button title="Gread" onclick="reload()">Try Again!</button>';
            break;

        case input.value <= 79 && input.value >= 70:
            document.getElementsByClassName('box')[0].innerHTML = 'You Passed!!' + '<br>' + 'Your gread is A & 4!!' + '<br>' + '<button title="Gread" onclick="reload()">Try Again!</button>';
            break;

        case input <= 100 && input >= 80:
            document.getElementsByClassName('box')[0].innerHTML = 'You Passed!!' + '<br>' + 'Your gread is A+ & 5!!' + '<br>' + '<button title="Gread" onclick="reload()">Try Again!</button>';
            break;

        default:
            document.getElementsByClassName('box')[0].innerHTML = '<span>' + 'Please input valid number between 0-100!! & Try again!' + '</span>' + '<br>' + '<button title="Gread" onclick="reload()">Try Again!</button>';
            break;
    }
}

// document.getElementsByClassName('box')[0].innerHTML = '<button title="Gread" onclick="reload()">Try Again!</button>';