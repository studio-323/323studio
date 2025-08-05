document.addEventListener('DOMContentLoaded', function() {
    var clipboard = new ClipboardJS('.copy-button-icon', {
        text: function(trigger) {
            // This function defines what text to copy
            return document.getElementById('phoneNumberDisplay').value;
        }
    });

    clipboard.on('success', function(e) {
        const messageElement = document.getElementById('message');
        messageElement.textContent = 'Number copied! ✅';
        setTimeout(() => { messageElement.textContent = ''; }, 2000);
        e.clearSelection(); // Clear text selection
    });

    clipboard.on('error', function(e) {
        const messageElement = document.getElementById('message');
        console.error('Action:', e.action);
        console.error('Trigger:', e.trigger);
        messageElement.textContent = 'Failed to copy. Try long-pressing the number. ❌';
        messageElement.style.color = 'red';
    });
});