(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"58zm":function(l,n,i){"use strict";i.r(n);var t=i("8Y7J");class a{}var b=i("NcP4"),u=i("t68o"),o=i("xYTU"),s=i("zbXB"),c=i("pMnS"),e=i("zF2Y"),r=i("No7X"),d=i("bIR2"),P=i("mM23"),f=i("HQMb"),p=i("h9v1"),m=i("Mr+X"),g=i("Gi4r"),h=i("lzlj"),x=i("igqZ"),F=i("omvX"),v=i("SVse"),w=i("aR35");class y{constructor(l,n,i,t,a,b,u){this.route=l,this.http=n,this.router=i,this.activatedRoute=t,this.authGuardService=a,this.messageService=b,this.fb=u,this.user={},this.userId="",this.isCurrentUser=!1,this.appConfig={},this.notifications=[],this.isLoading=!1,this.loaderMsg="Loading notifications...",this.isUserLoggedIn=!1,this.appConfig=w.a,this.isUserLoggedIn=this.authGuardService.isUserLoggedIn(),this.user=this.authGuardService.getLoggedInUserDetails(),this.userId=this.user.user_id}ngOnInit(){this.getAllNotifications()}getAllNotifications(){this.loaderMsg="Loading notifications...",this.isLoading=!0,this.http.getNotifications(this.userId).subscribe(l=>{this.isLoading=!1,this.notifications=l},l=>{this.isLoading=!1})}makeNotificationRead(l){l.showMsg=!l.showMsg,l.status||this.http.makeNotificationRead(this.userId,l.id).subscribe(n=>{this.isLoading=!1,l.status=!0,this.messageService.sendCommonMessage({topic:"notifications",reason:"Read Notification"})},l=>{this.isLoading=!1})}ngOnDestroy(){}}var M=i("iInd"),I=i("mKmO"),L=i("MKys"),N=i("tZre"),R=i("s7LF"),j=t.Db({encapsulation:2,styles:[[".notification-body .unread-icon{margin-top:20px;font-size:14px;color:#b00100}.notification-body .unread{font-weight:400!important}.notification-body .list.notification{padding-bottom:0;cursor:pointer}.notification-body .mat-card{box-shadow:0 3px 6px #00000029;border:1px solid #ebebeb!important;border-radius:20px!important;padding:30px 30px 10px!important;margin-bottom:22px!important}.notification-body .label{font-size:18px!important;color:#888;font-weight:400!important;margin-bottom:16px!important}"]],data:{}});function k(l){return t.ac(0,[(l()(),t.Fb(0,0,null,null,1,"app-progress-bar",[["class","page"]],null,null,null,f.b,f.a)),t.Eb(1,114688,null,0,p.a,[],{message:[0,"message"]},null)],(function(l,n){l(n,1,0,n.component.loaderMsg)}),null)}function E(l){return t.ac(0,[(l()(),t.Fb(0,0,null,null,0,"p",[],[[8,"innerHTML",1]],null,null,null,null))],null,(function(l,n){l(n,0,0,n.parent.context.$implicit.description)}))}function A(l){return t.ac(0,[(l()(),t.Fb(0,0,null,null,3,"div",[["class","flex-item"]],null,null,null,null,null)),(l()(),t.Fb(1,0,null,null,2,"mat-icon",[["class","unread-icon mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,m.b,m.a)),t.Eb(2,9158656,null,0,g.b,[t.n,g.d,[8,null],[2,g.a],[2,t.o]],null,null),(l()(),t.Yb(-1,0,["brightness_1"]))],(function(l,n){l(n,2,0)}),(function(l,n){l(n,1,0,t.Rb(n,2).inline,"primary"!==t.Rb(n,2).color&&"accent"!==t.Rb(n,2).color&&"warn"!==t.Rb(n,2).color)}))}function O(l){return t.ac(0,[(l()(),t.Fb(0,0,null,null,11,"mat-card",[["class","list notification flex-containers space-between mat-card"]],[[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(l,n,i){var t=!0;return"click"===n&&(t=!1!==l.component.makeNotificationRead(l.context.$implicit)&&t),t}),h.b,h.a)),t.Eb(1,49152,null,0,x.a,[[2,F.a]],null,null),(l()(),t.Fb(2,0,null,0,7,"div",[["class","flex-item"]],null,null,null,null,null)),(l()(),t.Fb(3,0,null,null,2,"label",[["class","label"]],null,null,null,null,null)),(l()(),t.Yb(4,null,["",""])),t.Ub(5,2),(l()(),t.Fb(6,0,null,null,1,"h4",[],[[2,"unread",null]],null,null,null,null)),(l()(),t.Yb(7,null,["",""])),(l()(),t.ub(16777216,null,null,1,null,E)),t.Eb(9,16384,null,0,v.m,[t.Z,t.V],{ngIf:[0,"ngIf"]},null),(l()(),t.ub(16777216,null,0,1,null,A)),t.Eb(11,16384,null,0,v.m,[t.Z,t.V],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,9,0,n.context.$implicit.showMsg),l(n,11,0,!n.context.$implicit.status)}),(function(l,n){l(n,0,0,"NoopAnimations"===t.Rb(n,1)._animationMode);var i=t.Zb(n,4,0,l(n,5,0,t.Rb(n.parent,0),n.context.$implicit.createdAt,"MMM dd, yyyy hh:mm a"));l(n,4,0,i),l(n,6,0,!n.context.$implicit.status),l(n,7,0,n.context.$implicit.subject)}))}function z(l){return t.ac(0,[t.Sb(0,v.e,[t.A]),(l()(),t.Fb(1,0,null,null,12,"section",[["class","page-body notification-body home-body"]],null,null,null,null,null)),(l()(),t.Fb(2,0,null,null,11,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.Fb(3,0,null,null,3,"div",[["class","flex-containers space-between page-heading-action"]],null,null,null,null,null)),(l()(),t.Fb(4,0,null,null,2,"div",[["class","flex-item"]],null,null,null,null,null)),(l()(),t.Fb(5,0,null,null,1,"h4",[["class","name"]],null,null,null,null,null)),(l()(),t.Yb(-1,null,["Notifications"])),(l()(),t.Fb(7,0,null,null,6,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.ub(16777216,null,null,1,null,k)),t.Eb(9,16384,null,0,v.m,[t.Z,t.V],{ngIf:[0,"ngIf"]},null),(l()(),t.Fb(10,0,null,null,3,"div",[["class","col-xs-12 col-sm-12 col-md-12"]],null,null,null,null,null)),(l()(),t.Fb(11,0,null,null,2,"div",[["class","noti-wrapper"]],null,null,null,null,null)),(l()(),t.ub(16777216,null,null,1,null,O)),t.Eb(13,278528,null,0,v.l,[t.Z,t.V,t.y],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var i=n.component;l(n,9,0,i.isLoading),l(n,13,0,i.notifications)}),null)}function U(l){return t.ac(0,[(l()(),t.Fb(0,0,null,null,1,"app-notifications",[],null,null,null,z,j)),t.Eb(1,245760,null,0,y,[M.a,I.a,M.l,M.a,L.a,N.a,R.f],null,null)],(function(l,n){l(n,1,0)}),null)}var Z=t.Bb("app-notifications",y,U,{},{},[]),J=i("QQfA"),V=i("IP0z"),Y=i("gavF"),C=i("POq0"),K=i("7kcP"),q=i("Xd0L"),Q=i("JjoW"),S=i("cUpR"),B=i("Mz6y"),D=i("s6ns"),G=i("/Co4"),H=i("OIZN"),X=i("821u"),$=i("/HVE"),T=i("qJ5m"),W=i("KMir"),_=i("Tq4R"),ll=i("rAFq"),nl=i("4D9t"),il=i("bMPK"),tl=i("UiI2"),al=i("Fwaw"),bl=i("zMNK"),ul=i("hOhj"),ol=i("BzsH"),sl=i("r0V8"),cl=i("FVPZ"),el=i("BV1i"),rl=i("zQui"),dl=i("8rEH"),Pl=i("oapL"),fl=i("HsOI"),pl=i("ZwOa"),ml=i("lT8R"),gl=i("elxJ"),hl=i("02hT"),xl=i("Q+lL"),Fl=i("W5yJ"),vl=i("kNGD"),wl=i("5GAg"),yl=i("5Bek"),Ml=i("c9fC"),Il=i("rWV4"),Ll=i("pBi1"),Nl=i("dFDH"),Rl=i("8P0U"),jl=i("KPQW"),kl=i("mkRZ"),El=i("qJ50"),Al=i("NA4g"),Ol=i("YD+O"),zl=i("YbOK"),Ul=i("jRYl"),Zl=i("KL2N"),Jl=i("QX+E"),Vl=i("PCNd");class Yl{}var Cl=i("dvZr"),Kl=i("EFU/");i.d(n,"NotificationsModuleNgFactory",(function(){return ql}));var ql=t.Cb(a,[],(function(l){return t.Ob([t.Pb(512,t.l,t.mb,[[8,[b.a,u.a,o.a,o.b,s.b,s.a,c.a,e.b,r.a,d.a,P.a,Z]],[3,t.l],t.E]),t.Pb(4608,v.o,v.n,[t.A,[2,v.E]]),t.Pb(4608,J.d,J.d,[J.j,J.f,t.l,J.i,J.g,t.w,t.G,v.d,V.b,[2,v.i]]),t.Pb(5120,J.k,J.l,[J.d]),t.Pb(5120,Y.c,Y.j,[J.d]),t.Pb(4608,C.c,C.c,[]),t.Pb(5120,K.b,K.a,[[3,K.b]]),t.Pb(4608,q.d,q.d,[]),t.Pb(5120,Q.a,Q.b,[J.d]),t.Pb(4608,S.e,q.e,[[2,q.i],[2,q.n]]),t.Pb(5120,B.a,B.b,[J.d]),t.Pb(5120,D.c,D.d,[J.d]),t.Pb(135680,D.e,D.e,[J.d,t.w,[2,v.i],[2,D.b],D.c,[3,D.e],J.f]),t.Pb(5120,G.b,G.c,[J.d]),t.Pb(5120,H.b,H.a,[[3,H.b]]),t.Pb(4608,X.i,X.i,[]),t.Pb(5120,X.a,X.b,[J.d]),t.Pb(4608,q.c,q.z,[[2,q.h],$.a]),t.Pb(5120,T.b,T.a,[[3,T.b]]),t.Pb(4608,W.i,W.j,[]),t.Pb(5120,W.h,W.k,[W.i,t.J]),t.Pb(4608,W.t,W.t,[S.d]),t.Pb(4608,W.m,W.n,[]),t.Pb(5120,W.l,W.o,[W.m,t.J]),t.Pb(4608,W.f,W.f,[t.o]),t.Pb(4608,R.x,R.x,[]),t.Pb(4608,R.f,R.f,[]),t.Pb(5120,_.b,_.d,[J.d]),t.Pb(4608,_.e,_.e,[J.d,t.w,[2,v.i],_.b,[2,_.a],[3,_.e],J.f]),t.Pb(4608,ll.a,ll.a,[]),t.Pb(5120,nl.a,nl.c,[J.d]),t.Pb(4608,il.a,tl.a,[[2,il.b],$.a]),t.Pb(4608,v.e,v.e,[t.A]),t.Pb(1073742336,v.c,v.c,[]),t.Pb(1073742336,V.a,V.a,[]),t.Pb(1073742336,q.n,q.n,[[2,q.f],[2,S.f]]),t.Pb(1073742336,$.b,$.b,[]),t.Pb(1073742336,q.y,q.y,[]),t.Pb(1073742336,al.c,al.c,[]),t.Pb(1073742336,bl.g,bl.g,[]),t.Pb(1073742336,ul.c,ul.c,[]),t.Pb(1073742336,J.h,J.h,[]),t.Pb(1073742336,Y.i,Y.i,[]),t.Pb(1073742336,Y.f,Y.f,[]),t.Pb(1073742336,ol.a,ol.a,[]),t.Pb(1073742336,g.c,g.c,[]),t.Pb(1073742336,x.c,x.c,[]),t.Pb(1073742336,C.d,C.d,[]),t.Pb(1073742336,sl.d,sl.d,[]),t.Pb(1073742336,sl.c,sl.c,[]),t.Pb(1073742336,q.p,q.p,[]),t.Pb(1073742336,cl.a,cl.a,[]),t.Pb(1073742336,el.h,el.h,[]),t.Pb(1073742336,K.c,K.c,[]),t.Pb(1073742336,rl.o,rl.o,[]),t.Pb(1073742336,dl.a,dl.a,[]),t.Pb(1073742336,Pl.c,Pl.c,[]),t.Pb(1073742336,fl.e,fl.e,[]),t.Pb(1073742336,pl.c,pl.c,[]),t.Pb(1073742336,q.w,q.w,[]),t.Pb(1073742336,q.t,q.t,[]),t.Pb(1073742336,Q.d,Q.d,[]),t.Pb(1073742336,ml.a,ml.a,[]),t.Pb(1073742336,gl.d,gl.d,[]),t.Pb(1073742336,hl.b,hl.b,[]),t.Pb(1073742336,xl.d,xl.d,[]),t.Pb(1073742336,Fl.a,Fl.a,[]),t.Pb(1073742336,vl.f,vl.f,[]),t.Pb(1073742336,wl.a,wl.a,[]),t.Pb(1073742336,B.c,B.c,[]),t.Pb(1073742336,yl.c,yl.c,[]),t.Pb(1073742336,Ml.d,Ml.d,[]),t.Pb(1073742336,D.j,D.j,[]),t.Pb(1073742336,G.e,G.e,[]),t.Pb(1073742336,Il.j,Il.j,[]),t.Pb(1073742336,Ll.d,Ll.d,[]),t.Pb(1073742336,Ll.c,Ll.c,[]),t.Pb(1073742336,H.c,H.c,[]),t.Pb(1073742336,Nl.d,Nl.d,[]),t.Pb(1073742336,Rl.c,Rl.c,[]),t.Pb(1073742336,X.j,X.j,[]),t.Pb(1073742336,q.A,q.A,[]),t.Pb(1073742336,q.q,q.q,[]),t.Pb(1073742336,jl.b,jl.b,[]),t.Pb(1073742336,kl.a,kl.a,[]),t.Pb(1073742336,El.e,El.e,[]),t.Pb(1073742336,T.c,T.c,[]),t.Pb(1073742336,Al.a,Al.a,[]),t.Pb(1073742336,Ol.a,Ol.a,[]),t.Pb(1073742336,W.b,W.b,[]),t.Pb(1073742336,R.w,R.w,[]),t.Pb(1073742336,R.j,R.j,[]),t.Pb(1073742336,M.o,M.o,[[2,M.t],[2,M.l]]),t.Pb(1073742336,R.t,R.t,[]),t.Pb(1073742336,zl.a,zl.a,[]),t.Pb(1073742336,Ul.a,Ul.a,[]),t.Pb(1073742336,Zl.a,Zl.a,[]),t.Pb(1073742336,Jl.a,Jl.a,[]),t.Pb(1073742336,Jl.b,Jl.b,[]),t.Pb(1073742336,Vl.a,Vl.a,[]),t.Pb(1073742336,Yl,Yl,[]),t.Pb(1073742336,a,a,[]),t.Pb(256,vl.a,{separatorKeyCodes:[Cl.g]},[]),t.Pb(256,q.g,q.k,[]),t.Pb(256,Kl.a,Jl.c,[]),t.Pb(1024,M.j,(function(){return[[{path:"",component:y}]]}),[])])}))},aR35:function(l,n,i){"use strict";i.d(n,"a",(function(){return t}));const t={imgBaseUrl:i("//XQ").b}}}]);