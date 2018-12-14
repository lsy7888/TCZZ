// 生产环境还是开发环境 production development
var ENV = 'production';
// 地址变量
var HOST = ENV == 'development' ? 'http://117.34.95.9' : 'http://117.34.95.9';
var PORT = ENV == 'development' ? '8033' : '8033';
var CAS_PORT = ENV == '8080' ? '8080' : '8080';
// 后台服务地址
var SERVER_URL = HOST + ':' + PORT;
// CAS默认地址
var CAS_URL = HOST + ":" + CAS_PORT;

window.constants = {
    ENV: ENV,
    // 当前系统名称
    SYSTEM_NAME: '铜川市社会治理综合联动平台',
    // 当前系统版本
    VERSION: '0.11.20181112',
    // 系统云标识
    CLOUD_SIGN: 'TCZZ',
    // 市级行政区划信息
    REGION: {
        CODE: "6102",
        NAME: "铜川市"
    },
    // 基础地图框架
    MAP_FRAME: 'mapbox',
    // 基础地图【TDT-天地图和Baidu-百度地图】
    BASE_MAP: 'TDT',
    // 后台服务地址
    SERVER_URL: SERVER_URL,
    // CAS认证注销地址
    CAS_LOGOUT_URL: CAS_URL + "/cas/logout",
    // CAS认证登录地址
    CAS_LOGIN_URL: CAS_URL + "/cas/login",
    // 上传文件服务地址
    UPLOAD_URL: SERVER_URL + "/manage/file/upload",
    MAPBOX_FONT_URL: '/fonts',
    // 查询每页记录数
    LIMIT: 10000,
}