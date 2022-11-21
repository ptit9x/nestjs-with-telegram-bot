export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  telegram: {
    url: 'https://api.telegram.org',
    botKey: process.env.TELEGRAM_TOKEN,
  },
});
