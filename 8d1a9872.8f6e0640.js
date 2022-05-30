(window.webpackJsonp=window.webpackJsonp||[]).push([[176,113],{112:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),i=(n(0),n(402)),o={},c={unversionedId:"api/gestures/gesture-detector-functional1",id:"api/gestures/gesture-detector-functional1",isDocsHomePage:!1,title:"gesture-detector-functional1",description:"`jsx",source:"@site/docs/api/gestures/gesture-detector-functional1.md",slug:"/api/gestures/gesture-detector-functional1",permalink:"/react-native-gesture-handler/docs/next/api/gestures/gesture-detector-functional1",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/main/docs/docs/api/gestures/gesture-detector-functional1.md",version:"current"},s=[],d={rightToc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"export default function Example() {\n  const tap = Gesture.Tap().onStart(() => {\n    console.log('tap');\n  });\n\n  return (\n    <GestureDetector gesture={tap}>\n      <FunctionalComponent>\n        <View style={styles.box} />\n      </FunctionalComponent>\n    </GestureDetector>\n  );\n}\n\nfunction FunctionalComponent(props) {\n  return <View collapsable={false}>{props.children}</View>;\n}\n")))}u.isMDXComponent=!0},277:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),i=(n(0),n(402)),o=n(112),c={id:"gesture-detector",title:"GestureDetector",sidebar_label:"Gesture detector"},s={unversionedId:"api/gestures/gesture-detector",id:"api/gestures/gesture-detector",isDocsHomePage:!1,title:"GestureDetector",description:"GestureDetector is the main component of the RNGH2. It is responsible for creating and updating native gesture handlers based on the config of provided gesture. The most significant difference between it and old gesture handlers is that the GestureDetector can recognize more than one gesture at the time thanks to gesture composition. Keep in mind that GestureDetector is not compatible with the Animated API, nor with Reanimated 1.",source:"@site/docs/api/gestures/gesture-detector.md",slug:"/api/gestures/gesture-detector",permalink:"/react-native-gesture-handler/docs/next/api/gestures/gesture-detector",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/main/docs/docs/api/gestures/gesture-detector.md",version:"current",sidebar_label:"Gesture detector",sidebar:"docs",previous:{title:"Upgrading to the new API introduced in Gesture Handler 2",permalink:"/react-native-gesture-handler/docs/next/guides/upgrading-to-2"},next:{title:"Gesture",permalink:"/react-native-gesture-handler/docs/next/api/gestures/gesture"}},d=[{value:"Properties",id:"properties",children:[{value:"<code>gesture</code>",id:"gesture",children:[]}]}],u={rightToc:d};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"GestureDetector")," is the main component of the RNGH2. It is responsible for creating and updating native gesture handlers based on the config of provided gesture. The most significant difference between it and old gesture handlers is that the ",Object(i.b)("inlineCode",{parentName:"p"},"GestureDetector")," can recognize more than one gesture at the time thanks to gesture composition. Keep in mind that ",Object(i.b)("inlineCode",{parentName:"p"},"GestureDetector")," is not compatible with the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://reactnative.dev/docs/animated"}),"Animated API"),", nor with ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.swmansion.com/react-native-reanimated/docs/1.x.x/"}),"Reanimated 1"),"."),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Gesture Detector will use first native view in its subtree to recognize gestures, however if this view is used only to group its children it may get automatically ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://reactnative.dev/docs/view#collapsable-android"}),"collapsed"),". Consider this example:"),Object(i.b)(o.default,{mdxType:"FunctionalComponents"}),"If we were to remove the collapsable prop from the View, the gesture would stop working because it would be attached to a view that is not present in the view hierarchy. Gesture Detector adds this prop automatically to its direct child but it's impossible to do automatically for more complex view trees.")),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("h3",{id:"gesture"},Object(i.b)("inlineCode",{parentName:"h3"},"gesture")),Object(i.b)("p",null,"A gesture object containing the configuration and callbacks. Can be any of the base gestures (",Object(i.b)("inlineCode",{parentName:"p"},"Tap"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Pan"),", ",Object(i.b)("inlineCode",{parentName:"p"},"LongPress"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Fling"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Pinch"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Rotation"),", ",Object(i.b)("inlineCode",{parentName:"p"},"ForceTouch"),") or any ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/api/gestures/composed-gestures"}),Object(i.b)("inlineCode",{parentName:"a"},"ComposedGesture"))," (",Object(i.b)("inlineCode",{parentName:"p"},"Race"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Simultaneous"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Exclusive"),")."),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"GestureDetector will decide whether to use Reanimated to process provided gestures based on callbacks they have. If any of the callbacks is a worklet, tools provided by the Reanimated will be utilized bringing ability to handle gestures synchrously."),Object(i.b)("p",{parentName:"div"},"Starting with Reanimated-2.3.0-beta.4 Gesture Handler will provide a ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/api/gestures/state-manager"}),"StateManager")," in the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/api/gestures/touch-events"}),"touch events")," that allows for managing the state of the gesture."))))}p.isMDXComponent=!0},402:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=a.a.createContext({}),u=function(e){var t=a.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,m=p["".concat(o,".").concat(b)]||p[b]||l[b]||i;return n?a.a.createElement(m,c(c({ref:t},d),{},{components:n})):a.a.createElement(m,c({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var d=2;d<i;d++)o[d]=n[d];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);