
let data =     {
    summary: 'Frontend Web Performance',
    title: 'Frontend Web Performance',
    searchKeywords:`

    `,
    cathegory: 'css',
    content: [
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline',
                    content:'Frontend Web Performance'
                },

                {
                    elementType: 'Paragraph',
                    content: `
                    The browser has to render the displayed imege with a quite fast ratio, of about 60fps. If the increased 
                    FPS is set, then the browser has to render the display with the 120 fps. This gaves about 16ms up to 8ms
                    for the single frame displayed on the screen to render. Then there is an overhead, that is 4ms, leaving
                    the browser time to react of about 4ms up to 8ms. 
                    `
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    Thankfully, not every component on the web page is rendered in the same way. There are layers, and 
                    some css properties cause only a part of the picture to rerender.
                    `
                },
                {
                    elementType:'Headline-2',
                    content:'Rendering cycle'
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    <code>JS &rarr;  Style &rarr; Layout &rarr; Paint &rarr; Composite
                    `
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    Taking from the left: if JS changes the page, it will be most expensive. If a style is set, then 
                    this is less expensive, but still not cheep. If layout property (like <code>width</code>, <code>height</code>,
                    <code>left</code>, <code>top</code>) are set, this is still quite expensive. Finaly there is <code>paint</code>, and
                    the composite, that is the cheepest. There are also layers, that may be excluded from the rest of the document, just 
                    for the purpose to render some things faster.
                    `
                },
                {
                    elementType: 'UnsignedList',
                    content: [
                        `<code>JS</code>: some JS or CSS animations cause the whole view to change, rerendering everything,`,
                        `<code>Style</code>: matching the applied css selectors and rules to the DOM,`,
                        '<code>layout</code> properties: width, height, top, left, right, bottom,',
                        `<code>paint</code> properties: background-color, color, cause pixels te rerender, draw or fills in 
                        this new pixels for different areas of the page,`,
                        `<code>composite</code> properties: transform, opacity, filter`
                    ]
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    The most to the right, the smaller the effort to repaint the view.
                    `
                },


            ]
        },
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline-2',
                    content:''
                },
                {
                    elementType:'Paragraph',
                    content:`

                    `
                },
            ]
        },
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline-2',
                    content:'References'
                },
                {
                    elementType:'Link',
                    content:'medium.com',
                    href: 'https://medium.com/@matthew.costello/frontend-web-performance-the-essentials-0-61fea500b180',
                    description:'A nice article'
                },
            ]
        }
    ]
};

export default function getTemplateData(){
    return data;
}