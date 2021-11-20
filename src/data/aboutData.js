let aboutData = [
    {
        elementType: 'Article',
        content: [
            {
                elementType: 'Headline',
                content: 'Welcome to theory corner'
            },
            {
                elementType: 'Title',
                content: 'By Marek Gudalewicz'
            },
            {
                elementType: 'Paragraph',
                content:`
                    This is a set of articles I prepared as a repetition during my interview preparation. This is also my first
                    react project. You may read a short description of a few topics related to frontend, and take a test in quiz 
                    section. Enjoy.
                `
            }
        ]
    }
]

export function getAboutData(){
    return aboutData;
}