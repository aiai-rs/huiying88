module.exports = async (req, res) => {
  res.status(200).json({
    status: 'Bot is running',
    endpoint: '/api/bot',
    message: '汇盈国际 Bot 已上线！用 Telegram 测试 /bz。'
  });
};
