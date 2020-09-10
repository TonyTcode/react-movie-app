(window.webpackJsonpreact_movie_db_course=window.webpackJsonpreact_movie_db_course||[]).push([[0],{28:function(e,t,a){e.exports=a(54)},33:function(e,t,a){},34:function(e,t,a){},40:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(25),o=a.n(c),m=(a(33),a(6)),i=a(8),l=(a(34),function(){return r.a.createElement("div",{className:"rmdb-header"},r.a.createElement("div",{className:"rmdb-header-content"},r.a.createElement(m.b,{to:"/"},r.a.createElement("img",{className:"rmdb-logo",src:"./images/reactMovie_logo.png",alt:"rmdb-logo"})),r.a.createElement("img",{className:"rmdb-tmdb-logo",src:"./images/tmdb_logo.png",alt:"tmdb-logo"})))}),s=a(11),u="https://api.themoviedb.org/3/",v="b2dc1affb27b024e4bd237fb2d1e9b4d",b="http://image.tmdb.org/t/p/",d=(a(40),function(e){var t=e.image,a=e.title,n=e.text;return r.a.createElement("div",{className:"rmdb-heroimage",style:{background:"linear-gradient(to bottom, rgba(0,0,0,0)\n            39%,rgba(0,0,0,0)\n            41%, rgba(0,0,0,0.65)\n            100%),\n            url('".concat(t,"'), #1c1c1c")}},r.a.createElement("div",{className:"rmdb-heroimage-content"},r.a.createElement("div",{className:"rmdb-heroimage-text"},r.a.createElement("h1",null,a),r.a.createElement("p",null,n))))}),p=a(12),f=a(13),g=a(17),h=a(14),E=a(18),O=a(7),N=a.n(O),y=(a(42),function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(g.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={value:""},a.timeout=null,a.doSearch=function(e){a.setState({value:e.target.value}),clearTimeout(a.timeout),a.timeout=setTimeout((function(){a.props.callback(a.state.value)}),500)},a}return Object(E.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"rmdb-searchbar"},r.a.createElement("div",{className:"rmdb-searchbar-content"},r.a.createElement(N.a,{className:"rmdb-fa-search",name:"search",size:"2x"}),r.a.createElement("input",{type:"text",className:"rmdb-searchbar-input",placeholder:"Search",onChange:this.doSearch,value:this.state.value})))}}]),t}(n.Component)),j=(a(43),function(e){var t=e.children,a=e.header,n=e.loading;return r.a.createElement("div",{className:"rmdb-grid"},a&&!n?r.a.createElement("h1",null,a):null,r.a.createElement("div",{className:"rmdb-grid-content"},t.map((function(e,t){return r.a.createElement("div",{key:t,className:"rmdb-grid-element"},e)}))))}),k=a(4),w=a.n(k),S=(a(44),function(e){var t=e.image,a=e.movieId,n=e.movieName,c=e.clickable;return r.a.createElement("div",{className:"rmdb-moviethumb"},c?r.a.createElement(m.b,{to:{pathname:"/".concat(a),movieName:"".concat(n)}},r.a.createElement("img",{className:"clickable",src:t,alt:"moviethumb"})):r.a.createElement("img",{src:t,alt:"moviethumb"}))});S.proTypes={image:w.a.string,movieId:w.a.number,movieName:w.a.string,clickable:w.a.bool};var _=S,x=(a(45),function(e){var t=e.onClick,a=e.text;return r.a.createElement("div",{className:"rmdb-loadmorebtn",onClick:function(){return t(!0)}},r.a.createElement("p",null,a))}),I=(a(46),function(){return r.a.createElement("div",{className:"loader"})}),P=(a(47),a(10)),D=a.n(P),T=a(22),R=a(15),C=a(16);function M(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function J(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?M(a,!0).forEach((function(t){Object(R.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):M(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var z=function(){var e=function(){var e=Object(n.useState)({movies:[]}),t=Object(s.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),o=Object(s.a)(c,2),m=o[0],i=o[1],l=Object(n.useState)(!1),b=Object(s.a)(l,2),d=b[0],p=b[1],f=function(){var e=Object(C.a)(D.a.mark((function e(t){var a,n;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!1),i(!0),(a=new URLSearchParams(t)).get("page")||r((function(e){return J({},e,{movies:[],searchTerm:a.get("query")})})),e.prev=4,e.next=7,fetch(t);case 7:return e.next=9,e.sent.json();case 9:n=e.sent,r((function(e){return J({},e,{movies:[].concat(Object(T.a)(e.movies),Object(T.a)(n.results)),heroImage:e.heroImage||n.results[0],currentPage:n.page,totalPages:n.total_pages})})),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),p(!0);case 16:i(!1);case 17:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){if(sessionStorage.getItem("HomeState")){var e=JSON.parse(sessionStorage.getItem("HomeState"));r(J({},e))}else f("".concat(u,"movie/popular?api_key=").concat(v))}),[]),Object(n.useEffect)((function(){a.searchTerm||sessionStorage.setItem("HomeState",JSON.stringify(a))}),[a]),[{state:a,isLoading:m,isError:d},f]}(),t=Object(s.a)(e,2),a=t[0],c=a.state,o=a.isLoading,m=t[1];return r.a.createElement("div",{className:"rmdb-home"},c.heroImage&&!c.searchTerm?r.a.createElement("div",null,r.a.createElement(d,{image:"".concat(b).concat("w1280").concat(c.heroImage.backdrop_path),title:c.heroImage.original_title,text:c.heroImage.overview})):null,r.a.createElement(y,{callback:function(e){var t="".concat(u,"search/movie?api_key=").concat(v,"&query=").concat(e);e||(t="".concat(u,"movie/popular?api_key=").concat(v)),m(t)}}),r.a.createElement("div",{className:"rmdb-home-grid"},r.a.createElement(j,{header:c.searchTerm?"Search Results":"Popular Movies",loading:o},c.movies.map((function(e,t){return r.a.createElement(_,{key:t,clickable:!0,image:e.poster_path?"".concat(b).concat("w500").concat(e.poster_path):"./images/no_image.jpg",movieId:e.id,movieName:e.original_title})}))),o?r.a.createElement(I,null):null,c.currentPage<=c.totalPages&&!o?r.a.createElement(x,{text:"Load More",onClick:function(){var e=c.searchTerm,t=c.currentPage,a="".concat(u,"search/movie?api_key=").concat(v,"&query=").concat(e,"&page=").concat(t+1);e||(a="".concat(u,"movie/popular?api_key=").concat(v,"&page=").concat(t+1)),m(a)}}):null))},L=(a(49),function(e){var t=e.movie;return r.a.createElement("div",{className:"rmdb-navigation"},r.a.createElement("div",{className:"rmdb-navigation-content"},r.a.createElement(m.b,{to:"/"},r.a.createElement("p",null,"Home")),r.a.createElement("p",null,"/"),r.a.createElement("p",null,t)))}),A=(a(50),function(e){return r.a.createElement("div",{className:"rmdb-movieinfo",style:{background:e.movie.backdrop_path?"url('".concat(b).concat("w1280").concat(e.movie.backdrop_path,"')"):"#000"}},r.a.createElement("div",{className:"rmdb-movieinfo-content"},r.a.createElement("div",{className:"rmdb-movieinfo-thumb"},r.a.createElement(_,{image:e.movie.poster_path?"".concat(b).concat("w500").concat(e.movie.poster_path):"./images/no_image.jpg",clickable:!1})),r.a.createElement("div",{className:"rmdb-movieinfo-text"},r.a.createElement("h1",null,e.movie.title),r.a.createElement("h3",null,"PLOT"),r.a.createElement("p",null,e.movie.overview),r.a.createElement("h3",null,"IMDB RATING"),r.a.createElement("div",{className:"rmdb-rating"},r.a.createElement("meter",{min:"0",max:"100",optimum:"100",low:"40",high:"70",value:10*e.movie.vote_average}),r.a.createElement("p",{className:"rmdb-score"},e.movie.vote_average)),e.directors.length>1?r.a.createElement("h3",null,"DIRECTORS"):r.a.createElement("h3",null,"DIRECTOR"),e.directors.map((function(e,t){return r.a.createElement("p",{key:t,className:"rmdb-director"},e.name)}))),r.a.createElement(N.a,{className:"fa-film",name:"film",size:"5x"})))}),F=function(e){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0}).format(e)},H=(a(51),function(e){var t=e.time,a=e.budget,n=e.revenue;return r.a.createElement("div",{className:"rmdb-movieinfobar"},r.a.createElement("div",{className:"rmdb-movieinfobar-content"},r.a.createElement("div",{className:"rmdb-movieinfobar-content-col"},r.a.createElement(N.a,{className:"fa-time",name:"clock-o",size:"2x"}),r.a.createElement("span",{className:"rmdb-movieinfobar-info"},"Running time: ",function(e){var t=Math.floor(e/60),a=e%60;return"".concat(t,"h ").concat(a,"m")}(t))),r.a.createElement("div",{className:"rmdb-movieinfobar-content-col"},r.a.createElement(N.a,{className:"fa-budget",name:"money",size:"2x"}),r.a.createElement("span",{className:"rmdb-movieinfobar-info"},"Budget: ",F(a))),r.a.createElement("div",{className:"rmdb-movieinfobar-content-col"},r.a.createElement(N.a,{className:"fa-revenue",name:"ticket",size:"2x"}),r.a.createElement("span",{className:"rmdb-movieinfobar-info"},"Revenue: ",F(n)))))}),U=(a(52),function(e){return r.a.createElement("div",{className:"rmdb-actor"},r.a.createElement("img",{src:e.actor.profile_path?"".concat(b).concat("w154").concat(e.actor.profile_path):"./images/no_image.jpg",alt:"actorthumb"}),r.a.createElement("span",{className:"rmdb-actor-name"},e.actor.name),r.a.createElement("span",{className:"rmdb-actor-character"},e.actor.character))});a(53);function q(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var B=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(g.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={movie:null,actors:null,directors:[],loading:!1},a.fetchItems=function(){var e=Object(C.a)(D.a.mark((function e(t){var n,r,c,o,m;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.props.match.params.movieId,e.prev=1,e.next=4,fetch(t);case 4:return e.next=6,e.sent.json();case 6:if(!(r=e.sent).status_code){e.next=11;break}a.setState({loading:!1}),e.next=20;break;case 11:return a.setState({movie:r}),c="".concat(u,"movie/").concat(n,"/credits?api_key=").concat(v),e.next=15,fetch(c);case 15:return e.next=17,e.sent.json();case 17:o=e.sent,m=o.crew.filter((function(e){return"Director"===e.job})),a.setState({actors:o.cast,directors:m,loading:!1},(function(){localStorage.setItem("".concat(n),JSON.stringify(a.state))}));case 20:e.next=25;break;case 22:e.prev=22,e.t0=e.catch(1),console.log("There was an error: ",e.t0);case 25:case"end":return e.stop()}}),e,null,[[1,22]])})));return function(t){return e.apply(this,arguments)}}(),a}return Object(E.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.movieId;if(localStorage.getItem("".concat(e))){var t=JSON.parse(localStorage.getItem("".concat(e)));this.setState(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?q(a,!0).forEach((function(t){Object(R.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):q(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},t))}else{this.setState({loading:!0});var a="".concat(u,"movie/").concat(e,"?api_key=").concat(v,"&language=en-US");this.fetchItems(a)}}},{key:"render",value:function(){var e=this.props.location.movieName,t=this.state,a=t.movie,n=t.directors,c=t.actors,o=t.loading;return r.a.createElement("div",{className:"rmdb-movie"},a?r.a.createElement("div",null,r.a.createElement(L,{movie:e}),r.a.createElement(A,{movie:a,directors:n}),r.a.createElement(H,{time:a.runtime,budget:a.budget,revenue:a.revenue})):null,c?r.a.createElement("div",{className:"rmdb-movie-grid"},r.a.createElement(j,{header:"Actors"},c.map((function(e,t){return r.a.createElement(U,{key:t,actor:e})})))):null,c||o?null:r.a.createElement("h1",null,"No Movie Found!"),o?r.a.createElement(I,null):null)}}]),t}(n.Component),G=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Whoooops. This page doesn't exist."))},W=function(){return r.a.createElement(m.a,{basename:""},r.a.createElement(r.a.Fragment,null,r.a.createElement(l,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/",component:z,exact:!0}),r.a.createElement(i.a,{path:"/:movieId",component:B,exact:!0}),r.a.createElement(i.a,{component:G}))))};o.a.render(r.a.createElement(W,null),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.95a72b73.chunk.js.map