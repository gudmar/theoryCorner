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
                        JS history started in 1996 with netscape. However before JS started becomming more popular
                        internet pages were build as static resources. There was a folder structure, and HTML files.
                        Pages were linked together with <code>a href</code> links. Today this approach is also 
                        possible, but with bigger than just a one html file they are not maintainable. That is why
                        there are other solutions. However serving static pages is still good enough for some 
                        simpler content, as JS and CSS files may be served this way. Moreover applicatoin may be 
                        build in a framework like Angular or with React and served as static files. The drwaback is 
                        however no server side, as server in this solution does not more than just serve ready files.
                        There is no way to store data on server or exchange it between clietn computers. 
                        I wrote a notePad application, that can store user notes on pages, that are then grouped in 
                        sheet components. Moreover this application has a build in calendar enabling to store and manage
                        events, and a feature allowing easy store and search user added links. Quite usable functionalities,
                        but this is just a static page, so user data may be saved to browser memory, or exported to a file.
                        This data will not be synchronized even between two browsers on the same machine.</br>
                        My notePad application uses routing system, so although it is a client site application, link in
                        browser address bar changes when user switches between linker, calendar and notePad. Such SPA applications
                        are capable of parsing queries passed with URL, so it may be difficult to say if this is really only
                        a static application.
                    `
                },
                {
                    elementType:'Paragraph',
                    content:`
                        So nowadays static servers may serve js, css and html files. They may also serve SPA. So 
                        only one HTML file is loaded, and changed with JS. Only drawback is no real server side support, as
                        server only sends files, and does not share client data.
                    `
                },
                {
                    elementType:'Paragraph',
                    content:`
                        <strong>SPA</strong>, or a single page application is a web page quite similar to native 
                        applications. Only one HTML file is uploaded form a server, and this HTML file is modified 
                        later on with JS, so DOM may be changed entirely. You want to send a friend a link directing to a 
                        certain location is SPA? This is possible thanks to described above routing mechanism. Even 
                        http queries may be passed with URL. Does this mean SPA is a static file page? Not at all. It may be,
                        but does not have to be. It is not efficient to download all data at once, as it will take ages and
                        some data may be even restricted. So SPA allows user login, and lazy loading (download content only
                        if it is needed). Mentioned Angular and React are good for creating such apps. SPA may be serverd as
                        a static content, but may also be an application that works dynamically.
                    `
                },
                {
                    elementType:'Paragraph',
                    content:`
                        So what does dynamic server do? Sometimes it may be difficult to see this from a client perspective,
                        as staticly served applicatoin may have lazy loaded <b>files<b> and respond to route queries. However 
                        word <i>files</i> is a key here. Dynamic server will respond to routes, and will not just serve 
                        whole files. It will serve data. So either ready HTML content, or data as for example json or XML, 
                        so client side may parse it and create some view content out of it. Server will make queries to 
                        data base, will make some calculations and send ready results, will make possible to identify a 
                        user and send data if the user is authorized to use this data, and will store data for the user, so it is 
                        available on other machine. In other words server gets an URI and responds to it with data, not just
                        with a static file. This is like working with an API.
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
                        HTTP has a serious drawback. Lets concidere user login:
                        <i>http://some-portal.pl/login?user=johnDoe&password=myPass11</i>.
                        After reading section about URL it is not hard to guess, that 
                        login is <i>johnDoe</i> and password is <i>myPass11</i>. So getting 
                        data passed with HTTP is not hard at all, and data passed with HTTP
                        is not safe at all. That is why HTTP is wrapped in the TLS protocol to encript it 
                        and make things a lot more complicated.
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