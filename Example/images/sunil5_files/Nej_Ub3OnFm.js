if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }/*FB_PKG_DELIM*/

__d("AboutThisAccountRefererTypes",[],function(a,b,c,d,e,f){"use strict";a={ACCOUNT_SETTINGS:"AccountSettings",FEED:"Feed",FEED_ADS:"FeedAds",PROFILE_BIO:"ProfileBio",PROFILE_MORE:"ProfileMore",PROFILE_USERNAME:"ProfileUsername",QUICK_PROMOTION:"QuickPromotion",SHOPPING_HOME_ADS:"ShoppingHomeAds",SHOPPING_PDP:"ShoppingPDP",STORY:"Story",UNKNOWN:"unknown"};b=a;f["default"]=b},66,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("PolarisAboutThisAccountPage.react",["PolarisIGBloksApp","PolarisIGCoreBox","PolarisIGCoreSpinner","PolarisPageIdentifierConstants","PolarisPageMetadata.react","react"],function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.user;a=a.referer_type;var d=h.jsx(c("PolarisIGCoreBox"),{height:500,children:h.jsx(c("PolarisIGCoreSpinner"),{position:"absolute"})});d=h.jsx(c("PolarisIGBloksApp"),{appId:"com.instagram.interactions.about_this_account",fallback:d,options:{cached:!0},params:{target_user_id:b.id,referer_type:a}});return h.jsxs(h.Fragment,{children:[h.jsx(c("PolarisPageMetadata.react"),{id:c("PolarisPageIdentifierConstants").aboutThisAccountPage}),h.jsx("div",{children:d})]})}a.displayName=a.name+" [from "+f.id+"]";g.PAGE_ID=c("PolarisPageIdentifierConstants").aboutThisAccountPage;g.PolarisAboutThisAccountPage=a},98,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("PolarisHighlightsConstants",[],function(a,b,c,d,e,f){"use strict";a=15;b=600;c=445;d=300;f.REQUEST_NUM_STORIES=a;f.POST_PICKER_HEIGHT=b;f.POST_PICKER_MAX_WIDTH=c;f.POST_PICKER_MOBILE_MAX_WIDTH=d},66,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("PolarisNewHighlightsStrings",["fbt"],function(a,b,c,d,e,f,g,h){"use strict";a=h._("Stories");b=h._("Story");c=h._("New Highlight");d=h._("Edit Highlight");e=h._("Highlight Name");f=h._("Add to your story");var i=h._("Keep your stories in your archive after they disappear, so you can look back on your memories. Only you can see what's in your archive."),j=h._("Plus icon"),k=h._("New"),l=h._("Selected"),m=h._("Select Cover");h=h._("Cover photo for highlight");g.STORIES_TITLE_TEXT=a;g.STORY_ALT_TEXT=b;g.NEW_HIGHLIGHT_TEXT=c;g.EDIT_HIGHLIGHT_TEXT=d;g.HIGHLIGHT_NAME_TEXT=e;g.NO_ARCHIVES_TITLE_TEXT=f;g.NO_ARCHIVES_BODY_TEXT=i;g.NEW_HIGHLIGHT_BUTTON_ALT_TEXT=j;g.NEW_HIGHLIGHT_BUTTON_TEXT=k;g.SELECTED_TAB_TITLE_TEXT=l;g.NEW_HIGHLIGHT_COVER_TEXT=m;g.HIGHLIGHT_COVER_ALT_TEXT=h},98,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("usePolarisStoryGridData",["PolarisstorySelectors","PolarisuserSelectors","nullthrows","react-redux-wwwig"],function(a,b,c,d,e,f,g){"use strict";a=function(){var a=d("react-redux-wwwig").useSelector(function(a){return c("nullthrows")(d("PolarisuserSelectors").getViewer(a))}),b=d("react-redux-wwwig").useSelector(function(a){return d("PolarisstorySelectors").getUserArchivedStories(a)}).sort(function(a,b){return parseFloat(b.postedAt)-parseFloat(a.postedAt)}),e=d("react-redux-wwwig").useSelector(function(a){return(a=a.stories.archiveReelsInfo)==null?void 0:a.isLoading}),f=d("react-redux-wwwig").useSelector(function(a){return a.stories.loadedStoryArchives}),g=b.length===0&&f;return{user:a,archivedStories:b,isLoading:e,endOfArchives:f,noArchives:g}};g.usePolarisStoryGridData=a},98,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("PolarisAddHighlightsPreviewOverlay.react",["fbt","PolarisIGCoreBox","PolarisIGCoreCheckPanoFilledIcon","react"],function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a){var b=a.isActive;a=a.isSelected;b=b||a;return i.jsx("div",{className:"ekq1a7f9 on4d8346 s8sjc6am myo4itp8 jcxyg2ei cqf1kptm alzwoclg z6erz7xo"+(b?" rohq7b5m":""),children:i.jsx("div",{className:"i85zmo3j jcxyg2ei alzwoclg nmlomj2f qwcclf47 e7u6y3za qmqpeqxj f5qk8eb6 gd17zc4t rqw7d97v s2yh183q rkk71h3c otncrh77 qt5ypare dyqfs3td s8sjc6am"+(a?" tdwb7kzr":""),children:i.jsx(c("PolarisIGCoreBox"),{alignItems:"center",justifyContent:"center",children:a&&i.jsx(c("PolarisIGCoreCheckPanoFilledIcon"),{alt:h._("Check"),color:"web-always-white",size:13})})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a},98,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("PolarisAddHighlightsStoryDateOverlay.react",["PolarisUA","PolarisformatDate","react","stylex"],function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={dateBlock:{position:"s8sjc6am",paddingTop:"ngbj85sm",paddingEnd:"pdnn8mpk",paddingBottom:"rt9i6ysf",paddingStart:"f1iqohp5",borderTopStartRadius:"h8391g91",borderTopEndRadius:"m0cukt09",borderBottomEndRadius:"kpwa50dg",borderBottomStartRadius:"ta68dy8c",top:"ekq1a7f9",backgroundColor:"sn8wo72s",color:"qglj76s2",pointerEvents:"l10tt5db",userSelect:"f14ij5to",textAlign:"hsphh064",width:"aa3hqudo"},dateText:{fontWeight:"igjjae4c"},monthText:{marginTop:"qa7vbok1"},yearText:{marginTop:"qa7vbok1",fontSize:"glosn74e"},archivesMarginDesktop:{marginTop:"gmvq99xn",marginStart:"a60616oh"},archivesMarginMobile:{marginTop:"th51lws0",marginStart:"dkzmklf5"},modalMargin:{marginStart:"jbg88c62",marginTop:"th51lws0"}};function a(a){var b=a.inArchivePage,e=a.hasYearInOverlay;a=a.postedAt;return h.jsxs("div",{className:c("stylex")(i.dateBlock,b===!0?d("PolarisUA").isMobile()?i.archivesMarginMobile:i.archivesMarginDesktop:i.modalMargin),children:[h.jsx("div",{className:c("stylex")(i.dateText),children:c("PolarisformatDate")(a,"j")}),h.jsx("div",{className:c("stylex")(i.monthText),children:c("PolarisformatDate")(a,"M")}),e&&h.jsx("div",{className:c("stylex")(i.yearText),children:c("PolarisformatDate")(a,"Y")})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a},98,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("PolarisAddHighlightsStoryPreview.react",["PolarisAddHighlightsPreviewOverlay.react","PolarisAddHighlightsStoryDateOverlay.react","PolarisAspectRatio.react","PolarisDateHelpers","PolarisIGCoreBox","PolarisIGCorePressable","PolarisIGCoreSpinner","react"],function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useState,j=9/16,k=3,l=134;function m(a,b,c,e){return!a&&(b===0||d("PolarisDateHelpers").dateTypeToString(d("PolarisDateHelpers").pyTimestampToDateType(c))!==d("PolarisDateHelpers").dateTypeToString(d("PolarisDateHelpers").pyTimestampToDateType(Number(e))))}function n(a,b,c,e){return!a&&(b===0||d("PolarisDateHelpers").dateTypeToString(d("PolarisDateHelpers").pyTimestampToDateType(Number(c))).split("-")[0]!==d("PolarisDateHelpers").dateTypeToString(d("PolarisDateHelpers").pyTimestampToDateType(Number(e))).split("-")[0])}function a(a){var b=a.isEditing,d=a.index,e=a.posts,f=a.selectedStoryIds,g=a.updateSelectedStoryIds;a=a.isLoading;var i=d===e.length;if(i===!0&&a===!0)return h.jsx(c("PolarisIGCoreBox"),{alignItems:"center",display:"flex",marginBottom:4,marginTop:8,minWidth:"100%",children:h.jsx(c("PolarisIGCoreSpinner"),{size:"medium"})},d);i=e[d];a=m(b,d,(a=(a=e[d])==null?void 0:a.postedAt)!=null?a:0,(a=(a=e[d-1])==null?void 0:a.postedAt)!=null?a:0);d=a?n(b,d,(b=(b=e[d])==null?void 0:b.postedAt)!=null?b:0,(e=(b=e[d-1])==null?void 0:b.postedAt)!=null?e:0):!1;return h.jsx(c("PolarisIGCoreBox"),{height:"auto",maxWidth:"calc(100%/"+k+")",minWidth:"calc(100%/"+k+")",children:h.jsx("div",{className:"tr46kb4q h4fuj9y9",children:h.jsx(o,{hasDateOverlay:a,hasYearInOverlay:d,post:i,selectedStoryIds:f,updateSelectedStoryIds:g})})},i.id)}a.displayName=a.name+" [from "+f.id+"]";function b(a){return h.jsx(c("PolarisIGCoreBox"),{height:l,padding:12,width:l},a)}b.displayName=b.name+" [from "+f.id+"]";function o(b){var d=b.post,e=b.selectedStoryIds,f=b.updateSelectedStoryIds,a=b.hasDateOverlay;b=b.hasYearInOverlay;var g=d.thumbnailSrc,k=i(!1),l=k[0],n=k[1];return h.jsxs(c("PolarisIGCorePressable"),{className:"pytsy3co icdlwmnq fsf7x5fv",onMouseEnter:function(){return n(!0)},onMouseLeave:function(){return n(!1)},onPress:function(){return f(d.id)},children:[g!=null?h.jsx(c("PolarisAspectRatio.react"),{aspectRatio:j,className:"f14ij5to l10tt5db thixwtv8 pz7na3tt",style:{backgroundImage:"url("+g+")"}}):null,h.jsx(c("PolarisAddHighlightsPreviewOverlay.react"),{isActive:l,isSelected:e.includes(d.id)}),a&&h.jsx(c("PolarisAddHighlightsStoryDateOverlay.react"),{hasYearInOverlay:b,postedAt:Number(d.postedAt)})]})}o.displayName=o.name+" [from "+f.id+"]";g.POST_PREVIEW_SIZE=l;g.hasDateOverlay=m;g.hasYearInOverlay=n;g.renderAddHighlightsStoryPreview=a;g.renderAddHighlightsPlaceholder=b},98,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("PolarisAddHighlightsCover.react",["IGCoreDialog","IGCoreModal","PolarisAddHighlightsStoryPreview.react","PolarisGenericStrings","PolarisHighlightsConstants","PolarisIGCoreBox","PolarisIGCoreModalHeader","PolarisIGTheme.react","PolarisIGVirtualGrid.react","PolarisNewHighlightsStrings","PolarisstorySelectors","PolarisuserSelectors","nullthrows","react","react-redux-wwwig","stylex"],function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useState;function a(a){var b=a.editing;b=b===void 0?!1:b;var e=a.highlightThumbnailUrl,f=a.onBack,g=a.onClose,j=a.onDone,k=a.requestInFlight,l=a.selectedStoryIds,m=c("nullthrows")(d("react-redux-wwwig").useSelector(function(a){return d("PolarisuserSelectors").getViewer(a)})),n=d("react-redux-wwwig").useSelector(function(a){return d("PolarisstorySelectors").getStoriesbyUser(a,m).filter(function(a){return l.includes(a.id)})}).sort(function(a,b){return parseFloat(b.postedAt)-parseFloat(a.postedAt)});a=i(b&&e!=null?null:n[0]);var o=a[0],p=a[1],q=function(a){(o==null||(o==null?void 0:o.id)!==a)&&p(n.filter(function(b){return b.id===a})[0])};b=d("PolarisIGTheme.react").useTheme();a=b.getTheme()===d("PolarisIGTheme.react").IGTheme.Dark;return h.jsxs(c("IGCoreModal"),{"aria-label":d("PolarisNewHighlightsStrings").NEW_HIGHLIGHT_COVER_TEXT,fixedWidth:!1,onClose:g,children:[h.jsx(c("PolarisIGCoreModalHeader"),{onBack:f,onClose:g,children:h.jsx(c("PolarisIGCoreBox"),{padding:4,children:d("PolarisNewHighlightsStrings").NEW_HIGHLIGHT_COVER_TEXT})}),h.jsxs(c("PolarisIGCoreBox"),{flex:"shrink",maxHeight:d("PolarisHighlightsConstants").POST_PICKER_HEIGHT,maxWidth:d("PolarisHighlightsConstants").POST_PICKER_MAX_WIDTH,minWidth:d("PolarisHighlightsConstants").POST_PICKER_MAX_WIDTH,overflow:"auto",children:[h.jsxs(c("PolarisIGCoreBox"),{height:d("PolarisHighlightsConstants").POST_PICKER_HEIGHT/10*6.6,children:[h.jsx("div",{className:"s8sjc6am mfclru0v pytsy3co hf30pyar lq84ybu9",children:h.jsx("div",{className:"pz7na3tt qvs475rp thixwtv8 mfclru0v pytsy3co",style:{backgroundImage:"\n                linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),\n                url("+((f=(b=o==null?void 0:o.thumbnailSrc)!=null?b:e)!=null?f:"")+")\n              "}})}),h.jsx("div",{className:"hf30pyar lq84ybu9 r227ecj6 gt60zsk1",children:h.jsx(c("PolarisIGCoreBox"),{height:d("PolarisHighlightsConstants").POST_PICKER_HEIGHT/10*6.6,children:h.jsxs("div",{className:"pytsy3co jcxyg2ei alzwoclg hf30pyar lq84ybu9",children:[h.jsx("img",{alt:d("PolarisNewHighlightsStrings").HIGHLIGHT_COVER_ALT_TEXT,className:"pytsy3co mfclru0v p9wrh9lq",src:(g=o==null?void 0:o.thumbnailSrc)!=null?g:e}),h.jsx("div",{className:c("stylex")({"position-1":"s8sjc6am","padding-bottom-1":"ao12wbzc","width-1":"cht30kra","margin-start-1":"p8zq7ayg","margin-end-1":"pry8b2m5","start-1":"myo4itp8","end-1":"on4d8346","display-1":"alzwoclg","align-self-1":"gb2oqlaf","border-top-start-radius-1":"qmqpeqxj","border-top-end-radius-1":"e7u6y3za","border-bottom-end-radius-1":"qwcclf47","border-bottom-start-radius-1":"nmlomj2f"},a?{"box-shadow-1":"lz47dhg1"}:{"box-shadow-1":"j52egpn0"})})]})})})]}),h.jsx(c("PolarisIGVirtualGrid.react"),{containerSize:d("PolarisHighlightsConstants").POST_PICKER_HEIGHT/10*3.4,itemCount:l.length,itemsPerRow:3,onScroll:function(){},renderer:function(a){a=a.index;return d("PolarisAddHighlightsStoryPreview.react").renderAddHighlightsStoryPreview({isEditing:!0,index:a,posts:n,selectedStoryIds:o!=null?[o.id]:[],updateSelectedStoryIds:q,isLoading:!1})},rendererPlaceholder:d("PolarisAddHighlightsStoryPreview.react").renderAddHighlightsPlaceholder,rowClassName:"owmke36a"})]}),h.jsx(d("IGCoreDialog").IGCoreDialogItem,{color:"ig-primary-button",loading:k,onClick:function(){return j(o==null?void 0:o.id)},children:d("PolarisGenericStrings").DONE_TEXT})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a},98,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("useSubscriptionValue",["React"],function(a,b,c,d,e,f,g){b=d("React");var h=b.useCallback,i=b.useEffect,j=b.useState;function a(a){var b=a.getCurrentValue,c=a.subscribe;a=j(function(){return b()});var d=a[0],e=a[1],f=h(function(){e(b)},[b]);a=j(function(){return b});var g=a[0];a=a[1];g!==b&&(a(function(){return b}),f());i(function(){var a=!1,b=function(){a||f()},d=c(b);f();return function(){a=!0,d()}},[f,c]);return d}g["default"]=a},98,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("useWindowSize",["ExecutionEnvironment","react","throttle","useSubscriptionValue"],function(a,b,c,d,e,f,g){"use strict";var h=d("react").useCallback;function i(){return!c("ExecutionEnvironment").canUseDOM?{innerHeight:0,innerWidth:0,outerHeight:0,outerWidth:0}:{innerHeight:window.innerHeight,innerWidth:window.innerWidth,outerHeight:window.outerHeight,outerWidth:window.outerWidth}}function a(a){a===void 0&&(a=500);var b=h(function(b){var d=c("throttle")(b,a);window.addEventListener("resize",d);return function(){window.removeEventListener("resize",d)}},[a]);return c("useSubscriptionValue")({getCurrentValue:i,subscribe:b})}g["default"]=a},98,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("PolarisAddHighlightsStoryPicker.react",["PolarisAddHighlightsStoryPreview.react","PolarisHighlightsConstants","PolarisIGCoreBox","PolarisIGCoreSpinner","PolarisIGVirtualGrid.react","PolarisStoryActions","PolarisstorySelectors","react","react-redux-wwwig","usePolarisStoryGridData","useWindowSize"],function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=d("react");var i=b.useCallback,j=b.useEffect,k=3,l=.1;function a(a){var b=a.editing,e=b===void 0?!1:b,f=a.existingSelectedStories,g=a.selectedStoryIds,m=a.updateSelectedStoryIds,n=d("react-redux-wwwig").useDispatch();b=d("usePolarisStoryGridData").usePolarisStoryGridData();var o=b.user,p=b.archivedStories,q=b.isLoading,r=b.endOfArchives,s=d("react-redux-wwwig").useSelector(function(a){return d("PolarisstorySelectors").getStoriesbyUser(a,o).filter(function(a){var b;return((b=f)!=null?b:[]).includes(a.id)})}).sort(function(a,b){return parseFloat(b.postedAt)-parseFloat(a.postedAt)}),t=i(function(){return d("PolarisStoryActions").requestArchivedStories(d("PolarisHighlightsConstants").REQUEST_NUM_STORIES)},[]);a=function(a){q!==!0&&(a.numScreensFromEnd<l&&a.numScreensFromStart>0&&!r&&n(t()))};j(function(){n(t())},[n,t]);b=p.length>0;var u=q===!0?1:0,v=c("useWindowSize")();v=v.innerHeight;v=Math.min(v-150,d("PolarisHighlightsConstants").POST_PICKER_HEIGHT);return h.jsx(h.Fragment,{children:b?h.jsx(c("PolarisIGCoreBox"),{children:h.jsx(c("PolarisIGVirtualGrid.react"),{containerSize:v,itemCount:e?s.length+u:p.length+u,itemsPerRow:k,onScroll:e?function(){}:a,renderer:function(a){a=a.index;return d("PolarisAddHighlightsStoryPreview.react").renderAddHighlightsStoryPreview({isEditing:e,index:a,posts:e?s:p,selectedStoryIds:g,updateSelectedStoryIds:m,isLoading:q})},rowClassName:"owmke36a o7bt71qk"})}):h.jsx(c("PolarisIGCoreBox"),{alignItems:"center",height:d("PolarisHighlightsConstants").POST_PICKER_HEIGHT,marginTop:4,children:h.jsx(c("PolarisIGCoreSpinner"),{size:"medium"})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a},98,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("PolarisEditHighlightsStoryPickerTabs.react",["PolarisAddHighlightsStoryPicker.react","PolarisIGCoreTabV2","PolarisIGCoreTabsV2","PolarisIGCoreText","PolarisNewHighlightsStrings","react"],function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){a.currentHighlightStoryIds;var b=a.storiesTabStoryIds,e=a.selectedTabStoryIds;a=a.updateSelectedStoryIds;return h.jsxs(c("PolarisIGCoreTabsV2"),{children:[h.jsx(c("PolarisIGCoreTabV2"),{node:h.jsx(c("PolarisAddHighlightsStoryPicker.react"),{editing:!0,existingSelectedStories:e,selectedStoryIds:b,updateSelectedStoryIds:a}),children:h.jsx(c("PolarisIGCoreText").Section,{color:"ig-primary-text",children:d("PolarisNewHighlightsStrings").SELECTED_TAB_TITLE_TEXT})}),h.jsx(c("PolarisIGCoreTabV2"),{node:h.jsx(c("PolarisAddHighlightsStoryPicker.react"),{editing:!1,selectedStoryIds:b,updateSelectedStoryIds:a}),children:h.jsx(c("PolarisIGCoreText").Section,{color:"ig-primary-text",children:d("PolarisNewHighlightsStrings").STORIES_TITLE_TEXT})})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a},98,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("PolarisAddHighlightsModal.react",["IGCoreDialog","IGCoreModal","PolarisAddHighlightsStoryPicker.react","PolarisEditHighlightsStoryPickerTabs.react","PolarisGenericStrings","PolarisHighlightsConstants","PolarisIGCoreBox","PolarisIGCoreModalHeader","PolarisNewHighlightsStrings","react"],function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useState;function a(a){var b=a.allowEmptySelection;b=b===void 0?!0:b;var e=a.disablePopInAnimation,f=a.editing;f=f===void 0?!1:f;var g=a.onBack,j=a.onClose,k=a.onDone,l=a.onUpdateStoryIds,m=a.requestInFlight;a=a.currentHighlightStoryIds;a=a===void 0?[]:a;var n=i(a),o=n[0],p=n[1];n=function(a){o.includes(a)||p(function(b){return[].concat(b,[a])}),l(a)};b=a.length===0&&!b||m;return h.jsxs(c("IGCoreModal"),{"aria-label":d("PolarisNewHighlightsStrings").STORIES_TITLE_TEXT,disablePopInAnimation:e,fixedWidth:!1,onClose:j,children:[h.jsx(c("PolarisIGCoreModalHeader"),{onBack:g,onClose:j,children:h.jsx(c("PolarisIGCoreBox"),{padding:4,children:d("PolarisNewHighlightsStrings").STORIES_TITLE_TEXT})}),h.jsxs(c("PolarisIGCoreBox"),{flex:"shrink",maxHeight:f?d("PolarisHighlightsConstants").POST_PICKER_HEIGHT+41:d("PolarisHighlightsConstants").POST_PICKER_HEIGHT,maxWidth:d("PolarisHighlightsConstants").POST_PICKER_MAX_WIDTH,minWidth:d("PolarisHighlightsConstants").POST_PICKER_MAX_WIDTH,overflow:"auto",children:[f&&h.jsx(c("PolarisEditHighlightsStoryPickerTabs.react"),{currentHighlightStoryIds:a,selectedTabStoryIds:o,storiesTabStoryIds:a,updateSelectedStoryIds:n}),!f&&h.jsx(c("PolarisAddHighlightsStoryPicker.react"),{editing:f,selectedStoryIds:a,updateSelectedStoryIds:n})]}),h.jsx(d("IGCoreDialog").IGCoreDialogItem,{color:"ig-primary-button",disabled:b,loading:m,onClick:function(){return k()},children:d("PolarisGenericStrings").NEXT})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a},98,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("isStringNullOrWhitespaceOnly",[],function(a,b,c,d,e,f){"use strict";function a(a){return a==null||a.trim()===""}f["default"]=a},66,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("PolarisNewHighlightsModal.react",["IGCoreDialog","IGCoreModal","PolarisIGCoreBox","PolarisIGCoreModalHeader","PolarisIGCoreSpinner","PolarisIGCoreText","PolarisIGCoreTextInput","PolarisIGCoreThumbnail","PolarisNewHighlightsStrings","isStringNullOrWhitespaceOnly","react"],function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=100;function a(a){var b=a.actionText,e=a.editing,f=a.errorMessage,g=a.highlightName,j=a.onActionClick,k=a.onClose,l=a.onUpdateHighlightsName,m=a.requestInFlight;a=a.thumbnailSrc;var n=c("isStringNullOrWhitespaceOnly")(g);return h.jsxs(c("IGCoreModal"),{"aria-label":e?d("PolarisNewHighlightsStrings").EDIT_HIGHLIGHT_TEXT:d("PolarisNewHighlightsStrings").NEW_HIGHLIGHT_TEXT,onClose:k,children:[h.jsx(c("PolarisIGCoreModalHeader"),{onClose:k,children:h.jsx(c("PolarisIGCoreBox"),{padding:4,children:e?d("PolarisNewHighlightsStrings").EDIT_HIGHLIGHT_TEXT:d("PolarisNewHighlightsStrings").NEW_HIGHLIGHT_TEXT})}),h.jsxs(c("PolarisIGCoreBox"),{margin:5,children:[a!=null&&h.jsx(c("PolarisIGCoreBox"),{alignItems:"center",marginBottom:4,width:"100%",children:h.jsx(c("PolarisIGCoreThumbnail"),{alt:d("PolarisNewHighlightsStrings").STORY_ALT_TEXT,dimension:i,shape:"rounded",src:a})}),h.jsx(c("PolarisIGCoreTextInput"),{autoComplete:"off",autoFocus:!0,name:"highlightName",onChange:function(a){l(a.target.value)},placeholder:d("PolarisNewHighlightsStrings").HIGHLIGHT_NAME_TEXT,value:g}),f!=null&&f.toString()!==""&&h.jsx(c("PolarisIGCoreBox"),{marginBottom:2,marginTop:1,children:h.jsx(c("PolarisIGCoreText").Footnote,{color:"ig-error-or-destructive",children:f})})]}),h.jsx(d("IGCoreDialog").IGCoreDialogItem,{color:"ig-primary-button",disabled:n,onClick:j,children:m===!0?h.jsx(c("PolarisIGCoreBox"),{alignItems:"center",children:h.jsx(c("PolarisIGCoreSpinner"),{size:"small"})}):b})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a},98,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("PolarisCreateAndAddHighlightsModal.react",["$InternalEnum","PolarisAddHighlightsCover.react","PolarisAddHighlightsModal.react","PolarisGenericStrings","PolarisNewHighlightsModal.react","PolarisStoryActions","react","react-redux-wwwig"],function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useState,j=b("$InternalEnum").Mirrored(["Name","Stories","Cover"]);function a(a){var b=a.editing;b=b===void 0?!1:b;var e=a.onClose,f=a.user,g=a.highlightId,k=a.highlightName,l=a.highlightThumbnailUrl,m=a.currentHighlightStoryIds,n=d("react-redux-wwwig").useDispatch();k=i((a=k)!=null?a:"");var o=k[0],p=k[1];a=i(!1);k=a[0];var q=a[1];a=i((a=m)!=null?a:[]);var r=a[0],s=a[1];a=function(a){p(a)};var t=function(a){r.includes(a)?s(function(b){return[].concat(b).filter(function(b){return b!==a})}):s(function(b){return[].concat(b,[a])})},u=i(j.Name),v=u[0],w=u[1];u=function(){w(j.Stories)};var x=function(){w(j.Cover)},y=function(a){q(!0);n(d("PolarisStoryActions").addNewHighlight(r,f.id,o,(a=a)!=null?a:r[0]));e()},z=function(a){var b;q(!0);n(d("PolarisStoryActions").editHighlightAction(r,(b=m)!=null?b:[],(b=g)!=null?b:"",f.id,o,a));e()};if(v===j.Name)return h.jsx(c("PolarisNewHighlightsModal.react"),{actionText:d("PolarisGenericStrings").NEXT,editing:b,highlightName:o,onActionClick:u,onClose:e,onUpdateHighlightsName:a});if(v===j.Stories)return h.jsx(c("PolarisAddHighlightsModal.react"),{allowEmptySelection:!1,currentHighlightStoryIds:r,disablePopInAnimation:!0,editing:b,onBack:function(){return w(j.Name)},onClose:e,onDone:x,onUpdateStoryIds:t,requestInFlight:k});if(v===j.Cover)return h.jsx(c("PolarisAddHighlightsCover.react"),{editing:b,highlightThumbnailUrl:l,onBack:function(){return w(j.Stories)},onClose:e,onDone:b?z:y,requestInFlight:k,selectedStoryIds:r})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a},98,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("PolarisProfileStoryHighlightsTrayItem.react",["cx","fbt","PolarisAvatarWithStoriesContainer.react","PolarisIGCoreAddOutline24Icon","PolarisIGCoreCheckPanoFilledIcon","PolarisIGCorePressable","PolarisIGCoreText","PolarisNewHighlightsStrings","PolarisStoryRing.react","react"],function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react"),k=0;function l(){return"ProfileStoryHighlightsTrayItem"+k++}a=function(a){babelHelpers.inheritsLoose(b,a);function b(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.state={elementId:l()},c.$1=function(){var a;c.props.onClick((a=(a=c.props.reel)==null?void 0:a.id)!=null?a:"",c.state.elementId)},b)||babelHelpers.assertThisInitialized(c)}var e=b.prototype;e.render=function(){var a,b=this.props,e=b.avatarSize,f=b.isSmallScreen,g=b.reel,h=b.addNewHighlight;b=b.hasOverlay;var k={width:e,height:e};a=(a=g==null?void 0:g.title)!=null?a:d("PolarisNewHighlightsStrings").NEW_HIGHLIGHT_BUTTON_TEXT;a=f?j.jsx(c("PolarisIGCoreText").Body2,{display:"truncated",zeroMargin:!0,children:a}):j.jsx(c("PolarisIGCoreText").BodyEmphasized,{display:"truncated",zeroMargin:!0,children:a});return j.jsxs(c("PolarisIGCorePressable"),{className:"_ab09",onPress:this.$1,role:"menuitem",children:[g!=null&&j.jsx(c("PolarisAvatarWithStoriesContainer.react"),{canTabFocus:!1,clickTargetElementId:this.state.elementId,entrypoint:"reel_profile_highlights",highlightReelId:g.highlightReelId,size:e,children:j.jsxs("div",{className:"om3e55n1 hf30pyar lq84ybu9 nmlomj2f qwcclf47 e7u6y3za qmqpeqxj cauy2b9r",style:k,children:[b===!0&&j.jsx("div",{className:"i85zmo3j jcxyg2ei alzwoclg smah006z mfclru0v pytsy3co s8sjc6am",children:j.jsx(c("PolarisIGCoreCheckPanoFilledIcon"),{alt:i._("Check"),color:"ig-primary-background"})}),j.jsx("img",{alt:i._("{username}'s profile picture",[i._param("username",g.title)]),className:"_ab0b",src:g.thumbnailUrl})]})}),h===!0&&j.jsxs("div",{className:"fsf7x5fv f14ij5to om3e55n1 b6ax4al1 gb2oqlaf",children:[j.jsx(c("PolarisStoryRing.react"),{isCenterOnAvatar:!0,seen:!0,showRing:!0,size:e}),j.jsx("div",{className:"om3e55n1 hf30pyar lq84ybu9 nmlomj2f qwcclf47 e7u6y3za qmqpeqxj cauy2b9r i85zmo3j jcxyg2ei alzwoclg",style:k,children:j.jsx(c("PolarisIGCoreAddOutline24Icon"),{alt:d("PolarisNewHighlightsStrings").NEW_HIGHLIGHT_BUTTON_ALT_TEXT,color:"ig-tertiary-icon",size:f?30:44})})]}),j.jsx("div",{className:"_ab0c",children:a})]})};return b}(j.Component);g["default"]=a},98,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("PolarisProfileStoryHighlightsTrayItemPlaceholder.react",["cx","PolarisUserAvatarWithStoriesPlaceholder.react","react"],function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a){a=a.avatarSize;return i.jsxs("div",{className:"_aa-u",children:[i.jsx(c("PolarisUserAvatarWithStoriesPlaceholder.react"),{className:"_aa-v",size:a}),i.jsx("div",{className:"_aa-w"})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a},98,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("shouldDisplayLoggedOutHighlights",["PolarisLoggedOutLoginConstants","PolarisUA","PolarisisUserLoggedIn","qex"],function(a,b,c,d,e,f,g){"use strict";function a(a){return!d("PolarisisUserLoggedIn").isUserLoggedIn()&&!d("PolarisUA").isDesktop()&&a!=null&&a>=d("PolarisLoggedOutLoginConstants").MIN_FOLLOWERS_LOGGED_OUT_HIGHLIGHTS&&c("qex")._("70")===!0}g["default"]=a},98,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("PolarisProfileStoryHighlightsTray.react",["cx","PolarisCreateAndAddHighlightsModal.react","PolarisIGCoreBox","PolarisLinkBuilder","PolarisLogger","PolarisProfileStoryHighlightsTrayItem.react","PolarisProfileStoryHighlightsTrayItemPlaceholder.react","PolarisQEHelper","PolarisStoryActions","PolarisVirtualHSnapScroll.react","PolarisstorySelectors","PolarisuserSelectors","browserHistory","immutable-v4-rc-9","nullthrows","react","react-redux-wwwig","shouldDisplayLoggedOutHighlights"],function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");h=d("react");var j=h.useMemo,k=h.useState,l=7,m={cardWidth:70,gapWidth:5,gutterWidth:0},n={cardWidth:120,gapWidth:10,gutterWidth:24},o=56,p=77;function a(a){var b=a.highlightReelCount,e=a.highlightReelIdsWithOverlay,f=a.isSmallScreen,g=a.onClick,h=a.reels,q=a.storyEntrypoint,r=a.viewer,s=a.userFollowerCount,t=a.onLoadReel,u=a.userId;a=a.user;var v=k(!1),w=v[0],x=v[1],y=function(a){d("browserHistory").browserHistory.push(d("PolarisLinkBuilder").buildHighlightStoryLink(a))},z=function(){d("PolarisLogger").logAction_DEPRECATED("addHighlightIconClick"),x(!0)};v=j(function(){var a=f?m:n;return Array.from({length:Math.min(b,l)},function(b,d){return i.jsx(c("PolarisIGCoreBox"),{alignItems:"center",justifyContent:"center",width:a.cardWidth+a.gapWidth/2,children:i.jsx(c("PolarisProfileStoryHighlightsTrayItemPlaceholder.react"),{avatarSize:f?o:p},d)},d)})},[b,f]);var A=j(function(){var b=function(a,b){if(q===!0){var e;e=[].concat(Array.from((e=h)!=null?e:[]));e=e.find(function(b){return b.id===a});e!=null&&g(e)}else r||c("shouldDisplayLoggedOutHighlights")(s)?t(d("immutable-v4-rc-9").Seq.Indexed(c("nullthrows")(h)),a,b):y(a)},a=f?m:n;return h!=null?h.map(function(d){var g;return i.jsx(c("PolarisIGCoreBox"),{alignItems:"center",justifyContent:"center",width:a.cardWidth+a.gapWidth/2,children:i.jsx(c("PolarisProfileStoryHighlightsTrayItem.react"),{avatarSize:f?o:p,hasOverlay:(g=e==null?void 0:e.includes(d.id))!=null?g:!1,isSmallScreen:f,onClick:b,reel:d})},d.id)}).toArray():[]},[e,f,h,t,s,r,g,q]),B=function(){var a=f?m:n;return i.jsx(c("PolarisIGCoreBox"),{alignItems:"center",justifyContent:"center",width:a.cardWidth+a.gapWidth/2,children:i.jsx(c("PolarisProfileStoryHighlightsTrayItem.react"),{addNewHighlight:!0,avatarSize:f?o:p,isSmallScreen:f,onClick:z})},"newHighlight")},C=f?m:n,D=h!=null;u=u===(r==null?void 0:r.id);return i.jsxs("div",{className:q!==!0?"_ab05":"a9zleok9",role:"menu",children:[q===!0&&i.jsx("div",{className:"o7bt71qk alzwoclg",children:h==null?v:A}),q==null&&i.jsx(c("PolarisVirtualHSnapScroll.react"),{gutterWidth:C.gutterWidth,itemWidth:C.cardWidth+C.gutterWidth/2,overscan:7,pagerDisabled:f||!D,children:h==null?u&&d("PolarisQEHelper").hasAddHighlightEnabled()?v.concat(B()):v:u&&d("PolarisQEHelper").hasAddHighlightEnabled()?A.concat(B()):A},D?"highlights":"placeholder"),w&&i.jsx(c("PolarisCreateAndAddHighlightsModal.react"),{onClose:function(){return x(!1)},user:a})]})}a.displayName=a.name+" [from "+f.id+"]";function b(a,b){var e=d("PolarisstorySelectors").getHighlightReelsByUserId(a,b.userId),f=c("nullthrows")(a.users.users.get(b.userId)).highlightReelCount;a=d("PolarisuserSelectors").getUserById(a,b.userId);return{highlightReelCount:f==null?0:f,reels:e,userFollowerCount:(b=a.counts)==null?void 0:b.followedBy}}function e(a){return{onLoadReel:function(b,c,e){a(d("PolarisStoryActions").openReelsMedia(b,"reel_profile_highlights",c,e,void 0,!0))}}}h=d("react-redux-wwwig").connect(b,e)(a);g["default"]=h},98,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("PolarisAboutThisAccountUtils",["qex"],function(a,b,c,d,e,f,g){"use strict";function h(a){a=a.isEligibleToViewAccountTransparency;a=a===void 0?!1:a;return a}function a(a){return h(a)?c("qex")._("368")===!0:!1}g.getUserIsEligibleToViewAccountTransparency=h;g.getUserIsEligibleToViewAccountTransparencyOnProfile=a},98,typeof self!=="undefined"&&self.document&&self.document.currentScript);
__d("PolarisAboutThisAccountModal.react",["IGCoreDialog","IGCoreModal","PolarisAboutThisAccountPage.react","PolarisGenericStrings","react"],function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.onClose,e=a.referer_type;a=a.user;return h.jsxs(c("IGCoreModal"),{closeButtonPosition:"hidden",onClose:b,children:[h.jsx(d("PolarisAboutThisAccountPage.react").PolarisAboutThisAccountPage,{referer_type:e,user:a}),h.jsxs(d("IGCoreDialog").IGCoreDialogItem,{onClick:b,children:[" ",d("PolarisGenericStrings").CLOSE_TEXT," "]})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a},98,typeof self!=="undefined"&&self.document&&self.document.currentScript);