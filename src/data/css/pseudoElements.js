const data =     {
    summary: 'pseudo elements',
    title: 'pseudo elements',
    cathegory: 'css',
    searchKeywords: `selector selectors combinator combinators class classes tag id pseudo-class`,
    content: [
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline',
                    content:'Pseudo elements'
                },
            ]
        },
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Paragraph',
                    content:`
                        There are two elements in web design, that are not a part of the HTML. They are 
                        added to DOM only with CSS, and their behaviour is also defined with css. 
                        This elements are:
                    `
                },
                {
                    elementType:'UnsignedList',
                    content:[`
                    <code>::before</code>, that is added as a sort of <i>first child</i> of the element that before is applied to,
                    hovever this is not exectly a child element, as it is neither listed with <code>element.childNodes</code>,
                    nor styled with pseudo-class elements
                    `,
                    `<code>::after</code> is added as a sort of <i>last child</i> of element that it is being applied to.`
                    ]
                },
                {
                    elementType:'Paragraph',
                    content:`
                        Pseudo elements cannot be accessed with JS in other way than with <code>
                        window.getComputedStyle(document.querySelector(someElement), ':before')</code>.
                        It may be styled with JS by modifying <code>&lt;style></code> rules.
                    `
                },
                {
                    elementType:'Headline-2',
                    content:'Usages of pseudo elements'
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        `
                        A tooltip:
                        <div class="alert-dark alert">
<pre>
div:before{
    position:absolute;
    top:0;left:0;
    transform:translateY(-100%);
    content:attr(data-tooltip);
    backgrond-color:yellow;
    color:balck;
    visibility:hidden;
}
div:hover:before{visiblity:visible;}
</pre>
                        </div>
                        <style>
                            #tooltipTarget{
                                position:relative;width:100px;padding:5px;text-align:center;
                                line-height:1.5rem;background-color:green;border-radius:4px;
                                color:white;cursor:default;
                            }
                            #tooltipTarget:before{
                                content:attr(data-tooltip);position:absolute;top:0;left:0;transform:translateY(-100%);
                                background-color:yellow;color:black;
                                visibility:hidden;
                            }
                            #tooltipTarget:hover:before{
                                visibility:visible;
                            }

                        </style>
                            <div id="tooltipExample">
                            <div id="tooltipTarget" data-tooltip="Some advice">Hover me</div>
                        </div>
                        `,
                        `
                        Put fancy shadow:
                        <div class="alert-dark alert">
<pre>
div{
    position:relative;
    width: 150px;
    height:150px;
    background-color:white;
    border-radius:5px;
}
div:before,div:after{
    position:absolute;
    content:'';
    width: 20px;
    height:20px;
    -webkit-box-shadow: 0px 10px 29px 13px #000000; 
    box-shadow: 0px 10px 29px 13px #000000;
    bottom:30px;
    left: 10px;
    transform:rotate(-20deg;);
}
div:after{
    right: 10px;
    transform:rotate(20deg;);
}
div:hover:before{visiblity:visible;}
</pre>
<style>
#fancyShadowExample{
    position:relative;
    width: 150px;
    height:150px;
    background-color:white;
    border-radius:5px;
}
#fancyShadowExample:before,div:after{
    position:absolute;
    content:'';
    width: 20px;
    height:20px;
    -webkit-box-shadow: 0px 10px 29px 13px #000000; 
    box-shadow: 0px 10px 29px 13px #000000;
    bottom:30px;
    left: 10px;
    transform:rotate(-20deg;);
}
#fancyShadowExample:after{
    right: 10px;
    transform:rotate(20deg;);
}
#fancyShadowExample:hover:before{visiblity:visible;}
</style>
                        </div>
                        <div id="fancyShadowExample">
                            Example of fancy shadow
                        </div>
                        `
                    
                    ]
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
                    content:'w3schools',
                    href: '#',
                    description:'Nice visual explanation of specifity calculation'
                },
                
            ]
        }
    ]
};

export default function getPseudoElementData(){
    return data;
}