
let data =     {
    summary: '@ (at-rules)',
    title: '@ (at-rules)',
    searchKeywords:`
    @ at at-rules @use @forward @import @mixin @include @function @extend @error @warn @debug @at-root
    `,
    cathegory: 'scss',
    content: [
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline',
                    content:'@ at-rules'
                },

                {
                    elementType: 'Paragraph',
                    content: `
                    `
                },

                {
                    elementType:'HiddenCode',
                    content:[
                        {
                            info:`
                            <code>@use</code>: imports mixins, functions, variables from other sheets. Sheet imported that 
                            way is called a module.<br>
                            <b>Use</b> must be at the first place of the file, before anything else is used. 
                            Even when the imported file name starts with an underscore (a library naming convension), 
                            the undesrscore should be not used with the underscore.
                            `,
                            code:`
                            <div class="note">A moudle _colorTheme.scss</div>
<pre>
$bg-color: red !default;

@function getColor($_bg-color){
    $output: #000;
    $lightness: lightness($_bg-color);
    @if $lightness < 50% {
        $output: #fff;
    }
    @return $output;
}

@mixin get-theme($theme-color){
    background-color: $theme-color;
    border-color: darken($color: $theme-color, $amount: 20);
    color: getColor($theme-color);
}

@mixin get-default-color{
    background-color: $bg-color;
    border-color: darken($color: $bg-color, $amount: 20);
    color: getColor($bg-color);    
}
</pre>                      
                        <div class="note">And now main file</div>     
<pre>
@use "./colorTheme" with ($bg-color: #44ff44);
// below usage of the <code>@use</code> with an alias 
@use "./colorTheme" as c

$item-width: 50px;
$item-height: 50px;
$item-radius: 5px;

@mixin rectangle{
    position: relative;
    width: $item-width;
    height: $item-height;
    border: transparent medium solid;
    border-radius: $item-radius;
}

.red-element {
    @include rectangle;
    @include colorTheme.get-theme(#ff9999)

    @include c.get-theme(#ff9999) // this would work
}
</pre>
                            `
                        },
                        {
                            info:`
                            <code>@import</code> This at-rule imports the file given as an argument and makes it globaly available.
                            Carefulness is required, as there is a possiblity to override some variables. Moreover there is no
                            possiblity to track where certaing variables come from. <br>
                            <code>@import</code> in css makes a http request to fetch the imported file. This may not be always 
                            desired. In scss <code>@import</code> is resolved mainly in the compilation phase. So all files 
                            are glued together and send in one http request. The exceptions are when <code>import</code> is with
                            a <code>url()</code>, or with <code>http</code> in the path or a file that is imported has a 
                            <code>.css</code> extention. This is not the case if the imported file is a css, but the extention is omitted.

                            `,
                            code:`
                            <pre>
@import 'someChild' // imports a _someChild.scss, binded during compilation,
        // variables, mixins, functions from someChild are imported and 
        // overwritte the variables from the file that impotrs it
@import 'someChild.css' // Not during compilation phase, makes a HTTP request,
@import url('someChild'); // makes a HTTP request, not resolved during compilation,
@import 'https://...' // makes a HTTPS reuquest, not resolved during compilation
                            </pre>
                            `
                        },
                        {
                            info:`
                            <code>@use</code>: an at-rule used to fetch content of another file. Helps to organise code and 
                            track where certain variables come from, because each variable has to be used with the namespace.
                            Each file using a certain resource needs to call <code>@use</code> on its own.
                            Alows to import resource <code>with</code> some custom settings, and with an <code>as</code>
                            alias. <storng>@use has to be the first thing in a file</strong>

                            `,
                            code:`
                            <div class="note">Source file _colorTheme.scss</div>
                            <pre>
$bg-color: red !default;

@function getColor($_bg-color){
    $output: #000;
    $lightness: lightness($_bg-color);
    @if $lightness < 50% {
        $output: #fff;
    }
    @return $output;
}

@mixin get-theme($theme-color){
    background-color: $theme-color;
    border-color: darken($color: $theme-color, $amount: 20);
    color: getColor($theme-color);
}

@mixin get-default-color{
    background-color: $bg-color;
    border-color: darken($color: $bg-color, $amount: 20);
    color: getColor($bg-color);    
}
                            </pre>
                            <div class="note">Destination file named someComponent.scss</div>
<pre>
@use "./colorTheme" with ($bg-color: #44ff44);

$item-width: 50px;
$item-height: 50px;
$item-radius: 5px;

@mixin rectangle{
    position: relative;
    width: $item-width;
    height: $item-height;
    border: transparent medium solid;
    border-radius: $item-radius;
}

.green-theme {
    @include rectangle();
    @include colorTheme.get-default-color;
     // with the name space colorTheme
}
</pre>                            
                        <div class="note">Usage with <code>as</code> keyword</div>
                        <pre>
@use './colorTheme' as c
...
...
.some-class{
    color: c.getColor(red);
}
                        </pre>
                            `
                        },
                        {
                            info:`
                            <code>@forward</code> is used to make a forwarded file mixins, functions and variables available
                            anywhere in the files that use the file what forwards the code.
                            This might be used to create a 'helper' file that forwards some content, and then the file may
                            be imported with the <code>use</code> keyword in other files.<br>
                            <code>@forward</code> may be customized using <code>with</code> keyword, some 
                            module members might be made hidden with the <code>hidden</code> property, 
                            or there might be created a namespace using <code>as</code> keyword.

                            `,
                            code:`
                            <div class="note">Suppose there is a file structure:</code>
<pre>
/project
|-/exports
|--_colors.scss
|--_fonts.scss
|--_variables.scss
|-app-form.scss
|-app-menu.scss
</pre>          
                            <div class="note">There is a need to import all the exports folder in the app-form and app-menu. Lets create a helper file:</div>
<pre>
/project
|-/exports
|--_colors.scss
|--_fonts.scss
|--_variables.scss
|--_helper.scss
|-app-form.scss
|-app-menu.scss
</pre>         
            <div class="note">The helper files content</div>
<pre>
@forward './colors';
@forward './fonts';
@forward './variables';

// or

@forward './colors' as color;
@forward './fonts' as fonts;
@forward './variables as variables';

</pre>                               
            <div class="note">Both: app-form and app-menu would have to start with:</div>
<pre>
@use './exports/helper'
// now the _colors, _fonts, _variables are available in both files
</pre>    


<div class="note">Forward may be used with namespaces</div>
<pre>
@forward './colors' as color;
@forward './fonts' as fonts;
@forward './variables' as variables;

</pre>                               
            <div class="note">Both: app-form and app-menu would have to start with:</div>
<pre>
@use './exports/helper'
// now the _colors, _fonts, _variables are available in both files
selector {
    color: color.getColor(red);
}
</pre>  

                            `                      
                        },
                        {
                            info:`
                            <code>@mixin</code> is a way to get some styling into a block, that may be included
                            with <code>@include</code> rule to many style blocks. This is like a procedure in pascal.
                            May take arguments, but does not return a thing:

                            `,
                            code: `
                            <pre>
@mixin center {
    display: felx;
    align-content: center;
    justify-content: center;
    align-items: center;
}                            
@mixin button-with-color($color: gray){
    @include center;
    border-radius: 5px;
    background-color: $color;
    color: black;
    @if lightmess($color) < 50%{
        color: white;
    }
}

.button-red{
    @include: button-with-color(red)
}
.button-green{
    @include: button-with-color(green)
}


                            </pre>
                            `
                        },
                        {
                            info: `<code>@function</code> is a way to encapsulate complex operations on SassScript values.
                            It must <code>@return</code> a number, should be a clear function, can take keywordes arguments,
                            can take a list of arguments. The dash and underscore are treated equaly in the function name.
                            Please refer to the advanced section to learn more about functions.
                            `,
                            code: `
                            <pre>
@function getColor($_bg-color: gray){
    $output: #000;
    $lightness: lightness($_bg-color);
    @if $lightness < 50% {
        $output: #fff;
    }
    @return $output;
}                            

@function strength($val){
    $output = 1;
    @for $number from 1 through $val {
        $output = $output * $number;
    }
}
                            </pre>
                            `
                        },
                        {
                            info:`<code>@extend</code> introduces the inheritance mechanism. The extended block 
                            gets all properties from the selector it inherits. Extensions only affect stylesheets 
                            upstream: meaning, that in some sheet a selector is extended, this selector will be
                            affected by this extention only in stylesheet it was extended, and stylesheets 
                            imported by this stylesheet`,
                            code:`
                            <div class="note">In this case the background would be white, as extend is shadowed.
                            <pre>
.toExtend{
    background-color: violet;

}
.extended{
    @include rectangle();
    background-color: white;
    @extend .toExtend;
}                            
                            </pre>
                            `
                        },
                        {
                            info:`<code>@error</code>: the way to inform developer, that during compilation something 
                            went wrong`,
                            code:`
                            <pre>
@if $width > 500px {
    @error "Width is greater than 
}
                            </pre>
                            `
                        },
                        {
                            info:`<code>@warn</code>: the way to inform developer, that during compilation something 
                            went wrong`,
                            code:`
                            <pre>
@if $width > 500px {
    @warn "Width is greater than 
}

@function depraciated(args...){
    @warn "This function was depraciated, please use the nonDepraciatedFunction"
    @return nonDepraciatedFunction(args...)
}
                            </pre>
                            `
                        },
                        {
                            info:`<code>@debug</code>: A way to inform the developer about something during the 
                            compilation process. Has no impact on the compilation outcome.`,
                            code:`
                            <pre>
@debug "inform abut sometihing"
                            </pre>
                            `
                        },
                        {
                            info:`<code>@at-root</code>: makes the decorated selector migrate into the DOM-root
                            element, instead of staying in the element it was defined in,`,
                            code:`
                            <pre>
@debug "inform abut sometihing"
                            </pre>
                            `
                        },
                        {
                            info:`<code>@if <expression> @else <expression></code>: 
                            Runs a statement if the condition is true,`,
                            code:`
                            <pre>
@if $bg-color == green {
    $color = white;
} @else if bg-color == white {
    $color = black;
} @ else {
    $color = yellow;
}
                            </pre>
                            `
                        },
                        {
                            info:`<code>@each <variable> in <expression></code>: 
                            makes it possible to iterate through a collection. May be iterater througn a 
                            keyworded values`,
                            code:`
                            <pre>
$colors: red, green, blue;

@each $color in $colors {
    .button-#{$color} {
        background-color: $color;
    }
}
                            </pre>
                            <div class="note">Compiles to </div>
<pre>
.button-red{background-colro: red;};
.button-green{background-colro: green;};
.button-blue{background-colro: blue;};
</pre>

                                <div class="note">Keyworder @each</div>
                                <pre>
$pictures: ("eye": "\f112", "start": "\f12e", "stop": "\f12f");
@each $name, $symbol in $pictures {
    .button-#{$name}:after{content: $symbol;}
}
</pre>
        <div class="note">output</div>

<pre>
.button-red{background-colro: red;};
.button-green{background-colro: green;};
.button-blue{background-colro: blue;};
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
                    content:'Developer mozilla',
                    href: ' ',
                    description:'Tutorial'
                },
            ]
        }
    ]
};

export default function getAtRulesData(){
    return data;
}