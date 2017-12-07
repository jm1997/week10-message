var notification_count=0;

$(document).on('pageinit', function() {

	$('#messageButton').on('click', function() {
		createMessage();
	});
    
    $('#messageButton2').on('click', function() {
		createMessage2();
	});
	
	$('#dialogButton').on('click', function() {
		createDialog();
	});


	$('#notificationButton').on('click', function() {
		createNotification();
	});


});



function createMessage(){		
	//phoneGap and jQueryMobile do not support toast messages directly
    //so we can add this using toast.js
    new Toast({content: 'An example message.', duration: 3000}); 		
}

function createMessage2(){		
	//phoneGap and jQueryMobile do not support toast messages directly
    //so we can add this using toast.js
    new Toast({content: 'An example message2.', duration: 3000}); 		
}
        	

function createDialog() {

	//phonegap supports native dialog boxes.
	//here's a simple example
      
	navigator.notification.confirm(
    	'Are you hungry?',  // message
        dialogDismissed,         // callback
        'An example dialog!',            // title
        ['Yes', 'No']                  // buttons
    );

}
        	
function foodNotification() {
        		
	//
    //generate a time to post notification
    //
    var currentTime = new Date().getTime(); //current time
    
    var notificationTime = new Date(currentTime + 3000); //calculate notification time
    			
    //
    //setup notification
    //

     
    if(currentTime==notificationTime)
    {          
        cordova.plugins.notification.local.schedule({ 
            id: 		1,
            title: 		"Hey you!",
            message: 	"Get back to work! >:(",
            date: 		notificationTime, 
            badge: 		notification_count++
        });     
     }
}
       


function dialogDismissed(buttonIndex) {
	
	if(buttonIndex==1) {
        new Toast({content: "Have a break and get some food :)", duration: 2000});
        
        foodNotification();
    }
    
   	else if(buttonIndex==2) new Toast({content: 'Carry on working then!!', duration: 4000});
    

}

   
   
function createNotification() {
        		
	//
    //generate a time to post notification
    //
    var currentTime = new Date().getTime(); //current time
    
   // var notificationTime = new Date(currentTime + 1000); //calculate notification time
    			
    //
    //setup notification
    //

    cordova.plugins.notification.local.schedule({ 
    	id: 		1,
        title: 		"Hey you",
        message: 	"This is an example notification",
        date: 		notificationTime, 
        badge: 		notification_count++
   	});
    
}