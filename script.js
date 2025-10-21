// Images not working at this time.
fetch('machines.json')
    .then(res => res.json())
    .then(data => renderProducts(data));