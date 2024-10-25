 # HISTORY::
 - Traditional => html, css, js, jquery, bootstrap
 - Modern => react, vue, material ui, nodejs, angular
 - Browser gives us a visual representation of textual content. Behind the scene, browser makes a tree like a structure like head, body etc. Like in a format of parent and childeren. Parent html tag have two child head and body. Head have meta tag and title as a child and body have our various content like heading, paragraph and so on. this is a dom. When ever user changes a code, it reflects in browser as a visual content, while adding content, the whole dom gets gets reloaded and inject the new content in a dom tree. It again read the whole dom tree. This is a reloading of dom. Site gets slow when there is a fast dom manipulaton.

 # React:::
 - Frontend library of javascript.
 - In react, there is a html looks like code but this is not html, it is jsx.
 - There is a concept of virtual dom in react. First time maa developer ley code lekhera browser maa heryo vani directly dekhinxa. Aba second time code maa change garera feri browser maa herna khojyo vani first virtual dom banxa.
# Working of React::::
```text
 - For example first maa <h1>Rajan</h1> lekhim tyo code browser maa herna lagim vani tyo directly browser maa dekhinxa. first time content browser maa directly dekhyo tei bela aauta VDOM banxa. tyo VDOM first empty hunxa. 
 - aba tyo empty VDOM maa <h1>Rajan</h1> lagera halxa. aba next time <h2>Bhandari</h2> code lekhim ra tyo update vako code herna khojim vani tyo code directly browser maa dekhidaina. tes bela feri new virtual dom create hunxa.
 -  lets say VDOM1 banyo. Aba tyo VDOM1 maa <h1>Rajan</h1>,<h2>Bhandari<h2> dui otai basxa. Aba VDOM ra VDOM1 vayo . Aba yaha VDOM1 ra VDOM maa subtraction hunxa. 
 - VDOM1-VDOM1 = ? yesari. Aba subtraction maa VDOM maa <h1> xa ra VDOM1 maa <h1> ra <h2> xa. subtraction hudaa dubai maa vako <h1> subtract hunxa ra <h2> bachxa. Tyo remaining <h2> balla gayera browser maa dekhinxa. 

 - Same like that if a person create <h3>Age</h3> again, one new VDOM2 created. Inside VDOM2, there is <h1>, <h2>, <h3> . But inside VDOM1, there is <h1>,<h2>. So, VDOM3-VDOM2 = <h3>. 
 - Then this final h3 is shows up in a browser. Yo process ley gardaa pahile browser maa dekhi sakeko chij kei pani movement/refresh/reinject jastaa kuraharu vako xaina sirf j change gareko ho tyo matra change/reflect/inject/load vai rako xa.

> Diffing and Reconcilation::::
 - Aba important kura ::: jaha jaha yo subtraction vai rako xa virtual dom bich, tyo kura lai nai DIFFING vaninxa. Ani tyo subtraction bata j result aako xa teslai browser maa dekhauni/inject garni process lai reconcilation vaninxa.

 > Aba question k vandaa jaba <h1> ko kaam vai sakyo ra tyo browser maa pani show vai sakyo, tespaxi <h2> ra <h3> ko palo aayo haina !! jaba VDOM ko kaam sakiyo ra VDOM1 ra VDOM2 ko kaam aayo, tyo agadi ko VDOM chai k hunxa???

 - Tyo VDOM chai garbage collector bata clean hunxa, yo kaam chai browser ley garxa. just like GIGO of Java. Simply, Garbaage collector ley dustbin maa haldinxa.
```
 # Serverside and Clientside rendering:::
 - Nodejs and ejs makes serverside rendering both are rendered through server.It helps in SEO. Severside rendering technology is very much fast in initial request but got slow in subsequent request. CSR is better in subsequent request.

 - But Nodejs and React makes a clientside rendering. If is not good in SEO as serverside rendering. It is not so fast as SSR in initial request but it is better in subsequent request.

 - Nextjs is a framework of React. Nextjs comes in serverside.

 - Vite(meaning fast) is for small projects but CRA is for large scale websites like ERP, SAAS etc. Vite is very fast than CRA. Vite also can be used in Angular Framework.

 > Setup of React App:
 - npm create vite@latest and follow the command. Select react if you are creating a site using react.
 - While choosing we can see various options like javascript, typescript like this . There is another option like: javascript + SWC. The SWC is a Rust compiler.

 - React maa kei kura change garera teslai browser maa herna ko lagi baar baar refresh garnu pardaina. Automatically update hunxa, this type of feature is provided by HRM(Hot Module Replacement.)

 > Understanding JSX::
 - JSX is a advance varsion of javascript(javascript and XML).Browser doesn't understand JSX. So, there is a use of transpiler called BABEL.(babeljs.io). Goto babeljs.io and show the example:
 ```javascript
 //creating a tag through js like this::We write <p>in jsx but behind the scene babel do this to create p.
    const div = document.createElement("div")
        const para = document.createElement("p")
        para.innerText = "Hello World"
        div.appendChild(para);
        document.body.appendChild(div);
```
-Babel does like this:::
```javascript
React.createElement(
  "div", 
  { className: "this is div" }, 
  React.createElement("p", null, "Hello World") // type, props, children
);
```

