"use strict";(self.webpackChunksr_stock=self.webpackChunksr_stock||[]).push([[147],{3147:(I,h,s)=>{s.r(h),s.d(h,{AchatModule:()=>F});var u=s(6895),d=s(1959),m=s(8505),e=s(1571),p=s(8423),v=s(3188),f=s(73),A=s(9971),g=s(6392),a=s(433),_=s(4696);function Z(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"div",44)(1,"span",45),e._uU(2),e.qZA(),e.TgZ(3,"button",46),e.NdJ("click",function(){const r=e.CHM(t).index,c=e.oxw(2);return e.KtG(c.closeAlert(r))}),e.TgZ(4,"span",47),e._uU(5,"\xd7"),e.qZA()()()}if(2&i){const t=o.$implicit;e.xp6(2),e.Oqu(t)}}function T(i,o){if(1&i&&(e.TgZ(0,"div"),e.YNc(1,Z,6,1,"div",43),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",t.errorMessages)}}function q(i,o){if(1&i&&(e.TgZ(0,"ng-option",48),e._uU(1),e.qZA()),2&i){const t=o.$implicit;e.Q6J("value",t),e.xp6(1),e.Oqu(t.designation)}}function b(i,o){if(1&i&&(e.TgZ(0,"ng-option",48),e._uU(1),e.qZA()),2&i){const t=o.$implicit;e.Q6J("value",t),e.xp6(1),e.Oqu(t.name)}}function C(i,o){1&i&&(e.TgZ(0,"div",49),e._uU(1," La quantit\xe9 ne peut pas \xeatre 0. "),e.qZA())}function U(i,o){1&i&&(e.TgZ(0,"div",49),e._uU(1," La quantit\xe9 ne peut pas \xeatre n\xe9gative. "),e.qZA())}function k(i,o){1&i&&(e.TgZ(0,"div",49),e._uU(1," PU ne peut pas \xeatre 0. "),e.qZA())}function M(i,o){1&i&&(e.TgZ(0,"div",49),e._uU(1," PU ne peut pas \xeatre n\xe9gative. "),e.qZA())}function S(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td")(12,"button",50),e.NdJ("click",function(){const r=e.CHM(t).$implicit,c=e.oxw();return e.KtG(c.supprimerLigne(r))}),e._UZ(13,"i",51),e.qZA()()()}if(2&i){const t=o.$implicit;e.xp6(2),e.Oqu(t.stockName),e.xp6(2),e.Oqu(t.designation),e.xp6(2),e.Oqu(t.quantity),e.xp6(2),e.Oqu(t.purchasePrice),e.xp6(2),e.Oqu(t.fournisseur)}}function J(i,o){1&i&&(e.TgZ(0,"tr")(1,"td",52)(2,"p",53),e._uU(3,"Aucun resultat trouv\xe9"),e.qZA()()())}const x=[{path:"",component:(()=>{class i{constructor(t,n,l,r,c){this.spinner=t,this.stockService=n,this.articleService=l,this.movmentService=r,this.router=c,this.designation="",this.quantite=null,this.prixUnitaire=null,this.fournisseur="",this.movments=[],this.articles=[],this.stocks=[],this.selectedArticle=void 0,this.selectedStock=void 0,this.errorMessages=[]}ngOnInit(){this.loadArticles(),this.loadStocks()}loadStocks(){this.stockService.getStocks().subscribe(t=>{this.stocks=t,console.log(t)},t=>{console.log(t)})}loadArticles(){this.articleService.getAllArticles().subscribe(t=>{this.articles=t.content},t=>{console.log(t)})}selectStock(t){console.log("Article  : ",t),this.selectedStock=t}selectArticle(t){console.log("Article  : ",t),this.selectedArticle=t,console.log("Article s\xe9lectionn\xe9 : ",this.selectedArticle.designation)}compareFn(t,n){return t&&n?t.id===n.id:t===n}ajouterLigne(){if(this.errorMessages=this.validate(),!(this.errorMessages.length>0)&&this.selectedArticle){const t=this.movments.findIndex(n=>n.articleId===this.selectedArticle?.id);t>=0?this.movments[t].quantity=(this.movments[t].quantity??0)+(this.quantite??0):this.movments.push({stockId:this.selectedStock?.id||0,stockName:this.selectedStock?.name||"",articleId:this.selectedArticle.id,quantity:this.quantite||0,purchasePrice:this.prixUnitaire,fournisseur:this.fournisseur,movementType:"IN",designation:this.selectedArticle?.designation,editing:!1,errorMessage:null}),this.selectedArticle=void 0,this.selectedStock=void 0,this.quantite=null,this.prixUnitaire=null,this.fournisseur=""}}supprimerLigne(t){const n=this.movments.indexOf(t);-1!==n&&this.movments.splice(n,1)}onSubmitMovments(){this.spinner.show(),console.log(JSON.stringify(this.movments)),this.movmentService.createMovment(this.movments).pipe((0,m.b)(t=>{this.router.navigateByUrl("/dashboard"),this.spinner.hide()})).subscribe({next:t=>{console.log("Requ\xeate envoy\xe9e avec succ\xe8s",t),this.spinner.hide()},error:t=>{console.error("Erreur lors de l'envoi de la requ\xeate",t),this.spinner.hide()}})}validate(){const t=[];return null==this.selectedArticle&&t.push("choisissez un article"),null==this.selectedStock&&t.push("choisissez un stock"),(null==this.quantite||this.quantite<=0)&&t.push("La quantit\xe9 doit \xeatre sup\xe9rieure \xe0 0"),(null==this.prixUnitaire||this.prixUnitaire<=0)&&t.push("Le prix unitaire doit \xeatre sup\xe9rieur \xe0 z\xe9ro"),this.fournisseur||t.push("Le fournisseur est obligatoire"),t}clearTab(){this.movments=[]}closeAlert(t){console.log(t),this.errorMessages.splice(t,1)}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(p.t2),e.Y36(v.q),e.Y36(f.n),e.Y36(A.U),e.Y36(d.F0))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-achat"]],decls:88,vars:30,consts:[["bdColor","rgba(0, 0, 0, 0.8)","size","medium","color","#fff","type","square-jelly-box",3,"fullScreen"],[2,"color","white"],[1,"app-content","container","center-layout","mt-2"],[1,"content-overlay"],[1,"content-wrapper"],[4,"ngIf"],[1,"content-body"],["id","basic-form-layouts"],[1,"row","match-height"],[1,"col-md-12"],[1,"card"],[1,"card-header"],["id","basic-layout-card-center",1,"card-title"],[1,"card-content","collapse","show"],[1,"card-body"],[1,"form"],[1,"form-body"],[1,"row"],[1,"col-md-4"],[1,"form-group"],["name","arId","bindLabel","designation","bindValue","id",3,"ngModel","virtualScroll","items","compareWith","ngModelChange","change"],[3,"value",4,"ngFor","ngForOf"],[1,"col-md-2"],["name","id","bindLabel","name","bindValue","id",3,"ngModel","virtualScroll","items","compareWith","ngModelChange","change"],["for","eventRegInput2"],["type","number","id","eventRegInput2","placeholder","0","name","quantite","inputmode","numeric","min","0","pattern","[0-9]+",1,"form-control",3,"ngModel","ngModelChange"],["class","invalid-feedback  d-block",4,"ngIf"],["for","eventRegInput3"],["type","number","id","eventRegInput3","placeholder","0","name","prixUnitaire","inputmode","numeric","min","0","pattern","[0-9]+",1,"form-control",3,"ngModel","ngModelChange"],["for","eventRegInput4"],["type","text","id","eventRegInput4","placeholder","Fournisseur","name","fournisseur",1,"form-control",3,"ngModel","ngModelChange"],[1,"form-actions","center"],["type","button",1,"btn","btn-icon","btn-pink","mr-1","mb-1","float-right",3,"click"],[1,"col-xl-12","col-lg-12"],[1,"float-right"],["type","button",1,"btn","btn-info","m-1",3,"disabled","click"],[1,"fa","fa-trash-o"],["type","button",1,"btn","btn-warning",3,"click"],[1,"fa","fa-check-square-o"],[1,"card-content"],[1,"col-sm-4"],[1,"table","table-responsive-md"],[4,"ngFor","ngForOf"],["class","alert alert-pink alert-dismissible fade show text-white","role","alert",4,"ngFor","ngForOf"],["role","alert",1,"alert","alert-pink","alert-dismissible","fade","show","text-white"],[1,"text-white"],["type","button","data-dismiss","alert","aria-label","Close",1,"close","text-white",3,"click"],["aria-hidden","true"],[3,"value"],[1,"invalid-feedback","d-block"],["type","button",1,"btn","btn-icon","btn-danger","mr-1","mb-1","btn-sm",3,"click"],[1,"fa","fa-trash"],["colspan","6"],[2,"text-align","center"]],template:function(t,n){1&t&&(e._UZ(0,"app-navbar"),e.TgZ(1,"ngx-spinner",0)(2,"p",1),e._uU(3," Loading... "),e.qZA()(),e.TgZ(4,"div",2),e._UZ(5,"div",3),e.TgZ(6,"div",4),e.YNc(7,T,2,1,"div",5),e.TgZ(8,"div",6)(9,"section",7)(10,"div",8)(11,"div",9)(12,"div",10)(13,"div",11)(14,"h4",12),e._uU(15,"ENTR\xc9E DE STOCK"),e.qZA()(),e.TgZ(16,"div",13)(17,"div",14)(18,"form",15)(19,"div",16)(20,"div",17)(21,"div",18)(22,"div",19)(23,"label"),e._uU(24,"ARTICLE:"),e.qZA(),e.TgZ(25,"ng-select",20),e.NdJ("ngModelChange",function(r){return n.selectedArticle=r})("change",function(r){return n.selectArticle(r)}),e.YNc(26,q,2,2,"ng-option",21),e.qZA()()(),e.TgZ(27,"div",22)(28,"div",19)(29,"label"),e._uU(30,"STOCK:"),e.qZA(),e.TgZ(31,"ng-select",23),e.NdJ("ngModelChange",function(r){return n.selectedStock=r})("change",function(r){return n.selectStock(r)}),e.YNc(32,b,2,2,"ng-option",21),e.qZA()()(),e.TgZ(33,"div",22)(34,"div",19)(35,"label",24),e._uU(36,"QUANTIT\xc9:"),e.qZA(),e.TgZ(37,"input",25),e.NdJ("ngModelChange",function(r){return n.quantite=r}),e.qZA(),e.YNc(38,C,2,0,"div",26),e.YNc(39,U,2,0,"div",26),e.qZA()(),e.TgZ(40,"div",22)(41,"div",19)(42,"label",27),e._uU(43,"PU TTC:"),e.qZA(),e.TgZ(44,"input",28),e.NdJ("ngModelChange",function(r){return n.prixUnitaire=r}),e.qZA(),e.YNc(45,k,2,0,"div",26),e.YNc(46,M,2,0,"div",26),e.qZA()(),e.TgZ(47,"div",22)(48,"div",19)(49,"label",29),e._uU(50,"FOURNISSEUR:"),e.qZA(),e.TgZ(51,"input",30),e.NdJ("ngModelChange",function(r){return n.fournisseur=r}),e.qZA()()()()(),e.TgZ(52,"div",31)(53,"button",32),e.NdJ("click",function(){return n.ajouterLigne()}),e._uU(54,"Ajouter"),e.qZA()()()()()()()(),e.TgZ(55,"div",8)(56,"div",33)(57,"div",10)(58,"div",11)(59,"div",34)(60,"button",35),e.NdJ("click",function(){return n.clearTab()}),e._UZ(61,"i",36),e.qZA(),e.TgZ(62,"button",37),e.NdJ("click",function(){return n.onSubmitMovments()}),e._UZ(63,"i",38),e._uU(64," Ajouter au stock"),e.qZA()()(),e.TgZ(65,"div",39)(66,"div",14)(67,"div")(68,"div",17),e._UZ(69,"div",40),e.qZA(),e.TgZ(70,"table",41)(71,"thead")(72,"tr")(73,"th"),e._uU(74,"Stock"),e.qZA(),e.TgZ(75,"th"),e._uU(76,"D\xe9signation"),e.qZA(),e.TgZ(77,"th"),e._uU(78,"Quantit\xe9"),e.qZA(),e.TgZ(79,"th"),e._uU(80,"Prix unitaire"),e.qZA(),e.TgZ(81,"th"),e._uU(82,"Fournisseur"),e.qZA(),e.TgZ(83,"th"),e._uU(84,"Action"),e.qZA()()(),e.TgZ(85,"tbody"),e.YNc(86,S,14,5,"tr",42),e.YNc(87,J,4,0,"tr",5),e.qZA()()()()()()()()()()()()),2&t&&(e.xp6(1),e.Q6J("fullScreen",!0),e.xp6(6),e.Q6J("ngIf",n.errorMessages.length>0),e.xp6(18),e.Q6J("ngModel",n.selectedArticle)("virtualScroll",!0)("items",n.articles)("compareWith",n.compareFn),e.xp6(1),e.Q6J("ngForOf",n.articles),e.xp6(5),e.Q6J("ngModel",n.selectedStock)("virtualScroll",!0)("items",n.stocks)("compareWith",n.compareFn),e.xp6(1),e.Q6J("ngForOf",n.stocks),e.xp6(5),e.ekj("is-valid",n.quantite&&n.quantite>0)("is-invalid",n.quantite&&n.quantite<0||0===n.quantite),e.Q6J("ngModel",n.quantite),e.xp6(1),e.Q6J("ngIf",0===n.quantite),e.xp6(1),e.Q6J("ngIf",n.quantite&&n.quantite<0),e.xp6(5),e.ekj("is-valid",n.prixUnitaire&&n.prixUnitaire>0)("is-invalid",n.prixUnitaire&&n.prixUnitaire<0||0===n.prixUnitaire),e.Q6J("ngModel",n.prixUnitaire),e.xp6(1),e.Q6J("ngIf",0===n.prixUnitaire),e.xp6(1),e.Q6J("ngIf",n.prixUnitaire&&n.prixUnitaire<0),e.xp6(5),e.Q6J("ngModel",n.fournisseur),e.xp6(9),e.Q6J("disabled",0===n.movments.length),e.xp6(26),e.Q6J("ngForOf",n.movments),e.xp6(1),e.Q6J("ngIf",0===n.movments.length))},dependencies:[u.sg,u.O5,g.w9,g.jq,a._Y,a.Fj,a.wV,a.JJ,a.JL,a.c5,a.qQ,a.On,a.F,_.S,p.Ro]}),i})()}];let y=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[d.Bz.forChild(x),d.Bz]}),i})();var N=s(4466);let F=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[u.ez,y,g.A0,a.u5,N.m,p.ef]}),i})()}}]);