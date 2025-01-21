const startGeneration = async (prompt) => {
    const response = await fetch(`${process.env.REPLICATE_API_URL}/predictions`, {
        headers: {
            Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
            version: process.env.REPLICATE_VERSION,
            input: { prompt },
        })
    });

    return response.json();
}

const getGeneration = async (url) => {
    const result = await fetch(url, {
        headers: {
            Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
            'Content-Type': 'application/json'
        }
    })

    result.json();
}

export default async function imageHandler(request, response) {
    const {
        prompt
    } = request.body;
    console.log(prompt);

    if (!prompt) {
        response.status(400).json("No prompt received");
    }

    // const predictions = await startGeneration(prompt);

    await new Promise((resolve) => setTimeout(resolve, 1000))

    let generatedImage;

 /*    while(!generatedImage) {
        const result = await getGeneration(predictions.urls.get);

        if(result.status === 'succeeded') {
            [generatedImage] = result.output;
        }

        else if (result.status === 'failed') {
            break;
        }

        else {
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    } */


    response.status(200).json(generatedImage ? generatedImage : 'Failed to create the image');
}