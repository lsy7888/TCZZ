(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-47ca"],{"02be":function(e,t,i){},"17d0":function(e,t,i){"use strict";var o=i("02be"),a=i.n(o);a.a},"72e9":function(e,t,i){e.exports=i.p+"assets/img/photo.c944b596.jpg"},"897d":function(e,t,i){"use strict";var o=i("b8d9"),a=i.n(o);a.a},a190:function(e,t,i){"use strict";i.r(t);var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"table-list-page"},[i("techo-list",{ref:"list",attrs:{title:e.title,header:e.header,data:e.data,isShowCode:e.isShowCode,recordCount:e.recordCount,disCodeOption:e.disCodeOption},on:{onAdd:e.handleAdd,onPageChange:e.handlePageChange,onDelete:e.handleDelete,onView:e.handleView,onEdit:e.handleEdit,onTreeNode:e.handleTreeNode}},[i("div",{attrs:{slot:"header"},slot:"header"},[i("el-row",{staticClass:"techo-list__header-row",attrs:{type:"flex",justify:"space-around"}},[i("el-col",{attrs:{span:10}},[i("span",{staticClass:"techo-list__header-col-txt-4"},[e._v("姓名：")]),i("div",{staticClass:"techo-list__header-col-left-4"},[i("el-input",{staticClass:"techo-list__header-select-full",attrs:{placeholder:"请输入姓名",maxlength:10,size:"small",clearable:""},model:{value:e.queryForm.name,callback:function(t){e.$set(e.queryForm,"name",t)},expression:"queryForm.name"}})],1)]),i("el-col",{attrs:{span:9}}),i("el-col",{staticClass:"techo-list__header-col-button",attrs:{span:5}},[i("el-button",{staticClass:"techo-list__header-button-reset",attrs:{size:"small"},on:{click:e.handleClear}},[e._v("清空")]),i("el-button",{staticClass:"techo-list__header-button-query",attrs:{size:"small"},on:{click:e.handleQuery}},[e._v("查询")])],1)],1)],1)]),i("vViewDialog",{ref:"vViewDialog",attrs:{height:"80%",width:"80%",layout:e.layout,title:e.title}}),i("vAddDialog",{ref:"vAddDialog",attrs:{disCodeOption:e.disCodeOption}})],1)},a=[],s=i("c93e"),l=i("2e74"),n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-dialog",{staticClass:"add-dialog",attrs:{title:e.title,visible:e.dialogVisible,fullscreen:"",modal:!1},on:{"update:visible":function(t){e.dialogVisible=t},close:e.resetForm}},[i("el-tabs",{model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[i("el-tab-pane",{attrs:{label:"基础信息",name:"first"}},[i("techo-people",{ref:"vBaseForm",attrs:{isAdd:e.isAdd,dic:e.dic},on:{onBasePeople:e.handleQueryBasePeople,onPosition:e.handlePosition}})],1),i("el-tab-pane",{attrs:{label:"位置信息",name:"second"}},[i("vPeoplePosition",{ref:"vPeoplePosition",attrs:{xingzhengqu:e.dic["行政区划"],disCodeOption:e.disCodeOption,isAdd:e.isAdd}})],1),i("el-tab-pane",{attrs:{label:"户籍信息",name:"third"}},[i("el-form",{ref:"dialogForm",attrs:{model:e.dialogForm,rules:e.teamRules,"label-width":"120px"}},[i("el-row",{attrs:{gutter:15}},[i("el-col",{attrs:{span:8}},[i("el-form-item",{attrs:{label:"户号"}},[i("el-input",{attrs:{disabled:"",placeholder:"请填写户号"},model:{value:e.dialogForm.houseNumber,callback:function(t){e.$set(e.dialogForm,"houseNumber",t)},expression:"dialogForm.houseNumber"}})],1),i("el-form-item",{attrs:{label:"人户一致标识",prop:"householdAgreementSign"}},[i("el-select",{attrs:{placeholder:"请选择人户一致标识",clearable:""},model:{value:e.dialogForm.householdAgreementSign,callback:function(t){e.$set(e.dialogForm,"householdAgreementSign",t)},expression:"dialogForm.householdAgreementSign"}},e._l(e.dic["人户一致"],function(e,t){return i("el-option",{key:t,attrs:{label:e.name,value:e.code}})}))],1)],1),i("el-col",{attrs:{span:8}},[i("el-form-item",{attrs:{label:"户主姓名"}},[i("el-input",{attrs:{disabled:"",maxlength:12,placeholder:"请填写户主姓名"},model:{value:e.dialogForm.householdName,callback:function(t){e.$set(e.dialogForm,"householdName",t)},expression:"dialogForm.householdName"}})],1),i("el-form-item",{attrs:{label:"与户主关系",prop:"householdRelation"}},[i("el-select",{attrs:{placeholder:"请选择人户一致标识",clearable:""},model:{value:e.dialogForm.householdRelation,callback:function(t){e.$set(e.dialogForm,"householdRelation",t)},expression:"dialogForm.householdRelation"}},e._l(e.dic["户主关系"],function(e,t){return i("el-option",{key:t,attrs:{label:e.name,value:e.code}})}))],1)],1),i("el-col",{attrs:{span:8}},[i("el-form-item",{attrs:{label:"户主联系方式"}},[i("el-input",{attrs:{maxlength:12,placeholder:"请填写户主联系方式"},model:{value:e.dialogForm.householdPhone,callback:function(t){e.$set(e.dialogForm,"householdPhone",t)},expression:"dialogForm.householdPhone"}})],1),i("el-form-item",{attrs:{label:"户主身份证号",prop:"householdIdCardNumber"}},[i("el-input",{attrs:{maxlength:18,placeholder:"请填写户主身份证号"},model:{value:e.dialogForm.householdIdCardNumber,callback:function(t){e.$set(e.dialogForm,"householdIdCardNumber",t)},expression:"dialogForm.householdIdCardNumber"}})],1)],1)],1)],1)],1)],1),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},["first"==e.activeName?i("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){e.activeName="second"}}},[e._v("下一步")]):e._e(),"second"==e.activeName?i("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){e.activeName="first"}}},[e._v("上一步")]):e._e(),"second"==e.activeName?i("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){e.activeName="third"}}},[e._v("下一步")]):e._e(),"third"==e.activeName?i("el-button",{attrs:{type:"warning",size:"small"},on:{click:e.resetForm}},[e._v("取消")]):e._e(),"third"==e.activeName?i("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){e.activeName="second"}}},[e._v("上一步")]):e._e(),"third"==e.activeName?i("el-button",{attrs:{type:"success",size:"small"},on:{click:e.submitForm}},[e._v("保存")]):e._e()],1)],1)},r=[],c=(i("7f7f"),i("ac6a"),i("3fe9")),d={props:{disCodeOption:{type:Array,default:[]}},components:{vPeoplePosition:c["a"]},data:function(){return{dialogVisible:!1,isAdd:!0,title:"",activeName:"first",dic:{"性别":[],"民族":[],"婚姻状况":[],"政治面貌":[],"学历":[],"宗教信仰":[],"职业类别":[],"人户一致":[],"户主关系":[],"行政区划":[]},dialogForm:{},teamRules:{householdAgreementSign:[{required:!0,message:"请选择人户一致标识",trigger:"change"}],householdIdCardNumber:[util.validate.isIDCard()],householdRelation:[{required:!0,message:"请选择与户主关系",trigger:"change"}]},houseInfo:{}}},created:function(){var e=this;l["a"].requestDicCatalog(function(t){var i=_.keys(e.dic);_.map(t,function(t){-1!=_.indexOf(i,t.name)&&l["a"].requestDicType(t.id,function(i){"职业类别"==t.name?e.dic[t.name]=e.handleTreeData(i):e.dic[t.name]=i})})})},watch:{activeName:function(e){var t=this;"second"==e?(this.$refs["vBaseForm"].baseForm.id&&l["a"].requestBaseIdByPeople("people/house/findPage",this.$refs["vBaseForm"].baseForm.id,function(e){0!=e.totalCount&&(t.isAdd=!1,t.dialogForm=e.list[0])}),this.$refs["vBaseForm"].$refs["baseForm"].validate(function(e){e||t.$nextTick(function(){t.activeName="first"})}),this.$refs["vPeoplePosition"].$refs["houseItem"]&&this.$refs["vPeoplePosition"].$refs["houseItem"].initGridData(),this.$refs["vPeoplePosition"].$refs["liveHouseItem"]&&this.$refs["vPeoplePosition"].$refs["liveHouseItem"].initGridData()):"third"==e&&new Promise(function(e,i){1==t.$refs["vPeoplePosition"].showHujiForm?(t.$refs["vPeoplePosition"].$refs["houseItem"].$refs["houseItem"].validate(function(e){e||t.$nextTick(function(){t.activeName="second"})}),t.houseInfo=t.$refs["vPeoplePosition"].$refs["houseItem"].houseInfo,e()):l["a"].requestHouseInfo(t.$refs["vBaseForm"].baseForm.houseId,function(i){t.houseInfo=i,e()}),1==t.$refs["vPeoplePosition"].showXianzhuForm&&t.$refs["vPeoplePosition"].$refs["liveHouseItem"].$refs["liveHouseItem"].validate(function(e){e||t.$nextTick(function(){t.activeName="second"})})}).then(function(){t.dialogForm=Object(s["a"])({},t.dialogForm,{householdName:t.houseInfo.householderName,houseNumber:t.houseInfo.houseNum,householdPhone:t.houseInfo.householderPhone,householdAgreementSign:"",householdRelation:"",householdIdCardNumber:"",districtCode:t.houseInfo.districtCode}),t.$refs["dialogForm"].resetFields()})},"dialogForm.householdRelation":function(e){"00"==e?(this.dialogForm.householdName=this.$refs["vBaseForm"].baseForm.name,this.dialogForm.householdPhone=this.$refs["vBaseForm"].baseForm.phone,this.dialogForm.householdIdCardNumber=this.$refs["vBaseForm"].baseForm.idCardNo):(this.dialogForm.householdName=this.houseInfo.householderName,this.dialogForm.householdPhone=this.houseInfo.householderPhone,this.dialogForm.householdIdCardNumber="")}},methods:{handleTreeData:function(e){var t=_.map(_.filter(e,function(e){return"0000"===e.code.slice(1,5)}),function(e){return{code:e.code,label:e.name,children:[]}});return _.map(t,function(t){t.children=_.map(_.filter(e,function(e){return e.code.slice(0,1)===t.code.slice(0,1)&&"0000"!==e.code.slice(1,5)&&"00"===e.code.slice(3,5)}),function(e){return{code:e.code,label:e.name,children:[]}})}),_.map(t,function(t){_.map(t.children,function(t){t.children=_.map(_.filter(e,function(e){return e.code.slice(0,3)===t.code.slice(0,3)&&"00"!==e.code.slice(3,5)}),function(e){return{code:e.code,label:e.name}})})}),t},handlePosition:function(e){this.$refs["vPeoplePosition"].hujidi=e.domicilePlaceDetail,this.$refs["vPeoplePosition"].xianzhudi=e.livePlaceDetail,this.$refs["vPeoplePosition"].showHujiForm=!1,this.$refs["vPeoplePosition"].showXianzhuForm=!1},handleQueryBasePeople:function(e,t){l["a"].requestBasePeopleList(e,function(e){t&&t(e.list)})},submitForm:function(){var e=this;this.$refs["dialogForm"].validate(function(t){if(!t)return console.log("error submit!!"),!1;var i=_.cloneDeep(e.$refs["vBaseForm"].baseForm);if(i.birthDate=i.birthDate&&util.time.formatDate(i.birthDate,"YYYY-MM-DD"),i.occupationType=i.occupationType&&_.last(i.occupationType),i.districtCode=e.houseInfo.districtCode,1==e.$refs["vPeoplePosition"].showHujiForm){var o=e.$refs["vPeoplePosition"].$refs["houseItem"].positionForm;i.domicilePlace=o.province,i.domicilePlaceDetail=o.domicilePlaceDetail,i.houseId=o.houseId}if(1==e.$refs["vPeoplePosition"].showXianzhuForm){var a=e.$refs["vPeoplePosition"].$refs["liveHouseItem"].positionForm;i.livePlace=a.province,i.livePlaceDetail=a.domicilePlaceDetail,i.liveHouseId=a.houseId||""}i.dicMap&&delete i.dicMap,i.id?l["a"].requestUpdatePeopleInfo(i,function(t){e.comminForm(t)}):l["a"].requestSavePeopleInfo(i,function(t){e.comminForm(t)})})},comminForm:function(e){var t=this,i=_.cloneDeep(this.dialogForm);if("00"==i.householdRelation&&i.householdName!=this.houseInfo.householderName&&(this.houseInfo.householderName=i.householdName,this.houseInfo.householderPhone=i.householdPhone,l["a"].requestUpdateHouse(this.houseInfo,function(e){console.log("户信息修改了")})),i.dicMap&&delete i.dicMap,1==this.isAdd)i.peopleId=e.id,l["a"].requestSaveHousePeople(i,function(e){t.$popup.showNotification({type:"success",message:"户籍人口添加成功！"}),t.resetForm(),t.$parent.handleQuery()});else{var o=_.pick(i,["districtCode","houseNumber","householdAgreementSign","householdIdCardNumber","householdName","householdPhone","householdRelation","id","peopleId"]);l["a"].requestUpdateHousePeople(o,function(e){t.$popup.showNotification({type:"success",message:"户籍人口修改成功！"}),t.resetForm(),t.$parent.handleQuery()})}},resetForm:function(){this.$refs["vBaseForm"].$refs["baseForm"].resetFields(),this.$refs["vBaseForm"].resetBaseForm(),this.$refs["vPeoplePosition"].destroyedForm(),this.$refs["dialogForm"].resetFields(),this.dialogForm={},this.houseInfo={},this.$data.dialogVisible=!1,this.activeName="first",this.isAdd=!0}}},u=d,h=(i("17d0"),i("2877")),p=Object(h["a"])(u,n,r,!1,null,null,null);p.options.__file="house-people-add.vue";var m=p.exports,f=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-dialog",{staticClass:"techo-details-wrapper",attrs:{"custom-class":e.customClass,title:e.title,visible:e.visible,width:e.width,fullscreen:"100%"==e.width,"append-to-body":""},on:{"update:visible":function(t){e.visible=t},open:e.handleOpenView,close:e.handleCloseView}},[o("div",{staticClass:"techo-details__body"},[o("el-tabs",{staticClass:"techo-details-tabs",attrs:{value:e.current,type:"card"}},e._l(e.layout.tabs,function(t,a){return o("el-tab-pane",{key:a,attrs:{label:t,name:t}},[o("span",{attrs:{slot:"label"},slot:"label"},[o("i",{staticClass:"el-icon-date",staticStyle:{"margin-right":"10px"}}),e._v(e._s(t))]),"content"==e.layout["tab"+a].type?o("div",{staticStyle:{height:"100%"}},[o("el-row",{staticStyle:{height:"55%"},attrs:{gutter:10,type:"flex"}},[o("el-col",{staticClass:"left-top",attrs:{span:12}},[o("div",{staticClass:"base-house-people"},[o("div",[o("el-row",{attrs:{gutter:10}},[o("el-col",{staticStyle:{"text-align":"center"},attrs:{span:6}},[o("img",{staticStyle:{height:"120px",width:"110px"},attrs:{src:i("72e9")}})]),o("el-col",{attrs:{span:9}},[o("div",{staticClass:"tacho-people-item"},[o("span",{staticClass:"item-title"},[e._v("姓名：")]),o("span",{staticClass:"item-value"},[e._v(e._s(e.data.name))])]),o("div",{staticClass:"tacho-people-item"},[o("span",{staticClass:"item-title"},[e._v("出生日期：")]),o("span",{staticClass:"item-value"},[e._v(e._s(e.data.birthDate))])]),o("div",{staticClass:"tacho-people-item"},[o("span",{staticClass:"item-title"},[e._v("籍贯：")]),o("span",{staticClass:"item-value"},[e._v(e._s(e.data.dicMap.nativePlace))])]),o("div",{staticClass:"tacho-people-item"},[o("span",{staticClass:"item-title"},[e._v("学历：")]),o("span",{staticClass:"item-value"},[e._v(e._s(e.data.dicMap.education))])]),o("div",{staticClass:"tacho-people-item"},[o("span",{staticClass:"item-title"},[e._v("政治面貌：")]),o("span",{staticClass:"item-value"},[e._v(e._s(e.data.dicMap.politicalStatus))])])]),o("el-col",{attrs:{span:9}},[o("div",{staticClass:"tacho-people-item"},[o("span",{staticClass:"item-title"},[e._v("身份证号：")]),o("span",{staticClass:"item-value"},[e._v(e._s(e.data.idCardNo))])]),o("div",{staticClass:"tacho-people-item"},[o("span",{staticClass:"item-title"},[e._v("性别：")]),o("span",{staticClass:"item-value"},[e._v(e._s(e.data.dicMap.sex))])]),o("div",{staticClass:"tacho-people-item"},[o("span",{staticClass:"item-title"},[e._v("民族：")]),o("span",{staticClass:"item-value"},[e._v(e._s(e.data.dicMap.nation))])]),o("div",{staticClass:"tacho-people-item"},[o("span",{staticClass:"item-title"},[e._v("婚姻状况：")]),o("span",{staticClass:"item-value"},[e._v(e._s(e.data.dicMap.marriage))])]),o("div",{staticClass:"tacho-people-item"},[o("span",{staticClass:"item-title"},[e._v("宗教信仰：")]),o("span",{staticClass:"item-value"},[e._v(e._s(e.data.dicMap.religiousBelief))])])])],1),o("el-row",{attrs:{gutter:10}},[o("el-col",{attrs:{span:24}},[o("div",{staticClass:"techo-details-tabs row-border"},e._l(e.layout["tab"+a].tmpl,function(t,i){return o("el-row",{key:i,attrs:{type:"flex",justify:"space-around"}},[e._l(t,function(t,i){return[o("el-col",{staticClass:"column-title",attrs:{span:t.col[0]}},[e._v(e._s(t.title))]),o("el-col",{attrs:{span:t.col[1]}},[e._v(e._s(e.getData(t.field)))])]})],2)}))])],1),o("el-row",{attrs:{gutter:10}},[o("el-col",{attrs:{span:24}},[o("div",{staticClass:"other-info",on:{click:e.handleDetailsInfo}},[e._v("更多信息>>")])])],1)],1)])]),o("el-col",{staticClass:"right-top",attrs:{span:12}},[o("techo-card",[o("div",{attrs:{slot:"header"},slot:"header"},[e._v("重点人群")]),o("div",{staticStyle:{height:"100%"},attrs:{id:"KeyPeopleStatis"}})])],1)],1),o("div",{staticClass:"bottom-family-table"},[o("div",{staticClass:"title"},[e._v("家庭信息")]),o("el-table",{staticStyle:{width:"100%"},attrs:{data:e.familyData,height:"calc(100% - 44px)",border:""}},[o("el-table-column",{attrs:{type:"index",label:"序号",width:"50",align:"center"}}),o("el-table-column",{attrs:{prop:"name",label:"姓名",width:"180",align:"center"}}),o("el-table-column",{attrs:{prop:"dicMap.householdRelation",label:"与户主关系",align:"center"}}),o("el-table-column",{attrs:{prop:"householdName",label:"户主姓名",width:"180",align:"center"}}),o("el-table-column",{attrs:{prop:"dicMap.sex",label:"性别",align:"center"}}),o("el-table-column",{attrs:{prop:"phone",label:"联系方式",align:"center"}}),o("el-table-column",{attrs:{prop:"dicMap.marriage",label:"婚姻状况",align:"center"}}),o("el-table-column",{attrs:{prop:"idCardNo",label:"身份证号",width:"180",align:"center"}}),o("el-table-column",{attrs:{label:"操作",align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-button",{staticClass:"techo-list__body-table-button-view",attrs:{size:"mini"},on:{click:function(i){e.handleDetailsInfo(t.row)}}},[e._v("查看")])]}}])})],1)],1)],1):e._e(),"map"==e.layout["tab"+a].type?o("div",{staticClass:"techo-details-tabs-map"},[o("vBaseMap",{ref:"map",refInFor:!0})],1):e._e()])}))],1),e.dlgVisible?o("techo-details",{ref:"details",attrs:{configKey:e.configKey,height:"60%",title:e.detailsTitle}}):e._e()],1)},v=[],g=i("3f86"),b={tabs:["基本信息","扩展信息","地图"],tab0:{type:"content",tmpl:[[{title:"字段标题1",field:"字段值1",col:[6,6]},{title:"字段标题2",field:"字段值2",col:[6,6]}]]},tab1:{type:"content"},tab2:{type:"map",display:{type:"location",lonX:"x",latY:"y"}}},y=i("1fba"),P={options:{tooltip:{formatter:function(e){return e.name}},label:{normal:{show:!0,textStyle:{fontSize:12}}},series:[{name:"Les Miserables",type:"graph",layout:"force",hoverAnimation:!0,label:{normal:{show:!0,textStyle:{fontSize:12}}},symbolSize:55,force:{repulsion:800},edgeSymbolSize:[4,50],data:[{name:"",draggable:!0,symbolSize:70,itemStyle:{normal:{color:"#F05B72"}}}],links:[{source:0,target:1},{source:0,target:2},{source:0,target:3},{source:0,target:4},{source:0,target:5},{source:0,target:6},{source:0,target:7},{source:0,target:8},{source:0,target:9},{source:0,target:10}]}]},keyValue:{flowPeopleId:{name:"流动人口",color:"#1E8AFD",entity:"hp/people/flow",configKey:"flowOther"},rearPeopleId:{name:"留守人员",color:"#FFA000",entity:"hp/people/rear",configKey:"rearOther"},releasePeopleId:{name:"刑满释放人员",color:"#AD5EB8",entity:"hp/people/release",configKey:"releasedOther"},comCorPeopleId:{name:"社区矫正人员",color:"#FF446B",entity:"hp/people/comcor",configKey:"communityOther"},wreckerPeopleId:{name:"精神障碍患者",color:"#FF446B",entity:"hp/people/wrecker",configKey:"psychoticOther"},drugsPeopleId:{name:"吸毒人员",color:"#FF446B",entity:"hp/people/drugs",configKey:"drugsterOther"},aidsPeopleId:{name:"艾滋病人员",color:"#FF446B",entity:"hp/people/aids",configKey:"aidsOther"},vitalYoungPeopleId:{name:"重点青少年",color:"#FF446B",entity:"hp/people/young",configKey:"imptantYoungOther"},peaceSchoolRimPeoId:{name:"学校周边重点人",color:"#FF446B",entity:"peace/school/rim",configKey:"schoolRimPeoOther"}}},C=P,F={components:{vBaseMap:g["a"]},props:{title:{type:String,default:"详情信息"},width:{type:String,default:"50%"},height:{type:String,default:"50%"},layout:{type:Object,default:function(){return b}}},data:function(){return{visible:!1,data:{dicMap:{sex:"",nation:"",marriage:"",politicalStatus:"",education:"",religiousBelief:"",occupationType:""}},current:b.tabs[0],dlgVisible:!1,configKey:"housePeople",KeyPeopleStatisOptions:{},KeyPeopleStatisChart:null,familyData:[],tableBs:null,detailsTitle:""}},computed:{customClass:function(){return"100%"==this.width?"":"50%"==this.height?"techo-details-height-50":"60%"==this.height?"techo-details-height-60":"70%"==this.height?"techo-details-height-70":"80%"==this.height?"techo-details-height-80":"100%"==this.height?"techo-details-height-100":void 0}},methods:{handleOpenView:function(){var e=this;this.$nextTick(function(){e.KeyPeopleStatisChart=e.$echarts.init(e.$el.querySelector("#KeyPeopleStatis")),e.KeyPeopleStatisChart.on("click",function(t){void 0!=t.value&&l["a"].requestFocus(t.value,function(i){void 0!=i.iscriminal&&(i.dicMap.iscriminal=1==i.iscriminal?"有":"无"),void 0!=i.isFocus&&(i.dicMap.isFocus=1==i.isFocus?"是":"否"),void 0!=i.isfocus&&(i.dicMap.isfocus=1==i.isfocus?"是":"否"),void 0!=i.isrecidivist&&(i.dicMap.isrecidivist=1==i.isrecidivist?"是":"否"),void 0!=i.isgroup&&(i.dicMap.isgroup=1==i.isgroup?"是":"否"),void 0!=i.ishosted&&(i.dicMap.ishosted=1==i.ishosted?"是":"否"),void 0!=i.isdraintube&&(i.dicMap.isdraintube=1==i.isdraintube?"是":"否"),void 0!=i.iscrimeagin&&(i.dicMap.iscrimeagin=1==i.iscrimeagin?"是":"否"),void 0!=i.isCriminal&&(i.dicMap.isCriminal=1==i.isCriminal?"有":"无"),void 0!=i.isSecurity&&(i.dicMap.isSecurity=1==i.isSecurity?"是":"否"),void 0!=i.isaccident&&(i.dicMap.isaccident=1==i.isaccident?"有":"无"),void 0!=i.isRecidivism&&(i.dicMap.isRecidivism=1==i.isRecidivism?"是":"否"),void 0!=i.crimeAgain&&(i.dicMap.crimeAgain=1==i.crimeAgain?"是":"否"),e.handleDetailsInfo(i,t.value)})}),new y["a"](".base-house-people",{mouseWheel:!0,scrollbar:{fade:!0,interactive:!1}}),e.tableBs=e.tableBs||new y["a"](".bottom-family-table .el-table__body-wrapper",{mouseWheel:!0,scrollbar:{fade:!0,interactive:!1}})}),this.getFocusPeople(),this.getFamilyPeople()},handleCloseView:function(){this.KeyPeopleStatisOptions={},this.KeyPeopleStatisChart.dispose(),this.KeyPeopleStatisChart=null,this.familyData=[],this.detailsTitle=""},getFocusPeople:function(){var e=this,t=_.cloneDeep(C.keyValue);this.KeyPeopleStatisOptions=_.cloneDeep(C.options),l["a"].requestFocusPeople(this.data.peopleId,function(i){e.KeyPeopleStatisOptions.series[0].data[0].name=e.data.name,delete i.basePeopleId,delete i.housePeopleId,_.map(i,function(i,o){null!=i?e.KeyPeopleStatisOptions.series[0].data.push({name:t[o].name,value:{focusId:i,entity:t[o].entity,configKey:t[o].configKey,detailsTitle:t[o].name},draggable:!0,symbolSize:60,itemStyle:{normal:{color:t[o].color}}}):e.KeyPeopleStatisOptions.series[0].data.push({name:t[o].name,draggable:!0,symbolSize:60,itemStyle:{normal:{color:"#c7c7c7"}}}),e.KeyPeopleStatisChart.setOption(e.KeyPeopleStatisOptions),e.KeyPeopleStatisChart.resize()})})},getFamilyPeople:function(){var e=this;l["a"].requestPageHousePeople({districtCode:"",name:"",houseId:this.data.houseId,page:"1",pageSize:"1000"},function(t){e.familyData=t.list})},handleDetailsInfo:function(e,t){var i=void 0==e.id?_.cloneDeep(this.data):e;this.configKey=void 0==t?"housePeople":t.configKey,this.detailsTitle=void 0==t?"户籍人口":t.detailsTitle,this.dlgVisible=!0,this.$nextTick(function(){this.$refs["details"].data=i,this.$refs["details"].visible=!0})},getData:function(e){return _.get(this.data,e)}}},$=F,w=(i("897d"),Object(h["a"])($,f,v,!1,null,null,null));w.options.__file="ViewDialog.vue";var I=w.exports,D={components:{vViewDialog:I,vAddDialog:m},data:function(){return{title:"户籍人口",queryForm:{districtCode:"",houseId:"",name:""},header:{"身份证号":"idCardNo","姓名":"name","性别":"dicMap.sex","联系方式":"phone","户籍详址":"domicilePlaceDetail","现住详址":"livePlaceDetail","户主姓名":"householdName","与户主关系":"dicMap.householdRelation","户主联系方式":"householdPhone"},data:[],isShowCode:["6102"],recordCount:0,disCodeOption:[],dlgVisible:!1,configKey:"housePeople",layout:{tabs:["基本信息"],tab0:{type:"content",tmpl:[[{title:"户籍详址",field:"domicilePlaceDetail",col:[4,20]}],[{title:"现住详址",field:"livePlaceDetail",col:[4,20]}]]}}}},mounted:function(){var e=this;l["a"].requestGridCode(function(t){e.disCodeOption=[t],e.isShowCode=[t.code],e.queryForm.districtCode=t.code})},watch:{queryForm:{handler:function(e,t){this.handleQuery()},deep:!0}},methods:{handleTreeNode:function(e){this.queryForm.districtCode=e.code},handleAdd:function(){this.$refs["vAddDialog"].dialogVisible=!0,this.$refs["vAddDialog"].isAdd=!0,this.$refs["vAddDialog"].title="添加"+this.title},handleDelete:function(e){var t=this;this.$popup.showLoading("正在删除中，请稍候..."),new Promise(function(t,i){var o=0;_.map(e,function(i,a){l["a"].requestDeleteHousePeople(i.id,function(i){o++,o==e.length&&t()})})}).then(function(){t.$popup.showNotification({type:"success",message:"户籍人口删除成功！"}),t.handleQuery(),t.$popup.closeLoading()}).catch(function(){t.$popup.showNotification({type:"warning",message:"户籍人口删除失败！"}),t.$popup.closeLoading()})},handlePageChange:function(){this.data=[],this.handleQuery()},handleView:function(e,t){this.dlgVisible=!0,this.$nextTick(function(){this.$refs["vViewDialog"].data=t,this.$refs["vViewDialog"].visible=!0})},handleEdit:function(e,t){var i=this;this.$refs["vAddDialog"].dialogVisible=!0,this.$refs["vAddDialog"].isAdd=!1,this.$refs["vAddDialog"].title="修改"+this.title,l["a"].requestBasePeople(t.peopleId,function(e){if(null!=e.occupationType&&""!=e.occupationType){var t=[e.occupationType.substr(0,1)+"0000",e.occupationType.substr(0,3)+"00",e.occupationType];e.occupationType=_.uniq(t)}else e.occupationType=[];i.$refs["vAddDialog"].$refs["vBaseForm"].baseForm=e,i.$refs["vAddDialog"].handlePosition(e)}),this.$refs["vAddDialog"].dialogForm=_.cloneDeep(t)},handleClear:function(){this.queryForm={districtCode:constants.REGION.CODE,houseId:"",name:""}},handleQuery:function(){var e=this,t=this.$refs["list"].getPageInfo();t=Object(s["a"])({},t,_.cloneDeep(this.queryForm)),l["a"].requestPageHousePeople(t,function(i){0!=i.totalCount&&0==i.list.length?(t.page=i.totalPage,l["a"].requestPageHousePeople(t,function(t){e.recordCount=t.totalCount,e.data=t.list})):(e.recordCount=i.totalCount,e.data=i.list)})}}},N=D,S=Object(h["a"])(N,o,a,!1,null,null,null);S.options.__file="house-people-list.vue";t["default"]=S.exports},b8d9:function(e,t,i){}}]);
//# sourceMappingURL=chunk-47ca.0492f596.js.map