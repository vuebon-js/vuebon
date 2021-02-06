Route.link('/', 'Home').name('home');
Route.link('dev', 'Dev').name('dev')/*.middleware("auth")*/;
Route.auth();