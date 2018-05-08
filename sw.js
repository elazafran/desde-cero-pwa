const staticAssets = [
    './',
    './styles.css',
    './app.js',
    './fallback.json',
    './images/dobuss.jpg'

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
    const url = new URL(req.url);
    if(url.origin === location.origin){
        event.respondWith(cacheFirst(req));
    }else {
        event.respondWith(networkFirst(req));
    }
    
});

async function cacheFirst(req) {
    const cachedResponse = await caches.match(req)
    return cachedResponse || fetch(req);
}
async function networkFirst(req){
    const cache = await caches.open('news-dynamic');
    try {
        const res = await fetch(req);
        cache.put(req, res.clone());
        return res;
    } catch (error) {
        const cachedResponse = await cache.match(req);
        return cachedResponse || caches.match('./fallback.json');
    }

}