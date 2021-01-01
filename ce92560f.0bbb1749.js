(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{83:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),o=(a(0),a(88)),i={id:"interactions",title:"Cross handler interactions",sidebar_label:"Cross handler interactions"},s={unversionedId:"interactions",id:"interactions",isDocsHomePage:!1,title:"Cross handler interactions",description:'Gesture handlers can "communicate" with each other to support complex gestures and control how they activate in certain scenarios.',source:"@site/docs/interactions.md",slug:"/interactions",permalink:"/react-native-gesture-handler/docs/interactions",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/master/docs/docs/interactions.md",version:"current",sidebar_label:"Cross handler interactions",sidebar:"docs",previous:{title:"Handler State",permalink:"/react-native-gesture-handler/docs/state"},next:{title:"Running Example App",permalink:"/react-native-gesture-handler/docs/example"}},c=[{value:"Simultaneous recognition",id:"simultaneous-recognition",children:[{value:"Use cases",id:"use-cases",children:[]},{value:"Example",id:"example",children:[]}]},{value:"Awaiting other handlers",id:"awaiting-other-handlers",children:[{value:"Use cases",id:"use-cases-1",children:[]},{value:"Example",id:"example-1",children:[]}]}],l={rightToc:c};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,'Gesture handlers can "communicate" with each other to support complex gestures and control how they ',Object(o.b)("em",{parentName:"p"},Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"/react-native-gesture-handler/docs/state#active"}),"activate"))," in certain scenarios."),Object(o.b)("p",null,"There are two means of achieving that described in the sections below.\nIn each case, it is necessary to provide a reference of one handler as a property to the other.\nGesture handler relies on ref objects created using ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://reactjs.org/docs/refs-and-the-dom.html"}),Object(o.b)("inlineCode",{parentName:"a"},"React.createRef()"))," and introduced in ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://reactjs.org/blog/2018/03/29/react-v-16-3.html#createref-api"}),"React 16.3"),"."),Object(o.b)("h2",{id:"simultaneous-recognition"},"Simultaneous recognition"),Object(o.b)("p",null,"By default, only one gesture handler is allowed to be in the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/state#active"}),Object(o.b)("inlineCode",{parentName:"a"},"ACTIVE"))," state.\nSo when a gesture handler recognizes a gesture it ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/state#cancelled"}),"cancels")," all other handlers in the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/state#began"}),Object(o.b)("inlineCode",{parentName:"a"},"BEGAN"))," state and prevents any new handlers from receiving a stream of touch events as long as it remains ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/state#active"}),Object(o.b)("inlineCode",{parentName:"a"},"ACTIVE")),"."),Object(o.b)("p",null,"This behavior can be altered using the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/handler-common#simultaneousHandlers"}),Object(o.b)("inlineCode",{parentName:"a"},"simultaneousHandlers"))," property (available for all types of handlers).\nThis property accepts a ref or an array of refs to other handlers.\nHandlers connected in this way will be allowed to remain in the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/state#active"}),Object(o.b)("inlineCode",{parentName:"a"},"ACTIVE"))," state at the same time."),Object(o.b)("h3",{id:"use-cases"},"Use cases"),Object(o.b)("p",null,"Simultaneous recognition needs to be used when implementing a photo preview component that supports zooming (scaling) the photo, rotating and panning it while zoomed in.\nIn this case we would use a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/handler-pinch"}),Object(o.b)("inlineCode",{parentName:"a"},"PinchGestureHandler")),", ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/handler-rotation"}),Object(o.b)("inlineCode",{parentName:"a"},"RotationGestureHandler"))," and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/handler-pan"}),Object(o.b)("inlineCode",{parentName:"a"},"PanGestureHandler"))," that would have to simultaneously recognize gestures."),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)("p",null,"See the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/software-mansion/react-native-gesture-handler/blob/master/examples/Example/scaleAndRotate/index.js"}),'"Scale, rotate & tilt" example')," from the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/example"}),"GestureHandler Example App")," or view it directly on your phone by visiting ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://snack.expo.io/@adamgrzybowski/react-native-gesture-handler-demo"}),"our expo demo"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"class PinchableBox extends React.Component {\n  // ...take a look on full implementation in an Example app\n  render() {\n    const imagePinch = React.createRef();\n    const imageRotation = React.createRef();\n    return (\n      <RotationGestureHandler\n        ref={imageRotation}\n        simultaneousHandlers={imagePinch}\n        onGestureEvent={this._onRotateGestureEvent}\n        onHandlerStateChange={this._onRotateHandlerStateChange}>\n        <Animated.View>\n          <PinchGestureHandler\n            ref={imagePinch}\n            simultaneousHandlers={imageRotation}\n            onGestureEvent={this._onPinchGestureEvent}\n            onHandlerStateChange={this._onPinchHandlerStateChange}>\n            <Animated.View style={styles.container} collapsable={false}>\n              <Animated.Image\n                style={[\n                  styles.pinchableImage,\n                  {\n                    /* events-related transformations */\n                  },\n                ]}\n              />\n            </Animated.View>\n          </PinchGestureHandler>\n        </Animated.View>\n      </RotationGestureHandler>\n    );\n  }\n}\n")),Object(o.b)("h2",{id:"awaiting-other-handlers"},"Awaiting other handlers"),Object(o.b)("h3",{id:"use-cases-1"},"Use cases"),Object(o.b)("p",null,"A good example where awaiting is necessary is when we want to have single and double tap handlers registered for one view (a button).\nIn such a case we need to make single tap handler await a double tap.\nOtherwise if we try to perform a double tap the single tap handler will fire just after we hit the button for the first time, consequently ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/state#cancelled"}),"cancelling")," the double tap handler."),Object(o.b)("h3",{id:"example-1"},"Example"),Object(o.b)("p",null,"See the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/software-mansion/react-native-gesture-handler/blob/master/examples/Example/multitap/index.js"}),'"Multitap" example')," from ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/example"}),"GestureHandler Example App")," or view it directly on your phone by visiting ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://snack.expo.io/@adamgrzybowski/react-native-gesture-handler-demo"}),"our expo demo"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const doubleTap = React.createRef();\nconst PressBox = () => (\n  <TapGestureHandler\n    onHandlerStateChange={({ nativeEvent }) =>\n      nativeEvent.state === State.ACTIVE && Alert.alert('Single tap!')\n    }\n    waitFor={doubleTap}>\n    <TapGestureHandler\n      ref={doubleTap}\n      onHandlerStateChange={({ nativeEvent }) =>\n        nativeEvent.state === State.ACTIVE && Alert.alert(\"You're so fast\")\n      }\n      numberOfTaps={2}>\n      <View style={styles.box} />\n    </TapGestureHandler>\n  </TapGestureHandler>\n);\n")))}p.isMDXComponent=!0},88:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(a),b=n,h=d["".concat(i,".").concat(b)]||d[b]||u[b]||o;return a?r.a.createElement(h,s(s({ref:t},l),{},{components:a})):r.a.createElement(h,s({ref:t},l))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);