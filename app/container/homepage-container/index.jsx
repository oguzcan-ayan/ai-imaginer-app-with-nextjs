
import styles from '@/app/container/homepage-container/styles.module.scss';
import { PromptForm } from './prompt-form';
import { PromptSuggestions } from './prompt-suggestions';
import { ExampleImages } from './example-prompt-images';
import { ResultImage } from './result-image';

function HomePageContainer() {

    return (
        <div className={styles.homePageContainer}>
            <h1 className={styles.title}>Just imagine, we do the best</h1>
            <p className={styles.description}>Tell us the prompt which you thought and then we&apos;ll generate a story for you.</p>
            <PromptForm />
            <ResultImage />
            <PromptSuggestions />
            <ExampleImages />
        </div>
    )
}

export { HomePageContainer };