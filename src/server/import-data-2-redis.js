module.exports = async (client, logger) => {
  client.flushdb();
  client.set('redis', JSON.stringify({ messege: 'Hello form Redis' }));
  const ret = await client.get('redis');
  logger.info('Imported message in Redis: ', JSON.parse(ret));
};
