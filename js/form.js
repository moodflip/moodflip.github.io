function sub() {
  let frm = document.forms['contactus'];
  var fullname = frm['fullname'].value
  var email = frm['email'].value
  var msg = frm['message'].value
  var req = "Name: " + fullname + "   Email: " + email + "   Message:" + msg
  var url = "http://frost2k5.000webhostapp.com/moodflip.php?"+req
  fetch(url)
}