// js/ui.js

// UI Management for Smart Door Lock System
class SmartDoorLockUI {
    constructor() {
        this.lockButton = document.getElementById('lockButton');
        this.unlockButton = document.getElementById('unlockButton');
        this.statusDisplay = document.getElementById('statusDisplay');

        // Bind event handlers
        this.lockButton.addEventListener('click', () => this.lock());
        this.unlockButton.addEventListener('click', () => this.unlock());
        
        // Initialize UI
        this.updateStatus('Ready');
    }

    async lock() {
        try {
            // Call backend service to lock the door
            await this.sendLockCommand();
            this.updateStatus('Door is locked');
        } catch (error) {
            this.showError('Failed to lock the door');
        }
    }

    async unlock() {
        try {
            // Call backend service to unlock the door
            await this.sendUnlockCommand();
            this.updateStatus('Door is unlocked');
        } catch (error) {
            this.showError('Failed to unlock the door');
        }
    }

    async sendLockCommand() {
        // Placeholder for API call to lock the door
        return new Promise((resolve) => setTimeout(resolve, 1000));
    }

    async sendUnlockCommand() {
        // Placeholder for API call to unlock the door
        return new Promise((resolve) => setTimeout(resolve, 1000));
    }

    updateStatus(message) {
        this.statusDisplay.textContent = message;
    }

    showError(message) {
        console.error(message);
        alert(message);
    }
}

// Initialize the UI when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    new SmartDoorLockUI();
});
