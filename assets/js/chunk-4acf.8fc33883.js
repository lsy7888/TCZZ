(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4acf"],{"0d93":function(e,t,o){"use strict";var n=o("a4a5"),a=o.n(n);a.a},6071:function(e,t,o){"use strict";o("7f7f");var n=o("c93e"),a=o("9bd2"),i=o("ba4a"),r=Object(n["a"])({},i["a"],{requestPageOrgList:function(e,t){Object(a["a"])({url:"/compre/compre/organization/findPage?name="+e.name+"&districtCode="+e.districtCode+"&page="+e.page+"&pageSize="+e.pageSize,method:"get"}).then(function(e){t(e)})},requestOrgListByCode:function(e,t){Object(a["a"])({url:"/compre/compre/organization/findPage?&districtCode="+e,method:"get"}).then(function(e){t(e)})},requestSaveOrg:function(e,t){Object(a["a"])({url:"/compre/compre/organization/save",method:"post",data:e}).then(function(e){t(e)})},requestUpdateOrg:function(e,t){Object(a["a"])({url:"/compre/compre/organization/update",method:"post",data:e}).then(function(e){t(e)})},requestDeleteOrg:function(e,t){Object(a["a"])({url:"/compre/compre/organization/delete?id="+e,method:"post"}).then(function(e){t(e)})},requestPageTeamList:function(e,t){Object(a["a"])({url:"/compre/compre/orgTeam/findPage?orgId="+e.orgId+"&districtCode="+e.districtCode+"&name="+e.name+"&page="+e.page+"&pageSize="+e.pageSize,method:"get"}).then(function(e){t(e)})},requestSaveTeam:function(e,t){Object(a["a"])({url:"/compre/compre/orgTeam/save",method:"post",data:e}).then(function(e){t(e)})},requestUpdateTeam:function(e,t){Object(a["a"])({url:"/compre/compre/orgTeam/update",method:"post",data:e}).then(function(e){t(e)})},requestDeleteTeam:function(e,t){Object(a["a"])({url:"/compre/compre/orgTeam/delete?id="+e,method:"post"}).then(function(e){t(e)})},requestPageGridList:function(e,t){Object(a["a"])({url:"/compre/compre/gridMsg/findPage?districtCode="+e.districtCode+"&name="+e.name+"&page="+e.page+"&pageSize="+e.pageSize,method:"get"}).then(function(e){t(e)})},requestSaveGrid:function(e,t){Object(a["a"])({url:"/compre/compre/gridMsg/save",method:"post",data:e}).then(function(e){t(e)})},requestUpdateGrid:function(e,t){Object(a["a"])({url:"/compre/compre/gridMsg/update",method:"post",data:e}).then(function(e){t(e)})},requestDeleteGrid:function(e,t){Object(a["a"])({url:"/compre/compre/gridMsg/delete?id="+e,method:"post"}).then(function(e){t(e)})},requestPageBuildLeader:function(e,t){Object(a["a"])({url:"/compre/compre/buildingLeader/findPage?districtCode="+e.districtCode+"&name="+e.name+"&page="+e.page+"&pageSize="+e.pageSize,method:"get"}).then(function(e){t(e)})},requestSaveBuildLeader:function(e,t){Object(a["a"])({url:"/compre/compre/buildingLeader/save",method:"post",data:e}).then(function(e){t(e)})},requestUpdateBuildLeader:function(e,t){Object(a["a"])({url:"/compre/compre/buildingLeader/update",method:"post",data:e}).then(function(e){t(e)})},requestDeleteBuildLeader:function(e,t){Object(a["a"])({url:"/compre/compre/buildingLeader/delete?id="+e,method:"post"}).then(function(e){t(e)})},requestPageLeaderDuty:function(e,t){Object(a["a"])({url:"/compre/compre/leadAcc/findPage?districtCode="+e.districtCode+"&name="+e.name+"&page="+e.page+"&pageSize="+e.pageSize,method:"get"}).then(function(e){t(e)})},requestSaveLeaderDuty:function(e,t){Object(a["a"])({url:"/compre/compre/leadAcc/save",method:"post",data:e}).then(function(e){t(e)})},requestUpdateLeaderDuty:function(e,t){Object(a["a"])({url:"/compre/compre/leadAcc/update",method:"post",data:e}).then(function(e){t(e)})},requestDeleteLeaderDuty:function(e,t){Object(a["a"])({url:"/compre/compre/leadAcc/delete?id="+e,method:"post"}).then(function(e){t(e)})},requestPageCase:function(e,t){Object(a["a"])({url:"/compre/compre/greatCase/findPage?districtCode="+e.districtCode+"&name="+e.name+"&page="+e.page+"&pageSize="+e.pageSize,method:"get"}).then(function(e){t(e)})},requestSaveCase:function(e,t){Object(a["a"])({url:"/compre/compre/greatCase/save",method:"post",data:e}).then(function(e){t(e)})},requestUpdateCase:function(e,t){Object(a["a"])({url:"/compre/compre/greatCase/update",method:"post",data:e}).then(function(e){t(e)})},requestDeleteCase:function(e,t){Object(a["a"])({url:"/compre/compre/greatCase/delete?id="+e,method:"post"}).then(function(e){t(e)})},requestPageOrgMassList:function(e,t){Object(a["a"])({url:"/compre/compre/prevent/findPage?districtCode="+e.districtCode+"&name="+e.name+"&page="+e.page+"&pageSize="+e.pageSize,method:"get"}).then(function(e){t(e)})},requestOrgMassListBycode:function(e,t){Object(a["a"])({url:"/compre/compre/prevent/findPage?districtCode="+e,method:"get"}).then(function(e){t(e)})},requestSaveOrgMass:function(e,t){Object(a["a"])({url:"/compre/compre/prevent/save",method:"post",data:e}).then(function(e){t(e)})},requestUpdateOrgMass:function(e,t){Object(a["a"])({url:"/compre/compre/prevent/update",method:"post",data:e}).then(function(e){t(e)})},requestDeleteOrgMass:function(e,t){Object(a["a"])({url:"/compre/compre/prevent/delete?id="+e,method:"post"}).then(function(e){t(e)})},requestPageMassTeam:function(e,t){Object(a["a"])({url:"/compre/compre/prevent/team/findPage?districtCode="+e.districtCode+"&PeventId="+e.PeventId+"&name="+e.name+"&page="+e.page+"&pageSize="+e.pageSize,method:"get"}).then(function(e){t(e)})},requestSaveMassTeam:function(e,t){Object(a["a"])({url:"/compre/compre/prevent/team/save",method:"post",data:e}).then(function(e){t(e)})},requestUpdateMassTeam:function(e,t){Object(a["a"])({url:"/compre/compre/prevent/team/update",method:"post",data:e}).then(function(e){t(e)})},requestDeleteMassTeam:function(e,t){Object(a["a"])({url:"/compre/compre/prevent/team/delete?id="+e,method:"post"}).then(function(e){t(e)})},requestPageCenter:function(e,t){Object(a["a"])({url:"/compre/compre/center/findPage?name="+e.name+"&districtCode="+e.districtCode+"&page="+e.page+"&pageSize="+e.pageSize,method:"get"}).then(function(e){t(e)})},requestSaveCenter:function(e,t){Object(a["a"])({url:"/compre/compre/center/save",method:"post",data:e}).then(function(e){t(e)})},requestUpdateCenter:function(e,t){Object(a["a"])({url:"/compre/compre/center/update",method:"post",data:e}).then(function(e){t(e)})},requestDeleteCenter:function(e,t){Object(a["a"])({url:"/compre/compre/center/delete?id="+e,method:"post"}).then(function(e){t(e)})},requestPageSafeVideo:function(e,t){Object(a["a"])({url:"/compre/compre/safeMonitor/findPage?name="+e.name+"&districtCode="+e.districtCode+"&page="+e.page+"&pageSize="+e.pageSize,method:"get"}).then(function(e){t(e)})},requestSaveSafeVideo:function(e,t){Object(a["a"])({url:"/compre/compre/safeMonitor/save",method:"post",data:e}).then(function(e){t(e)})},requestUpdateSafeVideo:function(e,t){Object(a["a"])({url:"/compre/compre/safeMonitor/update",method:"post",data:e}).then(function(e){t(e)})},requestDeleteSafeVideo:function(e,t){Object(a["a"])({url:"/compre/compre/safeMonitor/delete?id="+e,method:"post"}).then(function(e){t(e)})},requestPageNetCenter:function(e,t){Object(a["a"])({url:"/compre/compre/netCenter/findPage?name="+e.name+"&districtCode="+e.districtCode+"&page="+e.page+"&pageSize="+e.pageSize,method:"get"}).then(function(e){t(e)})},requestSaveNetCenter:function(e,t){Object(a["a"])({url:"/compre/compre/netCenter/save",method:"post",data:e}).then(function(e){t(e)})},requestUpdateNetCenter:function(e,t){Object(a["a"])({url:"/compre/compre/netCenter/update",method:"post",data:e}).then(function(e){t(e)})},requestDeleteNetCenter:function(e,t){Object(a["a"])({url:"/compre/compre/netCenter/delete?id="+e,method:"post"}).then(function(e){t(e)})}});t["a"]=r},a4a5:function(e,t,o){},abe3:function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"table-list-page"},[o("techo-list",{ref:"list",attrs:{title:e.title,header:e.header,data:e.data,isShowCode:e.isShowCode,recordCount:e.recordCount,disCodeOption:e.disCodeOption},on:{onAdd:e.handleAdd,onPageChange:e.handlePageChange,onDelete:e.handleDelete,onView:e.handleView,onEdit:e.handleEdit,onTreeNode:e.handleTreeNode}},[o("div",{attrs:{slot:"header"},slot:"header"},[o("el-row",{staticClass:"techo-list__header-row",attrs:{type:"flex",justify:"space-around"}},[o("el-col",{attrs:{span:10}},[o("span",{staticClass:"techo-list__header-col-txt-4"},[e._v("机构名称：")]),o("div",{staticClass:"techo-list__header-col-left-4"},[o("el-input",{staticClass:"techo-list__header-select-full",attrs:{placeholder:"请输入机构名称",maxlength:10,size:"small",clearable:""},model:{value:e.queryForm.name,callback:function(t){e.$set(e.queryForm,"name",t)},expression:"queryForm.name"}})],1)]),o("el-col",{attrs:{span:9}}),o("el-col",{staticClass:"techo-list__header-col-button",attrs:{span:5}},[o("el-button",{staticClass:"techo-list__header-button-reset",attrs:{size:"small"},on:{click:e.handleClear}},[e._v("清空")]),o("el-button",{staticClass:"techo-list__header-button-query",attrs:{size:"small"},on:{click:e.handleQuery}},[e._v("查询")])],1)],1)],1)]),e.dlgVisible?o("techo-details",{ref:"details",attrs:{configKey:e.configKey,title:e.title}}):e._e(),o("vAddDialog",{ref:"vAddDialog"})],1)},a=[],i=o("c93e"),r=o("6071"),c=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-dialog",{staticClass:"add-org-dialog",attrs:{title:e.title,visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t},close:e.resetForm}},[o("el-form",{ref:"dialogForm",attrs:{model:e.dialogForm,rules:e.orgRules,"label-width":"100px"}},[o("el-row",{attrs:{type:"flex",gutter:15}},[o("el-col",{attrs:{span:8}},[o("el-form-item",{attrs:{label:"机构名称",prop:"name"}},[o("el-input",{attrs:{placeholder:"请填写综治机构名称"},model:{value:e.dialogForm.name,callback:function(t){e.$set(e.dialogForm,"name",t)},expression:"dialogForm.name"}})],1)],1),o("el-col",{attrs:{span:8}},[o("el-form-item",{attrs:{label:"机构类型",prop:"type"}},[o("el-select",{attrs:{placeholder:"请选择机构类型",clearable:""},model:{value:e.dialogForm.type,callback:function(t){e.$set(e.dialogForm,"type",t)},expression:"dialogForm.type"}},e._l(e.dic["机构类型"],function(e,t){return o("el-option",{key:t,attrs:{label:e.name,value:e.code}})}))],1)],1),o("el-col",{attrs:{span:8}},[o("el-form-item",{attrs:{label:"机构层级",prop:"hierarchy"}},[o("el-select",{attrs:{placeholder:"请选择机构层级",clearable:""},model:{value:e.dialogForm.hierarchy,callback:function(t){e.$set(e.dialogForm,"hierarchy",t)},expression:"dialogForm.hierarchy"}},e._l(e.dic["机构层级"],function(e,t){return o("el-option",{key:t,attrs:{label:e.name,value:e.code}})}))],1)],1)],1)],1),o("techo-position",{ref:"position",attrs:{code:e.dialogForm.districtCode,placement:"right",lonlat:e.dialogForm},on:{formLonLat:e.getLonlat}}),o("div",{staticClass:"lon-lat"},[o("span",[e._v("经度：")]),o("span",[e._v(e._s(e.dialogForm.x))]),o("span",[e._v("经度：")]),o("span",[e._v(e._s(e.dialogForm.y))])]),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{type:"warning",size:"small"},on:{click:e.resetForm}},[e._v("取消")]),o("el-button",{attrs:{type:"success",size:"small"},on:{click:e.submitForm}},[e._v("保存")])],1)],1)},d=[],s=(o("7f7f"),o("ac6a"),{data:function(){return{dialogVisible:!1,isAdd:!0,title:"",dialogForm:{x:"",y:"",districtCode:""},orgRules:{name:[{required:!0,message:"请输入综治机构名称",trigger:"blur"},{min:2,max:25,message:"长度在 2 到 25 个字符",trigger:"blur"}],type:[{required:!0,message:"请选择综治机构类型",trigger:"change"}],hierarchy:[{required:!0,message:"请选择综治机构层级",trigger:"change"}]},dic:{"机构类型":[],"机构层级":[]}}},created:function(){var e=this;r["a"].requestDicCatalog(function(t){var o=_.keys(e.dic);_.map(t,function(t){-1!=_.indexOf(o,t.name)&&r["a"].requestDicType(t.id,function(o){e.dic[t.name]=o})})})},methods:{getLonlat:function(e){this.dialogForm.x=e.lng,this.dialogForm.y=e.lat},submitForm:function(){var e=this;void 0==this.dialogForm.x||""==this.dialogForm.x?this.$popup.showNotification({type:"warning",message:"请选择地理位置！"}):this.$refs["dialogForm"].validate(function(t){if(!t)return console.log("error submit!!"),!1;var o=_.cloneDeep(e.dialogForm);o.dicMap&&delete o.dicMap,1==e.isAdd?r["a"].requestSaveOrg(o,function(t){e.$popup.showNotification({type:"success",message:"综治机构添加成功！"}),e.resetForm(),e.$parent.handleQuery()}):0==e.isAdd&&r["a"].requestUpdateOrg(o,function(t){e.$popup.showNotification({type:"success",message:"综治机构修改成功！"}),e.resetForm(),e.$parent.handleQuery()})})},resetForm:function(){this.$refs["dialogForm"].resetFields(),this.$data.dialogVisible=!1,this.isAdd=!0,this.$refs["position"].mapApi.clear(),this.$refs["position"].mapApi.mapOper.setFullExtent(),this.dialogForm={x:"",y:"",districtCode:""}}}}),u=s,l=(o("0d93"),o("2877")),m=Object(l["a"])(u,c,d,!1,null,null,null);m.options.__file="zz-organization-add.vue";var p=m.exports,f={components:{vAddDialog:p},data:function(){return{title:"综治机构",header:{"机构名称":"name","机构类型":"dicMap.type","机构层级":"dicMap.hierarchy"},data:[],recordCount:0,queryForm:{districtCode:"",name:""},isShowCode:["6102"],dlgVisible:!1,configKey:"zzOrg",disCodeOption:[]}},mounted:function(){var e=this;r["a"].requestGridCode(function(t){e.disCodeOption=[t],e.isShowCode=[t.code],e.queryForm.districtCode=t.code})},watch:{queryForm:{handler:function(e,t){this.handleQuery()},deep:!0}},methods:{handleTreeNode:function(e){this.queryForm.districtCode=e.code},handleAdd:function(){this.$refs["vAddDialog"].dialogVisible=!0,this.$refs["vAddDialog"].isAdd=!0,this.$refs["vAddDialog"].title="添加"+this.title,this.$refs["vAddDialog"].dialogForm.districtCode=this.queryForm.districtCode},handleDelete:function(e){var t=this;this.$popup.showLoading("正在删除中，请稍候..."),new Promise(function(t,o){var n=0;_.map(e,function(o,a){r["a"].requestDeleteOrg(o.id,function(o){n++,n==e.length&&t()})})}).then(function(){t.$popup.showNotification({type:"success",message:"综治机构删除成功！"}),t.handleQuery(),t.$popup.closeLoading()}).catch(function(){t.$popup.showNotification({type:"warning",message:"综治机构删除失败！"}),t.$popup.closeLoading()})},handlePageChange:function(){this.data=[],this.handleQuery()},handleView:function(e,t){this.dlgVisible=!0,this.$nextTick(function(){this.$refs["details"].data=t,this.$refs["details"].visible=!0})},handleEdit:function(e,t){this.$refs["vAddDialog"].dialogVisible=!0,this.$refs["vAddDialog"].isAdd=!1,this.$refs["vAddDialog"].title="修改"+this.title,this.$refs["vAddDialog"].dialogForm=_.cloneDeep(t)},handleClear:function(){this.queryForm={districtCode:constants.REGION.CODE,name:""}},handleQuery:function(){var e=this,t=this.$refs["list"].getPageInfo();t=Object(i["a"])({},t,_.cloneDeep(this.queryForm)),r["a"].requestPageOrgList(t,function(o){0!=o.totalCount&&0==o.list.length?(t.page=o.totalPage,r["a"].requestPageOrgList(t,function(t){e.recordCount=t.totalCount,_.map(t.list,function(e){e.dicMap&&(e.dicMap.isHaveSub=0!=e.teamCount)}),e.data=t.list})):(e.recordCount=o.totalCount,_.map(o.list,function(e){e.dicMap&&(e.dicMap.isHaveSub=0!=e.teamCount)}),e.data=o.list)})}}},h=f,g=Object(l["a"])(h,n,a,!1,null,null,null);g.options.__file="zz-organization-list.vue";t["default"]=g.exports},ba4a:function(e,t,o){"use strict";o("7f7f");var n=o("9bd2"),a={requestGridCode:function(e){Object(n["a"])({url:"/grid/rstu/find/all/code",method:"get"}).then(function(t){t.region=_.sortBy(t.region,"code");var o=constants.REGION.CODE,n={code:o,label:constants.REGION.NAME,children:[]},a={};switch(o&&o.length){case 4:a=_.map(t.region,function(e){return{code:e.code,label:e.name,children:[]}}),_.map(a,function(e){e.children=_.map(_.filter(t.street,function(t){return t.code.indexOf(e.code)>=0}),function(e){return{code:e.code,label:e.name,children:[]}})}),_.map(a,function(e){_.map(e.children,function(e){e.children=_.map(_.filter(t.community,function(t){return t.code.indexOf(e.code)>=0}),function(e){return{code:e.code,label:e.name,children:[]}})})}),_.map(a,function(e){_.map(e.children,function(e){_.map(e.children,function(e){e.children=_.map(_.filter(t.unit,function(t){return t.code.indexOf(e.code)>=0}),function(e){return{code:e.code,label:e.name}})})})});break;case 6:a=_.map(_.filter(t.street,function(e){return e.code.indexOf(o)>=0}),function(e){return{code:e.code,label:e.name,children:[]}}),_.map(a,function(e){e.children=_.map(_.filter(t.community,function(t){return t.code.indexOf(e.code)>=0}),function(e){return{code:e.code,label:e.name,children:[]}})}),_.map(a,function(e){_.map(e.children,function(e){e.children=_.map(_.filter(t.unit,function(t){return t.code.indexOf(e.code)>=0}),function(e){return{code:e.code,label:e.name}})})});break;case 9:a=_.map(_.filter(t.community,function(e){return e.code.indexOf(o)>=0}),function(e){return{code:e.code,label:e.name,children:[]}}),_.map(a,function(e){e.children=_.map(_.filter(t.unit,function(t){return t.code.indexOf(e.code)>=0}),function(e){return{code:e.code,label:e.name}})});break;case 12:a=_.map(_.filter(t.unit,function(e){return e.code.indexOf(o)>=0}),function(e){return{code:e.code,label:e.name}});break;default:break}n.children=a,e(n)})},requestDicCatalog:function(e){Object(n["a"])({url:"/buss/info/dictionary/catalog/findAll",method:"get"}).then(function(t){e(t)})},requestDicType:function(e,t){Object(n["a"])({url:"/buss/info/dictionary/findDicByCatalogId?catalogId="+e,method:"get"}).then(function(e){t(e)})},requestByEntityNames:function(e,t){Object(n["a"])({url:"/compre/statis/common/district?districtCode="+e.districtCode+"&entityNames="+e.entityNames,method:"get"}).then(function(e){t(e)})},requestByFieldName:function(e,t){Object(n["a"])({url:"/compre/statis/common/field?districtCode="+e.districtCode+"&entityName="+e.entityName+"&fieldName="+e.fieldName,method:"get"}).then(function(e){t(e)})},requestByEntityAndFieldSum:function(e,t){Object(n["a"])({url:"/compre/statis/common/district/field/sum?districtCode="+e.districtCode+"&entityName="+e.entityName+"&fieldName="+e.fieldName,method:"get"}).then(function(e){t(e)})},requestFocusPeople:function(e,t){Object(n["a"])({url:"/compre/hp/people/find/compreInfo?id="+e,method:"get"}).then(function(e){t(e)})},requestFocus:function(e,t){Object(n["a"])({url:"/compre/"+e.entity+"/find?id="+e.focusId,method:"get"}).then(function(e){t(e)})}};t["a"]=a}}]);
//# sourceMappingURL=chunk-4acf.8fc33883.js.map