(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-db81"],{"077f":function(e,t,i){"use strict";i("7f7f");var a=i("c93e"),n=i("9bd2"),o=i("ba4a"),r=Object(a["a"])({},o["a"],{requestPageContradictionResolve:function(e,t){Object(n["a"])({url:"/compre/peace/solve/findPage?name="+e.queryForm.name+"&districtCode="+e.queryForm.districtCode+"&page="+e.page+"&pageSize="+e.pageSize,method:"get"}).then(function(e){t(e)})},requestSaveContradictionResolve:function(e,t){Object(n["a"])({url:"/compre/peace/solve/save",method:"post",data:e}).then(function(e){t(e)})},requestUpdateContradictionResolve:function(e,t){Object(n["a"])({url:"/compre/peace/solve/update",method:"post",data:e}).then(function(e){t(e)})},requestDeleteContradictionResolve:function(e,t){Object(n["a"])({url:"/compre/peace/solve/delete?id="+e,method:"post"}).then(function(e){t(e)})}});t["a"]=r},"3d38":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"charts-page"},[i("div",{staticClass:"top-card"},[i("techo-card",{attrs:{resizeEvent:"topCard",maxCard:!0,upLevel:e.isShowLevelBtu},on:{onUpLevel:e.handleUpLevel}},[i("div",{attrs:{slot:"header"},slot:"header"},[e._v("矛盾纠纷排查化解")]),i("div",{staticStyle:{height:"100%"},attrs:{id:"TopBar"}})])],1),i("el-row",{staticClass:"bottom-card",attrs:{gutter:10}},[i("el-col",{attrs:{span:8}},[i("techo-card",{attrs:{resizeEvent:"leftCard",maxCard:!0}},[i("div",{attrs:{slot:"header"},slot:"header"},[e._v("事件规模")]),i("div",{staticStyle:{height:"100%"},attrs:{id:"LeftPie"}})])],1),i("el-col",{attrs:{span:8}},[i("techo-card",{attrs:{resizeEvent:"MiddleCard",maxCard:!0}},[i("div",{attrs:{slot:"header"},slot:"header"},[e._v("事件类别")]),i("div",{staticStyle:{height:"100%"},attrs:{id:"MiddlePie"}})])],1),i("el-col",{attrs:{span:8}},[i("techo-card",{attrs:{resizeEvent:"rightCard",maxCard:!0}},[i("div",{attrs:{slot:"header"},slot:"header"},[e._v("化解方式")]),i("div",{staticStyle:{height:"100%"},attrs:{id:"RightPie"}})])],1)],1)],1)},n=[],o=(i("ac6a"),i("7f7f"),{tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},legend:{data:[]},grid:{top:"20%",bottom:"3%",left:"3%",right:"4%",containLabel:!0},xAxis:{type:"category",data:[]},yAxis:{type:"value",name:""},series:[]}),r={title:{x:"center",text:"",textStyle:{fontSize:16}},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},color:["#3965c3","#ffa639","#f75a51","#FF6633","#FF9966","#FF6699","#FFFF66","#FF99FF","#FF3333","#CCCCFF","#CCCC33","#CC6666","#CC33CC","#CC00FF","#99CC66","#99CC00","#99FF33","#990066"],legend:{orient:"vertical",left:"left",data:[]},series:[{name:"",type:"pie",radius:"55%",center:["50%","50%"],label:{normal:{show:!0},emphasis:{show:!0}},lableLine:{normal:{show:!0},emphasis:{show:!0}},data:[]}]},s=i("077f"),c={data:function(){return{DISCODE:"6102",topBarOptions:{},topBarChart:null,leftPieOptions:{},leftPieChart:null,middlePieOptions:{},middlePieChart:null,rightPieOptions:{},rightPieChart:null,byCode:"",isShowLevelBtu:!0,COLORS:["#3965c3","#ffa639","#f75a51"]}},watch:{byCode:function(e){this.isShowLevelBtu=6!=e.length}},mounted:function(){var e=this,t=this;this.topBarChart=this.$echarts.init(this.$el.querySelector("#TopBar")),this.leftPieChart=this.$echarts.init(this.$el.querySelector("#LeftPie")),this.middlePieChart=this.$echarts.init(this.$el.querySelector("#MiddlePie")),this.rightPieChart=this.$echarts.init(this.$el.querySelector("#RightPie")),this.topBarChart.on("click",function(t){14!=e.byCode.length&&(e.getCaseData(t.data.rawdata.code),e.getScalePieData(t.data.rawdata.code),e.getTypePieData(t.data.rawdata.code),e.getWayPieData(t.data.rawdata.code))}),this.$bus.$on("topCard",function(){t.topBarChart.resize()}),this.$bus.$on("leftCard",function(){t.leftPieChart.resize()}),this.$bus.$on("MiddleCard",function(){t.middlePieChart.resize()}),this.$bus.$on("rightCard",function(){t.rightPieChart.resize()})},created:function(){this.getCaseData(),this.getScalePieData(),this.getTypePieData(),this.getWayPieData()},methods:{getCaseData:function(e){var t=this,i={districtCode:e||this.DISCODE,entityNames:"PeaceDisputeSolve"},a=this;this.topBarOptions=_.cloneDeep(o),s["a"].requestByEntityNames(i,function(e){0!=e.length&&(t.byCode=e[0].code,t.topBarOptions.yAxis.name="数量",t.topBarOptions.legend.data=["数量"],t.topBarOptions.series.push({name:"数量",type:"bar",itemStyle:{normal:{color:a.COLORS[Math.floor(3*Math.random())]}},barMaxWidth:80,data:[]}),_.map(e,function(e,i){a.topBarOptions.xAxis.data.push(e.name),t.topBarOptions.series[0].data.push({rawdata:e,value:e.count})}),t.topBarChart.setOption(a.topBarOptions),t.topBarChart.resize())})},getScalePieData:function(e){var t={districtCode:e||this.DISCODE,entityName:"PeaceDisputeSolve",fieldName:"caseScale"},i=this;this.leftPieOptions=_.cloneDeep(r),s["a"].requestByFieldName(t,function(e){i.leftPieOptions.legend.data=_.keys(_.groupBy(e,"name")),i.leftPieOptions.title.text="事件规模",i.leftPieOptions.series[0].name="矛盾纠纷排查化解",_.map(e,function(e){i.leftPieOptions.series[0].data.push({name:e.name,value:e.count})}),i.leftPieOptions.series[0].radius="45%",i.leftPieOptions.series[0].center=["70%","60%"],i.leftPieChart.setOption(i.leftPieOptions),i.leftPieChart.resize()})},getTypePieData:function(e){var t={districtCode:e||this.DISCODE,entityName:"PeaceDisputeSolve",fieldName:"caseType"},i=this;this.middlePieOptions=_.cloneDeep(r),s["a"].requestByFieldName(t,function(e){i.middlePieOptions.legend.data=_.keys(_.groupBy(e,"name")),i.middlePieOptions.title.text="事件类别",i.middlePieOptions.series[0].name="矛盾纠纷排查化解",e=e.filter(function(e){return 0!=e.count}),_.map(e,function(e){i.middlePieOptions.series[0].data.push({name:e.name,value:e.count})}),i.middlePieOptions.series[0].radius="45%",i.middlePieOptions.series[0].center=["70%","60%"],i.middlePieChart.setOption(i.middlePieOptions),i.middlePieChart.resize()})},getWayPieData:function(e){var t={districtCode:e||this.DISCODE,entityName:"PeaceDisputeSolve",fieldName:"dissolveWay"},i=this;this.rightPieOptions=_.cloneDeep(r),s["a"].requestByFieldName(t,function(e){i.rightPieOptions.legend.data=_.keys(_.groupBy(e,"name")),i.rightPieOptions.title.text="化解方式",i.rightPieOptions.series[0].name="矛盾纠纷排查化解",_.map(e,function(e){i.rightPieOptions.series[0].data.push({name:e.name,value:e.count})}),i.rightPieOptions.series[0].radius="45%",i.rightPieOptions.series[0].center=["70%","60%"],i.rightPieChart.setOption(i.rightPieOptions),i.rightPieChart.resize()})},handleUpLevel:function(){var e="";switch(this.byCode.length){case 9:e=this.byCode.slice(0,4);break;case 12:e=this.byCode.slice(0,6);break;case 14:e=this.byCode.slice(0,9);break;default:break}this.getCaseData(e),this.getScalePieData(e),this.getTypePieData(e),this.getWayPieData(e)}}},d=c,l=(i("8f7a"),i("2877")),u=Object(l["a"])(d,a,n,!1,null,null,null);u.options.__file="contradiction-resolve.vue";t["default"]=u.exports},"8f7a":function(e,t,i){"use strict";var a=i("cf8d"),n=i.n(a);n.a},ba4a:function(e,t,i){"use strict";i("7f7f");var a=i("9bd2"),n={requestGridCode:function(e){Object(a["a"])({url:"/grid/rstu/find/all/code",method:"get"}).then(function(t){t.region=_.sortBy(t.region,"code");var i=constants.REGION.CODE,a={code:i,label:constants.REGION.NAME,children:[]},n={};switch(i&&i.length){case 4:n=_.map(t.region,function(e){return{code:e.code,label:e.name,children:[]}}),_.map(n,function(e){e.children=_.map(_.filter(t.street,function(t){return t.code.indexOf(e.code)>=0}),function(e){return{code:e.code,label:e.name,children:[]}})}),_.map(n,function(e){_.map(e.children,function(e){e.children=_.map(_.filter(t.community,function(t){return t.code.indexOf(e.code)>=0}),function(e){return{code:e.code,label:e.name,children:[]}})})}),_.map(n,function(e){_.map(e.children,function(e){_.map(e.children,function(e){e.children=_.map(_.filter(t.unit,function(t){return t.code.indexOf(e.code)>=0}),function(e){return{code:e.code,label:e.name}})})})});break;case 6:n=_.map(_.filter(t.street,function(e){return e.code.indexOf(i)>=0}),function(e){return{code:e.code,label:e.name,children:[]}}),_.map(n,function(e){e.children=_.map(_.filter(t.community,function(t){return t.code.indexOf(e.code)>=0}),function(e){return{code:e.code,label:e.name,children:[]}})}),_.map(n,function(e){_.map(e.children,function(e){e.children=_.map(_.filter(t.unit,function(t){return t.code.indexOf(e.code)>=0}),function(e){return{code:e.code,label:e.name}})})});break;case 9:n=_.map(_.filter(t.community,function(e){return e.code.indexOf(i)>=0}),function(e){return{code:e.code,label:e.name,children:[]}}),_.map(n,function(e){e.children=_.map(_.filter(t.unit,function(t){return t.code.indexOf(e.code)>=0}),function(e){return{code:e.code,label:e.name}})});break;case 12:n=_.map(_.filter(t.unit,function(e){return e.code.indexOf(i)>=0}),function(e){return{code:e.code,label:e.name}});break;default:break}a.children=n,e(a)})},requestDicCatalog:function(e){Object(a["a"])({url:"/buss/info/dictionary/catalog/findAll",method:"get"}).then(function(t){e(t)})},requestDicType:function(e,t){Object(a["a"])({url:"/buss/info/dictionary/findDicByCatalogId?catalogId="+e,method:"get"}).then(function(e){t(e)})},requestByEntityNames:function(e,t){Object(a["a"])({url:"/compre/statis/common/district?districtCode="+e.districtCode+"&entityNames="+e.entityNames,method:"get"}).then(function(e){t(e)})},requestByFieldName:function(e,t){Object(a["a"])({url:"/compre/statis/common/field?districtCode="+e.districtCode+"&entityName="+e.entityName+"&fieldName="+e.fieldName,method:"get"}).then(function(e){t(e)})},requestByEntityAndFieldSum:function(e,t){Object(a["a"])({url:"/compre/statis/common/district/field/sum?districtCode="+e.districtCode+"&entityName="+e.entityName+"&fieldName="+e.fieldName,method:"get"}).then(function(e){t(e)})},requestFocusPeople:function(e,t){Object(a["a"])({url:"/compre/hp/people/find/compreInfo?id="+e,method:"get"}).then(function(e){t(e)})},requestFocus:function(e,t){Object(a["a"])({url:"/compre/"+e.entity+"/find?id="+e.focusId,method:"get"}).then(function(e){t(e)})}};t["a"]=n},cf8d:function(e,t,i){}}]);
//# sourceMappingURL=chunk-db81.69ce9a20.js.map