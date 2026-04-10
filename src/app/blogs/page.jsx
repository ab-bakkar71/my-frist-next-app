import Link from "next/link";

const BlogsPage = () => {
         
   const blogs = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    author: "Abu Bakkar Siddique",
    date: "2026-01-10",
    category: "Next.js",
    description: "Learn the basics of Next.js, including routing, pages, and performance optimization.",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 2,
    title: "Understanding React Components",
    author: "Abu Bakkar Siddique",
    date: "2026-01-15",
    category: "React",
    description: "A beginner-friendly guide to React components, props, and state management.",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 3,
    title: "Tailwind CSS Tips and Tricks",
    author: "Abu Bakkar Siddique",
    date: "2026-02-01",
    category: "CSS",
    description: "Improve your UI design skills with useful Tailwind CSS tips and utility classes.",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 4,
    title: "Building a Full Stack App with MERN",
    author: "Abu Bakkar Siddique",
    date: "2026-02-20",
    category: "MERN",
    description: "Step-by-step guide to building a full stack application using MongoDB, Express, React, and Node.js.",
    image: "https://via.placeholder.com/300x200",
  }
];



    return (
        <div>
           <h2 className="text-3xl font-bold text-center mt-9">Blogs</h2>

           {
            blogs.map(blog=> <div className="border border-red-400 mb-6 p-4 text-center" key={blog.id}>
                <h3>{blog.title}</h3>

                <Link className="btn" href={`/blogs/${blog.id}`}>show details</Link>
                
            </div>)
           } 
        </div>
    );
};

export default BlogsPage;