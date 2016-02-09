//var app=angular.module('app', []);
//app.factory('messages', function () {...});
//OR
angular.module('app', []);
angular.module('app').factory('messages', function () {
    var messages = {};
    messages.list = [];
    messages.add = function (message) {
        messages.list.push({ id: messages.list.length, text: message });
    };
    return messages;
});
