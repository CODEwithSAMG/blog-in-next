// api/blogs.js
// Dummy blog data

import { blogs } from "../blogsJson";

export default function handler (req, res) {
    if (req.method === 'GET') {
        // Return all blog data
        return res.status(200).json(blogs);
    } else {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }
}