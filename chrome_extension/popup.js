function img() {
    var img = document.createElement('img');
    url_adress = 'http://i.dailymail.co.uk/i/pix/2016/03/18/15/324D202500000578-3498922-image-a-33_1458315465874.jpg';
    img.setAttribute('src', url_adress);
    document.body.appendChild(img);
}

document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('checkPage');
    checkPageButton.addEventListener('click', function() {
        chrome.tabs.getSelected(null, function(tab) {
            d = document;
            content_placement = d.getElementById('placement_for_content');
            img();
        });
    }, false);
}, false);





