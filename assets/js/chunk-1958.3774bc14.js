(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1958"],{"2e74":function(e,t,o){"use strict";o("7f7f");var a=o("c93e"),l=o("9bd2"),n=o("ba4a"),i=Object(a["a"])({},n["a"],{requestSavePeopleInfo:function(e,t){Object(l["a"])({url:"/compre/hp/people/save",method:"post",data:e}).then(function(e){t(e)})},requestUpdatePeopleInfo:function(e,t){Object(l["a"])({url:"/compre/hp/people/update",method:"post",data:e}).then(function(e){t(e)})},requestBasePeople:function(e,t){Object(l["a"])({url:"/compre/hp/people/find?id="+e,method:"get"}).then(function(e){t(e)})},requestPageHousePeople:function(e,t){Object(l["a"])({url:"/compre/hp/people/house/findPage?name="+e.name+"&houseId="+e.houseId+"&districtCode="+e.districtCode+"&page="+e.page+"&pageSize="+e.pageSize,method:"get"}).then(function(e){t(e)})},requestSaveHousePeople:function(e,t){Object(l["a"])({url:"/compre/hp/people/house/save",method:"post",data:e}).then(function(e){t(e)})},requestUpdateHousePeople:function(e,t){Object(l["a"])({url:"/compre/hp/people/house/update",method:"post",data:e}).then(function(e){t(e)})},requestDeleteHousePeople:function(e,t){Object(l["a"])({url:"/compre/hp/people/house/delete?id="+e,method:"post"}).then(function(e){t(e)})},requestPageFlowPeople:function(e,t){Object(l["a"])({url:"/compre/hp/people/flow/findPage?name="+e.name+"&districtCode="+e.districtCode+"&page="+e.page+"&pageSize="+e.pageSize,method:"get"}).then(function(e){t(e)})},requestSaveFlowPeople:function(e,t){Object(l["a"])({url:"/compre/hp/people/flow/save",method:"post",data:e}).then(function(e){t(e)})},requestUpdateFlowPeople:function(e,t){Object(l["a"])({url:"/compre/hp/people/flow/update",method:"post",data:e}).then(function(e){t(e)})},requestDeleteFlowPeople:function(e,t){Object(l["a"])({url:"/compre/hp/people/flow/delete?id="+e,method:"post"}).then(function(e){t(e)})},requestPageRearPeople:function(e,t){Object(l["a"])({url:"/compre/hp/people/rear/findPage?name="+e.name+"&districtCode="+e.districtCode+"&page="+e.page+"&pageSize="+e.pageSize,method:"get"}).then(function(e){t(e)})},requestSaveRearPeople:function(e,t){Object(l["a"])({url:"/compre/hp/people/rear/save",method:"post",data:e}).then(function(e){t(e)})},requestUpdateRearPeople:function(e,t){Object(l["a"])({url:"/compre/hp/people/rear/update",method:"post",data:e}).then(function(e){t(e)})},requestDeleteRearPeople:function(e,t){Object(l["a"])({url:"/compre/hp/people/rear/delete?id="+e,method:"post"}).then(function(e){t(e)})},requestPageOverseasPeople:function(e,t){var o="/compre/hp/people/overseas/findPage?districtCode="+e.districtCode+"&page="+e.page+"&pageSize="+e.pageSize;""!=e.chinessName&&(o+="&chinessName="+e.chinessName),Object(l["a"])({url:o,method:"get"}).then(function(e){t(e)})},requestSaveOverseasPeople:function(e,t){Object(l["a"])({url:"/compre/hp/people/overseas/save",method:"post",data:e}).then(function(e){t(e)})},requestUpdateOverseasPeople:function(e,t){Object(l["a"])({url:"/compre/hp/people/overseas/update",method:"post",data:e}).then(function(e){t(e)})},requestDeleteOverseasPeople:function(e,t){Object(l["a"])({url:"/compre/hp/people/overseas/delete?id="+e,method:"post"}).then(function(e){t(e)})},requestPageRentalHouse:function(e,t){Object(l["a"])({url:"/compre/hp/rentalhouse/findPage?landlordName="+e.name+"&districtCode="+e.districtCode+"&page="+e.page+"&pageSize="+e.pageSize,method:"get"}).then(function(e){t(e)})},requestSaveRentalHouse:function(e,t){Object(l["a"])({url:"/compre/hp/rentalhouse/save",method:"post",data:e}).then(function(e){t(e)})},requestUpdateRentalHouse:function(e,t){Object(l["a"])({url:"/compre/hp/rentalhouse/update",method:"post",data:e}).then(function(e){t(e)})},requestDeleteRentalHouse:function(e,t){Object(l["a"])({url:"/compre/hp/rentalhouse/delete?id="+e,method:"post"}).then(function(e){t(e)})},requestUpdateHouse:function(e,t){Object(l["a"])({url:"/compre/hp/house/update",method:"post",data:e}).then(function(e){t(e)})}});t["a"]=i},"82db":function(e,t,o){},ba4a:function(e,t,o){"use strict";o("7f7f");var a=o("9bd2"),l={requestGridCode:function(e){Object(a["a"])({url:"/grid/rstu/find/all/code",method:"get"}).then(function(t){t.region=_.sortBy(t.region,"code");var o=constants.REGION.CODE,a={code:o,label:constants.REGION.NAME,children:[]},l={};switch(o&&o.length){case 4:l=_.map(t.region,function(e){return{code:e.code,label:e.name,children:[]}}),_.map(l,function(e){e.children=_.map(_.filter(t.street,function(t){return t.code.indexOf(e.code)>=0}),function(e){return{code:e.code,label:e.name,children:[]}})}),_.map(l,function(e){_.map(e.children,function(e){e.children=_.map(_.filter(t.community,function(t){return t.code.indexOf(e.code)>=0}),function(e){return{code:e.code,label:e.name,children:[]}})})}),_.map(l,function(e){_.map(e.children,function(e){_.map(e.children,function(e){e.children=_.map(_.filter(t.unit,function(t){return t.code.indexOf(e.code)>=0}),function(e){return{code:e.code,label:e.name}})})})});break;case 6:l=_.map(_.filter(t.street,function(e){return e.code.indexOf(o)>=0}),function(e){return{code:e.code,label:e.name,children:[]}}),_.map(l,function(e){e.children=_.map(_.filter(t.community,function(t){return t.code.indexOf(e.code)>=0}),function(e){return{code:e.code,label:e.name,children:[]}})}),_.map(l,function(e){_.map(e.children,function(e){e.children=_.map(_.filter(t.unit,function(t){return t.code.indexOf(e.code)>=0}),function(e){return{code:e.code,label:e.name}})})});break;case 9:l=_.map(_.filter(t.community,function(e){return e.code.indexOf(o)>=0}),function(e){return{code:e.code,label:e.name,children:[]}}),_.map(l,function(e){e.children=_.map(_.filter(t.unit,function(t){return t.code.indexOf(e.code)>=0}),function(e){return{code:e.code,label:e.name}})});break;case 12:l=_.map(_.filter(t.unit,function(e){return e.code.indexOf(o)>=0}),function(e){return{code:e.code,label:e.name}});break;default:break}a.children=l,e(a)})},requestDicCatalog:function(e){Object(a["a"])({url:"/buss/info/dictionary/catalog/findAll",method:"get"}).then(function(t){e(t)})},requestDicType:function(e,t){Object(a["a"])({url:"/buss/info/dictionary/findDicByCatalogId?catalogId="+e,method:"get"}).then(function(e){t(e)})},requestByEntityNames:function(e,t){Object(a["a"])({url:"/compre/statis/common/district?districtCode="+e.districtCode+"&entityNames="+e.entityNames,method:"get"}).then(function(e){t(e)})},requestByFieldName:function(e,t){Object(a["a"])({url:"/compre/statis/common/field?districtCode="+e.districtCode+"&entityName="+e.entityName+"&fieldName="+e.fieldName,method:"get"}).then(function(e){t(e)})},requestByEntityAndFieldSum:function(e,t){Object(a["a"])({url:"/compre/statis/common/district/field/sum?districtCode="+e.districtCode+"&entityName="+e.entityName+"&fieldName="+e.fieldName,method:"get"}).then(function(e){t(e)})},requestFocusPeople:function(e,t){Object(a["a"])({url:"/compre/hp/people/find/compreInfo?id="+e,method:"get"}).then(function(e){t(e)})},requestFocus:function(e,t){Object(a["a"])({url:"/compre/"+e.entity+"/find?id="+e.focusId,method:"get"}).then(function(e){t(e)})}};t["a"]=l},bc9b:function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"table-list-page"},[o("techo-list",{ref:"list",attrs:{title:e.title,header:e.header,data:e.data,isShowCode:e.isShowCode,disCodeOption:e.disCodeOption,recordCount:e.recordCount},on:{onAdd:e.handleAdd,onPageChange:e.handlePageChange,onDelete:e.handleDelete,onView:e.handleView,onEdit:e.handleEdit,onTreeNode:e.handleTreeNode}},[o("div",{attrs:{slot:"header"},slot:"header"},[o("el-row",{staticClass:"techo-list__header-row",attrs:{type:"flex",justify:"space-around"}},[o("el-col",{attrs:{span:10}},[o("span",{staticClass:"techo-list__header-col-txt-4"},[e._v("房主姓名：")]),o("div",{staticClass:"techo-list__header-col-left-4"},[o("el-input",{staticClass:"techo-list__header-select-full",attrs:{placeholder:"请输入房主姓名",maxlength:10,size:"small",clearable:""},model:{value:e.queryForm.name,callback:function(t){e.$set(e.queryForm,"name",t)},expression:"queryForm.name"}})],1)]),o("el-col",{attrs:{span:9}}),o("el-col",{staticClass:"techo-list__header-col-button",attrs:{span:5}},[o("el-button",{staticClass:"techo-list__header-button-reset",attrs:{size:"small"},on:{click:e.handleClear}},[e._v("清空")]),o("el-button",{staticClass:"techo-list__header-button-query",attrs:{size:"small"},on:{click:e.handleQuery}},[e._v("查询")])],1)],1)],1)]),e.dlgVisible?o("techo-details",{ref:"details",attrs:{configKey:e.configKey,height:"60%",title:e.title}}):e._e(),o("vAddDialog",{ref:"vAddDialog",attrs:{disCodeOption:e.disCodeOption}})],1)},l=[],n=o("c93e"),i=o("2e74"),r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-dialog",{staticClass:"add-dialog",attrs:{title:e.title,visible:e.dialogVisible,fullscreen:"",modal:!1},on:{"update:visible":function(t){e.dialogVisible=t},close:e.resetForm}},[o("el-form",{ref:"dialogForm",attrs:{model:e.dialogForm,rules:e.teamRules,"label-width":"120px"}},[o("el-row",{attrs:{gutter:15}},[o("el-col",{attrs:{span:8}},[o("el-form-item",{attrs:{prop:"houseId"}},[o("el-popover",{attrs:{placement:"right",width:"400",trigger:"click"},model:{value:e.showPopover,callback:function(t){e.showPopover=t},expression:"showPopover"}},[o("techo-house",{ref:"vCheckedHouse",attrs:{isShowHouse:!0,butName:"确定",disCodeOption:e.disCodeOption,buildOptions:e.buildOptions,houseOptions:e.houseOptions},on:{onRelaData:e.handleCheckedHouse,onQueryBuild:e.handleQueryBuildList,onQueryHouse:e.handleQueryHouseList}}),o("el-button",{staticClass:"check-house",attrs:{slot:"reference",type:"danger",size:"small"},slot:"reference"},[e._v("请选择房屋")])],1)],1)],1),o("el-col",{attrs:{span:16}},[o("el-form-item",{attrs:{label:"房屋地址"}},[o("el-input",{attrs:{disabled:"",placeholder:"请填写房屋地址"},model:{value:e.dialogForm.address,callback:function(t){e.$set(e.dialogForm,"address",t)},expression:"dialogForm.address"}})],1)],1)],1),o("el-row",{attrs:{gutter:15}},[o("el-col",{attrs:{span:8}},[o("el-form-item",{attrs:{label:"出租用途",prop:"leaseUse"}},[o("el-select",{attrs:{placeholder:"请选择出租用途",clearable:""},model:{value:e.dialogForm.leaseUse,callback:function(t){e.$set(e.dialogForm,"leaseUse",t)},expression:"dialogForm.leaseUse"}},e._l(e.dic["出租用途"],function(e,t){return o("el-option",{key:t,attrs:{label:e.name,value:e.code}})}))],1),o("el-form-item",{attrs:{label:"隐患类型"}},[o("el-select",{attrs:{placeholder:"请选择隐患类型",clearable:""},model:{value:e.dialogForm.dangerType,callback:function(t){e.$set(e.dialogForm,"dangerType",t)},expression:"dialogForm.dangerType"}},e._l(e.dic["隐患类型"],function(e,t){return o("el-option",{key:t,attrs:{label:e.name,value:e.code}})}))],1)],1),o("el-col",{attrs:{span:8}},[o("el-form-item",{attrs:{label:"户号"}},[o("el-input",{attrs:{disabled:"",placeholder:"请填写户号"},model:{value:e.dialogForm.code,callback:function(t){e.$set(e.dialogForm,"code",t)},expression:"dialogForm.code"}})],1),o("el-form-item",{attrs:{label:"建筑面积",prop:"buildingArea"}},[o("el-input",{attrs:{maxlength:8,placeholder:"请填写建筑面积"},model:{value:e.dialogForm.buildingArea,callback:function(t){e.$set(e.dialogForm,"buildingArea",t)},expression:"dialogForm.buildingArea"}})],1)],1),o("el-col",{attrs:{span:8}},[o("el-form-item",{attrs:{label:"建筑用途"}},[o("el-select",{attrs:{placeholder:"请选择建筑用途",clearable:""},model:{value:e.dialogForm.useful,callback:function(t){e.$set(e.dialogForm,"useful",t)},expression:"dialogForm.useful"}},e._l(e.dic["建筑用途"],function(e,t){return o("el-option",{key:t,attrs:{label:e.name,value:e.code}})}))],1)],1)],1),o("div",{staticClass:"cut-apart-line"}),o("el-row",{attrs:{gutter:15}},[o("el-col",{attrs:{span:8}},[o("el-form-item",{attrs:{label:"房主姓名"}},[o("el-input",{attrs:{disabled:"",placeholder:"请填写房主姓名"},model:{value:e.dialogForm.landlordName,callback:function(t){e.$set(e.dialogForm,"landlordName",t)},expression:"dialogForm.landlordName"}})],1),o("el-form-item",{attrs:{label:"证件类型"}},[o("el-select",{attrs:{placeholder:"请选择证件类型",clearable:""},model:{value:e.dialogForm.idcode,callback:function(t){e.$set(e.dialogForm,"idcode",t)},expression:"dialogForm.idcode"}},e._l(e.dic["证件代码"],function(e,t){return o("el-option",{key:t,attrs:{label:e.name,value:e.code}})}))],1)],1),o("el-col",{attrs:{span:8}},[o("el-form-item",{attrs:{label:"房主电话",prop:"landlordContact"}},[o("el-input",{attrs:{maxlength:18,placeholder:"请填写房主电话"},model:{value:e.dialogForm.landlordContact,callback:function(t){e.$set(e.dialogForm,"landlordContact",t)},expression:"dialogForm.landlordContact"}})],1),o("el-form-item",{attrs:{label:"证件号码"}},[o("el-input",{attrs:{maxlength:18,placeholder:"请填写证件号码"},model:{value:e.dialogForm.cardnumber,callback:function(t){e.$set(e.dialogForm,"cardnumber",t)},expression:"dialogForm.cardnumber"}})],1)],1),o("el-col",{attrs:{span:8}},[o("el-form-item",{attrs:{label:"房主现住地"}},[o("el-input",{attrs:{placeholder:"请填写房主现住地"},model:{value:e.dialogForm.landlordAddress,callback:function(t){e.$set(e.dialogForm,"landlordAddress",t)},expression:"dialogForm.landlordAddress"}})],1)],1)],1),o("div",{staticClass:"cut-apart-line"}),o("el-row",{attrs:{gutter:15}},[o("el-col",{attrs:{span:8}},[o("el-form-item",{attrs:{label:"承租人姓名",prop:"lesseeName"}},[o("el-input",{attrs:{maxlength:18,placeholder:"请填写承租人姓名"},model:{value:e.dialogForm.lesseeName,callback:function(t){e.$set(e.dialogForm,"lesseeName",t)},expression:"dialogForm.lesseeName"}})],1)],1),o("el-col",{attrs:{span:8}},[o("el-form-item",{attrs:{label:"承租人电话",prop:"lesseeContact"}},[o("el-input",{attrs:{maxlength:18,placeholder:"请填写承租人电话"},model:{value:e.dialogForm.lesseeContact,callback:function(t){e.$set(e.dialogForm,"lesseeContact",t)},expression:"dialogForm.lesseeContact"}})],1)],1),o("el-col",{attrs:{span:8}},[o("el-form-item",{attrs:{label:"承租人身份证号",prop:"lesseeCardnumber"}},[o("el-input",{attrs:{maxlength:18,placeholder:"请填写承租人身份证号"},model:{value:e.dialogForm.lesseeCardnumber,callback:function(t){e.$set(e.dialogForm,"lesseeCardnumber",t)},expression:"dialogForm.lesseeCardnumber"}})],1)],1)],1)],1),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{type:"warning",size:"small"},on:{click:e.resetForm}},[e._v("取消")]),o("el-button",{attrs:{type:"success",size:"small"},on:{click:e.submitForm}},[e._v("保存")])],1)],1)},s=[],d=(o("7514"),o("7f7f"),o("ac6a"),{props:{disCodeOption:{type:Array,default:function(){return[]}}},data:function(){return{dialogVisible:!1,isAdd:!0,title:"",buildOptions:[],houseOptions:[],showPopover:!1,dic:{"建筑用途":[],"证件代码":[],"出租用途":[],"隐患类型":[],"行政区划":[]},dialogForm:{dangerType:"00",houseId:"",code:"",landlordName:"",landlordContact:"",landlordAddress:"陕西省铜川市",idcode:"111"},teamRules:{houseId:[{required:!0,message:"请选择房屋",trigger:"change"}],landlordContact:[{required:!0,message:"请输入户主电话",trigger:"blur"},util.validate.tellAndPhone()],leaseUse:[{required:!0,message:"请选择出租用途",trigger:"change"}],lesseeCardnumber:[{required:!0,message:"请输入房主现住地",trigger:"blur"},util.validate.isIDCard()],lesseeName:[{required:!0,message:"请输入承租人姓名",trigger:"blur"},{min:2,max:12,message:"长度在 2 到 10 个字符",trigger:"blur"}],lesseeContact:[{required:!0,message:"请输入承租人电话",trigger:"blur"},util.validate.tellAndPhone()],buildingArea:[util.validate.valiInteger()]}}},created:function(){var e=this;i["a"].requestDicCatalog(function(t){var o=_.keys(e.dic);_.map(t,function(t){-1!=_.indexOf(o,t.name)&&i["a"].requestDicType(t.id,function(o){e.dic[t.name]=o})})})},methods:{handleCheckedHouse:function(e,t){var o=this;this.dialogForm.districtCode=t.districtCode;var a=_.find(this.houseOptions,function(t){return t.id==e.houseId});i["a"].requestCodeByAddress(t.districtCode,function(e){o.dialogForm.address="陕西省"+e.belongname+e.name+a.name,o.showPopover=!1}),this.dialogForm.houseId=a.id,this.dialogForm.code=a.houseNum,this.dialogForm.landlordName=a.householderName,this.dialogForm.landlordContact=a.householderPhone,this.$refs["dialogForm"].clearValidate("houseId")},handleQueryBuildList:function(e){var t=this;this.buildOptions=[],this.houseOptions=[],void 0!=e&&i["a"].requestCodeByBuild(e,function(e){t.buildOptions=e.list})},handleQueryHouseList:function(e){var t=this;this.houseOptions=[],""!=e.buildingId&&i["a"].requestBuildByHouse(e,function(e){t.houseOptions=e.list})},submitForm:function(){var e=this;this.$refs["dialogForm"].validate(function(t){if(!t)return console.log("error submit!!"),!1;var o=_.cloneDeep(e.dialogForm);o.dicMap&&delete o.dicMap,1==e.isAdd?i["a"].requestSaveRentalHouse(o,function(t){e.$popup.showNotification({type:"success",message:"出租房屋信息添加成功！"}),e.resetForm(),e.$parent.handleQuery()}):0==e.isAdd&&i["a"].requestUpdateRentalHouse(o,function(t){e.$popup.showNotification({type:"success",message:"出租房屋信息修改成功！"}),e.resetForm(),e.$parent.handleQuery()})})},resetForm:function(){this.$refs["dialogForm"].resetFields(),this.$refs["vCheckedHouse"].resetForm(),this.$data.dialogVisible=!1,this.showPopover=!1,this.isAdd=!0,this.dialogForm={dangerType:"00",houseId:"",code:"",landlordName:"",landlordContact:"",landlordAddress:"陕西省铜川市",idcode:"111"}}}}),c=d,u=(o("fe87"),o("2877")),p=Object(u["a"])(c,r,s,!1,null,null,null);p.options.__file="rental-house-add.vue";var m=p.exports,h={components:{vAddDialog:m},data:function(){return{title:"房屋信息",queryForm:{districtCode:"",name:""},header:{"房屋地址":"address","房主姓名":"landlordName","房主电话":"landlordContact","房主现居地":"landlordAddress","承租人身份证号":"lesseeCardnumber","承租人姓名":"lesseeName","承租人电话":"lesseeContact"},data:[],recordCount:0,disCodeOption:[],isShowCode:["6102"],dlgVisible:!1,configKey:"rentalHouse"}},mounted:function(){var e=this;i["a"].requestGridCode(function(t){e.disCodeOption=[t],e.isShowCode=[t.code],e.queryForm.districtCode=t.code})},watch:{queryForm:{handler:function(e,t){this.handleQuery()},deep:!0}},methods:{handleTreeNode:function(e){this.queryForm.districtCode=e.code},handleAdd:function(){this.$refs["vAddDialog"].dialogVisible=!0,this.$refs["vAddDialog"].isAdd=!0,this.$refs["vAddDialog"].title="添加"+this.title,this.$refs["vAddDialog"].dialogForm.districtCode=this.queryForm.districtCode},handleDelete:function(e){var t=this;this.$popup.showLoading("正在删除中，请稍候..."),new Promise(function(t,o){var a=0;_.map(e,function(o,l){i["a"].requestDeleteRentalHouse(o.id,function(o){a++,a==e.length&&t()})})}).then(function(){t.$popup.showNotification({type:"success",message:"出租房屋信息删除成功！"}),t.handleQuery(),t.$popup.closeLoading()}).catch(function(){t.$popup.showNotification({type:"warning",message:"出租房屋信息删除失败！"}),t.$popup.closeLoading()})},handlePageChange:function(){this.data=[],this.handleQuery()},handleView:function(e,t){this.dlgVisible=!0,this.$nextTick(function(){this.$refs["details"].data=t,this.$refs["details"].visible=!0})},handleEdit:function(e,t){this.$refs["vAddDialog"].dialogVisible=!0,this.$refs["vAddDialog"].isAdd=!1,this.$refs["vAddDialog"].title="修改"+this.title,this.$refs["vAddDialog"].dialogForm=_.cloneDeep(t)},handleClear:function(){this.queryForm={districtCode:constants.REGION.CODE,name:""}},handleQuery:function(){var e=this,t=this.$refs["list"].getPageInfo();t=Object(n["a"])({},t,_.cloneDeep(this.queryForm)),i["a"].requestPageRentalHouse(t,function(o){0!=o.totalCount&&0==o.list.length?(t.page=o.totalPage,i["a"].requestPageRentalHouse(t,function(t){e.recordCount=t.totalCount,e.data=t.list})):(e.recordCount=o.totalCount,e.data=o.list)})}}},f=h,g=Object(u["a"])(f,a,l,!1,null,null,null);g.options.__file="rental-house-list.vue";t["default"]=g.exports},fe87:function(e,t,o){"use strict";var a=o("82db"),l=o.n(a);l.a}}]);
//# sourceMappingURL=chunk-1958.3774bc14.js.map