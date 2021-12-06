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
                    elementType: 'NoteWarning',
                    content: `
                    Pseudo element will not show up, if it has no <strong>content</strong> property set. It is 
                    important to set it at least to an empty string.
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

                        </div>
                        <style>
                            #tooltipTarget{
                                margin:30px;
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
 
                        `,
                        `
                        Put fancy shadow:

                        <style>
#fancyShadowExample{
    display:flex;align-items:center;justify-items:center;justify-content:center;
    text-align:center;
    position:relative;
    width: 250px;
    height:150px;
    background-color:#ebebeb;
    margin: 30px;
}
#fancyShadowExample>span{
    display:inline-block;
}
#fancyShadowExample:before,#fancyShadowExample:after{
    position:absolute;
    content:'';
    width: 75px;
    height:20px;
    -webkit-box-shadow: 0px 25px 36px 15px rgba(0,0,0,0.36); 
    box-shadow: 0px 10px 36px 15px rgba(0,0,0,0.36);
    bottom:10px;
    left: 25px;
    transform:rotate(-9deg);
    z-index:-1;
}
#fancyShadowExample:after{
    left: unset;
    right: 25px;
    transform:rotate(9deg);
}
</style>
                        
                        <div id="fancyShadowExample">
                            <span>Example of fancy shadow</span>
                        </div>
                        <div class="alert-dark alert">
<pre>
div{
    position:relative;
    width: 150px;
    height:250px;
    background-color:#ebebeb;
}
div:before,div:after{
    position:absolute;
    content:'';
    width: 75px;
    height:20px;
    -webkit-box-shadow: 0px 25px 36px 15px rgba(0,0,0,0.36); 
    box-shadow: 0px 10px 36px 15px rgba(0,0,0,0.36);
    bottom:10px;
    left: 25px;
    transform:rotate(-9deg;);
}
div:after{
    left: unset;
    right: 25px;
    transform:rotate(9deg;);
}
div:hover:before{visiblity:visible;}
</pre>
</div>

                        
                        `,


                        `
                        An information box:

                        <style>
                        #information-ex{
                            margin:30px;
                            width: 250px;
                            position:relative;
                            background-color: rgb(200,200,255);
                            border-left:medium blue solid;
                            border-radius: 5px;
                            padding:10px;
                            padding-left: 50px;
                        }
                        #information-ex:before{
                            position:absolute;
                            width: 30px;
                            height:30px;
                            content:'!';
                            line-height:30px;
                            text-align:center;
                            background-color:blue;
                            color:white;
                            top:10px;
                            left:10px;
                            z-index:2;
                            border-radius:50%;
                            
                        }
                    </style>
                    <div id="information-ex">
                        <span>This box uses before element to display "!"</span>
                    </div>
                        <div class="alert-dark alert">
<pre>

&lt;style>
div{
    width: 250px;
    position:relative;
    background-color: rgb(200,200,255);
    border-left:medium blue solid;
    border-radius: 5px;
    padding:10px;
    padding-left: 50px;
}
div:before{
    position:absolute;
    width: 30px;
    height:30px;
    content:'!';
    line-height:30px;
    text-align:center;
    background-color:blue;
    color:white;
    top:10px;
    left:10px;
    z-index:2;
    border-radius:50%;
}
&lt;/style>
&lt;div>Info box&lt;/div>
</pre>                        
                        </div>

                        `,
                        `Pseudo elements may be used to cerate different shapes with only CSS. Here is an example:

                        <style>
                        #heart{
                            margin: 30px;
                            position:relative;
                            width: 50px;
                            height: 50px;
                            background-color:red;
                            transform:rotate(45deg);
                        }
                        #heart:before,#heart:after{
                            width:50px;
                            height:50px;
                            background-color:red;
                            position:absolute;
                            border-radius:50%;
                            content:'';
                        }
                        #heart:before{
                            left:-50%;
                        }
                        #heart:after{
                            top:-50%;
                        }

                    </style>
                    <div id="heart"></div>
                        <div class="alert-dark alert">
<pre>
&lt;style>
#heart{
    position:relative;
    width: 50px;
    height: 50px;
    background-color:red;
    transform:rotate(45deg);
}
#heart:before,#heart:after{
    width:50px;
    height:50px;
    background-color:red;
    position:absolute;
    border-radius:50%;
    content:'';
}
#heart:before{
    left:-50%;
}
#heart:after{
    top:-50%;
}

&lt;/style>
&lt;div id="heart">&lt;/div>
</pre>                        
                        </div>

                        `,
                        `Or a speach bubble:

                        </div>
                        <style>
                        #speachBubbleEx{
                            margin: 30px;
                            width: 150px;
                            height: 80px;
                            display:flex;
                            align-items: center;
                            justify-content: center;
                            padding:10px;
                            background-color: #ededed;
                            border-radius:10px;
                            position:relative;
                        }
                        #speachBubbleEx:before{
                            position:absolute;
                            content:'';
                            width: 0;
                            height: 0;
                            border-right: 30px solid #ededed;
                            border-top: 15px solid transparent;
                            border-bottom: 15px solid transparent;
                            top: 10px;
                            left: -30px;
                        }
                        </style>
                        <div id="speachBubbleEx"> I say...</div>
                        <div class="alert-dark alert">
<pre>
&lt;style>
#speachBubbleEx{
    width: 150px;
    height: 80px;
    display:flex;
    align-items: center;
    justify-content: center;
    padding:10px;
    background-color: #ededed;
    border-radius:10px;
    position:relative;
}
#speachBubbleEx:before{
    position:absolute;
    content:'';
    width: 0;
    height: 0;
    border-right: 30px solid #ededed;
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
    top: 10px;
    left: -30px;
}
&lt;/style>
&lt;div id="speachBubbleEx"> I say...&lt;/div>
</pre>


                        `
                        ,
                        `Pseudo elements with keyframes animation may be used for a winding effect, where 
                        and element is constatnly winded in one direction (please see my notePad linker for example)`,
                        `Pseudo elements may be used for aligning purposes`
                    
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
                    content:'cssportal',
                    href: 'https://www.cssportal.com/css3-shapes/',
                    description:'More only css shapes examples'
                },
                
            ]
        }
    ]
};

export default function getPseudoElementData(){
    return data;
}