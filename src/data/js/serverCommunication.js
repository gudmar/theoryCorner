let data =     {
    summary: 'server communication',
    title: 'server communication',
    searchKeywords:`XMLHttpRequest SSE Server-Send Event WebSocket 
    HTTP HTTPS GET POST PUT HEAD DELETE TRACE OPTIONS CONNECT PATCH SSL TSL`,
    cathegory: 'js',
    content: [
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline',
                    content:'Server side communication'
                },

                {
                    elementType: 'Paragraph',
                    content: `
                    A pure front-end application might do some work, but it must be served in some way, however 
                    modern programming is cloud/web based, so there is a sort of a client side code and data 
                    is provided by a server. That is why understanding client-server side communication is necessary
                     `
                },
                {
                    elementType: 'Paragraph',
                    content: `
                    It is more and more difficult to find a web page based on HTTP, as due to security reasons 
                    we got a HTTPS era. However understanding HTTP is a must, as HTTPS = HTTP + TLS or SSL, in
                    other terms this is still HTTP, but wrapped in another protocol, Transport Layer Security (formerly
                    known as Secure Sockets Layer). In other words HTTP is wrapped in a secure protocol at another layer.
                    
                     `
                },

            ]
        },
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline-2',
                    content:'HTTP overwiev'
                },
                {
                    elementType:'UnsignedList',
                    content:[
                    `<strong>URI</strong>: Uniform Resource Indicator. URI = URN + URL,`,
                    `<strong>URL</strong>: Uniform Resource Locator, tels where a specific resource is located, does
                    not refere to it by the name. Example: <i>urn:isbn:0-486-27557-4</i>`,
                    `<storng>URN</strong>: Unifrom Resource Name, refers to the specific name of the resource, not 
                    telling mutch where to look for this resource,`,
                    `<strong>IRI</strong>: International Resource Identifier, extends URI with national languates other
                    then English. Can be used instead of URI or URL in applications supporting IRI.`,
                    `<strong>www</strong>: world wide web `
                    
                    ]
                },
                {
                    elementType:'Paragraph',
                    content:`
                        URI and URL are often used interchangebly, but they are not the same. Here we will concentrate on 
                        URL. Lets parse an example: 
                        <i><pre>http://www.some-page.pl:8080/catalog/some%20file?parameter1=value&\parameter2=val2#document_fragment</pre></i>
                    `
                },
                {
                    elementType:'UnsignedList',
                    content:[
                    `<code>http</code>: Hypertext transfer protocol, an application layer protocol (layer 7 of OSI, and layer 4 of TCP/IP model),
                    that is used to transfer documents as text,`,
                    `<code>www.some-page.pl<code> is server/host name. This will be send to DNS server to extract IP from it,`,
                    `<code>:8080</code> is a port number. As <code>www.some-page.pl</code> is a server location (like a city, street
                        and flat number), port is a concrete application address. Application query is addressed to listens to requests
                        on port 8080. This may be considered a certain person reachable under a city, street and number of flat address.`,
                    `<code>/catalog/some%20file</code> is a detailed resource location. Years ago (90s), when web pages were based on static model,
                    this was cathalog and a html file name. In present times this is just a route. This route might be resolved by a server,
                    but front end applications are also capable of resolving routes like this. URL accepts no spaces, so <code>%20</code> is 
                    URL encoded space symbol,`,
                    `<code>?</code> is a separator, dividing URL into location section and a query section,`,
                    `<code>parameter1=value</code> here we set the <code>parameter1</code> to <code>value</code>,`,
                    `<code>parameter2=val</code> here some parameter <code>parameter2</code> is set to value of <code>val</code>. Both
                    parameters are joined with a <code>&</code> separator,`,
                    `Query section between <code>?</code> and <code>#</code> indicate, that URL does not point to a static html file, but
                    to a resource route that is resolved dynamically,`,
                    `<code>#document_fragment</code> is a concrete document fragmet that browser will rewind to after DOM is displayed.
                    If someone is familiar with css selectors this may look familiar, as this is equal to <code>[attr=id]</code> selector,`,
                    `URL encoding is genius, as it is capable of encoding any data, including images.`
                    ]
                },
            ]
        },
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline-2',
                    content:'Static and dynamic'
                },
                {
                    elementType:'Paragraph',
                    content:`

                    `
                },
                {
                    elementType:'UnsignedList',
                    content:[
                    `
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
                    content:'HTTPS'
                },
                {
                    elementType:'Paragraph',
                    content:`

                    `
                },
                {
                    elementType:'UnsignedList',
                    content:[
                    `
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
                    content:'Communication methods'
                },
                {
                    elementType:'Paragraph',
                    content:`

                    `
                },
                {
                    elementType:'UnsignedList',
                    content:[
                    `
                    `
                    ]
                },
                {
                    elementType:'Code',
                    content:`
<pre>

</pre>                        
                    `
                        
                    
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
                    href: 'https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Client-Server_overview',
                    description:'Overwiev'
                },
                {
                    elementType:'Link',
                    content:'medium',
                    href: 'https://medium.com/@joekarlsson/complete-guide-to-node-client-server-communication-b156440c029',
                    description:'Guide to client server communication'
                },
                {
                    elementType:'Link',
                    content:'IBM',
                    href: 'https://www.ibm.com/docs/en/cics-ts/5.3?topic=concepts-components-url',
                    description:'The components of a URL'
                },
            ]
        }
    ]
};

export default function getJSServerCommunicationData(){
    return data;
}