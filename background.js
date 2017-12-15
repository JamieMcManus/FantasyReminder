
function show(message) {
  var time = /(..)(:..)/.exec(new Date());     
  var hour = time[1] % 12 || 12;               
  var period = time[1] < 12 ? 'a.m.' : 'p.m.'; 

  //Create new notification
  notification =new Notification(hour + time[2] + ' ' + period, {
    icon: 'premIcon.png',
    body:message
  });
  //Open Fantasy page if clicked
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

//create both alarms 
function createAlarm(){
   var today = new Date();
   var timestampOne = +new Date(today.getFullYear(), today.getMonth(), today.getDate(), 18, 0, 0, 0); //Fri @ 6pm
   var timestampTwo= +new Date(today.getFullYear(), today.getMonth(), today.getDate(), 19, 30, 0, 0); //Fri @ 7:30pm
   
   if (today.getDay()==5){    // Only create alarm if Fri
      // Create
      chrome.alarms.create('firstAlarm', {
          when: timestampOne
      });

      chrome.alarms.create('secondAlarm', {
          when: timestampTwo
      });
   }

}
createAlarm();   // Create function

//Listen for alarms
chrome.alarms.onAlarm.addListener(function(alarm) {
    if (alarm.name === 'firstAlarm') {
         show("Time is almost up...");    //Call show notification functions
    }
    else if (alarm.name === 'secondAlarm') {
         show("Don't forget to make your changes...");     //Call show notification functions
    }
});



/*  Old Code 
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
*/
