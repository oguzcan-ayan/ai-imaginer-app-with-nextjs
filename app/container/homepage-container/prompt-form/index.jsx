"use client";

import { useHomePage } from '../useHomepage';
import styles from './styles.module.scss';

function PromptForm() {

    const { prompt, setPrompt, generateImage } = useHomePage();

    const handlePromptChange = (e) => {
        setPrompt(e.target.value);
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
        generateImage();
    }

    return (
        <div className={styles.promptForm}>
            <form className={styles.form} onSubmit={handleSubmitForm}>
                <textarea
                    className={styles.promptTextarea}
                    rows={2}
                    required
                    typeof='text'
                    value={prompt}
                    onChange={handlePromptChange}
                    placeholder='An orchestra of characters playing instruments on fire in a chapel + surrounded by ghosts made out of chiseled marble' />
                <button className={styles.generateButton} type='submit'>Generate</button>
            </form>
        </div>
    )
}

export { PromptForm };