(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-93f9"],{"05d8":function(e,t,o){"use strict";var a=o("4b40"),i=o.n(a);i.a},"4b40":function(e,t,o){},9706:function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"table-list-page"},[o("techo-list",{ref:"list",attrs:{title:e.title,header:e.header,data:e.data,isShowCode:e.isShowCode,disCodeOption:e.disCodeOption,recordCount:e.recordCount},on:{onAdd:e.handleAdd,onPageChange:e.handlePageChange,onDelete:e.handleDelete,onView:e.handleView,onEdit:e.handleEdit,onTreeNode:e.handleTreeNode}},[o("div",{attrs:{slot:"header"},slot:"header"},[o("el-row",{staticClass:"techo-list__header-row",attrs:{type:"flex",justify:"space-around"}},[o("el-col",{attrs:{span:10}},[o("span",{staticClass:"techo-list__header-col-txt-4"},[e._v("案卷名称：")]),o("div",{staticClass:"techo-list__header-col-left-4"},[o("el-input",{staticClass:"techo-list__header-select-full",attrs:{placeholder:"请输入案卷名称",maxlength:10,size:"small",clearable:""},model:{value:e.queryForm.name,callback:function(t){e.$set(e.queryForm,"name",t)},expression:"queryForm.name"}})],1)]),o("el-col",{attrs:{span:9}}),o("el-col",{staticClass:"techo-list__header-col-button",attrs:{span:5}},[o("el-button",{staticClass:"techo-list__header-button-reset",attrs:{size:"small"},on:{click:e.handleClear}},[e._v("清空")]),o("el-button",{staticClass:"techo-list__header-button-query",attrs:{size:"small"},on:{click:e.handleQuery}},[e._v("查询")])],1)],1)],1)]),e.dlgVisible?o("techo-details",{ref:"details",attrs:{configKey:e.configKey,height:"60%"}}):e._e(),o("vAddDialog",{ref:"vAddDialog"})],1)},i=[],n=o("c6a4"),l=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-dialog",{staticClass:"add-dialog",attrs:{title:e.title,visible:e.dialogVisible,fullscreen:""},on:{"update:visible":function(t){e.dialogVisible=t},close:e.resetForm}},[o("el-form",{ref:"dialogForm",attrs:{model:e.dialogForm,"label-width":"180px",rules:e.rules}},[o("el-row",{attrs:{gutter:15}},[o("el-col",{attrs:{span:8}},[o("el-form-item",{attrs:{label:"名称",prop:"name"}},[o("el-input",{attrs:{placeholder:"请填写名称",maxlength:"100"},model:{value:e.dialogForm.name,callback:function(t){e.$set(e.dialogForm,"name",t)},expression:"dialogForm.name"}})],1),o("el-form-item",{attrs:{label:"隶属单位详址",prop:"subPlaceDetail"}},[o("el-input",{attrs:{placeholder:"请填写隶属单位详址",maxlength:"200"},model:{value:e.dialogForm.subPlaceDetail,callback:function(t){e.$set(e.dialogForm,"subPlaceDetail",t)},expression:"dialogForm.subPlaceDetail"}})],1),o("el-form-item",{attrs:{label:"隶属单位负责人联系方式",prop:"subLeaderContact"}},[o("el-input",{attrs:{placeholder:"请填写隶属单位负责人联系方式",maxlength:"50"},model:{value:e.dialogForm.subLeaderContact,callback:function(t){e.$set(e.dialogForm,"subLeaderContact",t)},expression:"dialogForm.subLeaderContact"}})],1),o("el-form-item",{attrs:{label:"管辖单位联系方式",prop:"domContact"}},[o("el-input",{attrs:{placeholder:"请填写管辖单位联系方式",maxlength:"50"},model:{value:e.dialogForm.domContact,callback:function(t){e.$set(e.dialogForm,"domContact",t)},expression:"dialogForm.domContact"}})],1)],1),o("el-col",{attrs:{span:8}},[o("el-form-item",{attrs:{label:"线路类型",prop:"lineType"}},[o("el-select",{attrs:{placeholder:"请选择线路类型"},model:{value:e.dialogForm.lineType,callback:function(t){e.$set(e.dialogForm,"lineType",t)},expression:"dialogForm.lineType"}},e._l(e.dic["线路类型"],function(e,t){return o("el-option",{key:t,attrs:{label:e.name,value:e.code}})}))],1),o("el-form-item",{attrs:{label:"隶属单位联系方式",prop:"subContact"}},[o("el-input",{attrs:{placeholder:"请填写隶属单位联系方式",maxlength:"50"},model:{value:e.dialogForm.subContact,callback:function(t){e.$set(e.dialogForm,"subContact",t)},expression:"dialogForm.subContact"}})],1),o("el-form-item",{attrs:{label:"分管治保负责人姓名",prop:"securityPrincipalName"}},[o("el-input",{attrs:{placeholder:"请填写分管治保负责人姓名",maxlength:"50"},model:{value:e.dialogForm.securityPrincipalName,callback:function(t){e.$set(e.dialogForm,"securityPrincipalName",t)},expression:"dialogForm.securityPrincipalName"}})],1),o("el-form-item",{attrs:{label:"管辖单位名称",prop:"domName"}},[o("el-input",{attrs:{placeholder:"请填写管辖单位名称",maxlength:"100"},model:{value:e.dialogForm.domName,callback:function(t){e.$set(e.dialogForm,"domName",t)},expression:"dialogForm.domName"}})],1)],1),o("el-col",{attrs:{span:8}},[o("el-form-item",{attrs:{label:"隶属单位名称",prop:"subName"}},[o("el-input",{attrs:{placeholder:"请填写隶属单位名称",maxlength:"100"},model:{value:e.dialogForm.subName,callback:function(t){e.$set(e.dialogForm,"subName",t)},expression:"dialogForm.subName"}})],1),o("el-form-item",{attrs:{label:"隶属单位负责人姓名",prop:"subLeader"}},[o("el-input",{attrs:{placeholder:"请填写隶属单位负责人姓名",maxlength:"50"},model:{value:e.dialogForm.subLeader,callback:function(t){e.$set(e.dialogForm,"subLeader",t)},expression:"dialogForm.subLeader"}})],1),o("el-form-item",{attrs:{label:"分管治保负责人联系方式",prop:"securityContact"}},[o("el-input",{attrs:{placeholder:"请填写分管治保负责人联系方式",maxlength:"50"},model:{value:e.dialogForm.securityContact,callback:function(t){e.$set(e.dialogForm,"securityContact",t)},expression:"dialogForm.securityContact"}})],1),o("el-form-item",{attrs:{label:"管辖单位详址",prop:"domPlaceDetail"}},[o("el-input",{attrs:{placeholder:"请填写管辖单位详址",maxlength:"200"},model:{value:e.dialogForm.domPlaceDetail,callback:function(t){e.$set(e.dialogForm,"domPlaceDetail",t)},expression:"dialogForm.domPlaceDetail"}})],1)],1)],1),o("el-row",{attrs:{gutter:15}},[o("el-col",{attrs:{span:8}},[o("el-form-item",{attrs:{label:"治安隐患等级",prop:"dangerLevel"}},[o("el-select",{attrs:{placeholder:"请选择治安隐患等级"},model:{value:e.dialogForm.dangerLevel,callback:function(t){e.$set(e.dialogForm,"dangerLevel",t)},expression:"dialogForm.dangerLevel"}},e._l(e.dic["治安隐患等级"],function(e,t){return o("el-option",{key:t,attrs:{label:e.name,value:e.code}})}))],1)],1),o("el-col",{attrs:{span:16}},[o("el-form-item",{attrs:{label:"治安隐患情况"}},[o("el-input",{attrs:{type:"textarea",rows:5,placeholder:"请填写治安隐患情况",maxlength:"4000"},model:{value:e.dialogForm.dangerDesc,callback:function(t){e.$set(e.dialogForm,"dangerDesc",t)},expression:"dialogForm.dangerDesc"}})],1)],1)],1)],1),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{type:"warning",size:"small"},on:{click:e.resetForm}},[e._v("取消")]),o("el-button",{attrs:{type:"success",size:"small"},on:{click:e.submitForm}},[e._v("保存")])],1)],1)},r=[],c=(o("7f7f"),o("ac6a"),{data:function(){return{dialogVisible:!1,isAdd:!0,title:"",dic:{"线路类型":[],"治安隐患等级":[]},disCodeOption:[],dialogForm:{districtCode:""},rules:{name:[{required:!0,message:"请输入线路名称",trigger:"blur"}],lineType:[{required:!0,message:"请选择线路类型",trigger:"change"}],subName:[{required:!0,message:"请输入隶属单位名称",trigger:"blur"}]}}},created:function(){var e=this;n["a"].requestDicCatalog(function(t){var o=_.keys(e.dic);_.map(t,function(t){-1!=_.indexOf(o,t.name)&&n["a"].requestDicType(t.id,function(o){e.dic[t.name]=o})})})},methods:{submitForm:function(){var e=this;this.$refs["dialogForm"].validate(function(t){if(!t)return console.log("error submit!!"),!1;var o=_.cloneDeep(e.dialogForm);o.dicMap&&delete o.dicMap,1==e.isAdd?n["a"].requestSaveLineProte(o,function(t){e.$popup.showNotification({type:"success",message:"护路护线添加成功！"}),e.resetForm(),e.$parent.handleQuery()}):0==e.isAdd&&n["a"].requestUpdateLineProte(o,function(t){e.$popup.showNotification({type:"success",message:"护路护线修改成功！"}),e.resetForm(),e.$parent.handleQuery()})})},resetForm:function(){this.$refs["dialogForm"].resetFields(),this.$data.dialogVisible=!1,this.isAdd=!0,this.dialogForm={districtCode:""}}}}),d=c,s=(o("05d8"),o("2877")),u=Object(s["a"])(d,l,r,!1,null,null,null);u.options.__file="roadline-prote-add.vue";var m=u.exports,p={components:{vAddDialog:m},data:function(){return{title:"护路护线",queryForm:{districtCode:"",name:""},header:{"名称":"name","线路类型":"dicMap.lineType","隶属单位名称":"subName","隶属单位联系方式":"subContact","隶属单位负责人姓名":"subLeader","隶属单位负责人联系方式":"subLeaderContact","管辖单位名称":"domName","管辖单位联系方式":"domContact"},data:[],recordCount:0,disCodeOption:[],isShowCode:["6102"],dlgVisible:!1,configKey:"lineProte"}},mounted:function(){var e=this;n["a"].requestGridCode(function(t){e.disCodeOption=[t],e.isShowCode=[t.code],e.queryForm.districtCode=t.code})},watch:{queryForm:{handler:function(e,t){this.handleQuery()},deep:!0}},methods:{handleTreeNode:function(e){this.queryForm.districtCode=e.code},handleAdd:function(){this.$refs["vAddDialog"].dialogVisible=!0,this.$refs["vAddDialog"].isAdd=!0,this.$refs["vAddDialog"].title="添加"+this.title,this.$refs["vAddDialog"].dialogForm.districtCode=this.queryForm.districtCode},handleDelete:function(e){var t=this;this.$popup.showLoading("正在删除中，请稍候..."),new Promise(function(t,o){var a=0;_.map(e,function(o,i){n["a"].requestDeleteLineProte(o.id,function(o){a++,a==e.length&&t()})})}).then(function(){t.$popup.showNotification({type:"success",message:"护路护线删除成功！"}),t.handleQuery(),t.$popup.closeLoading()}).catch(function(){t.$popup.showNotification({type:"warning",message:"护路护线删除失败！"}),t.$popup.closeLoading()})},handlePageChange:function(){this.data=[],this.handleQuery()},handleView:function(e,t){this.dlgVisible=!0,this.$nextTick(function(){this.$refs["details"].data=t,this.$refs["details"].visible=!0})},handleEdit:function(e,t){this.$refs["vAddDialog"].dialogVisible=!0,this.$refs["vAddDialog"].isAdd=!1,this.$refs["vAddDialog"].title="修改"+this.title,this.$refs["vAddDialog"].dialogForm=_.cloneDeep(t)},handleClear:function(){this.queryForm={districtCode:constants.REGION.CODE,name:""}},handleQuery:function(){var e=this,t=this.$refs["list"].getPageInfo();t.queryForm=_.cloneDeep(this.queryForm),n["a"].requestPageLineProte(t,function(o){0!=o.totalCount&&0==o.list.length?(t.page=o.totalPage,n["a"].requestPageLineProte(t,function(t){e.recordCount=t.totalCount,_.map(t.list,function(e){e.dicMap&&(e.dicMap.isHaveSub=0!=e.caseCount)}),e.data=t.list})):(e.recordCount=o.totalCount,_.map(o.list,function(e){e.dicMap&&(e.dicMap.isHaveSub=0!=e.caseCount)}),e.data=o.list)})}}},f=p,h=Object(s["a"])(f,a,i,!1,null,null,null);h.options.__file="roadline-prote-list.vue";t["default"]=h.exports},ba4a:function(e,t,o){"use strict";o("7f7f");var a=o("9bd2"),i={requestGridCode:function(e){Object(a["a"])({url:"/grid/rstu/find/all/code",method:"get"}).then(function(t){t.region=_.sortBy(t.region,"code");var o=constants.REGION.CODE,a={code:o,label:constants.REGION.NAME,children:[]},i={};switch(o&&o.length){case 4:i=_.map(t.region,function(e){return{code:e.code,label:e.name,children:[]}}),_.map(i,function(e){e.children=_.map(_.filter(t.street,function(t){return t.code.indexOf(e.code)>=0}),function(e){return{code:e.code,label:e.name,children:[]}})}),_.map(i,function(e){_.map(e.children,function(e){e.children=_.map(_.filter(t.community,function(t){return t.code.indexOf(e.code)>=0}),function(e){return{code:e.code,label:e.name,children:[]}})})}),_.map(i,function(e){_.map(e.children,function(e){_.map(e.children,function(e){e.children=_.map(_.filter(t.unit,function(t){return t.code.indexOf(e.code)>=0}),function(e){return{code:e.code,label:e.name}})})})});break;case 6:i=_.map(_.filter(t.street,function(e){return e.code.indexOf(o)>=0}),function(e){return{code:e.code,label:e.name,children:[]}}),_.map(i,function(e){e.children=_.map(_.filter(t.community,function(t){return t.code.indexOf(e.code)>=0}),function(e){return{code:e.code,label:e.name,children:[]}})}),_.map(i,function(e){_.map(e.children,function(e){e.children=_.map(_.filter(t.unit,function(t){return t.code.indexOf(e.code)>=0}),function(e){return{code:e.code,label:e.name}})})});break;case 9:i=_.map(_.filter(t.community,function(e){return e.code.indexOf(o)>=0}),function(e){return{code:e.code,label:e.name,children:[]}}),_.map(i,function(e){e.children=_.map(_.filter(t.unit,function(t){return t.code.indexOf(e.code)>=0}),function(e){return{code:e.code,label:e.name}})});break;case 12:i=_.map(_.filter(t.unit,function(e){return e.code.indexOf(o)>=0}),function(e){return{code:e.code,label:e.name}});break;default:break}a.children=i,e(a)})},requestDicCatalog:function(e){Object(a["a"])({url:"/buss/info/dictionary/catalog/findAll",method:"get"}).then(function(t){e(t)})},requestDicType:function(e,t){Object(a["a"])({url:"/buss/info/dictionary/findDicByCatalogId?catalogId="+e,method:"get"}).then(function(e){t(e)})},requestByEntityNames:function(e,t){Object(a["a"])({url:"/compre/statis/common/district?districtCode="+e.districtCode+"&entityNames="+e.entityNames,method:"get"}).then(function(e){t(e)})},requestByFieldName:function(e,t){Object(a["a"])({url:"/compre/statis/common/field?districtCode="+e.districtCode+"&entityName="+e.entityName+"&fieldName="+e.fieldName,method:"get"}).then(function(e){t(e)})},requestByEntityAndFieldSum:function(e,t){Object(a["a"])({url:"/compre/statis/common/district/field/sum?districtCode="+e.districtCode+"&entityName="+e.entityName+"&fieldName="+e.fieldName,method:"get"}).then(function(e){t(e)})},requestFocusPeople:function(e,t){Object(a["a"])({url:"/compre/hp/people/find/compreInfo?id="+e,method:"get"}).then(function(e){t(e)})},requestFocus:function(e,t){Object(a["a"])({url:"/compre/"+e.entity+"/find?id="+e.focusId,method:"get"}).then(function(e){t(e)})}};t["a"]=i},c6a4:function(e,t,o){"use strict";o("7f7f");var a=o("c93e"),i=o("9bd2"),n=o("ba4a"),l=Object(a["a"])({},n["a"],{requestLine:function(e,t){Object(i["a"])({url:"/compre/peace/roadline/find?id="+e,method:"get"}).then(function(e){t(e)})},requestPageLineProte:function(e,t){Object(i["a"])({url:"/compre/peace/roadline/findPage?name="+e.queryForm.name+"&districtCode="+e.queryForm.districtCode+"&page="+e.page+"&pageSize="+e.pageSize,method:"get"}).then(function(e){t(e)})},requestLineProteByCode:function(e,t){Object(i["a"])({url:"/compre/peace/roadline/findPage?&districtCode="+e,method:"get"}).then(function(e){t(e)})},requestSaveLineProte:function(e,t){Object(i["a"])({url:"/compre/peace/roadline/save",method:"post",data:e}).then(function(e){t(e)})},requestUpdateLineProte:function(e,t){Object(i["a"])({url:"/compre/peace/roadline/update",method:"post",data:e}).then(function(e){t(e)})},requestDeleteLineProte:function(e,t){Object(i["a"])({url:"/compre/peace/roadline/delete?id="+e,method:"post"}).then(function(e){t(e)})},requestPageLineCase:function(e,t){Object(i["a"])({url:"/compre/peace/case/findPage?name="+e.queryForm.name+"&districtCode="+e.queryForm.districtCode+"&lineId="+e.queryForm.lineId+"&page="+e.page+"&pageSize="+e.pageSize,method:"get"}).then(function(e){t(e)})},requestSaveLineCase:function(e,t){Object(i["a"])({url:"/compre/peace/case/save",method:"post",data:e}).then(function(e){t(e)})},requestUpdateLineCase:function(e,t){Object(i["a"])({url:"/compre/peace/case/update",method:"post",data:e}).then(function(e){t(e)})},requestDeleteLineCase:function(e,t){Object(i["a"])({url:"/compre/peace/case/delete?id="+e,method:"post"}).then(function(e){t(e)})}});t["a"]=l}}]);
//# sourceMappingURL=chunk-93f9.806555dd.js.map