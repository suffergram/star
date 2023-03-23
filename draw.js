(async () => {
    let header = await import('./drawHeader.js');
    header.draw();
    let footer = await import('./drawFooter.js');
    footer.draw();
})();
