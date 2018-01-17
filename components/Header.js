import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
    <div>
        <Link prefetch href="/">
          <a style={linkStyle}>主页</a>
        </Link>
        <Link prefetch href="/about">
          <a style={linkStyle}>关于</a>
        </Link>
    </div>
)

export default Header