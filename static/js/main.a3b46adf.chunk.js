(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(7),i=n.n(c),r=(n(14),n(1)),l=n(2),u=n(4),s=n(3),m=n(5),h=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(u.a)(this,Object(s.a)(t).call(this))).state={time:new Date},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.update=setInterval(function(){e.setState({time:new Date})},1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.update)}},{key:"render",value:function(){var e=this.state.time;return o.a.createElement("div",{className:"digital-clock"},o.a.createElement("h2",null,e.toLocaleTimeString()))}}]),t}(o.a.Component),d=function(){return o.a.createElement("div",{className:"title"},o.a.createElement("h1",null,"Intergral"))},v=(n(15),function(e){function t(){return Object(r.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"app"},o.a.createElement(h,null),o.a.createElement(d,null))}}]),t}(o.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.a3b46adf.chunk.js.map