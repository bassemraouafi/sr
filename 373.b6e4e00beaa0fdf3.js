(self.webpackChunksr_stock=self.webpackChunksr_stock||[]).push([[373],{1373:(E,o,s)=>{"use strict";s.r(o),s.d(o,{SigninModule:()=>m});var e=s(6895),t=s(1959),r=s(9245),l=s(433),i=s(8505),n=s(1571),c=s(7556),a=s(8423);const d=function(u){return{"is-invalid":u}},y=[{path:"",component:(()=>{class u{constructor(x,v,j,g){this.router=x,this.fb=v,this.authService=j,this.spinner=g,this.loginForm=this.fb.group({username:["",l.kI.required],password:["",l.kI.required]}),this.formSubmitted=!1,this.error="",this.returnUrl="/dashboard",this.loading=!1}ngAfterViewInit(){}ngOnInit(){r.replace()}onLogin(){this.formSubmitted=!0,this.loginForm.valid&&(this.spinner.show(),this.authService.login(this.loginForm.value).pipe((0,i.b)(x=>{const j=x.id??"",g=x.username??"";localStorage.setItem("accessToken",x.accessToken??""),localStorage.setItem("userId",j.toString()),localStorage.setItem("username",g),this.spinner.hide(),this.router.navigateByUrl("/dashboard")})).subscribe(x=>{},x=>{console.error(x),this.spinner.hide()}))}get formValues(){return this.loginForm.controls}}return u.\u0275fac=function(x){return new(x||u)(n.Y36(t.F0),n.Y36(l.qu),n.Y36(c.e),n.Y36(a.t2))},u.\u0275cmp=n.Xpm({type:u,selectors:[["app-signin"]],decls:37,vars:8,consts:[["bdColor","rgba(0, 0, 0, 0.8)","size","medium","color","#fff","type","square-jelly-box",3,"fullScreen"],[2,"color","white"],["data-open","hover","data-menu","horizontal-menu","data-col","1-column",1,"horizontal-layout","horizontal-menu","horizontal-menu-padding","1-column","blank-page","blank-page"],[1,"app-content","container","center-layout","mt-2"],[1,"content-overlay"],[1,"content-wrapper"],[1,"content-header","row"],[1,"content-body"],[1,"row","flexbox-container"],[1,"col-12","d-flex","align-items-center","justify-content-center"],[1,"col-lg-4","col-md-8","col-10","box-shadow-2","p-0"],[1,"card","border-grey","border-lighten-3","m-0"],[1,"card-header","border-0"],[1,"card-title","text-center"],[1,"p-1"],["alt","stack admin logo","src","assets/images/logo/stack-logo.png",1,"brand-logo"],[1,"brand-text"],[1,"card-subtitle","line-on-side","text-muted","text-center","font-small-3","pt-2"],[1,"card-content"],[1,"card-body"],["novalidate","",1,"form-horizontal","form-simple",3,"formGroup","ngSubmit"],[1,"form-group","position-relative","has-icon-left","mb-0"],["type","text","id","user-name","placeholder","nom d'utilisateur","formControlName","username","required","",1,"form-control","form-control-lg",3,"ngClass"],[1,"form-control-position"],[1,"fa","fa-user"],[1,"form-group","position-relative","has-icon-left"],["type","password","id","user-password","placeholder","mot de passe","formControlName","password","required","",1,"form-control","form-control-lg",3,"ngClass"],[1,"fa","fa-lock"],["type","submit",1,"btn","btn-primary","btn-lg","btn-block"],["data-feather","log-in"],[1,"card-footer"]],template:function(x,v){1&x&&(n.TgZ(0,"ngx-spinner",0)(1,"p",1),n._uU(2," Loading... "),n.qZA()(),n.TgZ(3,"div",2)(4,"div",3),n._UZ(5,"div",4),n.TgZ(6,"div",5),n._UZ(7,"div",6),n.TgZ(8,"div",7)(9,"section",8)(10,"div",9)(11,"div",10)(12,"div",11)(13,"div",12)(14,"div",13)(15,"div",14),n._UZ(16,"img",15),n.TgZ(17,"h2",16),n._uU(18,"Raouafi"),n.qZA()()(),n.TgZ(19,"h6",17)(20,"span"),n._uU(21,"Authentification"),n.qZA()()(),n.TgZ(22,"div",18)(23,"div",19)(24,"form",20),n.NdJ("ngSubmit",function(){return v.onLogin()}),n.TgZ(25,"fieldset",21),n._UZ(26,"input",22),n.TgZ(27,"div",23),n._UZ(28,"i",24),n.qZA()(),n.TgZ(29,"fieldset",25),n._UZ(30,"input",26),n.TgZ(31,"div",23),n._UZ(32,"i",27),n.qZA()(),n.TgZ(33,"button",28),n._UZ(34,"i",29),n._uU(35," Connexion"),n.qZA()()()(),n._UZ(36,"div",30),n.qZA()()()()()()()()),2&x&&(n.Q6J("fullScreen",!0),n.xp6(24),n.Q6J("formGroup",v.loginForm),n.xp6(2),n.Q6J("ngClass",n.VKq(4,d,v.formSubmitted&&v.formValues.username.invalid)),n.xp6(4),n.Q6J("ngClass",n.VKq(6,d,v.formSubmitted&&v.formValues.password.invalid)))},dependencies:[e.mk,l._Y,l.Fj,l.JJ,l.JL,l.Q7,l.sg,l.u,a.Ro]}),u})()}];let p=(()=>{class u{}return u.\u0275fac=function(x){return new(x||u)},u.\u0275mod=n.oAB({type:u}),u.\u0275inj=n.cJS({imports:[t.Bz.forChild(y),t.Bz]}),u})(),m=(()=>{class u{}return u.\u0275fac=function(x){return new(x||u)},u.\u0275mod=n.oAB({type:u}),u.\u0275inj=n.cJS({imports:[e.ez,p,l.UX,a.ef]}),u})()},9245:function(E){typeof self<"u"&&self,E.exports=function(o){var s={};function e(t){if(s[t])return s[t].exports;var r=s[t]={i:t,l:!1,exports:{}};return o[t].call(r.exports,r,r.exports,e),r.l=!0,r.exports}return e.m=o,e.c=s,e.d=function(t,r,l){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:l})},e.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},e.p="",e(e.s=0)}({"./dist/icons.json":
/*!*************************!*\
                !*** ./dist/icons.json ***!
                \*************************/
/*! exports provided: activity, airplay, alert-circle, alert-octagon, alert-triangle, align-center, align-justify, align-left, align-right, anchor, aperture, archive, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, award, bar-chart-2, bar-chart, battery-charging, battery, bell-off, bell, bluetooth, bold, book-open, book, bookmark, box, briefcase, calendar, camera-off, camera, cast, check-circle, check-square, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, chrome, circle, clipboard, clock, cloud-drizzle, cloud-lightning, cloud-off, cloud-rain, cloud-snow, cloud, code, codepen, codesandbox, coffee, columns, command, compass, copy, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, cpu, credit-card, crop, crosshair, database, delete, disc, divide-circle, divide-square, divide, dollar-sign, download-cloud, download, dribbble, droplet, edit-2, edit-3, edit, external-link, eye-off, eye, facebook, fast-forward, feather, figma, file-minus, file-plus, file-text, file, film, filter, flag, folder-minus, folder-plus, folder, framer, frown, gift, git-branch, git-commit, git-merge, git-pull-request, github, gitlab, globe, grid, hard-drive, hash, headphones, heart, help-circle, hexagon, home, image, inbox, info, instagram, italic, key, layers, layout, life-buoy, link-2, link, linkedin, list, loader, lock, log-in, log-out, mail, map-pin, map, maximize-2, maximize, meh, menu, message-circle, message-square, mic-off, mic, minimize-2, minimize, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, mouse-pointer, move, music, navigation-2, navigation, octagon, package, paperclip, pause-circle, pause, pen-tool, percent, phone-call, phone-forwarded, phone-incoming, phone-missed, phone-off, phone-outgoing, phone, pie-chart, play-circle, play, plus-circle, plus-square, plus, pocket, power, printer, radio, refresh-ccw, refresh-cw, repeat, rewind, rotate-ccw, rotate-cw, rss, save, scissors, search, send, server, settings, share-2, share, shield-off, shield, shopping-bag, shopping-cart, shuffle, sidebar, skip-back, skip-forward, slack, slash, sliders, smartphone, smile, speaker, square, star, stop-circle, sun, sunrise, sunset, table, tablet, tag, target, terminal, thermometer, thumbs-down, thumbs-up, toggle-left, toggle-right, tool, trash-2, trash, trello, trending-down, trending-up, triangle, truck, tv, twitch, twitter, type, umbrella, underline, unlock, upload-cloud, upload, user-check, user-minus, user-plus, user-x, user, users, video-off, video, voicemail, volume-1, volume-2, volume-x, volume, watch, wifi-off, wifi, wind, x-circle, x-octagon, x-square, x, youtube, zap-off, zap, zoom-in, zoom-out, default */function(o){o.exports={activity:'<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>',airplay:'<path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><polygon points="12 15 17 21 7 21 12 15"></polygon>',"alert-circle":'<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>',"alert-octagon":'<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>',"alert-triangle":'<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line>',"align-center":'<line x1="18" y1="10" x2="6" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="18" y1="18" x2="6" y2="18"></line>',"align-justify":'<line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line>',"align-left":'<line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line>',"align-right":'<line x1="21" y1="10" x2="7" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="7" y2="18"></line>',anchor:'<circle cx="12" cy="5" r="3"></circle><line x1="12" y1="22" x2="12" y2="8"></line><path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>',aperture:'<circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>',archive:'<polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line>',"arrow-down-circle":'<circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line>',"arrow-down-left":'<line x1="17" y1="7" x2="7" y2="17"></line><polyline points="17 17 7 17 7 7"></polyline>',"arrow-down-right":'<line x1="7" y1="7" x2="17" y2="17"></line><polyline points="17 7 17 17 7 17"></polyline>',"arrow-down":'<line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline>',"arrow-left-circle":'<circle cx="12" cy="12" r="10"></circle><polyline points="12 8 8 12 12 16"></polyline><line x1="16" y1="12" x2="8" y2="12"></line>',"arrow-left":'<line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline>',"arrow-right-circle":'<circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line>',"arrow-right":'<line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>',"arrow-up-circle":'<circle cx="12" cy="12" r="10"></circle><polyline points="16 12 12 8 8 12"></polyline><line x1="12" y1="16" x2="12" y2="8"></line>',"arrow-up-left":'<line x1="17" y1="17" x2="7" y2="7"></line><polyline points="7 17 7 7 17 7"></polyline>',"arrow-up-right":'<line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline>',"arrow-up":'<line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline>',"at-sign":'<circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>',award:'<circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>',"bar-chart-2":'<line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line>',"bar-chart":'<line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line>',"battery-charging":'<path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"></path><line x1="23" y1="13" x2="23" y2="11"></line><polyline points="11 6 7 12 13 12 9 18"></polyline>',battery:'<rect x="1" y="6" width="18" height="12" rx="2" ry="2"></rect><line x1="23" y1="13" x2="23" y2="11"></line>',"bell-off":'<path d="M13.73 21a2 2 0 0 1-3.46 0"></path><path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path><path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path><path d="M18 8a6 6 0 0 0-9.33-5"></path><line x1="1" y1="1" x2="23" y2="23"></line>',bell:'<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path>',bluetooth:'<polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"></polyline>',bold:'<path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>',"book-open":'<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>',book:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>',bookmark:'<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>',box:'<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',briefcase:'<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>',calendar:'<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>',"camera-off":'<line x1="1" y1="1" x2="23" y2="23"></line><path d="M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56"></path>',camera:'<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle>',cast:'<path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path><line x1="2" y1="20" x2="2.01" y2="20"></line>',"check-circle":'<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>',"check-square":'<polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>',check:'<polyline points="20 6 9 17 4 12"></polyline>',"chevron-down":'<polyline points="6 9 12 15 18 9"></polyline>',"chevron-left":'<polyline points="15 18 9 12 15 6"></polyline>',"chevron-right":'<polyline points="9 18 15 12 9 6"></polyline>',"chevron-up":'<polyline points="18 15 12 9 6 15"></polyline>',"chevrons-down":'<polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline>',"chevrons-left":'<polyline points="11 17 6 12 11 7"></polyline><polyline points="18 17 13 12 18 7"></polyline>',"chevrons-right":'<polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline>',"chevrons-up":'<polyline points="17 11 12 6 7 11"></polyline><polyline points="17 18 12 13 7 18"></polyline>',chrome:'<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="21.17" y1="8" x2="12" y2="8"></line><line x1="3.95" y1="6.06" x2="8.54" y2="14"></line><line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>',circle:'<circle cx="12" cy="12" r="10"></circle>',clipboard:'<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>',clock:'<circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>',"cloud-drizzle":'<line x1="8" y1="19" x2="8" y2="21"></line><line x1="8" y1="13" x2="8" y2="15"></line><line x1="16" y1="19" x2="16" y2="21"></line><line x1="16" y1="13" x2="16" y2="15"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="12" y1="15" x2="12" y2="17"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>',"cloud-lightning":'<path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"></path><polyline points="13 11 9 17 15 17 11 23"></polyline>',"cloud-off":'<path d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"></path><line x1="1" y1="1" x2="23" y2="23"></line>',"cloud-rain":'<line x1="16" y1="13" x2="16" y2="21"></line><line x1="8" y1="13" x2="8" y2="21"></line><line x1="12" y1="15" x2="12" y2="23"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>',"cloud-snow":'<path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path><line x1="8" y1="16" x2="8.01" y2="16"></line><line x1="8" y1="20" x2="8.01" y2="20"></line><line x1="12" y1="18" x2="12.01" y2="18"></line><line x1="12" y1="22" x2="12.01" y2="22"></line><line x1="16" y1="16" x2="16.01" y2="16"></line><line x1="16" y1="20" x2="16.01" y2="20"></line>',cloud:'<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>',code:'<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>',codepen:'<polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" y1="2" x2="12" y2="8.5"></line>',codesandbox:'<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline><polyline points="7.5 19.79 7.5 14.6 3 12"></polyline><polyline points="21 12 16.5 14.6 16.5 19.79"></polyline><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',coffee:'<path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line>',columns:'<path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"></path>',command:'<path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>',compass:'<circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>',copy:'<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>',"corner-down-left":'<polyline points="9 10 4 15 9 20"></polyline><path d="M20 4v7a4 4 0 0 1-4 4H4"></path>',"corner-down-right":'<polyline points="15 10 20 15 15 20"></polyline><path d="M4 4v7a4 4 0 0 0 4 4h12"></path>',"corner-left-down":'<polyline points="14 15 9 20 4 15"></polyline><path d="M20 4h-7a4 4 0 0 0-4 4v12"></path>',"corner-left-up":'<polyline points="14 9 9 4 4 9"></polyline><path d="M20 20h-7a4 4 0 0 1-4-4V4"></path>',"corner-right-down":'<polyline points="10 15 15 20 20 15"></polyline><path d="M4 4h7a4 4 0 0 1 4 4v12"></path>',"corner-right-up":'<polyline points="10 9 15 4 20 9"></polyline><path d="M4 20h7a4 4 0 0 0 4-4V4"></path>',"corner-up-left":'<polyline points="9 14 4 9 9 4"></polyline><path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>',"corner-up-right":'<polyline points="15 14 20 9 15 4"></polyline><path d="M4 20v-7a4 4 0 0 1 4-4h12"></path>',cpu:'<rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line>',"credit-card":'<rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line>',crop:'<path d="M6.13 1L6 16a2 2 0 0 0 2 2h15"></path><path d="M1 6.13L16 6a2 2 0 0 1 2 2v15"></path>',crosshair:'<circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line>',database:'<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>',delete:'<path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path><line x1="18" y1="9" x2="12" y2="15"></line><line x1="12" y1="9" x2="18" y2="15"></line>',disc:'<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle>',"divide-circle":'<line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line><line x1="12" y1="8" x2="12" y2="8"></line><circle cx="12" cy="12" r="10"></circle>',"divide-square":'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line><line x1="12" y1="8" x2="12" y2="8"></line>',divide:'<circle cx="12" cy="6" r="2"></circle><line x1="5" y1="12" x2="19" y2="12"></line><circle cx="12" cy="18" r="2"></circle>',"dollar-sign":'<line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>',"download-cloud":'<polyline points="8 17 12 21 16 17"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path>',download:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line>',dribbble:'<circle cx="12" cy="12" r="10"></circle><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>',droplet:'<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>',"edit-2":'<path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>',"edit-3":'<path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>',edit:'<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>',"external-link":'<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>',"eye-off":'<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>',eye:'<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>',facebook:'<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>',"fast-forward":'<polygon points="13 19 22 12 13 5 13 19"></polygon><polygon points="2 19 11 12 2 5 2 19"></polygon>',feather:'<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line>',figma:'<path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>',"file-minus":'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="9" y1="15" x2="15" y2="15"></line>',"file-plus":'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line>',"file-text":'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>',file:'<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline>',film:'<rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line>',filter:'<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>',flag:'<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line>',"folder-minus":'<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="9" y1="14" x2="15" y2="14"></line>',"folder-plus":'<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="12" y1="11" x2="12" y2="17"></line><line x1="9" y1="14" x2="15" y2="14"></line>',folder:'<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>',framer:'<path d="M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7"></path>',frown:'<circle cx="12" cy="12" r="10"></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',gift:'<polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>',"git-branch":'<line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path>',"git-commit":'<circle cx="12" cy="12" r="4"></circle><line x1="1.05" y1="12" x2="7" y2="12"></line><line x1="17.01" y1="12" x2="22.96" y2="12"></line>',"git-merge":'<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 0 0 9 9"></path>',"git-pull-request":'<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><line x1="6" y1="9" x2="6" y2="21"></line>',github:'<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>',gitlab:'<path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"></path>',globe:'<circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>',grid:'<rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>',"hard-drive":'<line x1="22" y1="12" x2="2" y2="12"></line><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" y1="16" x2="6.01" y2="16"></line><line x1="10" y1="16" x2="10.01" y2="16"></line>',hash:'<line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line>',headphones:'<path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>',heart:'<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>',"help-circle":'<circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line>',hexagon:'<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>',home:'<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>',image:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline>',inbox:'<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>',info:'<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>',instagram:'<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>',italic:'<line x1="19" y1="4" x2="10" y2="4"></line><line x1="14" y1="20" x2="5" y2="20"></line><line x1="15" y1="4" x2="9" y2="20"></line>',key:'<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>',layers:'<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline>',layout:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line>',"life-buoy":'<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>',"link-2":'<path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path><line x1="8" y1="12" x2="16" y2="12"></line>',link:'<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>',linkedin:'<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>',list:'<line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line>',loader:'<line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>',lock:'<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>',"log-in":'<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line>',"log-out":'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line>',mail:'<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>',"map-pin":'<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>',map:'<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line>',"maximize-2":'<polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line>',maximize:'<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>',meh:'<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="15" x2="16" y2="15"></line><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',menu:'<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>',"message-circle":'<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>',"message-square":'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>',"mic-off":'<line x1="1" y1="1" x2="23" y2="23"></line><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path><path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>',mic:'<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>',"minimize-2":'<polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" y1="10" x2="21" y2="3"></line><line x1="3" y1="21" x2="10" y2="14"></line>',minimize:'<path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>',"minus-circle":'<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line>',"minus-square":'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line>',minus:'<line x1="5" y1="12" x2="19" y2="12"></line>',monitor:'<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>',moon:'<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>',"more-horizontal":'<circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle>',"more-vertical":'<circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle>',"mouse-pointer":'<path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path><path d="M13 13l6 6"></path>',move:'<polyline points="5 9 2 12 5 15"></polyline><polyline points="9 5 12 2 15 5"></polyline><polyline points="15 19 12 22 9 19"></polyline><polyline points="19 9 22 12 19 15"></polyline><line x1="2" y1="12" x2="22" y2="12"></line><line x1="12" y1="2" x2="12" y2="22"></line>',music:'<path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle>',"navigation-2":'<polygon points="12 2 19 21 12 17 5 21 12 2"></polygon>',navigation:'<polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>',octagon:'<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>',package:'<line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',paperclip:'<path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>',"pause-circle":'<circle cx="12" cy="12" r="10"></circle><line x1="10" y1="15" x2="10" y2="9"></line><line x1="14" y1="15" x2="14" y2="9"></line>',pause:'<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>',"pen-tool":'<path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle>',percent:'<line x1="19" y1="5" x2="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle>',"phone-call":'<path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',"phone-forwarded":'<polyline points="19 1 23 5 19 9"></polyline><line x1="15" y1="5" x2="23" y2="5"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',"phone-incoming":'<polyline points="16 2 16 8 22 8"></polyline><line x1="23" y1="1" x2="16" y2="8"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',"phone-missed":'<line x1="23" y1="1" x2="17" y2="7"></line><line x1="17" y1="1" x2="23" y2="7"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',"phone-off":'<path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"></path><line x1="23" y1="1" x2="1" y2="23"></line>',"phone-outgoing":'<polyline points="23 7 23 1 17 1"></polyline><line x1="16" y1="8" x2="23" y2="1"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',phone:'<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',"pie-chart":'<path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path>',"play-circle":'<circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon>',play:'<polygon points="5 3 19 12 5 21 5 3"></polygon>',"plus-circle":'<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>',"plus-square":'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>',plus:'<line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>',pocket:'<path d="M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"></path><polyline points="8 10 12 14 16 10"></polyline>',power:'<path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line>',printer:'<polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect>',radio:'<circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>',"refresh-ccw":'<polyline points="1 4 1 10 7 10"></polyline><polyline points="23 20 23 14 17 14"></polyline><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>',"refresh-cw":'<polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>',repeat:'<polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path>',rewind:'<polygon points="11 19 2 12 11 5 11 19"></polygon><polygon points="22 19 13 12 22 5 22 19"></polygon>',"rotate-ccw":'<polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>',"rotate-cw":'<polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>',rss:'<path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle>',save:'<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline>',scissors:'<circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="20" y1="4" x2="8.12" y2="15.88"></line><line x1="14.47" y1="14.48" x2="20" y2="20"></line><line x1="8.12" y1="8.12" x2="12" y2="12"></line>',search:'<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>',send:'<line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>',server:'<rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line>',settings:'<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>',"share-2":'<circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>',share:'<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line>',"shield-off":'<path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"></path><path d="M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38"></path><line x1="1" y1="1" x2="23" y2="23"></line>',shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>',"shopping-bag":'<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path>',"shopping-cart":'<circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>',shuffle:'<polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line>',sidebar:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line>',"skip-back":'<polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line>',"skip-forward":'<polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line>',slack:'<path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"></path><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"></path><path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"></path><path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"></path><path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path><path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"></path><path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"></path>',slash:'<circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>',sliders:'<line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line>',smartphone:'<rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>',smile:'<circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',speaker:'<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><circle cx="12" cy="14" r="4"></circle><line x1="12" y1="6" x2="12.01" y2="6"></line>',square:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>',star:'<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>',"stop-circle":'<circle cx="12" cy="12" r="10"></circle><rect x="9" y="9" width="6" height="6"></rect>',sun:'<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>',sunrise:'<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="2" x2="12" y2="9"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="8 6 12 2 16 6"></polyline>',sunset:'<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="9" x2="12" y2="2"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="16 5 12 9 8 5"></polyline>',table:'<path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"></path>',tablet:'<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>',tag:'<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line>',target:'<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>',terminal:'<polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line>',thermometer:'<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>',"thumbs-down":'<path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>',"thumbs-up":'<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>',"toggle-left":'<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="8" cy="12" r="3"></circle>',"toggle-right":'<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="16" cy="12" r="3"></circle>',tool:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>',"trash-2":'<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>',trash:'<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>',trello:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><rect x="7" y="7" width="3" height="9"></rect><rect x="14" y="7" width="3" height="5"></rect>',"trending-down":'<polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline>',"trending-up":'<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline>',triangle:'<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>',truck:'<rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle>',tv:'<rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline>',twitch:'<path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path>',twitter:'<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>',type:'<polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line>',umbrella:'<path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"></path>',underline:'<path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"></path><line x1="4" y1="21" x2="20" y2="21"></line>',unlock:'<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path>',"upload-cloud":'<polyline points="16 16 12 12 8 16"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline>',upload:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line>',"user-check":'<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline>',"user-minus":'<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="23" y1="11" x2="17" y2="11"></line>',"user-plus":'<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line>',"user-x":'<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="18" y1="8" x2="23" y2="13"></line><line x1="23" y1="8" x2="18" y2="13"></line>',user:'<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>',users:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>',"video-off":'<path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"></path><line x1="1" y1="1" x2="23" y2="23"></line>',video:'<polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>',voicemail:'<circle cx="5.5" cy="11.5" r="4.5"></circle><circle cx="18.5" cy="11.5" r="4.5"></circle><line x1="5.5" y1="16" x2="18.5" y2="16"></line>',"volume-1":'<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>',"volume-2":'<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>',"volume-x":'<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line>',volume:'<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>',watch:'<circle cx="12" cy="12" r="7"></circle><polyline points="12 9 12 12 13.5 13.5"></polyline><path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path>',"wifi-off":'<line x1="1" y1="1" x2="23" y2="23"></line><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"></path><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"></path><path d="M10.71 5.05A16 16 0 0 1 22.58 9"></path><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>',wifi:'<path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>',wind:'<path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>',"x-circle":'<circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>',"x-octagon":'<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>',"x-square":'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line>',x:'<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>',youtube:'<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>',"zap-off":'<polyline points="12.41 6.75 13 2 10.57 4.92"></polyline><polyline points="18.57 12.91 21 10 15.66 10"></polyline><polyline points="8 8 3 14 12 14 11 22 16 16"></polyline><line x1="1" y1="1" x2="23" y2="23"></line>',zap:'<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>',"zoom-in":'<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line>',"zoom-out":'<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line>'}},"./node_modules/classnames/dedupe.js":
/*!*******************************************!*\
                !*** ./node_modules/classnames/dedupe.js ***!
                \*******************************************/
/*! no static exports found */function(o,s,e){var r;!function(){"use strict";var l=function(){function i(){}function n(u,h){for(var x=h.length,v=0;v<x;++v)p(u,h[v])}i.prototype=Object.create(null);var c={}.hasOwnProperty;var f=/\s+/;function p(u,h){if(h){var x=typeof h;"string"===x?function y(u,h){for(var x=h.split(f),v=x.length,j=0;j<v;++j)u[x[j]]=!0}(u,h):Array.isArray(h)?n(u,h):"object"===x?function d(u,h){for(var x in h)c.call(h,x)&&(u[x]=!!h[x])}(u,h):"number"===x&&function a(u,h){u[h]=!0}(u,h)}}return function m(){for(var u=arguments.length,h=Array(u),x=0;x<u;x++)h[x]=arguments[x];var v=new i;n(v,h);var j=[];for(var g in v)v[g]&&j.push(g);return j.join(" ")}}();typeof o<"u"&&o.exports?o.exports=l:void 0!==(r=function(){return l}.apply(s,[]))&&(o.exports=r)}()},"./node_modules/core-js/es/array/from.js":
/*!***********************************************!*\
                !*** ./node_modules/core-js/es/array/from.js ***!
                \***********************************************/
/*! no static exports found */function(o,s,e){e(
/*! ../../modules/es.string.iterator */
"./node_modules/core-js/modules/es.string.iterator.js"),e(
/*! ../../modules/es.array.from */
"./node_modules/core-js/modules/es.array.from.js");var t=e(
/*! ../../internals/path */
"./node_modules/core-js/internals/path.js");o.exports=t.Array.from},"./node_modules/core-js/internals/a-function.js":
/*!******************************************************!*\
                !*** ./node_modules/core-js/internals/a-function.js ***!
                \******************************************************/
/*! no static exports found */function(o,s){o.exports=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e}},"./node_modules/core-js/internals/an-object.js":
/*!*****************************************************!*\
                !*** ./node_modules/core-js/internals/an-object.js ***!
                \*****************************************************/
/*! no static exports found */function(o,s,e){var t=e(
/*! ../internals/is-object */
"./node_modules/core-js/internals/is-object.js");o.exports=function(r){if(!t(r))throw TypeError(String(r)+" is not an object");return r}},"./node_modules/core-js/internals/array-from.js":
/*!******************************************************!*\
                !*** ./node_modules/core-js/internals/array-from.js ***!
                \******************************************************/
/*! no static exports found */function(o,s,e){"use strict";var t=e(
/*! ../internals/bind-context */
"./node_modules/core-js/internals/bind-context.js"),r=e(
/*! ../internals/to-object */
"./node_modules/core-js/internals/to-object.js"),l=e(
/*! ../internals/call-with-safe-iteration-closing */
"./node_modules/core-js/internals/call-with-safe-iteration-closing.js"),i=e(
/*! ../internals/is-array-iterator-method */
"./node_modules/core-js/internals/is-array-iterator-method.js"),n=e(
/*! ../internals/to-length */
"./node_modules/core-js/internals/to-length.js"),c=e(
/*! ../internals/create-property */
"./node_modules/core-js/internals/create-property.js"),a=e(
/*! ../internals/get-iterator-method */
"./node_modules/core-js/internals/get-iterator-method.js");o.exports=function(f){var j,g,M,b,y=r(f),p="function"==typeof this?this:Array,m=arguments.length,u=m>1?arguments[1]:void 0,h=void 0!==u,x=0,v=a(y);if(h&&(u=t(u,m>2?arguments[2]:void 0,2)),null==v||p==Array&&i(v))for(g=new p(j=n(y.length));j>x;x++)c(g,x,h?u(y[x],x):y[x]);else for(b=v.call(y),g=new p;!(M=b.next()).done;x++)c(g,x,h?l(b,u,[M.value,x],!0):M.value);return g.length=x,g}},"./node_modules/core-js/internals/array-includes.js":
/*!**********************************************************!*\
                !*** ./node_modules/core-js/internals/array-includes.js ***!
                \**********************************************************/
/*! no static exports found */function(o,s,e){var t=e(
/*! ../internals/to-indexed-object */
"./node_modules/core-js/internals/to-indexed-object.js"),r=e(
/*! ../internals/to-length */
"./node_modules/core-js/internals/to-length.js"),l=e(
/*! ../internals/to-absolute-index */
"./node_modules/core-js/internals/to-absolute-index.js");o.exports=function(i){return function(n,c,a){var p,d=t(n),f=r(d.length),y=l(a,f);if(i&&c!=c){for(;f>y;)if((p=d[y++])!=p)return!0}else for(;f>y;y++)if((i||y in d)&&d[y]===c)return i||y||0;return!i&&-1}}},"./node_modules/core-js/internals/bind-context.js":
/*!********************************************************!*\
                !*** ./node_modules/core-js/internals/bind-context.js ***!
                \********************************************************/
/*! no static exports found */function(o,s,e){var t=e(
/*! ../internals/a-function */
"./node_modules/core-js/internals/a-function.js");o.exports=function(r,l,i){if(t(r),void 0===l)return r;switch(i){case 0:return function(){return r.call(l)};case 1:return function(n){return r.call(l,n)};case 2:return function(n,c){return r.call(l,n,c)};case 3:return function(n,c,a){return r.call(l,n,c,a)}}return function(){return r.apply(l,arguments)}}},"./node_modules/core-js/internals/call-with-safe-iteration-closing.js":
/*!****************************************************************************!*\
                !*** ./node_modules/core-js/internals/call-with-safe-iteration-closing.js ***!
                \****************************************************************************/
/*! no static exports found */function(o,s,e){var t=e(
/*! ../internals/an-object */
"./node_modules/core-js/internals/an-object.js");o.exports=function(r,l,i,n){try{return n?l(t(i)[0],i[1]):l(i)}catch(a){var c=r.return;throw void 0!==c&&t(c.call(r)),a}}},"./node_modules/core-js/internals/check-correctness-of-iteration.js":
/*!**************************************************************************!*\
                !*** ./node_modules/core-js/internals/check-correctness-of-iteration.js ***!
                \**************************************************************************/
/*! no static exports found */function(o,s,e){var r=e(
/*! ../internals/well-known-symbol */
"./node_modules/core-js/internals/well-known-symbol.js")("iterator"),l=!1;try{var i=0,n={next:function(){return{done:!!i++}},return:function(){l=!0}};n[r]=function(){return this},Array.from(n,function(){throw 2})}catch{}o.exports=function(c,a){if(!a&&!l)return!1;var d=!1;try{var f={};f[r]=function(){return{next:function(){return{done:d=!0}}}},c(f)}catch{}return d}},"./node_modules/core-js/internals/classof-raw.js":
/*!*******************************************************!*\
                !*** ./node_modules/core-js/internals/classof-raw.js ***!
                \*******************************************************/
/*! no static exports found */function(o,s){var e={}.toString;o.exports=function(t){return e.call(t).slice(8,-1)}},"./node_modules/core-js/internals/classof.js":
/*!***************************************************!*\
                !*** ./node_modules/core-js/internals/classof.js ***!
                \***************************************************/
/*! no static exports found */function(o,s,e){var t=e(
/*! ../internals/classof-raw */
"./node_modules/core-js/internals/classof-raw.js"),l=e(
/*! ../internals/well-known-symbol */
"./node_modules/core-js/internals/well-known-symbol.js")("toStringTag"),i="Arguments"==t(function(){return arguments}());o.exports=function(c){var a,d,f;return void 0===c?"Undefined":null===c?"Null":"string"==typeof(d=function(c,a){try{return c[a]}catch{}}(a=Object(c),l))?d:i?t(a):"Object"==(f=t(a))&&"function"==typeof a.callee?"Arguments":f}},"./node_modules/core-js/internals/copy-constructor-properties.js":
/*!***********************************************************************!*\
                !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
                \***********************************************************************/
/*! no static exports found */function(o,s,e){var t=e(
/*! ../internals/has */
"./node_modules/core-js/internals/has.js"),r=e(
/*! ../internals/own-keys */
"./node_modules/core-js/internals/own-keys.js"),l=e(
/*! ../internals/object-get-own-property-descriptor */
"./node_modules/core-js/internals/object-get-own-property-descriptor.js"),i=e(
/*! ../internals/object-define-property */
"./node_modules/core-js/internals/object-define-property.js");o.exports=function(n,c){for(var a=r(c),d=i.f,f=l.f,y=0;y<a.length;y++){var p=a[y];t(n,p)||d(n,p,f(c,p))}}},"./node_modules/core-js/internals/correct-prototype-getter.js":
/*!********************************************************************!*\
                !*** ./node_modules/core-js/internals/correct-prototype-getter.js ***!
                \********************************************************************/
/*! no static exports found */function(o,s,e){var t=e(
/*! ../internals/fails */
"./node_modules/core-js/internals/fails.js");o.exports=!t(function(){function r(){}return r.prototype.constructor=null,Object.getPrototypeOf(new r)!==r.prototype})},"./node_modules/core-js/internals/create-iterator-constructor.js":
/*!***********************************************************************!*\
                !*** ./node_modules/core-js/internals/create-iterator-constructor.js ***!
                \***********************************************************************/
/*! no static exports found */function(o,s,e){"use strict";var t=e(
/*! ../internals/iterators-core */
"./node_modules/core-js/internals/iterators-core.js").IteratorPrototype,r=e(
/*! ../internals/object-create */
"./node_modules/core-js/internals/object-create.js"),l=e(
/*! ../internals/create-property-descriptor */
"./node_modules/core-js/internals/create-property-descriptor.js"),i=e(
/*! ../internals/set-to-string-tag */
"./node_modules/core-js/internals/set-to-string-tag.js"),n=e(
/*! ../internals/iterators */
"./node_modules/core-js/internals/iterators.js"),c=function(){return this};o.exports=function(a,d,f){var y=d+" Iterator";return a.prototype=r(t,{next:l(1,f)}),i(a,y,!1,!0),n[y]=c,a}},"./node_modules/core-js/internals/create-property-descriptor.js":
/*!**********************************************************************!*\
                !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
                \**********************************************************************/
/*! no static exports found */function(o,s){o.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},"./node_modules/core-js/internals/create-property.js":
/*!***********************************************************!*\
                !*** ./node_modules/core-js/internals/create-property.js ***!
                \***********************************************************/
/*! no static exports found */function(o,s,e){"use strict";var t=e(
/*! ../internals/to-primitive */
"./node_modules/core-js/internals/to-primitive.js"),r=e(
/*! ../internals/object-define-property */
"./node_modules/core-js/internals/object-define-property.js"),l=e(
/*! ../internals/create-property-descriptor */
"./node_modules/core-js/internals/create-property-descriptor.js");o.exports=function(i,n,c){var a=t(n);a in i?r.f(i,a,l(0,c)):i[a]=c}},"./node_modules/core-js/internals/define-iterator.js":
/*!***********************************************************!*\
                !*** ./node_modules/core-js/internals/define-iterator.js ***!
                \***********************************************************/
/*! no static exports found */function(o,s,e){"use strict";var t=e(
/*! ../internals/export */
"./node_modules/core-js/internals/export.js"),r=e(
/*! ../internals/create-iterator-constructor */
"./node_modules/core-js/internals/create-iterator-constructor.js"),l=e(
/*! ../internals/object-get-prototype-of */
"./node_modules/core-js/internals/object-get-prototype-of.js"),i=e(
/*! ../internals/object-set-prototype-of */
"./node_modules/core-js/internals/object-set-prototype-of.js"),n=e(
/*! ../internals/set-to-string-tag */
"./node_modules/core-js/internals/set-to-string-tag.js"),c=e(
/*! ../internals/hide */
"./node_modules/core-js/internals/hide.js"),a=e(
/*! ../internals/redefine */
"./node_modules/core-js/internals/redefine.js"),d=e(
/*! ../internals/well-known-symbol */
"./node_modules/core-js/internals/well-known-symbol.js"),f=e(
/*! ../internals/is-pure */
"./node_modules/core-js/internals/is-pure.js"),y=e(
/*! ../internals/iterators */
"./node_modules/core-js/internals/iterators.js"),p=e(
/*! ../internals/iterators-core */
"./node_modules/core-js/internals/iterators-core.js"),m=p.IteratorPrototype,u=p.BUGGY_SAFARI_ITERATORS,h=d("iterator"),x="keys",v="values",j="entries",g=function(){return this};o.exports=function(M,b,A,G,P,Z,L){r(A,b,G);var O,I,V,H=function(S){if(S===P&&z)return z;if(!u&&S in w)return w[S];switch(S){case x:case v:case j:return function(){return new A(this,S)}}return function(){return new A(this)}},C=b+" Iterator",R=!1,w=M.prototype,T=w[h]||w["@@iterator"]||P&&w[P],z=!u&&T||H(P),F="Array"==b&&w.entries||T;if(F&&(O=l(F.call(new M)),m!==Object.prototype&&O.next&&(!f&&l(O)!==m&&(i?i(O,m):"function"!=typeof O[h]&&c(O,h,g)),n(O,C,!0,!0),f&&(y[C]=g))),P==v&&T&&T.name!==v&&(R=!0,z=function(){return T.call(this)}),(!f||L)&&w[h]!==z&&c(w,h,z),y[b]=z,P)if(I={values:H(v),keys:Z?z:H(x),entries:H(j)},L)for(V in I)(u||R||!(V in w))&&a(w,V,I[V]);else t({target:b,proto:!0,forced:u||R},I);return I}},"./node_modules/core-js/internals/descriptors.js":
/*!*******************************************************!*\
                !*** ./node_modules/core-js/internals/descriptors.js ***!
                \*******************************************************/
/*! no static exports found */function(o,s,e){var t=e(
/*! ../internals/fails */
"./node_modules/core-js/internals/fails.js");o.exports=!t(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},"./node_modules/core-js/internals/document-create-element.js":
/*!*******************************************************************!*\
                !*** ./node_modules/core-js/internals/document-create-element.js ***!
                \*******************************************************************/
/*! no static exports found */function(o,s,e){var t=e(
/*! ../internals/global */
"./node_modules/core-js/internals/global.js"),r=e(
/*! ../internals/is-object */
"./node_modules/core-js/internals/is-object.js"),l=t.document,i=r(l)&&r(l.createElement);o.exports=function(n){return i?l.createElement(n):{}}},"./node_modules/core-js/internals/enum-bug-keys.js":
/*!*********************************************************!*\
                !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
                \*********************************************************/
/*! no static exports found */function(o,s){o.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"./node_modules/core-js/internals/export.js":
/*!**************************************************!*\
                !*** ./node_modules/core-js/internals/export.js ***!
                \**************************************************/
/*! no static exports found */function(o,s,e){var t=e(
/*! ../internals/global */
"./node_modules/core-js/internals/global.js"),r=e(
/*! ../internals/object-get-own-property-descriptor */
"./node_modules/core-js/internals/object-get-own-property-descriptor.js").f,l=e(
/*! ../internals/hide */
"./node_modules/core-js/internals/hide.js"),i=e(
/*! ../internals/redefine */
"./node_modules/core-js/internals/redefine.js"),n=e(
/*! ../internals/set-global */
"./node_modules/core-js/internals/set-global.js"),c=e(
/*! ../internals/copy-constructor-properties */
"./node_modules/core-js/internals/copy-constructor-properties.js"),a=e(
/*! ../internals/is-forced */
"./node_modules/core-js/internals/is-forced.js");o.exports=function(d,f){var h,x,v,j,g,y=d.target,p=d.global,m=d.stat;if(h=p?t:m?t[y]||n(y,{}):(t[y]||{}).prototype)for(x in f){if(j=f[x],v=d.noTargetGet?(g=r(h,x))&&g.value:h[x],!a(p?x:y+(m?".":"#")+x,d.forced)&&void 0!==v){if(typeof j==typeof v)continue;c(j,v)}(d.sham||v&&v.sham)&&l(j,"sham",!0),i(h,x,j,d)}}},"./node_modules/core-js/internals/fails.js":
/*!*************************************************!*\
                !*** ./node_modules/core-js/internals/fails.js ***!
                \*************************************************/
/*! no static exports found */function(o,s){o.exports=function(e){try{return!!e()}catch{return!0}}},"./node_modules/core-js/internals/function-to-string.js":
/*!**************************************************************!*\
                !*** ./node_modules/core-js/internals/function-to-string.js ***!
                \**************************************************************/
/*! no static exports found */function(o,s,e){var t=e(
/*! ../internals/shared */
"./node_modules/core-js/internals/shared.js");o.exports=t("native-function-to-string",Function.toString)},"./node_modules/core-js/internals/get-iterator-method.js":
/*!***************************************************************!*\
                !*** ./node_modules/core-js/internals/get-iterator-method.js ***!
                \***************************************************************/
/*! no static exports found */function(o,s,e){var t=e(
/*! ../internals/classof */
"./node_modules/core-js/internals/classof.js"),r=e(
/*! ../internals/iterators */
"./node_modules/core-js/internals/iterators.js"),i=e(
/*! ../internals/well-known-symbol */
"./node_modules/core-js/internals/well-known-symbol.js")("iterator");o.exports=function(n){if(null!=n)return n[i]||n["@@iterator"]||r[t(n)]}},"./node_modules/core-js/internals/global.js":
/*!**************************************************!*\
                !*** ./node_modules/core-js/internals/global.js ***!
                \**************************************************/
/*! no static exports found */function(o,s,e){(function(t){var r="object",l=function(i){return i&&i.Math==Math&&i};o.exports=l(typeof globalThis==r&&globalThis)||l(typeof window==r&&window)||l(typeof self==r&&self)||l(typeof t==r&&t)||Function("return this")()}).call(this,e(
/*! ./../../webpack/buildin/global.js */
"./node_modules/webpack/buildin/global.js"))},"./node_modules/core-js/internals/has.js":
/*!***********************************************!*\
                !*** ./node_modules/core-js/internals/has.js ***!
                \***********************************************/
/*! no static exports found */function(o,s){var e={}.hasOwnProperty;o.exports=function(t,r){return e.call(t,r)}},"./node_modules/core-js/internals/hidden-keys.js":
/*!*******************************************************!*\
                !*** ./node_modules/core-js/internals/hidden-keys.js ***!
                \*******************************************************/
/*! no static exports found */function(o,s){o.exports={}},"./node_modules/core-js/internals/hide.js":
/*!************************************************!*\
                !*** ./node_modules/core-js/internals/hide.js ***!
                \************************************************/
/*! no static exports found */function(o,s,e){var t=e(
/*! ../internals/descriptors */
"./node_modules/core-js/internals/descriptors.js"),r=e(
/*! ../internals/object-define-property */
"./node_modules/core-js/internals/object-define-property.js"),l=e(
/*! ../internals/create-property-descriptor */
"./node_modules/core-js/internals/create-property-descriptor.js");o.exports=t?function(i,n,c){return r.f(i,n,l(1,c))}:function(i,n,c){return i[n]=c,i}},"./node_modules/core-js/internals/html.js":
/*!************************************************!*\
                !*** ./node_modules/core-js/internals/html.js ***!
                \************************************************/
/*! no static exports found */function(o,s,e){var r=e(
/*! ../internals/global */
"./node_modules/core-js/internals/global.js").document;o.exports=r&&r.documentElement},"./node_modules/core-js/internals/ie8-dom-define.js":
/*!**********************************************************!*\
                !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
                \**********************************************************/
/*! no static exports found */function(o,s,e){var t=e(
/*! ../internals/descriptors */
"./node_modules/core-js/internals/descriptors.js"),r=e(
/*! ../internals/fails */
"./node_modules/core-js/internals/fails.js"),l=e(
/*! ../internals/document-create-element */
"./node_modules/core-js/internals/document-create-element.js");o.exports=!t&&!r(function(){return 7!=Object.defineProperty(l("div"),"a",{get:function(){return 7}}).a})},"./node_modules/core-js/internals/indexed-object.js":
/*!**********************************************************!*\
                !*** ./node_modules/core-js/internals/indexed-object.js ***!
                \**********************************************************/
/*! no static exports found */function(o,s,e){var t=e(
/*! ../internals/fails */
"./node_modules/core-js/internals/fails.js"),r=e(
/*! ../internals/classof-raw */
"./node_modules/core-js/internals/classof-raw.js"),l="".split;o.exports=t(function(){return!Object("z").propertyIsEnumerable(0)})?function(i){return"String"==r(i)?l.call(i,""):Object(i)}:Object},"./node_modules/core-js/internals/internal-state.js":
/*!**********************************************************!*\
                !*** ./node_modules/core-js/internals/internal-state.js ***!
                \**********************************************************/
/*! no static exports found */function(o,s,e){var f,y,p,t=e(
/*! ../internals/native-weak-map */
"./node_modules/core-js/internals/native-weak-map.js"),r=e(
/*! ../internals/global */
"./node_modules/core-js/internals/global.js"),l=e(
/*! ../internals/is-object */
"./node_modules/core-js/internals/is-object.js"),i=e(
/*! ../internals/hide */
"./node_modules/core-js/internals/hide.js"),n=e(
/*! ../internals/has */
"./node_modules/core-js/internals/has.js"),c=e(
/*! ../internals/shared-key */
"./node_modules/core-js/internals/shared-key.js"),a=e(
/*! ../internals/hidden-keys */
"./node_modules/core-js/internals/hidden-keys.js");if(t){var h=new(0,r.WeakMap),x=h.get,v=h.has,j=h.set;f=function(M,b){return j.call(h,M,b),b},y=function(M){return x.call(h,M)||{}},p=function(M){return v.call(h,M)}}else{var g=c("state");a[g]=!0,f=function(M,b){return i(M,g,b),b},y=function(M){return n(M,g)?M[g]:{}},p=function(M){return n(M,g)}}o.exports={set:f,get:y,has:p,enforce:function(M){return p(M)?y(M):f(M,{})},getterFor:function(M){return function(b){var A;if(!l(b)||(A=y(b)).type!==M)throw TypeError("Incompatible receiver, "+M+" required");return A}}}},"./node_modules/core-js/internals/is-array-iterator-method.js":
/*!********************************************************************!*\
                !*** ./node_modules/core-js/internals/is-array-iterator-method.js ***!
                \********************************************************************/
/*! no static exports found */function(o,s,e){var t=e(
/*! ../internals/well-known-symbol */
"./node_modules/core-js/internals/well-known-symbol.js"),r=e(
/*! ../internals/iterators */
"./node_modules/core-js/internals/iterators.js"),l=t("iterator"),i=Array.prototype;o.exports=function(n){return void 0!==n&&(r.Array===n||i[l]===n)}},"./node_modules/core-js/internals/is-forced.js":
/*!*****************************************************!*\
                !*** ./node_modules/core-js/internals/is-forced.js ***!
                \*****************************************************/
/*! no static exports found */function(o,s,e){var t=e(
/*! ../internals/fails */
"./node_modules/core-js/internals/fails.js"),r=/#|\.prototype\./,l=function(d,f){var y=n[i(d)];return y==a||y!=c&&("function"==typeof f?t(f):!!f)},i=l.normalize=function(d){return String(d).replace(r,".").toLowerCase()},n=l.data={},c=l.NATIVE="N",a=l.POLYFILL="P";o.exports=l},"./node_modules/core-js/internals/is-object.js":
/*!*****************************************************!*\
                !*** ./node_modules/core-js/internals/is-object.js ***!
                \*****************************************************/
/*! no static exports found */function(o,s){o.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},"./node_modules/core-js/internals/is-pure.js":
/*!***************************************************!*\
                !*** ./node_modules/core-js/internals/is-pure.js ***!
                \***************************************************/
/*! no static exports found */function(o,s){o.exports=!1},"./node_modules/core-js/internals/iterators-core.js":
/*!**********************************************************!*\
                !*** ./node_modules/core-js/internals/iterators-core.js ***!
                \**********************************************************/
/*! no static exports found */function(o,s,e){"use strict";var f,y,p,t=e(
/*! ../internals/object-get-prototype-of */
"./node_modules/core-js/internals/object-get-prototype-of.js"),r=e(
/*! ../internals/hide */
"./node_modules/core-js/internals/hide.js"),l=e(
/*! ../internals/has */
"./node_modules/core-js/internals/has.js"),i=e(
/*! ../internals/well-known-symbol */
"./node_modules/core-js/internals/well-known-symbol.js"),n=e(
/*! ../internals/is-pure */
"./node_modules/core-js/internals/is-pure.js"),c=i("iterator"),a=!1;[].keys&&("next"in(p=[].keys())?(y=t(t(p)))!==Object.prototype&&(f=y):a=!0),null==f&&(f={}),!n&&!l(f,c)&&r(f,c,function(){return this}),o.exports={IteratorPrototype:f,BUGGY_SAFARI_ITERATORS:a}},"./node_modules/core-js/internals/iterators.js":
/*!*****************************************************!*\
                !*** ./node_modules/core-js/internals/iterators.js ***!
                \*****************************************************/
/*! no static exports found */function(o,s){o.exports={}},"./node_modules/core-js/internals/native-symbol.js":
/*!*********************************************************!*\
                !*** ./node_modules/core-js/internals/native-symbol.js ***!
                \*********************************************************/
/*! no static exports found */function(o,s,e){var t=e(
/*! ../internals/fails */
"./node_modules/core-js/internals/fails.js");o.exports=!!Object.getOwnPropertySymbols&&!t(function(){return!String(Symbol())})},"./node_modules/core-js/internals/native-weak-map.js":
/*!***********************************************************!*\
                !*** ./node_modules/core-js/internals/native-weak-map.js ***!
                \***********************************************************/
/*! no static exports found */function(o,s,e){var t=e(
/*! ../internals/global */
"./node_modules/core-js/internals/global.js"),r=e(
/*! ../internals/function-to-string */
"./node_modules/core-js/internals/function-to-string.js"),l=t.WeakMap;o.exports="function"==typeof l&&/native code/.test(r.call(l))},"./node_modules/core-js/internals/object-create.js":
/*!*********************************************************!*\
                !*** ./node_modules/core-js/internals/object-create.js ***!
                \*********************************************************/
/*! no static exports found */function(o,s,e){var t=e(
/*! ../internals/an-object */
"./node_modules/core-js/internals/an-object.js"),r=e(
/*! ../internals/object-define-properties */
"./node_modules/core-js/internals/object-define-properties.js"),l=e(
/*! ../internals/enum-bug-keys */
"./node_modules/core-js/internals/enum-bug-keys.js"),i=e(
/*! ../internals/hidden-keys */
"./node_modules/core-js/internals/hidden-keys.js"),n=e(
/*! ../internals/html */
"./node_modules/core-js/internals/html.js"),c=e(
/*! ../internals/document-create-element */
"./node_modules/core-js/internals/document-create-element.js"),d=e(
/*! ../internals/shared-key */
"./node_modules/core-js/internals/shared-key.js")("IE_PROTO"),f="prototype",y=function(){},p=function(){var g,m=c("iframe"),u=l.length,x="script",j="java"+x+":";for(m.style.display="none",n.appendChild(m),m.src=String(j),(g=m.contentWindow.document).open(),g.write("<"+x+">document.F=Object</"+x+">"),g.close(),p=g.F;u--;)delete p[f][l[u]];return p()};o.exports=Object.create||function(u,h){var x;return null!==u?(y[f]=t(u),x=new y,y[f]=null,x[d]=u):x=p(),void 0===h?x:r(x,h)},i[d]=!0},"./node_modules/core-js/internals/object-define-properties.js":
/*!********************************************************************!*\
                !*** ./node_modules/core-js/internals/object-define-properties.js ***!
                \********************************************************************/
/*! no static exports found */function(o,s,e){var t=e(
/*! ../internals/descriptors */
"./node_modules/core-js/internals/descriptors.js"),r=e(
/*! ../internals/object-define-property */
"./node_modules/core-js/internals/object-define-property.js"),l=e(
/*! ../internals/an-object */
"./node_modules/core-js/internals/an-object.js"),i=e(
/*! ../internals/object-keys */
"./node_modules/core-js/internals/object-keys.js");o.exports=t?Object.defineProperties:function(c,a){l(c);for(var p,d=i(a),f=d.length,y=0;f>y;)r.f(c,p=d[y++],a[p]);return c}},"./node_modules/core-js/internals/object-define-property.js":
/*!******************************************************************!*\
                !*** ./node_modules/core-js/internals/object-define-property.js ***!
                \******************************************************************/
/*! no static exports found */function(o,s,e){var t=e(
/*! ../internals/descriptors */
"./node_modules/core-js/internals/descriptors.js"),r=e(
/*! ../internals/ie8-dom-define */
"./node_modules/core-js/internals/ie8-dom-define.js"),l=e(
/*! ../internals/an-object */
"./node_modules/core-js/internals/an-object.js"),i=e(
/*! ../internals/to-primitive */
"./node_modules/core-js/internals/to-primitive.js"),n=Object.defineProperty;s.f=t?n:function(a,d,f){if(l(a),d=i(d,!0),l(f),r)try{return n(a,d,f)}catch{}if("get"in f||"set"in f)throw TypeError("Accessors not supported");return"value"in f&&(a[d]=f.value),a}},"./node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!******************************************************************************!*\
                !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
                \******************************************************************************/
/*! no static exports found */function(o,s,e){var t=e(
/*! ../internals/descriptors */
"./node_modules/core-js/internals/descriptors.js"),r=e(
/*! ../internals/object-property-is-enumerable */
"./node_modules/core-js/internals/object-property-is-enumerable.js"),l=e(
/*! ../internals/create-property-descriptor */
"./node_modules/core-js/internals/create-property-descriptor.js"),i=e(
/*! ../internals/to-indexed-object */
"./node_modules/core-js/internals/to-indexed-object.js"),n=e(
/*! ../internals/to-primitive */
"./node_modules/core-js/internals/to-primitive.js"),c=e(
/*! ../internals/has */
"./node_modules/core-js/internals/has.js"),a=e(
/*! ../internals/ie8-dom-define */
"./node_modules/core-js/internals/ie8-dom-define.js"),d=Object.getOwnPropertyDescriptor;s.f=t?d:function(y,p){if(y=i(y),p=n(p,!0),a)try{return d(y,p)}catch{}if(c(y,p))return l(!r.f.call(y,p),y[p])}},"./node_modules/core-js/internals/object-get-own-property-names.js":
/*!*************************************************************************!*\
                !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
                \*************************************************************************/
/*! no static exports found */function(o,s,e){var t=e(
/*! ../internals/object-keys-internal */
"./node_modules/core-js/internals/object-keys-internal.js"),l=e(
/*! ../internals/enum-bug-keys */
"./node_modules/core-js/internals/enum-bug-keys.js").concat("length","prototype");s.f=Object.getOwnPropertyNames||function(n){return t(n,l)}},"./node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!***************************************************************************!*\
                !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
                \***************************************************************************/
/*! no static exports found */function(o,s){s.f=Object.getOwnPropertySymbols},"./node_modules/core-js/internals/object-get-prototype-of.js":
/*!*******************************************************************!*\
                !*** ./node_modules/core-js/internals/object-get-prototype-of.js ***!
                \*******************************************************************/
/*! no static exports found */function(o,s,e){var t=e(
/*! ../internals/has */
"./node_modules/core-js/internals/has.js"),r=e(
/*! ../internals/to-object */
"./node_modules/core-js/internals/to-object.js"),l=e(
/*! ../internals/shared-key */
"./node_modules/core-js/internals/shared-key.js"),i=e(
/*! ../internals/correct-prototype-getter */
"./node_modules/core-js/internals/correct-prototype-getter.js"),n=l("IE_PROTO"),c=Object.prototype;o.exports=i?Object.getPrototypeOf:function(a){return a=r(a),t(a,n)?a[n]:"function"==typeof a.constructor&&a instanceof a.constructor?a.constructor.prototype:a instanceof Object?c:null}},"./node_modules/core-js/internals/object-keys-internal.js":
/*!****************************************************************!*\
                !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
                \****************************************************************/
/*! no static exports found */function(o,s,e){var t=e(
/*! ../internals/has */
"./node_modules/core-js/internals/has.js"),r=e(
/*! ../internals/to-indexed-object */
"./node_modules/core-js/internals/to-indexed-object.js"),l=e(
/*! ../internals/array-includes */
"./node_modules/core-js/internals/array-includes.js"),i=e(
/*! ../internals/hidden-keys */
"./node_modules/core-js/internals/hidden-keys.js"),n=l(!1);o.exports=function(c,a){var p,d=r(c),f=0,y=[];for(p in d)!t(i,p)&&t(d,p)&&y.push(p);for(;a.length>f;)t(d,p=a[f++])&&(~n(y,p)||y.push(p));return y}},"./node_modules/core-js/internals/object-keys.js":
/*!*******************************************************!*\
                !*** ./node_modules/core-js/internals/object-keys.js ***!
                \*******************************************************/
/*! no static exports found */function(o,s,e){var t=e(
/*! ../internals/object-keys-internal */
"./node_modules/core-js/internals/object-keys-internal.js"),r=e(
/*! ../internals/enum-bug-keys */
"./node_modules/core-js/internals/enum-bug-keys.js");o.exports=Object.keys||function(i){return t(i,r)}},"./node_modules/core-js/internals/object-property-is-enumerable.js":
/*!*************************************************************************!*\
                !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
                \*************************************************************************/
/*! no static exports found */function(o,s,e){"use strict";var t={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,l=r&&!t.call({1:2},1);s.f=l?function(n){var c=r(this,n);return!!c&&c.enumerable}:t},"./node_modules/core-js/internals/object-set-prototype-of.js":
/*!*******************************************************************!*\
                !*** ./node_modules/core-js/internals/object-set-prototype-of.js ***!
                \*******************************************************************/
/*! no static exports found */function(o,s,e){var t=e(
/*! ../internals/validate-set-prototype-of-arguments */
"./node_modules/core-js/internals/validate-set-prototype-of-arguments.js");o.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var i,r=!1,l={};try{(i=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(l,[]),r=l instanceof Array}catch{}return function(c,a){return t(c,a),r?i.call(c,a):c.__proto__=a,c}}():void 0)},"./node_modules/core-js/internals/own-keys.js":
/*!****************************************************!*\
                !*** ./node_modules/core-js/internals/own-keys.js ***!
                \****************************************************/
/*! no static exports found */function(o,s,e){var t=e(
/*! ../internals/global */
"./node_modules/core-js/internals/global.js"),r=e(
/*! ../internals/object-get-own-property-names */
"./node_modules/core-js/internals/object-get-own-property-names.js"),l=e(
/*! ../internals/object-get-own-property-symbols */
"./node_modules/core-js/internals/object-get-own-property-symbols.js"),i=e(
/*! ../internals/an-object */
"./node_modules/core-js/internals/an-object.js"),n=t.Reflect;o.exports=n&&n.ownKeys||function(a){var d=r.f(i(a)),f=l.f;return f?d.concat(f(a)):d}},"./node_modules/core-js/internals/path.js":
/*!************************************************!*\
                !*** ./node_modules/core-js/internals/path.js ***!
                \************************************************/
/*! no static exports found */function(o,s,e){o.exports=e(
/*! ../internals/global */
"./node_modules/core-js/internals/global.js")},"./node_modules/core-js/internals/redefine.js":
/*!****************************************************!*\
                !*** ./node_modules/core-js/internals/redefine.js ***!
                \****************************************************/
/*! no static exports found */function(o,s,e){var t=e(
/*! ../internals/global */
"./node_modules/core-js/internals/global.js"),r=e(
/*! ../internals/shared */
"./node_modules/core-js/internals/shared.js"),l=e(
/*! ../internals/hide */
"./node_modules/core-js/internals/hide.js"),i=e(
/*! ../internals/has */
"./node_modules/core-js/internals/has.js"),n=e(
/*! ../internals/set-global */
"./node_modules/core-js/internals/set-global.js"),c=e(
/*! ../internals/function-to-string */
"./node_modules/core-js/internals/function-to-string.js"),a=e(
/*! ../internals/internal-state */
"./node_modules/core-js/internals/internal-state.js"),d=a.get,f=a.enforce,y=String(c).split("toString");r("inspectSource",function(p){return c.call(p)}),(o.exports=function(p,m,u,h){var x=!!h&&!!h.unsafe,v=!!h&&!!h.enumerable,j=!!h&&!!h.noTargetGet;"function"==typeof u&&("string"==typeof m&&!i(u,"name")&&l(u,"name",m),f(u).source=y.join("string"==typeof m?m:"")),p!==t?(x?!j&&p[m]&&(v=!0):delete p[m],v?p[m]=u:l(p,m,u)):v?p[m]=u:n(m,u)})(Function.prototype,"toString",function(){return"function"==typeof this&&d(this).source||c.call(this)})},"./node_modules/core-js/internals/require-object-coercible.js":
/*!********************************************************************!*\
                !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
                \********************************************************************/
/*! no static exports found */function(o,s){o.exports=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}},"./node_modules/core-js/internals/set-global.js":
/*!******************************************************!*\
                !*** ./node_modules/core-js/internals/set-global.js ***!
                \******************************************************/
/*! no static exports found */function(o,s,e){var t=e(
/*! ../internals/global */
"./node_modules/core-js/internals/global.js"),r=e(
/*! ../internals/hide */
"./node_modules/core-js/internals/hide.js");o.exports=function(l,i){try{r(t,l,i)}catch{t[l]=i}return i}},"./node_modules/core-js/internals/set-to-string-tag.js":
/*!*************************************************************!*\
                !*** ./node_modules/core-js/internals/set-to-string-tag.js ***!
                \*************************************************************/
/*! no static exports found */function(o,s,e){var t=e(
/*! ../internals/object-define-property */
"./node_modules/core-js/internals/object-define-property.js").f,r=e(
/*! ../internals/has */
"./node_modules/core-js/internals/has.js"),i=e(
/*! ../internals/well-known-symbol */
"./node_modules/core-js/internals/well-known-symbol.js")("toStringTag");o.exports=function(n,c,a){n&&!r(n=a?n:n.prototype,i)&&t(n,i,{configurable:!0,value:c})}},"./node_modules/core-js/internals/shared-key.js":
/*!******************************************************!*\
                !*** ./node_modules/core-js/internals/shared-key.js ***!
                \******************************************************/
/*! no static exports found */function(o,s,e){var t=e(
/*! ../internals/shared */
"./node_modules/core-js/internals/shared.js"),r=e(
/*! ../internals/uid */
"./node_modules/core-js/internals/uid.js"),l=t("keys");o.exports=function(i){return l[i]||(l[i]=r(i))}},"./node_modules/core-js/internals/shared.js":
/*!**************************************************!*\
                !*** ./node_modules/core-js/internals/shared.js ***!
                \**************************************************/
/*! no static exports found */function(o,s,e){var t=e(
/*! ../internals/global */
"./node_modules/core-js/internals/global.js"),r=e(
/*! ../internals/set-global */
"./node_modules/core-js/internals/set-global.js"),l=e(
/*! ../internals/is-pure */
"./node_modules/core-js/internals/is-pure.js"),i="__core-js_shared__",n=t[i]||r(i,{});(o.exports=function(c,a){return n[c]||(n[c]=void 0!==a?a:{})})("versions",[]).push({version:"3.1.3",mode:l?"pure":"global",copyright:"\xa9 2019 Denis Pushkarev (zloirock.ru)"})},"./node_modules/core-js/internals/string-at.js":
/*!*****************************************************!*\
                !*** ./node_modules/core-js/internals/string-at.js ***!
                \*****************************************************/
/*! no static exports found */function(o,s,e){var t=e(
/*! ../internals/to-integer */
"./node_modules/core-js/internals/to-integer.js"),r=e(
/*! ../internals/require-object-coercible */
"./node_modules/core-js/internals/require-object-coercible.js");o.exports=function(l,i,n){var f,y,c=String(r(l)),a=t(i),d=c.length;return a<0||a>=d?n?"":void 0:(f=c.charCodeAt(a))<55296||f>56319||a+1===d||(y=c.charCodeAt(a+1))<56320||y>57343?n?c.charAt(a):f:n?c.slice(a,a+2):y-56320+(f-55296<<10)+65536}},"./node_modules/core-js/internals/to-absolute-index.js":
/*!*************************************************************!*\
                !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
                \*************************************************************/
/*! no static exports found */function(o,s,e){var t=e(
/*! ../internals/to-integer */
"./node_modules/core-js/internals/to-integer.js"),r=Math.max,l=Math.min;o.exports=function(i,n){var c=t(i);return c<0?r(c+n,0):l(c,n)}},"./node_modules/core-js/internals/to-indexed-object.js":
/*!*************************************************************!*\
                !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
                \*************************************************************/
/*! no static exports found */function(o,s,e){var t=e(
/*! ../internals/indexed-object */
"./node_modules/core-js/internals/indexed-object.js"),r=e(
/*! ../internals/require-object-coercible */
"./node_modules/core-js/internals/require-object-coercible.js");o.exports=function(l){return t(r(l))}},"./node_modules/core-js/internals/to-integer.js":
/*!******************************************************!*\
                !*** ./node_modules/core-js/internals/to-integer.js ***!
                \******************************************************/
/*! no static exports found */function(o,s){var e=Math.ceil,t=Math.floor;o.exports=function(r){return isNaN(r=+r)?0:(r>0?t:e)(r)}},"./node_modules/core-js/internals/to-length.js":
/*!*****************************************************!*\
                !*** ./node_modules/core-js/internals/to-length.js ***!
                \*****************************************************/
/*! no static exports found */function(o,s,e){var t=e(
/*! ../internals/to-integer */
"./node_modules/core-js/internals/to-integer.js"),r=Math.min;o.exports=function(l){return l>0?r(t(l),9007199254740991):0}},"./node_modules/core-js/internals/to-object.js":
/*!*****************************************************!*\
                !*** ./node_modules/core-js/internals/to-object.js ***!
                \*****************************************************/
/*! no static exports found */function(o,s,e){var t=e(
/*! ../internals/require-object-coercible */
"./node_modules/core-js/internals/require-object-coercible.js");o.exports=function(r){return Object(t(r))}},"./node_modules/core-js/internals/to-primitive.js":
/*!********************************************************!*\
                !*** ./node_modules/core-js/internals/to-primitive.js ***!
                \********************************************************/
/*! no static exports found */function(o,s,e){var t=e(
/*! ../internals/is-object */
"./node_modules/core-js/internals/is-object.js");o.exports=function(r,l){if(!t(r))return r;var i,n;if(l&&"function"==typeof(i=r.toString)&&!t(n=i.call(r))||"function"==typeof(i=r.valueOf)&&!t(n=i.call(r))||!l&&"function"==typeof(i=r.toString)&&!t(n=i.call(r)))return n;throw TypeError("Can't convert object to primitive value")}},"./node_modules/core-js/internals/uid.js":
/*!***********************************************!*\
                !*** ./node_modules/core-js/internals/uid.js ***!
                \***********************************************/
/*! no static exports found */function(o,s){var e=0,t=Math.random();o.exports=function(r){return"Symbol(".concat(void 0===r?"":r,")_",(++e+t).toString(36))}},"./node_modules/core-js/internals/validate-set-prototype-of-arguments.js":
/*!*******************************************************************************!*\
                !*** ./node_modules/core-js/internals/validate-set-prototype-of-arguments.js ***!
                \*******************************************************************************/
/*! no static exports found */function(o,s,e){var t=e(
/*! ../internals/is-object */
"./node_modules/core-js/internals/is-object.js"),r=e(
/*! ../internals/an-object */
"./node_modules/core-js/internals/an-object.js");o.exports=function(l,i){if(r(l),!t(i)&&null!==i)throw TypeError("Can't set "+String(i)+" as a prototype")}},"./node_modules/core-js/internals/well-known-symbol.js":
/*!*************************************************************!*\
                !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
                \*************************************************************/
/*! no static exports found */function(o,s,e){var t=e(
/*! ../internals/global */
"./node_modules/core-js/internals/global.js"),r=e(
/*! ../internals/shared */
"./node_modules/core-js/internals/shared.js"),l=e(
/*! ../internals/uid */
"./node_modules/core-js/internals/uid.js"),i=e(
/*! ../internals/native-symbol */
"./node_modules/core-js/internals/native-symbol.js"),n=t.Symbol,c=r("wks");o.exports=function(a){return c[a]||(c[a]=i&&n[a]||(i?n:l)("Symbol."+a))}},"./node_modules/core-js/modules/es.array.from.js":
/*!*******************************************************!*\
                !*** ./node_modules/core-js/modules/es.array.from.js ***!
                \*******************************************************/
/*! no static exports found */function(o,s,e){var t=e(
/*! ../internals/export */
"./node_modules/core-js/internals/export.js"),r=e(
/*! ../internals/array-from */
"./node_modules/core-js/internals/array-from.js");t({target:"Array",stat:!0,forced:!e(
/*! ../internals/check-correctness-of-iteration */
"./node_modules/core-js/internals/check-correctness-of-iteration.js")(function(n){Array.from(n)})},{from:r})},"./node_modules/core-js/modules/es.string.iterator.js":
/*!************************************************************!*\
                !*** ./node_modules/core-js/modules/es.string.iterator.js ***!
                \************************************************************/
/*! no static exports found */function(o,s,e){"use strict";var t=e(
/*! ../internals/string-at */
"./node_modules/core-js/internals/string-at.js"),r=e(
/*! ../internals/internal-state */
"./node_modules/core-js/internals/internal-state.js"),l=e(
/*! ../internals/define-iterator */
"./node_modules/core-js/internals/define-iterator.js"),i="String Iterator",n=r.set,c=r.getterFor(i);l(String,"String",function(a){n(this,{type:i,string:String(a),index:0})},function(){var p,d=c(this),f=d.string,y=d.index;return y>=f.length?{value:void 0,done:!0}:(p=t(f,y,!0),d.index+=p.length,{value:p,done:!1})})},"./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
                !*** (webpack)/buildin/global.js ***!
                \***********************************/
/*! no static exports found */function(o,s){var e;e=function(){return this}();try{e=e||Function("return this")()||(0,eval)("this")}catch{"object"==typeof window&&(e=window)}o.exports=e},"./src/default-attrs.json":
/*!********************************!*\
                !*** ./src/default-attrs.json ***!
                \********************************/
/*! exports provided: xmlns, width, height, viewBox, fill, stroke, stroke-width, stroke-linecap, stroke-linejoin, default */function(o){o.exports={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"}},"./src/icon.js":
/*!*********************!*\
                !*** ./src/icon.js ***!
                \*********************/
/*! no static exports found */function(o,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var t=Object.assign||function(p){for(var m=1;m<arguments.length;m++){var u=arguments[m];for(var h in u)Object.prototype.hasOwnProperty.call(u,h)&&(p[h]=u[h])}return p},r=function(){function p(m,u){for(var h=0;h<u.length;h++){var x=u[h];x.enumerable=x.enumerable||!1,x.configurable=!0,"value"in x&&(x.writable=!0),Object.defineProperty(m,x.key,x)}}return function(m,u,h){return u&&p(m.prototype,u),h&&p(m,h),m}}(),i=a(e(
/*! classnames/dedupe */
"./node_modules/classnames/dedupe.js")),c=a(e(
/*! ./default-attrs.json */
"./src/default-attrs.json"));function a(p){return p&&p.__esModule?p:{default:p}}var f=function(){function p(m,u){var h=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];(function d(p,m){if(!(p instanceof m))throw new TypeError("Cannot call a class as a function")})(this,p),this.name=m,this.contents=u,this.tags=h,this.attrs=t({},c.default,{class:"feather feather-"+m})}return r(p,[{key:"toSvg",value:function(){var u=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return"<svg "+function y(p){return Object.keys(p).map(function(m){return m+'="'+p[m]+'"'}).join(" ")}(t({},this.attrs,u,{class:(0,i.default)(this.attrs.class,u.class)}))+">"+this.contents+"</svg>"}},{key:"toString",value:function(){return this.contents}}]),p}();s.default=f},"./src/icons.js":
/*!**********************!*\
                !*** ./src/icons.js ***!
                \**********************/
/*! no static exports found */function(o,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var r=a(e(
/*! ./icon */
"./src/icon.js")),i=a(e(
/*! ../dist/icons.json */
"./dist/icons.json")),c=a(e(
/*! ./tags.json */
"./src/tags.json"));function a(d){return d&&d.__esModule?d:{default:d}}s.default=Object.keys(i.default).map(function(d){return new r.default(d,i.default[d],c.default[d])}).reduce(function(d,f){return d[f.name]=f,d},{})},"./src/index.js":
/*!**********************!*\
                !*** ./src/index.js ***!
                \**********************/
/*! no static exports found */function(o,s,e){"use strict";var r=a(e(
/*! ./icons */
"./src/icons.js")),i=a(e(
/*! ./to-svg */
"./src/to-svg.js")),c=a(e(
/*! ./replace */
"./src/replace.js"));function a(d){return d&&d.__esModule?d:{default:d}}o.exports={icons:r.default,toSvg:i.default,replace:c.default}},"./src/replace.js":
/*!************************!*\
                !*** ./src/replace.js ***!
                \************************/
/*! no static exports found */function(o,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var t=Object.assign||function(y){for(var p=1;p<arguments.length;p++){var m=arguments[p];for(var u in m)Object.prototype.hasOwnProperty.call(m,u)&&(y[u]=m[u])}return y},l=c(e(
/*! classnames/dedupe */
"./node_modules/classnames/dedupe.js")),n=c(e(
/*! ./icons */
"./src/icons.js"));function c(y){return y&&y.__esModule?y:{default:y}}s.default=function a(){var y=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(typeof document>"u")throw new Error("`feather.replace()` only works in a browser environment.");var p=document.querySelectorAll("[data-feather]");Array.from(p).forEach(function(m){return function d(y){var p=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},m=function f(y){return Array.from(y.attributes).reduce(function(p,m){return p[m.name]=m.value,p},{})}(y),u=m["data-feather"];delete m["data-feather"];var h=n.default[u].toSvg(t({},p,m,{class:(0,l.default)(p.class,m.class)})),v=(new DOMParser).parseFromString(h,"image/svg+xml").querySelector("svg");y.parentNode.replaceChild(v,y)}(m,y)})}},"./src/tags.json":
/*!***********************!*\
                !*** ./src/tags.json ***!
                \***********************/
/*! exports provided: activity, airplay, alert-circle, alert-octagon, alert-triangle, align-center, align-justify, align-left, align-right, anchor, archive, at-sign, award, aperture, bar-chart, bar-chart-2, battery, battery-charging, bell, bell-off, bluetooth, book-open, book, bookmark, box, briefcase, calendar, camera, cast, chevron-down, chevron-up, circle, clipboard, clock, cloud-drizzle, cloud-lightning, cloud-rain, cloud-snow, cloud, codepen, codesandbox, code, coffee, columns, command, compass, copy, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, cpu, credit-card, crop, crosshair, database, delete, disc, dollar-sign, droplet, edit, edit-2, edit-3, eye, eye-off, external-link, facebook, fast-forward, figma, file-minus, file-plus, file-text, film, filter, flag, folder-minus, folder-plus, folder, framer, frown, gift, git-branch, git-commit, git-merge, git-pull-request, github, gitlab, globe, hard-drive, hash, headphones, heart, help-circle, hexagon, home, image, inbox, instagram, key, layers, layout, life-bouy, link, link-2, linkedin, list, lock, log-in, log-out, mail, map-pin, map, maximize, maximize-2, meh, menu, message-circle, message-square, mic-off, mic, minimize, minimize-2, minus, monitor, moon, more-horizontal, more-vertical, mouse-pointer, move, music, navigation, navigation-2, octagon, package, paperclip, pause, pause-circle, pen-tool, percent, phone-call, phone-forwarded, phone-incoming, phone-missed, phone-off, phone-outgoing, phone, play, pie-chart, play-circle, plus, plus-circle, plus-square, pocket, power, printer, radio, refresh-cw, refresh-ccw, repeat, rewind, rotate-ccw, rotate-cw, rss, save, scissors, search, send, settings, share-2, shield, shield-off, shopping-bag, shopping-cart, shuffle, skip-back, skip-forward, slack, slash, sliders, smartphone, smile, speaker, star, stop-circle, sun, sunrise, sunset, tablet, tag, target, terminal, thermometer, thumbs-down, thumbs-up, toggle-left, toggle-right, tool, trash, trash-2, triangle, truck, tv, twitch, twitter, type, umbrella, unlock, user-check, user-minus, user-plus, user-x, user, users, video-off, video, voicemail, volume, volume-1, volume-2, volume-x, watch, wifi-off, wifi, wind, x-circle, x-octagon, x-square, x, youtube, zap-off, zap, zoom-in, zoom-out, default */function(o){o.exports={activity:["pulse","health","action","motion"],airplay:["stream","cast","mirroring"],"alert-circle":["warning","alert","danger"],"alert-octagon":["warning","alert","danger"],"alert-triangle":["warning","alert","danger"],"align-center":["text alignment","center"],"align-justify":["text alignment","justified"],"align-left":["text alignment","left"],"align-right":["text alignment","right"],anchor:[],archive:["index","box"],"at-sign":["mention","at","email","message"],award:["achievement","badge"],aperture:["camera","photo"],"bar-chart":["statistics","diagram","graph"],"bar-chart-2":["statistics","diagram","graph"],battery:["power","electricity"],"battery-charging":["power","electricity"],bell:["alarm","notification","sound"],"bell-off":["alarm","notification","silent"],bluetooth:["wireless"],"book-open":["read","library"],book:["read","dictionary","booklet","magazine","library"],bookmark:["read","clip","marker","tag"],box:["cube"],briefcase:["work","bag","baggage","folder"],calendar:["date"],camera:["photo"],cast:["chromecast","airplay"],"chevron-down":["expand"],"chevron-up":["collapse"],circle:["off","zero","record"],clipboard:["copy"],clock:["time","watch","alarm"],"cloud-drizzle":["weather","shower"],"cloud-lightning":["weather","bolt"],"cloud-rain":["weather"],"cloud-snow":["weather","blizzard"],cloud:["weather"],codepen:["logo"],codesandbox:["logo"],code:["source","programming"],coffee:["drink","cup","mug","tea","cafe","hot","beverage"],columns:["layout"],command:["keyboard","cmd","terminal","prompt"],compass:["navigation","safari","travel","direction"],copy:["clone","duplicate"],"corner-down-left":["arrow","return"],"corner-down-right":["arrow"],"corner-left-down":["arrow"],"corner-left-up":["arrow"],"corner-right-down":["arrow"],"corner-right-up":["arrow"],"corner-up-left":["arrow"],"corner-up-right":["arrow"],cpu:["processor","technology"],"credit-card":["purchase","payment","cc"],crop:["photo","image"],crosshair:["aim","target"],database:["storage","memory"],delete:["remove"],disc:["album","cd","dvd","music"],"dollar-sign":["currency","money","payment"],droplet:["water"],edit:["pencil","change"],"edit-2":["pencil","change"],"edit-3":["pencil","change"],eye:["view","watch"],"eye-off":["view","watch","hide","hidden"],"external-link":["outbound"],facebook:["logo","social"],"fast-forward":["music"],figma:["logo","design","tool"],"file-minus":["delete","remove","erase"],"file-plus":["add","create","new"],"file-text":["data","txt","pdf"],film:["movie","video"],filter:["funnel","hopper"],flag:["report"],"folder-minus":["directory"],"folder-plus":["directory"],folder:["directory"],framer:["logo","design","tool"],frown:["emoji","face","bad","sad","emotion"],gift:["present","box","birthday","party"],"git-branch":["code","version control"],"git-commit":["code","version control"],"git-merge":["code","version control"],"git-pull-request":["code","version control"],github:["logo","version control"],gitlab:["logo","version control"],globe:["world","browser","language","translate"],"hard-drive":["computer","server","memory","data"],hash:["hashtag","number","pound"],headphones:["music","audio","sound"],heart:["like","love","emotion"],"help-circle":["question mark"],hexagon:["shape","node.js","logo"],home:["house","living"],image:["picture"],inbox:["email"],instagram:["logo","camera"],key:["password","login","authentication","secure"],layers:["stack"],layout:["window","webpage"],"life-bouy":["help","life ring","support"],link:["chain","url"],"link-2":["chain","url"],linkedin:["logo","social media"],list:["options"],lock:["security","password","secure"],"log-in":["sign in","arrow","enter"],"log-out":["sign out","arrow","exit"],mail:["email","message"],"map-pin":["location","navigation","travel","marker"],map:["location","navigation","travel"],maximize:["fullscreen"],"maximize-2":["fullscreen","arrows","expand"],meh:["emoji","face","neutral","emotion"],menu:["bars","navigation","hamburger"],"message-circle":["comment","chat"],"message-square":["comment","chat"],"mic-off":["record","sound","mute"],mic:["record","sound","listen"],minimize:["exit fullscreen","close"],"minimize-2":["exit fullscreen","arrows","close"],minus:["subtract"],monitor:["tv","screen","display"],moon:["dark","night"],"more-horizontal":["ellipsis"],"more-vertical":["ellipsis"],"mouse-pointer":["arrow","cursor"],move:["arrows"],music:["note"],navigation:["location","travel"],"navigation-2":["location","travel"],octagon:["stop"],package:["box","container"],paperclip:["attachment"],pause:["music","stop"],"pause-circle":["music","audio","stop"],"pen-tool":["vector","drawing"],percent:["discount"],"phone-call":["ring"],"phone-forwarded":["call"],"phone-incoming":["call"],"phone-missed":["call"],"phone-off":["call","mute"],"phone-outgoing":["call"],phone:["call"],play:["music","start"],"pie-chart":["statistics","diagram"],"play-circle":["music","start"],plus:["add","new"],"plus-circle":["add","new"],"plus-square":["add","new"],pocket:["logo","save"],power:["on","off"],printer:["fax","office","device"],radio:["signal"],"refresh-cw":["synchronise","arrows"],"refresh-ccw":["arrows"],repeat:["loop","arrows"],rewind:["music"],"rotate-ccw":["arrow"],"rotate-cw":["arrow"],rss:["feed","subscribe"],save:["floppy disk"],scissors:["cut"],search:["find","magnifier","magnifying glass"],send:["message","mail","email","paper airplane","paper aeroplane"],settings:["cog","edit","gear","preferences"],"share-2":["network","connections"],shield:["security","secure"],"shield-off":["security","insecure"],"shopping-bag":["ecommerce","cart","purchase","store"],"shopping-cart":["ecommerce","cart","purchase","store"],shuffle:["music"],"skip-back":["music"],"skip-forward":["music"],slack:["logo"],slash:["ban","no"],sliders:["settings","controls"],smartphone:["cellphone","device"],smile:["emoji","face","happy","good","emotion"],speaker:["audio","music"],star:["bookmark","favorite","like"],"stop-circle":["media","music"],sun:["brightness","weather","light"],sunrise:["weather","time","morning","day"],sunset:["weather","time","evening","night"],tablet:["device"],tag:["label"],target:["logo","bullseye"],terminal:["code","command line","prompt"],thermometer:["temperature","celsius","fahrenheit","weather"],"thumbs-down":["dislike","bad","emotion"],"thumbs-up":["like","good","emotion"],"toggle-left":["on","off","switch"],"toggle-right":["on","off","switch"],tool:["settings","spanner"],trash:["garbage","delete","remove","bin"],"trash-2":["garbage","delete","remove","bin"],triangle:["delta"],truck:["delivery","van","shipping","transport","lorry"],tv:["television","stream"],twitch:["logo"],twitter:["logo","social"],type:["text"],umbrella:["rain","weather"],unlock:["security"],"user-check":["followed","subscribed"],"user-minus":["delete","remove","unfollow","unsubscribe"],"user-plus":["new","add","create","follow","subscribe"],"user-x":["delete","remove","unfollow","unsubscribe","unavailable"],user:["person","account"],users:["group"],"video-off":["camera","movie","film"],video:["camera","movie","film"],voicemail:["phone"],volume:["music","sound","mute"],"volume-1":["music","sound"],"volume-2":["music","sound"],"volume-x":["music","sound","mute"],watch:["clock","time"],"wifi-off":["disabled"],wifi:["connection","signal","wireless"],wind:["weather","air"],"x-circle":["cancel","close","delete","remove","times","clear"],"x-octagon":["delete","stop","alert","warning","times","clear"],"x-square":["cancel","close","delete","remove","times","clear"],x:["cancel","close","delete","remove","times","clear"],youtube:["logo","video","play"],"zap-off":["flash","camera","lightning"],zap:["flash","camera","lightning"],"zoom-in":["magnifying glass"],"zoom-out":["magnifying glass"]}},"./src/to-svg.js":
/*!***********************!*\
                !*** ./src/to-svg.js ***!
                \***********************/
/*! no static exports found */function(o,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var r=function l(n){return n&&n.__esModule?n:{default:n}}(e(
/*! ./icons */
"./src/icons.js"));s.default=function i(n){var c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(console.warn("feather.toSvg() is deprecated. Please use feather.icons[name].toSvg() instead."),!n)throw new Error("The required `key` (icon name) parameter is missing.");if(!r.default[n])throw new Error("No icon matching '"+n+"'. See the complete list of icons at https://feathericons.com");return r.default[n].toSvg(c)}},0:
/*!**************************************************!*\
                !*** multi core-js/es/array/from ./src/index.js ***!
                \**************************************************/
/*! no static exports found */function(o,s,e){e(
/*! core-js/es/array/from */
"./node_modules/core-js/es/array/from.js"),o.exports=e(
/*! /home/runner/work/feather/feather/src/index.js */
"./src/index.js")}})}}]);