const prod = process.env.NODE_ENV === 'production';

module.exports = {
  'process.env.BASE_URL': prod ? 'https://portfolio-ramon-next.herokuapp.com' : 'http://localhost:3000',
  'process.env.NAMESPACE': 'https://portfolio-ramon-next.herokuapp.com',
  'process.env.CLIENT_ID': 'X3LOQwMRBKmA3YwSxmJjo5EkPQZa3JCa'
}