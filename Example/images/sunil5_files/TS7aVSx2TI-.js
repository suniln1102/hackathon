if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }/*FB_PKG_DELIM*/

__d("RTWebPreCallContext",["react"],function(a,b,c,d,e,f,g){"use strict";a=d("react").createContext;b=a(null);g["default"]=b},98,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("ZenonCallInviteModelTypes",[],function(a,b,c,d,e,f){"use strict";a={missed:"missed",ringing:"ringing",unsupported_browser:"unsupported_browser"};f.CallInviteModelType=a},66,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("PolarisIGCoreCallFilled24Icon",["PolarisIGCoreSVGIcon","react"],function(a,b,c,d,e,f,g){var h=d("react");function a(a){return h.jsx(c("PolarisIGCoreSVGIcon"),babelHelpers["extends"]({},a,{viewBox:"0 0 24 24",children:h.jsx("path",{d:"M4.9 24.002q-.2 0-.4-.008a3.319 3.319 0 01-2.161-.92A18.862 18.862 0 01.454 21.02a2.223 2.223 0 01.171-2.893 14.91 14.91 0 015.829-4.014 2.5 2.5 0 011.896.186l.96.512a.888.888 0 00.75.044 8.653 8.653 0 002.872-1.922 8.66 8.66 0 001.922-2.871.889.889 0 00-.044-.75l-.512-.962a2.495 2.495 0 01-.186-1.895 14.906 14.906 0 014.014-5.83 2.22 2.22 0 012.893-.17 18.89 18.89 0 012.056 1.884 3.323 3.323 0 01.92 2.16c.206 5.552-3.946 10.564-6.44 13.057-2.432 2.433-7.264 6.446-12.654 6.446z"})}))}a.displayName=a.name+" [from "+f.id+"]";b=h.memo(a);g["default"]=b},98,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("PolarisIGCoreXFilledIcon",["PolarisIGCoreSVGIcon","PolarisIGCoreXPanoFilledIcon","PolarisisUserLoggedIn","qex","react"],function(a,b,c,d,e,f,g){var h=d("react");function a(a){var b=d("PolarisisUserLoggedIn").isUserLoggedIn()?c("qex")._("1971"):c("qex")._("1972");return b===!0?h.jsx(c("PolarisIGCoreXPanoFilledIcon"),babelHelpers["extends"]({},a)):h.jsx(c("PolarisIGCoreSVGIcon"),babelHelpers["extends"]({},a,{viewBox:"0 0 48 48",children:h.jsx("path",{clipRule:"evenodd",d:"M41.8 9.8L27.5 24l14.2 14.2c.6.6.6 1.5 0 2.1l-1.4 1.4c-.6.6-1.5.6-2.1 0L24 27.5 9.8 41.8c-.6.6-1.5.6-2.1 0l-1.4-1.4c-.6-.6-.6-1.5 0-2.1L20.5 24 6.2 9.8c-.6-.6-.6-1.5 0-2.1l1.4-1.4c.6-.6 1.5-.6 2.1 0L24 20.5 38.3 6.2c.6-.6 1.5-.6 2.1 0l1.4 1.4c.6.6.6 1.6 0 2.2z",fillRule:"evenodd"})}))}a.displayName=a.name+" [from "+f.id+"]";b=h.memo(a);g["default"]=b},98,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("DocumentTitle",["Arbiter"],function(a,b,c,d,e,f,g){var h=1500,i=null,j=!1,k=0,l=[],m=null,n=document.title,o=0;function p(){l.length>0?!j?(q(l[k].title),k=++k%l.length):r():(clearInterval(i),i=null,r())}function q(a){document.title=a,j=!0}function r(){s.set(m||n,!0),j=!1}var s=function(){function a(a){this.$1=a}a.get=function(){return n};a.set=function(a,b){var d=a.toString();document.title=d;!b?(n=d,m=null,c("Arbiter").inform("update_title",a)):m=d};a.blink=function(b){b={title:b.toString()};l.push(b);i===null&&(i=setInterval(p,h));return new a(b)};var b=a.prototype;b.stop=function(){var a=l.indexOf(this.$1);a>=0&&(l.splice(a,1),k>a?k--:k==a&&k==l.length&&(k=0))};a.badge=function(b){var d=a.get();d=b?"("+b+") "+d:d;a.set(d,!0);c("Arbiter").inform("update_title_badge",b,"state");o=b};a.preserveBadgeAndSet=function(b){a.set(b,!1),c("Arbiter").inform("update_title",b),a.badge(o)};return a}();g["default"]=s},98,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("useBlinkDocumentTitle",["DocumentTitle","react"],function(a,b,c,d,e,f,g){"use strict";var h=d("react").useEffect;function a(a){h(function(){if(a==null)return function(){};var b=c("DocumentTitle").blink(a);return function(){b.stop()}},[a])}g["default"]=a},98,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("PolarisIncomingCallBlinkingTitle.react",["fbt","PolarisCallGatingHelpers","react","useBlinkDocumentTitle"],function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a){a=a.callerName;return d("PolarisCallGatingHelpers").isWebCallingRingtoneEnabled()&&a!=null?i.jsx(j,{callerName:a}):null}a.displayName=a.name+" [from "+f.id+"]";function j(a){a=a.callerName;c("useBlinkDocumentTitle")(h._("{caller_name} is calling",[h._param("caller_name",a)]));return null}g["default"]=a},98,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("PolarisIncomingCall",["cx","IGCoreModal","PolarisCallGatingHelpers","PolarisCallNavigator","PolarisDirectLogger","PolarisDirectStrings","PolarisIGCoreBox","PolarisIGCoreCallFilled24Icon","PolarisIGCorePressable","PolarisIGCoreText","PolarisIGCoreVideoChatFilled24Icon","PolarisIGCoreXFilledIcon","PolarisIncomingCallActions","PolarisIncomingCallBlinkingTitle.react","PolarisUserAvatar.react","PolarisuseMQTT","RTWebPreCallContext","ZenonCallInviteModelTypes","bx","cr:3984","react","react-redux-wwwig"],function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");e=d("react");var j=e.useContext,k=e.useEffect;function a(){var a=function(a){if(a&&a.type===d("ZenonCallInviteModelTypes").CallInviteModelType.ringing){var b;b=(b=a.controllerParams.serverInfoData)!=null?b:"";var c=a.requestingVideo;a=(a=a.controllerParams.appMessages)==null?void 0:a.ring_data;var e="",f="",g="",h,i=[],j=[];if(a!=null){a=JSON.parse(a);g=a.display_name;h=a.display_uri;f=a.group_name;e=a.ig_thread_id;i=a.participant_usernames;j.push(h);if(f==null){try{i=JSON.parse(i)}catch(a){}f=Array.isArray(i)?[g].concat(i).join(", "):g}}return{avatarUris:j,hasVideo:c,igThreadId:e,serverInfoData:b,threadName:f,callerName:g}}else return null},e=b("cr:3984")==null?void 0:b("cr:3984").useCallInvite(),f=d("react-redux-wwwig").useDispatch(),g=c("PolarisuseMQTT")(),h=j(c("RTWebPreCallContext"));k(function(){h!=null&&h.callInviteModel.startListening({callsBlocked:!1})},[h]);var l=h?h.callInviteModel:null,m=d("react-redux-wwwig").useSelector(function(a){return a.incomingCall}),n=m.acknowledged,o=m.avatarUris,p=m.hasVideo,q=m.igThreadId,r=m.serverInfoData,s=m.threadName;m=m.callerName;a=e?a(e):null;a!=null?(o=a.avatarUris,p=a.hasVideo,q=a.igThreadId,r=a.serverInfoData,s=a.threadName,m=a.callerName,n=!1):d("PolarisCallGatingHelpers").isZenonIncomingRingEnabled()&&(n=!0);e=function(){d("PolarisDirectLogger").DirectLogger.logDirectEvent("IncomingCall","join_button_click",{server_info_data:r,has_video:p,ig_thread_id:q}),d("PolarisCallGatingHelpers").isZenonIncomingRingEnabled()?l==null?void 0:l.dismiss():f(d("PolarisIncomingCallActions").ackCall()),d("PolarisCallNavigator").launchCall(q,p,r)};var t=!n&&r!=null&&q!=null&&d("PolarisCallGatingHelpers").isWebCallingEnabled();k(function(){t&&d("PolarisDirectLogger").DirectLogger.logDirectEvent("IncomingCall","incoming_call_impression",{ig_thread_id:q,server_info_data:r,has_video:p})},[p,q,t,r]);a=function(){d("PolarisDirectLogger").DirectLogger.logDirectEvent("IncomingCall","decline_button_click",{server_info_data:r,has_video:p,ig_thread_id:q}),d("PolarisCallGatingHelpers").isZenonIncomingRingEnabled()?l==null?void 0:l.decline():(f(d("PolarisIncomingCallActions").ackCall()),g==null?void 0:g.sendRtcHangupRequest(r))};return t?i.jsxs(c("IGCoreModal"),{children:[d("PolarisCallGatingHelpers").isWebCallingRingtoneEnabled()&&i.jsx("audio",{autoPlay:!0,loop:!0,src:c("bx").getURL(c("bx")("6022")),type:"audio/m4a"}),i.jsx(c("PolarisIncomingCallBlinkingTitle.react"),{callerName:m}),i.jsxs(c("PolarisIGCoreBox"),{alignItems:"center",height:312,padding:8,width:400,children:[i.jsx(c("PolarisUserAvatar.react"),{isLink:!1,profilePictureUrl:o[0],size:92}),i.jsx(c("PolarisIGCoreBox"),{marginBottom:2,marginTop:4,maxWidth:400,paddingX:8,children:i.jsx(c("PolarisIGCoreText").Headline2,{display:"truncated",textAlign:"center",weight:"semibold",zeroMargin:!0,children:s})}),i.jsx(c("PolarisIGCoreBox"),{marginBottom:8,children:i.jsx(c("PolarisIGCoreText").Body,{color:"ig-secondary-text",zeroMargin:!0,children:"Incoming "+(p?"video":"audio")+" call..."})}),i.jsxs(c("PolarisIGCoreBox"),{direction:"row",children:[i.jsx(c("PolarisIGCoreBox"),{marginEnd:6,children:i.jsx(c("PolarisIGCorePressable"),{onPress:a,children:i.jsx("div",{className:"_aacd _aace",children:i.jsx(c("PolarisIGCoreXFilledIcon"),{alt:d("PolarisDirectStrings").DECLINE_CALL_MODAL_STRING,color:"web-always-white"})})})}),i.jsx(c("PolarisIGCorePressable"),{onPress:e,children:i.jsx("div",{className:"_aacd _aacf",children:p?i.jsx(c("PolarisIGCoreVideoChatFilled24Icon"),{alt:d("PolarisDirectStrings").JOIN_CALL_MODAL_STRING,color:"web-always-white"}):i.jsx(c("PolarisIGCoreCallFilled24Icon"),{alt:d("PolarisDirectStrings").JOIN_CALL_MODAL_STRING,color:"web-always-white"})})})]})]})]}):null}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a},98,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("BanzaiScubaMigrationFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1949898");c=b("FalcoLoggerInternal").create("banzai_scuba_migration",a);e.exports=c},null,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("BanzaiScuba_DEPRECATED",["BanzaiScubaMigrationFalcoEvent","FBLogger"],function(a,b,c,d,e,f,g){a=function(){function a(a,b,d){this.posted=!1,a||c("FBLogger")("BanzaiScuba").warn("Can't post a sample without a dataset"),this.dataset=a,this.$1=b,this.options=d}var b=a.prototype;b.$2=function(a,b,d){if(this.posted){c("FBLogger")("BanzaiScuba").warn("Trying to add to an already posted sample");return a}a=a||{};a[b]=d;return a};b.addNormal=function(a,b){this.normal=this.$2(this.normal,a,b);return this};b.addInteger=function(a,b){this["int"]=this.$2(this["int"],a,b);return this};b.addDenorm=function(a,b){this.denorm=this.$2(this.denorm,a,b);return this};b.addTagSet=function(a,b){this.tags=this.$2(this.tags,a,b);return this};b.addNormVector=function(a,b){this.normvector=this.$2(this.normvector,a,b);return this};b.post=function(){var a=this;if(this.posted){c("FBLogger")("BanzaiScuba").warn("Trying to re-post");return}if(!this.dataset)return;var b={};b._ds=this.dataset;b._options=this.options;this.normal&&(b.normal=this.normal);this["int"]&&(b["int"]=this["int"]);this.denorm&&(b.denorm=this.denorm);this.tags&&(b.tags=this.tags);this.normvector&&(b.normvector=this.normvector);this.$1!==null&&this.$1!==""&&this.$1!==void 0&&(b._lid=this.$1);c("BanzaiScubaMigrationFalcoEvent").log(function(){return{dataset:a.dataset,payload:b}});this.posted=!0};return a}();g["default"]=a},98,typeof self!=="undefined"&&self.document&&self.document.currentScript);