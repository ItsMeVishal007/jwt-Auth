import { NextApiRequest, NextApiResponse } from 'next';
import jwt, { sign } from 'jsonwebtoken';

const KEY = 'sfhhoicvnwrjhhosslssmd,noicvlnrlfihoicvjnrto'

export default (req: NextApiRequest, res: NextApiResponse) => {

  if (!req.body) {
    res.statusCode = 400
    res.end('Error')
    return;
  }
  const { username, password } = req.body;
  res.status(200).json({
    token: jwt.sign({
      username,
      password
    }, KEY)
  })
}
