//Receiving Message
angular.module('app').controller('ReceiverController', function (messages) {
    var self = this;
    self.messages = messages.list;
});