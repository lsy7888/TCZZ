(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0136"],{1012:function(e,t,a){},4227:function(e,t,a){"use strict";a("7f7f");var o=a("c93e"),i=a("9bd2"),l=a("ba4a"),r=Object(o["a"])({},l["a"],{requestPageDistrictCheck:function(e,t){Object(i["a"])({url:"/compre/peace/check/findPage?name="+e.name+"&districtCode="+e.districtCode+"&page="+e.page+"&pageSize="+e.pageSize,method:"get"}).then(function(e){t(e)})},requestSaveDistrictCheck:function(e,t){Object(i["a"])({url:"/compre/peace/check/save",method:"post",data:e}).then(function(e){t(e)})},requestUpdateDistrictCheck:function(e,t){Object(i["a"])({url:"/compre/peace/check/update",method:"post",data:e}).then(function(e){t(e)})},requestDeleteDistrictCheck:function(e,t){Object(i["a"])({url:"/compre/peace/check/delete?id="+e,method:"post"}).then(function(e){t(e)})},requestPageCaseInfo:function(e,t){Object(i["a"])({url:"/compre/peace/mur/info/findPage?name="+e.name+"&districtCode="+e.districtCode+"&page="+e.page+"&pageSize="+e.pageSize,method:"get"}).then(function(e){t(e)})},requestCaseInfoByCode:function(e,t){Object(i["a"])({url:"/compre/peace/mur/info/findPage?&districtCode="+e,method:"get"}).then(function(e){t(e)})},requestAllCaseList:function(e){Object(i["a"])({url:"/compre/peace/mur/info/findAll",method:"get"}).then(function(t){e(t)})},requestSaveCaseInfo:function(e,t){Object(i["a"])({url:"/compre/peace/mur/info/save",method:"post",data:e}).then(function(e){t(e)})},requestUpdateCaseInfo:function(e,t){Object(i["a"])({url:"/compre/peace/mur/info/update",method:"post",data:e}).then(function(e){t(e)})},requestDeleteCaseInfo:function(e,t){Object(i["a"])({url:"/compre/peace/mur/info/delete?id="+e,method:"post"}).then(function(e){t(e)})},requestPageSuspect:function(e,t){Object(i["a"])({url:"/compre/peace/mur/suspect/findPage?name="+e.name+"&districtCode="+e.districtCode+"&page="+e.page+"&pageSize="+e.pageSize+"&murcaseId="+e.murcaseId,method:"get"}).then(function(e){t(e),c})},requestSaveSuspect:function(e,t){Object(i["a"])({url:"/compre/peace/mur/suspect/save",method:"post",data:e}).then(function(e){t(e)})},requestUpdateSuspect:function(e,t){Object(i["a"])({url:"/compre/peace/mur/suspect/update",method:"post",data:e}).then(function(e){t(e)})},requestDeleteSuspect:function(e,t){Object(i["a"])({url:"/compre/peace/mur/suspect/delete?id="+e,method:"post"}).then(function(e){t(e)})},requestPageVictim:function(e,t){Object(i["a"])({url:"/compre/peace/mur/victim/findPage?name="+e.name+"&murcaseId="+e.murcaseId+"&districtCode="+e.districtCode+"&page="+e.page+"&pageSize="+e.pageSize,method:"get"}).then(function(e){t(e)})},requestSaveVictim:function(e,t){Object(i["a"])({url:"/compre/peace/mur/victim/save",method:"post",data:e}).then(function(e){t(e)})},requestUpdateVictim:function(e,t){Object(i["a"])({url:"/compre/peace/mur/victim/update",method:"post",data:e}).then(function(e){t(e)})},requestDeleteVictim:function(e,t){Object(i["a"])({url:"/compre/peace/mur/victim/delete?id="+e,method:"post"}).then(function(e){t(e)})},requestPageLogisticsSafe:function(e,t){Object(i["a"])({url:"/compre/peace/safe/findPage?name="+e.name+"&districtCode="+e.districtCode+"&page="+e.page+"&pageSize="+e.pageSize,method:"get"}).then(function(e){t(e)})},requestSaveLogisticsSafe:function(e,t){Object(i["a"])({url:"/compre/peace/safe/save",method:"post",data:e}).then(function(e){t(e)})},requestUpdateLogisticsSafe:function(e,t){Object(i["a"])({url:"/compre/peace/safe/update",method:"post",data:e}).then(function(e){t(e)})},requestDeleteLogisticsSafe:function(e,t){Object(i["a"])({url:"/compre/peace/safe/delete?id="+e,method:"post"}).then(function(e){t(e)})},requestsTimeYear:function(e,t){Object(i["a"])({url:"/compre/peace/statis/mur/info/stimeYear?districtCode="+e,method:"get"}).then(function(e){t(e)})},requesteTimeYear:function(e,t){Object(i["a"])({url:"/compre/peace/statis/mur/info/stimeYear?districtCode="+e,method:"get"}).then(function(e){t(e)})}});t["a"]=r},"4ead":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"table-list-page"},[a("techo-list",{ref:"list",attrs:{title:e.title,header:e.header,data:e.data,isShowCode:e.isShowCode,recordCount:e.recordCount,disCodeOption:e.disCodeOption},on:{onAdd:e.handleAdd,onPageChange:e.handlePageChange,onDelete:e.handleDelete,onView:e.handleView,onEdit:e.handleEdit,onTreeNode:e.handleTreeNode}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("el-row",{staticClass:"techo-list__header-row",attrs:{type:"flex",justify:"space-around"}},[a("el-col",{attrs:{span:11}},[a("span",{staticClass:"techo-list__header-col-txt-4"},[e._v("姓名：")]),a("div",{staticClass:"techo-list__header-col-left-4"},[a("el-input",{staticClass:"techo-list__header-select-full",attrs:{placeholder:"请输入姓名",maxlength:10,size:"small",clearable:""},model:{value:e.queryForm.name,callback:function(t){e.$set(e.queryForm,"name",t)},expression:"queryForm.name"}})],1)]),a("el-col",{attrs:{span:9}},[a("span",{staticClass:"techo-list__header-col-txt-4"},[e._v("涉及命案：")]),a("div",{staticClass:"techo-list__header-col-left-4"},[a("el-select",{attrs:{placeholder:"请选择涉及命案",size:"small",clearable:"",filterable:""},model:{value:e.queryForm.murcaseId,callback:function(t){e.$set(e.queryForm,"murcaseId",t)},expression:"queryForm.murcaseId"}},e._l(e.caseListOption,function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.id}})}))],1)]),a("el-col",{staticClass:"techo-list__header-col-button",attrs:{span:5}},[a("el-button",{staticClass:"techo-list__header-button-reset",attrs:{size:"small"},on:{click:e.handleClear}},[e._v("清空")]),a("el-button",{staticClass:"techo-list__header-button-query",attrs:{size:"small"},on:{click:e.handleQuery}},[e._v("查询")])],1)],1)],1)]),e.dlgVisible?a("techo-details",{ref:"details",attrs:{configKey:e.configKey,height:"60%"}}):e._e(),a("vAddDialog",{ref:"vAddDialog"})],1)},i=[],l=a("c93e"),r=a("4227"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{staticClass:"add-dialog",attrs:{title:e.title,visible:e.dialogVisible,fullscreen:""},on:{"update:visible":function(t){e.dialogVisible=t},close:e.resetForm}},[a("el-form",{ref:"dialogForm",attrs:{model:e.dialogForm,rules:e.teamRules,"label-width":"120px"}},[a("el-row",{attrs:{gutter:15}},[a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"涉及命案",prop:"murcaseId"}},[a("el-select",{attrs:{placeholder:"请选择涉及命案",clearable:""},on:{change:e.handleChangeCode},model:{value:e.dialogForm.murcaseId,callback:function(t){e.$set(e.dialogForm,"murcaseId",t)},expression:"dialogForm.murcaseId"}},e._l(e.caseListOption,function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.id}})}))],1),a("el-form-item",{attrs:{label:"姓名",prop:"name"}},[a("el-input",{attrs:{placeholder:"请填写姓名"},model:{value:e.dialogForm.name,callback:function(t){e.$set(e.dialogForm,"name",t)},expression:"dialogForm.name"}})],1),a("el-form-item",{attrs:{label:"民族",prop:"nation"}},[a("el-select",{attrs:{placeholder:"请选择民族",clearable:""},model:{value:e.dialogForm.nation,callback:function(t){e.$set(e.dialogForm,"nation",t)},expression:"dialogForm.nation"}},e._l(e.dic["民族"],function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.code}})}))],1),a("el-form-item",{attrs:{label:"学历",prop:"education"}},[a("el-select",{attrs:{placeholder:"请选择学历",clearable:""},model:{value:e.dialogForm.education,callback:function(t){e.$set(e.dialogForm,"education",t)},expression:"dialogForm.education"}},e._l(e.dic["学历"],function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.code}})}))],1),a("el-form-item",{attrs:{label:"服务处所",prop:"servicePlace"}},[a("el-input",{attrs:{maxlength:25,placeholder:"请填写服务处所"},model:{value:e.dialogForm.servicePlace,callback:function(t){e.$set(e.dialogForm,"servicePlace",t)},expression:"dialogForm.servicePlace"}})],1)],1),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"命案编号",prop:"caseNo"}},[a("el-input",{attrs:{placeholder:"请输入命案编号"},model:{value:e.dialogForm.caseNo,callback:function(t){e.$set(e.dialogForm,"caseNo",t)},expression:"dialogForm.caseNo"}})],1),a("el-form-item",{attrs:{label:"证件类型",prop:"cardCode"}},[a("el-select",{attrs:{placeholder:"请选择证件类型",clearable:""},model:{value:e.dialogForm.cardCode,callback:function(t){e.$set(e.dialogForm,"cardCode",t)},expression:"dialogForm.cardCode"}},e._l(e.dic["证件代码"],function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.code}})}))],1),a("el-form-item",{attrs:{label:"性别",prop:"sex"}},[a("el-select",{attrs:{placeholder:"请选择性别",clearable:""},model:{value:e.dialogForm.sex,callback:function(t){e.$set(e.dialogForm,"sex",t)},expression:"dialogForm.sex"}},e._l(e.dic["性别"],function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.code}})}))],1),a("el-form-item",{attrs:{label:"籍贯",prop:"nativePlace"}},[a("el-select",{attrs:{placeholder:"请选择籍贯",clearable:""},model:{value:e.dialogForm.nativePlace,callback:function(t){e.$set(e.dialogForm,"nativePlace",t)},expression:"dialogForm.nativePlace"}},e._l(e.dic["行政区划"],function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.code}})}))],1),a("el-form-item",{attrs:{label:"宗教信仰",prop:"religiousBelief"}},[a("el-select",{attrs:{placeholder:"请选择宗教信仰",clearable:""},model:{value:e.dialogForm.religiousBelief,callback:function(t){e.$set(e.dialogForm,"religiousBelief",t)},expression:"dialogForm.religiousBelief"}},e._l(e.dic["宗教信仰"],function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.code}})}))],1)],1),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"证件号码",prop:"cardNumber"}},[a("el-input",{attrs:{placeholder:"请填写证件号码"},model:{value:e.dialogForm.cardNumber,callback:function(t){e.$set(e.dialogForm,"cardNumber",t)},expression:"dialogForm.cardNumber"}})],1),a("el-form-item",{attrs:{label:"出生日期",prop:"birthDate"}},[a("el-date-picker",{attrs:{type:"date",placeholder:"请选择日期"},model:{value:e.dialogForm.birthDate,callback:function(t){e.$set(e.dialogForm,"birthDate",t)},expression:"dialogForm.birthDate"}})],1),a("el-form-item",{attrs:{label:"婚姻状况",prop:"marriage"}},[a("el-select",{attrs:{placeholder:"请选择婚姻状况",clearable:""},model:{value:e.dialogForm.marriage,callback:function(t){e.$set(e.dialogForm,"marriage",t)},expression:"dialogForm.marriage"}},e._l(e.dic["婚姻状况"],function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.code}})}))],1),a("el-form-item",{attrs:{label:"职业类别",prop:"occupationType"}},[a("el-select",{attrs:{placeholder:"请选择职业类别",clearable:""},model:{value:e.dialogForm.occupationType,callback:function(t){e.$set(e.dialogForm,"occupationType",t)},expression:"dialogForm.occupationType"}},e._l(e.dic["职业类别"],function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.code}})}))],1),a("el-form-item",{attrs:{label:"是否为未成年人",prop:"isNonage"}},[a("el-radio-group",{model:{value:e.dialogForm.isNonage,callback:function(t){e.$set(e.dialogForm,"isNonage",t)},expression:"dialogForm.isNonage"}},[a("el-radio",{attrs:{label:1}},[e._v("是")]),a("el-radio",{attrs:{label:0}},[e._v("否")])],1)],1)],1),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"曾用名"}},[a("el-input",{attrs:{maxlength:12,placeholder:"请填写曾用名"},model:{value:e.dialogForm.oldName,callback:function(t){e.$set(e.dialogForm,"oldName",t)},expression:"dialogForm.oldName"}})],1),a("el-form-item",{attrs:{label:"国籍(地区)",prop:"nationality"}},[a("el-select",{attrs:{placeholder:"请选择国籍(地区)",clearable:""},model:{value:e.dialogForm.nationality,callback:function(t){e.$set(e.dialogForm,"nationality",t)},expression:"dialogForm.nationality"}},e._l(e.dic["国籍"],function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.code}})}))],1),a("el-form-item",{attrs:{label:"政治面貌",prop:"politicsStatus"}},[a("el-select",{attrs:{placeholder:"请选择政治面貌",clearable:""},model:{value:e.dialogForm.politicsStatus,callback:function(t){e.$set(e.dialogForm,"politicsStatus",t)},expression:"dialogForm.politicsStatus"}},e._l(e.dic["政治面貌"],function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.code}})}))],1),a("el-form-item",{attrs:{label:"职业",prop:"occupationDesc"}},[a("el-input",{attrs:{placeholder:"请填写职业"},model:{value:e.dialogForm.occupationDesc,callback:function(t){e.$set(e.dialogForm,"occupationDesc",t)},expression:"dialogForm.occupationDesc"}})],1),a("el-form-item",{attrs:{label:"是否为青少年",prop:"isTeenager"}},[a("el-radio-group",{model:{value:e.dialogForm.isTeenager,callback:function(t){e.$set(e.dialogForm,"isTeenager",t)},expression:"dialogForm.isTeenager"}},[a("el-radio",{attrs:{label:1}},[e._v("是")]),a("el-radio",{attrs:{label:0}},[e._v("否")])],1)],1)],1)],1),a("el-row",{attrs:{gutter:15}},[a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"是否为严重精神病患者",prop:"isInsanity","label-width":"160px"}},[a("el-radio-group",{model:{value:e.dialogForm.isInsanity,callback:function(t){e.$set(e.dialogForm,"isInsanity",t)},expression:"dialogForm.isInsanity"}},[a("el-radio",{attrs:{label:1}},[e._v("是")]),a("el-radio",{attrs:{label:0}},[e._v("否")])],1)],1)],1)],1),a("el-row",{attrs:{gutter:15}},[a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"户籍地",prop:"domicilePlace"}},[a("el-select",{attrs:{placeholder:"请选择户籍地",clearable:""},model:{value:e.dialogForm.domicilePlace,callback:function(t){e.$set(e.dialogForm,"domicilePlace",t)},expression:"dialogForm.domicilePlace"}},e._l(e.dic["行政区划"],function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.code}})}))],1),a("el-form-item",{attrs:{label:"居住地",prop:"livePlace"}},[a("el-select",{attrs:{placeholder:"请选择居住地",clearable:""},model:{value:e.dialogForm.livePlace,callback:function(t){e.$set(e.dialogForm,"livePlace",t)},expression:"dialogForm.livePlace"}},e._l(e.dic["行政区划"],function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.code}})}))],1)],1),a("el-col",{attrs:{span:18}},[a("el-form-item",{attrs:{label:"户籍地详细地址",prop:"domicilePlaceDatail"}},[a("el-input",{attrs:{placeholder:"请填写户籍地详细地址"},model:{value:e.dialogForm.domicilePlaceDatail,callback:function(t){e.$set(e.dialogForm,"domicilePlaceDatail",t)},expression:"dialogForm.domicilePlaceDatail"}})],1),a("el-form-item",{attrs:{label:"居住地详细地址",prop:"livePlaceDetail"}},[a("el-input",{attrs:{placeholder:"请填写居住地详细地址"},model:{value:e.dialogForm.livePlaceDetail,callback:function(t){e.$set(e.dialogForm,"livePlaceDetail",t)},expression:"dialogForm.livePlaceDetail"}})],1)],1)],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"warning",size:"small"},on:{click:e.resetForm}},[e._v("取消")]),a("el-button",{attrs:{type:"success",size:"small"},on:{click:e.submitForm}},[e._v("保存")])],1)],1)},c=[],s=(a("7514"),a("7f7f"),a("ac6a"),a("a322")),d={data:function(){var e;return{dialogVisible:!1,isAdd:!0,title:"",dic:(e={"证件代码":[],"性别":[],"国籍":[],"民族":[],"婚姻状况":[],"政治面貌":[],"学历":[],"宗教信仰":[],"职业类别":[]},Object(s["a"])(e,"职业类别",[]),Object(s["a"])(e,"行政区划",[]),e),caseListOption:[],disCodeOption:[],dialogForm:{isInsanity:0,isNonage:0,isTeenager:0,districtCode:"",nation:"01",cardCode:"111"},teamRules:{caseNo:[{required:!0,message:"请输入命案编号",trigger:"blur"}],cardCode:[{required:!0,message:"请选择证件类型",trigger:"change"}],cardNumber:[{required:!0,message:"请输入证件号码",trigger:"blur"},{min:2,max:30,message:"长度在 2 到 30 个字符",trigger:"blur"}],name:[{required:!0,message:"请输入姓名",trigger:"blur"},{min:2,max:20,message:"长度在 2 到 20 个字符",trigger:"blur"}],sex:[{required:!0,message:"请选择性别",trigger:"change"}],birthDate:[{required:!0,message:"请选择出生日期",trigger:"change"}],domicilePlace:[{required:!0,message:"请选择户籍地",trigger:"change"}]}}},created:function(){var e=this;r["a"].requestDicCatalog(function(t){var a=_.keys(e.dic);_.map(t,function(t){-1!=_.indexOf(a,t.name)&&r["a"].requestDicType(t.id,function(a){e.dic[t.name]=a})})})},watch:{"dialogForm.districtCode":{handler:function(e){var t=this;e&&r["a"].requestCodeByAddress(e,function(e){e.belongname?t.dialogForm.happenPlace=e.belongname+e.name:t.dialogForm.happenPlace="铜川市"})}}},methods:{handleChangeCode:function(e){if(e){var t=this.caseListOption.find(function(t){return t.id==e}).districtCode;this.dialogForm.districtCode=t}},submitForm:function(){var e=this;console.log(this.dialogForm),this.$refs["dialogForm"].validate(function(t){if(!t)return console.log("error submit!!"),!1;var a=_.cloneDeep(e.dialogForm);a.birthDate=util.time.formatDate(a.birthDate,"YYYY-MM-DD"),a.dicMap&&delete a.dicMap,1==e.isAdd?r["a"].requestSaveSuspect(a,function(t){e.$popup.showNotification({type:"success",message:"命案犯罪嫌疑人添加成功！"}),e.resetForm(),e.$parent.handleQuery()}):r["a"].requestUpdateSuspect(a,function(t){e.$popup.showNotification({type:"success",message:"命案犯罪嫌疑人修改成功！"}),e.resetForm(),e.$parent.handleQuery()})})},resetForm:function(){this.$refs["dialogForm"].resetFields(),this.$data.dialogVisible=!1,this.isAdd=!0,this.dialogForm={isInsanity:0,isNonage:0,isTeenager:0,districtCode:"",nation:"01",cardCode:"111"}}}},u=d,m=(a("5320"),a("2877")),p=Object(m["a"])(u,n,c,!1,null,null,null);p.options.__file="mur-suspect-add.vue";var f=p.exports,g={components:{vAddDialog:f},data:function(){return{title:"命案犯罪嫌疑人",caseListOption:[],disCodeOption:[],queryForm:{districtCode:"",name:"",murcaseId:""},header:{"命案Id":"murcaseId","命案编号":"caseNo","姓名":"name","性别":"dicMap.sex","出生日期":"birthDate","国籍/地区":"dicMap.nationality","籍贯":"dicMap.nativePlace","学历":"dicMap.education"},data:[],recordCount:0,isShowCode:["6102"],dlgVisible:!1,configKey:"suspect"}},mounted:function(){var e=this;r["a"].requestGridCode(function(t){e.disCodeOption=[t],e.isShowCode=[t.code],e.queryForm.districtCode=t.code}),r["a"].requestCaseInfoByCode(this.queryForm.districtCode,function(t){e.caseListOption=t.list})},watch:{queryForm:{handler:function(e,t){this.handleQuery()},deep:!0},"queryForm.districtCode":{handler:function(e){var t=this;r["a"].requestCaseInfoByCode(e,function(e){t.caseListOption=e.list})}}},methods:{handleTreeNode:function(e){this.queryForm.districtCode=e.code},handleAdd:function(){this.$refs["vAddDialog"].dialogVisible=!0,this.$refs["vAddDialog"].isAdd=!0,this.$refs["vAddDialog"].title="添加"+this.title,this.$refs["vAddDialog"].dialogForm.districtCode=this.queryForm.districtCode,this.$refs["vAddDialog"].caseListOption=this.caseListOption},handleDelete:function(e){var t=this;this.$popup.showLoading("正在删除中，请稍候..."),new Promise(function(t,a){var o=0;_.map(e,function(a,i){r["a"].requestDeleteSuspect(a.id,function(a){o==e.length-1&&t()})})}).then(function(){t.$popup.showNotification({type:"success",message:"命案犯罪嫌疑人删除成功！"}),t.handleQuery(),t.$popup.closeLoading()}).catch(function(){t.$popup.showNotification({type:"warning",message:"命案犯罪嫌疑人删除失败！"}),t.$popup.closeLoading()})},handlePageChange:function(){this.data=[],this.handleQuery()},handleView:function(e,t){this.dlgVisible=!0,this.$nextTick(function(){this.$refs["details"].data=t,this.$refs["details"].visible=!0})},handleEdit:function(e,t){this.$refs["vAddDialog"].dialogVisible=!0,this.$refs["vAddDialog"].isAdd=!1,this.$refs["vAddDialog"].title="修改"+this.title,this.$refs["vAddDialog"].dialogForm=_.cloneDeep(t)},handleClear:function(){this.queryForm={districtCode:constants.REGION.CODE,name:""}},handleQuery:function(){var e=this,t=this.$refs["list"].getPageInfo();t=Object(l["a"])({},t,_.cloneDeep(this.queryForm)),r["a"].requestPageSuspect(t,function(a){0!=a.totalCount&&0==a.list.length?(t.page=a.totalPage,r["a"].requestPageSuspect(t,function(t){e.recordCount=t.totalCount,_.map(t.list,function(e){e.dicMap&&(e.dicMap.isInsanity=1==e.isInsanity?"是":"否",e.dicMap.isNonage=1==e.isNonage?"是":"否",e.dicMap.isTeenager=1==e.isTeenager?"是":"否")}),e.data=t.list})):(e.recordCount=a.totalCount,_.map(a.list,function(e){e.dicMap&&(e.dicMap.isInsanity=1==e.isInsanity?"是":"否",e.dicMap.isNonage=1==e.isNonage?"是":"否",e.dicMap.isTeenager=1==e.isTeenager?"是":"否")}),e.data=a.list)})}}},h=g,b=Object(m["a"])(h,o,i,!1,null,null,null);b.options.__file="mur-suspect-list.vue";t["default"]=b.exports},5320:function(e,t,a){"use strict";var o=a("1012"),i=a.n(o);i.a},ba4a:function(e,t,a){"use strict";a("7f7f");var o=a("9bd2"),i={requestGridCode:function(e){Object(o["a"])({url:"/grid/rstu/find/all/code",method:"get"}).then(function(t){t.region=_.sortBy(t.region,"code");var a=constants.REGION.CODE,o={code:a,label:constants.REGION.NAME,children:[]},i={};switch(a&&a.length){case 4:i=_.map(t.region,function(e){return{code:e.code,label:e.name,children:[]}}),_.map(i,function(e){e.children=_.map(_.filter(t.street,function(t){return t.code.indexOf(e.code)>=0}),function(e){return{code:e.code,label:e.name,children:[]}})}),_.map(i,function(e){_.map(e.children,function(e){e.children=_.map(_.filter(t.community,function(t){return t.code.indexOf(e.code)>=0}),function(e){return{code:e.code,label:e.name,children:[]}})})}),_.map(i,function(e){_.map(e.children,function(e){_.map(e.children,function(e){e.children=_.map(_.filter(t.unit,function(t){return t.code.indexOf(e.code)>=0}),function(e){return{code:e.code,label:e.name}})})})});break;case 6:i=_.map(_.filter(t.street,function(e){return e.code.indexOf(a)>=0}),function(e){return{code:e.code,label:e.name,children:[]}}),_.map(i,function(e){e.children=_.map(_.filter(t.community,function(t){return t.code.indexOf(e.code)>=0}),function(e){return{code:e.code,label:e.name,children:[]}})}),_.map(i,function(e){_.map(e.children,function(e){e.children=_.map(_.filter(t.unit,function(t){return t.code.indexOf(e.code)>=0}),function(e){return{code:e.code,label:e.name}})})});break;case 9:i=_.map(_.filter(t.community,function(e){return e.code.indexOf(a)>=0}),function(e){return{code:e.code,label:e.name,children:[]}}),_.map(i,function(e){e.children=_.map(_.filter(t.unit,function(t){return t.code.indexOf(e.code)>=0}),function(e){return{code:e.code,label:e.name}})});break;case 12:i=_.map(_.filter(t.unit,function(e){return e.code.indexOf(a)>=0}),function(e){return{code:e.code,label:e.name}});break;default:break}o.children=i,e(o)})},requestDicCatalog:function(e){Object(o["a"])({url:"/buss/info/dictionary/catalog/findAll",method:"get"}).then(function(t){e(t)})},requestDicType:function(e,t){Object(o["a"])({url:"/buss/info/dictionary/findDicByCatalogId?catalogId="+e,method:"get"}).then(function(e){t(e)})},requestByEntityNames:function(e,t){Object(o["a"])({url:"/compre/statis/common/district?districtCode="+e.districtCode+"&entityNames="+e.entityNames,method:"get"}).then(function(e){t(e)})},requestByFieldName:function(e,t){Object(o["a"])({url:"/compre/statis/common/field?districtCode="+e.districtCode+"&entityName="+e.entityName+"&fieldName="+e.fieldName,method:"get"}).then(function(e){t(e)})},requestByEntityAndFieldSum:function(e,t){Object(o["a"])({url:"/compre/statis/common/district/field/sum?districtCode="+e.districtCode+"&entityName="+e.entityName+"&fieldName="+e.fieldName,method:"get"}).then(function(e){t(e)})},requestFocusPeople:function(e,t){Object(o["a"])({url:"/compre/hp/people/find/compreInfo?id="+e,method:"get"}).then(function(e){t(e)})},requestFocus:function(e,t){Object(o["a"])({url:"/compre/"+e.entity+"/find?id="+e.focusId,method:"get"}).then(function(e){t(e)})}};t["a"]=i}}]);
//# sourceMappingURL=chunk-0136.d7d05b33.js.map