const data = [
  {
    key: '1',
    name: 'lily',
    age: 19,
    like: 'apple',
  },
  {
    key: '2',
    name: 'lucy',
    age: 18,
    like: 'orange',
  },
];

export default {
  '/api/user': (req, res) => {
    const ret = data.find(item => item.key === req.query.id);
    setTimeout(() => {
      res.send(ret);
    }, 1000);
  },
  '/api/users': data,
  '/api/user/error': (req, res) => {
    res.status(400);
    res.send({ resultCode: '021', resultMsg: 'some error', isBizError: false });
  },
  '/api/user/bizError': (req, res) => {
    res.status(400);
    res.send({ resultCode: '034', resultMsg: 'biz error', isBizError: true });
  },
  'POST /api/users/save': (req, res) => {
    res.send(req.body);
  },
};
