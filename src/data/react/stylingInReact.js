
let data =     {
    summary: 'styling react',
    title: 'styling react',
    searchKeywords:`
        react styling module css scss
    `,
    cathegory: 'react',
    content: [
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline',
                    content:'Styling in react'
                },

                {
                    elementType: 'Paragraph',
                    content: `
                    `
                },

                {
                    elementType: 'NoteWarning',
                    content: `
                    It is recommended that stylings in components do not interact, so no single css file 
                    is recommended, but rather a separate styling for each component. In this case 
                    css preprocessors are not that usefull.
                    `
                },


                {
                    elementType: 'ListOfContent',
                    content: [
                        {id: 'inlineStyling', title: 'Inline'},
                        {id: 'stylesheet', title: 'A stylesheet'},
                        {id: 'cssModules', title: 'CSS modules'},
                        {id: 'preprocesors', title: 'Preprocesors'},
                        {id: 'cssReset', title: 'Reset'},
                        {id: 'cssPostProcessing', title: 'Postprocessing'},
                    ]
                },

                {
                    elementType:'Headline-3',
                    content:'<span id="inlineStyling">Inline</span>'
                },
                {
                    elementType: 'UnsignedList',
                    content: [
                        `Easy to do from inside a component,`,
                        `Good practice to add inline styles in another file,`,
                        `Styles to be added inline is an object. Properties are cammel case,`,
                        `Good habit to put each component in a separate folder, even exports in such folder may
                        be handled with an <code>index.js</code>`
                    ]
                },
                {
                    elementType: 'Code',
                    content: `
                    Example file system:
<pre>
app
 src
  components
    _tests_
     MyButton.js
     ...
    MyButton
      MyButton.js
      styles.js
      styles.css
      index.js
    MyInput
      MyInput.js
      styles.js
      index.js
    User
      User.js
      index.js
    ...
  context
    User
      index.js // here for example useUserState and provide an user context in the
        // branch 
    
</pre>                    
                    `
                },
                {
                    elementType: 'Code',
                    content: `
<pre>
import React, { Component } from 'react';
import styles from './MyButtonStyles.js'; // for webpack bundler
// may be named as Styles

class Button extends Component {
    constructor(props){
        this.onclickHandler = props.onclickHandler;
        this.label = props.label;
    }
    render() {
        return (
            <div styles = {styles}
              onClick = {this.onclickHandler}
              >
              {this.label}
            </div>
        )
    }
}
</pre>
                    `
                },
                {
                    elementType: 'Code',
                    content: `
                    And in the MyButtonStyles.js
<pre>
const styles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
    color: 'white'
}

export default styles;
</pre>                    
                    `
                },

                {
                    elementType:'Headline-3',
                    content:'<span id="stylesheet">A stylesheet</span>'
                },

                {
                    elementType: 'UnsignedList',
                    content: [
                        `Can be handled in webpack, and only with webpack,`,
                        `All styles are put into a single .css file after app build anyway,`,
                        `No isolation, definitions from many files will clash,`,
                        `Only good for expressing that a component depends on the specific file,`
                    ]
                },
                {
                    elementType: 'Code',
                    content: `
<pre>
import React, { Component } from 'react';
import './MyButton.css'; // for webpack bundler
// defines the MyButton class

class Button extends Component {
    constructor(props){
        this.onclickHandler = props.onclickHandler;
        this.label = props.label;
    }
    render() {
        return (
            <div ClassName = 'MyButton'
              onClick = {this.onclickHandler}
              >
              {this.label}
            </div>
        )
    }
}
</pre>         
                    `
                },


                {
                    elementType:'Headline-3',
                    content:'<span id="cssModules">CSS modules</span>'
                },
                {
                    elementType: 'UnsignedList',
                    content: [
                        `A module is created by just the naming convension: <code>[name].module.css</code>,`,
                        `Automaticly creates unique class names for the class names from the module (like in Angular),`,
                        `&lt;link> stylesheets are supported, just the <code>.module.css</code> indicates that this will be a module,`,
                    ]
                },
                {
                    elementType: 'Code',
                    content: `
                    A module MyButton.module.css definition
<pre>
.bg{
   background-color: white; 
}
.fg {
    color: gray;
}
</pre>                    
                    `
                },

                {
                    elementType: 'Code',
                    content: `
                    A plane file MyButton.css definition
<pre>
.bg{
   background-color: black; 
}
.fg {
    color: red;
}
</pre>                    
                    `
                },

                {
                    elementType: 'Code',
                    content: `
<pre>
import React, { Component } from 'react';
import moduleStyles from './MyButton.module.css'
import './MyButton.css'; 
// defines the MyButton class

class Button extends Component {
    constructor(props){
        this.onclickHandler = props.onclickHandler;
        this.label = props.label;
    }
    render() {
        return (
            <div ClassName = {
                moduleStyles.bg, // definition will be taken from the 
                        // MyButton.module.css, no clash with the bg from the 
                        // MyButton.css
                fg // this definition will be taken from the MyButton.css
            }
              onClick = {this.onclickHandler}
              >
              {this.label}
            </div>
        )
    }
}
</pre>         
                    `
                },
                {
                    elementType: 'Code',
                    content: `
                    The output
<pre>
&lt;div class = "bg_at9i6s93 fg">....
</pre>         
                    `
                },

                {
                    elementType:'Headline-3',
                    content:'<span id="preprocesors">Preprocesors</span>'
                },

                {
                    elementType: 'UnsignedList',
                    content: [
                        `It is recommended to use a style per component, not a single css file for the whole application,`,
                        `Just install a preprocessor <code>npm install sass</code> and name files with <code>.scss</code>
                        extention, and change necessary imports to the <code>.scss</code> extention,`,
                        `some files may be <code>.scss</code> and others <code>.css</code>,`,
                        `<code>@use 'styles/_colors.scss'</code> may be used for variabe sharing,`,
                        `<code>@use '~nprogress/nprogres'</code> may be used to resolve from <code>node_modules</code>,`,
                        `To use imports relative to a specified paht, an <code>.env</code> file specified in the 
                        root directory of a project may be used. In this file <code>SASS_PATH</code> has to ge defined,`
                    ]
                },
                {
                    elementType: 'Code',
                    content: [
                        `
<pre>
SASS_PATH=path1:path2:path3
</pre>                     
or for Windows:
<pre>
SASS_PATH=path1<b>;</b>path2<b>;</b>path3
</pre>   
                        `
                    ]
                },



                {
                    elementType:'Headline-3',
                    content:'<span id="cssReset">CSS reset</span>'
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    Browsers come with their default styling for not styled pages. If this styling present in browsers
                    is not covered by custom code, the look of the page may not be as desired. 
                    There are 2 known ways to deal with this matter:
                    `
                },
                {
                    elementType: 'UnsignedList',
                    content: [
                        `Normalization: make stylings look the same way in each browser,`,
                        `Reset: clearing all stylings for every browsers`
                    ]
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    In react:
                    `
                },
                {
                    elementType: 'Code',
                    content: `
<pre>
@import-normalize /*bring in mormalize.css styles*/
</pre>                    
                    `
                },
                {
                    elementType: 'NoteWarning',
                    content: `
                    Above may be used in each <code>.css</code> file, however it is <b>highly recommended</b>
                    to put it to the <code>index.css</code> in the root folder, as it is easier to find it.
                    `
                },


                {
                    elementType:'Headline-3',
                    content:'<span id="cssPostProcessing">Postprocessing</span>'
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    At the build stage of the application the css is minified, so it is converted to a single line of code, so it is shorter and 
                    downloads faster. Moreover the browser suppert is added according to the <code>browserlist</code> field from the 
                    <code>package.json<code> file.
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
                    content:'create-react-app',
                    href: 'https://create-react-app.dev/docs/',
                    description:'Tutorial'
                },
                {
                    elementType:'Link',
                    content:'Browserlist on github',
                    href: 'https://github.com/browserslist/browserslist#readme',
                    description:'Project web-side'
                },
            ]
        }
    ]
};

export default function getStylingReactData(){
    return data;
}

