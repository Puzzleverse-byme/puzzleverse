const CACHE = 'puzzleverse-v1';
const FILES = [
  '/index.html',
  '/memory-game.html',
  '/sudoku.html',
  '/math-storm.html',
  '/word-chain.html',
  '/simon-says.html',
  '/color-flow.html',
  '/block-fit.html',
  '/privacy.html',
  '/about.html',
  '/contact.html'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
