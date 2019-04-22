import Link from "next/link"

// components
import Layout from "../components/MyLayout.js"

const PostLink = ({ title, id }) => (
  <li>
    <Link as={`/p/${id}`} href={`/post?title=${title}`}>
      <a>{title}</a>
    </Link>
  </li>
)

const Blog = () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      <PostLink id="hello-nextjs" title="Hello Next.js" />
      <PostLink id="learn-nextjs" title="Learn Next.js is awesome" />
      <PostLink id="deploy-nextjs" title="Deploy apps with Zeit" />
    </ul>
  </Layout>
)

export default Blog
