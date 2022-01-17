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
                    elementType: 'Paragraph',
                    content: `
                    `
                },


                {
                    elementType:'SmallHeadline',
                    content:''
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        
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