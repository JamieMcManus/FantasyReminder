
function show(message) {
  var time = /(..)(:..)/.exec(new Date());     // The prettyprinted time.
  var hour = time[1] % 12 || 12;               // The prettyprinted hour.
  var period = time[1] < 12 ? 'a.m.' : 'p.m.'; // The period of the day.
  notification =new Notification(hour + time[2] + ' ' + period, {
    icon: 'premIcon.png',
    body:message
  });
  notification.onclick = function(){
        window.open('https://fantasy.premierleague.com/');
        window.focus();
    };
}


// initilize local storage
if (!localStorage.isInitialized) {
  localStorage.isActivated = true;   
  localStorage.frequency = 1;       
  localStorage.isInitialized = true; 
}

//chrome.alarms.onAlarm.addListener()   investigate alarms


//check time
function checkTime(){
  if (window.Notification) {
  
      var today = new Date();
      var d=today.getDay();
      var t=today.getHours();
      var m = today.getMinutes();
    //check if day is friday
    if(d== 5 && t<19 && m >38 && m<45  ){ 
        if (JSON.parse(localStorage.isActivated)) { 
          
          show("Time is almost up...");
        }
    } 
    else if(d== 5 && t<20 ){
      if (JSON.parse(localStorage.isActivated)) { 
        show("Don't forget to make your changes...");
        }
    }
  } 
}


setInterval(checkTime(), 60000);


