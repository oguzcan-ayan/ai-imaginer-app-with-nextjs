"use client";

import { SuggestionTag } from "@/components/suggestionTag";
import { suggestions } from "./constants";
import styles from './styles.module.scss';
import { useHomePage } from "../useHomepage";

function PromptSuggestions() {

    const { changePrompt } = useHomePage();

    return (
        <div className={styles.promptSuggestions}>
            <h3 className={styles.title}>Nothing in your mind? Let's try one of these prompts:</h3>
            <div className={styles.suggestions}>
                {suggestions.map((suggestion) => (
                    <SuggestionTag title={suggestion.title} key={suggestion.id} onClick={changePrompt}/>
                ))}
            </div>
        </div>
    )
}

export { PromptSuggestions };