//asignar a cachear en la aplicacion
const CACHE_NAME = 'v1_cache_victordonghuPWA'

///ficherps a cachear en la aplicasion 
var urlsToCache = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    'facebook.png',
    'instagram.webp',
    'twiter.webp',
    'style.css',
    'img/favicon_1024x1024.png',
    'img/favicon_512x512.png',
    'img/favicon_384x384.png',
    'img/favicon_256x256.png',
    'img/favicon_192x192.png',
    'img/favicon_128x128.png',
    'img/favicon_96x96.png',
    'img/favicon_64x64.png',
    'img/favicon_32x32.png',
    'img/favicon_16x16.png',

    
]; 

//Evento activate
// Que la app funcione sin conexión
self.addEventListener('activate', e => {
	const cacheWhitelist =[CACHE_NAME];

	e.waitUntil(
		caches.keys()
			.then(cacheNames => {
				return Promise.all(
					cacheNames.map(cacheName => {

						if(cacheWhitelist.indexOf(cacheName) === -1){
							// Borrar elementos que no se necesitan
							return caches.delete(cacheName);
						}

					})
				);
			})
		.then(() => {
			//Activar cache
			self.clients.claim();
		})
	);
});

//Evento fetch
self.addEventListener('fetch', e => {

	e.respondWith(
		caches.match(e.request)
		.then(res =>{
			if(res){
				return res;
			}
			return fetch(e.request);
		})
	);
});