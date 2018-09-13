export function sendUserMood(date, usermood, usernote){
  const request = new XMLHttpRequest();
  request.open('POST', '../db.php', true);
  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  request.send(date, usermood, usernote);
};