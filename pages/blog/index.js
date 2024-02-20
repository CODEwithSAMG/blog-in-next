// pages/BlogPage.js
import Link from "next/link";
import BlogPage from "./[id]";

const blog = ({ blogs }) => {
    return (
        <div>
            {blogs && blogs.map((blog) => {
                return <div key={blog?.id} className='flex flex-col items-center m-5  bg-white border border-gray-200 rounded-lg shadow md:flex-column md:max-w-full hover:bg-gray-100'>
                    <Link href={`/blog/${blog.id}`}>
                        {/* <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/docs/images/blog/image-4.jpg" alt="" /> */}
                        <div className="flex flex-col justify-between p-20 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{blog?.title}</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        </div>
                        <BlogPage title={blog?.title} />
                    </Link>
                </div>
            })}
        </div>
    );
};

export default blog;

export async function getServerSideProps () {
    try {
        const res = await fetch('http://localhost:3000/api/blogs');
        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }
        const blogs = await res.json();
        return {
            props: {
                blogs
            }
        };
    } catch (error) {
        console.error("Error fetching blogs:", error);
        return {
            props: {
                blogs: null
            }
        };
    }
}