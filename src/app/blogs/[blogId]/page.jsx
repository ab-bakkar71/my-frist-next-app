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


const BlogDetailsPage = async({params}) => {
    const {blogId} = await params;
    const blog = blogs.find(blog => blog.id=== parseInt(blogId))
    console.log('show me params:', blog);

    
    return (
        <div>
            <h4 className="text-3xl">Blog Detail coming soon</h4>

            {
                blog && <div> 
                    <h3 className="text-2xl">{blog.title}</h3>
                    <h5>{blog.author}</h5>
                    <p>{blog.description}</p>
                </div>
            }
        </div>
    );
};

export default BlogDetailsPage;