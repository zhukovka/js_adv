function getShortMessages(messages) {
    var result;
    result = messages.filter(function (obj) {
        return obj.message.length < 50;
        });

    return result.map(function(obj) {
        return obj.message;
    });
    
}
module.exports = getShortMessages;