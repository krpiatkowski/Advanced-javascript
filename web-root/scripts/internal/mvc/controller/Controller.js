/**
 * A common interface for Controllers in MVC.
 *
 * @interface
 */
function Controller(){}
 
/**
 * Receive an event and process it.
 * 
 * @param {MVCEvent} event A event the controller can proccess
 * @return {boolean} true if the event is handled by this controller
 */ 
Controller.prototype.receiveEvent = function(event){}