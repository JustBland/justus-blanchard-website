import resoundLayout from "../assets/ResoundLayout.png"
import pianoPic from "../assets/SensoryPiano.jpeg"

export default [
    {
        slug: "resound-control",
        img: {
            src: resoundLayout,
            alt: "screenshot of Resound Control, an audio mixer control application developed by Justus Blanchard"
        },
        title: "RESOUND CONTROL",
        description: `An audio mixer control surface developed with simplicity and 
                      functionality in mind. This application is made for volunteer
                      audio engineers needing real-time remote control over their 
                      digital mixer. It features a modular UI, allowing for preset
                      layouts and customization.`,
        skills: "Java, Typescript, React, Websockets"
    },
    {
        slug: "sensory-piano",
        title: "SENSORY PIANO",
        img: {
            src: pianoPic,
            alt: "Photo of the Sensory Piano, a small black piano prototype against a presentation backdrop"
        },
        description: `A custom-built accessible piano for the hearing-impaired
                      using the combined power of a Raspberry Pi and 
                      microcontroller. Each key is configured to vibrate a
                      specific frequency cooresponding to its respective note,
                      allowing music to be felt through an individual's fingers.`,
        skills: "Python, Raspberry Pi, Microcontrollers"
    }
]