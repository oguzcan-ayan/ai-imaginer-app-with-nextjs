"use client";

import styles from './styles.module.scss';
import { examples } from './constants';
import { SuggestionTag } from '@/components/suggestionTag';
import Image from 'next/image';
import { useHomePage } from '../useHomepage';

function ExampleImages() {

    const { changePrompt } = useHomePage()

  return (
    <div className={styles.examples}>
        {examples.map((example) => (
            <div className={styles.example} key={example.id} onClick={() => changePrompt(example.prompt)}>
                <h4>{example.prompt}</h4>
                <SuggestionTag title='Copy' onClick={() => changePrompt(example.prompt)} />
                <Image src={example.image} alt={example.prompt} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
            </div>
        ))}
    </div>
  )
}

export {ExampleImages};