> Compilation and Transpilation:
- Compilation: Like transforming a boy to a girl, it represents a fundamental change—high-level code is converted into a completely different form, such as machine code, making it executable by a computer. one environment to another like converting nepali language to english in a way that maintains its meaning and context is compilation.

- Transpilation: Like water turning to ice, it is still the same substance but in a different form—code is transformed from one high-level language to another, preserving much of its original structure and function, just like water and ice are both H₂O.Transpilation, like converting JSX to JavaScript, is the process of transforming code into a version or language that can be understood by a target environment. Since browsers don't understand JSX, a transpiler like Babel converts it to plain JavaScript, which browsers can execute.

> Argument and Parameter:
- Argument: An argument is the actual value or variable passed to a function when it is called.

- Parameter: A parameter is the variable defined in a function's declaration that receives the argument during the function call.

> Webpack:
- Webpack takes your HTML, CSS, and JavaScript files and bundles them into a single file (or multiple files). It then hands this bundled file to the browser, which injects it into the DOM to display the content on the web page. This process optimizes loading and manages dependencies efficiently. CRA is whole bundle by webpack but vite is server in demand/ serve on demand.

> Component:
- the function which returns jsx is called component. The reusable piece of code is also called component. We cannot call it a function.
- <></>:: These are fragments.
- We can write one child inside return but if we want to write many code inside return then, we should use fragments.

> IMPORTANT::: we should write jsx inside the return and all other js codes inside the function and out of the return. Jsx return bhitra lekhni ani js ko code chai function bhitra ra return bahira hannu paryo.

# IMPORTANT::::
- We should name every file in a pascal case or the first letter of a word should be capital.
- Like Button.jsx. First letter of a word capital letter maa hunai paryo.


# PROPS:::EXAMPLE:::
- Same component xa tara different content xa vani tyo component maa props pass garni paryo.

- For example:: Hamilai site maa 3 ota button banauna parni xa, First button component banayera teslai app.jsx maa inport garera tyaa button show garxam. Aba 3 otaa button maa content different xa like login, logout and register. Tei vayera props pass garnu paryo. Aba app.jsx maa content = "login" etc. banauni ani teslai uta button component maa props bata inport garni vanau na. Ani tyo button bhitra function maa aako props lai button maa gayera {props.content} vanera lekhni.

- Let's say Button.jsx:
``` javascript
import React from "react";

const Button = (props) => {
  return (
    <>
      <button>{props.content}</button>
    </>
  );
};
export default Button;

//OR BY DESTRUCTURING:::::::::

 const Button = ({content}) => {
   return (
     <>
       <button>{content}</button>
     </>
   )
 }

export default Button
```



- This is App.jsx:::
``` javascript
import React from 'react'
import Button from './Button'
const App = () => {
  return (
    <>
    <Button content = "Login"/>
    <Button content = "Register"/>
    <Button content = "Logout"/>
    </>
  )
}
export default App
```


# passing multiple props::::::
- This is Button.jsx::::
```javascript
import PropTypes from "prop-types"

// if the prop is passed, it use that prop and if the prop is not passed it use that default. hamile tala ko defaultprop pani use garna sakim tara react ley future maa hamile yo default prop lai hatauna sakxam vanera warning dinxa.
const Button = ({content = "default", arkoContent= "123"}) => {
    return (
      <>
        <button>{content}</button>
        <button>{arkoContent}</button>
      </>
    )
  }
//   Button.defaultProps = { //if app.jsx bata kei props aayena vani default props pani rakhna milyo like:
//     content : "default",
//     arkoContent : 123
//   }
  //this is from npm i prop-types(natra mildaina garna)
  Button.propTypes = { //if mero PropTypes maa arkoContent vanni kunai prop aako xa vani tesko datatype chai string hunu parxa vaneko.yesle sidai error ta didaina tara console maa warning dinxa.
    arkoContent : PropTypes.string.isRequired
  }
  export default Button

```

