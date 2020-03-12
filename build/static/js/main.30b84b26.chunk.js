(this["webpackJsonpreact-weather-app"]=this["webpackJsonpreact-weather-app"]||[]).push([[0],{17:function(e,a,t){e.exports=t.p+"static/media/weather-logo.f6792e41.png"},18:function(e,a,t){e.exports=t.p+"static/media/loading-indicator.9f0bb82a.gif"},20:function(e,a,t){e.exports=t(39)},35:function(e,a,t){},36:function(e,a,t){},37:function(e,a,t){},38:function(e,a,t){},39:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(2),c=t.n(o),i=t(5),s=t(1),l=t(15),h=t(4),u=t(16),p=t(3),m=Object(p.a)({weatherApp:{isWeatherDataLoading:!1,hasWeatherDataLoadingError:!1,data:null}}),d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m.get("weatherApp"),a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FETCH_WEATHER_DATA":return e.setIn(["weatherApp","hasWeatherDataLoadingError"],!1).setIn(["weatherApp","isWeatherDataLoading"],!0);case"FETCH_WEATHER_DATA_SUCCESS":return e.setIn(["weatherApp","isWeatherDataLoading"],!1).setIn(["weatherApp","data"],Object(p.a)(a.payload));case"FETCH_WEATHER_DATA_ERROR":return e.setIn(["weatherApp","isWeatherDataLoading"],!1).setIn(["weatherApp","hasWeatherDataLoadingError"],!0);default:return e}},g=function(e){return Object(s.createStore)(d,e,Object(s.compose)(Object(s.applyMiddleware)(u.a,h.apiMiddleware),Object(l.devToolsEnhancer)()))}(m),E=t(19),f=t(6),w=t.n(f),D=t(10),A=(t(35),function(e){var a=e.fetchWeatherData,t=Object(n.useRef)(null),o=Object(n.useState)(""),c=Object(E.a)(o,2),i=c[0],s=c[1],l=function(e){Object(f.geocodeByAddress)(e).then((function(e){return Object(f.getLatLng)(e[0])})).then((function(e){return a(e)})).catch((function(e){return console.error("Error",e)}))},h=function(){s(""),t.current.focus()};return r.a.createElement("div",{className:"location-search-form"},r.a.createElement("div",{className:"location-search-form-input"},r.a.createElement(w.a,{highlightFirstSuggestion:!0,value:i,onChange:function(e){s(e)},onSelect:function(e,a){a&&(s(e),l(e))}},(function(e){var a=e.getInputProps,n=e.suggestions,o=e.getSuggestionItemProps;e.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",a({placeholder:"Search for Town/City/Zip/Place",className:"location-search-input",ref:t})),n&&n.length>1&&r.a.createElement("div",{className:"autocomplete-dropdown-container"},n.map((function(e){var a=e.active?"suggestion-item-active":"suggestion-item";return r.a.createElement("div",o(e,{className:a}),r.a.createElement("span",null,e.description))}))))})),i?r.a.createElement(D.b,{className:"close-icon",role:"button",onKeyDown:function(e){13===e.keyCode&&h()},onClick:function(){h()},tabIndex:"0"}):r.a.createElement(D.a,{className:"search-icon"})))}),v=t(17),W=t.n(v),b=t(18),T=t.n(b),L=(t(36),function(e){var a=e.weatherData,t=e.isWeatherDataLoading,n=e.hasWeatherDataLoadingError;return r.a.createElement("div",{className:"weather-display-panel"},t?r.a.createElement("img",{className:"loading-indicator",src:T.a,alt:""}):n?r.a.createElement("span",{className:"error-message"},"There was a problem with your submission. Please try again."):a?r.a.createElement("div",{className:"weather-data"},r.a.createElement("div",{className:"weather-data-city"},a.name),r.a.createElement("div",{className:"weather-data-contitions"},a.weather[0].main),r.a.createElement("div",{className:"weather-data-temp"},parseInt(a.main.temp),"\xb0"),r.a.createElement("img",{src:"http://openweathermap.org/img/wn/".concat(a.weather[0].icon,"@2x.png"),alt:"Weather Logo"})):r.a.createElement("div",{className:"get-started"},r.a.createElement("h1",{className:"app-title"},"React Weather App"),r.a.createElement("img",{className:"get-started-logo",src:W.a,alt:"Get Started Logo"})))});L.defaultProps={weatherData:null};var N=L;t(37);N.defaultProps={weatherData:null};var _=function(e){var a=e.weatherData,t=e.fetchWeatherData,n=e.isWeatherDataLoading,o=e.hasWeatherDataLoadingError;return r.a.createElement("div",{className:"weather-app"},r.a.createElement(A,{fetchWeatherData:t}),r.a.createElement(N,{isWeatherDataLoading:n,hasWeatherDataLoadingError:o,weatherData:a}))},I=function(e){var a=e.getIn(["weatherApp","data"]);if(a)return a.toJS()},O=function(e){return e.getIn(["weatherApp","isWeatherDataLoading"])},y=function(e){return e.getIn(["weatherApp","hasWeatherDataLoadingError"])},C=Object(i.b)((function(e){return{weatherData:I(e),isWeatherDataLoading:O(e),hasWeatherDataLoadingError:y(e)}}),(function(e){return{fetchWeatherData:function(a){return e((t=a,Object(h.createAction)({endpoint:"https://api.openweathermap.org/data/2.5/weather?lat=".concat(t.lat,"&lon=").concat(t.lng,"&units=imperial&APPID=9f37eae0ba52698e13ef6b9efcf42e37"),method:"GET",types:["FETCH_WEATHER_DATA","FETCH_WEATHER_DATA_SUCCESS","FETCH_WEATHER_DATA_ERROR"]})));var t}}}))(_);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(38);c.a.render(r.a.createElement(i.a,{store:g},r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.30b84b26.chunk.js.map