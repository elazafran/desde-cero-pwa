const staticAssets = [
    './',
    './styles.css',
    './app.js'

];

//el primer punto el install
self.addEventListener('install', async event =>{
    // aqui se cachean pero aún no están disponibles
    const cache = await caches.open('news-static');
    cache.addAll(staticAssets);
});

//
self.addEventListener('fetch',event =>{
    //console.log(`fetch`);
    const req = event.request;
    event.respondWith(cacheFirst(req))
    
});
async function cacheFirst(req) {
    const cachedResponse = await caches.match(req)
    return cachedResponse || fetch(req);
}