// SPELL CHECKED, CORRECT!
let data =     {
    summary: 'iframe',
    title: 'iframe',
    searchKeywords:`
    `,
    cathegory: 'html',
    content: [
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline',
                    content:'iframe'
                },

                {
                    elementType: 'Paragraph',
                    content: `
                    An <code>iframe</code> is an element allowing to insert a foreign content into a web page. 
                    Even whole web page may be inserted. Context of the iframe is separated from 
                    the page. Iframes are useful for:
                    `
                },


                {
                    elementType:'UnsignedList',
                    content:[
                        `embedding a youtube content`,
                        `embedding a tweet button`,
                        `embedding advertisements,`,
                        `like buttons, posts, comments from the facebook,`,
                        `google maps,`
                    ]
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    There are limitations regarding iframe usage:
                    `
                },


                {
                    elementType:'UnsignedList',
                    content:[
                        `The same origin policy, unless a server delivering content allows to embed some content into an
                        iframe`,
                        `no DOM interactions from outside of an iframe,`,
                        `embedding advertisements,`,
                        `Posting messages to an iframe possible,`,
                    ]
                },

                {
                    elementType: 'SmallHeadline',
                    content: `
                    Attributes
                    `
                },
                {
                    elementType: 'UnsignedList',
                    content: [
                        `<code>width</code>: width of the iframe`,
                        `<code>height</code>: height of the iframe,`,
                        `<code>allow</code>: 
                        a string with listed features that embedded page is allowed to use on host page. For example:
                        <code>camera</code>, <code>gyroscope</code>, <code>microphone</code>, <code>autoplay</code>`,
                        `<code>loading</code>: <code>eager</code> or <code>lazy</code>. If eager, then will 
                        load immediately after page is loaded, if lazy, then will load only if iframe is visible,`,
                        `<code>name</code>: can bind with a <code>target</code> attribute of an <code>input</code>,
                        <code>button</code>, <code>form</code>, <code>a</code>, etc.`,
                        `<code>title</code>: a meta-data tag, not visible in the iframe or UI, but important for screen readers,`,
                        `<code>sandbox</code>: if empty, all restrictions are applied to the embedded page. Sandbox attribute
                        is for losing some restrictions: 
                        <ul>
                        <li><code>allow-forms</code></li>
                        <li><code>allow-modals</code></li>
                        <li><code>allow-orientation-lock</code></li>
                        <li><code>allow-popups</code></li>
                        <li><code>allow-same-origin</code>: if not used embedded element is treated as if it was from the different origin,</li>
                        <li><code>allow-scripts</code> allows to run scripts,</li>

                        </ul>
                        `,
                        `<code>src</code> an url with page to embed,`,
                        `<code>srcdoc</code> overrides <code>src</code>, for the html content to be displayed in the iframe,`,

                    ]
                },

                {
                    elementType: 'Headline-3',
                    content: `Examples`
                },
                {
                    elementType: 'SmallHeadline',
                    content: `Embedding youtube content`
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    <iframe width="400" height="300" src="https://www.youtube.com/embed/t8ljODATmqI"></iframe>
                    `
                },
                {
                    elementType: 'Code',
                    content: `
                    <div class="note">
                    The original address to the film is:
                    </div>
<pre>
https://www.youtube.com/watch?v=t8ljODATmqI
</pre>
<div class="note">
Just by changing the <code>watch?v</code> part of the link to <code>embed/</code> we get the link that needs to be 
pasted as a source to the iframe
</div>
<pre>
&lt;iframe src="https://www.youtube.com/embed/t8ljODATmqI">&lt;/iframe>
</pre>
<div class="note note-danger">
Pasting any link will not work, as server must allow fetching content from the different origin
</div>

                    `
                },

                {
                    elementType: 'SmallHeadline',
                    content: `Embedding google map content`
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    <iframe width="400" height="300" src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11783.642591293943!2d16.627615215541418!3d51.61944093373232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4705823ece32600d%3A0xdb8dea3805d97882!2zV2llcnVzem93aWNlLCDFmmx1YsOzdw!5e0!3m2!1spl!2spl!4v1643801533121!5m2!1spl!2spl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"'></iframe>
                    `
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    Some services have a comfortable tool for getting a link that may be pasted as an iframe src.
                    For getting a link from google maps:          
                    `
                },
                {
                    elementType: 'UnsignedList',
                    content: [
                        `Go to the google maps page,`,
                        `Search a place using the search box,`,
                        `Find the <i>share</i> button, and click it,`,
                        `Select a <q>place map</q> tab, and there will be a ready iframe text to copy.`

                    ]
                },

                {
                    elementType: 'Code',
                    content: `
<pre>
&lt;iframe width="400" height="300" src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11783.642591293943!2d16.627615215541418!3d51.61944093373232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4705823ece32600d%3A0xdb8dea3805d97882!2zV2llcnVzem93aWNlLCDFmmx1YsOzdw!5e0!3m2!1spl!2spl!4v1643801533121!5m2!1spl!2spl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"'></iframe>
</pre>
                    `
                },
                {
                    elementType: 'SmallHeadline',
                    content: `Facebook`
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    The problem with the facebook like buttons and pluggins is that to see them, user must be
                    logged into their Facebook account, and have provided consent to the "App and Website Cookies". That
                    is why there is no working example for the facebook,
                    ` 
                },                
                {
                    elementType: 'Paragraph',
                    content: `
                    There is a <a target="_blank" href="https://developers.facebook.com/docs/plugins/page-plugin/"> facebook 
                    developers tool</a> for generating iframes for liking buttons, comments, videos, etc.
                    Just find a tab, insert link, click <i>Get code</i> button and select an iframe tab.
                    `
                },

                {
                    elementType: 'SmallHeadline',
                    content: `Twitter`
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    <iframe height="30" src="https://platform.twitter.com/widgets/tweet_button.html"></iframe>
                    ` 
                },                
                {
                    elementType: 'Code',
                    content: `
<pre>
&lt;iframe src="https://platform.twitter.com/widgets/tweet_button.html">&lt;/iframe>
<div class="note">
It may be useful to set height attribute in this case, as iframe will have default 150px height, and this is 
too much for the twitter button.
</div>
</pre>
                    `
                },


                {
                    elementType: 'Headline-3',
                    content: `Content manipulation within iframe`
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    It is not possible to get into the iframe with own css or js and manipulate it in any way.
                    However, it is possible to post a message to the iframe. Ofcourse the iframe will have to 
                    have an implemented behavior for our message.
                    `
                },
                {
                    elementType: 'SmallHeadline',
                    content: `
                    From the host to the iframe communication
                    `
                },
                {
                    elementType: 'UnsignedList',
                    content: [
                        `<code>document.querySelector('iframe').contentWindow</code> to get access to the iframes
                        window object,`,
                        `<code>document.querySelector('iframe').contentDocument</code> to get access to the iframes
                        document object,`,
                        `<code>e.source</code> to react to the message received from the iframe`,
                        `No direct manipulation on iframe elements allowed`,
                        `<code>window.onmessage</code> event handler for listening to messages from iframes,`,
                        `<code>e.origin</code> may be used to tell apart iframes inside an event listener.`
                    ]
                },
                {
                    elementType: 'SmallHeadline',
                    content: `
                    From the iframe to the host communication
                    `
                },
                {
                    elementType: 'UnsignedList',
                    content: [
                        `<code>window.parent.postMessage</code> to send message to the parent,`,
                        `<code>window.onmessage</code> event handler for listening to messages 
                        posted by the host element,`,
                        `<code>e.source.postMessage()</code> may be used to answer to messages form the parent.`
                    ]
                },
                {
                    elementType: 'Code',
                    content: `
                    <div class="note">
                    Iframe host:
                    </div>
<pre>
let iframe = document.querySelector('iframe');
function sendDataToIframe(frame, msg){
    frame.contentWindow.postMessage(msg);
}
sendDataToIframe(iframe, 'Content added');

window.onmessage = ((e)=>{
    // receiving messages from iframe
    if (e.origin === window.location.origin){
        //do something with e.data
        console.log('Message from iframe received')    
    }
    if (e.origin === 'https://www...'){
        e.source.postMessage('Message received');
    }    
})
</pre>         

                    <div class="note">
                    Inside an iframe
                    </div>
<pre>
window.onmessage((e)=>{
    if (event.origin === window.location.origin){
        let item = document.createElement('span');
        item.innerHTML = e.data;
        document.querySelector('body').appendChild(item)
        e.source.postMessage('message received')
    }
})
function informHost(msg){
    window.parent.postMessage(msg);
}
function infromHost('pass information to the parent');

</pre> 
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
                    content:'developer mozilla',
                    href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe',
                    description:'Iframe description'
                },
                {
                    elementType:'Link',
                    content:'developer mozilla',
                    href: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Feature_Policy',
                    description:'Feature policy'
                },
                {
                    elementType:'Link',
                    content:'seancdavis',
                    href: 'https://www.seancdavis.com/posts/manipulate-iframe-content/',
                    description:'posting messages to an iframe'
                },
                {
                    elementType:'Link',
                    content:'Blog rocket',
                    href: 'https://blog.logrocket.com/best-practices-react-iframes/',
                    description:'Article about iFrames'
                },
                {
                    elementType:'Link',
                    content:'Facebook social pluggins',
                    href: 'https://developers.facebook.com/docs/plugins',
                    description:'Tutorial'
                },
            ]
        }
    ]
};

export default function getIframeData(){
    return data;
}