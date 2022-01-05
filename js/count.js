window.addEventListener('load', (event) => {
    let visitorCount = 0;
    fetch('', {
        mode: 'cors'
    })
    .then(response => {
        return response.json()
    })
    .then(data => {
        const visitorCount = data.
        document.getElementById('count').innerText = visitorCount;
    })
    return visitorCount;
});