(this.webpackJsonpinvestbuddy=this.webpackJsonpinvestbuddy||[]).push([[0],{13:function(t,e,o){},14:function(t,e,o){},15:function(t,e,o){"use strict";o.r(e);var n=o(0),a=o.n(n),c=o(7),i=o.n(c),r=(o(13),o(1)),s=o(2),l=o(4),u=o(3),h=o(5),p=(o(14),function(t){function e(t){var o;return Object(r.a)(this,e),(o=Object(l.a)(this,Object(u.a)(e).call(this,t))).state={title:null,price:null,stockDate:o.props.historicData.date,stockClose:o.props.historicData.close,data:{text:"front end stock",title:"front end to api "}},o}return Object(h.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){this.getStockDetails(),this.getStockHistoricalData()}},{key:"getStockDetails",value:function(){var t=this;fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-profile?symbol=AAPL",{method:"GET",headers:{"x-rapidapi-host":"apidojo-yahoo-finance-v1.p.rapidapi.com","x-rapidapi-key":"833717da8emshdb6cce42afdd1e9p1b5b60jsn3566179e8af4"}}).then((function(t){return t.json()})).then((function(e){t.setState({title:e.price.shortName,price:e.price.regularMarketPreviousClose.fmt}),console.log("test")})).catch((function(t){console.log(t)}))}},{key:"postStockHistoricalData",value:function(){console.log("in historical data"),fetch(" https://investbuddyapi.herokuapp.com/noauthresource",{method:"POST","Access-Control-Allow-Origin":"*",headers:{"Content-Type":"application/json"},body:this.state.data}).then((function(t){return t.json()})).then((function(t){return console.log("Success:",t)})).catch((function(t){console.error("Error:",t)}))}},{key:"getStockHistoricalData",value:function(){console.log("in historical data"),fetch(" https://investbuddyapi.herokuapp.com/stocks",{method:"GET",headers:{}}).then((function(t){return t.json()})).then((function(t){return console.log("Success:",t)})).catch((function(t){console.error("Error:",t)}))}},{key:"render",value:function(){var t=this.state,e=t.title,o=t.price;return a.a.createElement("di",null,a.a.createElement("h1",null,e),a.a.createElement("h3",null,o),a.a.createElement("p",null,"sentiment"),a.a.createElement("h2",null,"sell"),a.a.createElement("ul",null,this.props.historicData.map((function(t){return a.a.createElement("li",{key:t.date},a.a.createElement("div",null," ",t.date),a.a.createElement("a",{href:t},t.close))}))))}}]),e}(a.a.Component)),d=function(t){function e(t){var o;return Object(r.a)(this,e),(o=Object(l.a)(this,Object(u.a)(e).call(this,t))).state={data:{text:"front end stock",title:"front end to api "},historicData:[]},o}return Object(h.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=this;fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-historical-data?frequency=1d&filter=history&period1=1546448400&period2=1562086800&symbol=AAPL",{method:"GET",headers:{"x-rapidapi-host":"apidojo-yahoo-finance-v1.p.rapidapi.com","x-rapidapi-key":"833717da8emshdb6cce42afdd1e9p1b5b60jsn3566179e8af4"}}).then((function(t){return t.json()})).then((function(e){return t.setState({historicData:e.prices})})).catch((function(t){console.log(t)})),this.postStockHistoricalData()}},{key:"postStockHistoricalData",value:function(){console.log("in historical data"),fetch(" https://investbuddyapi.herokuapp.com/noauthresource",{method:"POST","Access-Control-Allow-Origin":"*",headers:{"Content-Type":"application/json"},body:this.state.data}).then((function(t){return t.json()})).then((function(t){return console.log("Success:",t)})).catch((function(t){console.error("Error:",t)}))}},{key:"render",value:function(){var t=this.state.historicData;return console.log(t),a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("p",null,"Invest Buddy")),a.a.createElement("body",null,a.a.createElement(p,{historicData:t})))}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},8:function(t,e,o){t.exports=o(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.8e7106ee.chunk.js.map