- This is App.jsx::::
```javascript
import React from 'react'
import Button from './Button'
const App = () => {
  return (
    <>
    <Button content = "Login" arkoContent = "123Login"/>
    <Button content = "Register" arkoContent = {123}/>
    <Button content = "Logout" arkoContent = "logout123"/>
    </>
  )
}

export default App

```

# Props drilling:
- Example: Jastai hamile before example maa app.jsx(parent) bata button(child) maa content pass gareko thiyau. tesai gari app bata button maa, feri button bata aarko file maa, feri tyo file bata aarko file maa like that. Simply:: 5th floor bata 1st floor maa data pathauda 5th bata 4th , 4th bata 3rd, 3rd bata 2nd, 2nd bata first maa pathako jasto vayo. Yeso garda props dherai nesting hunxa. Yo kura lai hatauna ko lagi hami state management use garxau.


# Prop-types package:
- npm i prop-types
- prop-types is a package for runtime type checking in React components. It helps ensure that components receive the correct types of props.

```jsx
import PropTypes from 'prop-types';

Button.propTypes = { contents: PropTypes.array.isRequired };
//This enforces that the contents prop passed to the Button component must be an array. See in above example.

```


# Routing::::::
- By default, it didn't give a routing, we need react-router-dom which is third party library.
- npm i react-router-dom.
```javascript
// This is older version of Routing.
//Inside app.jsx:
import React from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<h1>Hello About Page</h1>}/>
        <Route path='/contact' element={<h1>Hello contact Page</h1>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
```


# Routing New Method::
> This is the new method of routing using browser router.

- This is App.jsx::::
 ```javascript
import React from 'react'
import {RouterProvider } from 'react-router-dom'
import router from './routes'

const App = () => {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
 ```
- This is routes.jsx:::
```javascript
import {createBrowserRouter} from 'react-router-dom'
import Home from '../Home'
import About from './About'

const router = createBrowserRouter([
    {
        path : '/',
        element : <Home/>
    },
    {
        path : '/about',
        element : <About/>
    }
])
export default router
```

# HOOKS IN REACT:::::
- Hooks is basically a function which are already made by the react developer.

# USESTATE HOOK:::
```javascript
  // import React from 'react'
// const App = () => {
//   let count = 0;
//   const increaseCount = () => {
//     count++;
//   }
//   return (
//     <>
//       <h1>{count}</h1>
//       <button onClick={increaseCount}>+</button>
//     </>
//   )
// }
// export default App
// this above works but result is shown in console only. This code didn't render the result in the site because the variable used here didn't re-render the result and didn't inject the result in the site. Whenever any changes happen and the changes should be shown in the display is the process of re-rendering. SO, there is a problem and to remove the problem, react made a usestate variable. Now, the usestate variable can re-render and solve this problem.

// import React, { useState } from 'react'
// const App = () => {
//   //  yo code ley just aauta count name ko bhada banaidiyo jasma initial value 0 xa. aba malai 0 ko thau maa kei kura update garera 1 banauna paryo vani setCount use garxam. Aba setCount(1) vanera tyo bhado lai dinxam ra tya value update vayera 1 hunxa.
//   const [first, setfirst] = useState()
//   console.log(useState());
//   return (
//     <>
//       <h1>Hello</h1>
//       <button>+</button>
//     </>
//   )
//   }
// export default App
// //Now we can see this code in console, it returns one array and inside that it gives 2 items, first is undefined and second is a function. If we put 0 in usestate, it returns 0 and one function.

// import React, { useState } from 'react'

// const App = () => {
//   var resultReturnedfromUsestate = useState(0)
//   var firstIndexValue = resultReturnedfromUsestate[0] //accessing 0th index
//   var secondIndexFunction = resultReturnedfromUsestate[1]//accessing 1st index
//   return (
//     <>
//       <h1>{firstIndexValue}</h1>
//       <button onClick={()=>secondIndexFunction(firstIndexValue + 1)}>+</button>  {/* Second index aauta function ho, tes bhitra firstIndexValue maa 1 add gareko. */}
//     </>
//   )
// }

// export default App

//So, we can descructure it to make a code efficient::
import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>{count}</h1>  {/* count ko value 0 xa. */}
      <button onClick={()=>{
          setCount(count + 1)
        }}>+</button>  {/* setcount aauta function ho tes maa count + 1 gareko means 0+1 = 1 */}
      <button onClick={()=>{
          setCount(count - 1)
        }}>-</button>  {/* setcount aauta function ho tes maa count + 1 gareko means 0+1 = 1 */}
    </>
  )
}

export default App

```

