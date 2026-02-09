// js/events.js

/**
 * Event History Manager
 */

const EventHistoryManager = {
    // Adds an event to the history
    addEvent: function(event) {
        const events = this.getEvents();
        events.push(event);
        localStorage.setItem('eventHistory', JSON.stringify(events));
    },

    // Retrieves all events from the history
    getEvents: function() {
        const events = localStorage.getItem('eventHistory');
        return events ? JSON.parse(events) : [];
    },

    // Clears the event history
    clearEvents: function() {
        localStorage.removeItem('eventHistory');
    }
};

// Example usage:
// EventHistoryManager.addEvent({ timestamp: '2026-02-09 06:26:14', event: 'User logged in.' });

