(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[99551],{521262:(e,n,i)=>{i.d(n,{ZP:()=>s,m_:()=>r});var a=i(40660),t=i(78309);function r(e,n,i,a){const r=new URLSearchParams;r.append(t.NR.SOURCE_EVENT_ID,e);const s=n?"https://"+new URL(n).hostname:"";return r.append(t.NR.DESTINATION,s),r.append(t.NR.EXPIRY,i?t.uV:t.ug),r.append(t.NR.PRIORITY,i?t.NR.CLICK_PRIORITY:t.NR.VIEW_PRIORITY),a&&r.append(t.NR.CAMPAIGN_ID,a),r.append(t.NR.SOURCE_EVENT_TYPE,i?t.bC:t.Cu),"/attribution_source/?"+r.toString()}async function s(e,n,i,t){if(["Pin","pinImpressions"].includes(e)&&n&&i){a.Z.increment("webapp.arapi.view.funnel",.1,{status:"start"});try{const e={eventSourceEligible:!0,triggerEligible:!1},n=r(i,t||"",!1,null);if(!(await window.fetch(n,{keepalive:!0,attributionReporting:e})).ok)throw new Error("server request failed.");a.Z.increment("webapp.arapi.view.funnel",.1,{status:"success"})}catch(s){a.Z.increment("webapp.arapi.view.funnel",.1,{status:"failed",error:s.name})}}else a.Z.increment("webapp.arapi.view.funnel",.1,{status:"missing_param"})}},354428:(e,n,i)=>{i.d(n,{Se:()=>k,iw:()=>b,gV:()=>h,G3:()=>v,Gj:()=>P,Jd:()=>_,$3:()=>g});var a=i(965533),t=i(457628),r=i(791045),s=i(970588),o=i(250307);const l=e=>"string"!=typeof e&&e?e.state:null;var c=i(845098),d=i(48040),u=i(957733),p=i(625168),m=i(795142);const _=()=>{window&&window.focus(),document.activeElement&&document.activeElement.blur()},h=({isOffsiteUrl:e,event:n})=>!e&&(n.metaKey||n.ctrlKey),g=({location:e,pinId:n,surface:i})=>!!i&&!m.ZF.includes(i)||e.pathname.includes(n),k=(e,n)=>{var i,a;const s=Math.round(1e3*Math.random())+"",o=Math.round(1e3*Math.random())+"";t.t8((0,r.GS)(s),o);const l={token:`${s}-${o}`,url:e,...n&&!n.params?n.queryParams:{pin:null!==(i=null==n?void 0:n.params.pinId)&&void 0!==i?i:void 0,csr:null==n||!n.params.csrId||null!==(a=n.params)&&void 0!==a&&a.pinId?void 0:n.params.csrId,client_tracking_params:null==n?void 0:n.params.clientTrackingParams,aux_data:null!=n&&n.params.auxData?JSON.stringify(n.params.auxData):void 0}};return`/offsite/?${(0,c.Z)(l)}`},P=(e,n)=>{(0,a.Z)(k(e,n),!0)},b=async({clientTrackingParams:e,href:n,isMounted:i,pinId:a,spamCheckCallback:t})=>{const r=await(0,s.Z)({url:"/v3/offsite/",data:{check_only:!0,client_tracking_params:e,pin_id:a,url:n}});if(!r.resource_response.error&&i){const e=r.resource_response.data||{},{message:n,redirect_status:i,url:a}=e;t({blocked:["blocked","suspicious","porn"].includes(i),message:n,redirectStatus:i,sanitized_url:a})}},v=({event:e,onHistoryChange:n,href:i,history:t,target:r})=>{const s=(0,o.Z)(i),c=l(i),m=(0,d.Z)(s);m===p.Z.TRUSTED_DIFFERENT_ORIGIN||"blank"===r?(0,a.Z)(s,"blank"===r):t&&m===p.Z.SAME_ORIGIN&&(t.push((0,u.Z)({url:s}),null!=c?c:{}),n&&n({event:e}))}},599551:(e,n,i)=>{i.d(n,{Z:()=>p,p:()=>m});var a=i(667294),t=i(616550),r=i(946618),s=i(354428),o=i(300657),l=i(250307),c=i(28630),d=i(554318),u=i(935340);function p(e){var n,i,p;const{externalData:m,href:_,onHistoryChange:h,target:g}=e,[k,P]=(0,a.useState)(null),[b,v]=(0,a.useState)(!1),I=(0,t.useHistory)(),f=(0,t.useLocation)(),w=(0,l.Z)(_),y=(0,c.Z)({url:w}),{showWarning:S}=null!==(n=(0,d.s)())&&void 0!==n?n:{},{pin:x,surface:A}=m||{},D=x?(0,r.Z)({boardUrl:null===(i=x.board)||void 0===i?void 0:i.url,location:f,pinId:x.entityId,pinnerUserName:null===(p=x.pinner)||void 0===p?void 0:p.username,storyPinDataId:x.storyPinDataId,trackingParams:x.trackingParams,trackingParamsMap:x.trackingParamsMap}):null,R=(0,o.Z)();return(0,a.useEffect)((()=>(v(!0),()=>{v(!1)})),[]),(0,a.useEffect)((()=>{y&&x&&null===k&&b&&(!x.promoter||x.isDownstreamPromotion)&&(0,s.$3)({location:f,pinId:x.entityId,surface:A})&&(0,s.iw)({clientTrackingParams:D,isMounted:b,pinId:x.entityId,spamCheckCallback:e=>P(e),href:w})}),[D,x,A,w,y,b,f,k]),({event:e})=>{var n;(0,s.gV)({isOffsiteUrl:y,event:e})||(e.preventDefault(),_?y||null!=m&&m.dangerouslyForceOffsiteUrl?R({auxData:null==m?void 0:m.auxData,clientTrackingParams:D,pin:(null==m?void 0:m.pin)&&{attributionSourceId:m.pin.attributionSourceId,campaignId:m.pin.campaignId,isPromoted:m.pin.isPromoted,pinPromotionId:m.pin.pinPromotionId},pinId:null==m||null===(n=m.pin)||void 0===n?void 0:n.entityId,queryParams:null==m?void 0:m.queryParams,showWarning:S,spamCheck:k,url:w}):(0,s.G3)({event:e,href:_,history:I,onHistoryChange:h,target:"blank"===g?"blank":null}):(0,u.nP)("link_navigation_empty_href",{sampleRate:1,tags:{route:f.pathname}}))}}const m=({children:e,...n})=>e({handleClick:p(n)})},300657:(e,n,i)=>{i.d(n,{Z:()=>u,t:()=>d});var a=i(758579),t=i(78309),r=i(521262),s=i(969327),o=i(388011),l=i(354428),c=i(204926);const d=()=>{const{logContextEvent:e}=(0,o.v)();return({attributionSourceId:n,auxData:i,campaignId:o,clientTrackingParams:c,href:d,isPromoted:u,pinId:p,pinPromotionId:m})=>{var _;if(!u)return!1;const h=(0,a.Z)(),g=(0,l.Se)(d,{params:{pinId:p,csrId:null,clientTrackingParams:c,auxData:i}}),k=null!==(_=null==h?void 0:h.userAgent.browserName)&&void 0!==_?_:"";if((0,s.G6)(k)){var P,b;const{group:i}=null!==(P=null==h?void 0:h.experimentsClient.checkExperiment("m10n_event_conversion_measurement"))&&void 0!==P?P:{},a=null!=h&&null!==(b=h.userAgent)&&void 0!==b&&b.browserVersion?h.userAgent.browserVersion:"0.0",r=parseFloat(a.split(".")[0]+"."+a.split(".")[1]);if(n&&r>=14.1&&["enabled_safari"].includes(i))return((e,n,i)=>{const a=document.createElement("a");a.setAttribute("href",n),a.setAttribute("target","_blank"),a.setAttribute("rel","noopener nofollow noreferrer"),a.style.cursor="pointer",a.style.display="block",a.setAttribute(t.$N.ATTRIBUTION_SOURCE_ID,e),a.setAttribute(t.$N.ATTRIBUTE_DESTINATION,i),a.setAttribute(t.$N.ATTRIBUTE_ON,i),a.click()})(n,g,d),e({event_type:101,clientTrackingParams:c,object_id_str:p||"",aux_data:{pin_id:p||"",click_measurement_ppid:m||"",click_measurement_campaign_id:o||"",is_pcm:!0,attribution_source_id:n,page_url:d}}),!0}else if((0,s.i7)(k)){var v,I;const{group:i}=null!==(v=null==h?void 0:h.experimentsClient.checkExperiment("m10n_event_conversion_measurement_chrome"))&&void 0!==v?v:{},a=null!=h&&null!==(I=h.userAgent)&&void 0!==I&&I.browserVersion?parseInt(h.userAgent.browserVersion.split(".")[0],10):0;if(void 0!==n&&a>=101&&["enabled"].includes(i)){const i=null!=n?n:"0";return((e,n,i,a)=>{const s=(0,r.m_)(e,i,!0,a),o=document.createElement("a");o.setAttribute("href",n),o.setAttribute("target","_blank"),o.setAttribute("rel","noopener nofollow noreferrer"),o.style.cursor="pointer",o.style.display="block",o.setAttribute(t.NR.SOURCE,s),o.click()})(i,g,d,o),e({event_type:101,clientTrackingParams:c,object_id_str:p||"",aux_data:{pin_id:p||"",click_measurement_ppid:m||"",click_measurement_campaign_id:o||"",is_arapi:!0,attribution_source_id:i,page_url:d}}),!0}}return!1}},u=e=>{const n=d();return({auxData:i,clientTrackingParams:a,pin:t,pinId:r,queryParams:s,showWarning:o,spamCheck:d,url:u})=>{"undefined"!=typeof window&&window.Windows?(0,c.Z)(u,{clientTrackingParams:a,pinId:r,hasPin:!!t,auxData:i}):t||null!=e&&e.isFromClickthroughLink?null!=d&&d.blocked?null==o||o(d):t&&n({attributionSourceId:t.attributionSourceId,auxData:i,campaignId:t.campaignId?String(t.campaignId):null,clientTrackingParams:a,href:u,isPromoted:t.isPromoted,pinId:r,pinPromotionId:t.pinPromotionId?String(t.pinPromotionId):null})||(0,l.Gj)(u,{params:{pinId:r,clientTrackingParams:a,auxData:i}}):(0,l.Gj)(u,s?{queryParams:s}:{params:{pinId:r}})}}},250307:(e,n,i)=>{i.d(n,{Z:()=>a});const a=e=>e?"string"==typeof e?e:e.pathname?e.pathname:"":""},957733:(e,n,i)=>{i.d(n,{Z:()=>r});const a=(e,n)=>0===e.lastIndexOf(n,0);var t=i(17330);const r=({url:e})=>{const n=(0,t.Z)("/");return a(e,n)?e.substr(n.length-1):e}},204926:(e,n,i)=>{i.d(n,{Z:()=>r});var a=i(970588),t=i(354428);function r(e,n){const{auxData:i,clientTrackingParams:r,hasPin:s,pinId:o}=n||{};(0,a.Z)({url:"/v3/offsite/",data:{check_only:!0,client_tracking_params:s?r:void 0,pin_id:o,url:e,aux_data:JSON.stringify(i)}}).then((n=>{if(n&&n.resource_response&&!n.resource_response.error){const{resource_response:e}=n,{redirect_status:i,url:a}=e.data;if(!["blocked","suspicious","porn"].includes(i)){if(window.Windows.Foundation&&window.Windows.System&&window.Windows.System.Launcher&&window.Windows.System.Launcher.launchUriAsync){const e=new window.Windows.Foundation.Uri(a);window.Windows.System.Launcher.launchUriAsync(e)}return}}(0,t.Gj)(e,{params:s?{pinId:o,clientTrackingParams:r,auxData:i}:{pinId:o}})}))}},795142:(e,n,i)=>{i.d(n,{UP:()=>o,Wv:()=>t,ZF:()=>a,zI:()=>r,zl:()=>s});const a=["AuthHomefeed","CloseupRelatedProducts","FollowingFeedGrid","RelatedPinGrid","RelatedProductsFeed","SearchItem"],t=["ArticleProductsStory","CloseupRelatedProducts","ProductPinsFeed","RelatedProductsFeed","ShoppingPackageItem","RelatedProductsFeed","UserProfilePinGrid","ShoppingGridShippedMetadataWithVisitButton"],r=[...t,"ShoppingGridShippedMetadata","ShoppingSquareGridDomain","ShoppingSquareGridDomainNoMetadata","ProductPinsFeed","ShoppingCatalogsProductsMetadata","ShoppingDynamicHeightGrid"],s=["ShoppingSquareGridDomain","ShoppingGridShippedMetadata","ShoppingSquareGridStorefront","ShoppingSquareGridStorefrontDomain","ShoppingGridShippedMetadataWithVisitButton"],o=["BaseBoardPinGrid"]},554318:(e,n,i)=>{i.d(n,{Z:()=>g,s:()=>h});var a=i(667294),t=i(583592),r=i(608575),s=i(883119),o=i(88622),l=i(536042),c=i(630089),d=i(785893);const u=()=>{var e;const n=(0,l.ZP)(),{dismissWarning:i}=null!==(e=h())&&void 0!==e?e:{};return(0,d.jsx)(s.xu,{paddingX:3,children:(0,d.jsx)(s.zx,{fullWidth:!0,color:"red",onClick:i,text:n.bt("ОК", "Okay", "Dismiss a modal stating that clicking through to a link has been blocked", undefined, true)})})},p=()=>{const e=(0,l.ZP)();return(0,d.jsx)(s.xv,{inline:!0,weight:"bold",children:(0,d.jsx)(s.rU,{target:"blank",href:"https://policy.pinterest.com/community-guidelines#section-spam",display:"inlineBlock",underline:"hover",children:e.bt("Подробнее", "Learn more", "Link text leading to policy website", undefined, true)})})},m=({message:e,sanitized_url:n})=>{var i;const a=(0,l.ZP)(),{dismissWarning:t}=null!==(i=h())&&void 0!==i?i:{};return(0,d.jsx)(o.ZP,{accessibilityModalLabel:a.bt("Мы заблокировали эту ссылку", "We have blocked this link", "Modal label when clicking a spammy link", undefined, true),onDismiss:t,heading:a.bt("Внимание!", "Heads up!", "Modal heading when clicking through to a link has been blocked", undefined, true),footer:(0,d.jsx)(u,{}),children:(0,d.jsxs)(s.xu,{padding:6,children:[(0,d.jsx)(s.xv,{children:(0,c.nk)("{{ message }} {{ learnMore }}",{message:e,learnMore:(0,d.jsx)(p,{},"learnMoreLink")})}),(0,d.jsxs)(s.xu,{alignItems:"center",display:"flex",marginTop:4,children:[(0,d.jsx)(s.xu,{marginEnd:3,children:(0,d.jsx)(s.JO,{accessibilityLabel:a.bt("Адрес заблокированной ссылки", "Blocked link address", "Icon label preceding a block url", undefined, true),color:"error",icon:"report",inline:!0,size:24})}),(0,d.jsx)(s.xv,{inline:!0,lineClamp:1,weight:"bold",children:r.parse(n).hostname})]})]})})},{Provider:_,useMaybeHook:h}=(0,t.Z)("SpammyClickthrough");function g({children:e}){const[n,i]=(0,a.useState)(null),t=(0,a.useCallback)((()=>{i(null)}),[i]),r=(0,a.useCallback)((e=>{i(e)}),[i]),s=(0,a.useMemo)((()=>({dismissWarning:t,showWarning:r})),[t,r]);return(0,d.jsxs)(_,{value:s,children:[n&&(0,d.jsx)(m,{...n}),e]})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/99551.ru_RU-0ae7ee2e2176373d.mjs.map