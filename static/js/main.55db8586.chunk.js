(this.webpackJsonpquickmovies=this.webpackJsonpquickmovies||[]).push([[0],{36:function(e,t,a){e.exports=a(64)},41:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(32),i=a.n(o),s=(a(41),a(5)),c=a(6),l=a(8),m=a(7),p=a(15),u=a(3),d=a(2),h=a.n(d),v=a(9),f=a(10),g=a.n(f),E=function(e){return r.a.createElement("div",{className:"slides"},r.a.createElement("div",{className:"slides_inner-div"},r.a.createElement(p.b,{to:{pathname:"/movie/"+e.movie.title,state:e.movie},movie:e.movie},"   ",r.a.createElement("img",{className:"movie-poster",src:e.movie.Poster,alt:"img"}))))},k=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={movies:[]},e.componentDidMount=Object(v.a)(h.a.mark((function t(){var a,n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).BASE_URL||"https://quickmovies.herokuapp.com/",t.next=4,g()(a+"movies/"+e.props.genre);case 4:n=t.sent,e.setState({movies:n.data}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])}))),e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"slider-header"},r.a.createElement("div",{className:"genere"},this.props.genre),r.a.createElement(p.b,{to:"/genre/"+this.props.genre.toLowerCase(),className:"view-more"},"View More")),r.a.createElement("div",{className:"slider"},this.state.movies.map((function(e){return r.a.createElement(E,{movie:e,key:e._id})}))))}}]),a}(r.a.Component),b=a(16),y=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={movies:[1,2,3,4,5,6,7,8,9,10]},e.componentDidMount=Object(v.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))),e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(k,{genre:"Action",key:100*Math.random()}),r.a.createElement(k,{genre:"Adventure",key:100*Math.random()}),r.a.createElement(k,{genre:"Comedy",key:100*Math.random()}),r.a.createElement(k,{genre:"Crime",key:100*Math.random()}),r.a.createElement(k,{genre:"Drama",key:100*Math.random()}),r.a.createElement(k,{genre:"Fantasy",key:100*Math.random()}),r.a.createElement(k,{genre:"History",key:100*Math.random()}),r.a.createElement(k,{genre:"Horror",key:100*Math.random()}),r.a.createElement(k,{genre:"Mystery",key:100*Math.random()}),r.a.createElement(k,{genre:"Romance",key:100*Math.random()}),r.a.createElement(k,{genre:"Sci-Fi",key:100*Math.random()}),r.a.createElement(k,{genre:"Thriller",key:100*Math.random()}),r.a.createElement("div",null,r.a.createElement(b.a,null,r.a.createElement("title",null,"Quickmovies"),r.a.createElement("meta",{name:"keyword",content:"Quickmovies.xyz,Dual audio Movies "}),r.a.createElement("meta",{name:"description",content:"All Types Of Moveis Are Available Here"}))))}}]),a}(r.a.Component),w=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={movies:[],page:1,button_text:"Load More"},e.componentDidMount=Object(v.a)(h.a.mark((function t(){var a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.props){t.next=7;break}return t.next=3,g()({url:"https://quickmovies.herokuapp.com/movies/"+e.props.match.params.genre});case 3:a=t.sent,e.setState({movies:a.data}),t.next=7;break;case 7:case"end":return t.stop()}}),t)}))),e.PaginationHandler=Object(v.a)(h.a.mark((function t(){var a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({button_state:!0}),t.next=3,e.setState({page:e.state.page+1});case 3:return e.setState({button_text:"Loading..."}),console.log(e.state.page),t.next=7,g()({url:"https://quickmovies.herokuapp.com/movies/"+e.props.match.params.genre+"?page="+e.state.page});case 7:(a=t.sent).data.length<15?e.setState({button_state:!0}):e.setState({button_state:!1}),a.data&&(e.setState((function(e){return{movies:e.movies.concat(a.data)}})),!0===e.state.button_state&&e.setState({button_text:"No More To Load"}),!0===e.state.button_state?e.setState({button_text:"No More To Load"}):e.setState({button_text:"Load More"}));case 10:case"end":return t.stop()}}),t)}))),e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"genre-main_div"},r.a.createElement("div",null,r.a.createElement("button",{className:"back-button",onClick:function(){window.history.back()}}," \xab")),r.a.createElement("div",{className:"genre-slider"},this.state.movies.map((function(e){return r.a.createElement(E,{movie:e,key:e._id})}))),r.a.createElement("div",null,r.a.createElement("button",{className:"back-button",onClick:this.PaginationHandler,disabled:this.state.button_state},r.a.createElement("span",{className:"load_more"},this.state.button_text)," ")),r.a.createElement(b.a,null,r.a.createElement("title",null,this.props.match.params.genre.toUpperCase()),r.a.createElement("meta",{name:"description",content:this.props.match.params.genre})))}}]),a}(r.a.Component),_=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={},e.componentDidMount=Object(v.a)(h.a.mark((function t(){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.props.location.state&&(console.log(e.props.location.state),e.setState({movie:e.props.location}),e.setState({id:e.props.location.state.id,title:e.props.location.state.title,genre:e.props.location.state.genre,imdb:e.props.location.state.imdb,category:e.props.location.state.category,year:e.props.location.state.release_date,starcast:e.props.location.state.starcast,director:e.props.location.state.director,description:e.props.location.state.description,poster:e.props.location.state.poster,screenshot:e.props.location.state.screenshot,download_link:e.props.location.state.download_link,torrent_link:e.props.location.state.torrent_link,stream_link:e.props.location.state.stream_link,Poster:e.props.location.state.Poster}));case 1:case"end":return t.stop()}}),t)}))),e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"single-movie_main-div"},r.a.createElement("div",null,r.a.createElement("button",{className:"back-button",onClick:function(){window.history.back()}}," \xab")),r.a.createElement("div",{className:"single-movie_details"},r.a.createElement("h1",{className:"des_movie-title"},this.state.title),r.a.createElement(C,{poster:this.state.Poster}),r.a.createElement("div",{className:"des_movie-details"},r.a.createElement("p",null,"IMDb Rating : ",this.state.imdb," "),r.a.createElement("p",null,"Genere : ",this.state.genre," "),r.a.createElement("p",null,"Release Date : ",this.state.year),r.a.createElement("p",{className:"description"},"Star Cast : ",this.state.starcast),r.a.createElement("p",null,"Director: ",this.state.director),r.a.createElement("p",{className:"description"},"Description : ",this.state.description)),r.a.createElement("div",{className:"download-link"},this.state.download_link&&r.a.createElement("a",{href:this.state.download_link},"Download Link"),this.state.torrent_link&&r.a.createElement("a",{href:this.state.torrent_link},"Torrent Link"),this.state.stream_link&&r.a.createElement("a",{href:this.state.stream_link},"Stream Link")),r.a.createElement(b.a,null,r.a.createElement("title",null,this.state.title),r.a.createElement("meta",{name:"keyword",content:this.state.title}),r.a.createElement("meta",{name:"description",content:this.state.title+"quickmovies.xyz"}))))}}]),a}(r.a.Component),C=function(e){return r.a.createElement("div",{className:"des_movie-poster"},r.a.createElement("img",{src:e.poster,alt:"movie-poster"}))},O=_,S=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={title:"",starcast:"",download_link:"",torrent_link:"",stream_link:""},e.componentDidMount=Object(v.a)(h.a.mark((function t(){var a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.props.id){t.next=5;break}return t.next=3,g()({url:"https://quickmovies.herokuapp.com/movie/"+e.props.id});case 3:a=t.sent,e.setState(a.data);case 5:case"end":return t.stop()}}),t)}))),e.onFindMovieDetails=function(){var t=Object(v.a)(h.a.mark((function t(a){var n,r;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.target.value,t.next=3,g()({url:"http://www.omdbapi.com/?i=".concat(n,"&apikey=ce5aafa9")});case 3:(r=t.sent).data.Title&&(e.setState({title:r.data.Title,imdb:r.data.imdbRating,starcast:r.data.Actors,genre:r.data.Genre,release_date:r.data.Released,director:r.data.Director,description:r.data.Plot,Poster:r.data.Poster}),console.log(e.state));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onTitleChange=function(t){var a=t.target.value;e.setState({title:a})},e.onStarcastChange=function(t){var a=t.target.value;e.setState({starcast:a})},e.onDirectorChange=function(t){var a=t.target.value;e.setState({director:a})},e.onImdbChange=function(t){var a=t.target.value;e.setState({imdb:a})},e.onDescriptionChange=function(t){var a=t.target.value;e.setState({description:a})},e.onYearChange=function(t){var a=t.target.value;console.log(a),e.setState({release_date:a})},e.onGenreChange=function(t){var a=Array.from(t.target.selectedOptions,(function(e){return e.value}));e.setState({genre:a})},e.onDownloadLinkChange=function(t){var a=t.target.value;e.setState({download_link:a})},e.onStreamLinkChange=function(t){var a=t.target.value;e.setState({stream_link:a})},e.onTorrentLinkChange=function(t){var a=t.target.value;e.setState({torrent_link:a})},e.onPosterChange=function(t){var a=t.target.files[0];e.setState({poster:a})},e.onScreenShotChange=function(t){var a=t.target.files[0];e.setState({screenshot:a})},e.onSubmit=function(){var t=Object(v.a)(h.a.mark((function t(a){var n,r,o,i;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),(n=new FormData).append("title",e.state.title),n.append("imdb",e.state.imdb),n.append("starcast",e.state.starcast),n.append("director",e.state.director),n.append("description",e.state.description),n.append("genre",e.state.genre),n.append("category",e.state.category),n.append("release_date",e.state.release_date),n.append("download_link",e.state.download_link),n.append("Poster",e.state.Poster),console.log(e.state),e.state.poster&&n.append("poster",e.state.poster),e.state.screenshot&&n.append("screenshot",e.state.screenshot),n.append("torrent_link",e.state.torrent_link),n.append("stream_link",e.state.stream_link),"create"!==e.props.Operation){t.next=23;break}return console.log(e.props.Operation),t.next=21,g()({url:"https://quickmovies.herokuapp.com/movie",method:"post",data:n,headers:{"Content-Type":"multipart/form-data; boundary=".concat("formData._boundary")}});case 21:r=t.sent,console.log(r);case 23:if("update"!==e.props.Operation){t.next=28;break}return t.next=26,g()({url:"https://quickmovies.herokuapp.com/movie/"+e.state._id,method:"patch",data:n,headers:{"Content-Type":"multipart/form-data; boundary=${form._boundary}"}});case 26:o=t.sent,console.log(o);case 28:if("delete"!==e.props.Operation){t.next=33;break}return t.next=31,g()({url:"https://quickmovies.herokuapp.com/movie/"+e.state._id,method:"delete"});case 31:i=t.sent,console.log(i);case 33:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"form"},r.a.createElement("form",{onSubmit:this.onSubmit,encType:"multipart/form-data"},r.a.createElement("input",{name:"title",type:"text",placeholder:"Title",onChange:this.onTitleChange,defaultValue:this.state.title}),r.a.createElement("input",{name:"starcast",type:"text",placeholder:"Starcast",onChange:this.onStarcastChange,defaultValue:this.state.starcast}),r.a.createElement("input",{name:"director",type:"text",placeholder:"Director",onChange:this.onDirectorChange,defaultValue:this.state.director}),r.a.createElement("input",{name:"imdb",type:"number",step:"0.01",placeholder:"IMDb",onChange:this.onImdbChange,defaultValue:this.state.imdb}),r.a.createElement("input",{name:"release_date",type:"date",placeholder:"release_date",onChange:this.onYearChange,defaultValue:this.state.release_date}),r.a.createElement("textarea",{name:"description",placeholder:"Description",onChange:this.onDescriptionChange,defaultValue:this.state.description}),r.a.createElement("select",{multiple:!0,onChange:this.onGenreChange,defaultValue:this.state.genre},r.a.createElement("option",null,"Action"),r.a.createElement("option",null,"Adult"),r.a.createElement("option",null,"Adventure"),r.a.createElement("option",null,"Comedy"),r.a.createElement("option",null,"Crime"),r.a.createElement("option",null,"Drama"),r.a.createElement("option",null,"Fantasy"),r.a.createElement("option",null,"History"),r.a.createElement("option",null,"Horror"),r.a.createElement("option",null,"Mystery"),r.a.createElement("option",null,"Romance"),r.a.createElement("option",null,"Sci-Fi"),r.a.createElement("option",null,"Thriller")),r.a.createElement("input",{defaultValue:this.state.genre}),r.a.createElement("input",{name:"download_link",placeholder:"Download Link",onChange:this.onDownloadLinkChange,defaultValue:this.state.download_link}),r.a.createElement("input",{name:"torrent_link",placeholder:"Torrent Link",onChange:this.onTorrentLinkChange,defaultValue:this.state.torrent_link}),r.a.createElement("input",{name:"stream_link",placeholder:"Stream Link",onChange:this.onStreamLinkChange,defaultValue:this.state.stream_link}),r.a.createElement("input",{type:"file",name:"poster",onChange:this.onPosterChange}),r.a.createElement("input",{type:"file",name:"screenshot",onChange:this.onScreenShotChange}),r.a.createElement("button",null,"Submit")),this.state.Poster&&r.a.createElement("img",{src:this.state.Poster,className:"des_movie-poster",alt:"img"}),this.state.poster&&r.a.createElement("img",{src:this.state.poster,alt:"img"}),r.a.createElement("div",null,r.a.createElement("input",{type:"search",onChange:this.onFindMovieDetails,placeholder:"Enter imdb tt"})))}}]),a}(r.a.Component),j=function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"Delete Movie"),r.a.createElement(S,{Operation:"delete",id:e.id}))},x=function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"Update Movie"),r.a.createElement(S,{Operation:"update",id:e.id}))},N=function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"Create Movie"),r.a.createElement(S,{Operation:"create"}))},D=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).componentDidMount=function(){e.setState({id:e.props.match.params.id}),console.log(e.props.match.params.operation),console.log(e.props.match.params.id)},e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,"delete"===this.props.match.params.operation&&r.a.createElement(j,{id:this.props.match.params.id}),"update"===this.props.match.params.operation&&r.a.createElement(x,{id:this.props.match.params.id}),"create"===this.props.match.params.operation&&r.a.createElement(N,{id:this.props.match.params.id}))}}]),a}(r.a.Component),M=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={movies:[]},e.componentDidMount=Object(v.a)(h.a.mark((function t(){var a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g()({url:"https://quickmovies.herokuapp.com/movies",method:"get"});case 2:a=t.sent,e.setState({movies:a.data});case 4:case"end":return t.stop()}}),t)}))),e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"admin-movies"},this.state.movies.map((function(e){return r.a.createElement(A,{movie:e,key:e.id})})))}}]),a}(r.a.Component),A=function(e){return r.a.createElement("div",{className:"slides"},r.a.createElement("div",null,r.a.createElement("div",{className:"title"},e.movie.title," ")),r.a.createElement("img",{src:e.movie.Poster,alt:"poster",className:"img"}),r.a.createElement("div",{className:"bottom"},r.a.createElement(p.c,{to:"crud/delete/"+e.movie._id},"Delete"),r.a.createElement(p.c,{to:"crud/update/"+e.movie._id},"Update")))},T=M,L=function(){var e=Object(u.f)();console.log(e);var t=function(){var t=Object(v.a)(h.a.mark((function t(a){var n,r;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.target.value,t.next=3,g()({url:"https://quickmovies.herokuapp.com/search/?title="+n});case 3:r=t.sent,e.push({pathname:"/search",response:r.data});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,r.a.createElement(p.b,{to:"/"},"QuickMovies")),r.a.createElement("input",{type:"search",className:"search-box",placeholder:"Search",onChange:t}))},P=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).componentDidMount=function(){console.log(e.props.history)},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("button",{className:"back-button",onClick:function(){e.props.history.push("/")}}," \xab"),this.props.history.location.response&&r.a.createElement(V,{movies:this.props.history.location.response}),r.a.createElement(b.a,null,r.a.createElement("title",null,"Search"),r.a.createElement("meta",{name:"descrption",content:"Search all type of movies here."})))}}]),a}(r.a.Component),V=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"genre-main_div"},r.a.createElement("div",null),r.a.createElement("div",{className:"genre-slider"},e.movies.map((function(e){return r.a.createElement(E,{movie:e,key:e._id})})))))},q=P,R=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement("div",null,r.a.createElement(L,null),r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/",component:y}),r.a.createElement(u.a,{exact:!0,path:"/genre/:genre",component:w}),r.a.createElement(u.a,{path:"/movie/:id",render:function(e){return r.a.createElement(O,e)}}),r.a.createElement(u.a,{path:"/crud/:operation/:id",component:D}),r.a.createElement(u.a,{path:"/movies",component:T}),r.a.createElement(u.a,{path:"/search",component:q}))))}}]),a}(r.a.Component),W=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function H(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(R,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");W?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):H(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):H(t,e)}))}}()}},[[36,1,2]]]);
//# sourceMappingURL=main.55db8586.chunk.js.map