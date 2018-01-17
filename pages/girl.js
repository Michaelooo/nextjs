import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

// http://gank.io/api/data/福利/10/1 使用此API的时候，总是拿不到数据，暂时还没有查到原因

// 另外在模式中使用 fetch 获取 本地的 json 数据时候，会报绝对路径的错误，可以参考 https://github.com/zeit/next.js/issues/2853
// 备注：因为使用了express，nextjs服务端渲染的特性，所以取本地 json 的时候需要本地暴露一个接口，然后再去读取

// const Girl = (props) => (
//   <Layout>
//     <h1>妹子</h1>
//     <ul>
//       {props.data && props.data.map(({item}) => (
//         <li key={item.id}>
//           <img src={item.url} alt={item.who} srcset=""/>
//         </li>
//       ))}
//     </ul>
//   </Layout>
// )

const Girl = (props) => (
  <Layout>
    <h1>片片</h1>
    <ul>
      { <img src={props.data} alt=""/> }
    </ul>
  </Layout>
)

Girl.getInitialProps = async function() {
  try {
    const res = await fetch(`http://api.tvmaze.com/shows/1`);
    const data = await res.json();
    console.log(`Show data fetched. Count: ${data.length}`)

    return {
      // data: data.results
      data: data.image.medium
    }
  } catch (error) {
    console.log(`出错了${error}`);
  }
}

export default Girl