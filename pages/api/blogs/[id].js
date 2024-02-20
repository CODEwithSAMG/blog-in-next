// pages/api/blogs/[id].js

import { blogs } from '../blogsJson';

export default function Id (req, res) {
    const {
        query: { id },
    } = req;

    // Find the blog with the corresponding ID
    const blog = blogs?.find(blog => blog.id === parseInt(id));
    if (!blog) {
        return res.status(404).json({ message: 'Blog not found' });
    }

    // Return the specific blog data
    res.status(200).json(blog);
}