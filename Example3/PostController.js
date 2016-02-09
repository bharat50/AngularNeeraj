//messages is the service name we created in app.js
//No $ sign is not used while passing the Custom created service - Distinguish 
angular.module('app').controller('PostCtrl', function (messages) {
    var self = this;
    self.newMessage = 'Hello World';
    self.addMessage = function (message) {
        messages.add(message);
        self.newMessage = '';
    }

});