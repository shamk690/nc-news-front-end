(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,n){e.exports=n.p+"static/media/logo-nc-news.fb444ec6.gif"},25:function(e,t,n){e.exports=n(57)},30:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(20),o=n.n(c),l=(n(30),n(2)),i=n(3),s=n(5),u=n(4),m=n(6),d=n(1),p=(n(9),n(22)),h=n.n(p),f=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={loginUser:""},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"grid"},r.a.createElement("div",{className:"item1"},r.a.createElement("header",null,r.a.createElement(d.a,{to:"/"},r.a.createElement("img",{src:h.a,alt:"",title:"logo"})),r.a.createElement("h1",null," welcome to ncnews"))),r.a.createElement("div",{className:"item2"},r.a.createElement("nav",{className:"navbar"},r.a.createElement(d.a,{to:"/",className:"nav-link"},"Home"),r.a.createElement("div",{className:"dropdown"},r.a.createElement("button",{className:"dropbtn"},"Articles"),r.a.createElement("div",{className:"dropdown-content"},r.a.createElement(d.a,{to:"/articles",className:"nav-link"},"Articles"),r.a.createElement(d.a,{to:"/newarticle",className:"nav-link"},"Add New Article"))),r.a.createElement("div",{className:"dropdown"},r.a.createElement("button",{className:"dropbtn"},"Sort by"),r.a.createElement("div",{className:"dropdown-content"},r.a.createElement(d.a,{to:"/articles?sort_by=created_at",className:"nav-link"},"Created_at"),r.a.createElement(d.a,{to:"/articles?sort_by=comment_count",className:"nav-link"},"Comment Count"),r.a.createElement(d.a,{to:"/articles?sort_by=votes",className:"nav-link"},"Votes"," "))),r.a.createElement(d.a,{to:"/login",className:"nav-link",id:"login"}," ",this.props.loggedInUser?r.a.createElement("button",{onClick:this.props.logOut,id:"logoutbtn"}," ","logOut ",this.props.loggedInUser):r.a.createElement("li",null,"login ")," "))))}}]),t}(a.Component),g=n(7),v=n.n(g),b="https://shamila-nc-news.herokuapp.com/api",E=function(e){return v.a.get("".concat(b,"/articles"),{params:e}).then(function(e){return e.data.articles})},y=function(e){return v.a.get("".concat(b,"/topics"),{params:e}).then(function(e){return e.data.topics})},O=function(e){return v.a.get("".concat(b,"/users/").concat(e)).then(function(e){return e.data.user})},j=function(e){return v.a.post("".concat(b,"/articles/"),e).then(function(e){return e.data.article})},w=function(e,t){return v.a.post("".concat(b,"/articles/").concat(e,"/comments"),t).then(function(e){return e.data.comment})},N=function(e){return v.a.delete("".concat(b,"/comments/").concat(e)).then(function(e){return e.data.comment})},I=function(e){return v.a.delete("".concat(b,"/articles/").concat(e)).then(function(e){return e.data.article})},k=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={topics:[]},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"topic"},r.a.createElement("h2",null,"sort by topics"),r.a.createElement("aside",null,r.a.createElement("ul",{id:"topicsList"},this.state.topics.map(function(e,t){return r.a.createElement("div",{id:"topicsContainer",key:t},r.a.createElement(d.a,{to:"/topics/".concat(e.slug),className:"nav-link"},r.a.createElement("li",null,e.slug),r.a.createElement("li",null,e.description)))}))))}},{key:"componentDidMount",value:function(){var e=this;y().then(function(t){e.setState({topics:t})})}},{key:"sendTopicToPostArticles",value:function(){this.props.getTopic(this.state.topics)}}]),t}(a.Component),A=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={articleList:[]},n.addNewArticle=function(){n.props.addNewArticle(n.state.articleList)},n.handleDelete=function(e){console.log("id  ",e),I(e).then(function(){var t=n.state.articleList.filter(function(t){return t.article_id!==e});n.setState({articleList:t})})},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return this.state.articleList.length?r.a.createElement("div",{className:"grid"},r.a.createElement("div",{className:"item3"},this.state.articleList.map(function(t,n){return r.a.createElement("div",{className:"article",key:t.article_id}," ",r.a.createElement("p",null),r.a.createElement(d.a,{to:"/articles/".concat(t.article_id),className:"link"},r.a.createElement("p",{id:"title"},t.title)),r.a.createElement("p",{className:"article-info"},"author: ",t.author),r.a.createElement("p",{className:"article-info"}," ","comments: ",t.comment_count),r.a.createElement("p",{className:"article-info",id:"topic"},"From: ",t.topic),r.a.createElement("p",{id:"vote"},"votes: ",t.votes),r.a.createElement("p",{id:"body"},t.body),r.a.createElement("p",{id:"date"},t.created_at)," ",r.a.createElement("button",{disabled:e.props.loggedInUser!==t.author,onClick:function(){return e.handleDelete(t.article_id)}},"Delete"))})),r.a.createElement("div",{className:"item4"},r.a.createElement(k,null)),r.a.createElement("footer",{className:"item5"})):r.a.createElement("h1",null,"loading....")}},{key:"componentDidMount",value:function(e){var t=this,n={topic:this.props.topic};E(n).then(function(e){t.setState({articleList:e})}).catch(function(e){var t=e.response,n=(t.data,t.status);Object(d.c)("/error",{state:{from:"topic",msg:"resourse not found ",status:n},replace:!0})})}},{key:"componentDidUpdate",value:function(e,t){var n=this;if(e.topic!==this.props.topic){var a={topic:this.props.topic};E(a).then(function(e){n.setState({articleList:e})})}else e.location.search!==this.props.location.search&&(function(e){return v.a.get("".concat(b,"/articles").concat(e),{params:e}).then(function(e){return e.data.articles})}(this.props.location.search).then(function(e){n.setState({articleList:e})}),this.props.location.search="")}}]),t}(a.Component),U=n(23),C=n(24),S=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={vote:0},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return e.handleVotes(e.props.id,1)},disabled:1===this.state.vote||!this.props.loggedInUser},"vote up"),r.a.createElement("button",{onClick:function(){return e.handleVotes(e.props.id,-1)},disabled:-1===this.state.vote||!this.props.loggedInUser},"vote down"),r.a.createElement("p",null,this.state.vote+this.props.votes))}},{key:"handleVotes",value:function(e,t){"article"===this.props.type?function(e,t){v.a.patch("".concat(b,"/articles/").concat(e),t).then(function(e){})}(e,{inc_votes:t}):function(e,t){v.a.patch("".concat(b,"/comments/").concat(e),t).then(function(e){return e})}(e,{inc_votes:t}),this.setState({vote:this.state.vote+t})}}]),t}(a.Component),_=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={userInput:""},n.handleInput=function(e){n.setState({userInput:e.target.value})},n.handleSubmit=function(e){e.preventDefault();var t={username:n.props.loggedInUser,body:n.state.userInput};w(n.props.id,t).then(function(e){n.props.addNewComment(e)})},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",name:"comment",required:!0,disabled:!this.props.loggedInUser,placeholder:"Enter comment",onChange:this.handleInput}),r.a.createElement("button",{disabled:!this.props.loggedInUser},"post comment")))}}]),t}(a.Component),D=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={comments:[]},n.addNewComment=function(e){n.setState(function(t){var n=t.comments.map(function(e){return Object(C.a)({},e)});return{comments:[e].concat(Object(U.a)(n))}})},n.handleDelete=function(e){console.log("id  ",e),N(e).then(function(){var t=n.state.comments.filter(function(t){return t.comment_id!==e});n.setState({comments:t})})},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(_,{loggedInUser:this.props.loggedInUser,addNewComment:this.addNewComment,id:this.props.id}),r.a.createElement("h1",null,"Comments"),this.state.comments.map(function(t){return r.a.createElement("div",{key:t.comment_id},r.a.createElement("p",null,"commented by: ",t.author),r.a.createElement("p",null,t.body),r.a.createElement(S,{votes:t.votes,id:t.comment_id,loggedInUser:e.props.loggedInUser}),r.a.createElement("button",{disabled:e.props.loggedInUser!==t.author,onClick:function(){return e.handleDelete(t.comment_id)}},"Delete"))}))}},{key:"componentDidMount",value:function(){var e,t=this;(e=this.props.id,v.a.get("".concat(b,"/articles/").concat(e,"/comments")).then(function(e){return e.data.comments})).then(function(e){t.setState({comments:e})})}}]),t}(a.Component),L=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={error:null,singleArticle:null},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.state.singleArticle?r.a.createElement("div",{className:"singleArticle"},r.a.createElement("p",null,this.state.singleArticle.title),r.a.createElement("p",null,this.state.singleArticle.article_id),r.a.createElement("p",null,this.state.singleArticle.created_at),r.a.createElement("p",null,this.state.singleArticle.body),r.a.createElement(S,{votes:this.state.singleArticle.votes,loggedInUser:this.props.loggedInUser,id:this.state.singleArticle.article_id,type:"article"}),r.a.createElement(D,{id:this.props.article_id,loggedInUser:this.props.loggedInUser})):r.a.createElement("h1",null,"loading....")}},{key:"componentDidMount",value:function(){var e,t=this;(e=this.props.article_id,v.a.get("".concat(b,"/articles/").concat(e)).then(function(e){return e.data.article})).then(function(e){t.setState({singleArticle:e})}).catch(function(e){var t=e.response,n=t.data,a=t.status;console.log(n,"res"),Object(d.c)("/error",{state:{from:"article",msg:"resourse not found ",status:a},replace:!0})})}}]),t}(a.Component),T=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={userNameInput:""},n.handleInput=function(e){n.setState({userNameInput:e.target.value})},n.handleSubmit=function(e){e.preventDefault(),""===n.state.userNameInput?alert("please enter username"):O(n.state.userNameInput).then(function(e){n.props.loginUser(e.username)}).catch(function(e){var t=e.response,n=(t.data,t.status);Object(d.c)("/error",{state:{from:"user",msg:" not found ",status:n},replace:!0})})},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"grid"},r.a.createElement("form",{id:"loginForm"},"Username:"," ",r.a.createElement("input",{type:"text",onChange:this.handleInput,name:"usrname",required:!0,placeholder:"username"}),r.a.createElement("button",{type:"onClick",onClick:this.handleSubmit},"submit")))}}]),t}(a.Component);function q(e){console.log("from error   ",e.location.state);var t=e.location.state,n=t.from,a=t.msg,c=t.status;return r.a.createElement("div",null,r.a.createElement("h2",null,n," ",a," ","  "," status : ",c,"....."))}var M=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",body:"",author:"",topic:"",topics:[]},n.handleInput=function(e){n.setState({author:e.target.value})},n.getTitle=function(e){n.setState({title:e.target.value})},n.getBody=function(e){n.setState({body:e.target.value})},n.getAllTopics=function(e){n.setState({topic:e.target.value})},n.handleSubmit=function(e){e.preventDefault();var t={author:n.props.loggedInUser,body:n.state.body,title:n.state.title,topic:n.state.topic};j(t).then(function(e){n.props.addNewArticle(e)})},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"item3"},r.a.createElement("h2",{id:"title"},"Add New Article"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("fieldset",null,r.a.createElement("legend",null,"Important Information"),r.a.createElement("label",{label:!0,for:"author"},"Author:"),r.a.createElement("input",{type:"author",name:"author",id:"author",autofocus:!0,required:!0,value:this.props.loggedInUser,placeholder:"username"}),r.a.createElement("br",null),r.a.createElement("label",{for:"title"},"Title:"),r.a.createElement("input",{type:"title",name:"title",id:"title",required:!0,onChange:this.getTitle,placeholder:"title"}),r.a.createElement("br",null),r.a.createElement("label",{for:"topic"},"Topic:"),r.a.createElement("select",{disabled:!this.props.loggedInUser,name:"topic",id:"topic",topic:this.state.topic,onChange:this.getAllTopics,required:!0},r.a.createElement("option",{disabled:!0,selected:!0,value:!0}," ","-- select an option --"," "),this.state.topics.map(function(t,n){return r.a.createElement("option",{topic:e.state.topic},t.slug)})),r.a.createElement("br",null)),r.a.createElement("fieldset",null,r.a.createElement("legend",null,"Article Area"),r.a.createElement("label",{for:"article"},"Article:"),r.a.createElement("textarea",{disabled:!this.props.loggedInUser,placeholder:this.props.loggedInUser?"Write Article":"Please login to write an article",rows:"12",cols:"80",type:"article",name:"article",id:"starting_date",required:!0,value:this.state.body,onChange:this.getBody}),r.a.createElement("br",null)),r.a.createElement("fieldset",{id:"buttons"},r.a.createElement("legend",null,"Submit Your Article"),r.a.createElement("button",{disabled:!this.props.loggedInUser},"Submit"),r.a.createElement("br",null))))}},{key:"componentDidMount",value:function(){var e=this;y().then(function(t){e.setState({topics:t})})}}]),t}(a.Component),x=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={loggedInUser:"",newList:[]},n.loginUser=function(e){e&&n.setState({loggedInUser:e},function(){return Object(d.c)("/articles")})},n.logOut=function(){n.setState({loggedInUser:""},function(){return Object(d.c)("/")})},n.addNewArticle=function(e){n.setState({newList:e},function(){return Object(d.c)("/articles")}),console.log("newlist",e)},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){console.log("app ",this.props);var e=this.state.loggedInUser;return r.a.createElement("div",null,r.a.createElement(f,{logOut:this.logOut,loggedInUser:this.state.loggedInUser}),r.a.createElement(d.b,null,r.a.createElement(A,{path:"/"}),r.a.createElement(A,{loggedInUser:e,path:"/articles",addNewArticle:this.addNewArticle}),r.a.createElement(A,{path:"/topics/:topic"}),r.a.createElement(L,{path:"/articles/:article_id",loggedInUser:e}),r.a.createElement(D,{path:"/articles/:article_id/comments"}),r.a.createElement(T,{path:"/login",loginUser:this.loginUser}),r.a.createElement(q,{path:"/error"}),r.a.createElement(M,{path:"/newarticle",loggedInUser:e,addNewArticle:this.addNewArticle})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){}},[[25,1,2]]]);
//# sourceMappingURL=main.5dcf443e.chunk.js.map