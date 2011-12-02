/**
 * An generic MVC event to pass along.
 * 
 * @constructor
 * @param {Object} sender The sender of this event
 * @param {string} type The type of this event
 * @param {Object|string} msg The message of the event
 */
 
function MVCEvent(sender, type, msg){
    this.sender = sender;
    this.type = type;
    this.msg = msg;
}