// pages/api/auth/signup.js
export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { name, email, password } = req.body;
  
      // Add signup logic here (e.g., save the user to the database)
      const userExists = false; // Replace with actual check for existing user
  
      if (userExists) {
        return res.status(409).json({ message: "User already exists" });
      }
  
      // Simulate user creation
      // Save user to database here (hashed password, etc.)
  
      return res.status(201).json({ message: "Signup successful" });
    } else {
      res.status(405).end(); // Method Not Allowed
    }
  }
  