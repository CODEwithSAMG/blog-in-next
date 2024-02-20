const BlogPage = ({ blog }) => {
    console.log(blog);
    return (
        <div>
            {blog?.id}

            {blog?.title}

            {blog?.content}
        </div>
    )
}

export default BlogPage;

export async function getServerSideProps ({ params }) {
    let blog;
    try {
        const res = await fetch(`http://localhost:3000/api/blogs/${params?.id}`);
        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }
        blog = await res.json();

        return {
            props: {
                blog
            }
        };
    } catch (error) {
        console.error("Error fetching blogs:", error);
        return {
            props: {
                blog: null
            }
        };
    }
}