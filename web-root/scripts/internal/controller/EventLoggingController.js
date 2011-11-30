/**
 * A convenious controller, that logs all events
 * @constructor
 */

function EventLoggingController(){
}

EventLoggingController.prototype.receiveEvent = function(event){
    console.log(event);
    return true;
};