if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }/*FB_PKG_DELIM*/

__d("PolarisPostFastOptionCopyAdId.react",["fbt","IGCoreDialog","PolarisClipboard","PolarisIGCoreText","PolarisToastActions","react","react-redux-wwwig"],function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j=h._("Ad id copied.");function a(a){a=a.adInfo;var b=a.ad_id,e=d("react-redux-wwwig").useDispatch();a=function(){if(b==null)return;d("PolarisClipboard").copy(b);e(d("PolarisToastActions").showToast({text:j}))};return i.jsx(d("IGCoreDialog").IGCoreDialogItem,{onClick:a,children:i.jsx(c("PolarisIGCoreText").Body,{children:h._("Ad ID: {ad id} (Copy)",[h._param("ad id",b)])})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a},98,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("PolarisPostFastOptionCopyAdMediaId.react",["fbt","IGCoreDialog","PolarisClipboard","PolarisIGCoreText","PolarisToastActions","react","react-redux-wwwig"],function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j=h._("Media id copied.");function a(a){var b=a.post,e=d("react-redux-wwwig").useDispatch();a=function(){d("PolarisClipboard").copy(b.id),e(d("PolarisToastActions").showToast({text:j}))};return i.jsx(d("IGCoreDialog").IGCoreDialogItem,{onClick:a,children:i.jsx(c("PolarisIGCoreText").Body,{children:h._("Media ID: {media id} (Copy)",[h._param("media id",b.id)])})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a},98,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("PolarisPostFastOptionCopyAdTrackingToken.react",["fbt","IGCoreDialog","PolarisClipboard","PolarisIGCoreText","PolarisToastActions","react","react-redux-wwwig"],function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j=h._("Tracking token copied.");function a(a){a=a.adInfo;var b=a.tracking_token,e=d("react-redux-wwwig").useDispatch();a=function(){if(b==null)return;d("PolarisClipboard").copy(b);e(d("PolarisToastActions").showToast({text:j}))};return i.jsx(d("IGCoreDialog").IGCoreDialogItem,{onClick:a,children:i.jsx(c("PolarisIGCoreText").Body,{children:h._("Copy Ad Tracking Token")})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a},98,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("PolarisPostFastOptionInjectAd.react",["fbt","IGCoreDialog","PolarisIGCoreText","PolarisNavigationUtils","URI","react"],function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j="https://www.internalfb.com/intern/instagram/ads/injecttool/";function a(a){a=a.adInfo;a=a.ad_id;if(a==null)return null;var b=new(c("URI"))(j).addQueryData({custom_ad_ids:a}).toString();a=function(){d("PolarisNavigationUtils").openURL(b,{openInNewTab:!0})};return i.jsx(d("IGCoreDialog").IGCoreDialogItem,{onClick:a,children:i.jsx(c("PolarisIGCoreText").Body,{children:h._("Inject Ad")})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a},98,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("PolarisPostFastOptionOpenAdIDD.react",["fbt","IGCoreDialog","PolarisIGCoreText","PolarisNavigationUtils","URI","react"],function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j="https://internalfb.com/intern/ads/idd/",k="ig_web";function a(a){a=a.adInfo;a=a.ad_id;if(a==null)return null;var b=new(c("URI"))(j).addQueryData({id:a,referral:k}).toString();a=function(){d("PolarisNavigationUtils").openURL(b,{openInNewTab:!0})};return i.jsx(d("IGCoreDialog").IGCoreDialogItem,{onClick:a,children:i.jsx(c("PolarisIGCoreText").Body,{children:h._("Open Ad in IDD")})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a},98,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("PolarisPostFastOptionOpenAdInfo.react",["fbt","IGCoreDialog","PolarisIGCoreText","PolarisNavigationUtils","URI","react"],function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j="https://internalfb.com/intern/ads/ad_info.php/";function a(a){a=a.adInfo;a=a.ad_id;if(a==null)return null;var b=new(c("URI"))(j).addQueryData({id:a}).toString();a=function(){d("PolarisNavigationUtils").openURL(b,{openInNewTab:!0})};return i.jsx(d("IGCoreDialog").IGCoreDialogItem,{onClick:a,children:i.jsx(c("PolarisIGCoreText").Body,{children:h._("Open Ad in Ad Info")})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a},98,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("PolarisAdDebugToolModalContent.react",["fbt","IGCoreDialog","PolarisIGCoreText","PolarisPostFastOptionCopyAdId.react","PolarisPostFastOptionCopyAdMediaId.react","PolarisPostFastOptionCopyAdTrackingToken.react","PolarisPostFastOptionInjectAd.react","PolarisPostFastOptionOpenAdIDD.react","PolarisPostFastOptionOpenAdInfo.react","PolarisadsSelectors","react"],function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a){var b=a.post,e=a.forFeed;a=a.onClose;var f=null,g=d("PolarisadsSelectors").useFeedAdInfo(b.id,function(a){return a}),j=d("PolarisadsSelectors").useStoryAdInfo(b.id,function(a){return a});e?f=g:f=j;return i.jsxs(d("IGCoreDialog").IGCoreDialog,{onModalClose:a,children:[i.jsx(d("IGCoreDialog").IGCoreDialogItem,{children:i.jsx(c("PolarisIGCoreText").Section,{children:h._("[Meta-only] Ad Debug Tool")})}),i.jsx(c("PolarisPostFastOptionCopyAdMediaId.react"),{post:b}),f!=null&&i.jsxs(i.Fragment,{children:[i.jsx(c("PolarisPostFastOptionCopyAdId.react"),{adInfo:f}),i.jsx(c("PolarisPostFastOptionCopyAdTrackingToken.react"),{adInfo:f}),i.jsx(c("PolarisPostFastOptionOpenAdIDD.react"),{adInfo:f}),i.jsx(c("PolarisPostFastOptionOpenAdInfo.react"),{adInfo:f}),i.jsx(c("PolarisPostFastOptionInjectAd.react"),{adInfo:f})]})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a},98,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("PolarisInstagramAdHideButtonFalcoEvent",["PolarisFalcoLogger"],function(a,b,c,d,e,f,g){"use strict";var h={falco:!0,pigeon:!1};a=function(){function a(){}a.log=function(a){d("PolarisFalcoLogger").FalcoLogger.log("instagram_ad_hide_button",a(),{},h)};return a}();g["default"]=a},98,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("PolarisHideAdDialogItem.react",["IGCoreDialog","PolarisContainerModuleUtils","PolarisGenericStrings","PolarisInstagramAdHideButtonFalcoEvent","PolarisuseAnalyticsContext","PolarisuseViewer","react"],function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.adId,e=a.adTrackingToken,f=a.mpk,g=a.onClick,i=c("PolarisuseViewer")(),j=c("PolarisuseAnalyticsContext")();a=function(){c("PolarisInstagramAdHideButtonFalcoEvent").log(function(){return{ad_id:b,m_pk:f,pk:i==null?void 0:i.id,source_of_action:d("PolarisContainerModuleUtils").getContainerModule(j),tracking_token:e}}),g()};return h.jsx(d("IGCoreDialog").IGCoreDialogItem,{color:"ig-error-or-destructive",onClick:a,children:d("PolarisGenericStrings").HIDE_AD_TEXT})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a},98,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("PolarisInstagramAdReportButtonFalcoEvent",["PolarisFalcoLogger"],function(a,b,c,d,e,f,g){"use strict";var h={falco:!0,pigeon:!1};a=function(){function a(){}a.log=function(a){d("PolarisFalcoLogger").FalcoLogger.log("instagram_ad_report_button",a(),{},h)};return a}();g["default"]=a},98,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("PolarisReportAdDialogItem.react",["IGCoreDialog","PolarisContainerModuleUtils","PolarisGenericStrings","PolarisInstagramAdReportButtonFalcoEvent","PolarisLinkBuilder","PolarisisUserLoggedIn","PolarisuseAnalyticsContext","PolarisuseViewer","browserHistory","react"],function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.adId,e=a.adTrackingToken,f=a.mpk,g=a.onClick,i=c("PolarisuseViewer")(),j=c("PolarisuseAnalyticsContext")();a=function(){!d("PolarisisUserLoggedIn").isUserLoggedIn()?d("browserHistory").redirect(d("PolarisLinkBuilder").buildLoginLink(window.location.href,{source:"logged_out_post_report_redirect"})):c("PolarisInstagramAdReportButtonFalcoEvent").log(function(){return{ad_id:b,m_pk:f,pk:i==null?void 0:i.id,source_of_action:d("PolarisContainerModuleUtils").getContainerModule(j),tracking_token:e}}),g()};return h.jsx(d("IGCoreDialog").IGCoreDialogItem,{color:"ig-error-or-destructive",onClick:a,children:d("PolarisGenericStrings").REPORT_AD_TEXT})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a},98,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("PolarisWAISTDialogItem.react",["fbt","IGCoreDialog","react"],function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a){a=a.onClick;return i.jsx(d("IGCoreDialog").IGCoreDialogItem,{onClick:a,children:h._("Why you're seeing this ad?")})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a},98,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("PolarisWAISTModalContent.react",["fbt","IGCoreModal","PolarisIGBloksApp","PolarisIGCoreBox","PolarisIGCoreModalHeader","PolarisIGCoreSVGIconButton","PolarisIGCoreSpinner","PolarisIGCoreXPanoOutlineIcon","PolarisLogger","PolarisPageIdentifierConstants","react"],function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j=d("react").useEffect,k=h._("Why you're seeing this ad"),l="com.bloks.www.bloks.ig_waist_landing_page",m=h._("Close"),n="108px";function a(a){var b=a.onClose;a=a.adId;j(function(){d("PolarisLogger").logPageView(c("PolarisPageIdentifierConstants").adsWAISTModal)},[]);var e=i.jsxs(i.Fragment,{children:[i.jsx(c("PolarisIGCoreModalHeader"),{children:k}),i.jsx(c("PolarisIGCoreBox"),{direction:"row",justifyContent:"center",margin:4,children:i.jsx(c("PolarisIGCoreSpinner"),{})})]});return i.jsx(c("IGCoreModal"),{onClose:b,children:i.jsxs(c("PolarisIGCoreBox"),{maxHeight:"100%",overflow:"auto",children:[i.jsx(c("PolarisIGCoreBox"),{justifyContent:"center",minHeight:n,children:i.jsx(c("PolarisIGBloksApp"),{appId:l,fallback:e,params:{ad_id:a}})}),i.jsx(c("PolarisIGCoreBox"),{padding:1,position:"absolute",right:!0,children:i.jsx(c("PolarisIGCoreSVGIconButton"),{onClick:b,children:i.jsx(c("PolarisIGCoreXPanoOutlineIcon"),{alt:m,size:18})})})]})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a},98,typeof self!=="undefined"&&self.document&&self.document.currentScript);