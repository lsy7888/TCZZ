(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ebca"],{"0ddc":function(e,t,o){},"1df9":function(e,t,o){"use strict";var i=o("0ddc"),n=o.n(i);n.a},"3a34":function(e,t,o){"use strict";o("7f7f");var i=o("c93e"),n=o("9bd2"),a=o("ba4a"),c=Object(i["a"])({},a["a"],{requestHouse:function(e){Object(n["a"])({url:"/compre/hp/house/findPage?page=1&pageSize=1000",method:"get"}).then(function(t){e(t)})},requestSavePeopleInfo:function(e,t){Object(n["a"])({url:"/compre/hp/people/save",method:"post",data:e}).then(function(e){t(e)})},requestBasePeople:function(e,t){Object(n["a"])({url:"/compre/hp/people/find?id="+e,method:"get"}).then(function(e){t(e)})},requestUpdatePeopleInfo:function(e,t){Object(n["a"])({url:"/compre/hp/people/update",method:"post",data:e}).then(function(e){t(e)})},requestPageCampusSecurity:function(e,t){Object(n["a"])({url:"/compre/peace/school/info/findPage?name="+e.name+"&districtCode="+e.districtCode+"&page="+e.page+"&pageSize="+e.pageSize,method:"get"}).then(function(e){t(e)})},requestCampusSecurityByCode:function(e,t){Object(n["a"])({url:"/compre/peace/school/info/findPage?&districtCode="+e,method:"get"}).then(function(e){t(e)})},requestAllCampusSecurity:function(e){Object(n["a"])({url:"/compre/peace/school/info/findAll",method:"get"}).then(function(t){e(t)})},requestSingleCampusSecurity:function(e){Object(n["a"])({url:"/compre/peace/school/info/find",method:"get"}).then(function(t){e(t)})},requestSaveCampusSecurity:function(e,t){Object(n["a"])({url:"/compre/peace/school/info/save",method:"post",data:e}).then(function(e){t(e)})},requestUpdateCampusSecurity:function(e,t){Object(n["a"])({url:"/compre/peace/school/info/update",method:"post",data:e}).then(function(e){t(e)})},requestDeleteCampusSecurity:function(e,t){Object(n["a"])({url:"/compre/peace/school/info/delete?id="+e,method:"post"}).then(function(e){t(e)})},requestPageXxzbiPeo:function(e,t){Object(n["a"])({url:"/compre/peace/school/rim/findPage?schoolId="+e.schoolId+"&districtCode="+e.districtCode+"&name="+e.name+"&page="+e.page+"&pageSize="+e.pageSize,method:"get"}).then(function(e){t(e)})},requestPageXxzbiPeoByCode:function(e,t){Object(n["a"])({url:"/compre/peace/school/rim/findPage?&districtCode="+e,method:"get"}).then(function(e){t(e)})},requestSaveXxzbiPeo:function(e,t){Object(n["a"])({url:"/compre/peace/school/rim/save",method:"post",data:e}).then(function(e){t(e)})},requestUpdateXxzbiPeo:function(e,t){Object(n["a"])({url:"/compre/peace/school/rim/update",method:"post",data:e}).then(function(e){t(e)})},requestDeleteXxzbiPeo:function(e,t){Object(n["a"])({url:"/compre/peace/school/rim/delete?id="+e,method:"post"}).then(function(e){t(e)})},requestPagePreferstCase:function(e,t){Object(n["a"])({url:"/compre/peace/referTeach/findPage?name="+e.name+"&districtCode="+e.districtCode+"&page="+e.page+"&pageSize="+e.pageSize+"&schoolId="+e.schoolId,method:"get"}).then(function(e){t(e)})},requestAllPreferstCase:function(e,t){Object(n["a"])({url:"/compre/peace/referTeach/findAll"}).then(function(e){t(e)})},requestSavePreferstCase:function(e,t){Object(n["a"])({url:"/compre/peace/referTeach/save",method:"post",data:e}).then(function(e){t(e)})},requestUpdatePreferstCase:function(e,t){Object(n["a"])({url:"/compre/peace/referTeach/update",method:"post",data:e}).then(function(e){t(e)})},requestDeletePreferstCase:function(e,t){Object(n["a"])({url:"/compre/peace/referTeach/delete?id="+e,method:"post"}).then(function(e){t(e)})}});t["a"]=c},4961:function(e,t,o){"use strict";o.r(t);var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"table-list-page"},[o("techo-list",{ref:"list",attrs:{title:e.title,header:e.header,data:e.data,isShowCode:e.isShowCode,recordCount:e.recordCount,disCodeOption:e.disCodeOption},on:{onAdd:e.handleAdd,onPageChange:e.handlePageChange,onDelete:e.handleDelete,onView:e.handleView,onEdit:e.handleEdit,onTreeNode:e.handleTreeNode}},[o("div",{attrs:{slot:"header"},slot:"header"},[o("el-row",{staticClass:"techo-list__header-row",attrs:{type:"flex",justify:"space-around"}},[o("el-col",{attrs:{span:10}},[o("span",{staticClass:"techo-list__header-col-txt-3"},[e._v("学校：")]),o("div",{staticClass:"techo-list__header-col-left-3"},[o("el-select",{attrs:{placeholder:"请选择学校",size:"small",filterable:"","change-on-select":"",clearable:""},model:{value:e.queryForm.schoolId,callback:function(t){e.$set(e.queryForm,"schoolId",t)},expression:"queryForm.schoolId"}},e._l(e.schListOption,function(e,t){return o("el-option",{key:t,attrs:{label:e.name,value:e.id}})}))],1)]),o("el-col",{attrs:{span:8}},[o("span",{staticClass:"techo-list__header-col-txt-4"},[e._v("姓名：")]),o("div",{staticClass:"techo-list__header-col-left-4"},[o("el-input",{staticClass:"techo-list__header-select-full",attrs:{placeholder:"请输入姓名",maxlength:10,size:"small",clearable:""},model:{value:e.queryForm.name,callback:function(t){e.$set(e.queryForm,"name",t)},expression:"queryForm.name"}})],1)]),o("el-col",{staticClass:"techo-list__header-col-button",attrs:{span:5}},[o("el-button",{staticClass:"techo-list__header-button-reset",attrs:{size:"small"},on:{click:e.handleClear}},[e._v("清空")]),o("el-button",{staticClass:"techo-list__header-button-query",attrs:{size:"small"},on:{click:e.handleQuery}},[e._v("查询")])],1)],1)],1)]),e.dlgVisible?o("techo-details",{ref:"details",attrs:{configKey:e.configKey}}):e._e(),o("vAddDialog",{ref:"vAddDialog"})],1)},n=[],a=o("c93e"),c=o("3a34"),s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-dialog",{staticClass:"add-dialog",attrs:{title:e.title,visible:e.dialogVisible,fullscreen:""},on:{"update:visible":function(t){e.dialogVisible=t},close:e.resetForm}},[o("el-tabs",{model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[o("el-tab-pane",{attrs:{label:"基本信息",name:"first"}},[o("techo-people",{ref:"vBaseForm",attrs:{isAdd:e.isAdd,dic:e.dic,houseOptions:e.houseOptions},on:{onBasePeople:e.handleQueryBasePeople}})],1),o("el-tab-pane",{attrs:{label:"附加信息",name:"second"}},[o("el-form",{ref:"dialogForm",attrs:{model:e.dialogForm,rules:e.teamRules,"label-width":"120px"}},[o("el-row",{attrs:{gutter:15}},[o("el-col",{attrs:{span:6}},[o("el-form-item",{attrs:{label:"学校",prop:"schoolId"}},[o("el-select",{attrs:{placeholder:"请选择学校",clearable:""},on:{change:e.handleChangeCode},model:{value:e.dialogForm.schoolId,callback:function(t){e.$set(e.dialogForm,"schoolId",t)},expression:"dialogForm.schoolId"}},e._l(e.schListOption,function(e,t){return o("el-option",{key:t,attrs:{label:e.name,value:e.id}})}))],1)],1),o("el-col",{attrs:{span:6}},[o("el-form-item",{attrs:{label:"危害程度",prop:"injuryLevel"}},[o("el-select",{attrs:{placeholder:"请选择危害程度",clearable:""},model:{value:e.dialogForm.injuryLevel,callback:function(t){e.$set(e.dialogForm,"injuryLevel",t)},expression:"dialogForm.injuryLevel"}},e._l(e.dic["危害程度"],function(e,t){return o("el-option",{key:t,attrs:{label:e.name,value:e.code}})}))],1)],1),o("el-col",{attrs:{span:6}},[o("el-form-item",{attrs:{label:"是否重点关注人员",prop:"isFocus","label-width":"150px"}},[o("el-radio-group",{model:{value:e.dialogForm.isFocus,callback:function(t){e.$set(e.dialogForm,"isFocus",t)},expression:"dialogForm.isFocus"}},[o("el-radio",{attrs:{label:1}},[e._v("是")]),o("el-radio",{attrs:{label:0}},[e._v("否")])],1)],1)],1)],1)],1)],1)],1),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},["first"==e.activeName?o("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){e.activeName="second"}}},[e._v("下一步")]):e._e(),"second"==e.activeName?o("el-button",{attrs:{type:"warning",size:"small"},on:{click:e.resetForm}},[e._v("取消")]):e._e(),"second"==e.activeName?o("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){e.activeName="first"}}},[e._v("上一步")]):e._e(),"second"==e.activeName?o("el-button",{attrs:{type:"success",size:"small"},on:{click:e.submitForm}},[e._v("保存")]):e._e()],1)],1)},r=[],l=(o("7514"),o("7f7f"),o("ac6a"),{components:{},data:function(){return{dialogVisible:!1,isAdd:!0,title:"",schListOption:[],activeName:"first",dic:{"危害程度":[],"性别":[],"民族":[],"婚姻状况":[],"政治面貌":[],"学历":[],"宗教信仰":[],"职业类别":[],"户籍地户主":[],"居住地户主":[],"行政区划":[]},houseOptions:[],dialogForm:{peopleId:"",schoolId:"",injuryLevel:"",isFocus:0,districtCode:""},teamRules:{schoolId:[{required:!0,message:"请选择学校ID",trigger:"change"}],injuryLevel:[{required:!0,message:"选择危险程度",trigger:"change"}],isFocus:[{required:!0,message:"请选择是否关注",trigger:"change"}]}}},created:function(){var e=this,t=this;c["a"].requestDicCatalog(function(e){var o=_.keys(t.dic);_.map(e,function(e){-1!=_.indexOf(o,e.name)&&c["a"].requestDicType(e.id,function(o){"职业类别"==e.name?t.dic[e.name]=t.handleTreeData(o):t.dic[e.name]=o})})}),c["a"].requestHouse(function(t){e.houseOptions=t.list})},watch:{activeName:function(e){var t=this;"second"==e&&this.$refs["vBaseForm"].$refs["baseForm"].validate(function(e){e||t.$nextTick(function(){t.activeName="first"})})}},methods:{handleChangeCode:function(e){if(e){var t=this.schListOption.find(function(t){return t.id==e}).districtCode;this.dialogForm.districtCode=t}},handleTreeData:function(e){var t=_.map(_.filter(e,function(e){return"0000"===e.code.slice(1,5)}),function(e){return{code:e.code,label:e.name,children:[]}});return _.map(t,function(t){t.children=_.map(_.filter(e,function(e){return e.code.slice(0,1)===t.code.slice(0,1)&&"0000"!==e.code.slice(1,5)&&"00"===e.code.slice(3,5)}),function(e){return{code:e.code,label:e.name,children:[]}})}),_.map(t,function(t){_.map(t.children,function(t){t.children=_.map(_.filter(e,function(e){return e.code.slice(0,3)===t.code.slice(0,3)&&"00"!==e.code.slice(3,5)}),function(e){return{code:e.code,label:e.name}})})}),t},handleQueryBasePeople:function(e,t){c["a"].requestBasePeopleList(e,function(e){t&&t(e.list)})},submitForm:function(){var e=this,t=_.cloneDeep(this.$refs["vBaseForm"].baseForm);t.birthDate=t.birthDate&&util.time.formatDate(t.birthDate,"YYYY-MM-DD"),t.occupationType=_.last(t.occupationType),t.districtCode=_.last(t.districtCode),t.dicMap&&delete t.dicMap,this.$refs["dialogForm"].validate(function(o){if(!o)return console.log("error submit!!"),!1;t.id?c["a"].requestUpdatePeopleInfo(t,function(t){e.comminForm(t)}):c["a"].requestSavePeopleInfo(t,function(t){e.comminForm(t)})})},comminForm:function(e){var t=this,o=_.cloneDeep(this.dialogForm);if(o.dicMap&&delete o.dicMap,1==this.isAdd)o.peopleId=e.id,c["a"].requestSaveXxzbiPeo(o,function(e){console.log(o),t.$popup.showNotification({type:"success",message:"信息添加成功！"}),t.resetForm(),t.$parent.handleQuery()});else{var i=_.pick(o,["id","injuryLevel","isFocus","peopleId","schoolId"]);c["a"].requestUpdateXxzbiPeo(i,function(e){t.$popup.showNotification({type:"success",message:"信息修改成功！"}),t.resetForm(),t.$parent.handleQuery()})}},resetForm:function(){this.$refs["vBaseForm"].$refs["baseForm"].resetFields(),this.$refs["dialogForm"].resetFields(),this.$refs["vBaseForm"].baseForm={},this.$data.dialogVisible=!1,this.activeName="first",this.isAdd=!0,this.dialogForm={isfocus:0,districtCode:""}}}}),d=l,u=(o("1df9"),o("2877")),f=Object(u["a"])(d,s,r,!1,null,null,null);f.options.__file="xxzbi-peo-add.vue";var h=f.exports,m={components:{vAddDialog:h},data:function(){return{title:"学校周边重点人",schListOption:[],header:{"姓名":"name","学校":"dicMap.schoolName","危害程度":"dicMap.injuryLevel","是否关注":"dicMap.isFocus"},data:[],recordCount:0,queryForm:{name:"",districtCode:"",schoolId:""},isShowCode:["6102"],disCodeOption:[],dlgVisible:!1,configKey:"schoolRimPeo"}},mounted:function(){var e=this;c["a"].requestGridCode(function(t){e.disCodeOption=[t],e.isShowCode=[t.code],e.queryForm.districtCode=t.code}),c["a"].requestCampusSecurityByCode(this.queryForm.districtCode,function(t){e.schListOption=t.list})},watch:{queryForm:{handler:function(e,t){this.handleQuery()},deep:!0},"queryForm.districtCode":{handler:function(e){var t=this;c["a"].requestCampusSecurityByCode(e,function(e){t.schListOption=e.list})}}},methods:{handleTreeNode:function(e){this.queryForm.districtCode=e.code},handleAdd:function(){this.$refs["vAddDialog"].dialogVisible=!0,this.$refs["vAddDialog"].isAdd=!0,this.$refs["vAddDialog"].title="添加"+this.title,this.$refs["vAddDialog"].dialogForm.districtCode=this.queryForm.districtCode,this.$refs["vAddDialog"].schListOption=this.schListOption},handleDelete:function(e){var t=this;this.$popup.showLoading("正在删除中，请稍候..."),new Promise(function(t,o){var i=0;_.map(e,function(o,n){c["a"].requestDeleteXxzbiPeo(o.id,function(o){i==e.length-1&&t()})})}).then(function(){t.$popup.showNotification({type:"success",message:"信息删除成功！"}),t.handleQuery(),t.$popup.closeLoading()}).catch(function(){t.$popup.showNotification({type:"warning",message:"信息删除失败！"}),t.$popup.closeLoading()})},handlePageChange:function(){this.data=[],this.handleQuery()},handleView:function(e,t){this.dlgVisible=!0,this.$nextTick(function(){this.$refs["details"].data=t,this.$refs["details"].visible=!0})},handleEdit:function(e,t){var o=this;this.$refs["vAddDialog"].dialogVisible=!0,this.$refs["vAddDialog"].disabled=!0,this.$refs["vAddDialog"].isAdd=!1,this.$refs["vAddDialog"].title="修改"+this.title,c["a"].requestBasePeople(t.peopleId,function(e){o.$refs["vAddDialog"].$refs["vBaseForm"].baseForm=e}),this.$refs["vAddDialog"].dialogForm=_.cloneDeep(t)},handleClear:function(){this.queryForm={districtCode:constants.REGION.CODE,schoolId:""}},handleQuery:function(){var e=this,t=this.$refs["list"].getPageInfo();t=Object(a["a"])({},t,_.cloneDeep(this.queryForm)),c["a"].requestPageXxzbiPeo(t,function(o){0!=o.totalCount&&0==o.list.length?(t.page=o.totalPage,c["a"].requestPageXxzbiPeo(t,function(t){e.recordCount=t.totalCount,_.map(t.list,function(e){e.dicMap&&(e.dicMap.schoolName=e.schoolName,e.dicMap.isFocus=1==e.isFocus?"是":"否")}),e.data=t.list})):(e.recordCount=o.totalCount,_.map(o.list,function(e){e.dicMap&&(e.dicMap.schoolName=e.schoolName,e.dicMap.isFocus=1==e.isFocus?"是":"否")}),e.data=o.list)})}}},p=m,g=Object(u["a"])(p,i,n,!1,null,null,null);g.options.__file="xxzbi-peo-list.vue";t["default"]=g.exports},ba4a:function(e,t,o){"use strict";o("7f7f");var i=o("9bd2"),n={requestGridCode:function(e){Object(i["a"])({url:"/grid/rstu/find/all/code",method:"get"}).then(function(t){t.region=_.sortBy(t.region,"code");var o=constants.REGION.CODE,i={code:o,label:constants.REGION.NAME,children:[]},n={};switch(o&&o.length){case 4:n=_.map(t.region,function(e){return{code:e.code,label:e.name,children:[]}}),_.map(n,function(e){e.children=_.map(_.filter(t.street,function(t){return t.code.indexOf(e.code)>=0}),function(e){return{code:e.code,label:e.name,children:[]}})}),_.map(n,function(e){_.map(e.children,function(e){e.children=_.map(_.filter(t.community,function(t){return t.code.indexOf(e.code)>=0}),function(e){return{code:e.code,label:e.name,children:[]}})})}),_.map(n,function(e){_.map(e.children,function(e){_.map(e.children,function(e){e.children=_.map(_.filter(t.unit,function(t){return t.code.indexOf(e.code)>=0}),function(e){return{code:e.code,label:e.name}})})})});break;case 6:n=_.map(_.filter(t.street,function(e){return e.code.indexOf(o)>=0}),function(e){return{code:e.code,label:e.name,children:[]}}),_.map(n,function(e){e.children=_.map(_.filter(t.community,function(t){return t.code.indexOf(e.code)>=0}),function(e){return{code:e.code,label:e.name,children:[]}})}),_.map(n,function(e){_.map(e.children,function(e){e.children=_.map(_.filter(t.unit,function(t){return t.code.indexOf(e.code)>=0}),function(e){return{code:e.code,label:e.name}})})});break;case 9:n=_.map(_.filter(t.community,function(e){return e.code.indexOf(o)>=0}),function(e){return{code:e.code,label:e.name,children:[]}}),_.map(n,function(e){e.children=_.map(_.filter(t.unit,function(t){return t.code.indexOf(e.code)>=0}),function(e){return{code:e.code,label:e.name}})});break;case 12:n=_.map(_.filter(t.unit,function(e){return e.code.indexOf(o)>=0}),function(e){return{code:e.code,label:e.name}});break;default:break}i.children=n,e(i)})},requestDicCatalog:function(e){Object(i["a"])({url:"/buss/info/dictionary/catalog/findAll",method:"get"}).then(function(t){e(t)})},requestDicType:function(e,t){Object(i["a"])({url:"/buss/info/dictionary/findDicByCatalogId?catalogId="+e,method:"get"}).then(function(e){t(e)})},requestByEntityNames:function(e,t){Object(i["a"])({url:"/compre/statis/common/district?districtCode="+e.districtCode+"&entityNames="+e.entityNames,method:"get"}).then(function(e){t(e)})},requestByFieldName:function(e,t){Object(i["a"])({url:"/compre/statis/common/field?districtCode="+e.districtCode+"&entityName="+e.entityName+"&fieldName="+e.fieldName,method:"get"}).then(function(e){t(e)})},requestByEntityAndFieldSum:function(e,t){Object(i["a"])({url:"/compre/statis/common/district/field/sum?districtCode="+e.districtCode+"&entityName="+e.entityName+"&fieldName="+e.fieldName,method:"get"}).then(function(e){t(e)})},requestFocusPeople:function(e,t){Object(i["a"])({url:"/compre/hp/people/find/compreInfo?id="+e,method:"get"}).then(function(e){t(e)})},requestFocus:function(e,t){Object(i["a"])({url:"/compre/"+e.entity+"/find?id="+e.focusId,method:"get"}).then(function(e){t(e)})}};t["a"]=n}}]);
//# sourceMappingURL=chunk-ebca.4937b321.js.map