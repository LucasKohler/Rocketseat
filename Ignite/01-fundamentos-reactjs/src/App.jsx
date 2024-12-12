import { Header } from './components/Header'
import { Post } from './post'

import './styles.css';

export function App() {
  return (
    <>
      <Header />

      <div>
        <Post
          author="Lucas Kohler"
          content="lorem impsum dolor suit amet conesht shajem"
        />

        <Post
          author="Kohler Lucas"
          content="Post legal"
        />
      </div>
    </>
  )
}

