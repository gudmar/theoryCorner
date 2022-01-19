// Spell checking done partialy

// Workers global scope is different than document or window global scope

// Props
// WorkerGlobalScope.navigator 
// WorkerGlobalSocpe.self - the worker global socpe
// WorkerGlobalScope.location - URL and origin info
//
// CatcheStorage - an API to work with catche data
// indexedDB - ReadOnly RO = IDBFactory storing much data
// 
// Events
// error or WorkerGlobalScope.onerror]
// offline WorderGlobalScope.onoffline
// online WorkerGlobalScope.ononline

// Methods

// WorkerGlobalScope.importScripts() - for importing scripts that will be used in this web worker
// atob = encode STRING to BASE64 // not web worker specific
// btoa = decode STRING from BASE64 // not web worker specific

// DedicatedWorkerGloblScope 
//   .name - name worker was given optionaly, debugging
//   .self - inherited
//   .location - inherited
//   .navigator - inherited

// DedicatedWorkerGlobalScope events
//   .onmessage
//   .onmessageerror

// DedicatedWorkerGlobalScope methods
//   .close() - self.close() - discard all tasks, close worker
//   .postMessage(data): in webWorker, in onmessage(e) handler replies to the page

let data =     {
    summary: 'Web worker',
    title: 'Web worker',
    searchKeywords:`web worker
    `,
    cathegory: 'js',
    content: [
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline',
                    content:'Web workers'
                },

                {
                    elementType: 'NoteWarning',
                    content: `
                    For security reasons web workers stick to the same origin policy. So for practicing with a web 
                    worker, the server is needed. The simple http one will do, but it is important, that the local
                    file system is not good enough.
                    `
                },


                {
                    elementType: 'NoteWarning',
                    content: `
                    The web worker is a separate file that has to be imported to the main html file.
                    `
                },


                {
                    elementType: 'Paragraph',
                    content: `
                    JS is mainly a single threaded runtime language. If there is a server request, there is an asynchronous
                    mechanism launched. Not a new thread started to resolve the request. However, there is one feature letting
                    it possible to launch an additional script in the next thread. This additional script, that is launched 
                    in a next thread is called a <i>web worker</i>. It has no access to the DOM, and its scope is different, but
                    it has access to some APIs like:
                    `
                },
                {
                    elementType: 'UnsignedList',
                    content: [
                        'Crypto','Cache API', 'Console API', 'CustomEvent', 'Encoding API (TextEncoder, TextDecoder)',
                        'Fetch API', 'FileReader', 'IndexedDB', 'Promise', 'Server-sent events', 'URL API', 'WebSocket',
                        'XMLHttpRequest'
                    ]
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    Web workers are good for time consuming computations, that would block the main browser thread, or 
                    for serving the web content from the cache, when user is offline, and updating cache if the user is online.
                    There are three types of web-workers:
                    `
                },
                {
                    elementType: 'UnsignedList',
                    content: [
                        'Dedicated worker','Shared worker', 'Service Worker'
                    ]
                },



                {
                    elementType:'SmallHeadline',
                    content:'Communicatoin'
                },

                {
                    elementType:'Paragraph',
                    content:`Communication between the main thread and a worker is implemented with:`
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        `<code>workerInstance.postMessage(messageContent)</code>: from the main thread`,
                        `<code>postMessage(messageContent)</code>: from the worker`,
                        `<code>workerInstance.onmessage = callback()</code>: from the main thread,`,
                        `<code>onmessage = function(){}</code> from the worker thread`
                    ]
                },


                // Props
// WorkerGlobalScope.navigator 
// WorkerGlobalSocpe.self - the worker global socpe
// WorkerGlobalScope.location - URL and origin info
//
// CatcheStorage - an API to work with catche data
// indexedDB - ReadOnly RO = IDBFactory storing much data
// 
// Events
// error or WorkerGlobalScope.onerror]
// offline WorderGlobalScope.onoffline
// online WorkerGlobalScope.ononline

// Methods

// WorkerGlobalScope.importScripts() - for importing scripts that will be used in this web worker
// atob = encode STRING to BASE64 // not web worker specific
// btoa = decode STRING from BASE64 // not web worker specific

// DedicatedWorkerGloblScope 
//   .name - name worker was given optionaly, debugging
//   .self - inherited
//   .location - inherited
//   .navigator - inherited

// DedicatedWorkerGlobalScope events
//   .onmessage
//   .onmessageerror

// DedicatedWorkerGlobalScope methods
//   .close() - self.close() - discard all tasks, close worker
//   .postMessage(data): in webWorker, in onmessage(e) handler replies to the page

                    {
                        elementType:'SmallHeadline',
                        content:'Types'
                    },

                    {
                        elementType:'UnsignedList',
                        content:[
                            `<code>WorkerGlobalSocpe</code>: an abstract scope, is used for inheritance purposes,`,
                            `<code>DedicatedWorkerGlobalScope</code>: a dedicated type, used only once and utilized, 
                            if usages of this worker overlap, then the last request will shadow previous ones,`,
                            `<code>ServiceWorkerGlobalSocpe</code>: this worker is dedicated to the native application
                            user exerience. When a user is online the service worker downloads data, sends them to be displayed
                            on the screen, and stores them in cache. If user is offline, data is displayed from the cache by
                            service worker.`,
                        ]
                    },


                    {
                        elementType:'SmallHeadline',
                        content:'Properties'
                    },

                    {
                        elementType:'UnsignedList',
                        content:[
                            `<strong><code>WorkerGlobalSocpe.self</code></strong>: This is the <code>this</code> sort of
                            keyword. <code>self</code> refers to the global scope of the worker,`,
                            `<code>WorkerGlobalSocpe.navigator</code>: This is the navigator data, related to data about 
                            the installed browser, operating system, etc...`,
                            `<code>WorkerGlobalSocpe.location</code>: this is for the URL parsing purposes. Knows properties like
                            <code>host</code>, <code>href</code>: direct link, <code>origin</code>: the same as the host,
                            <code>pathname</code>: the path to the current resource, <code>port</code>, <code>protocol</code>`
                        ]
                    },
                    {
                        elementType:'SmallHeadline',
                        content:'Events'
                    },

                    {
                        elementType:'UnsignedList',
                        content:[
                            `<code>onmessage</code>: the event launched in case there is a message passed from/to the
                            worker,`,
                            `<code>onerror</code>: the event triggered when there is an error`,
                            `<code>offline</code>: the event triggered when the device becomes offline,`,
                            `<code>online</code>: the event triggered when the device becomes online,`,
                        ]
                    },

// SPELLING checked until this point

                    {
                        elementType:'Headline-3',
                        content:'Dedicated worker'
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
                    content:'Developer mozilla',
                    href: 'https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Global_Objects/Proxy',
                    description:'Tutorial'
                },
            ]
        }
    ]
};

export default function getWebWorkerData(){
    return data;
}