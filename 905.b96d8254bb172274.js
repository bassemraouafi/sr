"use strict";(self.webpackChunksr_stock=self.webpackChunksr_stock||[]).push([[905],{1905:(M,g,r)=>{r.r(g),r.d(g,{DashboardModule:()=>k});var c=r(6895),d=r(1959),e=r(1571),p=r(529),u=r(3188),m=r(73),v=r(9971),Z=r(4696),l=r(433);function T(o,i){1&o&&(e.TgZ(0,"span"),e._uU(1," \u33a1"),e.qZA())}function b(o,i){1&o&&(e.TgZ(0,"span"),e._uU(1," pi\xe8ce"),e.qZA())}function C(o,i){if(1&o&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.ALo(3,"uppercase"),e.qZA(),e.TgZ(4,"td"),e._uU(5),e.ALo(6,"uppercase"),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.YNc(9,T,2,0,"span",32),e.YNc(10,b,2,0,"span",32),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.ALo(13,"number"),e.qZA()()),2&o){const n=i.$implicit;e.xp6(2),e.Oqu(e.lcZ(3,6,n.stockName)),e.xp6(3),e.Oqu(e.lcZ(6,8,n.designation)),e.xp6(3),e.Oqu(n.quantity),e.xp6(1),e.Q6J("ngIf","m2"===n.storageUnit),e.xp6(1),e.Q6J("ngIf","pi\xe8ce"===n.storageUnit),e.xp6(2),e.hij("",e.xi3(13,10,n.purchasePrice,"1.2-2")," TND")}}function f(o,i){1&o&&(e.TgZ(0,"tr")(1,"td",39)(2,"p",40),e._uU(3,"Aucun article trouv\xe9"),e.qZA()()())}function _(o,i){if(1&o){const n=e.EpF();e.TgZ(0,"li",35)(1,"a",41),e.NdJ("click",function(){const s=e.CHM(n).$implicit,h=e.oxw();return e.KtG(h.fetchStockItems(s,h.pageSize))}),e._uU(2),e.qZA()()}if(2&o){const n=i.$implicit,t=e.oxw();e.ekj("active",t.page.number===n),e.xp6(2),e.Oqu(n+1)}}const A=[{path:"",component:(()=>{class o{constructor(n,t,a,s){this.http=n,this.stockService=t,this.articleService=a,this.movementService=s,this.stockItems=[],this.currentPage=0,this.totalPages=0,this.pageSize=6,this.page={content:[],totalElements:0,totalPages:0,number:0},this.search="",this.searchStockName="",this.designation="",this.searchPrix=null,this.totalArticle=0,this.inCount=0,this.outCount=0}ngOnInit(){this.fetchStockItems(this.currentPage,this.pageSize),this.articleService.totalArticles().subscribe(n=>this.totalArticle=n),this.getTotalMovementsCount()}fetchStockItems(n,t){this.stockService.fetchStockItems(n,t,this.designation,this.searchStockName,this.searchPrix).subscribe({next:a=>{this.page=a,this.stockItems=a.content,this.totalPages=a.totalPages},error:a=>{console.log(a)}})}searchArticles(){this.fetchStockItems(this.currentPage,this.pageSize)}onSearchChange(){this.searchArticles()}get pages(){return Array(this.totalPages).fill(0).map((n,t)=>t)}getTotalMovementsCount(){this.movementService.getTotalMovementsCount().subscribe(n=>{this.inCount=n.IN,this.outCount=n.OUT},n=>{console.log(n)})}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(p.eN),e.Y36(u.q),e.Y36(m.n),e.Y36(v.U))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-dashboard"]],decls:86,vars:13,consts:[[1,"app-content","container","center-layout","mt-2"],[1,"content-overlay"],[1,"content-wrapper"],[1,"content-header","row"],[1,"content-body"],[1,"row"],[1,"col-xl-4","col-lg-6","col-12"],[1,"card"],[1,"card-content"],[1,"media","align-items-stretch"],[1,"p-2","text-center","bg-primary","bg-darken-2"],[1,"icon-list","font-large-2","white"],[1,"p-2","bg-gradient-x-primary","white","media-body"],[1,"text-bold-400","mb-0"],[1,"p-2","text-center","bg-warning","bg-darken-2"],[1,"icon-basket-loaded","font-large-2","white"],[1,"p-2","bg-gradient-x-warning","white","media-body"],[1,"p-2","text-center","bg-success","bg-darken-2"],[1,"icon-wallet","font-large-2","white"],[1,"p-2","bg-gradient-x-success","white","media-body"],[1,"row","match-height"],[1,"col-xl-12","col-lg-12"],[1,"card-header"],[1,"col-md-4","col-sm-12"],[1,"form-group"],[1,"font-italic","text-muted"],["type","text","placeholder","Designation","name","searchTerm",1,"form-control",3,"ngModel","ngModelChange"],["type","text","placeholder","Stock",1,"form-control",3,"ngModel","ngModelChange"],["type","number","placeholder","PU TTC",1,"form-control",3,"ngModel","ngModelChange"],[1,"card-body"],[1,"table","table-striped","table-responsive-md"],[4,"ngFor","ngForOf"],[4,"ngIf"],["aria-label","Page navigation mb-3"],[1,"pagination","justify-content-center"],[1,"page-item"],["aria-label","Previous",1,"page-link",3,"click"],["class","page-item",3,"active",4,"ngFor","ngForOf"],["aria-label","Next",1,"page-link",3,"click"],["colspan","4"],[2,"text-align","center"],[1,"page-link",3,"click"]],template:function(n,t){1&n&&(e._UZ(0,"app-navbar"),e.TgZ(1,"div",0),e._UZ(2,"div",1),e.TgZ(3,"div",2),e._UZ(4,"div",3),e.TgZ(5,"div",4)(6,"div",5)(7,"div",6)(8,"div",7)(9,"div",8)(10,"div",9)(11,"div",10),e._UZ(12,"i",11),e.qZA(),e.TgZ(13,"div",12)(14,"h5"),e._uU(15,"Nombre total d'articles"),e.qZA(),e.TgZ(16,"h5",13),e._uU(17),e.qZA()()()()()(),e.TgZ(18,"div",6)(19,"div",7)(20,"div",8)(21,"div",9)(22,"div",14),e._UZ(23,"i",15),e.qZA(),e.TgZ(24,"div",16)(25,"h5"),e._uU(26,"ENTR\xc9E"),e.qZA(),e.TgZ(27,"h5",13),e._uU(28),e.qZA()()()()()(),e.TgZ(29,"div",6)(30,"div",7)(31,"div",8)(32,"div",9)(33,"div",17),e._UZ(34,"i",18),e.qZA(),e.TgZ(35,"div",19)(36,"h5"),e._uU(37,"SORTIE"),e.qZA(),e.TgZ(38,"h5",13),e._uU(39),e.qZA()()()()()()(),e.TgZ(40,"div",20)(41,"div",21)(42,"div",7)(43,"div",22)(44,"div",5)(45,"div",23)(46,"div",24)(47,"p",25),e._uU(48,"ARTICLE :"),e.qZA(),e.TgZ(49,"input",26),e.NdJ("ngModelChange",function(s){return t.designation=s})("ngModelChange",function(){return t.onSearchChange()}),e.qZA()()(),e.TgZ(50,"div",23)(51,"div",24)(52,"p",25),e._uU(53,"STOCK :"),e.qZA(),e.TgZ(54,"input",27),e.NdJ("ngModelChange",function(s){return t.searchStockName=s})("ngModelChange",function(){return t.onSearchChange()}),e.qZA()()(),e.TgZ(55,"div",23)(56,"div",24)(57,"p",25),e._uU(58,"PU TTC :"),e.qZA(),e.TgZ(59,"input",28),e.NdJ("ngModelChange",function(s){return t.searchPrix=s})("ngModelChange",function(){return t.onSearchChange()}),e.qZA()()()()(),e.TgZ(60,"div",8)(61,"div",29)(62,"div")(63,"table",30)(64,"thead")(65,"tr")(66,"th"),e._uU(67,"STOCK"),e.qZA(),e.TgZ(68,"th"),e._uU(69,"D\xc9SIGNATION"),e.qZA(),e.TgZ(70,"th"),e._uU(71,"QUANTIT\xc9"),e.qZA(),e.TgZ(72,"th"),e._uU(73,"PU TTC (dt)"),e.qZA()()(),e.TgZ(74,"tbody"),e.YNc(75,C,14,13,"tr",31),e.YNc(76,f,4,0,"tr",32),e.qZA()(),e.TgZ(77,"nav",33)(78,"ul",34)(79,"li",35)(80,"a",36),e.NdJ("click",function(){return t.fetchStockItems(t.page.number-1,t.pageSize)}),e._uU(81,"\xab"),e.qZA()(),e.YNc(82,_,3,3,"li",37),e.TgZ(83,"li",35)(84,"a",38),e.NdJ("click",function(){return t.fetchStockItems(t.page.number+1,t.pageSize)}),e._uU(85,"\xbb"),e.qZA()()()()()()()()()()()()()),2&n&&(e.xp6(17),e.Oqu(t.totalArticle),e.xp6(11),e.hij(" ",t.inCount,""),e.xp6(11),e.hij(" ",t.outCount,""),e.xp6(10),e.Q6J("ngModel",t.designation),e.xp6(5),e.Q6J("ngModel",t.searchStockName),e.xp6(5),e.Q6J("ngModel",t.searchPrix),e.xp6(16),e.Q6J("ngForOf",t.page.content),e.xp6(1),e.Q6J("ngIf",0===t.page.content.length),e.xp6(3),e.ekj("disabled",0===t.page.number),e.xp6(3),e.Q6J("ngForOf",t.pages),e.xp6(1),e.ekj("disabled",t.page.number===t.page.totalPages-1))},dependencies:[c.sg,c.O5,Z.S,l.Fj,l.wV,l.JJ,l.On,c.gd,c.JJ]}),o})()}];let U=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[d.Bz.forChild(A),d.Bz]}),o})();var S=r(4466);let k=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[c.ez,U,S.m,l.u5]}),o})()}}]);