
function show() {
  var time = /(..)(:..)/.exec(new Date());     // The prettyprinted time.
  var hour = time[1] % 12 || 12;               // The prettyprinted hour.
  var period = time[1] < 12 ? 'a.m.' : 'p.m.'; // The period of the day.
  new Notification(hour + time[2] + ' ' + period, {
    icon: 'icon.png',
    body: "Don't forget to make your changes..."
  });
}
function almostTime() {
  var time = /(..)(:..)/.exec(new Date());     // The prettyprinted time.
  var hour = time[1] % 12 || 12;               // The prettyprinted hour.
  var period = time[1] < 12 ? 'a.m.' : 'p.m.'; // The period of the day.
  new Notification(hour + time[2] + ' ' + period, {
    icon: 'icon.png',
    body: "Time is almost up..."
  });
}

// Conditionally initialize the options.
if (!localStorage.isInitialized) {
  localStorage.isActivated = true;   // The display activation.
  localStorage.frequency = 1;        // The display frequency, in minutes.
  localStorage.isInitialized = true; // The option initialization.
}

// Test for notification support.
if (window.Notification) {
 
    var today = new Date();
    var d=today.getDay();
    var t=today.getHours();
    var m = today.getMinutes();

  if(d== 5 && t<=22   ){ 
      if (JSON.parse(localStorage.isActivated)) { show(); }
   } 
  else if(d== 5 && t<=22  && m>=38 &&m<45  ){
     if (JSON.parse(localStorage.isActivated)) { almostTime(); }
  }
} 


