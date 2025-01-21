"use client";
import { SuggestionTag } from "@/components/suggestionTag";
import { useHomePage } from "../useHomepage";
import styles from './style.module.scss';
import Link from "next/link";
import Image from "next/image";
import { Loading } from "@/components/loading";

function ResultImage() {

    const { image, error, loading, prompt } = useHomePage();

    if(error) {
        return <p className={styles.error}>{error.message || "An error occurred"}</p>
    }
    if(!loading && !image) {
        return null;
    }

  return (
    <div className={styles.resultImage}>
        <div className={styles.animation}>
            {
                loading ? <Loading /> : (
                    <>
                        <div className={styles.content}>
                            <p>{prompt}</p>
                            <SuggestionTag title={
                                <Link href={image} target="_blank" download={true}>Download</Link>
                            }/>
                        </div>
                        <Image src={image} alt={prompt} width={512} height={512} />
                    </>
                )
            }
        </div>
    </div>
  )
}

export { ResultImage };