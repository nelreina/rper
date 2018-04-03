const en = {
  welcome: 'Welcome to ',
  message: 'Message From Redis',
  delay: 'With 2 seconds delay from the server'
};
const sp = {
  welcome: 'Bienvenido a ',
  message: 'Un Mensaje de Redis',
  delay: 'Con 2 segundos de retraso del servidor',
  Home: 'Página principal',
  'Invalid Route': 'Ruta inválida',
  'page not found': 'página no encontrada',
  'URL Path': 'Ruta de Url',
  LOGIN: 'INICIAR SESIÓN',
  Protected: 'Protegido',
  'Please login to see protected content':
    'Inicia sesión para ver el contenido protegido',
  'Logged in as': 'Conectado como'
};
const pm = {
  welcome: 'Bon bini na ',
  message: 'Un Mensahe di Redis',
  delay: 'Ku 2 seconde di retraso',
  Home: 'Kas',
  'Invalid Route': 'No ta existi',
  'page not found': 'E pagina aki no ta existi',
  'URL Path': 'Pagina',
  LOGIN: 'LÒG EN',
  Protected: 'Proteha',
  'Please login to see protected content': 'Log en pa mira e kontenido protehá',
  'Logged in as': 'Konosí pa'
};
const nl = {
  welcome: 'Welkom op ',
  message: 'Een bericht van Redis',
  delay: 'Met 2 seconde vertraging van de server',
  Home: 'Startpagina',
  'Invalid Route': 'Ongeldige Route',
  'page not found': 'pagina niet gevonden',
  'URL Path': 'URL-pad',
  LOGIN: 'LOG IN',
  Protected: 'Beveiligd',
  'Please login to see protected content':
    'Meld u aan om beveiligde inhoud te bekijken',
  'Logged in as': 'Aangemeld als'
};

module.exports = async (client, logger) => {
  client.flushdb();
  client.set('redis', JSON.stringify({ messege: 'Hello form Redis' }));
  client.set('locale-en', JSON.stringify(en));
  client.set('locale-pm', JSON.stringify(pm));
  client.set('locale-sp', JSON.stringify(sp));
  client.set('locale-nl', JSON.stringify(nl));
  const ret = await client.get('redis');
  logger.info('Imported message in Redis: ', JSON.parse(ret));
};
