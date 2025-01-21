"use client";
import styles from './styles.module.scss';

function SuggestionTag({ title, onClick }) {

    const handleClick = () => {
        if(onClick) {
            onClick(title);
        }
    }

  return (
    <button className={styles.suggestionTag} onClick={handleClick}>{title}</button>
  )
}
 
export { SuggestionTag };