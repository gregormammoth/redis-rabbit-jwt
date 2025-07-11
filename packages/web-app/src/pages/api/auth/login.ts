import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const response = await axios.post('http://13.60.225.240:3003/auth/login', req.body);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(401).json({ message: 'Invalid credentials' });
  }
} 