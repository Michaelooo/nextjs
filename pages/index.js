import Link from 'next/link';
import Layout from '../components/MyLayout'

const PostLink = (props) => (
  <li>
    <Link as={`/p/${props.alias}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

export default () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      <PostLink alias="aa" title="Hello Next.js"/>
      <PostLink alias="bb" title="Learn Next.js is awesome"/>
      <PostLink alias="cc" title="使用中文试一试"/>
    </ul>
  </Layout>
)