import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blogs = () => {
    useTitle('Blogs')
    return (
        <div className="container py-5">
            <div>
                <h2>Difference between SQL and NoSQL?</h2>
                <p>SQL is a decades-old method for accessing relational databases, and most who work with databases are familiar with it. As unstructured data, amounts of storage and processing power and types of analytics have changed over the years, however, we've seen different database technologies become available that are a better fit for newer types of use cases. These databases are commonly called NoSQL.SQL and NoSQL differ in whether they are relational (SQL) or non-relational (NoSQL), whether their schemas are predefined or dynamic, how they scale, the type of data they include and whether they are more fit for multi-row transactions or unstructured data.</p>
            </div>
            <div>
                <h2>What is JWT, and how does it work?</h2>
                <p>JWT or JSON Web Tokens are the new industry standards for securing APIs to and from the server.Now that we understand JSON, which is the data text format, the token is the string of data that usually represents the sender's identity. The servers use it to validate the sender's identity.JWT, or JSON Web Token, is an open standard(RFC 7519) set of claims to share security information or authorization/authentication requests between a client and a server. Each JWT contains encoded JSON objects. JWTs are signed using a cryptographic algorithm by the token's issuer to ensure that No one could alter the claims after the token is issued and later can be used by the receiving party to verify the token.</p>
            </div>
            <div>
                <h2>What is the difference between javascript and NodeJS?</h2>
                <p>JavaScript is a programming language that is lightweight, object-oriented, and implements a standard called ECMAScript. It was developed in 1995. Node.js is a runtime environment for executing JavaScript code outside the browser. It was created in 2009.
                    Every browser has a JavaSript engine that converts JavaScript code into machine code that the computer can understand. It is a scripting language. Different browsers use different JavaScript engines: MS Edge uses Chakra, Chrome uses V8, Firefox uses SpiderMonkey and Safari uses JavaScriptCore. The V8 JavaScript engine built for Google Chrome is the fastest, just-in-time compiler with no interpreter.Node.js is a JavaScript runtime built on Chrome's VS JavaScript engine. It is a JavaScript running on the server. JavaScript runtime environment is just the environment your applications are running on.Node.js is neither a framework nor a language or library. It is simply a JavaScript runtime environment. Node.js is used when you're dealing with I/O bound, data streaming, and real-time chat applications. </p>
            </div>
            <div>
                <h2>How does NodeJS handle multiple requests at the same time?</h2>
                <p>Multiple requests can be received at the same time, which is referred to as in-flight. It is referred to as cooperative multi-tasking in some cultures. In some cases, Node.js internals use threads. Asynchronous file I/O, for example, employs native threads. Threading in nodes.js internals does not affect Javascript execution directly. Javascript does not have a memory allocation of any kind, and only one thread can run at the same time. An async operation can modify state conditions that are at the very heart of the process.Node is the status quo. It can process up to 1000 requests per second, and its speeds are limited to the maximum of your network card. It should be noted that this method does not connect clients at the same time. It has the ability to handle up to 10000 simultaneous clients without issue.</p>
            </div>
        </div>
    );
};

export default Blogs;