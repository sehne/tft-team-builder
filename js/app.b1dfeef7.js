(function(e){function t(t){for(var a,r,o=t[0],c=t[1],l=t[2],g=0,p=[];g<o.length;g++)r=o[g],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&p.push(i[r][0]),i[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);m&&m(t);while(p.length)p.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(a=!1)}a&&(s.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},i={app:0},s=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/tft-team-builder/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var m=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0327":function(e,t,n){e.exports=n.p+"img/Darkin.9da88582.png"},"0401":function(e,t,n){e.exports=n.p+"img/Volibear.12e89817.png"},"053c":function(e,t,n){e.exports=n.p+"img/Lissandra.f275ce49.png"},"0555":function(e,t,n){e.exports=n.p+"img/Zed.fa06a06e.png"},"055d":function(e,t,n){e.exports=n.p+"img/Poppy.ee356aa2.png"},"05a4":function(e,t,n){e.exports=n.p+"img/YomousGhostblade.4fcd4f77.png"},"1c9a":function(e,t,n){e.exports=n.p+"img/Lulu.f87e7495.png"},"1c9e":function(e,t,n){e.exports=n.p+"img/Karthus.4f2f5b3c.png"},"26e9":function(e,t,n){e.exports=n.p+"img/Warwick.c7bb97a2.png"},"2a0a":function(e,t,n){e.exports=n.p+"img/AurelionSol.fc63b5b0.png"},3890:function(e,t,n){e.exports=n.p+"img/Vayne.23a2be5b.png"},3933:function(e,t,n){e.exports=n.p+"img/Pyke.e85e8c47.png"},"485a":function(e,t,n){e.exports=n.p+"img/Kassadin.ca3d5e18.png"},"4b0b":function(e,t,n){e.exports=n.p+"img/Yuumi.1973b5f5.png"},"4e5c":function(e,t,n){e.exports=n.p+"img/Aatrox.d6dfc5c8.png"},5102:function(e,t,n){e.exports=n.p+"img/TwistedFate.6ba741d8.png"},"55ff":function(e,t,n){e.exports=n.p+"img/MissFortune.bf98853c.png"},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("h1",[e._v("Team "+e._s(e.getTeamSize()))]),n("div",{staticClass:"team"},e._l(e.getSelected(),function(t){return n("div",{key:t.name,staticClass:"champion",class:{selected:t.selected,important:e.isImportant(t)},on:{click:function(n){return e.toggle(t)}}},[n("img",{attrs:{src:t.image}})])}),0),n("div",{staticClass:"row"},[n("div",{staticClass:"column"},[n("h1",[e._v("Origins")]),e._l(e.getOrigins(),function(t){var a,i,s;return n("div",{key:t.name},[n("h3",[n("span",{class:[e.getColor(t.name)]},[e._v(e._s(t.name)+" "+e._s(e.getTraitCount(t.name)))]),e._v(" /\n          "),e.getTrait(t.name).bronze?n("span",{class:(a={},a[e.getColor(t.name)]=e.isBronze(t.name),a)},[e._v(e._s(e.getTrait(t.name).bronze)+" - ")]):e._e(),e.getTrait(t.name).silver?n("span",{class:(i={},i[e.getColor(t.name)]=e.isSilver(t.name),i)},[e._v(e._s(e.getTrait(t.name).silver)+" - ")]):e._e(),e.getTrait(t.name).gold?n("span",{class:(s={},s[e.getColor(t.name)]=e.isGold(t.name),s)},[e._v(e._s(e.getTrait(t.name).gold))]):e._e()]),e._l(e.getTraitChampions(t.name),function(t){return n("div",{key:t.name,staticClass:"champion",class:{selected:t.selected,important:e.isImportant(t)},on:{click:function(n){return e.toggle(t)}}},[n("img",{attrs:{src:t.image}})])})],2)})],2),n("div",{staticClass:"column"},[n("h1",[e._v("Classes")]),e._l(e.getClasses(),function(t){var a,i,s;return n("div",{key:t.name},[n("h3",[n("span",{class:[e.getColor(t.name)]},[e._v(e._s(t.name)+" "+e._s(e.getTraitCount(t.name)))]),e._v(" /\n          "),e.getTrait(t.name).bronze?n("span",{class:(a={},a[e.getColor(t.name)]=e.isBronze(t.name),a)},[e._v(e._s(e.getTrait(t.name).bronze)+" - ")]):e._e(),e.getTrait(t.name).silver?n("span",{class:(i={},i[e.getColor(t.name)]=e.isSilver(t.name),i)},[e._v(e._s(e.getTrait(t.name).silver)+" - ")]):e._e(),e.getTrait(t.name).gold?n("span",{class:(s={},s[e.getColor(t.name)]=e.isGold(t.name),s)},[e._v(e._s(e.getTrait(t.name).gold))]):e._e()]),e._l(e.getTraitChampions(t.name),function(t){return n("div",{key:t.name,staticClass:"champion",class:{selected:t.selected,important:e.isImportant(t)},on:{click:function(n){return e.toggle(t)}}},[n("img",{attrs:{src:t.image}})])})],2)})],2),n("div",{staticClass:"column"},[n("h1",[e._v("Cost")]),e._l([1,2,3,4,5],function(t){return n("div",{key:t},[n("h3",[e._v(e._s(t)+" Gold")]),e._l(e.getChampionsByCost(t),function(t){return n("div",{key:t.name,staticClass:"champion",class:{selected:t.selected,important:e.isImportant(t)},on:{click:function(n){return e.toggle(t)}}},[n("img",{attrs:{src:t.image}})])})],2)}),n("h3",[e._v("Trait Items")]),e._l(e.getChampionsByCost("item"),function(t){return n("div",{key:t.name,staticClass:"champion",class:{selected:t.selected,important:e.isImportant(t)},on:{click:function(n){return e.toggle(t)}}},[n("img",{attrs:{src:t.image}})])}),n("div",{staticClass:"team-comps"},[n("h1",[e._v("Popular Team Comps")]),e._l(e.comps,function(t,a){return n("div",{key:a,staticClass:"team-comp"},e._l(e.getChampionsFromComp(t),function(t){return n("div",{key:t.name,staticClass:"champion",class:{selected:t.selected,important:e.isImportant(t)},on:{click:function(n){return e.toggle(t)}}},[n("img",{attrs:{src:t.image}})])}),0)})],2)],2)])])},s=[],r=(n("ac4d"),n("8a81"),n("ac6a"),n("6762"),n("2fdb"),n("7f7f"),n("7514"),{name:"app",data:function(){return{champions:[{name:"camille",selected:!1,cost:1,traits:["hextech","blademaster"],image:n("b90c")},{name:"darius",selected:!1,cost:1,traits:["imperial","knight"],image:n("d749")},{name:"elise",selected:!1,cost:1,traits:["demon","shapeshifter"],image:n("fa6e")},{name:"fiora",selected:!1,cost:1,traits:["noble","blademaster"],image:n("eb70")},{name:"garen",selected:!1,cost:1,traits:["noble","knight"],image:n("c3cc")},{name:"graves",selected:!1,cost:1,traits:["pirate","gunslinger"],image:n("8f49")},{name:"kassadin",selected:!1,cost:1,traits:["void","sorcerer"],image:n("485a")},{name:"khaZix",selected:!1,cost:1,traits:["void","assassin"],image:n("a3d7")},{name:"mordekaiser",selected:!1,cost:1,traits:["phantom","knight"],image:n("d2a5")},{name:"nidalee",selected:!1,cost:1,traits:["wild","shapeshifter"],image:n("de75")},{name:"tristana",selected:!1,cost:1,traits:["yordle","gunslinger"],image:n("97f8")},{name:"vayne",selected:!1,cost:1,traits:["noble","ranger"],image:n("3890")},{name:"warwick",selected:!1,cost:1,traits:["wild","brawler"],image:n("26e9")},{name:"ahri",selected:!1,cost:2,traits:["wild","sorcerer"],image:n("fb74")},{name:"blitzcrank",selected:!1,cost:2,traits:["robot","brawler"],image:n("a82a")},{name:"braum",selected:!1,cost:2,traits:["glacial","guardian"],image:n("ec43")},{name:"jayce",selected:!1,cost:2,traits:["hextech","shapeshifter"],image:n("e6a4")},{name:"lissandra",selected:!1,cost:2,traits:["glacial","elementalist"],image:n("053c")},{name:"lucian",selected:!1,cost:2,traits:["noble","gunslinger"],image:n("f218")},{name:"lulu",selected:!1,cost:2,traits:["yordle","sorcerer"],image:n("1c9a")},{name:"pyke",selected:!1,cost:2,traits:["pirate","assassin"],image:n("3933")},{name:"rekSai",selected:!1,cost:2,traits:["void","brawler"],image:n("e81f")},{name:"shen",selected:!1,cost:2,traits:["ninja","blademaster"],image:n("dcbe")},{name:"twistedFate",selected:!1,cost:2,traits:["pirate","sorcerer"],image:n("5102")},{name:"varus",selected:!1,cost:2,traits:["demon","ranger"],image:n("8456")},{name:"zed",selected:!1,cost:2,traits:["ninja","assassin"],image:n("0555")},{name:"aatrox",selected:!1,cost:3,traits:["demon","blademaster"],image:n("4e5c")},{name:"ashe",selected:!1,cost:3,traits:["glacial","ranger"],image:n("6e24")},{name:"evelynn",selected:!1,cost:3,traits:["demon","assassin"],image:n("bd2d")},{name:"gangplank",selected:!1,cost:3,traits:["pirate","blademaster","gunslinger"],image:n("9e64")},{name:"katarina",selected:!1,cost:3,traits:["imperial","assassin"],image:n("c43a")},{name:"kennen",selected:!1,cost:3,traits:["ninja","yordle","elementalist"],image:n("a47d")},{name:"morgana",selected:!1,cost:3,traits:["demon","sorcerer"],image:n("cf4a")},{name:"poppy",selected:!1,cost:3,traits:["yordle","knight"],image:n("055d")},{name:"rengar",selected:!1,cost:3,traits:["wild","assassin"],image:n("7295")},{name:"shyvana",selected:!1,cost:3,traits:["dragon","shapeshifter"],image:n("aee2")},{name:"veigar",selected:!1,cost:3,traits:["yordle","sorcerer"],image:n("cade")},{name:"vi",selected:!1,cost:3,traits:["hextech","brawler"],image:n("8b91")},{name:"volibear",selected:!1,cost:3,traits:["glacial","brawler"],image:n("0401")},{name:"akali",selected:!1,cost:4,traits:["ninja","assassin"],image:n("eb9b")},{name:"aurelionSol",selected:!1,cost:4,traits:["dragon","sorcerer"],image:n("2a0a")},{name:"brand",selected:!1,cost:4,traits:["demon","elementalist"],image:n("fad0")},{name:"choGath",selected:!1,cost:4,traits:["void","brawler"],image:n("e7ff")},{name:"draven",selected:!1,cost:4,traits:["imperial","blademaster"],image:n("b3fb")},{name:"gnar",selected:!1,cost:4,traits:["wild","yordle","shapeshifter"],image:n("5980")},{name:"jinx",selected:!1,cost:4,traits:["hextech","gunslinger"],image:n("6974")},{name:"kindred",selected:!1,cost:4,traits:["phantom","ranger"],image:n("729d")},{name:"leona",selected:!1,cost:4,traits:["noble","guardian"],image:n("8260")},{name:"sejuani",selected:!1,cost:4,traits:["glacial","knight"],image:n("eed1")},{name:"anivia",selected:!1,cost:5,traits:["glacial","elementalist"],image:n("aa25")},{name:"karthus",selected:!1,cost:5,traits:["phantom","sorcerer"],image:n("1c9e")},{name:"kayle",selected:!1,cost:5,traits:["noble","knight"],image:n("cb10")},{name:"missFortune",selected:!1,cost:5,traits:["pirate","gunslinger"],image:n("55ff")},{name:"pantheon",selected:!1,cost:5,traits:["dragon","guardian"],image:n("716a")},{name:"swain",selected:!1,cost:5,traits:["imperial","demon","shapeshifter"],image:n("98a8")},{name:"yasuo",selected:!1,cost:5,traits:["exile","blademaster"],image:n("bbee")},{name:"bladeOfTheRuinedKing",selected:!1,cost:"item",traits:["blademaster"],image:n("6e8f")},{name:"bladeOfTheRuinedKing2",selected:!1,cost:"item",traits:["blademaster"],image:n("6e8f")},{name:"darkin",selected:!1,cost:"item",traits:["demon"],image:n("0327")},{name:"darkin2",selected:!1,cost:"item",traits:["demon"],image:n("0327")},{name:"frozenMallet",selected:!1,cost:"item",traits:["glacial"],image:n("6a61")},{name:"frozenMallet2",selected:!1,cost:"item",traits:["glacial"],image:n("6a61")},{name:"knightsVow",selected:!1,cost:"item",traits:["knight"],image:n("a56e")},{name:"knightsVow2",selected:!1,cost:"item",traits:["knight"],image:n("a56e")},{name:"yomousGhostblade",selected:!1,cost:"item",traits:["assassin"],image:n("05a4")},{name:"yomousGhostblade2",selected:!1,cost:"item",traits:["assassin"],image:n("05a4")},{name:"yuumi",selected:!1,cost:"item",traits:["sorcerer"],image:n("4b0b")},{name:"yuumi2",selected:!1,cost:"item",traits:["sorcerer"],image:n("4b0b")}],traits:[{name:"demon",type:"origin",bronze:2,silver:4,gold:6},{name:"dragon",type:"origin",bronze:null,silver:null,gold:2},{name:"glacial",type:"origin",bronze:2,silver:4,gold:6},{name:"hextech",type:"origin",bronze:2,silver:null,gold:4},{name:"imperial",type:"origin",bronze:2,silver:null,gold:4},{name:"noble",type:"origin",bronze:3,silver:null,gold:6},{name:"ninja",type:"origin",bronze:1,silver:null,gold:4},{name:"pirate",type:"origin",bronze:null,silver:null,gold:3},{name:"phantom",type:"origin",bronze:null,silver:null,gold:2},{name:"void",type:"origin",bronze:null,silver:null,gold:3},{name:"wild",type:"origin",bronze:2,silver:null,gold:4},{name:"yordle",type:"origin",bronze:3,silver:null,gold:6},{name:"exile",type:"origin",bronze:null,silver:null,gold:1},{name:"robot",type:"origin",bronze:null,silver:null,gold:1},{name:"assassin",type:"class",bronze:3,silver:null,gold:6},{name:"blademaster",type:"class",bronze:3,silver:6,gold:9},{name:"brawler",type:"class",bronze:2,silver:4,gold:6},{name:"elementalist",type:"class",bronze:null,silver:null,gold:3},{name:"guardian",type:"class",bronze:null,silver:null,gold:2},{name:"gunslinger",type:"class",bronze:2,silver:4,gold:6},{name:"knight",type:"class",bronze:2,silver:4,gold:6},{name:"ranger",type:"class",bronze:2,silver:null,gold:4},{name:"shapeshifter",type:"class",bronze:3,silver:null,gold:6},{name:"sorcerer",type:"class",bronze:3,silver:null,gold:6}],comps:[["akali","kassadin","choGath","evelynn","khaZix","rengar","rekSai","pyke"],["evelynn","leona","pantheon","morgana","aatrox","aurelionSol","brand","karthus"],["elise","leona","pantheon","jayce","shyvana","swain","nidalee","gnar"],["mordekaiser","leona","pantheon","vayne","varus","ashe","kindred","sejuani"]]}},methods:{toggle:function(e){e.selected=!e.selected},getSelected:function(){return this.champions.filter(function(e){return e.selected})},getOrigins:function(){return this.traits.filter(function(e){return"origin"==e.type})},getClasses:function(){return this.traits.filter(function(e){return"class"==e.type})},getTrait:function(e){return this.traits.find(function(t){return t.name==e})},getTraitChampions:function(e){return this.champions.filter(function(t){return t.traits.includes(e)})},getTraitCount:function(e){return this.champions.filter(function(t){return t.traits.includes(e)&&t.selected}).length},isOneOff:function(e){var t=this.getTrait(e),n=this.getTraitCount(e);return t.bronze-1==n||t.silver-1==n||t.gold-1==n},isExacly:function(e){var t=this.getTrait(e),n=this.getTraitCount(e);return 0!=n&&(t.bronze==n||t.silver==n||t.gold==n)},getColor:function(e){return this.isGold(e)?"gold":this.isSilver(e)?"silver":this.isBronze(e)?"bronze":""},isGold:function(e){return this.getTraitCount(e)>=this.getTrait(e).gold},isSilver:function(e){return this.getTrait(e).silver&&this.getTraitCount(e)>=this.getTrait(e).silver},isBronze:function(e){return this.getTrait(e).bronze&&("ninja"!=e&&this.getTraitCount(e)>=this.getTrait(e).bronze||"ninja"==e&&this.getTraitCount(e)==this.getTrait(e).bronze)},getChampionsByCost:function(e){return this.champions.filter(function(t){return t.cost==e})},isImportant:function(e){if(!e.selected)return!1;var t=0,n=!0,a=!1,i=void 0;try{for(var s,r=e.traits[Symbol.iterator]();!(n=(s=r.next()).done);n=!0){var o=s.value;this.isExacly(o)&&t++}}catch(c){a=!0,i=c}finally{try{n||null==r.return||r.return()}finally{if(a)throw i}}return t>1},getTeamSize:function(){return this.champions.filter(function(e){return e.selected&&"item"!=e.cost}).length},getChampionsFromComp:function(e){return this.champions.filter(function(t){return e.includes(t.name)})}}}),o=r,c=(n("5c0b"),n("2877")),l=Object(c["a"])(o,i,s,!1,null,null,null),m=l.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(m)}}).$mount("#app")},5980:function(e,t,n){e.exports=n.p+"img/Gnar.929482b3.png"},"5c0b":function(e,t,n){"use strict";var a=n("e332"),i=n.n(a);i.a},6974:function(e,t,n){e.exports=n.p+"img/Jinx.acaab038.png"},"6a61":function(e,t,n){e.exports=n.p+"img/FrozenMallet.d5cb250f.png"},"6e24":function(e,t,n){e.exports=n.p+"img/Ashe.ece6a984.png"},"6e8f":function(e,t,n){e.exports=n.p+"img/BladeOfTheRuinedKing.d118fbdd.png"},"716a":function(e,t,n){e.exports=n.p+"img/Pantheon.f749ffb5.png"},7295:function(e,t,n){e.exports=n.p+"img/Rengar.d3f215e9.png"},"729d":function(e,t,n){e.exports=n.p+"img/Kindred.3ddbb52e.png"},8260:function(e,t,n){e.exports=n.p+"img/Leona.ecbbddc5.png"},8456:function(e,t,n){e.exports=n.p+"img/Varus.fd8fd9d6.png"},"8b91":function(e,t,n){e.exports=n.p+"img/Vi.74f4ed9b.png"},"8f49":function(e,t,n){e.exports=n.p+"img/Graves.1aa4a673.png"},"97f8":function(e,t,n){e.exports=n.p+"img/Tristana.d68f3759.png"},"98a8":function(e,t,n){e.exports=n.p+"img/Swain.7c196495.png"},"9e64":function(e,t,n){e.exports=n.p+"img/Gangplank.202148cd.png"},a3d7:function(e,t,n){e.exports=n.p+"img/KhaZix.6dc283eb.png"},a47d:function(e,t,n){e.exports=n.p+"img/Kennen.68714fab.png"},a56e:function(e,t,n){e.exports=n.p+"img/KnightsVow.ae9fd81c.png"},a82a:function(e,t,n){e.exports=n.p+"img/Blitzcrank.f3130118.png"},aa25:function(e,t,n){e.exports=n.p+"img/Anivia.93816349.png"},aee2:function(e,t,n){e.exports=n.p+"img/Shyvana.dc97b11a.png"},b3fb:function(e,t,n){e.exports=n.p+"img/Draven.86c4bd76.png"},b90c:function(e,t,n){e.exports=n.p+"img/Camille.6a0493bc.png"},bbee:function(e,t,n){e.exports=n.p+"img/Yasuo.23a82e4b.png"},bd2d:function(e,t,n){e.exports=n.p+"img/Evelynn.86e64c85.png"},c3cc:function(e,t,n){e.exports=n.p+"img/Garen.50d7e324.png"},c43a:function(e,t,n){e.exports=n.p+"img/Katarina.9cf1d48d.png"},cade:function(e,t,n){e.exports=n.p+"img/Veigar.81674901.png"},cb10:function(e,t,n){e.exports=n.p+"img/Kayle.7a1b083f.png"},cf4a:function(e,t,n){e.exports=n.p+"img/Morgana.6de3f99c.png"},d2a5:function(e,t,n){e.exports=n.p+"img/Mordekaiser.b666c5b0.png"},d749:function(e,t,n){e.exports=n.p+"img/Darius.ad04dc3f.png"},dcbe:function(e,t,n){e.exports=n.p+"img/Shen.99263071.png"},de75:function(e,t,n){e.exports=n.p+"img/Nidalee.5fe214fa.png"},e332:function(e,t,n){},e6a4:function(e,t,n){e.exports=n.p+"img/Jayce.0d655ba3.png"},e7ff:function(e,t,n){e.exports=n.p+"img/ChoGath.7a216338.png"},e81f:function(e,t,n){e.exports=n.p+"img/RekSai.829a3983.png"},eb70:function(e,t,n){e.exports=n.p+"img/Fiora.d389110d.png"},eb9b:function(e,t,n){e.exports=n.p+"img/Akali.d71bf7b7.png"},ec43:function(e,t,n){e.exports=n.p+"img/Braum.16aa8f66.png"},eed1:function(e,t,n){e.exports=n.p+"img/Sejuani.f64314e0.png"},f218:function(e,t,n){e.exports=n.p+"img/Lucian.7efbc313.png"},fa6e:function(e,t,n){e.exports=n.p+"img/Elise.b3a46439.png"},fad0:function(e,t,n){e.exports=n.p+"img/Brand.c271b6dc.png"},fb74:function(e,t,n){e.exports=n.p+"img/Ahri.f735bc04.png"}});
//# sourceMappingURL=app.b1dfeef7.js.map