'use strict';exports.__esModule=!0;var _regenerator=require('babel-runtime/regenerator'),_regenerator2=_interopRequireDefault(_regenerator),_keys=require('babel-runtime/core-js/object/keys'),_keys2=_interopRequireDefault(_keys),_typeof2=require('babel-runtime/helpers/typeof'),_typeof3=_interopRequireDefault(_typeof2),_asyncToGenerator2=require('babel-runtime/helpers/asyncToGenerator'),_asyncToGenerator3=_interopRequireDefault(_asyncToGenerator2),_extends2=require('babel-runtime/helpers/extends'),_extends3=_interopRequireDefault(_extends2);exports.default=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},b=a.hosts,c=b===void 0?{}:b,d=a.format,e=d===void 0?{}:d,f=a.pagingFormat,g=f===void 0?{}:f,h=a.conf,i=h===void 0?{}:h,j=a.msg,k=j===void 0?{}:j,l=a.ver,m=l===void 0?{}:l,n=a.token,o=n===void 0?{}:n,p=(0,_extends3.default)({},{errno:'errno',errmsg:'errmsg',data:'data'},e),q=(0,_extends3.default)({},{numsPerPage:'numsPerPage',currentPage:'currentPage',count:'count',totalPages:'totalPages',data:'data'},g),r={};r[q.numsPerPage]=0,r[q.currentPage]=0,r[q.count]=0,r[q.totalPages]=0,r[q.data]=[];var s={};s[p.errno]='',s[p.errmsg]='';var t=(0,_extends3.default)({},{needMethod:['get'],getFn:function a(){return''},key:'ver'},m),u=(0,_extends3.default)({},{needMethod:['post','del','put','patch'],key:'token',getFn:function a(){return''},setFn:function a(){return''}},o),v=(0,_extends3.default)({},{successNo:0,errorFn:function a(){return''},successFn:function a(){return''}},k);return function(a){var b=function(){var a=(0,_asyncToGenerator3.default)(_regenerator2.default.mark(function a(b){var c,d,e,f,g,h,i,j=b.method,k=b.url,l=b.opt,m=b.conf,n=m===void 0?{}:m,o=b.msg,q=o!==void 0&&o;return _regenerator2.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(c=k,d=0<=t.needMethod.indexOf(j),!d){a.next=7;break}return a.next=5,t.getFn({url:k,opt:l});case 5:e=a.sent,c=k.replace(/^\/([\w\d-_]*)\//,'/$1/ver/'+e+'/');case 7:if(f=0<=u.needMethod.indexOf(j),!f){a.next=13;break}return n.headers||(n.headers={}),a.next=12,u.getFn();case 12:n.headers[u.key]=a.sent;case 13:return a.next=15,this.http[j](c,l,n);case 15:return g=a.sent,g[u.key]&&u.setFn(g[u.key]),q&&(g[p.errno]===v.successNo?'function'==typeof v.successFn&&v.successFn('string'==typeof q?q:'\u64CD\u4F5C\u6210\u529F'):(h=[],i=g[p.errmsg],i&&'object'===('undefined'==typeof i?'undefined':(0,_typeof3.default)(i))?(0,_keys2.default)(i).forEach(function(a){h.push(i[a])}):h.push(i),g[p.errmsg]=h.join(','),'function'==typeof v.errorFn&&v.errorFn(g))),a.abrupt('return',g);case 19:case'end':return a.stop();}},a,this)}));return function(){return a.apply(this,arguments)}}();a.prototype.http=new _fullbaseAxios2.default({trim:!0,hosts:c,format:p,conf:i}),a.prototype.dfData=(0,_extends3.default)({},s),a.prototype.dfData[p.data]='',a.prototype.dfDataObj=(0,_extends3.default)({},s),a.prototype.dfDataObj[p.data]={},a.prototype.dfDataArr=(0,_extends3.default)({},s),a.prototype.dfDataArr[p.data]=[],a.prototype.dfDataPage=(0,_extends3.default)({},s,{data:r}),a.prototype.httpGet=function(){var a=(0,_asyncToGenerator3.default)(_regenerator2.default.mark(function a(){var c=0<arguments.length&&arguments[0]!==void 0?arguments[0]:'',d=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{},e=!!(2<arguments.length&&arguments[2]!==void 0)&&arguments[2],f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:{};return _regenerator2.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt('return',b.call(this,{method:'get',url:c,opt:d,msg:e,conf:f}));case 1:case'end':return a.stop();}},a,this)}));return function(){return a.apply(this,arguments)}}(),a.prototype.httpPost=function(){var a=(0,_asyncToGenerator3.default)(_regenerator2.default.mark(function a(c,d){var e=!!(2<arguments.length&&arguments[2]!==void 0)&&arguments[2],f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:{};return _regenerator2.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt('return',b.call(this,{method:'post',url:c,opt:d,msg:e,conf:f}));case 1:case'end':return a.stop();}},a,this)}));return function(){return a.apply(this,arguments)}}(),a.prototype.httpDel=function(){var a=(0,_asyncToGenerator3.default)(_regenerator2.default.mark(function a(c,d){var e=!!(2<arguments.length&&arguments[2]!==void 0)&&arguments[2],f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:{};return _regenerator2.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt('return',b.call(this,{method:'delete',url:c,opt:d,msg:e,conf:f}));case 1:case'end':return a.stop();}},a,this)}));return function(){return a.apply(this,arguments)}}(),a.prototype.httpPut=function(){var a=(0,_asyncToGenerator3.default)(_regenerator2.default.mark(function a(c,d){var e=!!(2<arguments.length&&arguments[2]!==void 0)&&arguments[2],f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:{};return _regenerator2.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt('return',b.call(this,{method:'put',url:c,opt:d,msg:e,conf:f}));case 1:case'end':return a.stop();}},a,this)}));return function(){return a.apply(this,arguments)}}(),a.prototype.httpPatch=function(){var a=(0,_asyncToGenerator3.default)(_regenerator2.default.mark(function a(c,d){var e=!!(2<arguments.length&&arguments[2]!==void 0)&&arguments[2],f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:{};return _regenerator2.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt('return',b.call(this,{method:'patch',url:c,opt:d,msg:e,conf:f}));case 1:case'end':return a.stop();}},a,this)}));return function(){return a.apply(this,arguments)}}()}};var _fullbaseAxios=require('fullbase-axios'),_fullbaseAxios2=_interopRequireDefault(_fullbaseAxios);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}
