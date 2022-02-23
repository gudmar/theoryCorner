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
                            info:`<code>no-wrap</code>`,
                            code:`
                            <style>
                            @media only screen and (max-width: 1000px){
                                .hide-small-screen{
                                    display:none;
                                }
                            }
                            @media only screen and (max-width: 500px){
                                .hide-v-small-screen{
                                    display:none;
                                }
                            }
                            </style>
                            <div class="flexbox-ex-row">
                                <div class="flexbox-ex-item"></div>
                                <div class="flexbox-ex-item"></div>
                                <div class="flexbox-ex-item"></div>
                                <div class="flexbox-ex-item"></div>
                                <div class="flexbox-ex-item"></div>
                                <div class="flexbox-ex-item"></div>
                                <div class="flexbox-ex-item hide-v-small-screen"></div>
                                <div class="flexbox-ex-item hide-v-small-screen"></div>
                                <div class="flexbox-ex-item hide-v-small-screen"></div>
                                <div class="flexbox-ex-item hide-v-small-screen"></div>
                                <div class="flexbox-ex-item hide-small-screen"></div>
                                <div class="flexbox-ex-item hide-small-screen"></div>
                                <div class="flexbox-ex-item hide-small-screen"></div>
                                <div class="flexbox-ex-item hide-small-screen"></div>
                                <div class="flexbox-ex-item hide-small-screen"></div>
                                <div class="flexbox-ex-item hide-small-screen"></div>
                                <div class="flexbox-ex-item hide-small-screen"></div>
                            </div>
                            `,
                        },
                        {
                            info:`<code>wrap</code>`,
                            code:`
                            <style>
                            @media only screen and (max-width: 500px){
                                .shrink-v-small-screen {
                                    width: 50px;
                                }
                            }
                            </style>
                            <div class="flexbox-ex-row flexbox-ex-wrap">
                                <div class="flexbox-ex-item shrink-v-small-screen"></div>
                                <div class="flexbox-ex-item shrink-v-small-screen"></div>
                                <div class="flexbox-ex-item shrink-v-small-screen"></div>
                                <div class="flexbox-ex-item shrink-v-small-screen"></div>
                                <div class="flexbox-ex-item shrink-v-small-screen"></div>
                                <div class="flexbox-ex-item shrink-v-small-screen"></div>
                                <div class="flexbox-ex-item shrink-v-small-screen"></div>
                                <div class="flexbox-ex-item shrink-v-small-screen"></div>
                                <div class="flexbox-ex-item shrink-v-small-screen"></div>
                                <div class="flexbox-ex-item shrink-v-small-screen"></div>
                                <div class="flexbox-ex-item shrink-v-small-screen"></div>
                                <div class="flexbox-ex-item shrink-v-small-screen"></div>
                                <div class="flexbox-ex-item shrink-v-small-screen"></div>
                            </div>                          
                            `,
                        },
                        {
                            info:`<code>flexbox with fluid width</code>`,
                            code:`
                            <style>
                            .flexbox-ex-item-fluid{
                                flex-grow: 1;
                                flex-basis: 200px;
                            }
                            @media only screen and (max-width: 830px){
                                .flexbox-ex-item-fluid{
                                    flex-basis: 75px;
                                }
                            }
                            </style>
                            <div class="flexbox-ex-row flexbox-ex-wrap">
                                <div class="flexbox-ex-item flexbox-ex-item-fluid"></div>
                                <div class="flexbox-ex-item flexbox-ex-item-fluid"></div>
                                <div class="flexbox-ex-item flexbox-ex-item-fluid"></div>
                                <div class="flexbox-ex-item flexbox-ex-item-fluid"></div>
                                <div class="flexbox-ex-item flexbox-ex-item-fluid"></div>
                                <div class="flexbox-ex-item flexbox-ex-item-fluid"></div>
                                <div class="flexbox-ex-item flexbox-ex-item-fluid"></div>
                            </div>
                            <ul>
                                <li><code>flex-basis</code> is for setting the initial width of the flex item
                                element. Without this elements would shrink to fit to a sigle line,</li>
                                <li><code>flex-growth: 1</code> is for forcing each flex item to shrink or grow
                                in the same paste. Without this property all items would have a fixed width,</li>
                                <li><code>flex-wrap</code> on parent container is to alow elements to the next line.
                                Without this property, elements would stay in the first line shrinking or stretching.
                                Even if the elements <code>width</code> or <code>flex-basis</code> would be set to 
                                a fixed value, in case of <code>no-wrap</code> items would shrink or grow.</li>
                            </ul>
<pre>
.flex-container{
    display: flex;
    flex-wrap: wrap;    
}
.flex-item{
    flex-basis: 200px;
    flex-growth: 1;
}
&lt;div class="flex-container">
    &lt;div class="flex-item">&lt;/div>
    &lt;div class="flex-item">&lt;/div>
    &lt;div class="flex-item">&lt;/div>
    &lt;div class="flex-item">&lt;/div>
    &lt;div class="flex-item">&lt;/div>
    &lt;div class="flex-item">&lt;/div>
    &lt;div class="flex-item">&lt;/div>
    &lt;div class="flex-item">&lt;/div>
&lt;div>
</pre>  
                            `,
                        },






                        {
                            info:`<code>A <code>justify-items: center</code> problem</code>`,
                            code:`
                            <style>
                            .flexbox-ex-justify-content{
                                justify-content: center;
                                overflow: auto;
                            }
                            .flexbox-ex-items-200px{
                                min-width: 200px;
                                position:relative;
                            }
                            .max-width{
                                max-width: 500px;
                            }

                            @media only screen and (max-width: 830px){
                                .flexbox-ex-item-fluid{
                                    flex-basis: 75px;
                                }
                            }
                            </style>
                            <div class="flexbox-ex-row max-width flexbox-ex-justify-content">
                                <div class="flexbox-ex-item flexbox-ex-items-200px"></div>
                                <div class="flexbox-ex-item flexbox-ex-items-200px"></div>
                                <div class="flexbox-ex-item flexbox-ex-items-200px"></div>
                                <div class="flexbox-ex-item flexbox-ex-items-200px"></div>
                                <div class="flexbox-ex-item flexbox-ex-items-200px"></div>
                            </div>
                         Above example shows, that if align-content is set to <code>center</code>
                         elements inside the flex-container are fixed width, and the sum of the
                         flex-container childrens width is greater then the flex-container width, 
                         then some content from the start or end may not be accessable.
<pre>
.flex-container{
    max-width: 500px;
    display: flex;
    overflow:auto;
    justify-content: center;
    position: relative;
}
.flex-item{
    min-width: 200px;
    height: 60px;
    position: relative;
}
</pre>  
                    The inaccessible content of <code>aligned-content: center</code> items in not quite easy to 
                    solve. Most found on stackoverflow (see references) solutions are based on getting rid of 
                    flex-center. There is one solution that uses <code>safe center</code> value, but this 
                    solution is still not implemented in other browsers than firefox.




                    <style>
                    .flexbox-ex-justify-content-safe{
                        justify-content: safe center;
                        overflow: auto;
                    }
                    .flexbox-ex-items-200px{
                        min-width: 200px;
                        position:relative;
                    }
                    .max-width{
                        max-width: 500px;
                    }
                    </style>
                    <div class="flexbox-ex-row max-width flexbox-ex-justify-content-safe">
                        <div class="flexbox-ex-item flexbox-ex-items-200px"></div>
                        <div class="flexbox-ex-item flexbox-ex-items-200px"></div>
                        <div class="flexbox-ex-item flexbox-ex-items-200px"></div>
                        <div class="flexbox-ex-item flexbox-ex-items-200px"></div>
                        <div class="flexbox-ex-item flexbox-ex-items-200px"></div>
                    </div>
                    Above example is a <code>safe center</code> fix to the inaccissable content of the aligned center
                    content. For now it will work only in firefox.
                            `,
                            
                        },
                        
                        {
                            info:`<code>justify-content</code>`,
                            code:`
                            <style>
                            .fixed-width{
                                position: relative;
                                width: 50px;
                            }
                            .flex-j-c-start{justify-content: flex-start;}
                            .flex-j-c-end{justify-content: flex-end;}
                            .flex-j-c-center{justify-content: center;}
                            .flex-j-c-between{justify-content: space-between;}
                            .flex-j-c-around{justify-content: space-around;}
                            .flex-j-c-evenly{justify-content: space-evenly;}
                            @media only screen and (max-width: 1000px){
                                .jc-small {
                                    width: 50px;
                                }
                            }
                            @media only screen and (max-width: 550px){
                                .jc-small {
                                    width: 30px;
                                    height: 30px;
                                    font-size: 1rem;
                                }
                            }
                            </style>
                            <h4><code>justify-content: flex-start;</code></h4>
                            <div class="flexbox-ex-row flex-j-c-start">
                                <div class="flexbox-ex-item jc-small"></div>
                                <div class="flexbox-ex-item jc-small"></div>
                                <div class="flexbox-ex-item jc-small"></div>
                            </div>                          
                            <h4><code>justify-content: flex-end;</code></h4>
                            <div class="flexbox-ex-row flex-j-c-end">
                                <div class="flexbox-ex-item jc-small"></div>
                                <div class="flexbox-ex-item jc-small"></div>
                                <div class="flexbox-ex-item jc-small"></div>
                            </div>                          
                            <h4><code>justify-content: center;</code></h4>
                            <div class="flexbox-ex-row flex-j-c-center">
                                <div class="flexbox-ex-item jc-small"></div>
                                <div class="flexbox-ex-item jc-small"></div>
                                <div class="flexbox-ex-item jc-small"></div>
                            </div>                          
                            <h4><code>justify-content: space-between;</code></h4>
                            <div class="flexbox-ex-row  flex-j-c-between">
                                <div class="flexbox-ex-item jc-small"></div>
                                <div class="flexbox-ex-item jc-small"></div>
                                <div class="flexbox-ex-item jc-small"></div>
                            </div>                          
                            <h4><code>justify-content: space-around;</code></h4>
                            <div class="flexbox-ex-row flex-j-c-around">
                                <div class="flexbox-ex-item jc-small"></div>
                                <div class="flexbox-ex-item jc-small"></div>
                                <div class="flexbox-ex-item jc-small"></div>
                            </div>                          
                            <h4><code>justify-content: space-evenly;</code></h4>
                            <div class="flexbox-ex-row flex-j-c-evenly">
                                <div class="flexbox-ex-item jc-small"></div>
                                <div class="flexbox-ex-item jc-small"></div>
                                <div class="flexbox-ex-item jc-small"></div>
                            </div>                          
There is a <code>safe</code> and <code>unsafe</code> keyword that works with all <code>justify-content</code>
values. The <code>safe</code> ensures, that the content will be accessable in edge cases (see 
justify-content center problem). However this works only with firefox for now.

                            `,
                        },


                        {
                            info:`<code>align-items</code>`,
                            code:`
                            <style>
                            .big-wrapper{
                                position: relative;
                                height: 400px;
                            }
                            .flex-a-i-start  {align-items: flex-start;}
                            .flex-a-i-end    {align-items: flex-end;}
                            .flex-a-i-center {align-items: center;}
                            .flex-a-i-stretch{align-items: stretch;}
                            .flex-a-i-baseline {align-items: baseline;}
                            .s1{height: 50px;} .s2{height: 150px;} .s3{height: 100px;}
                            @media only screen and (max-width: 1000px){
                                .jc-small-a {
                                    width: 50px;
                                }
                            }
                            @media only screen and (max-width: 550px){
                                .jc-small-a {
                                    width: 30px;
                                    font-size: 1rem;
                                }
                                .big-wrapper{
                                    height: 300px
                                }
                            }
                            </style>
                            <h4><code>align-items: flex-start;</code></h4>
                            <div class="flexbox-ex-row big-wrapper flex-a-i-start">
                                <div class="flexbox-ex-item jc-small-a s1"></div>
                                <div class="flexbox-ex-item jc-small-a s2"></div>
                                <div class="flexbox-ex-item jc-small-a s3"></div>
                            </div>   
                            <h4><code>align-items: flex-end;</code></h4>
                            <div class="flexbox-ex-row big-wrapper flex-a-i-end">
                                <div class="flexbox-ex-item jc-small-a s1"></div>
                                <div class="flexbox-ex-item jc-small-a s2"></div>
                                <div class="flexbox-ex-item jc-small-a s3"></div>
                            </div> 
                            <h4><code>align-items: center;</code></h4>
                            <div class="flexbox-ex-row big-wrapper flex-a-i-center">
                                <div class="flexbox-ex-item jc-small-a s1"></div>
                                <div class="flexbox-ex-item jc-small-a s2"></div>
                                <div class="flexbox-ex-item jc-small-a s3"></div>
                            </div>         
                            <h4><code>align-items: stretch;</code></h4>
                            <div class="flexbox-ex-row big-wrapper flex-a-i-stretch">
                                <div class="flexbox-ex-item jc-small-a s1"></div>
                                <div class="flexbox-ex-item jc-small-a s2"></div>
                                <div class="flexbox-ex-item jc-small-a s3"></div>
                            </div>      
                            <h4><code>align-items: baseline;</code></h4>
                            <div class="flexbox-ex-row big-wrapper flex-a-i-baseline">
                                <div class="flexbox-ex-item jc-small-a s1"></div>
                                <div class="flexbox-ex-item jc-small-a s2"></div>
                                <div class="flexbox-ex-item jc-small-a s3"></div>
                            </div>         
   

                            `
                        },




                        {
                            info:`<code>align-content</code>: <code>align-items</code> is for setting
                            elements fitting into a single line behaviour, and the <code>align-content</code>
                            is for setting behaviour specific for content having more than just a single line.
                            Some behaviours are related to the spaces between lines, and this will have no effect 
                            when there is only a single line, and others behaviours are related alignment between 
                            elements of different heights. This kind of behaviour will be applied to each line of 
                            ...... ???????? `,
                            code:`
                            <style>
                            .big-wrapper-ac{
                                position: relative;
                                height: 700px;
                            }
                            .height-unset{height: unset;}
                            .flex-a-c-start  {align-content: flex-start;}
                            .flex-a-c-end    {align-content: flex-end;}
                            .flex-a-c-center {align-content: center;}
                            .flex-a-c-stretch{align-content: stretch;}
                            .flex-a-c-between {align-content: space-between;}
                            .flex-a-c-around {align-content: space-around;}
                            .sa1{height: 50px;} .sa2{height: 80px;} .sa3{height: 90px;}.sa4{height: 75px;}
                            @media only screen and (max-width: 1000px){
                                .jc-small-a {
                                    width: 50px;
                                }
                            }
                            @media only screen and (max-width: 550px){
                                .jc-small-a {
                                    width: 30px;
                                    font-size: 1rem;
                                }
                                .big-wrapper{
                                    height: 300px
                                }
                            }
                            </style>
                            <h4><code>align-content: flex-start;</code></h4>
                            <div class="flexbox-ex-row big-wrapper-ac flexbox-ex-wrap flex-a-c-start">
                                <div class="flexbox-ex-item jc-small-a sa1"></div>
                                <div class="flexbox-ex-item jc-small-a sa2"></div>
                                <div class="flexbox-ex-item jc-small-a sa3"></div>
                                <div class="flexbox-ex-item jc-small-a sa4"></div>
                                <div class="flexbox-ex-item jc-small-a sa1"></div>
                                <div class="flexbox-ex-item jc-small-a sa2"></div>
                                <div class="flexbox-ex-item jc-small-a sa3"></div>
                                <div class="flexbox-ex-item jc-small-a sa4"></div>
                                <div class="flexbox-ex-item jc-small-a sa1"></div>
                                <div class="flexbox-ex-item jc-small-a sa2"></div>
                                <div class="flexbox-ex-item jc-small-a sa3"></div>
                                <div class="flexbox-ex-item jc-small-a sa4"></div>
                                <div class="flexbox-ex-item jc-small-a sa1"></div>
                                <div class="flexbox-ex-item jc-small-a sa2"></div>
                                <div class="flexbox-ex-item jc-small-a sa3"></div>
                                <div class="flexbox-ex-item jc-small-a sa4"></div>
                            </div>   
                            <h4><code>align-content: flex-end;</code></h4>
                            <div class="flexbox-ex-row big-wrapper-ac flexbox-ex-wrap flex-a-c-end">
                                <div class="flexbox-ex-item jc-small-a sa1"></div>
                                <div class="flexbox-ex-item jc-small-a sa2"></div>
                                <div class="flexbox-ex-item jc-small-a sa3"></div>
                                <div class="flexbox-ex-item jc-small-a sa4"></div>
                                <div class="flexbox-ex-item jc-small-a sa1"></div>
                                <div class="flexbox-ex-item jc-small-a sa2"></div>
                                <div class="flexbox-ex-item jc-small-a sa3"></div>
                                <div class="flexbox-ex-item jc-small-a sa4"></div>
                                <div class="flexbox-ex-item jc-small-a sa1"></div>
                                <div class="flexbox-ex-item jc-small-a sa2"></div>
                                <div class="flexbox-ex-item jc-small-a sa3"></div>
                                <div class="flexbox-ex-item jc-small-a sa4"></div>
                                <div class="flexbox-ex-item jc-small-a sa1"></div>
                                <div class="flexbox-ex-item jc-small-a sa2"></div>
                                <div class="flexbox-ex-item jc-small-a sa3"></div>
                                <div class="flexbox-ex-item jc-small-a sa4"></div>
                            </div> 
                            <h4><code>align-items: center;</code></h4>
                            <div class="flexbox-ex-row big-wrapper-ac flexbox-ex-wrap flex-a-c-center">
                                <div class="flexbox-ex-item jc-small-a sa1"></div>
                                <div class="flexbox-ex-item jc-small-a sa2"></div>
                                <div class="flexbox-ex-item jc-small-a sa3"></div>
                                <div class="flexbox-ex-item jc-small-a sa4"></div>
                                <div class="flexbox-ex-item jc-small-a sa1"></div>
                                <div class="flexbox-ex-item jc-small-a sa2"></div>
                                <div class="flexbox-ex-item jc-small-a sa3"></div>
                                <div class="flexbox-ex-item jc-small-a sa4"></div>
                                <div class="flexbox-ex-item jc-small-a sa1"></div>
                                <div class="flexbox-ex-item jc-small-a sa2"></div>
                                <div class="flexbox-ex-item jc-small-a sa3"></div>
                                <div class="flexbox-ex-item jc-small-a sa4"></div>
                                <div class="flexbox-ex-item jc-small-a sa1"></div>
                                <div class="flexbox-ex-item jc-small-a sa2"></div>
                                <div class="flexbox-ex-item jc-small-a sa3"></div>
                                <div class="flexbox-ex-item jc-small-a sa4"></div>
                            </div>         
                            <h4><code>align-items: stretch;</code></h4>
                            <div class="flexbox-ex-row big-wrapper-ac flexbox-ex-wrap flex-a-c-stretch">
                                <div class="flexbox-ex-item jc-small-a height-unset"></div>
                                <div class="flexbox-ex-item jc-small-a height-unset"></div>
                                <div class="flexbox-ex-item jc-small-a height-unset"></div>
                                <div class="flexbox-ex-item jc-small-a height-unset"></div>
                                <div class="flexbox-ex-item jc-small-a height-unset"></div>
                                <div class="flexbox-ex-item jc-small-a height-unset"></div>
                                <div class="flexbox-ex-item jc-small-a height-unset"></div>
                                <div class="flexbox-ex-item jc-small-a height-unset"></div>
                                <div class="flexbox-ex-item jc-small-a height-unset"></div>
                                <div class="flexbox-ex-item jc-small-a height-unset"></div>
                                <div class="flexbox-ex-item jc-small-a height-unset"></div>
                                <div class="flexbox-ex-item jc-small-a height-unset"></div>
                                <div class="flexbox-ex-item jc-small-a height-unset"></div>
                                <div class="flexbox-ex-item jc-small-a height-unset"></div>
                                <div class="flexbox-ex-item jc-small-a height-unset"></div>
                                <div class="flexbox-ex-item jc-small-a height-unset"></div>
                            </div>    
                            <h4><code>align-content: space-between;</code></h4>
                            <div class="flexbox-ex-row big-wrapper-ac flexbox-ex-wrap flex-a-c-between">
                                <div class="flexbox-ex-item jc-small-a sa1"></div>
                                <div class="flexbox-ex-item jc-small-a sa2"></div>
                                <div class="flexbox-ex-item jc-small-a sa3"></div>
                                <div class="flexbox-ex-item jc-small-a sa4"></div>
                                <div class="flexbox-ex-item jc-small-a sa1"></div>
                                <div class="flexbox-ex-item jc-small-a sa2"></div>
                                <div class="flexbox-ex-item jc-small-a sa3"></div>
                                <div class="flexbox-ex-item jc-small-a sa4"></div>
                                <div class="flexbox-ex-item jc-small-a sa1"></div>
                                <div class="flexbox-ex-item jc-small-a sa2"></div>
                                <div class="flexbox-ex-item jc-small-a sa3"></div>
                                <div class="flexbox-ex-item jc-small-a sa4"></div>
                                <div class="flexbox-ex-item jc-small-a sa1"></div>
                                <div class="flexbox-ex-item jc-small-a sa2"></div>
                                <div class="flexbox-ex-item jc-small-a sa3"></div>
                                <div class="flexbox-ex-item jc-small-a sa4"></div>
                            </div>         
                            <h4><code>align-content: space-around;</code></h4>
                            <div class="flexbox-ex-row big-wrapper-ac flexbox-ex-wrap flex-a-c-around">
                                <div class="flexbox-ex-item jc-small-a sa1"></div>
                                <div class="flexbox-ex-item jc-small-a sa2"></div>
                                <div class="flexbox-ex-item jc-small-a sa3"></div>
                                <div class="flexbox-ex-item jc-small-a sa4"></div>
                                <div class="flexbox-ex-item jc-small-a sa1"></div>
                                <div class="flexbox-ex-item jc-small-a sa2"></div>
                                <div class="flexbox-ex-item jc-small-a sa3"></div>
                                <div class="flexbox-ex-item jc-small-a sa4"></div>
                                <div class="flexbox-ex-item jc-small-a sa1"></div>
                                <div class="flexbox-ex-item jc-small-a sa2"></div>
                                <div class="flexbox-ex-item jc-small-a sa3"></div>
                                <div class="flexbox-ex-item jc-small-a sa4"></div>
                                <div class="flexbox-ex-item jc-small-a sa1"></div>
                                <div class="flexbox-ex-item jc-small-a sa2"></div>
                                <div class="flexbox-ex-item jc-small-a sa3"></div>
                                <div class="flexbox-ex-item jc-small-a sa4"></div>
                            </div>         
   

                            `
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