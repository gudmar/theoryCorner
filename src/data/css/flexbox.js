// TO TEST
// flex-growth vs flex-shrink
//flex-basis: 0 and auto
let data =     {
    summary: 'flexbox',
    title: 'flexbox',
    searchKeywords:`

    `,
    cathegory: 'css',
    content: [
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline',
                    content:'Flexbox'
                },

                {
                    elementType: 'Paragraph',
                    content: `
                    Layouts in css can be based on:
                    `
                },
                {
                    elementType: 'UnsignedList',
                    content: [
                        `tables: this is a historic approach, when js was still not developed, pages were based on 
                        static html files, there was a table, thats one column was the menu column, and the 
                        second column was the content column. The <code>&lta href... target</code> attribute indicated
                        the id of the element that content should be displayed in (in this case the second column).
                        In current day web pages tables should be usd to display data, not for the layouts, as there 
                        are better solutions. Moreover at present mobile devices must be taken into concideration,`,
                        `A float solution, based on elements floating to the left or right of other elements.
                        This approach is not the best anymore due to <abbr title="User Experience">UX</abbr>
                        issues`,
                        `Flexbox: quite up to date solution. based on elements that automatically adjust to the 
                        screen size. This approach is a single dimensional one and should be used in smaler layouts`,
                        `Grid: a two-dimensional solution for the layouts`
                    ]
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    <code>display: flex</code> is set to the parent of elements that will be displayed in the flex way. 
                    The child elements of the flex container have their size controlled by the flex algorithm by default.
                    By default they do not wrap, and reduce their size to fit into the single line. However, setting some 
                    properties may change the flexbox behaviour
                    `
                },
                {
                    elementType: 'UnsignedList',
                    content: [
                        `<code>display: flex</code>: turn on the felxbox algorithm for the container,`,
                        `<code>flex-direction: row/column</code>: elements will appear horizontally or vertically,`,
                        `<code>flex-wrap: no-wrap/wrap</code>: elements will not wrap by default, will shrink to fit 
                        into a single row/column,`,
                        `<code>flex-flow: column wrap/row wrap ...</code>: shortcut for the <code>flex-wrap</code>
                        and <code>flex-direction</code> properties,`,
                        `<code>justify-content</code>: how elements will be justified in the <strong>main</strong>
                        direction. Is used both to the elements that are not wrapped and wrapped,`,
                        `<code>align-items</code>: the position elements will take in the cross direction. Is for 
                        setting the content if it is in a single line, not wrapped,`,
                        `<code>gap</code>, <code>row-gap</code>, <code>column-gap</code> are for setting gaps between
                        elements of the flexbox container,`,
                    ]
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    There is a set of properties to be applied to the sigle elements being children of the flexbox container:
                    `
                },
                {
                    elementType: 'UnsignedList',
                    content: [
                       `<code>order: 3;</code>: items in flex container may be displayed in the different order
                       then listed. This property indicates, on what position the element should apppear,`,
                       `<code>flex-grow: 2</code>; each child of the flexbox container, by default, grows in the same 
                       reate with the screen being resized. This growing ratio may be changed. The <code>order</code>
                       property indicates, how many times the growing ratio needs to be multiplicated,`,
                       `<code>flex-shrink: 2</code>: similar to the <code>flex-growth</code> but for the shrinking
                       property,`,
                       `<code>flex-basis: auto/200px...</code>: the default size of the element before the remaining
                       space in the parent container is distributed,`,
                       `<code>flex</code> is <code>flex-grow</code>, <code>flex-shrink</code>, <code>flex-basis</code>
                       combined,`,
                       `<code>align-self</code>: the element may be taken out of the default layout behaviour and set 
                       to the different position. For example all elements are aligned to the <code>flex-start</code>
                       and one is taken out by the <code>align-self</code> and set to the <code>flex-end</code>`

                    ]
                },


                {
                    elementType:'Headline-3',
                    content:'<span id="flex-wrap">flex-wrap</span>'
                },
                
                {
                    elementType: 'HiddenCode',
                    content: [
                        {
                            info:``,
                            code:`
                            <style>.flexbox-ex-item</style>
                            <div class="flexbox-ex-row">
                                <div class="flexbox-ex-item"></div>
                                <div class="flexbox-ex-item"></div>
                                <div class="flexbox-ex-item"></div>
                                <div class="flexbox-ex-item"></div>
                                <div class="flexbox-ex-item"></div>
                                <div class="flexbox-ex-item"></div>
                                <div class="flexbox-ex-item"></div>
                                <div class="flexbox-ex-item"></div>
                                <div class="flexbox-ex-item"></div>
                                <div class="flexbox-ex-item"></div>
                                <div class="flexbox-ex-item"></div>
                                <div class="flexbox-ex-item"></div>
                                <div class="flexbox-ex-item"></div>
                                <div class="flexbox-ex-item"></div>
                                <div class="flexbox-ex-item"></div>
                                <div class="flexbox-ex-item"></div>
                                <div class="flexbox-ex-item"></div>
                            </div>
                            `,
                        },
                        {
                            info:``,
                            code:`
                            <style>.flexbox-ex-item</style>
                            <div class="flexbox-ex-row flexbox-ex-wrap">
                                <div class="flexbox-ex-item"></div>
                                <div class="flexbox-ex-item"></div>
                                <div class="flexbox-ex-item"></div>
                                <div class="flexbox-ex-item"></div>
                                <div class="flexbox-ex-item"></div>
                                <div class="flexbox-ex-item"></div>
                                <div class="flexbox-ex-item"></div>
                                <div class="flexbox-ex-item"></div>
                                <div class="flexbox-ex-item"></div>
                                <div class="flexbox-ex-item"></div>
                                <div class="flexbox-ex-item"></div>
                                <div class="flexbox-ex-item"></div>
                                <div class="flexbox-ex-item"></div>
                            </div>
                            `,
                        },
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
                    content:'css-tricks',
                    href: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/',
                    description:'Tutorial'
                },
            ]
        }
    ]
};

export default function getFlexboxData(){
    return data;
}