# USEEFFECT HOOK::::
- Mainly three type of use effect.
> First Type of useeffect.:::::::::::
```javascript
  // first type of use effect:::

import React, { useEffect } from 'react'

const App = () => {
  useEffect(() => {
    console.log("Useeffect was Called"); // this specific code is called when the user first visit the site. Means:: yo app.jsx page jaba first time browser maa inject vayo teti bela nai call vayo.
  }, []) //this empty array [] is called dependency array.
  return (
    <>
    <h1>Learning USE EFFECT</h1>
    </>
  )
}
export default App

//this type of use effect is mostly used. Aba yo type ko kaam vaneko jaba koi user first time site maa visit garxa, website ko domain hamera enter garxa ra first time website maa enter garxa, taba hamile useeffect use garera backend bata data fetch garera loop lagayera tyo data lai site maa first enter maa render garni/ show garna use hunxa.This is because you have passed an empty dependency array ([]). When the dependency array is empty, it signals React to execute the effect only on the initial render.
```
> Second Type of useeffect::::::::::
```javascript

  // second type of use effect:::
//yo type of code chai if maile site maa kei kura click gare yaa kei kura trigger gare ani kunai state change vayo, tyo trigger garda yaa click gardaa aru kei kura call garnu paryo vani use hunxa.

//Means dependency array empty vako bela first time matra call huni vayo,tara dependency array maa kei value xa ra user ley site maa click gardaa tyo dependency array bhitra ko value trigger/change vayo vani useeffect maa kk lekhako xa, kk kaam garni vaneko xa tyo sabai execute huni vayo.
import React, { useEffect, useState } from 'react'

const App = () => {

  const [count, setCount] = useState(0)

  useEffect(() => {
  document.title = "Learning UseEffect" + count
  }, [count]) //[count] dependency array with value.


  return (
    <>
    <h1>{count}</h1>
    <button onClick={()=>setCount(count +1)}>+</button>
    </>
  )
}
export default App

/*
- With Dependency Array: When a user clicks the "like" button, the useEffect would respond to the change in the "like" count. For example, it might:
Update the UI to show the new "like" count.
Send an API request to the server to store the updated "like" count.
Notify other parts of the app (e.g., update notifications, change the post's appearance).

##### Process of Ecectuion::: ####
- Initial Render::::
When the App component is first rendered, the useState(0) initializes the count variable to 0.
The useEffect hook runs after the initial render because the count state is set to 0 by default. The dependency array [count] causes the useEffect to run anytime count changes.
During this first execution, document.title = "Learning UseEffect" + count is called, setting the document's title to "Learning UseEffect0" (since count is 0).

- Clicking the Button::::::
When the user clicks the + button, the setCount(count + 1) function is executed.
This updates the count state by incrementing it by 1 (from 0 to 1), causing the component to re-render.


- Re-render and useEffect Execution:::::
After the re-render, the useEffect hook checks the [count] dependency array and notices that count has changed from 0 to 1.
Since the value in the dependency array has changed, useEffect is triggered again, updating the document's title to "Learning UseEffect1".
 */

```
> Third Type of useeffect:
```javascript
  // Third type of use effect:::

import React, { useEffect, useState } from 'react'

const App = () => {

  const [count, setCount] = useState(0)
  const [nextCount, setnextCount] = useState(0)

  useEffect(() => {
  console.log("Third type of use Effect called.");
  
  }) //[count] dependency array with value.


  return (
    <>
    <h1>{count}</h1>
    <button onClick={()=>setCount(count +1)}>+</button>
    <h2>{nextCount}</h2>
    <button onClick={()=>setnextCount(nextCount + 1)}>+</button>
    </>
  )
}
export default App

// page maa jati bela click/render/trigger hunxa taba taba call hunxa. means jati bela site trigger hunxa in any way , this useeffect is called.
//This code uses useEffect without a dependency array, so it runs after every render of the component. Each button increments its count, triggering a re-render and logging a message to the console.
```

# Tailwind CSS Intro:
- tailwind is a utility class.(Play.tailwind.com). Tailwind CSS is a utility-first CSS framework that allows developers to style their websites or applications by using predefined CSS classes directly in their HTML.
- 1rem = 16px by default(if we make a font-size 20px in our whole document, the 1rem = 20px)
- 0.25rem = 4px
- (See in asset folder image..)
- installation guide in tailwind website.
- We can directly take a components like navbar from the website like flowbite and can change according to our need. 
- But important point to note that the class should be changed to class name and the img tag and input tag is self closing.
- PostCss => tailwind is not understand by browser, so, to convert css in browser understandable, we need postcss.
- Autoprefixer => browser specific css hunxa, like webkit, mozilla, we have to focus on that, so, to do so, we need autoprefixer.

