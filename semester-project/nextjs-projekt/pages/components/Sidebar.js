// components/Sidebar.js

import styles from '../../styles/Sidebar.module.css';
import Link from 'next/link';

const Sidebar = ({ stories }) => {

  
  if(!stories){
    return null;
}



  return (
    <aside className={styles.sidebar}>
      <div className={styles.searchTitle}>Search</div>
      <div className={styles.searchBox}>
        <input type="text" placeholder="Search" className={styles.searchInput} />
      </div>
      <div className={styles.newStories}>
        <h3 className={styles.heading}>New Stories</h3>
        {stories.map((story, index) => (
          <Link href={`/blog/id`} key={index} className={styles.story}>
            <img src={story.imageUrl} alt={story.title} className={styles.storyImage} />
           <div> 
            <div className={styles.storyTitle}>{story.title}</div> 
            <div className={styles.rule}></div>
            </div>
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
