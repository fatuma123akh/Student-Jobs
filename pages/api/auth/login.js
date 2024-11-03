// pages/api/auth/login.js
export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { email, password } = req.body;
  
      // Add authentication logic here, e.g., checking email and password
      if (email === 'test@example.com' && password === 'password') {
        res.status(200).json({ message: 'Login successful' });
      } else {
        res.status(401).json({ message: 'Invalid email or password' });
      }
    } else {
      res.status(405).end(); // Method Not Allowed
    }
  }
  