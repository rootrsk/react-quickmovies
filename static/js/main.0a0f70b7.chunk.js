(this.webpackJsonpquickmovies=this.webpackJsonpquickmovies||[]).push([[0],{32:function(e,t,a){e.exports=a(61)},37:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(30),i=a.n(o),c=(a(37),a(4)),s=a(5),l=a(7),m=a(6),p=a(11),u=a(2),d=a(1),h=a.n(d),v=a(9),f=a(8),g=a.n(f),E=function(e){return r.a.createElement("div",{className:"slides"},r.a.createElement("div",{className:"slides_inner-div"},r.a.createElement("div",{className:"title"},e.movie.title," "),r.a.createElement(p.b,{to:{pathname:"/movie/"+e.movie.title,state:e.movie},movie:e.movie},"   ",r.a.createElement("img",{className:"movie-poster",src:e.movie.poster,alt:"img"}))))},k=(r.a.Component,function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={movies:[]},e.componentDidMount=Object(v.a)(h.a.mark((function t(){var a,n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).BASE_URL||"https://quickmovies.herokuapp.com/",t.next=3,g()(a+"movies/"+e.props.genre);case 3:n=t.sent,e.setState({movies:n.data});case 5:case"end":return t.stop()}}),t)}))),e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"slider-header"},r.a.createElement("div",{className:"genere"},this.props.genre),r.a.createElement(p.b,{to:"/genre/"+this.props.genre.toLowerCase(),className:"view-more"},"View More")),r.a.createElement("div",{className:"slider"},this.state.movies.map((function(e){return r.a.createElement(E,{movie:e,key:e._id})}))))}}]),a}(r.a.Component)),b=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={movies:[1,2,3,4,5,6,7,8,9,10]},e.componentDidMount=Object(v.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))),e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(k,{genre:"Action",key:100*Math.random()}),r.a.createElement(k,{genre:"Advanture",key:100*Math.random()}),r.a.createElement(k,{genre:"Comedy",key:100*Math.random()}),r.a.createElement(k,{genre:"Crime",key:100*Math.random()}),r.a.createElement(k,{genre:"Drama",key:100*Math.random()}),r.a.createElement(k,{genre:"Fantasy",key:100*Math.random()}),r.a.createElement(k,{genre:"Historical",key:100*Math.random()}),r.a.createElement(k,{genre:"Horror",key:100*Math.random()}),r.a.createElement(k,{genre:"Mystery",key:100*Math.random()}),r.a.createElement(k,{genre:"Romance",key:100*Math.random()}),r.a.createElement(k,{genre:"Sci-Fi",key:100*Math.random()}),r.a.createElement(k,{genre:"Thriller",key:100*Math.random()}))}}]),a}(r.a.Component),y=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={movies:[]},e.componentDidMount=Object(v.a)(h.a.mark((function t(){var a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.props){t.next=7;break}return t.next=3,g()({url:"https://quickmovies.herokuapp.com/movies/"+e.props.match.params.genre});case 3:a=t.sent,e.setState({movies:a.data}),t.next=7;break;case 7:case"end":return t.stop()}}),t)}))),e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"genre-main_div"},r.a.createElement("div",null,r.a.createElement("button",{className:"back-button",onClick:function(){window.history.back()}}," \xab")),r.a.createElement("div",{className:"genre-slider"},this.state.movies.map((function(e){return r.a.createElement(E,{movie:e,key:e._id})}))))}}]),a}(r.a.Component),w=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={},e.componentDidMount=Object(v.a)(h.a.mark((function t(){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log(e.props),e.props.location.state&&(console.log(e.props.location.state),e.setState({movie:e.props.location}),e.setState({id:e.props.location.state.id,title:e.props.location.state.title,genre:e.props.location.state.genre,imdb:e.props.location.state.imdb,category:e.props.location.state.category,year:e.props.location.state.release_date,starcast:e.props.location.state.starcast,director:e.props.location.state.director,description:e.props.location.state.description,poster:e.props.location.state.poster,screenshot:e.props.location.state.screenshot,download_link:e.props.location.state.download_link,torrent_link:e.props.location.state.torrent_link,stream_link:e.props.location.state.stream_link}));case 2:case"end":return t.stop()}}),t)}))),e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"single-movie_main-div"},r.a.createElement("div",null,r.a.createElement("button",{className:"back-button",onClick:function(){window.history.back()}}," \xab")),r.a.createElement("div",{className:"single-movie_details"},r.a.createElement("h1",{className:"des_movie-title"},this.state.title),r.a.createElement(C,{poster:this.state.poster}),r.a.createElement("div",{className:"des_movie-details"},r.a.createElement("p",null,"IMDb Rating : ",this.state.imdb," "),r.a.createElement("p",null,"Genere : ",this.state.genre," "),r.a.createElement("p",null,"Release Date : ",this.state.year),r.a.createElement("p",null,"Star Cast : ",this.state.starcast),r.a.createElement("p",null,"Director: ",this.state.director),r.a.createElement("p",null,"Description : ",this.state.description)),r.a.createElement("div",{className:"download-link"},this.state.download_link&&r.a.createElement("a",{href:this.state.download_link},"Download Link"),this.state.torrent_link&&r.a.createElement("a",{href:this.state.torrent_link},"Torrent Link"),this.state.stream_link&&r.a.createElement("a",{href:this.state.stream_link},"Stream Link"))))}}]),a}(r.a.Component),C=function(e){return r.a.createElement("div",{className:"des_movie-poster"},r.a.createElement("img",{src:e.poster,alt:"movie-poster"}))},_=w,O=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={title:"",starcast:"",download_link:"",torrent_link:"",stream_link:""},e.componentDidMount=Object(v.a)(h.a.mark((function t(){var a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.props.id){t.next=5;break}return t.next=3,g()({url:"https://quickmovies.herokuapp.com/movie/"+e.props.id});case 3:a=t.sent,e.setState(a.data);case 5:case"end":return t.stop()}}),t)}))),e.onTitleChange=function(t){var a=t.target.value;e.setState({title:a})},e.onStarcastChange=function(t){var a=t.target.value;e.setState({starcast:a})},e.onDirectorChange=function(t){var a=t.target.value;e.setState({director:a})},e.onImdbChange=function(t){var a=t.target.value;e.setState({imdb:a})},e.onDescriptionChange=function(t){var a=t.target.value;e.setState({description:a})},e.onYearChange=function(t){var a=t.target.value;console.log(a),e.setState({release_date:a})},e.onGenreChange=function(t){var a=Array.from(t.target.selectedOptions,(function(e){return e.value}));e.setState({genre:a})},e.onDownloadLinkChange=function(t){var a=t.target.value;e.setState({download_link:a})},e.onStreamLinkChange=function(t){var a=t.target.value;e.setState({stream_link:a})},e.onTorrentLinkChange=function(t){var a=t.target.value;e.setState({torrent_link:a})},e.onPosterChange=function(t){var a=t.target.files[0];e.setState({poster:a})},e.onScreenShotChange=function(t){var a=t.target.files[0];e.setState({screenshot:a})},e.onSubmit=function(){var t=Object(v.a)(h.a.mark((function t(a){var n,r,o;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),(n=new FormData).append("title",e.state.title),n.append("imdb",e.state.imdb),n.append("starcast",e.state.starcast),n.append("director",e.state.director),n.append("description",e.state.description),n.append("genre",e.state.genre),n.append("category",e.state.category),n.append("release_date",e.state.release_date),n.append("download_link",e.state.download_link),console.log(e.state),e.state.poster&&n.append("poster",e.state.poster),e.state.screenshot&&n.append("screenshot",e.state.screenshot),n.append("torrent_link",e.state.torrent_link),n.append("stream_link",e.state.stream_link),"create"!==e.props.Operation){t.next=22;break}return console.log(e.props.Operation),t.next=20,g()({url:"https://quickmovies.herokuapp.com/movie",method:"post",data:n,headers:{"Content-Type":"multipart/form-data; boundary=".concat(n._boundary)}});case 20:r=t.sent,console.log(r);case 22:if("update"!==e.props.Operation){t.next=27;break}return t.next=25,g()({url:"https://quickmovies.herokuapp.com/movie/"+e.state._id,method:"patch",data:n,headers:{"Content-Type":"multipart/form-data; boundary=${form._boundary}"}});case 25:o=t.sent,console.log(o);case 27:if("delete"!==e.props.Operation){t.next=31;break}return t.next=30,g()({url:"https://quickmovies.herokuapp.com/movie/"+e.state._id,method:"delete"});case 30:t.sent;case 31:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"form"},r.a.createElement("form",{onSubmit:this.onSubmit,encType:"multipart/form-data"},r.a.createElement("input",{name:"title",type:"text",placeholder:"Title",onChange:this.onTitleChange,defaultValue:this.state.title}),r.a.createElement("input",{name:"starcast",type:"text",placeholder:"Starcast",onChange:this.onStarcastChange,defaultValue:this.state.starcast}),r.a.createElement("input",{name:"director",type:"text",placeholder:"Director",onChange:this.onDirectorChange,defaultValue:this.state.director}),r.a.createElement("input",{name:"imdb",type:"number",step:"0.01",placeholder:"IMDb",onChange:this.onImdbChange,defaultValue:this.state.imdb}),r.a.createElement("input",{name:"release_date",type:"date",placeholder:"release_date",onChange:this.onYearChange,defaultValue:this.state.release_date}),r.a.createElement("textarea",{name:"description",placeholder:"Description",onChange:this.onDescriptionChange,defaultValue:this.state.description}),r.a.createElement("select",{multiple:!0,onChange:this.onGenreChange,defaultValue:this.state.genre},r.a.createElement("option",null,"Action"),r.a.createElement("option",null,"Adult"),r.a.createElement("option",null,"Advanture"),r.a.createElement("option",null,"Comedy"),r.a.createElement("option",null,"Crime"),r.a.createElement("option",null,"Drama"),r.a.createElement("option",null,"Fantasy"),r.a.createElement("option",null,"Historical"),r.a.createElement("option",null,"Horror"),r.a.createElement("option",null,"Mystery"),r.a.createElement("option",null,"Romance"),r.a.createElement("option",null,"Sci-Fi"),r.a.createElement("option",null,"Thriller")),r.a.createElement("input",{defaultValue:this.state.genre}),r.a.createElement("input",{name:"download_link",placeholder:"Download Link",onChange:this.onDownloadLinkChange,defaultValue:this.state.download_link}),r.a.createElement("input",{name:"torrent_link",placeholder:"Torrent Link",onChange:this.onTorrentLinkChange,defaultValue:this.state.torrent_link}),r.a.createElement("input",{name:"stream_link",placeholder:"Stream Link",onChange:this.onStreamLinkChange,defaultValue:this.state.stream_link}),r.a.createElement("input",{type:"file",name:"poster",onChange:this.onPosterChange}),r.a.createElement("input",{type:"file",name:"screenshot",onChange:this.onScreenShotChange}),r.a.createElement("button",null,"Submit")),this.state.poster&&r.a.createElement("img",{src:this.state.poster,alt:"img"}))}}]),a}(r.a.Component),S=function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"Delete Movie"),r.a.createElement(O,{Operation:"delete",id:e.id}))},j=function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"Update Movie"),r.a.createElement(O,{Operation:"update",id:e.id}))},D=function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"Create Movie"),r.a.createElement(O,{Operation:"create"}))},N=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).componentDidMount=function(){e.setState({id:e.props.match.params.id}),console.log(e.props.match.params.operation),console.log(e.props.match.params.id)},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,"delete"===this.props.match.params.operation&&r.a.createElement(S,{id:this.props.match.params.id}),"update"===this.props.match.params.operation&&r.a.createElement(j,{id:this.props.match.params.id}),"create"===this.props.match.params.operation&&r.a.createElement(D,{id:this.props.match.params.id}))}}]),a}(r.a.Component),x=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={movies:[]},e.componentDidMount=Object(v.a)(h.a.mark((function t(){var a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g()({url:"https://quickmovies.herokuapp.com/movies",method:"get"});case 2:a=t.sent,e.setState({movies:a.data});case 4:case"end":return t.stop()}}),t)}))),e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"admin-movies"},this.state.movies.map((function(e){return r.a.createElement(M,{movie:e,key:e.id})})))}}]),a}(r.a.Component),M=function(e){return r.a.createElement("div",{className:"slides"},r.a.createElement("div",null,r.a.createElement("div",{className:"title"},e.movie.title," ")),r.a.createElement("img",{src:e.movie.poster,alt:"poster",className:"img"}),r.a.createElement("div",{className:"bottom"},r.a.createElement(p.c,{to:"crud/delete/"+e.movie._id},"Delete"),r.a.createElement(p.c,{to:"crud/update/"+e.movie._id},"Update")))},A=x,T=function(){return r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"QuickMovies"),r.a.createElement("input",{type:"search",className:"search-box",placeholder:"Search"}))},L=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement("div",null,r.a.createElement(T,null),r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/",component:b}),r.a.createElement(u.a,{exact:!0,path:"/genre/:genre",component:y}),r.a.createElement(u.a,{path:"/movie/:id",render:function(e){return r.a.createElement(_,e)}}),r.a.createElement(u.a,{path:"/crud/:operation/:id",component:N}),r.a.createElement(u.a,{path:"/movies",component:A}))))}}]),a}(r.a.Component),V=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function W(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");V?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):W(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):W(t,e)}))}}()}},[[32,1,2]]]);
//# sourceMappingURL=main.0a0f70b7.chunk.js.map