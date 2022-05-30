(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{248:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),i=(n(0),n(402)),o={id:"upgrading-to-2",title:"Upgrading to the new API introduced in Gesture Handler 2"},s={unversionedId:"guides/upgrading-to-2",id:"version-2.4.0/guides/upgrading-to-2",isDocsHomePage:!1,title:"Upgrading to the new API introduced in Gesture Handler 2",description:"Make sure to migrate off the RNGestureHandlerEnabledRootView (Android only)",source:"@site/versioned_docs/version-2.4.0/guides/upgrading-to-2.md",slug:"/guides/upgrading-to-2",permalink:"/react-native-gesture-handler/docs/guides/upgrading-to-2",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/main/docs/versioned_docs/version-2.4.0/guides/upgrading-to-2.md",version:"2.4.0",sidebar:"version-2.4.0/docs",previous:{title:"Migrating off RNGHEnabledRootView",permalink:"/react-native-gesture-handler/docs/guides/migrating-off-rnghenabledroot"},next:{title:"GestureDetector",permalink:"/react-native-gesture-handler/docs/api/gestures/gesture-detector"}},l=[{value:"Make sure to migrate off the <code>RNGestureHandlerEnabledRootView</code> (Android only)",id:"make-sure-to-migrate-off-the-rngesturehandlerenabledrootview-android-only",children:[]},{value:"Upgrading to the new API",id:"upgrading-to-the-new-api",children:[{value:"Configuring the gestures",id:"configuring-the-gestures",children:[]},{value:"Using multiple gestures on the same view",id:"using-multiple-gestures-on-the-same-view",children:[]},{value:"Replacing <code>waitFor</code> and <code>simultaneousHandlers</code>",id:"replacing-waitfor-and-simultaneoushandlers",children:[]}]}],c={rightToc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"make-sure-to-migrate-off-the-rngesturehandlerenabledrootview-android-only"},"Make sure to migrate off the ",Object(i.b)("inlineCode",{parentName:"h2"},"RNGestureHandlerEnabledRootView")," (Android only)"),Object(i.b)("p",null,"Gesture Handler 1 required you to override ",Object(i.b)("inlineCode",{parentName:"p"},"createRootView")," to return an instance of ",Object(i.b)("inlineCode",{parentName:"p"},"RNGestureHandlerEnabledRootView"),". This class has been the cause of many hard to debug and fix crashed and was deprecated in version 2.0, and subsequently removed in version 2.4. If you are still using it, check out ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/guides/migrating-off-rnghenabledroot"}),"migrating off RNGHEnabledRootView guide"),"."),Object(i.b)("h2",{id:"upgrading-to-the-new-api"},"Upgrading to the new API"),Object(i.b)("p",null,"The most important change brought by the Gesture Handler 2 is the new Gesture API, along with the ",Object(i.b)("inlineCode",{parentName:"p"},"GestureDetector")," component. It makes declaring gesture easier, as it handles much of the work under the hood and reduces the amount of necessary boilerplate code. Instead of a separate component for every type of gesture, the ",Object(i.b)("inlineCode",{parentName:"p"},"GestureDetector")," component is used to attach gestures to the underlying view based on the configuration object passed to it. The configuration objects are created using the ",Object(i.b)("inlineCode",{parentName:"p"},"Gesture")," object, here is a simple example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"const tapGesture = Gesture.Tap().onStart(() => {\n  console.log('Tap!');\n});\n...\nreturn (\n  <GestureDetector gesture={tapGesture}>\n    <View />\n  </GestureDetector>\n);\n")),Object(i.b)("p",null,"As you can see, there are no ",Object(i.b)("inlineCode",{parentName:"p"},"onGestureEvent")," and ",Object(i.b)("inlineCode",{parentName:"p"},"onHandlerStateChange")," callbacks, instead the state machine is handled under the hood and relevant callbacks are called for specific transitions or events:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"onBegin")," - called when the gesture transitions to the ",Object(i.b)("inlineCode",{parentName:"li"},"BEGAN")," state, which in most cases is when the gesture starts processing the touch stream - when the finger first touches the view"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"onStart")," - called when the activation criteria for the gesture are met and it transitions from ",Object(i.b)("inlineCode",{parentName:"li"},"BEGAN")," to ",Object(i.b)("inlineCode",{parentName:"li"},"ACTIVE")," state"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"onUpdate")," - replaces ",Object(i.b)("inlineCode",{parentName:"li"},"onGestureEvent"),", called every time the gesture sends a new event while it's in the ",Object(i.b)("inlineCode",{parentName:"li"},"ACTIVE")," state"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"onChange")," - if defined, called just after ",Object(i.b)("inlineCode",{parentName:"li"},"onUpdate"),", the events passed to it are the same as the ones passed to ",Object(i.b)("inlineCode",{parentName:"li"},"onUpdate")," but they also contain ",Object(i.b)("inlineCode",{parentName:"li"},"change")," values which hold the change in value they represent since the last event (i.e. in case of the ",Object(i.b)("inlineCode",{parentName:"li"},"Pan")," gesture, the event will also contain ",Object(i.b)("inlineCode",{parentName:"li"},"changeX")," and ",Object(i.b)("inlineCode",{parentName:"li"},"changeY")," properties)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"onEnd")," - called when the gesture transitions from the ",Object(i.b)("inlineCode",{parentName:"li"},"ACTIVE")," state to either of ",Object(i.b)("inlineCode",{parentName:"li"},"END"),", ",Object(i.b)("inlineCode",{parentName:"li"},"FAILED")," or ",Object(i.b)("inlineCode",{parentName:"li"},"CANCELLED")," - you can tell whether the gesture finished due to user interaction or because of other reason (like getting cancelled by the system, or failure criteria) using the second value passed to the ",Object(i.b)("inlineCode",{parentName:"li"},"onEnd")," callback alongside the event"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"onFinalize")," called when the gesture transitions into either of ",Object(i.b)("inlineCode",{parentName:"li"},"END"),", ",Object(i.b)("inlineCode",{parentName:"li"},"FAILED")," or ",Object(i.b)("inlineCode",{parentName:"li"},"CANCELLED")," state, if the gesture was ",Object(i.b)("inlineCode",{parentName:"li"},"ACTIVE"),", ",Object(i.b)("inlineCode",{parentName:"li"},"onEnd")," will be called first (similarily to ",Object(i.b)("inlineCode",{parentName:"li"},"onEnd")," you can determine the reason for finishing using the second argument)")),Object(i.b)("p",null,"The difference between ",Object(i.b)("inlineCode",{parentName:"p"},"onEnd")," and ",Object(i.b)("inlineCode",{parentName:"p"},"onFinalize")," is that the ",Object(i.b)("inlineCode",{parentName:"p"},"onEnd")," will be called only if the gesture was ",Object(i.b)("inlineCode",{parentName:"p"},"ACTIVE"),", while ",Object(i.b)("inlineCode",{parentName:"p"},"onFinalize")," will be called if the gesture has ",Object(i.b)("inlineCode",{parentName:"p"},"BEGAN"),". This means that you can use ",Object(i.b)("inlineCode",{parentName:"p"},"onEnd")," to clean up after ",Object(i.b)("inlineCode",{parentName:"p"},"onStart"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"onFinalize")," to clean up after ",Object(i.b)("inlineCode",{parentName:"p"},"onBegin")," (or both ",Object(i.b)("inlineCode",{parentName:"p"},"onBegin")," and ",Object(i.b)("inlineCode",{parentName:"p"},"onStart"),")."),Object(i.b)("h3",{id:"configuring-the-gestures"},"Configuring the gestures"),Object(i.b)("p",null,"The new gesture objects are configured in the builder-like pattern. Instead of properties, each gesture provides methods that allow for its customization. In most cases the names of the methods are the same as the relevant props, ot at least very similar. For example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"return (\n  <TapGestureHandler\n    numberOfTaps={2}\n    maxDurationMs={500}\n    maxDelayMs={500}\n    maxDist={10}\n    onHandlerStateChange={({ nativeEvent }) => {\n      if (nativeEvent.state === State.ACTIVE) {\n        console.log('Tap!');\n      }\n    }}>\n    <View />\n  </TapGestureHandler>\n);\n")),Object(i.b)("p",null,"Would have the same effect as:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"const tapGesture = Gesture.Tap()\n  .numberOfTaps(2)\n  .maxDuration(500)\n  .maxDelay(500)\n  .maxDistance(10)\n  .onStart(() => {\n    console.log('Tap!');\n  });\n\nreturn (\n  <GestureDetector gesture={tapGesture}>\n    <View />\n  </GestureDetector>\n);\n")),Object(i.b)("p",null,"You can check the modifiers available to specific gestures in the API Reference under Gestures."),Object(i.b)("h3",{id:"using-multiple-gestures-on-the-same-view"},"Using multiple gestures on the same view"),Object(i.b)("p",null,"Using the gesture handler components, if you wanted to have multiple gestures on one view, you would have to stack them on top of each other and, in case you wanted to use animations, add an ",Object(i.b)("inlineCode",{parentName:"p"},"Animated.View")," after each handler, resulting in a deep component tree, for example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"return (\n  <TapGestureHandler ... >\n    <Animated.View>\n      <PanGestureHandler ... >\n        <Animated.View>\n          <PinchGestureHandler ... >\n            <YourView />\n          </PinchGestureHandler>\n        </Animated.View>\n      </PanGestureHandler>\n    </Animated.View>\n  </TapGestureHandler>\n);\n")),Object(i.b)("p",null,"With the ",Object(i.b)("inlineCode",{parentName:"p"},"GestureDetector")," you can use the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/gesture-composition"}),"Gesture Composition API")," to stack the gestures onto one view:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"const tapGesture = Gesture.Tap();\nconst panGesture = Gesture.Pan();\nconst pinchGesture = Gesture.Pinch();\n\nreturn (\n  <GestureDetector gesture={Gesture.Race(tapGesture, panGesture, pinchGesture)}>\n    <YourView />\n  </GestureDetector>\n);\n")),Object(i.b)("p",null,"Similarily, you can use ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/gesture-composition#simultaneous"}),Object(i.b)("inlineCode",{parentName:"a"},"Gesture.Simultaneous"))," to replace stacked gesture handlers that should be able to recognize gestures simultaneously, and ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/gesture-composition#exclusive"}),Object(i.b)("inlineCode",{parentName:"a"},"Gesture.Exclusive"))," to replace stacked gesture handlers that require failure of others."),Object(i.b)("h3",{id:"replacing-waitfor-and-simultaneoushandlers"},"Replacing ",Object(i.b)("inlineCode",{parentName:"h3"},"waitFor")," and ",Object(i.b)("inlineCode",{parentName:"h3"},"simultaneousHandlers")),Object(i.b)("p",null,"If you want to make relations between the gestures attached to the same view, you should use the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/gesture-composition"}),"Gesture Composition API")," described above. However, if you want to make a relation between gestures attached to different views, or between gesture and an old gesture handler, you should use ",Object(i.b)("inlineCode",{parentName:"p"},"simultaneousWithExternalGesture")," instead of ",Object(i.b)("inlineCode",{parentName:"p"},"simultaneousHandlers"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"requireExternalGestureToFail")," instead of ",Object(i.b)("inlineCode",{parentName:"p"},"waitFor"),". In case you need a ref object to pass to an old gesture handler, you can set it to the gesture using ",Object(i.b)("inlineCode",{parentName:"p"},".withRef(refObject)")," modifier."))}u.isMDXComponent=!0},402:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),b=a,h=d["".concat(o,".").concat(b)]||d[b]||p[b]||i;return n?r.a.createElement(h,s(s({ref:t},c),{},{components:n})):r.a.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);