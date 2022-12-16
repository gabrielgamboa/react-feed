import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post
          author="Gabriel Gambôa"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ducimus, voluptatem debitis ipsum cupiditate beatae, harum quia rerum laboriosam voluptatum cumque deleniti, placeat illo perspiciatis voluptas inventore iusto odit voluptates!"
         />

          <Post
            author="Gabriel Gambôa"
            content="Um novo postzada"
         />
        </main>
      </div>
    </div>
  );
}