# GraphQL:::
- First there is a SOAP API(Simple object Access Protocol). 
- then there is REST API. (different api path)
- then there is RESTFUL API. (having same api path)
- then there is GRAPHQL.
- GraphQL is a query language for APIs and a runtime for executing those queries. Developed by Facebook in 2012, it provides a more efficient, powerful, and flexible alternative to REST APIs by allowing clients to request exactly the data they need. 

- This minimizes over-fetching or under-fetching data, common issues with traditional REST approaches.IT has only one endpoint.But it has different query system. Like endpoint /graphql huni vayo ra tei single endpoint maa.
>grophql has 3 things:::
- Queries: Use the query keyword (optional) to fetch data with a specified structure.
- Subscriptions: Use the subscription keyword to listen for real-time updates with the specified data fields.
- Mutation : kei kura update garnu parni xa mutate garnu parni xa.


# Project Start:::::
- Inside src, make a folder structure of CRUD.
-Make frontend.
 
> Connecting frontend and backend through express and hitting api through axios:::
- npm i axios. 

> Homepage code of api and calling backend:::
```javascript
  import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import axios from 'axios'


const Home = () => {


  //Aba hamilai homepage maa database maa vako book show garna parni xa. So, aba homepage bata backend ko /book api hit hannu paryo.
  const [books, setBooks] = useState([])//backend bata data array maa aauxa so initial maa empty array garnu paryo.

const fetchBooks = async () => {//this function hits the api and store the fetched data.
  const response = await axios.get('http://localhost:3000/book')
  console.log(response);
  

}
  //aba yo useeffect chai jaba koi user site maa first time aauxa, taba initial trigger hunxa, hamilai chhiyako pani yei ho, koi ley site kholyo vani site kholdaa bitikai useeffect call huni vayo ra vako jati book fetch huni vayo.
  useEffect(()=>{ 
    fetchBooks()
  },[])


  return (
    <>
        <Navbar/>
        <div className='flex flex-wrap justify-evenly gap-1 mt-20'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        </div>
       
    </>
  )
}

export default Home

```

# SOP (Same Origin Policy) and CORS (cross origin resource sharing)::
> Before going to SOP and CORS::
- In past, there is no such good security. There is no good prevention of even a simple attack. In past one tab of browser can access the token of another tab. Any transaction made by customer can be intercepted by hacker in between and he can modify that api request by putting own account number, Then, the hacker send the link to to customer and if the customer opens the link in one tab, and while he was making a first transaction, he is doing this already in one tab. so, the initial tab and the tab opened by clicking a hacker's link can access and data from each other. so, the backend validate the request made after clicking a hacker's link if the request is valid or not. Due to the issue of tabs can access the information with each other, the transaction got success and the account money is transferred to the hacker's account directly.

- So, to handle the issue, sandbox cames where now tabs cannot access the data of one another. In one tab, if we do console.log(document.cookie), it now only give the cookie of recent tab.

- So, the hacker made his/her own site and the same process goes. When user click hacker's link, the user redirected to the hacker's browser. Inside the site, there is a trap like "Click here to win Iphone" type of ad. When user click on that ad, it hit's the bank's api. This way, now hacker's site is requesting the access to the bank's server. CSRF (Cross-Site Request Forgery) is an attack that tricks the user into unknowingly submitting requests to a web application in which they're authenticated,(in our case, requesting to the bank application which is opened in another tab.) potentially compromising their data. In this way they got hacked.

- SOP(Same origin policy) cames, it tells that the protocol, port and hostname should be same to hit a api like the user's bank ko protocol, port and hostname should match with hacker's site. In our case, they are not same and the hacker's site cannot hit the api of bank server. HTTPS port number is ::443 and http is :::80.

- Site of hacker's protocol is same(https), port number is same(443) and the hostname like domain name is different.

- like in our project, our frontend project: http://localhost:5173 and backend project http://localhost:3000 are different in port number. So, when we request for the data to our backend, the difference of port doesn't allow us to request.

- Then, CORS(Cross origin resource) comes. The difference wala problem was solved by CORS. But we have to tell our server that which url/port/hostname can access the server. If url/port/hostname problem still today, we cannot use the features like the fontfamily, CDN etc.