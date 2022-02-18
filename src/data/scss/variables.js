
let data =     {
    summary: 'scss variables',
    title: 'Scss variables',
    searchKeywords:`
    !default scope shadow names _ - 
    `,
    cathegory: 'scss',
    content: [
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline',
                    content:'Variables in scss'
                },

                {
                    elementType: 'Paragraph',
                    content: `
                    Scss allows using variables. Nothing extraordinary as css allowed the same. However here
                    variables have some features that are worth learning about.
                    `
                },
                {
                    elementType:'Headline-3',
                    content:'Declaration'
                },

                {
                    elementType:'Code',
                    content:`
                    <div class="note">css</div>
                    <pre>
*{--some-color: red;}
// later

.div {color: var(--some-color;)}
                    </pre>

                    <div class="note">A variable in a preprocessor:</div>
<pre>
$variable:  red;
.div{
    color:  $variable;
}
</pre>

                    `
                },
                // {
                //     elementType:'NoteWarning',
                //     content:`
                //     <code>$my-some-variable</code> === <code>$my_some_variable</code>, as hyphends 
                //     <code>-</code> and underscores <code>_</code> are for historical reasons the same in sass.
                //     `
                // },

                {
                    elementType:'Headline-3',
                    content:'Some facts about variables'
                },
                {
                    elementType:'UnsignedList',
                    content:[
                    `<code>$my-some-variable</code> === <code>$my_some_variable</code>, as hyphends 
                    <code>-</code> and underscores <code>_</code> are for historical reasons the same in sass.`,
                    `build-in variables cannot be modified,`,
                    ]
                },



                {
                    elementType:'Headline-3',
                    content:'Default'
                },
                {
                    elementType:'Paragraph',
                    content:`
                    Variable has an assigned value when declared. But if someone creates a library, he/she may chose to 
                    alow a user to define prefered values for the variables. In this case a <code>!default</code>
                    keyword should be used:
                    `
                },

                {
                    elementType:'Code',
                    content:`
                    <div class="note">_buttonsLibrary.scss - the underscore informs scss that the file is a internal 
                    module, that will be imported by other scss files</div>
                    <pre>
$basic-bg-color: #aaa !default;

@function getColor($bg-color){
    $output: #000;
    $lightness: lightness($bg-color);
    @if $lightness < 50% {
        $output: #fff;
    }
    @return $output;
}

@mixin color-theme{
    background-color: red;
    border-color: darken($color: red, $amount: 20);
    color: getColor(red);
}

.color-element {
    @include rectangle;
    @include red-theme;
}
                    </pre>
                    <div class="note">And now for the usage of above module</div>
                    <pre>
@use "./colorTheme" with ($bg-color: green);   

@mixin rectangle{
    position: relative;
    width: $item-width;
    height: $item-height;
    border: transparent medium solid;
    border-radius: $item-radius;
}

.green-theme {
    @include rectangle;
    @include colorTheme.get-default-color;
}
// now the created .green-theme element will be green, despite 
// the defined default color in the module is red
                    </pre>                    
                    `
                },

                {
                    elementType:'Headline-3',
                    content:'Scope'
                },
                {
                    elementType:'HiddenCode',
                    content:[
                        {
                            info:`
                            Variables declared in the global scope of the style sheet are global variables, and may be 
                        accessed from anywhere in the module <b>after</b> their declaration,
                            `,
                            code:`
<pre>
@debug $some-var; // not exists
$some-var: 5; // declared

@mixedin{
    color: $some-var; // possible
}
</pre>                            
                            `
                        },
                        {
                            info:`
                            A variable declared in a block scope is local, and may be accessed inside the block it was 
                        declared in only after it was declared,
                            `,
                            code:`
<pre>
$global: $local; // not possible, $local unknown

@mixedin{
    background-color: $local; // not possible, not defined
    $local: #aaa;
    color: $local; // possible
}
</pre>                            
                            `
                        },
                        {
                            info:`
                            If a variable of the same name was declared in the global scope, and the local scope, 
                        then inside the local scope the local variable will <b>shadow</b> the global one, <b>but only</b>
                        after the global variable was shadowed. Before asignment it will be equal to the one in the 
                        global scope.
                            `,
                            code:`
<pre>
$global: $local; // not possible, $local unknown

@mixedin{
    background-color: $local; // not possible, not defined
    $local: #aaa;
    color: $local; // possible
}
</pre>                            
                            `
                        },
                        {
                            info:`
                            An <code>@if</code> statement may <b>assign</b> a value to the variable. 
                        <b>No possibility to declare a variable inside @if block</b>. Values are assigned to the 
                        variables in the flow control scope (@if statements for example). They are not shadowed.
                            `,
                            code:`
<pre>
$global: #aaa;
$bg: #bbb !default;

@if $global == #aaa {
    // here $bg is still #bbb
    $bg = #fff;
    $not-possible = $222; // not possible, this variable was not
    //defined earlier
}
@debug $global;
// $global is #bbb;
</pre>                            
                            `
                        },
                        {
                            info:`
                            <code>meta.variable-exists()</code> function may be used to check if a variable exists in
                        a local scope,
                            `,
                            code:`
<pre>
$global: #aaa;
@mixin something{
    @if meta.variable-exists($global){
        @debug 'variable exists'
    } @else {
        @debug 'variabel does not exist'
    }
}
</pre>                            
                            `
                        },
                        {
                            info:`
                                Variable names may not be used with the interpolation, as it would make harder 
                                to tell what variable was defined where. It is possible hovewer, to 
                                use a <code>map</code>
                            `,
                            code:`
<pre>
@use "sass:map";
$colors: (
    'success': green,
    'info': blue,
    'warning': orange,
);
.alert{
    background-color: map.get($colors, 'info');
    @if lightness(map.get($colors, 'info')) > 50% {
        color: black;
    } @else {
        color:white;
    }
}
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
                    content:'http://saas-lang',
                    href: 'https://sass-lang.com/documentation/variables#example-7-sass',
                    description:'Tutorial'
                },
            ]
        }
    ]
};

export default function getVariablesData(){
    return data;
}