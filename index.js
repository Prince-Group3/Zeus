function openTab(evt, tabName) {
    // Get all elements with class "tabcontent" and hide them
    const tabContents = document.querySelectorAll('.tabcontent');
    tabContents.forEach(content => content.classList.remove('active'));

    // Get all elements with class "tablinks" and remove the "active" class
    const tabLinks = document.querySelectorAll('.tablinks');
    tabLinks.forEach(link => link.classList.remove('active'));

    // Show the current tab's content
    document.getElementById(tabName).classList.add('active');

    // Add "active" class to the clicked tab link
    evt.currentTarget.classList.add('active');
}
