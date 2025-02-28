
// Check localStorage for saved state on page load
document.addEventListener('DOMContentLoaded', () => {
    // Get the sidebar and create a toggle button
    const sidebar = document.getElementById('side-bar');
    const toggleButton = document.getElementById("side-bar-toggle");
    console.log(toggleButton);
    toggleButton.setAttribute('aria-label', 'Toggle Sidebar');

    // Add click event to toggle sidebar
    toggleButton.addEventListener('click', () => {
        sidebar.classList.toggle('sidebar-closed');

        // Update button aria-expanded state for accessibility
        const isExpanded = !sidebar.classList.contains('sidebar-closed');
        toggleButton.setAttribute('aria-expanded', isExpanded);

        // Optionally store state in localStorage to persist across page loads
        localStorage.setItem('sidebarClosed', sidebar.classList.contains('sidebar-closed'));
    });


    const isClosed = localStorage.getItem('sidebarClosed') === 'true';
    if (isClosed) {
        sidebar.classList.add('sidebar-closed');
        toggleButton.setAttribute('aria-expanded', 'false');
    } else {
        toggleButton.setAttribute('aria-expanded', 'true');
    }
});