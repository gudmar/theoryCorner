
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
                    The browser has to render the displayed image with a quite fast ratio, of about 60fps. If the increased 
                    FPS is set, then the browser has to render the display with the 120 fps. This gives about 16ms up to 8ms
                    for the single frame displayed on the screen to render. Then there is an overhead, that is 4ms, leaving
                    the browser time to react of about 4ms up to 8ms. 
                    `
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    Thankfully, not every component on the web page is rendered in the same way. There are layers, and 
                    some css properties cause only a part of the picture to render.
                    `
                },
                {
                    elementType:'Headline-2',
                    content:'Pixel pipeline'
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
                    The most to the right, the smaller the effort to repaint the view.
                    `
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    Taking from the left: if <code>JS</code> changes the page, it will be most expensive. 
                    If a <code>style</code> is set, then this is less expensive, but still not cheep. 
                    If a layout property (like <code>width</code>, <code>height</code>,
                    <code>left</code>, <code>top</code>) are set, this is still quite expensive. 
                    Finaly there is <code>paint</code>, and the composite, that is the cheepest. 
                    There are also layers, that may be excluded from the rest of the document, just 
                    for the purpose to render some things faster.
                    `
                },
                {
                    elementType: 'UnsignedList',
                    content: [
                        `<code>JS</code>: some JS or CSS animations cause the whole view to rendered and changed,`,      
                        `<code>Style</code>: matching the applied css selectors and applying rules to the DOM,`,
                        `<code>layout</code>: calculating the new geometry of DOM elements. The bigger the DOM the worst.
                            Properties: width, height, top, left, right, bottom,`,
                        `<code>paint</code>: draws or fills pixels in different areas of the page. Redraws shadows, background images.
                            Properties: background-color, color, cause pixels te rerender, draw or fills in 
                        this new pixels for different areas of the page,`,
                        `<code>composite</code> Combine individually painted layers together, ready to display. 
                         Properties: transform, opacity, filter. The cheepest one.`
                    ]
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    The most to the right, the smaller the effort to repaint the view.
                    `
                },
                {
                    elementType:'Headline-2',
                    content:'Compositor layers'
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    Compositor layers, are DOM elements that have been promoted by the browser to have their individual
                    painting layers (see the medium.com in the reference section). The element on the layer may be treated
                    independently, so the change to it does not caues the whole page to change. If only a layer is changed,
                    then this is cheep renderning, as only one layer plus the composition process are needed.
                    `
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    However this process is not for free:
                    `
                },
                {
                    elementType: 'UnsignedList',
                    content: [
                        'Promotion of a layer costs,',
                        'Demotion of a layer costs,',
                        'Keeping layers in the memory increases RAM usage'
                    ]
                    
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    So there has to be a balance. There is a way to advice the browser to create a new layer, 
                    but this should never be used as a solution. Only should be used to solve already unsolvable problems.
                    `
                },
                {
                    elementType: 'SmallHeadline',
                    content: `
                    <code>will-change</code> property:
                    `
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    This css property tells the browser, that the element will change some attributes like:
                    `
                },
                {
                    elementType: 'UnsignedList',
                    content: [
                        `auto`, 'scroll-position', 'contents', 'transform', 'opacity', 'right, left, top,',
                    ]
                },
                {
                    elementType: 'Paragraph',
                    content: `
                  May also take values clearing its behaviour:
                    `
                },
                {
                    elementType: 'UnsignedList',
                    content: [
                        'inherit,', 
                        'initial,', 'revert,', 'unset.'
                    ]
                },
                {
                    elementType: 'NoteWarning',
                    content: `
                  <code>will-change</code> should never be used as a solution, as it may cause real problems to 
                  the performance issutes and memory usage. Browser already optimizes performance in a proper way.
                  The <code>will-change<code> if used should be disactivated as soon as possible after usage.
                    `
                },
                {
                    elementType:'Headline-2',
                    content:'Properties for different rendering stages'
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        `<code>any other then the <code>opacity</code> or <code>transform</code> causes the paint to be triggered,`,
                        `<code>composite</code>: opacity and transform,`

                    ]
                },
                {
                    elementType:'Headline-2',
                    content:'Clues'
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        `Use <code>requestAnimationFrame(callback)</code> instead of <code>setTimeout</code> for the 
                        animations. The callback takes a timestamp argument telling about current time,`,
                        `Do not use large complicated css selectors. Using <code>nth-last-child(-n+1)</code>
                        for example causes a lot of computation,`,
                        `Avoid selectors like <code>body</code> as in this case the whole page should rerender,`,
                        `Try to push as much of the long duration work to the Web Workers,`,
                        `Reduce complexity of the Web Workers. They should not compute for longer than 5ms during 
                        animations,`,
                        `Avoid complicated nested layouts, as changes will often change the whole document,`,
                        `Use <code>flexbox</code> over older <code>float</code>, <code>relative</code>, <code>absolute</code>
                        elements,`,
                        `Avoid <strong>forced synchronous layout</strong>: forcing layout calculation over the style.`,
                        `Promote elements that will be animated with <code>will-change</code>`,
                        `Do not promote elements if not necessry`,
                        `Use <code>layers</code> and <code>performance</code> in dev-tools to examine performance issues,`
                    ]
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
                    content:'developers.google.com',
                    href: 'https://developers.google.com/web/fundamentals/performance/rendering',
                    description:'Great tutorial'
                },
                {
                    elementType:'Link',
                    content:'developer.mozilla',
                    href: 'https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame',
                    description:'Requesting an animation frame'
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
}

export default function getFWPData(){
    return data;
}