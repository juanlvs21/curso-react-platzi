(window.webpackJsonp=window.webpackJsonp||[]).push([[0],Array(21).concat([function(e,t,a){e.exports=a.p+"static/media/logo.c06f5e5a.png"},,function(e){e.exports={categories:[{id:"1",description:"Lo mejor de la semana",title:"Destacados",playlist:[{title:"\xbfQu\xe9 es responsive Design?",author:"LeonidasEsteban",type:"video",cover:"./images/covers/responsive.jpg",src:"http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4",id:"1"},{title:"C\xf3mo optimzar la carga de un website",author:"LeonidasEsteban",type:"video",cover:"./images/covers/optimizar.jpg",src:"http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4",id:"2"},{title:"Qu\xe9 es Bitcoin",author:"Yograterol",type:"video",cover:"./images/covers/bitcoin.jpg",src:"http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4",id:"3"},{title:"Que pas\xf3 con HTML5",author:"Freddier",type:"video",cover:"./images/covers/html5.jpg",src:"http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4",id:"4"},{title:"Lo mejor de Mejorando.la",author:"Cvander",type:"video",cover:"./images/covers/mejorandola.jpg",src:"http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4",id:"5"}]},{id:"2",description:"Lo mejor para concentrarte",title:"Para programar",playlist:[{title:"One more time",author:"Daft Punk",type:"video",cover:"./images/covers/one-more-time.jpg",src:"http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4",id:"6"},{title:"Midnight City",author:"M83",type:"video",cover:"./images/covers/midnight.jpg",src:"http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4",id:"7"},{title:"Solar Sailer",author:"Daft Punk",type:"video",cover:"./images/covers/solar-sailer.jpg",src:"http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4",id:"8"},{title:"The social network",author:"The social network",type:"video",cover:"./images/covers/social.jpg",src:"http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4",id:"9"},{title:"No vaya a ser",author:"Pablo Alboran",type:"video",cover:"./images/covers/no-vaya-a-ser.jpg",src:"http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4",id:"10"}]},{id:"3",description:"Si no te queda de otra",title:"Regueton",playlist:[{title:"Despacito",author:"Luis Fonsi",type:"video",cover:"./images/covers/despacito.jpg",src:"http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4",id:"11"},{title:"Echame la culpa",author:"Luis fonsi",type:"video",cover:"./images/covers/echame-la-culpa.jpg",src:"http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4",id:"12"},{title:"Mi Gente",author:"J Bavil",type:"video",cover:"./images/covers/mi-gente.jpg",src:"http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4",id:"13"},{title:"Felices los 4",author:"Maluma",type:"video",cover:"./images/covers/felices.jpg",src:"http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4",id:"14"},{title:"Me Reh\xfaso",author:"Danny Ocean",type:"video",cover:"./images/covers/rehuso.jpg",src:"http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4",id:"15"}]}]}},,,,,function(e,t,a){e.exports=a(59)},,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"openModal",function(){return C}),a.d(n,"closeModal",function(){return M}),a.d(n,"searchEntities",function(){return B}),a.d(n,"isLoading",function(){return S}),a.d(n,"searchAsyncEntities",function(){return L});var r=a(0),i=a.n(r),o=a(12),c=a.n(o);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=a(7),s=a(8),u=a(6),d=a(1),h=a(2),p=a(4),m=a(3),g=a(5);a(37);var v=function(e){return i.a.createElement("section",{className:"HomeLayout"},e.children)},f=a(21),b=a.n(f);a(38);var y=function(e){return i.a.createElement("div",{className:"Related"},i.a.createElement("img",{src:b.a,alt:"Platzi Videos",width:"250"}))},E=(a(39),function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(p.a)(this,Object(m.a)(t).call(this,e))).handleClick=function(e){a.props.openModal(a.props.id)},a.state={title:a.props.title,author:a.props.author,cover:a.props.cover},a}return Object(g.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"Media",onClick:this.handleClick},i.a.createElement("div",{className:"Media-cover"},i.a.createElement("img",{src:this.state.cover,alt:"",width:260,height:160,className:"Media-image"})),i.a.createElement("h3",{className:"Media-title"},this.state.title),i.a.createElement("p",{className:"Media-author"},this.state.author))}}]),t}(r.PureComponent)),k="OPEN_MODAL",j="CLOSE_MODAL",O="SEARCH_ENTITIES",w="IS_LOADING";function C(e){return{type:k,payload:{mediaId:e}}}function M(){return{type:j}}function B(e){return{type:O,payload:{query:e}}}function S(e){return{type:w,payload:{value:e}}}function L(e){return function(t){t(S(!0)),setTimeout(function(){t(S(!1)),t(B(e))},5e3)}}var _=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).openModal=function(e){a.props.dispatch(C(e))},a}return Object(g.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return i.a.createElement(E,Object.assign({openModal:this.openModal},this.props.data.toJS()))}}]),t}(r.Component);var N=Object(s.b)(function(e,t){return{data:e.get("data").get("entities").get("media").get(t.id)}})(_);a(40);var P=function(e){return i.a.createElement("div",{className:"Playlist"},e.playlist.map(function(t){return i.a.createElement(N,{key:t,id:t,openModal:e.handleOpenModal})}))};a(41);var T=function(e){return i.a.createElement("div",{className:"Category"},i.a.createElement("p",{className:"Category-description"},e.description),i.a.createElement("h2",{className:"Category-title"},e.title),i.a.createElement(P,{handleOpenModal:e.handleOpenModal,playlist:e.playlist}))},x=(a(42),a(43),function(e){return i.a.createElement("form",{className:"Search",onSubmit:e.handleSubmit},i.a.createElement("input",{ref:e.setRef,type:"text",name:"search",placeholder:"Busca tu video favorito",className:"Search-input",value:e.value,onChange:e.handleChange}))}),z=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={value:""},a.handleSubmit=function(e){e.preventDefault(),a.props.actions.searchAsyncEntities(a.input.value)},a.setInputRef=function(e){a.input=e},a.handleInputChange=function(e){a.setState({value:e.target.value})},a}return Object(g.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return i.a.createElement(x,{setRef:this.setInputRef,handleSubmit:this.handleSubmit,handleChange:this.handleInputChange,value:this.state.value})}}]),t}(r.Component);var A=Object(s.b)(null,function(e){return{actions:Object(l.bindActionCreators)(n,e)}})(z);var I=function(e){return i.a.createElement("div",{className:"Categories"},i.a.createElement(A,null),e.isLoading&&i.a.createElement("p",null,"Buscando tus videos favoritos...."),e.search.map(function(t){return i.a.createElement(E,Object.assign({openModal:e.handleOpenModal},t.toJS(),{key:t.get("id")}))}),e.categories.map(function(t){return i.a.createElement(T,Object.assign({key:t.get("id")},t.toJS(),{handleOpenModal:e.handleOpenModal}))}))},R=function(e){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return Object(o.createPortal)(this.props.children,document.getElementById("modal-container"))}}]),t}(r.Component);a(44);var D=function(e){return i.a.createElement("div",{className:"Modal"},e.children,i.a.createElement("button",{className:"Modal-close",onClick:e.handleClick}))};var F=function(e){return i.a.createElement("h1",{style:{color:"white"}},"Ha ocurrido un error")},V=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={handleError:!1},a}return Object(g.a)(t,e),Object(h.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({handleError:!0})}},{key:"render",value:function(){return this.state.handleError?i.a.createElement(F,null):this.props.children}}]),t}(r.Component);a(45);var J=function(e){return i.a.createElement("div",{className:"VideoPlayer",ref:e.setRef},e.children)},U=(a(46),function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).setRef=function(e){a.video=e},a}return Object(g.a)(t,e),Object(h.a)(t,[{key:"togglePlay",value:function(){this.props.pause?this.video.play():this.video.pause()}},{key:"componentWillReceiveProps",value:function(e){e.pause!==this.props.pause&&this.togglePlay()}},{key:"render",value:function(){var e=this.props,t=e.autoplay,a=e.src,n=e.handleLoadedMetadata,r=e.handleTimeUpdate,o=e.handleSeeking,c=e.handleSeeked;return i.a.createElement("div",{className:"Video"},i.a.createElement("video",{autoPlay:t,src:a,ref:this.setRef,onLoadedMetadata:n,onTimeUpdate:r,onSeeking:o,onSeeked:c}))}}]),t}(r.Component));a(47);var q=function(e){return i.a.createElement("div",{className:"Title"},i.a.createElement("h2",null,e.title))};a(48);var H=function(e){return i.a.createElement("div",{className:"VideoPlayerControls"},e.children)};var W=function(e){var t=e.color,a=e.size;return i.a.createElement("svg",{fill:t,height:a,width:a,viewBox:"0 0 32 32"},e.children)};var Q=function(e){return i.a.createElement(W,e,i.a.createElement("path",{d:"M6 4l20 12-20 12z"}))};var G=function(e){return i.a.createElement(W,e,i.a.createElement("path",{d:"M4 4h10v24h-10zM18 4h10v24h-10z"}))};a(49);var Y=function(e){return i.a.createElement("div",{className:"PlayPause"},e.pause?i.a.createElement("button",{onClick:e.handleClick},i.a.createElement(Q,{size:25,color:"white"})):i.a.createElement("button",{onClick:e.handleClick},i.a.createElement(G,{size:25,color:"white"})))};a(50);var $=function(e){return i.a.createElement("div",{className:"Timer"},i.a.createElement("p",null,i.a.createElement("span",null,e.currentTime," / ",e.duration)))};a(51);var K=function(e){return i.a.createElement("div",{className:"ProgressBar"},i.a.createElement("input",{type:"range",min:0,max:e.duration,value:e.value,onChange:e.handleProgressChange}))};a(52);var X=function(e){return e.active?i.a.createElement("div",{className:"Spinner"},i.a.createElement("span",null,"Cargando...")):null};var Z=function(e){return i.a.createElement(W,e,i.a.createElement("path",{d:"M27.814 28.814c-0.384 0-0.768-0.146-1.061-0.439-0.586-0.586-0.586-1.535 0-2.121 2.739-2.739 4.247-6.38 4.247-10.253s-1.508-7.514-4.247-10.253c-0.586-0.586-0.586-1.536 0-2.121s1.536-0.586 2.121 0c3.305 3.305 5.126 7.7 5.126 12.374s-1.82 9.069-5.126 12.374c-0.293 0.293-0.677 0.439-1.061 0.439zM22.485 25.985c-0.384 0-0.768-0.146-1.061-0.439-0.586-0.586-0.586-1.535 0-2.121 4.094-4.094 4.094-10.755 0-14.849-0.586-0.586-0.586-1.536 0-2.121s1.536-0.586 2.121 0c2.55 2.55 3.954 5.94 3.954 9.546s-1.404 6.996-3.954 9.546c-0.293 0.293-0.677 0.439-1.061 0.439v0zM17.157 23.157c-0.384 0-0.768-0.146-1.061-0.439-0.586-0.586-0.586-1.535 0-2.121 2.534-2.534 2.534-6.658 0-9.192-0.586-0.586-0.586-1.536 0-2.121s1.535-0.586 2.121 0c3.704 3.704 3.704 9.731 0 13.435-0.293 0.293-0.677 0.439-1.061 0.439z"}),i.a.createElement("path",{d:"M13 30c-0.26 0-0.516-0.102-0.707-0.293l-7.707-7.707h-3.586c-0.552 0-1-0.448-1-1v-10c0-0.552 0.448-1 1-1h3.586l7.707-7.707c0.286-0.286 0.716-0.372 1.090-0.217s0.617 0.519 0.617 0.924v26c0 0.404-0.244 0.769-0.617 0.924-0.124 0.051-0.254 0.076-0.383 0.076z"}))};a(53);var ee=function(e){return i.a.createElement("button",{className:"Volume"},i.a.createElement(Z,{size:25,color:"white"}),i.a.createElement("div",{className:"Volume-range"},i.a.createElement("input",{type:"range",min:0,max:1,step:.05,onChange:e.handleVolumeChange})))};var te=function(e){return i.a.createElement(W,e,i.a.createElement("path",{d:"M32 0h-13l5 5-6 6 3 3 6-6 5 5z"}),i.a.createElement("path",{d:"M32 32v-13l-5 5-6-6-3 3 6 6-5 5z"}),i.a.createElement("path",{d:"M0 32h13l-5-5 6-6-3-3-6 6-5-5z"}),i.a.createElement("path",{d:"M0 0v13l5-5 6 6 3-3-6-6 5-5z"}))},ae=(a(54),function(e){return i.a.createElement("div",{className:"FullScreen",onClick:e.handleFullScreenClick},i.a.createElement(te,{size:25,color:"white"}))}),ne=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={pause:!0,duration:0,currentTime:0,loading:!1},a.togglePlay=function(e){a.setState({pause:!a.state.pause})},a.handleLoadedMetadata=function(e){a.video=e.target,a.setState({duration:a.video.duration})},a.handleTimeUpdate=function(e){a.setState({currentTime:a.video.currentTime})},a.handleProgressChange=function(e){a.video.currentTime=e.target.value},a.handleSeeking=function(e){a.setState({loading:!0})},a.handleSeeked=function(e){a.setState({loading:!1})},a.handleVolumeChange=function(e){a.video.volume=e.target.value},a.handleFullScreenClick=function(e){document.webkitIsFullScreen?document.webkitExitFullscreen():a.player.webkitRequestFullscreen()},a.setRef=function(e){a.player=e},a}return Object(g.a)(t,e),Object(h.a)(t,[{key:"leftPad",value:function(e){return"00".substring(0,"00".length-e.length)+e}},{key:"formattedTime",value:function(e){var t=parseInt(e/60,10),a=parseInt(e%60,10);return"".concat(this.leftPad(t.toString()),":").concat(this.leftPad(a.toString()))}},{key:"componentDidMount",value:function(){this.setState({pause:!this.props.autoplay})}},{key:"render",value:function(){return i.a.createElement(J,{setRef:this.setRef},i.a.createElement(q,{title:this.props.media.get("title")}),i.a.createElement(H,null,i.a.createElement(Y,{pause:this.state.pause,handleClick:this.togglePlay}),i.a.createElement($,{duration:this.formattedTime(this.state.duration),currentTime:this.formattedTime(this.state.currentTime)}),i.a.createElement(K,{duration:this.state.duration,value:this.state.currentTime,handleProgressChange:this.handleProgressChange}),i.a.createElement(ee,{handleVolumeChange:this.handleVolumeChange}),i.a.createElement(ae,{handleFullScreenClick:this.handleFullScreenClick})),i.a.createElement(X,{active:this.state.loading}),i.a.createElement(U,{src:this.props.media.get("src"),autoplay:this.props.autoplay,pause:this.state.pause,handleLoadedMetadata:this.handleLoadedMetadata,handleTimeUpdate:this.handleTimeUpdate,handleSeeking:this.handleSeeking,handleSeeked:this.handleSeeked}))}}]),t}(r.Component);var re=Object(s.b)(function(e,t){return{media:e.get("data").get("entities").get("media").get(t.id)}})(ne),ie=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleOpenModal=function(e){a.props.actions.openModal(e)},a.handleCloseModal=function(e){a.props.actions.closeModal()},a}return Object(g.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return i.a.createElement(V,null,i.a.createElement(v,null,i.a.createElement(y,null),i.a.createElement(I,{categories:this.props.categories,handleOpenModal:this.handleOpenModal,search:this.props.search,isLoading:this.props.isLoading}),this.props.modal.get("visibility")&&i.a.createElement(R,null,i.a.createElement(D,{handleClick:this.handleCloseModal},i.a.createElement(re,{autoplay:!0,id:this.props.modal.get("mediaId")})))))}}]),t}(r.Component);var oe=Object(s.b)(function(e,t){var a=e.get("data").get("categories").map(function(t){return e.get("data").get("entities").get("categories").get(t)}),n=Object(u.List)(),r=e.get("data").get("search");return r&&(n=e.get("data").get("entities").get("media").filter(function(e){return e.get("author").toLowerCase().includes(r.toLowerCase())?e.get("author").toLowerCase().includes(r.toLowerCase()):!!e.get("title").toLowerCase().includes(r.toLowerCase())&&e.get("title").toLowerCase().includes(r.toLowerCase())}).toList()),{categories:a,search:n,modal:e.get("modal"),isLoading:e.get("isLoading").get("active")}},function(e){return{actions:Object(l.bindActionCreators)(n,e)}})(ie),ce=a(22),le=a(27),se=a(23),ue=a(11),de=new ue.b.Entity("media",{},{idAttribute:"id",processStrategy:function(e,t,a){return Object(le.a)({},e,{category:t.id})}}),he=new ue.b.Entity("categories",{playlist:new ue.b.Array(de)}),pe={categories:new ue.b.Array(he)},me=Object(ue.a)(se,pe),ge=Object(u.fromJS)({entities:me.entities,categories:me.result.categories,search:""});var ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return e.set("search",t.payload.query);default:return e}},fe=Object(u.fromJS)({visibility:!1,mediaId:null});var be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return e.merge({visibility:!0,mediaId:t.payload.mediaId});case j:return e.set("visibility",!1);default:return e}},ye=Object(u.Map)({active:!1});var Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return e.set("active",t.payload.value);default:return e}},ke=Object(ce.combineReducers)({data:ve,modal:be,isLoading:Ee}),je=a(24),Oe=a.n(je),we=a(25),Ce=a(26),Me=Object(l.createStore)(ke,Object(u.Map)(),Object(we.composeWithDevTools)(Object(l.applyMiddleware)(Oe.a,Ce.a)));c.a.render(i.a.createElement(s.a,{store:Me},i.a.createElement(oe,null)),document.getElementById("home-container")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}]),[[28,1,2]]]);
//# sourceMappingURL=main.868632f6.chunk.js.map