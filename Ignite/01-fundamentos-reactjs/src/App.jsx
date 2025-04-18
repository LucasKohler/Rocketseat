import { Header } from './components/Header'
import { Post } from './post'
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css'

import './global.css';

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Lucas Kohler"
            content="lorem impsum dolor suit amet conesht shajem"
          />

          <Post
            author="Kohler Lucas"
            content="Post legal"
          />
        </main>

      </div>
    </div>
  )
}

