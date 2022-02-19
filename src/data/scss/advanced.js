
let data =     {
    summary: 'Advanced',
    title: 'Advanced',
    searchKeywords:`

    `,
    cathegory: 'scss',
    content: [
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline',
                    content:'Advanced functions and mixins in scss'
                },

                {
                    elementType: 'ListOfContent',
                    content: [
                        {id: 'block-arbitrary', title: 'Mixins: hover'},
                        {id: 'mixins-arbitrary', title: 'Mixins: arbitrary arguments'},
                        {id: 'mixins-keyword', title: 'Mixings: arbitrary keyword arguments'},
                    ]
                },

                {
                    elementType: 'Headline-3',
                    content: `Mixins`
                },
                {
                    elementType:'HiddenCode',
                    content:[

                        {
                            info:`
                            <strong>Mixins: hover</code>: <code>@content</code> injects content.
                            `,
                            code:`
                            <pre>
@mixin hover {
    &not([disabled]):hover{
        @content
    }
}

.button {
    border: solid black thin;
    @include hover{
        cursor: pointer;
    }
}
                            </pre>
                            <div class="note">Result</div>
<pre>
.button{
    border: solid balck thin;
}
.button:not([disabled]):hover{
    cursor: pointer;
}
</pre>                            
                            `
                        },

                        {
                            info:`
                            <strong>Arbitrary arguments</code>
                            `,
                            code:`
                            <pre>
@mixin margin($paddingUnit, $selectors...) {
    @for $i from 0 to length($selectors...) {
        #(nth($selectors, $i + 1)) {
            position: relative;
            margin-left: $i * $paddingUnit;
        }
    }
}

@include margin(20px, "input.brand", "input.model", "input.ordererName")
                            </pre>
                            <div class="note">Will compile to </div>
<pre>
input.brand{
    position: relative; 
    margin-left: 0;
}
input.model{
    position: relative; 
    margin-left: 20px;
}

input.ordererName{
    position: relative; 
    margin-left: 40px;
}

</pre>                            
                            `
                        },



                        {
                            info:`
                            <strong>Arbitrary keyword arguments</code>
                            `,
                            code:`
<pre>
@use "sass:meta";
@mixin svg-insert($args...) {
    @debug meta.keywords($args);
    // (clock: '../assets/click.svb, arrow-left...)

    @each $name, $path in meta.keywords($args) {
        div.svg-#{$name}{
            background-image: url($name);
        }
    }
}

@include svg-insert(
    $clock: '../assets/clock.svg',
    $arrow-left: '../assets/arrL.svg',
    $arrow-right: '../assets/arrR.svg',
)
</pre>    
            <div class="note">Output would be</div>
<pre>
div.svg-clock {background-image: url('../assets/clock.svg')}
div.svg-arrow-left {background-image: url('../assets/arrL.svg')}
div.svg-arrow-right {background-image: url('../assets/arrR.svg')}
</pre>                                    
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
                    elementType:'Headline-3',
                    content:'Functions'
                },
                {
                    elementType:'Paragraph',
                    content:`
                    <code>@function <name> (<arguments...>) {...}</code> is a way to encapsulate complex operations.
                    Functions should:
                    `
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        `Always <code>@return</code> a value, or an expression evaluating to a value,`,
                        `Be clean functions: no state changing, though it is possible,`,
                        `May return early,`,
                        'May have a default argument,',
                        'May have keyworder arguments,',
                        `May have arbitrary arguments`,
                        `The statement <code>someFunction(args...)</code> may be used to turn the <code>args</code>
                        array into the arguments.`
                    ]
                },
                {
                    elementType:'Paragraph',
                    content:`
                    While working with functions some things should be taken into concideration:
                    `
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        `Dashes: '-' are equal to '_' underscores in the function naming convension. So: 
                        <code>some_function</code> is the same as <code>some-function</code>`,
                        `One must be very careful when writing function names, as every function, thats name 
                        is not found in the scope, is compiled as it was a pure <code>css</code> function.
                        This is to make sure a new release of scss is not needed everytime css creators come up with
                        some new invention.`,
                        `Css functions like <code>calc()</code> or <code>element()</code> have to be written 
                        as unquoted strings`
                    ]
                },
                {
                    elementType:'HiddenCode',
                    content:[

                        {
                            info:`
                            A function with default argument. Uses a build in <code>lightness</code> function.
                            Calculates the color of the font based on the color of the background
                            `,
                            code:`
                            <pre>
 @function getColor($_bg-color: gray){
    $output: #000;
    $lightness: lightness($_bg-color);
    @if $lightness < 50% {
        $output: #fff;
    }
    @return $output;
}                           
                            </pre>
                            `
                        },
                        {
                            info:`
                            Arbitrary arguments
                            `,
                            code:`
                            <pre>
 @function min($items...){
        $current: 10000000;
        @each $item in $items {
            @if $item < $current {
                $current: $item
            }
        }
    @return $item;

 }
                            </pre>
                            `
                        },
                        {
                            info:`
                            Keyworded arguments: what it is needed for?
                            `,
                            code:`
                            <pre>
 @function getColor($_bg-color: gray){
    $output: #000;
    $lightness: lightness($_bg-color);
    @if $lightness < 50% {
        $output: #fff;
    }
    @return $output;
}                           
                            </pre>
                            `
                        },
                    ]
                }


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
                    content:'Developer mozilla',
                    href: ' ',
                    description:'Tutorial'
                },
            ]
        }
    ]
};

export default function getAdvancedData(){
    return data;
}