const functions = require('firebase-functions');

// The Firebase Admin SDK to access Cloud Firestore.
const admin = require('firebase-admin');
admin.initializeApp();


const db = admin.firestore();
const usersCollection = db.collection('user_collection');

// https://crontab.guru ---> website to try different cron job time to pick the right one
exports.sendNotification = functions.pubsub.schedule('* * * * *').onRun(async(context) => {

    console.log('START notification cloud function');
    
    
    // Get every user
    usersCollection.orderBy(`fcmToken`)
            .get()
            .then(users => {
    users.forEach((user) => {
        console.log(user.data().firstName);
                    //Then send notification for each user
                    if(user.data().fcmToken !== null && user !== null && user.data().fcmToken !== '') {
                        sendNotification(user.data().fcmToken);
                      }
                    return console.log('Got user');
                })
                return console.log('Sending notification');
            })
            .catch(e => {
               console.log(e.toString());
            });


            // Function to send push notifications
    function sendNotification(token) {

        // Build title and body of notification
        let title = 'Looks like you have not been active for a while!';
        let body = 'Do some stretches and light exercise to increase your activity.';
    
        // Build the message to send
        const message = {
            notification: {title: title, body: body},
            token: token,
            data: { click_action: 'FLUTTER_NOTIFICATION_CLICK' },
        };
    
      // Send push notification
      admin.messaging().send(message).then(response => {
            return console.log('Successfully sent notification');
        })
        .catch(e => {
            return console.log('Error sending notification');
        });
      }
    
      return console.log('END notification cloud function');
    });
    