const alertBanner = document.getElementById('alert');

alertBanner.innerHTML = 
    `
    <div class='alert-banner'>
        <p><strong>Alert:</strong> You have unread messages</p>
        <a href='#' class='alert-banner-close'>x</a>
    </div>
    `

alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains('alert-banner-close')) {
        alertBanner.style.display = 'none'
    };
});