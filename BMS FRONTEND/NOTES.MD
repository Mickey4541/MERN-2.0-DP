 # HISTORY::
 - Traditional => html, css, js, jquery, bootstrap
 - Modern => react, vue, material ui, nodejs, angular
 - Browser gives us a visual representation of textual content. Behind the scene, browser makes a tree like a structure like head, body etc. Like in a format of parent and childeren. Parent html tag have two child head and body. Head have meta tag and title as a child and body have our various content like heading, paragraph and so on. this is a dom. When ever user changes a code, it reflects in browser as a visual content, while adding content, the whole dom gets gets reloaded and inject the new content in a dom tree. It again read the whole dom tree. This is a reloading of dom. Site gets slow when there is a fast dom manipulaton.

 # React:::
 - Frontend library of javascript.
 - In react, there is a html looks like code but this is not html, it is jsx.
 - There is a concept of virtual dom in react. First time maa developer ley code lekhera browser maa heryo vani directly dekhinxa. Aba second time code maa change garera feri browser maa herna khojyo vani first virtual dom banxa.
# Working of React::::
 - For example first maa <h1>Rajan</h1> lekhim tyo code browser maa herna lagim vani tyo directly browser maa dekhinxa. first time content browser maa directly dekhyo tei bela aauta VDOM banxa. tyo VDOM first empty hunxa. aba tyo empty VDOM maa <h1>Rajan</h1> lagera halxa. aba next time <h2>Bhandari</h2> code lekhim ra tyo update vako code herna khojim vani tyo code directly browser maa dekhidaina. tes bela feri new virtual dom create hunxa. lets say VDOM1 banyo. Aba tyo VDOM1 maa <h1>Rajan</h1>,<h2>Bhandari<h2> dui otai basxa. Aba VDOM ra VDOM1 vayo . Aba yaha VDOM1 ra VDOM maa subtraction hunxa. VDOM1-VDOM1 = ? yesari. Aba subtraction maa VDOM maa <h1> xa ra VDOM1 maa <h1> ra <h2> xa. subtraction hudaa dubai maa vako <h1> subtract hunxa ra <h2> bachxa. Tyo remaining <h2> balla gayera browser maa dekhinxa. 

 - Same like that if a person create <h3>Age</h3> again, one new VDOM2 created. Inside VDOM2, there is <h1>, <h2>, <h3> . But inside VDOM1, there is <h1>,<h2>. So, VDOM3-VDOM2 = <h3>. Then this final h3 is shows up in a browser. Yo process ley gardaa pahile browser maa dekhi sakeko chij kei pani movement/refresh/reinject jastaa kuraharu vako xaina sirf j change gareko ho tyo matra change/reflect/inject/load vai rako xa.

> Diffing and Reconcilation::::
 - Aba important kura ::: jaha jaha yo subtraction vai rako xa virtual dom bich, tyo kura lai nai DIFFING vaninxa. Ani tyo subtraction bata j result aako xa teslai browser maa dekhauni/inject garni process lai reconcilation vaninxa.

 > Aba question k vandaa jaba <h1> ko kaam vai sakyo ra tyo browser maa pani show vai sakyo, tespaxi <h2> ra <h3> ko palo aayo haina !! jaba VDOM ko kaam sakiyo ra VDOM1 ra VDOM2 ko kaam aayo, tyo agadi ko VDOM chai k hunxa???
 - Tyo VDOM chai garbage collector bata clean hunxa, yo kaam chai browser ley garxa. just like GIGO of Java. Simply, Garbaage collector ley dustbin maa haldinxa.

 # Serverside and Clientside rendering:::
 - Nodejs and ejs makes serverside rendering both are rendered through server.It helps in SEO. Severside rendering technology is very much fast in initial request but got slow in subsequent request. CSR is better in subsequent request.

 - But Nodejs and React makes a clientside rendering. If is not good in SEO as serverside rendering. It is not so fast as SSR in initial request but it is better in subsequent request.

 - Nextjs is a framework of React. Nextjs comes in serverside.

 - Vite(meaning fast) is for small projects but CRA is for large scale websites like ERP, SAAS etc. Vite is very fast than CRA. Vite also can be used in Angular Framework.

 > Setup of React App:
 - npm create vite@latest and follow the command. Select react if you are creating a site using react.
 - While choosing we can see various options like javascript, typescript like this . There is another option like: javascript + SWC. The SWC is a Rust compiler.

 - React maa kei kura change garera teslai browser maa herna ko lagi baar baar refresh garnu pardaina. Automatically update hunxa, this type of feature is provided by HRM(Hot Module Replacement.)