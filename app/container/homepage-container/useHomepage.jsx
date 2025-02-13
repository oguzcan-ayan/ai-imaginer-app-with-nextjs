"use client";

import { useContext, createContext, useState, useMemo } from "react";

const HomePageContext = createContext();

export const HomePageProvider = ({ children }) => {

    const [prompt, setPrompt] = useState("");
    const [image, setImage] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    const generateImage = async () => {
        try {
            setLoading(true);
            const response = await fetch("../../../pages/api/generate/index.js", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    prompt
                })
            })

            if(!response.ok) {
                throw new Error(response.statusText || response.status);
            }

            const generatedImage = await response.json();
            setImage(generatedImage);
            setError(null);

        } catch (error) {
            setError(error);
            // throw new Error("Failed to generate image");
        }
        setLoading(false);
    }
    const changePrompt = (newPrompt) => {
        setPrompt(newPrompt);
        window.scrollTo(0, 0);
    }

    const data = useMemo(() => ({
        prompt,
        setPrompt,
        generateImage,
        changePrompt,
        image,
        error,
        loading
    }), [prompt, image, error, loading]);

    return <HomePageContext.Provider value={data}>{children}</HomePageContext.Provider>
}

export const useHomePage = () => {
    const context = useContext(HomePageContext);

    if (!context) {
        throw new Error("Error occurred due to the empty context")
    }

    return context;
}


