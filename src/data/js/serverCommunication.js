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
                    `<code>www.some-page.pl</code> is server/host name. This will be send to DNS server to extract IP from it,`,
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
                {
                    elementType:'Paragraph',
                    content:`
                    HTTP supports a banch of request methods:
                    `
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        `<code>GET</code>: a method capable of only fetching data from a server,`,
                        `<code>PUT</code>: update an existing resource, or create a new resource and add data to it, if
                        resource does not exist,`,
                        `<code>POST</code> creates a new resource and adds data to it. Difference between POST and PUT is,
                        that POST is designed to always create a new resource and add data, where is PUT is designed to 
                        update data, and creates a resource if needed. So if resource exists PUT is the right method,`,
                        `<code>HEAD</code> fetches only resource metadata, so no content, no body. May be used to peep if 
                        a resource is worth downloading or to allow a user to decide if it is worth downloading,`,
                        `<code>DELETE</code> deletes a specified resource,`,
                        `<code>CONNECT</code> is for creating a tunnel to the server identified by the target resource,`,
                        `<code>OPTIONS</code> is for describing communication options for the target resource,`,
                        `<code>TRACE</code> message loop-back test along the path of the target resource,`,
                        `<code>PATCH</code> partial modificatoins to a resource.`
                    ]
                    
                },
                {
                    elementType:'Headline-3',
                    content:'Responses'
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        `<strong>103</strong>`,
                        `<strong>201: Created</strong>: as a response to POST or some PUT, 
                            resource was created as a result`,
                        `<strong>203 Non-Authoritive Information</strong>: server got a third-party data copy. Case of 200 OK,`,
                        `<strong>303 See other</strong>: server wants client to get request resource at another URI wit 
                        GET,`,
                        `<strong>304 Not modified</strong>: Resource was not modified, so client should user cached version,`,
                        `<strong>400 Bad request</strong>: server could not understand the request due to invalid syntax,`,
                        `<strong>401 Unauthorized</strong>: Client must authenticate to get the requested response, client identity
                        is not known to a server,`,
                        `<strong>403 Forbidden</strong>: Clients identity is known to a server and client has no access rights,`,
                        `<strong>404 Not found</strong>: Resource not exists. Server may chose to hide its topology by sending a 
                        403 - forbidden instead. This is most used and known code. It is good to design a custom page to 
                        display this error, and give possiblities/existing redirections there. If a static server is used, 
                        then a <code>404.html</code> page may be placed in base folder, and it will be loaded when needed,`,
                        `<strong>405: Method not allowed</strong>: method is known to a server, but not allowed for the resource,
                        for example the DELETE method may be forbidden to use on a specific resournce,`,
                        `<strong>408 Request Timeout</storng> server would like to close unused connection,`,
                        `<strong>409 Conflict</strong> request is in conflict with the current server state,`,
                        `<strong>410 Gone</strong> resource is gone, so cached data should be removed, API should not be used anymore,`,
                        `<strong>418 I'm a teapot</strong> The server refuses the attempt to brew coffee with a teapot. This is aprils fool month
                        1998 joke :), but it really exists in standard,`,
                        `<strong>429 Too many requests</stron>: client send too many requests in too short ammount of time,`,
                        `<strong>451 Unavailable For legal reasons</strong>: page may be censored,`,
                        `<strong>500 Internal server error</strong>: server encountered a situation it does not know how to handle`,
                        `<strong>501 Not Implemented</strong>: server has no support for this method,`,
                        `<strong>502 Bad Gateway</strong>: server working as a gateway got invalid response,`,
                        `<strong>503 Service unavailable: </strong>: server cannot handle a request at the moment, as it is 
                         in maitenance or is overloaded. Some frilendly page should be displayed at this moment`,
                        `<strong>504 Gateway Timeout</strong>: server acting as a gateway did not get a response in expected time,`,
                        `<strong>508 Loop detected</strong>: Server went into an infinite loop while processing the request,`,
                        `<strong>511 Network authentication required</strong>: Client needs to authenticate to gain network access,`,
                    ]
                },
                {
                    elementType: 'Paragraph',
                    content: `There are much more resopnses, and above list is just a snippet. To see all available request
                    please go to the reference section`
                }
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
                        and make things a lot more complicated. It is not important from client side what sort
                        of communication is used. Both http and https will be handled in the same way.
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
                    elementType:'Headline-3',
                    content:'WebSocket'
                },
                {
                    elementType:'Paragraph',
                    content:`
                        Enables establishing a full-duplex connection stream between a client and a server.
                        Ws protocol is platform independant, but in this case client is the browser. WebSocket
                        provides:
                    `
                },
                {
                    elementType:'UnsignedList',
                    content:[
                    `Low latancy in both directions,`,
                    `Interoperability with HTTP,`,
                    `Message oriented communication,`,
                    `Same origin policy enforcement`
                    ]
                },
                {
                    elementType:'Paragraph',
                    content:`
                        Sample server side snippet:
                    `
                },
                {
                    elementType:'Code',
                    content:`
<pre>
const WebSocketServer = require('ws').Server
const wss = new WebSocketServer({ port: 8081 });
wss.on('connection', ((ws) =&gt; {
ws.on('message', (message) =&gt; {
console.log(\`received: \${message}\`);
});
ws.on('end', () =&gt; {
console.log('Connection terminated.');
});
ws.send('Data from server');
}));
</pre>                        
                    `
                },
                {
                    elementType:'Paragraph',
                    content:`
                        And a client side snippet:
                    `
                },
                {
                    elementType:'Code',
                    content:`
<pre>
var ws = new WebSocket("ws://127.0.0.1:8081");
ws.onopen = function (event) {
console.log('Connection oppened');
ws.send("Data from client");
};
ws.onerror = function (err) {
console.log('error: ', err);
}
ws.onmessage = function (event) {
console.log(event.data);
};
ws.onclose = function() {
console.log("Connection closed");
}
</pre>                        
                    `
                },
                {
                    elementType:'Headline-3',
                    content:'SSE or Server Send Events'
                },
                {
                    elementType:'Paragraph',
                    content:`
                        An event based low latancy one way connection communication technology. Allows server to update data 
                        on client side. No possibility to send data back to server. If needed other server-client 
                        communication means may be used. Hmm... Better using web-socket then, as it provides 
                        bi-directional communication? Not quite, as SSE provides some unique features, like automatic reconnection,
                        event ids and ability to send arbitrary events.
                    `
                },
                {
                    elementType:'Paragraph',
                    content:`
                        Example usege on client side:
                    `
                },
                {
                    elementType:'Code',
                    content:`
<pre>
const eventSource = new EventSource("//someApi.com/example.php", {withCredentioas: true});
eventSource.onmessage = function(event){
    let elementToBeUpdated = document.getElementById('to-be-updated-id');
    elementToBeUpdated.innerText = event.data;
}
</pre>                        
                    `
                },
                {
                    elementType:'Paragraph',
                    content:`
                        And thats it. Data will be updated in this element automatically. No need to worry about it.
                    `
                },
                {
                    elementType:'Headline-3',
                    content:'XMLHttpRequest'
                },
                {
                    elementType:'Paragraph',
                    content:`
                        XMLHttpRequest enables browser to script data transfer via JS. It may be used to serve not 
                        only XML, but also JSON for instance. XMLHttpRequest should be used asynchronously, not to 
                        block side interactions, but most simple usege would be:
                    `
                },
                {
                    elementType:'Code',
                    content:`
<pre>
var req = new XMLHttpRequest();
req.open('GET', 'http://some-example.com/', false); // false -> not async
req.send(null);
if(req.status == 200)
  dump(req.responseText);
}
</pre>                        
                    `
                },
                {
                    elementType:'Paragraph',
                    content:`
                        XMLHttpRequest should be used with an async function, so page is not blocked with request:
                    `
                },
                {
                    elementType:'Code',
                    content:`
<pre>
var req = new XMLHttpRequest();
req.open('GET', 'http://some-example.com/', true); // true -> an async request
req.onreadystatechange = function(asyncEvent) {
    if(req.readyState == 4) {
        if(req.status == 200) dump(req.responseText);
        else console.error('An error with side loading occured');
    }
}
req.send(null);

</pre>                        
                    `
                },
                {
                    elementType:'Paragraph',
                    content:`
                        There is a set of properties, event handlers and methods that can be used with XMLHttpRequest:
                    `
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        `<code>onprogress = function f(event)</code>: this is an attribute, that should have a function set to it. This 
                        function takes an event, and this event has properties <code>event.position</code> for
                        indicating how much data is already downloaded, and <code>event.totalSize</code> to state
                        how much data has to be downloaded.`,
                        `<code>onerror = function f(event)</code>: for handling an error, <code>e.target.status</code>
                        indicates a HTTP status of error,`,
                        `<code>onabort</code> function that will be called if reequest is cancelled by the user,`,
                        `<code>onload</code>: will be called when the request is successfully completed,`,
                        `<code>onreadystatechange</code>: an event handler called whenever the readyState attribute changes,`,
                        `<code>onloadend = function f(event)</code>: when load ends`,
                        `<code>ontimeout = function f(event)</code>: when response does not meet time constraints`,
                        `<code>overrideMimeType(newMimeType)</code>: used to force a new mime type on handled document,`,
                        `<code>readyState</code>: 
                            <ul>
                                <li><strong>0: UNSET</strong> no open() method called yet,</li>
                                <li><strong>1: OPENED</strong> open() was called already,</li>
                                <li><strong>2: HEADERS_RECEIVED</strong></li>
                                <li><strong>3: LOADING</strong></li> downloading, responseText holds partial data,</li>
                                <li><strong>4: DONE</strong></li> The operation is complete</li>
                            <ul>
                        `,
                        `<code>upload</code> a property returning a <code>XMLHttpRequestUpload</code> object allowing an user
                        to monitor upload process progress. Has similar to <code>XMLHttpRequest</code> event handlers:
                        <code>onabort</code>, <code>onerror</code>, <code>onloadend</code>, <code>onloadstart</code>,
                        <code>onprogress</code>, <code>ontimeout</code>`,
                        `<code>setRequestHeader()</code> for setting a custom HTTP request header <b>before</b> sending it,`,
                        `<code>getResponseHeader()</code> for getting a response header from server,`,
                        `<code>abort()</code> for aborting already opened request,`
                    ]
                },
                {
                    elementType: 'NoteWarning',
                    content: `
                        There is a maximum default number of XMLHttpRequest connections that may be established at the time.
                        This is sed by default to 2, and is browser instance dependant. So user may change this, but a 
                        page developer may not. This may be changed in firefox in <code>about:config</code> in address bar
                        and <code>network.http.max-persistent-connections-per-server</code>. In chrome it is a lot more 
                        complicated, as this will force to build a custom version of the browser form the source code
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
                {
                    elementType:'Link',
                    content:'Developer mozilla',
                    href: 'https://developer.mozilla.org/pl/docs/Web/API/XMLHttpRequest',
                    description:'XMLHttpRequest description'
                },
                {
                    elementType:'Link',
                    content:'Developer mozilla',
                    href: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status',
                    description:'HTTP statuses'
                },
            ]
        }
    ]
};

export default function getJSServerCommunicationData(){
    return data;
}