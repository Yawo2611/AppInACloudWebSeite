import styles from "@/styles/Home.module.css";
import { Env } from "@humanwhocodes/env";

export default function Home({ items }) {
  return (
    <div className={styles.body}>
      <header className={styles.header}>
        <nav className={styles.navigation}>
            <ul>
                <li className={styles.listElement}><a href="/" className={styles.link}>Home</a></li>
                <li className={styles.listElement}><a href="/post" className={styles.link}>Post</a></li>
                <li className={styles.listElement}><a href="/put" className={styles.link}>Put</a></li>
            </ul>
        </nav>

      </header>
    <h1 className={styles.title}>ToDo-List</h1>
      <div>
        {items.map((item) => {
          return <p key={item.id}>{item.text}</p>;
        })}
      </div>
    </div>
  );
}

export async function getStaticProps() {

  const res = await fetch("https://yukisfunctionapp.azurewebsites.net/api/items");

  let items = await res.json();

  return {
    props: { items },
    revalidate: 10,
  };
}
