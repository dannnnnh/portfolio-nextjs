// pages/api/validate-password.js
export default function handler(req, res) {
    if (req.method === 'POST') {
      if (req.body.password === process.env.PASSWORD_PROTECTED_PAGE) {
        res.status(200).json({ success: true });
      } else {
        res.status(401).json({ success: false });
      }
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  }
  