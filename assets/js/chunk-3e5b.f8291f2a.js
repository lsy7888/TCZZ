(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3e5b"],{"2e74":function(e,t,i){"use strict";i("7f7f");var o=i("c93e"),n=i("9bd2"),a=i("ba4a"),r=Object(o["a"])({},a["a"],{requestSavePeopleInfo:function(e,t){Object(n["a"])({url:"/compre/hp/people/save",method:"post",data:e}).then(function(e){t(e)})},requestUpdatePeopleInfo:function(e,t){Object(n["a"])({url:"/compre/hp/people/update",method:"post",data:e}).then(function(e){t(e)})},requestBasePeople:function(e,t){Object(n["a"])({url:"/compre/hp/people/find?id="+e,method:"get"}).then(function(e){t(e)})},requestPageHousePeople:function(e,t){Object(n["a"])({url:"/compre/hp/people/house/findPage?name="+e.name+"&houseId="+e.houseId+"&districtCode="+e.districtCode+"&page="+e.page+"&pageSize="+e.pageSize,method:"get"}).then(function(e){t(e)})},requestSaveHousePeople:function(e,t){Object(n["a"])({url:"/compre/hp/people/house/save",method:"post",data:e}).then(function(e){t(e)})},requestUpdateHousePeople:function(e,t){Object(n["a"])({url:"/compre/hp/people/house/update",method:"post",data:e}).then(function(e){t(e)})},requestDeleteHousePeople:function(e,t){Object(n["a"])({url:"/compre/hp/people/house/delete?id="+e,method:"post"}).then(function(e){t(e)})},requestPageFlowPeople:function(e,t){Object(n["a"])({url:"/compre/hp/people/flow/findPage?name="+e.name+"&districtCode="+e.districtCode+"&page="+e.page+"&pageSize="+e.pageSize,method:"get"}).then(function(e){t(e)})},requestSaveFlowPeople:function(e,t){Object(n["a"])({url:"/compre/hp/people/flow/save",method:"post",data:e}).then(function(e){t(e)})},requestUpdateFlowPeople:function(e,t){Object(n["a"])({url:"/compre/hp/people/flow/update",method:"post",data:e}).then(function(e){t(e)})},requestDeleteFlowPeople:function(e,t){Object(n["a"])({url:"/compre/hp/people/flow/delete?id="+e,method:"post"}).then(function(e){t(e)})},requestPageRearPeople:function(e,t){Object(n["a"])({url:"/compre/hp/people/rear/findPage?name="+e.name+"&districtCode="+e.districtCode+"&page="+e.page+"&pageSize="+e.pageSize,method:"get"}).then(function(e){t(e)})},requestSaveRearPeople:function(e,t){Object(n["a"])({url:"/compre/hp/people/rear/save",method:"post",data:e}).then(function(e){t(e)})},requestUpdateRearPeople:function(e,t){Object(n["a"])({url:"/compre/hp/people/rear/update",method:"post",data:e}).then(function(e){t(e)})},requestDeleteRearPeople:function(e,t){Object(n["a"])({url:"/compre/hp/people/rear/delete?id="+e,method:"post"}).then(function(e){t(e)})},requestPageOverseasPeople:function(e,t){var i="/compre/hp/people/overseas/findPage?districtCode="+e.districtCode+"&page="+e.page+"&pageSize="+e.pageSize;""!=e.chinessName&&(i+="&chinessName="+e.chinessName),Object(n["a"])({url:i,method:"get"}).then(function(e){t(e)})},requestSaveOverseasPeople:function(e,t){Object(n["a"])({url:"/compre/hp/people/overseas/save",method:"post",data:e}).then(function(e){t(e)})},requestUpdateOverseasPeople:function(e,t){Object(n["a"])({url:"/compre/hp/people/overseas/update",method:"post",data:e}).then(function(e){t(e)})},requestDeleteOverseasPeople:function(e,t){Object(n["a"])({url:"/compre/hp/people/overseas/delete?id="+e,method:"post"}).then(function(e){t(e)})},requestPageRentalHouse:function(e,t){Object(n["a"])({url:"/compre/hp/rentalhouse/findPage?landlordName="+e.name+"&districtCode="+e.districtCode+"&page="+e.page+"&pageSize="+e.pageSize,method:"get"}).then(function(e){t(e)})},requestSaveRentalHouse:function(e,t){Object(n["a"])({url:"/compre/hp/rentalhouse/save",method:"post",data:e}).then(function(e){t(e)})},requestUpdateRentalHouse:function(e,t){Object(n["a"])({url:"/compre/hp/rentalhouse/update",method:"post",data:e}).then(function(e){t(e)})},requestDeleteRentalHouse:function(e,t){Object(n["a"])({url:"/compre/hp/rentalhouse/delete?id="+e,method:"post"}).then(function(e){t(e)})},requestUpdateHouse:function(e,t){Object(n["a"])({url:"/compre/hp/house/update",method:"post",data:e}).then(function(e){t(e)})}});t["a"]=r},"550c":function(e,t,i){"use strict";t["a"]={tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},legend:{data:[]},grid:{top:"20%",bottom:"3%",left:"3%",right:"4%",containLabel:!0},xAxis:{type:"category",data:[]},yAxis:{type:"value",name:""},series:[]}},"5e79":function(e,t,i){"use strict";var o=i("df9f"),n=i.n(o);n.a},9555:function(e,t,i){"use strict";t["a"]={title:{x:"center",text:"",textStyle:{fontSize:16}},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},color:["#3965c3","#ffa639","#f75a51","#FF6633","#FF9966","#FF6699","#FFFF66","#FF99FF","#FF3333","#CCCCFF","#CCCC33","#CC6666","#CC33CC","#CC00FF","#99CC66","#99CC00","#99FF33","#990066"],legend:{orient:"vertical",left:"left",data:[]},series:[{name:"",type:"pie",radius:"55%",center:["50%","50%"],label:{normal:{show:!0},emphasis:{show:!0}},lableLine:{normal:{show:!0},emphasis:{show:!0}},data:[]}]}},ba4a:function(e,t,i){"use strict";i("7f7f");var o=i("9bd2"),n={requestGridCode:function(e){Object(o["a"])({url:"/grid/rstu/find/all/code",method:"get"}).then(function(t){t.region=_.sortBy(t.region,"code");var i=constants.REGION.CODE,o={code:i,label:constants.REGION.NAME,children:[]},n={};switch(i&&i.length){case 4:n=_.map(t.region,function(e){return{code:e.code,label:e.name,children:[]}}),_.map(n,function(e){e.children=_.map(_.filter(t.street,function(t){return t.code.indexOf(e.code)>=0}),function(e){return{code:e.code,label:e.name,children:[]}})}),_.map(n,function(e){_.map(e.children,function(e){e.children=_.map(_.filter(t.community,function(t){return t.code.indexOf(e.code)>=0}),function(e){return{code:e.code,label:e.name,children:[]}})})}),_.map(n,function(e){_.map(e.children,function(e){_.map(e.children,function(e){e.children=_.map(_.filter(t.unit,function(t){return t.code.indexOf(e.code)>=0}),function(e){return{code:e.code,label:e.name}})})})});break;case 6:n=_.map(_.filter(t.street,function(e){return e.code.indexOf(i)>=0}),function(e){return{code:e.code,label:e.name,children:[]}}),_.map(n,function(e){e.children=_.map(_.filter(t.community,function(t){return t.code.indexOf(e.code)>=0}),function(e){return{code:e.code,label:e.name,children:[]}})}),_.map(n,function(e){_.map(e.children,function(e){e.children=_.map(_.filter(t.unit,function(t){return t.code.indexOf(e.code)>=0}),function(e){return{code:e.code,label:e.name}})})});break;case 9:n=_.map(_.filter(t.community,function(e){return e.code.indexOf(i)>=0}),function(e){return{code:e.code,label:e.name,children:[]}}),_.map(n,function(e){e.children=_.map(_.filter(t.unit,function(t){return t.code.indexOf(e.code)>=0}),function(e){return{code:e.code,label:e.name}})});break;case 12:n=_.map(_.filter(t.unit,function(e){return e.code.indexOf(i)>=0}),function(e){return{code:e.code,label:e.name}});break;default:break}o.children=n,e(o)})},requestDicCatalog:function(e){Object(o["a"])({url:"/buss/info/dictionary/catalog/findAll",method:"get"}).then(function(t){e(t)})},requestDicType:function(e,t){Object(o["a"])({url:"/buss/info/dictionary/findDicByCatalogId?catalogId="+e,method:"get"}).then(function(e){t(e)})},requestByEntityNames:function(e,t){Object(o["a"])({url:"/compre/statis/common/district?districtCode="+e.districtCode+"&entityNames="+e.entityNames,method:"get"}).then(function(e){t(e)})},requestByFieldName:function(e,t){Object(o["a"])({url:"/compre/statis/common/field?districtCode="+e.districtCode+"&entityName="+e.entityName+"&fieldName="+e.fieldName,method:"get"}).then(function(e){t(e)})},requestByEntityAndFieldSum:function(e,t){Object(o["a"])({url:"/compre/statis/common/district/field/sum?districtCode="+e.districtCode+"&entityName="+e.entityName+"&fieldName="+e.fieldName,method:"get"}).then(function(e){t(e)})},requestFocusPeople:function(e,t){Object(o["a"])({url:"/compre/hp/people/find/compreInfo?id="+e,method:"get"}).then(function(e){t(e)})},requestFocus:function(e,t){Object(o["a"])({url:"/compre/"+e.entity+"/find?id="+e.focusId,method:"get"}).then(function(e){t(e)})}};t["a"]=n},df9f:function(e,t,i){},ffd2:function(e,t,i){"use strict";i.r(t);var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"charts-page"},[i("div",{staticClass:"top-card"},[i("techo-card",{attrs:{resizeEvent:"topCard",maxCard:!0,upLevel:e.isShowLevelBtu},on:{onUpLevel:e.handleUpLevel}},[i("div",{attrs:{slot:"header"},slot:"header"},[e._v("境外人员")]),i("div",{staticStyle:{height:"100%"},attrs:{id:"TopBar"}})])],1),i("el-row",{staticClass:"bottom-card",attrs:{gutter:10}},[i("el-col",{attrs:{span:6}},[i("techo-card",{attrs:{resizeEvent:"FristCard",maxCard:!0}},[i("div",{attrs:{slot:"header"},slot:"header"},[e._v("来华目的")]),i("div",{staticStyle:{height:"100%"},attrs:{id:"FristPie"}})])],1),i("el-col",{attrs:{span:6}},[i("techo-card",{attrs:{resizeEvent:"SecondCard",maxCard:!0}},[i("div",{attrs:{slot:"header"},slot:"header"},[e._v("国籍地区")]),i("div",{staticStyle:{height:"100%"},attrs:{id:"SecondPie"}})])],1),i("el-col",{attrs:{span:6}},[i("techo-card",{attrs:{resizeEvent:"ThirdCard",maxCard:!0}},[i("div",{attrs:{slot:"header"},slot:"header"},[e._v("宗教信仰")]),i("div",{staticStyle:{height:"100%"},attrs:{id:"ThirdPie"}})])],1),i("el-col",{attrs:{span:6}},[i("techo-card",{attrs:{resizeEvent:"FourthCard",maxCard:!0}},[i("div",{attrs:{slot:"header"},slot:"header"},[e._v("职业类别")]),i("div",{staticStyle:{height:"100%"},attrs:{id:"FourthPie"}})])],1)],1)],1)},n=[],a=(i("ac6a"),i("7f7f"),i("550c")),r=i("9555"),s=i("2e74"),c={data:function(){return{DISCODE:"6102",topBarOptions:{},topBarChart:null,FristPieOptions:{},FristPieChart:null,SecondPieOptions:{},SecondPieChart:null,ThirdPieOptions:{},ThirdPieChart:null,FourthPieOptions:{},FourthPieChart:null,byCode:"",isShowLevelBtu:!0,COLORS:["#3965c3","#ffa639","#f75a51"]}},watch:{byCode:function(e){this.isShowLevelBtu=6!=e.length}},mounted:function(){var e=this,t=this;this.topBarChart=this.$echarts.init(this.$el.querySelector("#TopBar")),this.FristPieChart=this.$echarts.init(this.$el.querySelector("#FristPie")),this.SecondPieChart=this.$echarts.init(this.$el.querySelector("#SecondPie")),this.ThirdPieChart=this.$echarts.init(this.$el.querySelector("#ThirdPie")),this.FourthPieChart=this.$echarts.init(this.$el.querySelector("#FourthPie")),this.topBarChart.on("click",function(t){14!=e.byCode.length&&(e.getPeopleData(t.data.rawdata.code),e.getReasonPieData(t.data.rawdata.code),e.getNationPieData(t.data.rawdata.code),e.getReligionPieData(t.data.rawdata.code),e.getTypePieData(t.data.rawdata.code))}),this.$bus.$on("topCard",function(){t.topBarChart.resize()}),this.$bus.$on("FristCard",function(){t.FristPieChart.resize()}),this.$bus.$on("SecondCard",function(){t.SecondPieChart.resize()}),this.$bus.$on("ThirdCard",function(){t.ThirdPieChart.resize()})},created:function(){this.getPeopleData(),this.getReasonPieData(),this.getNationPieData(),this.getReligionPieData(),this.getTypePieData()},methods:{getPeopleData:function(e){var t=this,i={districtCode:e||this.DISCODE,entityNames:"OverseasPeople"},o=this;this.topBarOptions=_.cloneDeep(a["a"]),s["a"].requestByEntityNames(i,function(e){0!=e.length&&(t.byCode=e[0].code,t.topBarOptions.yAxis.name="人数",t.topBarOptions.legend.data=["人数"],t.topBarOptions.series.push({name:"人数",type:"bar",itemStyle:{normal:{color:o.COLORS[Math.floor(3*Math.random())]}},barMaxWidth:80,data:[]}),_.map(e,function(e,i){o.topBarOptions.xAxis.data.push(e.name),t.topBarOptions.series[0].data.push({rawdata:e,value:e.count})}),t.topBarChart.setOption(o.topBarOptions),t.topBarChart.resize())})},getReasonPieData:function(e){var t={districtCode:e||this.DISCODE,entityName:"OverseasPeople",fieldName:"comingToChina"},i=this;this.FristPieOptions=_.cloneDeep(r["a"]),s["a"].requestByFieldName(t,function(e){i.FristPieOptions.legend.data=_.keys(_.groupBy(e,"name")),i.FristPieOptions.title.text="来华目的",i.FristPieOptions.series[0].name="境外人员",e=e.filter(function(e){return 0!=e.count}),_.map(e,function(e){i.FristPieOptions.series[0].data.push({name:e.name,value:e.count})}),i.FristPieOptions.series[0].radius="45%",i.FristPieOptions.series[0].center=["70%","60%"],i.FristPieChart.setOption(i.FristPieOptions),i.FristPieChart.resize()})},getNationPieData:function(e){var t={districtCode:e||this.DISCODE,entityName:"OverseasPeople",fieldName:"nationality"},i=this;this.SecondPieOptions=_.cloneDeep(r["a"]),s["a"].requestByFieldName(t,function(e){i.SecondPieOptions.legend.data=_.keys(_.groupBy(e,"name")),i.SecondPieOptions.title.text="国籍地区",i.SecondPieOptions.series[0].name="境外人员",e=e.filter(function(e){return 0!=e.count}),_.map(e,function(e){i.SecondPieOptions.series[0].data.push({name:e.name,value:e.count})}),i.SecondPieOptions.series[0].radius="45%",i.SecondPieOptions.series[0].center=["70%","60%"],i.SecondPieChart.setOption(i.SecondPieOptions),i.SecondPieChart.resize()})},getReligionPieData:function(e){var t={districtCode:e||this.DISCODE,entityName:"OverseasPeople",fieldName:"religiousBelief"},i=this;this.ThirdPieOptions=_.cloneDeep(r["a"]),s["a"].requestByFieldName(t,function(e){i.ThirdPieOptions.legend.data=_.keys(_.groupBy(e,"name")),i.ThirdPieOptions.title.text="宗教信仰",i.ThirdPieOptions.series[0].name="境外人员",e=e.filter(function(e){return 0!=e.count}),_.map(e,function(e){i.ThirdPieOptions.series[0].data.push({name:e.name,value:e.count})}),i.ThirdPieOptions.series[0].radius="45%",i.ThirdPieOptions.series[0].center=["70%","60%"],i.ThirdPieChart.setOption(i.ThirdPieOptions),i.ThirdPieChart.resize()})},getTypePieData:function(e){var t={districtCode:e||this.DISCODE,entityName:"OverseasPeople",fieldName:"occupationType"},i=this;this.FourthPieOptions=_.cloneDeep(r["a"]),s["a"].requestByFieldName(t,function(e){i.FourthPieOptions.legend.data=_.keys(_.groupBy(e,"name")),i.FourthPieOptions.title.text="职业类别",i.FourthPieOptions.series[0].name="境外人员",e=e.filter(function(e){return 0!=e.count}),_.map(e,function(e){i.FourthPieOptions.series[0].data.push({name:e.name,value:e.count})}),i.FourthPieOptions.series[0].radius="45%",i.FourthPieOptions.series[0].center=["70%","60%"],i.FourthPieChart.setOption(i.FourthPieOptions),i.FourthPieChart.resize()})},handleUpLevel:function(){var e="";switch(this.byCode.length){case 9:e=this.byCode.slice(0,4);break;case 12:e=this.byCode.slice(0,6);break;case 14:e=this.byCode.slice(0,9);break;default:break}this.getPeopleData(e),this.getReasonPieData(e),this.getNationPieData(e),this.getReligionPieData(e),this.getTypePieData(e)}}},d=c,u=(i("5e79"),i("2877")),p=Object(u["a"])(d,o,n,!1,null,null,null);p.options.__file="overseas-people.vue";t["default"]=p.exports}}]);
//# sourceMappingURL=chunk-3e5b.f8291f2a.js.map