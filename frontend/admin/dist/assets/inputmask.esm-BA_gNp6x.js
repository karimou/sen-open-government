import{B as o,D as h,p as d,a as c,c as m,m as p}from"./index-ggVRE4OM.js";var g={root:function(e){var s=e.instance;return["p-inputmask p-inputtext p-component",{"p-filled":s.filled}]}},k=o.extend({name:"inputmask",classes:g}),b={name:"BaseInputMask",extends:d,props:{modelValue:null,slotChar:{type:String,default:"_"},mask:{type:String,default:null},autoClear:{type:Boolean,default:!0},unmask:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1}},style:k},v={name:"InputMask",extends:b,emits:["update:modelValue","focus","blur","keydown","complete","keypress","paste"],watch:{mask:function(e,s){s!==e&&this.initMask()}},mounted:function(){this.initMask()},updated:function(){this.isValueUpdated()&&this.updateValue()},methods:{onInput:function(e){this.androidChrome?this.handleAndroidInput(e):this.handleInputChange(e),this.$emit("update:modelValue",e.target.value)},onFocus:function(e){var s=this;if(!this.readonly){this.focus=!0,clearTimeout(this.caretTimeoutId);var t;this.focusText=this.$el.value,t=this.checkVal(),this.caretTimeoutId=setTimeout(function(){s.$el===document.activeElement&&(s.writeBuffer(),t===s.mask.replace("?","").length?s.caret(0,t):s.caret(t))},10),this.$emit("focus",e)}},onBlur:function(e){if(this.focus=!1,this.checkVal(),this.updateModel(e),this.$el.value!==this.focusText){var s=document.createEvent("HTMLEvents");s.initEvent("change",!0,!1),this.$el.dispatchEvent(s)}this.$emit("blur",e)},onKeyDown:function(e){if(!this.readonly){var s=e.which||e.keyCode,t,i,a,l=/iphone/i.test(h.getUserAgent());this.oldVal=this.$el.value,s===8||s===46||l&&s===127?(t=this.caret(),i=t.begin,a=t.end,a-i===0&&(i=s!==46?this.seekPrev(i):a=this.seekNext(i-1),a=s===46?this.seekNext(a):a),this.clearBuffer(i,a),this.shiftL(i,a-1),this.updateModel(e),e.preventDefault()):s===13?(this.$el.blur(),this.updateModel(e)):s===27&&(this.$el.value=this.focusText,this.caret(0,this.checkVal()),this.updateModel(e),e.preventDefault()),this.$emit("keydown",e)}},onKeyPress:function(e){var s=this;if(!this.readonly){var t=e.which||e.keyCode,i=this.caret(),a,l,r,u;if(!(e.ctrlKey||e.altKey||e.metaKey||t<32)){if(t&&t!==13){if(i.end-i.begin!==0&&(this.clearBuffer(i.begin,i.end),this.shiftL(i.begin,i.end-1)),a=this.seekNext(i.begin-1),a<this.len&&(l=String.fromCharCode(t),this.tests[a].test(l))){if(this.shiftR(a),this.buffer[a]=l,this.writeBuffer(),r=this.seekNext(a),/android/i.test(h.getUserAgent())){var f=function(){s.caret(r)};setTimeout(f,0)}else this.caret(r);i.begin<=this.lastRequiredNonMaskPos&&(u=this.isCompleted())}e.preventDefault()}this.updateModel(e),u&&this.$emit("complete",e),this.$emit("keypress",e)}}},onPaste:function(e){this.handleInputChange(e),this.$emit("paste",e)},caret:function(e,s){var t,i,a;if(!(!this.$el.offsetParent||this.$el!==document.activeElement))if(typeof e=="number")i=e,a=typeof s=="number"?s:i,this.$el.setSelectionRange?this.$el.setSelectionRange(i,a):this.$el.createTextRange&&(t=this.$el.createTextRange(),t.collapse(!0),t.moveEnd("character",a),t.moveStart("character",i),t.select());else return this.$el.setSelectionRange?(i=this.$el.selectionStart,a=this.$el.selectionEnd):document.selection&&document.selection.createRange&&(t=document.selection.createRange(),i=0-t.duplicate().moveStart("character",-1e5),a=i+t.text.length),{begin:i,end:a}},isCompleted:function(){for(var e=this.firstNonMaskPos;e<=this.lastRequiredNonMaskPos;e++)if(this.tests[e]&&this.buffer[e]===this.getPlaceholder(e))return!1;return!0},getPlaceholder:function(e){return e<this.slotChar.length?this.slotChar.charAt(e):this.slotChar.charAt(0)},seekNext:function(e){for(;++e<this.len&&!this.tests[e];);return e},seekPrev:function(e){for(;--e>=0&&!this.tests[e];);return e},shiftL:function(e,s){var t,i;if(!(e<0)){for(t=e,i=this.seekNext(s);t<this.len;t++)if(this.tests[t]){if(i<this.len&&this.tests[t].test(this.buffer[i]))this.buffer[t]=this.buffer[i],this.buffer[i]=this.getPlaceholder(i);else break;i=this.seekNext(i)}this.writeBuffer(),this.caret(Math.max(this.firstNonMaskPos,e))}},shiftR:function(e){var s,t,i,a;for(s=e,t=this.getPlaceholder(e);s<this.len;s++)if(this.tests[s])if(i=this.seekNext(s),a=this.buffer[s],this.buffer[s]=t,i<this.len&&this.tests[i].test(a))t=a;else break},handleAndroidInput:function(e){var s=this.$el.value,t=this.caret();if(this.oldVal&&this.oldVal.length&&this.oldVal.length>s.length){for(this.checkVal(!0);t.begin>0&&!this.tests[t.begin-1];)t.begin--;if(t.begin===0)for(;t.begin<this.firstNonMaskPos&&!this.tests[t.begin];)t.begin++;this.caret(t.begin,t.begin)}else{for(this.checkVal(!0);t.begin<this.len&&!this.tests[t.begin];)t.begin++;this.caret(t.begin,t.begin)}this.isCompleted()&&this.$emit("complete",e)},clearBuffer:function(e,s){var t;for(t=e;t<s&&t<this.len;t++)this.tests[t]&&(this.buffer[t]=this.getPlaceholder(t))},writeBuffer:function(){this.$el.value=this.buffer.join("")},checkVal:function(e){this.isValueChecked=!0;var s=this.$el.value,t=-1,i,a,l;for(i=0,l=0;i<this.len;i++)if(this.tests[i]){for(this.buffer[i]=this.getPlaceholder(i);l++<s.length;)if(a=s.charAt(l-1),this.tests[i].test(a)){this.buffer[i]=a,t=i;break}if(l>s.length){this.clearBuffer(i+1,this.len);break}}else this.buffer[i]===s.charAt(l)&&l++,i<this.partialPosition&&(t=i);return e?this.writeBuffer():t+1<this.partialPosition?this.autoClear||this.buffer.join("")===this.defaultBuffer?(this.$el.value&&(this.$el.value=""),this.clearBuffer(0,this.len)):this.writeBuffer():(this.writeBuffer(),this.$el.value=this.$el.value.substring(0,t+1)),this.partialPosition?i:this.firstNonMaskPos},handleInputChange:function(e){var s=e.type==="paste";if(!(this.readonly||s)){var t=this.checkVal(!0);this.caret(t),this.updateModel(e),this.isCompleted()&&this.$emit("complete",e)}},getUnmaskedValue:function(){for(var e=[],s=0;s<this.buffer.length;s++){var t=this.buffer[s];this.tests[s]&&t!==this.getPlaceholder(s)&&e.push(t)}return e.join("")},updateModel:function(e){var s=this.unmask?this.getUnmaskedValue():e.target.value;this.$emit("update:modelValue",this.defaultBuffer!==s?s:"")},updateValue:function(){var e=this,s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;this.$el&&(this.modelValue==null?(this.$el.value="",s&&this.$emit("update:modelValue","")):(this.$el.value=this.modelValue,this.checkVal(),setTimeout(function(){if(e.$el&&(e.writeBuffer(),e.checkVal(),s)){var t=e.unmask?e.getUnmaskedValue():e.$el.value;e.$emit("update:modelValue",e.defaultBuffer!==t?t:"")}},10)),this.focusText=this.$el.value)},initMask:function(){this.tests=[],this.partialPosition=this.mask.length,this.len=this.mask.length,this.firstNonMaskPos=null,this.defs={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"};var e=h.getUserAgent();this.androidChrome=/chrome/i.test(e)&&/android/i.test(e);for(var s=this.mask.split(""),t=0;t<s.length;t++){var i=s[t];i==="?"?(this.len--,this.partialPosition=t):this.defs[i]?(this.tests.push(new RegExp(this.defs[i])),this.firstNonMaskPos===null&&(this.firstNonMaskPos=this.tests.length-1),t<this.partialPosition&&(this.lastRequiredNonMaskPos=this.tests.length-1)):this.tests.push(null)}this.buffer=[];for(var a=0;a<s.length;a++){var l=s[a];l!=="?"&&(this.defs[l]?this.buffer.push(this.getPlaceholder(a)):this.buffer.push(l))}this.defaultBuffer=this.buffer.join(""),this.updateValue(!1)},isValueUpdated:function(){return this.unmask?this.modelValue!=this.getUnmaskedValue():this.defaultBuffer!==this.$el.value&&this.$el.value!==this.modelValue}},computed:{filled:function(){return this.modelValue!=null&&this.modelValue.toString().length>0},ptmParams:function(){return{context:{filled:this.filled,disabled:this.$attrs.disabled||this.$attrs.disabled===""}}}}},y=["readonly"];function P(n,e,s,t,i,a){return c(),m("input",p({class:n.cx("root"),readonly:n.readonly,onInput:e[0]||(e[0]=function(){return a.onInput&&a.onInput.apply(a,arguments)}),onFocus:e[1]||(e[1]=function(){return a.onFocus&&a.onFocus.apply(a,arguments)}),onBlur:e[2]||(e[2]=function(){return a.onBlur&&a.onBlur.apply(a,arguments)}),onKeydown:e[3]||(e[3]=function(){return a.onKeyDown&&a.onKeyDown.apply(a,arguments)}),onKeypress:e[4]||(e[4]=function(){return a.onKeyPress&&a.onKeyPress.apply(a,arguments)}),onPaste:e[5]||(e[5]=function(){return a.onPaste&&a.onPaste.apply(a,arguments)})},n.ptm("root",a.ptmParams),{"data-pc-name":"inputmask"}),null,16,y)}v.render=P;export{v as s};