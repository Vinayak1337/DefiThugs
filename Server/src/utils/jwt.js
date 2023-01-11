import jwt from 'jsonwebtoken';
import config from './config';

export const createToken = userId => jwt.sign({ userId }, config.JWT_SECRET);

export const verifyToken = token => jwt.verify(token, config.JWT_SECRET);
