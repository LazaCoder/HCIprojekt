// components/Sidebar.js

import styles from '../../styles/Sidebar.module.css'; // adjust the path as necessary

const Sidebar = ({ stories }) => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.searchTitle}>Search</div>
      <div className={styles.searchBox}>
        <input type="text" placeholder="Search" className={styles.searchInput} />
      </div>
      <div className={styles.newStories}>
        <h3 className={styles.heading}>New Stories</h3>
        {stories.map((story, index) => (
          <div key={index} className={styles.story}>
            <img src={story.imageUrl} alt={story.title} className={styles.storyImage} />
           <div> 
            <div className={styles.storyTitle}>{story.title}</div> 
            <div className={styles.rule}></div>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
