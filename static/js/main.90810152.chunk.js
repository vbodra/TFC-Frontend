(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{22:function(e,t,a){},31:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),n=a(23),r=a.n(n),o=a(5),i=a(2),l=a(11),d=a(8),b=a(3),j=a(4),m=a.n(j),u=a(0),h=function(e){var t=e.teams,a=e.homeTeam,s=e.getTeam,c=e.testId;return Object(u.jsxs)("label",{htmlFor:a?"home-team-scoreboard":"away-team-scoreboard",children:[a?Object(u.jsx)("p",{children:"Time Mandante"}):Object(u.jsx)("p",{children:"Time Visitante"}),Object(u.jsx)("select",{"data-testid":c,onChange:function(e){var t=e.target.value;s(t,a?"homeTeam":"awayTeam")},children:t.map((function(e,t){var a=e.teamName;return Object(u.jsx)("option",{value:a,children:a},t)}))})]})},O=function(e){var t=e.homeTeam,a=e.score,s=e.setScore,c=e.qtyGoal,n=e.testId;return Object(u.jsxs)("label",{htmlFor:t?"home-team-scoreboard":"away-team-scoreboard",children:[Object(u.jsx)("p",{children:"Gols"}),Object(u.jsx)("input",{"data-testid":n,type:"number",min:"0",value:a,onChange:function(e){var t=e.target.value;s(t<c?c:t)}})]})};O.defaultProps={score:void 0,qtyGoal:void 0};var g=O,_=function(e){var t=e.teams,a=e.setTeams,c=e.getTeam,n=e.homeTeamScoreboard,r=e.setHomeTeamScoreboard,o=e.awayTeamScoreboard,i=e.setAwayTeamScoreboard,l=e.createMatch,j=e.finishMatch,O="not-created",_=Object(s.useState)(O),f=Object(b.a)(_,2),x=f[0],A=f[1],p=Object(s.useState)(O),v=Object(b.a)(p,2),w=v[0],S=v[1];return Object(u.jsx)("section",{className:"match-settings-section",children:Object(u.jsxs)("form",{className:"match-settings-form",children:[Object(u.jsxs)("div",{className:"match-settings-form-options",children:[Object(u.jsx)(h,{testId:"insertion_matches__select_home_team",teams:t,setTeams:a,homeTeam:!0,getTeam:c}),Object(u.jsx)(g,{testId:"insertion_matches__select_quantity_goals_home_team",homeTeam:!0,score:n,setScore:r}),Object(u.jsxs)("div",{className:"match-settings-form-versus",children:[Object(u.jsx)("span",{}),Object(u.jsx)("span",{children:"X"})]}),Object(u.jsx)(g,{testId:"insertion_matches__select_quantity_goals_away_team",homeTeam:!1,score:o,setScore:i}),Object(u.jsx)(h,{testId:"insertion_matches__select_away_team",teams:t,setTeams:a,homeTeam:!1,getTeam:c})]}),Object(u.jsxs)("div",{className:"match-settings-form-buttons",children:[Object(u.jsx)("button",{"data-testid":"insertion_matches__save_match_btn",onClick:Object(d.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l(!0);case 2:t=e.sent,S(t),A("In-Progress");case 5:case"end":return e.stop()}}),e)}))),type:"button",disabled:x!==O,children:"Salvar Partida"}),Object(u.jsx)("button",{"data-testid":"insertion_matches__finish_match_btn",onClick:function(){j(w.id)},type:"button",disabled:x===O,children:"Finalizar Partida"})]})]})})},f=function(e){var t=e.homeTeam,a=e.awayTeam,c=e.homeTeamGoals,n=e.awayTeamGoals,r=e.idMatch,o=e.updateMatch,i=e.finishMatch,l=e.getTeam,d=Object(s.useState)(c),j=Object(b.a)(d,2),m=j[0],O=j[1],_=Object(s.useState)(n),f=Object(b.a)(_,2),x=f[0],A=f[1];return Object(u.jsx)("section",{className:"match-settings-section",children:Object(u.jsxs)("form",{className:"match-settings-form",children:[Object(u.jsxs)("div",{className:"match-settings-form-options",children:[Object(u.jsx)(h,{testId:"insertion_matches__select_home_team",teams:t,homeTeam:!0,getTeam:l}),Object(u.jsx)(g,{testId:"insertion_matches__select_quantity_goals_home_team",homeTeam:!0,score:m,setScore:O,qtyGoal:c}),Object(u.jsxs)("div",{className:"match-settings-form-versus",children:[Object(u.jsx)("span",{}),Object(u.jsx)("span",{children:"X"})]}),Object(u.jsx)(g,{testId:"insertion_matches__select_quantity_goals_away_team",homeTeam:!1,score:x,setScore:A,qtyGoal:n}),Object(u.jsx)(h,{testId:"insertion_matches__select_away_team",teams:a,homeTeam:!1,getTeam:l})]}),Object(u.jsxs)("div",{className:"match-settings-form-buttons",children:[Object(u.jsx)("button",{"data-testid":"insertion_matches__edit_match_btn",onClick:function(){return o(r,{homeTeamGoals:m,awayTeamGoals:x})},type:"button",children:"Editar"}),Object(u.jsx)("button",{"data-testid":"insertion_matches__finish_match_btn",onClick:function(){return i(r)},type:"button",children:"Finalizar"})]})]})})},x=a.p+"static/media/negative_logo.29805c2a.png",A=a.p+"static/media/positive_logo.4a6f1733.png",p=(a(31),function(e){var t=e.page,a=e.FirstNavigationLink,s=e.SecondNavegationLink,c=e.logged,n=e.setLogin,r=Object(i.g)();return Object(u.jsxs)("header",{className:"common-header",children:[Object(u.jsx)("div",{className:"image-content",children:Object(u.jsx)("img",{src:x,alt:"Trybe Futebol Clube Negative Logo"})}),Object(u.jsx)("h1",{"data-testid":"header__title",children:t}),Object(u.jsxs)("div",{className:"buttons-content",children:[Object(u.jsx)(a,{}),c?Object(u.jsxs)("button",{type:"button",onClick:function(){return localStorage.removeItem("user"),n(!1),void r("/leaderboard")},children:["Sair",Object(u.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACLSURBVHgB7ZRtCoAgDEBndICO0P3/dISO0BE8ylpgIKFua46CeiAqfjyVTYAfhpB3kIAOBOJsD+DMCMwJNJRewP0GYgEdbqayHjXcBROVsSUNx5qktV4in6hsLYlJIJGwAtQTc0lJ4B5FKsxPZNlcJGhNwB5hygjYRDMJJDwSRcXf1HKLK+/Kg2+yAyZjIuh4EFi/AAAAAElFTkSuQmCC",alt:"Sair do aplicativo"})]}):Object(u.jsx)(s,{})]})]})});p.defaultProps={SecondNavegationLink:null,logged:void 0,setLogin:void 0};var v=p,w=function(){return Object(u.jsx)(o.b,{"data-testid":"header__show_matches_btn",to:"/matches",children:"Partidas"})},S=function(){return Object(u.jsx)("div",{children:"Loading..."})},y=a(24),N=a.n(y).a.create({baseURL:"https://tfc-backend-vbodra.herokuapp.com"}),T=function(e){N.defaults.headers.common.Authorization=e},C=function(){var e=Object(d.a)(m.a.mark((function e(t){var a,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.get(t);case 2:return a=e.sent,s=a.data,e.abrupt("return",s);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(d.a)(m.a.mark((function e(t,a){var s,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.post(t,a);case 2:return s=e.sent,c=s.data,e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),F=N,k=(a(50),function(){var e=Object(s.useState)([]),t=Object(b.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)("0"),r=Object(b.a)(n,2),o=r[0],j=r[1],h=Object(s.useState)("0"),O=Object(b.a)(h,2),g=O[0],x=O[1],A=Object(s.useState)(""),p=Object(b.a)(A,2),y=p[0],N=p[1],I=Object(s.useState)(""),k=Object(b.a)(I,2),E=k[0],G=k[1],B=Object(s.useState)(!1),P=Object(b.a)(B,2),M=P[0],L=P[1],R=Object(i.f)(),D=Object(i.g)();Object(s.useEffect)((function(){Object(d.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=JSON.parse(localStorage.getItem("user"))){e.next=3;break}return e.abrupt("return",D("/"));case 3:a=t.token,T(a),F.get("/login/validate").then((function(){return L(!0)})).catch((function(){return D("/")}));case 6:case"end":return e.stop()}}),e)})))()}),[D]),Object(s.useEffect)((function(){var e=(JSON.parse(localStorage.getItem("user"))||{token:""}).token;""!==e&&T(e),a.length||C("/teams").then((function(e){c(e)})).catch((function(e){return console.log(e)}))}));var J=function(e,t){var s=a.find((function(t){return t.teamName===e})).id;"homeTeam"===t?N(s):G(s)},U=function(){var e=Object(d.a)(m.a.mark((function e(t){var a,s,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={homeTeam:+y,awayTeam:+E,homeTeamGoals:+o,awayTeamGoals:+g,inProgress:t},e.next=3,F.post("/matches",a);case 3:return s=e.sent,c=s.data,e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Q=function(){var e=Object(d.a)(m.a.mark((function e(t,a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.patch("/matches/".concat(t),Object(l.a)({},a));case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),z=function(){var e=Object(d.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.patch("/matches/".concat(t,"/finish"));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();if(!M)return Object(u.jsx)(S,{});if(R.state){var V=R.state,Y=V.id,X=V.teamHome,q=V.homeTeamGoals,H=V.teamAway,K=V.awayTeamGoals;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(v,{page:"EDITAR PARTIDA",FirstNavigationLink:w,logged:M,setLogin:L}),Object(u.jsx)(f,{homeTeam:[X],awayTeam:[H],homeTeamGoals:q,awayTeamGoals:K,idMatch:Y,updateMatch:Q,finishMatch:z,getTeam:J})]})}return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(v,{page:"ADICIONAR PARTIDA",FirstNavigationLink:w,logged:M,setLogin:L}),Object(u.jsx)(_,{setHomeTeamScoreboard:j,setAwayTeamScoreboard:x,teams:a,getTeam:J,createMatch:U,finishMatch:z})]})}),E=(a(51),function(e){var t=e.currentFilter,a=Object(s.useState)([]),c=Object(b.a)(a,2),n=c[0],r=c[1],o=function(e){return C(e).then((function(e){return r(e)})).catch((function(e){return console.log(e)}))};return Object(s.useEffect)((function(){switch(t){case"Classifica\xe7\xe3o Mandantes":o("/leaderboard/home");break;case"Classifica\xe7\xe3o Visitantes":o("/leaderboard/away");break;default:o("/leaderboard")}}),[t]),Object(s.useEffect)((function(){0===n.length&&o("/leaderboard")}),[n]),n.length?Object(u.jsx)("section",{className:"score-board-table-section",children:Object(u.jsxs)("table",{className:"score-board-table",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{"data-testid":"score_boarding__classification",children:"Classifica\xe7\xe3o"}),Object(u.jsx)("th",{"data-testid":"score_boarding__team_name",children:"Time"}),Object(u.jsx)("th",{"data-testid":"score_boarding__total_points",children:"P"}),Object(u.jsx)("th",{"data-testid":"score_boarding__total_games",children:"J"}),Object(u.jsx)("th",{"data-testid":"score_boarding__total_victories",children:"V"}),Object(u.jsx)("th",{"data-testid":"score_boarding__total_draws",children:"E"}),Object(u.jsx)("th",{"data-testid":"score_boarding__total_looses",children:"D"}),Object(u.jsx)("th",{"data-testid":"score_boarding__goals_favor",children:"GP"}),Object(u.jsx)("th",{"data-testid":"score_boarding__goals_own",children:"GC"}),Object(u.jsx)("th",{"data-testid":"score_boarding__goals_balance",children:"SG"}),Object(u.jsx)("th",{"data-testid":"score_boarding__efficiency",children:"%"})]})}),Object(u.jsx)("tbody",{children:n.map((function(e,t){var a=e.name,s=e.totalPoints,c=e.totalGames,n=e.totalVictories,r=e.totalDraws,o=e.totalLosses,i=e.goalsFavor,l=e.goalsOwn,d=e.goalsBalance,b=e.efficiency;return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{className:"score-board-classification","data-testid":"score_boarding__classification_".concat(t+1),children:"".concat(t+1)}),Object(u.jsx)("td",{className:"score-board-team-name","data-testid":"score_boarding__team_name_".concat(t+1),children:a}),Object(u.jsx)("td",{className:"score-board-total-points","data-testid":"score_boarding__total_points_".concat(t+1),children:s}),Object(u.jsx)("td",{className:"score-board-total-games","data-testid":"score_boarding__total_games_".concat(t+1),children:c}),Object(u.jsx)("td",{className:"score-board-total-victories","data-testid":"score_boarding__total_victories_".concat(t+1),children:n}),Object(u.jsx)("td",{className:"score-board-total-draws","data-testid":"score_boarding__total_draws_".concat(t+1),children:r}),Object(u.jsx)("td",{className:"score-board-total-looses","data-testid":"score_boarding__total_looses_".concat(t+1),children:o}),Object(u.jsx)("td",{className:"score-board-goals-favor","data-testid":"score_boarding__goals_favor_".concat(t+1),children:i}),Object(u.jsx)("td",{className:"score-board-goals-own","data-testid":"score_boarding__goals_own_".concat(t+1),children:l}),Object(u.jsx)("td",{className:"score-board-goals-balance","data-testid":"score_boarding__goals_balance_".concat(t+1),children:d}),Object(u.jsx)("td",{className:"score-board-efficiency","data-testid":"score_boarding__efficiency_".concat(t+1),children:b})]},a)}))})]})}):Object(u.jsx)(S,{})}),G=function(){return Object(u.jsx)(o.b,{"data-testid":"header__login_btn",to:"/login",children:"Login"})},B=(a(22),function(e){var t=e.currentFilter,a=e.setCurrentFilter;return Object(u.jsxs)("form",{children:[Object(u.jsxs)("label",{htmlFor:"classification-filter",children:["Partidas:",Object(u.jsxs)("select",{id:"classification-filter",defaultValue:t,"data-testid":"score_boarding__classification_filter",children:[Object(u.jsx)("option",{children:"Classifica\xe7\xe3o Geral"}),Object(u.jsx)("option",{children:"Classifica\xe7\xe3o Mandantes"}),Object(u.jsx)("option",{children:"Classifica\xe7\xe3o Visitantes"})]})]}),Object(u.jsx)("button",{"data-testid":"score_boarding__classification_filter_button",type:"button",onClick:function(){return function(){var e=document.getElementById("classification-filter").value;a(e)}()},children:"Buscar"})]})}),P=(a(52),function(){var e=Object(s.useState)(!1),t=Object(b.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)("Classifica\xe7\xe3o Geral"),r=Object(b.a)(n,2),o=r[0],i=r[1];return Object(s.useEffect)((function(){var e=localStorage.getItem("user");return e?JSON.parse(e).token?c(!0):void 0:c(!1)}),[a,c]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(v,{page:"CLASSIFICA\xc7\xc3O",FirstNavigationLink:w,SecondNavegationLink:G,logged:a,setLogin:c}),Object(u.jsx)("div",{className:"classification-handlers score-board-table-section",children:Object(u.jsx)(B,{currentFilter:o,setCurrentFilter:i})}),Object(u.jsx)(E,{currentFilter:o,setCurrentFilter:i})]})}),M=function(e){var t=e.currentFilter,a=e.isAdm,c=Object(s.useState)([]),n=Object(b.a)(c,2),r=n[0],o=n[1],l=Object(i.g)(),d=function(e){return C(e).then((function(e){return o(e)})).catch((function(e){return console.log(e)}))};return Object(s.useEffect)((function(){var e="/matches";switch(t){case"Em andamento":d("".concat(e,"?inProgress=true"));break;case"Finalizado":d("".concat(e,"?inProgress=false"));break;default:d(e)}}),[t]),Object(s.useEffect)((function(){r.length||d("/matches")}),[r]),r.length?Object(u.jsxs)("table",{className:"games-table",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{className:"games-table-thead-home-team",children:"Time Mandante"}),Object(u.jsx)("th",{className:"games-table-thead-goals",children:"Gols"}),Object(u.jsx)("th",{className:"games-table-thead-versus",children:" "}),Object(u.jsx)("th",{className:"games-table-thead-goals",children:"Gols"}),Object(u.jsx)("th",{className:"games-table-thead-away-team",children:"Time Visitante"}),Object(u.jsx)("th",{className:"games-table-thead-empty-space",children:" "}),Object(u.jsx)("th",{className:"games-table-thead-status",children:"Status"})]})}),Object(u.jsx)("tbody",{children:r.sort((function(e,t){return t.inProgress-e.inProgress})).map((function(e){var t=e.id,s=e.teamHome,c=e.homeTeamGoals,n=e.teamAway,r=e.awayTeamGoals,o=e.inProgress;return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{className:"games-table-tbody-home-team","data-testid":"matches__home_team_".concat(t),children:s.teamName}),Object(u.jsx)("td",{className:"games-table-tbody-home-team-goals","data-testid":"matches__home_team_goals_".concat(t),children:c}),Object(u.jsx)("td",{className:"games-table-tbody-versus",children:"X"}),Object(u.jsx)("td",{className:"games-table-tbody-away-team-goals","data-testid":"matches__away_team_goals_".concat(t),children:r}),Object(u.jsx)("td",{className:"games-table-tbody-away-team","data-testid":"matches__away_team_".concat(t),children:n.teamName}),Object(u.jsx)("td",{className:"games-table-tbody-empty-space",children:" "}),Object(u.jsxs)("td",{className:"games-table-tbody-status",children:[Object(u.jsx)("div",{children:o?Object(u.jsx)("p",{className:"game-status in-progress","data-testid":"matches__match_status_".concat(t),children:"Em andamento"}):Object(u.jsx)("p",{className:"game-status finished-game","data-testid":"matches__match_status_".concat(t),children:"Finalizado"})}),a?Object(u.jsx)("button",{type:"button","data-testid":"matches__match_status_btn_".concat(t),disabled:!o,onClick:function(){l("/matches/settings",{state:{id:t,teamHome:s,homeTeamGoals:c,teamAway:n,awayTeamGoals:r,inProgress:o}}),localStorage.setItem("game","editar")},children:o?Object(u.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEmSURBVHgB7ZQxTsMwFIZ/2wFlzBHKDTpHQiIDSzbWTD0CR+AmFQOIDSZUiSGREF3pEcINMiARSO0HbnCbNgVaYk/tP/n5PX+/n2Ub2OsPMXRUGA/6guStnMqz8cP1ZDXP0UEzOGQKUE94PA1Pk75VAw/TIYiC7zBYZ/KvIzqOk0GlDjMfJRQTKYH1GulCvL0eZdldoYOtO9BwEB8eMJmW8MFJRgyUm7wiOjfwrTsw8MUMyysSkelEEi6eRleXzTUbG7ThKyZlUTR3brTREf0M13wKOP8I1sFnaXSCo5BQ0fi+ff8XJQ7hdZlDeF3qEF6XO4S3DGzDlwzCOPn6FfmzTbjW/B1wxQPb8CUDF/DfDSzAtbz5wPcm8l2emFio6uVxdJNj5/UJnZ6yPmL04AYAAAAASUVORK5CYII=",alt:"Jogo em andamento"}):Object(u.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAOCAYAAAAi2ky3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADHSURBVHgBpdIxCsIwFAbg91ILunV0dBO3LuJabxB6CqmC9QS6eQWP4Q3USbEHqGMP4aQ0z74OQkurSfoPj0DCxw95AB3ixdJzl2HMZwTLMPJ844kAfVKwsYIqCFGmFM2NoSYEDsfMCGpD+E4b+oVwBI/+Qo66IBzHjaSfC3F1ZpOBuqdnG6RslKMI+D0RbHurcGeDlI0oSW84HQMiMhgUzZCbmSAlxIOSx6WOvXLY6yJfqAkrPnSoi1SgOmaCtEZEcg1/VqKeDwgvuifs8IBzAAAAAElFTkSuQmCC",alt:"Jogo finalizado"})}):null]})]},t)}))})]}):Object(u.jsx)(S,{})},L=function(){return Object(u.jsx)("div",{children:Object(u.jsx)(o.b,{className:"add-new-game-button","data-testid":"header__add_match_btn",to:"/matches/settings",children:"+ Adicionar nova partida"})})},R=function(){return Object(u.jsx)(o.b,{"data-testid":"header__show_classification_btn",to:"/leaderboard",children:"Classifica\xe7\xe3o"})},D=function(e){var t=e.currentFilter,a=e.setCurrentFilter;return Object(u.jsxs)("form",{children:[Object(u.jsxs)("label",{htmlFor:"game-filter",children:["Partidas:",Object(u.jsxs)("select",{id:"game-filter",defaultValue:t,"data-testid":"matches__option_show_finish_matches",children:[Object(u.jsx)("option",{children:"Todos os Jogos"}),Object(u.jsx)("option",{children:"Em andamento"}),Object(u.jsx)("option",{children:"Finalizado"})]})]}),Object(u.jsx)("button",{"data-testid":"matches__search_match_btn",type:"button",onClick:function(){return function(){var e=document.getElementById("game-filter").value;a(e)}()},children:"Buscar"})]})},J=function(){var e=Object(s.useState)("Status do Jogo"),t=Object(b.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(!1),r=Object(b.a)(n,2),o=r[0],i=r[1],l=Object(s.useState)(!1),d=Object(b.a)(l,2),j=d[0],m=d[1];return Object(s.useEffect)((function(){var e=JSON.parse(localStorage.getItem("user"))||{};e.token&&m(!0),"admin"===e.role&&i(!0)}),[]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(v,{page:"PARTIDAS",FirstNavigationLink:R,SecondNavegationLink:G,logged:j,setLogin:m}),Object(u.jsxs)("section",{className:"games-section",children:[Object(u.jsxs)("div",{className:"games-handlers",children:[Object(u.jsx)(D,{currentFilter:a,setCurrentFilter:c}),o?Object(u.jsx)(L,{}):null]}),Object(u.jsx)(M,{currentFilter:a,isAdm:o})]})]})},U=(a(53),function(){var e=Object(s.useState)(""),t=Object(b.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(""),r=Object(b.a)(n,2),o=r[0],j=r[1],h=Object(s.useState)(!1),O=Object(b.a)(h,2),g=O[0],_=O[1],f=Object(s.useState)(!1),x=Object(b.a)(f,2),p=x[0],S=x[1],y=function(){var e=Object(d.a)(m.a.mark((function e(t){var s,c,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,"/login",e.next=5,I("/login",{email:a,password:o});case 5:s=e.sent,c=s.token,n=s.user,localStorage.setItem("user",JSON.stringify(Object(l.a)({token:c},n))),_(!0),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),S(!0),_(!1);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){S(!1)}),[a,o]),g?Object(u.jsx)(i.a,{to:"/matches"}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(v,{page:"LOGIN",FirstNavigationLink:R,SecondNavegationLink:w}),Object(u.jsxs)("section",{className:"user-login-area",children:[Object(u.jsx)("img",{src:A,alt:"Trybe Futebol Clube Negative Logo"}),Object(u.jsxs)("form",{children:[Object(u.jsx)("h1",{children:"\xc1rea do usu\xe1rio"}),Object(u.jsx)("label",{htmlFor:"email-input",children:Object(u.jsx)("input",{className:"login__login_input",type:"text",value:a,onChange:function(e){var t=e.target.value;return c(t)},"data-testid":"login__login_input",placeholder:"Login"})}),Object(u.jsx)("label",{htmlFor:"password-input",children:Object(u.jsx)("input",{type:"password",value:o,onChange:function(e){var t=e.target.value;return j(t)},"data-testid":"login__password_input",placeholder:"Senha"})}),p?Object(u.jsx)("p",{"data-testid":"login__input_invalid_login_alert",children:"O endere\xe7o de e-mail ou a senha n\xe3o est\xe3o corretos.\n                    Por favor, tente novamente."}):null,Object(u.jsx)("button",{"data-testid":"login__login_btn",type:"submit",onClick:function(e){return y(e)},children:"Entrar"})]})]})]})});a(54);var Q=function(){return Object(u.jsxs)(i.d,{children:[Object(u.jsx)(i.b,{path:"matches/settings",element:Object(u.jsx)(k,{})}),Object(u.jsx)(i.b,{path:"/leaderboard",element:Object(u.jsx)(P,{})}),Object(u.jsx)(i.b,{path:"/matches",element:Object(u.jsx)(J,{})}),Object(u.jsx)(i.b,{path:"/login",element:Object(u.jsx)(U,{})}),Object(u.jsx)(i.b,{exact:!0,path:"/",element:Object(u.jsx)(i.a,{to:"/leaderboard"})})]})};r.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(o.a,{basename:"/TFC-Frontend",children:Object(u.jsx)(Q,{})})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.90810152.chunk.js.map