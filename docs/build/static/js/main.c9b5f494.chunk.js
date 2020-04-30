(this.webpackJsonpspacex=this.webpackJsonpspacex||[]).push([[0],{31:function(e,a,n){e.exports=n(45)},45:function(e,a,n){"use strict";n.r(a);var t,r,c,l,i=n(1),s=n.n(i),m=n(24),u=n.n(m),o=n(29),d=n(5),p=n(48),g=(n(36),n(30)),f=(n(21),n(19)),E=n(14),h=n.n(E),v=(n(13),n(20),n(12));function b(){var e=Object(f.a)(["\n    query Launches {\n  launches {\n    flight_number\n    mission_name\n    launch_year\n  }\n}\n    "]);return b=function(){return e},e}function N(){var e=Object(f.a)(["\n    query Launch($id: String!) {\n  launch(id: $id) {\n    flight_number\n    mission_name\n    launch_year\n    launch_success\n    details\n    launch_site {\n      site_name\n    }\n    rocket {\n      rocket_name\n      rocket_type\n    }\n    links {\n      flickr_images\n    }\n  }\n}\n    "]);return N=function(){return e},e}!function(e){e.Past="past",e.Upcoming="upcoming"}(t||(t={})),function(e){e.Asc="asc",e.Desc="desc"}(r||(r={})),function(e){e.Latest="latest",e.Next="next",e.Past="past",e.Upcoming="upcoming"}(c||(c={})),function(e){e.Public="PUBLIC",e.Private="PRIVATE"}(l||(l={}));var _=h()(N());var k=h()(b());var y=function(e){var a,n=e.clickHandler,t=e.id,r=v.c(k,a),c=r.data,l=r.error;if(r.loading)return s.a.createElement("div",{className:"alert alert-info"},"...Loading");if(l||!c)return s.a.createElement("div",{className:"alert alert-danger"},JSON.stringify(l));var i=c.launches;return s.a.createElement("div",{className:"card"},s.a.createElement("h4",{className:"card-header"},"Missions"),s.a.createElement("div",null,s.a.createElement("pre",null,s.a.createElement("code",null,JSON.stringify(i)))),s.a.createElement("div",null,i.map((function(e){var a=e.flight_number,t=e.mission_name;return s.a.createElement("h3",{onClick:function(e){e.preventDefault(),n(a)}},t," ",a)}))),s.a.createElement("ul",{className:"list-group list-group-flush"},i.map((function(e){var a=e.flight_number,r=e.mission_name,c=e.launch_year;return s.a.createElement("a",{href:"#",key:a,className:"list-group-item list-group-item-action ".concat(t===a?"active":""," d-flex justify-content-between align-items-center"),onClick:function(e){e.preventDefault(),n(a)}},s.a.createElement("span",null,r),s.a.createElement("span",{className:"badge badge-primary badge-pill"},c))})),"}"))},S=function(e){var a,n=e.id,t=(a={variables:{id:String(n)}},v.c(_,a)),r=t.data,c=t.error;if(t.loading)return s.a.createElement("div",{className:"alert alert-info"},"...Loading");if(c)return s.a.createElement("div",{className:"alert alert-danger"},JSON.stringify(c));if(!r)return s.a.createElement("div",null,"Select a flight from the panel");var l=r.launch,i=(l.flight_number,l.mission_name),m=l.launch_success,u=l.rocket,o=u.rocket_name,d=u.rocket_type,p=l.details,g=l.links.flickr_images;return s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-header"},i," ",s.a.createElement("span",{className:"badge badge-secondary badge-pill"},m)),s.a.createElement("div",{className:"card-body"},s.a.createElement("h5",{className:"card-title"},o," ",s.a.createElement("span",{className:"badge badge-secondary badge-pill"},d)),s.a.createElement("p",{className:"card-text"},p)),s.a.createElement("ul",{className:"list-group list-group-flush"},g.map((function(e,a){return s.a.createElement("li",{key:a,className:"list-group-item"},s.a.createElement("img",{className:"img-fluid",src:e,alt:e}))}))))},x=function(){var e=Object(i.useState)(42),a=Object(g.a)(e,2),n=a[0],t=a[1],r=Object(i.useCallback)((function(e){return t(e)}),[]);return s.a.createElement(s.a.Fragment,null,s.a.createElement("nav",{className:"navbar navbar-light bg-light mb-3"},s.a.createElement("div",{className:"container"},s.a.createElement("span",{className:"navbar-brand mb-0 h1"},"SpaceX Launches"))),s.a.createElement("main",{className:"container mb-3",role:"main"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-sm-4"},s.a.createElement(y,{clickHandler:r,id:n})),s.a.createElement("div",{className:"col-sm-8"},s.a.createElement(S,{id:n})))),s.a.createElement("footer",{className:"py-3 bg-dark text-muted"},s.a.createElement("div",{className:"container"},s.a.createElement("p",{className:"float-right"},s.a.createElement("a",{href:"#"},"Back to top")),s.a.createElement("p",null,"SpaceX Launches"))))},L=new o.a({uri:"https://spacexdata.herokuapp.com/graphql"});u.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(d.b,{client:L},s.a.createElement(p.a,{client:L},s.a.createElement(x,null)))),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.c9b5f494.chunk.js.map