(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0bbc"],{6071:function(e,t,o){"use strict";o("7f7f");var a=o("c93e"),n=o("9bd2"),i=o("ba4a"),r=Object(a["a"])({},i["a"],{requestPageOrgList:function(e,t){Object(n["a"])({url:"/compre/compre/organization/findPage?name="+e.name+"&districtCode="+e.districtCode+"&page="+e.page+"&pageSize="+e.pageSize,method:"get"}).then(function(e){t(e)})},requestOrgListByCode:function(e,t){Object(n["a"])({url:"/compre/compre/organization/findPage?&districtCode="+e,method:"get"}).then(function(e){t(e)})},requestSaveOrg:function(e,t){Object(n["a"])({url:"/compre/compre/organization/save",method:"post",data:e}).then(function(e){t(e)})},requestUpdateOrg:function(e,t){Object(n["a"])({url:"/compre/compre/organization/update",method:"post",data:e}).then(function(e){t(e)})},requestDeleteOrg:function(e,t){Object(n["a"])({url:"/compre/compre/organization/delete?id="+e,method:"post"}).then(function(e){t(e)})},requestPageTeamList:function(e,t){Object(n["a"])({url:"/compre/compre/orgTeam/findPage?orgId="+e.orgId+"&districtCode="+e.districtCode+"&name="+e.name+"&page="+e.page+"&pageSize="+e.pageSize,method:"get"}).then(function(e){t(e)})},requestSaveTeam:function(e,t){Object(n["a"])({url:"/compre/compre/orgTeam/save",method:"post",data:e}).then(function(e){t(e)})},requestUpdateTeam:function(e,t){Object(n["a"])({url:"/compre/compre/orgTeam/update",method:"post",data:e}).then(function(e){t(e)})},requestDeleteTeam:function(e,t){Object(n["a"])({url:"/compre/compre/orgTeam/delete?id="+e,method:"post"}).then(function(e){t(e)})},requestPageGridList:function(e,t){Object(n["a"])({url:"/compre/compre/gridMsg/findPage?districtCode="+e.districtCode+"&name="+e.name+"&page="+e.page+"&pageSize="+e.pageSize,method:"get"}).then(function(e){t(e)})},requestSaveGrid:function(e,t){Object(n["a"])({url:"/compre/compre/gridMsg/save",method:"post",data:e}).then(function(e){t(e)})},requestUpdateGrid:function(e,t){Object(n["a"])({url:"/compre/compre/gridMsg/update",method:"post",data:e}).then(function(e){t(e)})},requestDeleteGrid:function(e,t){Object(n["a"])({url:"/compre/compre/gridMsg/delete?id="+e,method:"post"}).then(function(e){t(e)})},requestPageBuildLeader:function(e,t){Object(n["a"])({url:"/compre/compre/buildingLeader/findPage?districtCode="+e.districtCode+"&name="+e.name+"&page="+e.page+"&pageSize="+e.pageSize,method:"get"}).then(function(e){t(e)})},requestSaveBuildLeader:function(e,t){Object(n["a"])({url:"/compre/compre/buildingLeader/save",method:"post",data:e}).then(function(e){t(e)})},requestUpdateBuildLeader:function(e,t){Object(n["a"])({url:"/compre/compre/buildingLeader/update",method:"post",data:e}).then(function(e){t(e)})},requestDeleteBuildLeader:function(e,t){Object(n["a"])({url:"/compre/compre/buildingLeader/delete?id="+e,method:"post"}).then(function(e){t(e)})},requestPageLeaderDuty:function(e,t){Object(n["a"])({url:"/compre/compre/leadAcc/findPage?districtCode="+e.districtCode+"&name="+e.name+"&page="+e.page+"&pageSize="+e.pageSize,method:"get"}).then(function(e){t(e)})},requestSaveLeaderDuty:function(e,t){Object(n["a"])({url:"/compre/compre/leadAcc/save",method:"post",data:e}).then(function(e){t(e)})},requestUpdateLeaderDuty:function(e,t){Object(n["a"])({url:"/compre/compre/leadAcc/update",method:"post",data:e}).then(function(e){t(e)})},requestDeleteLeaderDuty:function(e,t){Object(n["a"])({url:"/compre/compre/leadAcc/delete?id="+e,method:"post"}).then(function(e){t(e)})},requestPageCase:function(e,t){Object(n["a"])({url:"/compre/compre/greatCase/findPage?districtCode="+e.districtCode+"&name="+e.name+"&page="+e.page+"&pageSize="+e.pageSize,method:"get"}).then(function(e){t(e)})},requestSaveCase:function(e,t){Object(n["a"])({url:"/compre/compre/greatCase/save",method:"post",data:e}).then(function(e){t(e)})},requestUpdateCase:function(e,t){Object(n["a"])({url:"/compre/compre/greatCase/update",method:"post",data:e}).then(function(e){t(e)})},requestDeleteCase:function(e,t){Object(n["a"])({url:"/compre/compre/greatCase/delete?id="+e,method:"post"}).then(function(e){t(e)})},requestPageOrgMassList:function(e,t){Object(n["a"])({url:"/compre/compre/prevent/findPage?districtCode="+e.districtCode+"&name="+e.name+"&page="+e.page+"&pageSize="+e.pageSize,method:"get"}).then(function(e){t(e)})},requestOrgMassListBycode:function(e,t){Object(n["a"])({url:"/compre/compre/prevent/findPage?districtCode="+e,method:"get"}).then(function(e){t(e)})},requestSaveOrgMass:function(e,t){Object(n["a"])({url:"/compre/compre/prevent/save",method:"post",data:e}).then(function(e){t(e)})},requestUpdateOrgMass:function(e,t){Object(n["a"])({url:"/compre/compre/prevent/update",method:"post",data:e}).then(function(e){t(e)})},requestDeleteOrgMass:function(e,t){Object(n["a"])({url:"/compre/compre/prevent/delete?id="+e,method:"post"}).then(function(e){t(e)})},requestPageMassTeam:function(e,t){Object(n["a"])({url:"/compre/compre/prevent/team/findPage?districtCode="+e.districtCode+"&PeventId="+e.PeventId+"&name="+e.name+"&page="+e.page+"&pageSize="+e.pageSize,method:"get"}).then(function(e){t(e)})},requestSaveMassTeam:function(e,t){Object(n["a"])({url:"/compre/compre/prevent/team/save",method:"post",data:e}).then(function(e){t(e)})},requestUpdateMassTeam:function(e,t){Object(n["a"])({url:"/compre/compre/prevent/team/update",method:"post",data:e}).then(function(e){t(e)})},requestDeleteMassTeam:function(e,t){Object(n["a"])({url:"/compre/compre/prevent/team/delete?id="+e,method:"post"}).then(function(e){t(e)})},requestPageCenter:function(e,t){Object(n["a"])({url:"/compre/compre/center/findPage?name="+e.name+"&districtCode="+e.districtCode+"&page="+e.page+"&pageSize="+e.pageSize,method:"get"}).then(function(e){t(e)})},requestSaveCenter:function(e,t){Object(n["a"])({url:"/compre/compre/center/save",method:"post",data:e}).then(function(e){t(e)})},requestUpdateCenter:function(e,t){Object(n["a"])({url:"/compre/compre/center/update",method:"post",data:e}).then(function(e){t(e)})},requestDeleteCenter:function(e,t){Object(n["a"])({url:"/compre/compre/center/delete?id="+e,method:"post"}).then(function(e){t(e)})},requestPageSafeVideo:function(e,t){Object(n["a"])({url:"/compre/compre/safeMonitor/findPage?name="+e.name+"&districtCode="+e.districtCode+"&page="+e.page+"&pageSize="+e.pageSize,method:"get"}).then(function(e){t(e)})},requestSaveSafeVideo:function(e,t){Object(n["a"])({url:"/compre/compre/safeMonitor/save",method:"post",data:e}).then(function(e){t(e)})},requestUpdateSafeVideo:function(e,t){Object(n["a"])({url:"/compre/compre/safeMonitor/update",method:"post",data:e}).then(function(e){t(e)})},requestDeleteSafeVideo:function(e,t){Object(n["a"])({url:"/compre/compre/safeMonitor/delete?id="+e,method:"post"}).then(function(e){t(e)})},requestPageNetCenter:function(e,t){Object(n["a"])({url:"/compre/compre/netCenter/findPage?name="+e.name+"&districtCode="+e.districtCode+"&page="+e.page+"&pageSize="+e.pageSize,method:"get"}).then(function(e){t(e)})},requestSaveNetCenter:function(e,t){Object(n["a"])({url:"/compre/compre/netCenter/save",method:"post",data:e}).then(function(e){t(e)})},requestUpdateNetCenter:function(e,t){Object(n["a"])({url:"/compre/compre/netCenter/update",method:"post",data:e}).then(function(e){t(e)})},requestDeleteNetCenter:function(e,t){Object(n["a"])({url:"/compre/compre/netCenter/delete?id="+e,method:"post"}).then(function(e){t(e)})}});t["a"]=r},"6cc2":function(e,t,o){},ba4a:function(e,t,o){"use strict";o("7f7f");var a=o("9bd2"),n={requestGridCode:function(e){Object(a["a"])({url:"/grid/rstu/find/all/code",method:"get"}).then(function(t){t.region=_.sortBy(t.region,"code");var o=constants.REGION.CODE,a={code:o,label:constants.REGION.NAME,children:[]},n={};switch(o&&o.length){case 4:n=_.map(t.region,function(e){return{code:e.code,label:e.name,children:[]}}),_.map(n,function(e){e.children=_.map(_.filter(t.street,function(t){return t.code.indexOf(e.code)>=0}),function(e){return{code:e.code,label:e.name,children:[]}})}),_.map(n,function(e){_.map(e.children,function(e){e.children=_.map(_.filter(t.community,function(t){return t.code.indexOf(e.code)>=0}),function(e){return{code:e.code,label:e.name,children:[]}})})}),_.map(n,function(e){_.map(e.children,function(e){_.map(e.children,function(e){e.children=_.map(_.filter(t.unit,function(t){return t.code.indexOf(e.code)>=0}),function(e){return{code:e.code,label:e.name}})})})});break;case 6:n=_.map(_.filter(t.street,function(e){return e.code.indexOf(o)>=0}),function(e){return{code:e.code,label:e.name,children:[]}}),_.map(n,function(e){e.children=_.map(_.filter(t.community,function(t){return t.code.indexOf(e.code)>=0}),function(e){return{code:e.code,label:e.name,children:[]}})}),_.map(n,function(e){_.map(e.children,function(e){e.children=_.map(_.filter(t.unit,function(t){return t.code.indexOf(e.code)>=0}),function(e){return{code:e.code,label:e.name}})})});break;case 9:n=_.map(_.filter(t.community,function(e){return e.code.indexOf(o)>=0}),function(e){return{code:e.code,label:e.name,children:[]}}),_.map(n,function(e){e.children=_.map(_.filter(t.unit,function(t){return t.code.indexOf(e.code)>=0}),function(e){return{code:e.code,label:e.name}})});break;case 12:n=_.map(_.filter(t.unit,function(e){return e.code.indexOf(o)>=0}),function(e){return{code:e.code,label:e.name}});break;default:break}a.children=n,e(a)})},requestDicCatalog:function(e){Object(a["a"])({url:"/buss/info/dictionary/catalog/findAll",method:"get"}).then(function(t){e(t)})},requestDicType:function(e,t){Object(a["a"])({url:"/buss/info/dictionary/findDicByCatalogId?catalogId="+e,method:"get"}).then(function(e){t(e)})},requestByEntityNames:function(e,t){Object(a["a"])({url:"/compre/statis/common/district?districtCode="+e.districtCode+"&entityNames="+e.entityNames,method:"get"}).then(function(e){t(e)})},requestByFieldName:function(e,t){Object(a["a"])({url:"/compre/statis/common/field?districtCode="+e.districtCode+"&entityName="+e.entityName+"&fieldName="+e.fieldName,method:"get"}).then(function(e){t(e)})},requestByEntityAndFieldSum:function(e,t){Object(a["a"])({url:"/compre/statis/common/district/field/sum?districtCode="+e.districtCode+"&entityName="+e.entityName+"&fieldName="+e.fieldName,method:"get"}).then(function(e){t(e)})},requestFocusPeople:function(e,t){Object(a["a"])({url:"/compre/hp/people/find/compreInfo?id="+e,method:"get"}).then(function(e){t(e)})},requestFocus:function(e,t){Object(a["a"])({url:"/compre/"+e.entity+"/find?id="+e.focusId,method:"get"}).then(function(e){t(e)})}};t["a"]=n},c226:function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"table-list-page"},[o("techo-list",{ref:"list",attrs:{title:e.title,header:e.header,data:e.data,isShowCode:e.isShowCode,disCodeOption:e.disCodeOption,recordCount:e.recordCount},on:{onAdd:e.handleAdd,onPageChange:e.handlePageChange,onDelete:e.handleDelete,onView:e.handleView,onEdit:e.handleEdit,onTreeNode:e.handleTreeNode}},[o("div",{attrs:{slot:"header"},slot:"header"},[o("el-row",{staticClass:"techo-list__header-row",attrs:{type:"flex",justify:"space-around"}},[o("el-col",{attrs:{span:10}},[o("span",{staticClass:"techo-list__header-col-txt-5"},[e._v("综治中心名称：")]),o("div",{staticClass:"techo-list__header-col-left-5"},[o("el-input",{staticClass:"techo-list__header-select-full",attrs:{placeholder:"请输入综治中心名称",maxlength:10,size:"small",clearable:""},model:{value:e.queryForm.name,callback:function(t){e.$set(e.queryForm,"name",t)},expression:"queryForm.name"}})],1)]),o("el-col",{attrs:{span:9}}),o("el-col",{staticClass:"techo-list__header-col-button",attrs:{span:5}},[o("el-button",{staticClass:"techo-list__header-button-reset",attrs:{size:"small"},on:{click:e.handleClear}},[e._v("清空")]),o("el-button",{staticClass:"techo-list__header-button-query",attrs:{size:"small"},on:{click:e.handleQuery}},[e._v("查询")])],1)],1)],1)]),e.dlgVisible?o("techo-details",{ref:"details",attrs:{configKey:e.configKey,title:e.title}}):e._e(),o("vAddDialog",{ref:"vAddDialog"})],1)},n=[],i=o("c93e"),r=o("6071"),c=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-dialog",{staticClass:"add-center-dialog",attrs:{title:e.title,visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t},close:e.resetForm}},[o("el-form",{ref:"dialogForm",attrs:{model:e.dialogForm,rules:e.teamRules,"label-width":"150px"}},[o("el-row",{attrs:{gutter:15}},[o("el-col",{attrs:{span:12}},[o("el-form-item",{attrs:{label:"综治中心名称",prop:"name"}},[o("el-input",{attrs:{placeholder:"请填写综治中心名称"},model:{value:e.dialogForm.name,callback:function(t){e.$set(e.dialogForm,"name",t)},expression:"dialogForm.name"}})],1),o("el-form-item",{attrs:{label:"综治中心层级",prop:"hierarchy"}},[o("el-select",{attrs:{placeholder:"请选择综治中心层级",clearable:""},model:{value:e.dialogForm.hierarchy,callback:function(t){e.$set(e.dialogForm,"hierarchy",t)},expression:"dialogForm.hierarchy"}},e._l(e.dic["机构层级"],function(e,t){return o("el-option",{key:t,attrs:{label:e.name,value:e.code}})}))],1),o("el-form-item",{attrs:{label:"负责人姓名",prop:"leaderName"}},[o("el-input",{attrs:{placeholder:"请填写负责人姓名"},model:{value:e.dialogForm.leaderName,callback:function(t){e.$set(e.dialogForm,"leaderName",t)},expression:"dialogForm.leaderName"}})],1),o("el-form-item",{attrs:{label:"所在地",prop:"locality"}},[o("el-select",{attrs:{placeholder:"请选择居住地",clearable:""},model:{value:e.dialogForm.locality,callback:function(t){e.$set(e.dialogForm,"locality",t)},expression:"dialogForm.locality"}},e._l(e.dic["行政区划"],function(e,t){return o("el-option",{key:t,attrs:{label:e.name,value:e.code}})}))],1)],1),o("el-col",{attrs:{span:12}},[o("el-form-item",{attrs:{label:"综治中心联系方式",prop:"contact"}},[o("el-input",{attrs:{placeholder:"请填写综治中心联系方式"},model:{value:e.dialogForm.contact,callback:function(t){e.$set(e.dialogForm,"contact",t)},expression:"dialogForm.contact"}})],1),o("el-form-item",{attrs:{label:"组成单位",prop:"module"}},[o("el-input",{attrs:{maxlength:400,placeholder:"请填写组成单位"},model:{value:e.dialogForm.module,callback:function(t){e.$set(e.dialogForm,"module",t)},expression:"dialogForm.module"}})],1),o("el-form-item",{attrs:{label:"负责人联系方式",prop:"leaderContact"}},[o("el-input",{attrs:{placeholder:"请填写负责人联系方式"},model:{value:e.dialogForm.leaderContact,callback:function(t){e.$set(e.dialogForm,"leaderContact",t)},expression:"dialogForm.leaderContact"}})],1),o("el-form-item",{attrs:{label:"所在地详址",prop:"localityDetail"}},[o("el-input",{attrs:{placeholder:"请填写所在地详址"},model:{value:e.dialogForm.localityDetail,callback:function(t){e.$set(e.dialogForm,"localityDetail",t)},expression:"dialogForm.localityDetail"}})],1)],1)],1)],1),o("techo-position",{ref:"position",attrs:{code:e.dialogForm.districtCode,placement:"right"},on:{formLonLat:e.getLonlat}}),o("div",{staticClass:"lon-lat"},[o("span",[e._v("经度：")]),o("span",[e._v(e._s(e.dialogForm.x))]),o("span",[e._v("经度：")]),o("span",[e._v(e._s(e.dialogForm.y))])]),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{type:"warning",size:"small"},on:{click:e.resetForm}},[e._v("取消")]),o("el-button",{attrs:{type:"success",size:"small"},on:{click:e.submitForm}},[e._v("保存")])],1)],1)},d=[],l=(o("7f7f"),o("ac6a"),{data:function(){return{dialogVisible:!1,isAdd:!0,title:"",dialogForm:{x:"",y:"",districtCode:"",locality:"610000",localityDetail:""},teamRules:{name:[{required:!0,message:"请输入综治中心名称",trigger:"blur"},{min:2,max:25,message:"长度在 2 到 25 个字符",trigger:"blur"}],contact:[{required:!0,message:"请输入综治中心联系方式",trigger:"blur"},util.validate.tellAndPhone()],hierarchy:[{required:!0,message:"请选择综治中心层级",trigger:"change"}],leaderName:[{required:!0,message:"请输入负责人姓名",trigger:"blur"},{min:2,max:12,message:"长度在 2 到 12 个字符",trigger:"blur"}],leaderContact:[{required:!0,message:"请输入负责人联系方式",trigger:"blur"},util.validate.tellAndPhone()],module:[{message:"请输入组成单位",trigger:"blur"}],locality:[{message:"请选择所在地",trigger:"change"}]},dic:{"机构层级":[],"行政区划":[]}}},created:function(){var e=this;r["a"].requestDicCatalog(function(t){var o=_.keys(e.dic);_.map(t,function(t){-1!=_.indexOf(o,t.name)&&r["a"].requestDicType(t.id,function(o){e.dic[t.name]=o})})})},watch:{"dialogForm.districtCode":{handler:function(e){var t=this;e&&r["a"].requestCodeByAddress(e,function(e){e.belongname?t.dialogForm.localityDetail=e.belongname+e.name:t.dialogForm.localityDetail="铜川市"})}},isAdd:function(e){var t=this;0==e&&this.$nextTick(function(){t.$refs["position"].addMarker({lng:t.dialogForm.x,lat:t.dialogForm.y})})}},methods:{getLonlat:function(e){this.dialogForm.x=e.lng,this.dialogForm.y=e.lat},submitForm:function(){var e=this;void 0==this.dialogForm.x||""==this.dialogForm.x?this.$popup.showNotification({type:"warning",message:"请选择地理位置！"}):this.$refs["dialogForm"].validate(function(t){if(!t)return console.log("error submit!!"),!1;var o=_.cloneDeep(e.dialogForm);o.dicMap&&delete o.dicMap,1==e.isAdd?r["a"].requestSaveCenter(o,function(t){e.$popup.showNotification({type:"success",message:"综治中心添加成功！"}),e.resetForm(),e.$parent.handleQuery()}):0==e.isAdd&&r["a"].requestUpdateCenter(o,function(t){e.$popup.showNotification({type:"success",message:"综治中心修改成功！"}),e.resetForm(),e.$parent.handleQuery()})})},resetForm:function(){this.$refs["dialogForm"].resetFields(),this.$data.dialogVisible=!1,this.isAdd=!0,this.$refs["position"].mapApi.clear(),this.$refs["position"].mapApi.mapOper.setFullExtent(),this.dialogForm={x:"",y:"",districtCode:"",locality:"610000",localityDetail:""}}}}),s=l,u=(o("e4f2"),o("2877")),m=Object(u["a"])(s,c,d,!1,null,null,null);m.options.__file="zz-center-add.vue";var p=m.exports,f={components:{vAddDialog:p},data:function(){return{title:"综治中心",header:{"综治中心名称":"name","综治中心联系方式":"contact","负责人姓名":"leaderName","负责人联系方式":"leaderContact","所在地详址":"localityDetail"},data:[],recordCount:0,queryForm:{name:"",districtCode:""},disCodeOption:[],isShowCode:["6102"],dlgVisible:!1,configKey:"center"}},mounted:function(){var e=this;r["a"].requestGridCode(function(t){e.disCodeOption=[t],e.isShowCode=[t.code],e.queryForm.districtCode=t.code})},watch:{queryForm:{handler:function(e,t){this.handleQuery()},deep:!0}},methods:{handleTreeNode:function(e){this.queryForm.districtCode=e.code},handleAdd:function(){this.$refs["vAddDialog"].dialogVisible=!0,this.$refs["vAddDialog"].isAdd=!0,this.$refs["vAddDialog"].title="添加"+this.title,this.$refs["vAddDialog"].dialogForm.districtCode=this.queryForm.districtCode},handleDelete:function(e){var t=this;this.$popup.showLoading("正在删除中，请稍候..."),new Promise(function(t,o){var a=0;_.map(e,function(o,n){r["a"].requestDeleteCenter(o.id,function(o){a++,a==e.length&&t()})})}).then(function(){t.$popup.showNotification({type:"success",message:"综治中心删除成功！"}),t.handleQuery(),t.$popup.closeLoading()}).catch(function(){t.$popup.showNotification({type:"warning",message:"综治中心删除失败！"}),t.$popup.closeLoading()})},handlePageChange:function(){this.data=[],this.handleQuery()},handleView:function(e,t){this.dlgVisible=!0,this.$nextTick(function(){this.$refs["details"].data=t,this.$refs["details"].visible=!0})},handleEdit:function(e,t){this.$refs["vAddDialog"].dialogVisible=!0,this.$refs["vAddDialog"].isAdd=!1,this.$refs["vAddDialog"].title="修改"+this.title,this.$refs["vAddDialog"].dialogForm=_.cloneDeep(t)},handleClear:function(){this.queryForm={name:"",districtCode:constants.REGION.CODE}},handleQuery:function(){var e=this,t=this.$refs["list"].getPageInfo();t=Object(i["a"])({},t,_.cloneDeep(this.queryForm)),r["a"].requestPageCenter(t,function(o){0!=o.totalCount&&0==o.list.length?(t.page=o.totalPage,r["a"].requestPageCenter(t,function(t){e.recordCount=t.totalCount,e.data=t.list})):(e.recordCount=o.totalCount,e.data=o.list)})}}},g=f,h=Object(u["a"])(g,a,n,!1,null,null,null);h.options.__file="zz-center-list.vue";t["default"]=h.exports},e4f2:function(e,t,o){"use strict";var a=o("6cc2"),n=o.n(a);n.a}}]);
//# sourceMappingURL=chunk-0bbc.47860fd3.js.map