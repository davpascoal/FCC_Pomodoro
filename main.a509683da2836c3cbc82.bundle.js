webpackJsonp([0,3],{"/fcW":function(t,e){function n(t){throw new Error("Cannot find module '"+t+"'.")}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="/fcW"},1:function(t,e,n){t.exports=n("x35b")},"1A80":function(t,e,n){"use strict";var i=n("YWx4"),r=n("R2h3"),_=n("qs5H"),s=n("TTjD"),o=n("jzTW"),h=n("gWLF"),c=n("vU4g"),l=n("Bp7H"),a=n("Ni5f"),u=n("vA8A"),p=n("4P4K"),d=n("adwO"),f=n("oCP0");n.d(e,"a",function(){return b});var x=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},m=function(){function t(t){this._changed=!1,this.context=new i.a(t)}return t.prototype.ngOnDetach=function(t,e,n){},t.prototype.ngOnDestroy=function(){},t.prototype.ngDoCheck=function(t,e,n){var i=this._changed;return this._changed=!1,n||0===t.numberOfChecks&&this.context.ngOnInit(),i},t.prototype.checkHost=function(t,e,n,i){},t.prototype.handleEvent=function(t,e){return!0},t.prototype.subscribe=function(t,e){this._eventHandler=e},t}(),g=_.createRenderComponentType("",0,s.b.None,[],{}),y=function(t){function e(n,i,r,_){t.call(this,e,g,o.a.HOST,n,i,r,_,h.b.CheckAlways)}return x(e,t),e.prototype.createInternal=function(t){return this._el_0=_.selectOrCreateRenderHostElement(this.renderer,"app-root",_.EMPTY_INLINE_ARRAY,t,null),this.compView_0=new k(this.viewUtils,this,0,this._el_0),this._AppComponent_0_3=new m(this.injectorGet(l.a,this.parentIndex)),this.compView_0.create(this._AppComponent_0_3.context),this.init(this._el_0,this.renderer.directRenderer?null:[this._el_0],null),new c.a(0,this,this._el_0,this._AppComponent_0_3.context)},e.prototype.injectorGetInternal=function(t,e,n){return t===i.a&&0===e?this._AppComponent_0_3.context:n},e.prototype.detectChangesInternal=function(t){this._AppComponent_0_3.ngDoCheck(this,this._el_0,t),this.compView_0.internalDetectChanges(t)},e.prototype.destroyInternal=function(){this.compView_0.destroy()},e.prototype.visitRootNodesInternal=function(t,e){t(this._el_0,e)},e}(r.a),b=new c.b("app-root",y,i.a),C=[a.a],v=_.createRenderComponentType("",0,s.b.Emulated,C,{}),k=function(t){function e(n,i,r,_){t.call(this,e,v,o.a.COMPONENT,n,i,r,_,h.b.CheckAlways)}return x(e,t),e.prototype.createInternal=function(t){var e=this.renderer.createViewRoot(this.parentElement);this._el_0=_.createRenderElement(this.renderer,e,"div",new _.InlineArray2(2,"class","container-fluid"),null),this._text_1=this.renderer.createText(this._el_0,"\n\n  ",null),this._el_2=_.createRenderElement(this.renderer,this._el_0,"h1",new _.InlineArray2(2,"class","title"),null),this._text_3=this.renderer.createText(this._el_2," Pomodoro Clock! ",null),this._text_4=this.renderer.createText(this._el_0,"\n\n  ",null),this._el_5=_.createRenderElement(this.renderer,this._el_0,"div",new _.InlineArray2(2,"class","row"),null),this._text_6=this.renderer.createText(this._el_5,"\n\n    ",null),this._text_7=this.renderer.createText(this._el_5,"\n    ",null),this._el_8=_.createRenderElement(this.renderer,this._el_5,"div",new _.InlineArray2(2,"class","col-sm-6 col-xs-12 center-content"),null),this._text_9=this.renderer.createText(this._el_8,"\n\n      ",null),this._el_10=_.createRenderElement(this.renderer,this._el_8,"app-clock",_.EMPTY_INLINE_ARRAY,null),this.compView_10=new p.a(this.viewUtils,this,10,this._el_10),this._ClockComponent_10_3=new p.b(this.parentView.injectorGet(l.a,this.parentIndex)),this.compView_10.create(this._ClockComponent_10_3.context),this._text_11=this.renderer.createText(this._el_8,"\n      ",null),this._text_12=this.renderer.createText(this._el_8,"\n\n    ",null),this._text_13=this.renderer.createText(this._el_5,"\n\n    ",null),this._text_14=this.renderer.createText(this._el_5,"\n    ",null),this._el_15=_.createRenderElement(this.renderer,this._el_5,"div",new _.InlineArray2(2,"class","col-sm-6 col-xs-12 center-content"),null),this._text_16=this.renderer.createText(this._el_15,"\n\n      ",null),this._text_17=this.renderer.createText(this._el_15,"\n      ",null),this._el_18=_.createRenderElement(this.renderer,this._el_15,"div",_.EMPTY_INLINE_ARRAY,null),this._text_19=this.renderer.createText(this._el_18,"\n\n        ",null),this._el_20=_.createRenderElement(this.renderer,this._el_18,"app-timers",_.EMPTY_INLINE_ARRAY,null),this.compView_20=new f.a(this.viewUtils,this,20,this._el_20),this._TimersComponent_20_3=new f.b,this.compView_20.create(this._TimersComponent_20_3.context),this._text_21=this.renderer.createText(this._el_18,"\n\n        ",null),this._el_22=_.createRenderElement(this.renderer,this._el_18,"app-timers",_.EMPTY_INLINE_ARRAY,null),this.compView_22=new f.a(this.viewUtils,this,22,this._el_22),this._TimersComponent_22_3=new f.b,this.compView_22.create(this._TimersComponent_22_3.context),this._text_23=this.renderer.createText(this._el_18,"\n\n      ",null),this._text_24=this.renderer.createText(this._el_15,"\n\n    ",null),this._text_25=this.renderer.createText(this._el_5,"\n\n  ",null),this._text_26=this.renderer.createText(this._el_0,"\n\n",null);var n=_.subscribeToRenderElement(this,this._el_10,new _.InlineArray2(2,"clockAction",null),this.eventHandler(this.handleEvent_10));this._ClockComponent_10_3.subscribe(this,this.eventHandler(this.handleEvent_10),!0);var i=_.subscribeToRenderElement(this,this._el_20,new _.InlineArray2(2,"timerChange",null),this.eventHandler(this.handleEvent_20));this._TimersComponent_20_3.subscribe(this,this.eventHandler(this.handleEvent_20),!0);var r=_.subscribeToRenderElement(this,this._el_22,new _.InlineArray2(2,"timerChange",null),this.eventHandler(this.handleEvent_22));return this._TimersComponent_22_3.subscribe(this,this.eventHandler(this.handleEvent_22),!0),this.init(null,this.renderer.directRenderer?null:[this._el_0,this._text_1,this._el_2,this._text_3,this._text_4,this._el_5,this._text_6,this._text_7,this._el_8,this._text_9,this._el_10,this._text_11,this._text_12,this._text_13,this._text_14,this._el_15,this._text_16,this._text_17,this._el_18,this._text_19,this._el_20,this._text_21,this._el_22,this._text_23,this._text_24,this._text_25,this._text_26],[n,i,r]),null},e.prototype.injectorGetInternal=function(t,e,n){return t===u.a&&10===e?this._ClockComponent_10_3.context:t===d.a&&20===e?this._TimersComponent_20_3.context:t===d.a&&22===e?this._TimersComponent_22_3.context:n},e.prototype.detectChangesInternal=function(t){var e=this.context.service.getCurrentTimer();this._ClockComponent_10_3.check_timer(e,t,!1),this._ClockComponent_10_3.ngDoCheck(this,this._el_10,t),this._TimersComponent_20_3.check_text("Timer",t,!1);var n=this.context.timerClock;this._TimersComponent_20_3.check_timer(n,t,!1),this._TimersComponent_20_3.ngDoCheck(this,this._el_20,t),this._TimersComponent_22_3.check_text("Break",t,!1);var i=this.context.breakClock;this._TimersComponent_22_3.check_timer(i,t,!1),this._TimersComponent_22_3.ngDoCheck(this,this._el_22,t),this.compView_10.internalDetectChanges(t),this.compView_20.internalDetectChanges(t),this.compView_22.internalDetectChanges(t)},e.prototype.destroyInternal=function(){this.compView_10.destroy(),this.compView_20.destroy(),this.compView_22.destroy(),this._ClockComponent_10_3.ngOnDestroy(),this._TimersComponent_20_3.ngOnDestroy(),this._TimersComponent_22_3.ngOnDestroy()},e.prototype.handleEvent_10=function(t,e){this.markPathToRootAsCheckOnce();var n=!0;if("clockAction"==t){n=this.context.executeClockAction(e)!==!1&&n}return n},e.prototype.handleEvent_20=function(t,e){this.markPathToRootAsCheckOnce();var n=!0;if("timerChange"==t){n=(this.context.timerClock=e)!==!1&&n}return n},e.prototype.handleEvent_22=function(t,e){this.markPathToRootAsCheckOnce();var n=!0;if("timerChange"==t){n=(this.context.breakClock=e)!==!1&&n}return n},e}(r.a)},"4P4K":function(t,e,n){"use strict";var i=n("vA8A"),r=n("bgHk"),_=n("R2h3"),s=n("qs5H"),o=n("TTjD"),h=n("jzTW"),c=n("gWLF"),l=n("vU4g"),a=n("Bp7H"),u=n("eOJD");n.d(e,"b",function(){return d}),n.d(e,"a",function(){return y});var p=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},d=function(){function t(t){this._changed=!1,this.context=new i.a(t),this._expr_0=r.b}return t.prototype.ngOnDetach=function(t,e,n){},t.prototype.ngOnDestroy=function(){this.subscription0&&this.subscription0.unsubscribe()},t.prototype.check_timer=function(t,e,n){(n||s.checkBinding(e,this._expr_0,t))&&(this._changed=!0,this.context.timer=t,this._expr_0=t)},t.prototype.ngDoCheck=function(t,e,n){var i=this._changed;return this._changed=!1,n||0===t.numberOfChecks&&this.context.ngOnInit(),i},t.prototype.checkHost=function(t,e,n,i){},t.prototype.handleEvent=function(t,e){return!0},t.prototype.subscribe=function(t,e,n){this._eventHandler=e,n&&(this.subscription0=this.context.clockAction.subscribe(e.bind(t,"clockAction")))},t}(),f=s.createRenderComponentType("",0,o.b.None,[],{}),x=function(t){function e(n,i,r,_){t.call(this,e,f,h.a.HOST,n,i,r,_,c.b.CheckAlways)}return p(e,t),e.prototype.createInternal=function(t){return this._el_0=s.selectOrCreateRenderHostElement(this.renderer,"app-clock",s.EMPTY_INLINE_ARRAY,t,null),this.compView_0=new y(this.viewUtils,this,0,this._el_0),this._ClockComponent_0_3=new d(this.injectorGet(a.a,this.parentIndex)),this.compView_0.create(this._ClockComponent_0_3.context),this.init(this._el_0,this.renderer.directRenderer?null:[this._el_0],null),new l.a(0,this,this._el_0,this._ClockComponent_0_3.context)},e.prototype.injectorGetInternal=function(t,e,n){return t===i.a&&0===e?this._ClockComponent_0_3.context:n},e.prototype.detectChangesInternal=function(t){this._ClockComponent_0_3.ngDoCheck(this,this._el_0,t),this.compView_0.internalDetectChanges(t)},e.prototype.destroyInternal=function(){this.compView_0.destroy(),this._ClockComponent_0_3.ngOnDestroy()},e.prototype.visitRootNodesInternal=function(t,e){t(this._el_0,e)},e}(_.a),m=(new l.b("app-clock",x,i.a),[u.a]),g=s.createRenderComponentType("",0,o.b.Emulated,m,{}),y=function(t){function e(n,i,_,s){t.call(this,e,g,h.a.COMPONENT,n,i,_,s,c.b.CheckAlways),this._expr_14=r.b,this._expr_15=r.b}return p(e,t),e.prototype.createInternal=function(t){var e=this.renderer.createViewRoot(this.parentElement);this._el_0=s.createRenderElement(this.renderer,e,"div",s.EMPTY_INLINE_ARRAY,null),this._text_1=this.renderer.createText(this._el_0,"\n\n    ",null),this._el_2=s.createRenderElement(this.renderer,this._el_0,"div",new s.InlineArray2(2,"class","clock"),null),this._text_3=this.renderer.createText(this._el_2,"",null),this._text_4=this.renderer.createText(this._el_0,"\n\n    ",null),this._el_5=s.createRenderElement(this.renderer,this._el_0,"div",new s.InlineArray2(2,"class","center-button"),null),this._text_6=this.renderer.createText(this._el_5,"\n        ",null),this._el_7=s.createRenderElement(this.renderer,this._el_5,"button",new s.InlineArray2(2,"class","btn btn-success"),null),this._text_8=this.renderer.createText(this._el_7,"",null),this._text_9=this.renderer.createText(this._el_5,"\n        ",null),this._el_10=s.createRenderElement(this.renderer,this._el_5,"button",new s.InlineArray2(2,"class","btn btn-danger"),null),this._text_11=this.renderer.createText(this._el_10,"Reset",null),this._text_12=this.renderer.createText(this._el_5,"\n    ",null),this._text_13=this.renderer.createText(this._el_0,"\n\n",null);var n=s.subscribeToRenderElement(this,this._el_2,new s.InlineArray2(2,"click",null),this.eventHandler(this.handleEvent_2)),i=s.subscribeToRenderElement(this,this._el_7,new s.InlineArray2(2,"click",null),this.eventHandler(this.handleEvent_7)),r=s.subscribeToRenderElement(this,this._el_10,new s.InlineArray2(2,"click",null),this.eventHandler(this.handleEvent_10));return this.init(null,this.renderer.directRenderer?null:[this._el_0,this._text_1,this._el_2,this._text_3,this._text_4,this._el_5,this._text_6,this._el_7,this._text_8,this._text_9,this._el_10,this._text_11,this._text_12,this._text_13],[n,i,r]),null},e.prototype.detectChangesInternal=function(t){var e=s.inlineInterpolate(2,"\n        ",this.context.minutes,":",this.context.seconds,"\n    ");s.checkBinding(t,this._expr_14,e)&&(this.renderer.setText(this._text_3,e),this._expr_14=e);var n=s.inlineInterpolate(1,"",this.context.status,"");s.checkBinding(t,this._expr_15,n)&&(this.renderer.setText(this._text_8,n),this._expr_15=n)},e.prototype.handleEvent_2=function(t,e){this.markPathToRootAsCheckOnce();var n=!0;if("click"==t){n=this.context.initiateCD()!==!1&&n}return n},e.prototype.handleEvent_7=function(t,e){this.markPathToRootAsCheckOnce();var n=!0;if("click"==t){n=this.context.initiateCD()!==!1&&n}return n},e.prototype.handleEvent_10=function(t,e){this.markPathToRootAsCheckOnce();var n=!0;if("click"==t){n=this.context.reset()!==!1&&n}return n},e}(_.a)},AK3I:function(t,e,n){"use strict";var i=n("Oh1W"),r=n("bgHk"),_=n("qs5H");n.d(e,"a",function(){return s});var s=function(){function t(t,e,n,_){this._changed=!1,this._changes={},this.context=new i.a(t,e,n,_),this._expr_0=r.b,this._expr_1=r.b,this._expr_2=r.b,this._expr_3=r.b}return t.prototype.ngOnDetach=function(t,e,n){},t.prototype.ngOnDestroy=function(){this.context.ngOnDestroy(),this.subscription0&&this.subscription0.unsubscribe()},t.prototype.check_name=function(t,e,n){(n||_.checkBinding(e,this._expr_0,t))&&(this._changed=!0,this.context.name=t,this._changes.name=new r.e(this._expr_0,t),this._expr_0=t)},t.prototype.check_isDisabled=function(t,e,n){(n||_.checkBinding(e,this._expr_1,t))&&(this._changed=!0,this.context.isDisabled=t,this._changes.isDisabled=new r.e(this._expr_1,t),this._expr_1=t)},t.prototype.check_model=function(t,e,n){(n||_.checkBinding(e,this._expr_2,t))&&(this._changed=!0,this.context.model=t,this._changes.model=new r.e(this._expr_2,t),this._expr_2=t)},t.prototype.check_options=function(t,e,n){(n||_.checkBinding(e,this._expr_3,t))&&(this._changed=!0,this.context.options=t,this._changes.options=new r.e(this._expr_3,t),this._expr_3=t)},t.prototype.ngDoCheck=function(t,e,n){var i=this._changed;return this._changed=!1,n||i&&(this.context.ngOnChanges(this._changes),this._changes={}),i},t.prototype.checkHost=function(t,e,n,i){},t.prototype.handleEvent=function(t,e){return!0},t.prototype.subscribe=function(t,e,n){this._eventHandler=e,n&&(this.subscription0=this.context.update.subscribe(e.bind(t,"ngModelChange")))},t}()},Bp7H:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var i=function(){function t(){this._initiateCD=!1,this._clockOrBreak=!1}return t.prototype.setCurrentTimer=function(t){this._currentTimer=60*t},t.prototype.getCurrentTimer=function(){return this._currentTimer},t.prototype.setInitiateCD=function(t){this._initiateCD=t},t.prototype.getInitiateCD=function(){return this._initiateCD},t.prototype.countdown=function(t,e){var n=this;this._initiateCD=!this._initiateCD;var i=setInterval(function(){n._currentTimer>0&&n._initiateCD?n._currentTimer--:0===n._currentTimer?(n._clockOrBreak?n._currentTimer=t:n._currentTimer=e,n._clockOrBreak=!n._clockOrBreak):clearInterval(i)},1e3)},t.ctorParameters=function(){return[]},t}()},Iksp:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var i=function(){function t(){}return t}()},Ni5f:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var i=[".center-content[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.title[_ngcontent-%COMP%]{text-align:center;margin-bottom:20px}"]},QJYN:function(t,e,n){"use strict";var i=n("JvYf");n.d(e,"a",function(){return r});var r=function(){function t(t,e){this._changed=!1,this.context=new i.a(t,e)}return t.prototype.ngOnDetach=function(t,e,n){},t.prototype.ngOnDestroy=function(){},t.prototype.ngDoCheck=function(t,e,n){var i=this._changed;return this._changed=!1,i},t.prototype.checkHost=function(t,e,n,i){},t.prototype.handleEvent=function(t,e){var n=!0;if("input"==t){n=this.context.onChange(e.target.value)!==!1&&n}if("blur"==t){n=this.context.onTouched()!==!1&&n}return n},t.prototype.subscribe=function(t,e){this._eventHandler=e},t}()},XS25:function(t,e,n){"use strict";var i=n("wu3h"),r=(n.n(i),n("45Dp")),_=(n.n(r),n("DAFs")),s=(n.n(_),n("FD+i")),o=(n.n(s),n("qXjp")),h=(n.n(o),n("IzNg")),c=(n.n(h),n("MVjO")),l=(n.n(c),n("oFcf")),a=(n.n(l),n("nR/1")),u=(n.n(a),n("cUYv")),p=(n.n(u),n("594w")),d=(n.n(p),n("7N90")),f=(n.n(d),n("/Ife")),x=(n.n(f),n("2tFN")),m=(n.n(x),n("ChGr")),g=(n.n(m),n("ZSR1"));n.n(g)},YWx4:function(t,e,n){"use strict";var i=n("Bp7H");n.d(e,"a",function(){return r});var r=function(){function t(t){this.service=t,this.timerClock=25,this.breakClock=5}return t.prototype.ngOnInit=function(){this.service.setCurrentTimer(this.timerClock)},t.prototype.executeClockAction=function(t){"pause/resume"===t?this.pauseResume():this.reset()},t.prototype.pauseResume=function(){this.service.countdown(60*this.timerClock,60*this.breakClock)},t.prototype.reset=function(){this.service.setInitiateCD(!1),this.service.setCurrentTimer(this.timerClock)},t.ctorParameters=function(){return[{type:i.a}]},t}()},adwO:function(t,e,n){"use strict";var i=n("Rw+2");n.d(e,"a",function(){return r});var r=function(){function t(){this.timerChange=new i.K}return t.prototype.ngOnInit=function(){},t.prototype.emitValue=function(t){this.timerChange.emit(t)},t.prototype.changeTimer=function(t){t?(this.timer++,this.timerChange.emit(this.timer)):(this.timer--,this.timerChange.emit(this.timer))},t.ctorParameters=function(){return[]},t}()},eOJD:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var i=[".clock[_ngcontent-%COMP%]{cursor:pointer;width:270px;height:270px;border-radius:50%;background:#fff;border:2px solid #666;color:#666;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font:100px Arial,sans-serif}.center-button[_ngcontent-%COMP%], .clock[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex}.center-button[_ngcontent-%COMP%]{width:100%;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}"]},kZql:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var i={production:!0}},kke6:function(t,e,n){"use strict";var i=n("mPYt"),r=n("Iksp"),_=n("SumY"),s=n("nnRi"),o=n("MXpF"),h=n("afOh"),c=n("d3cp"),l=n("VJXx"),a=n("PY0G"),u=n("6ZWU"),p=n("xBum"),d=n("hq13"),f=n("z5Ce"),x=n("2Fx2"),m=n("TnsU"),g=n("UAaV"),y=n("T5cK"),b=n("c+H2"),C=n("DbnS"),v=n("qs5H"),k=n("urEj"),w=n("YmUE"),R=n("MuAL"),E=n("yb2a"),T=n("9MX5"),A=n("2wEa"),O=n("Bp7H"),I=n("1A80"),D=n("+uD9"),P=n("cnHn"),N=n("fQgb"),S=n("qXRy"),M=n("982l"),H=n("5fxb"),V=n("uc9x"),j=n("88Kh"),B=n("M2ac"),U=n("c2UE"),L=n("QZA1"),G=n("5CeK"),Y=n("ikuj"),F=n("Bor2"),X=n("EezI"),z=n("FvJ4");n.d(e,"a",function(){return W});var q=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},K=function(t){function e(e){t.call(this,e,[I.a],[I.a])}return q(e,t),Object.defineProperty(e.prototype,"_LOCALE_ID_7",{get:function(){return null==this.__LOCALE_ID_7&&(this.__LOCALE_ID_7=s.a(this.parent.get(D.a,null))),this.__LOCALE_ID_7},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_NgLocalization_8",{get:function(){return null==this.__NgLocalization_8&&(this.__NgLocalization_8=new a.a(this._LOCALE_ID_7)),this.__NgLocalization_8},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_ApplicationRef_13",{get:function(){return null==this.__ApplicationRef_13&&(this.__ApplicationRef_13=this._ApplicationRef__12),this.__ApplicationRef_13},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_Compiler_14",{get:function(){return null==this.__Compiler_14&&(this.__Compiler_14=new f.a),this.__Compiler_14},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_APP_ID_15",{get:function(){return null==this.__APP_ID_15&&(this.__APP_ID_15=P.a()),this.__APP_ID_15},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_DOCUMENT_16",{get:function(){return null==this.__DOCUMENT_16&&(this.__DOCUMENT_16=o.a()),this.__DOCUMENT_16},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_HAMMER_GESTURE_CONFIG_17",{get:function(){return null==this.__HAMMER_GESTURE_CONFIG_17&&(this.__HAMMER_GESTURE_CONFIG_17=new x.a),this.__HAMMER_GESTURE_CONFIG_17},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_EVENT_MANAGER_PLUGINS_18",{get:function(){return null==this.__EVENT_MANAGER_PLUGINS_18&&(this.__EVENT_MANAGER_PLUGINS_18=[new N.a,new S.a,new x.b(this._HAMMER_GESTURE_CONFIG_17)]),this.__EVENT_MANAGER_PLUGINS_18},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_EventManager_19",{get:function(){return null==this.__EventManager_19&&(this.__EventManager_19=new m.a(this._EVENT_MANAGER_PLUGINS_18,this.parent.get(M.a))),this.__EventManager_19},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_AnimationDriver_21",{get:function(){return null==this.__AnimationDriver_21&&(this.__AnimationDriver_21=o.b()),this.__AnimationDriver_21},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_DomRootRenderer_22",{get:function(){return null==this.__DomRootRenderer_22&&(this.__DomRootRenderer_22=new y.a(this._DOCUMENT_16,this._EventManager_19,this._DomSharedStylesHost_20,this._AnimationDriver_21,this._APP_ID_15)),this.__DomRootRenderer_22},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_RootRenderer_23",{get:function(){return null==this.__RootRenderer_23&&(this.__RootRenderer_23=H.a(this._DomRootRenderer_22,this.parent.get(H.b,null),this.parent.get(d.a,null))),this.__RootRenderer_23},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_DomSanitizer_24",{get:function(){return null==this.__DomSanitizer_24&&(this.__DomSanitizer_24=new b.a),this.__DomSanitizer_24},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_Sanitizer_25",{get:function(){return null==this.__Sanitizer_25&&(this.__Sanitizer_25=this._DomSanitizer_24),this.__Sanitizer_25},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_AnimationQueue_26",{get:function(){return null==this.__AnimationQueue_26&&(this.__AnimationQueue_26=new C.a(this.parent.get(M.a))),this.__AnimationQueue_26},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_ViewUtils_27",{get:function(){return null==this.__ViewUtils_27&&(this.__ViewUtils_27=new v.ViewUtils(this._RootRenderer_23,this._Sanitizer_25,this._AnimationQueue_26)),this.__ViewUtils_27},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_IterableDiffers_28",{get:function(){return null==this.__IterableDiffers_28&&(this.__IterableDiffers_28=s.b()),this.__IterableDiffers_28},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_KeyValueDiffers_29",{get:function(){return null==this.__KeyValueDiffers_29&&(this.__KeyValueDiffers_29=s.c()),this.__KeyValueDiffers_29},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_SharedStylesHost_30",{get:function(){return null==this.__SharedStylesHost_30&&(this.__SharedStylesHost_30=this._DomSharedStylesHost_20),this.__SharedStylesHost_30},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_Title_31",{get:function(){return null==this.__Title_31&&(this.__Title_31=new k.a),this.__Title_31},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_RadioControlRegistry_32",{get:function(){return null==this.__RadioControlRegistry_32&&(this.__RadioControlRegistry_32=new w.a),this.__RadioControlRegistry_32},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_BrowserXhr_33",{get:function(){return null==this.__BrowserXhr_33&&(this.__BrowserXhr_33=new R.a),this.__BrowserXhr_33},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_ResponseOptions_34",{get:function(){return null==this.__ResponseOptions_34&&(this.__ResponseOptions_34=new E.a),this.__ResponseOptions_34},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_XSRFStrategy_35",{get:function(){return null==this.__XSRFStrategy_35&&(this.__XSRFStrategy_35=l.a()),this.__XSRFStrategy_35},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_XHRBackend_36",{get:function(){return null==this.__XHRBackend_36&&(this.__XHRBackend_36=new T.a(this._BrowserXhr_33,this._ResponseOptions_34,this._XSRFStrategy_35)),this.__XHRBackend_36},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_RequestOptions_37",{get:function(){return null==this.__RequestOptions_37&&(this.__RequestOptions_37=new A.a),this.__RequestOptions_37},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_Http_38",{get:function(){return null==this.__Http_38&&(this.__Http_38=l.b(this._XHRBackend_36,this._RequestOptions_37)),this.__Http_38},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_PomodoroService_39",{get:function(){return null==this.__PomodoroService_39&&(this.__PomodoroService_39=new O.a),this.__PomodoroService_39},enumerable:!0,configurable:!0}),e.prototype.createInternal=function(){return this._CommonModule_0=new _.a,this._ApplicationModule_1=new s.d,this._BrowserModule_2=new o.c(this.parent.get(o.c,null)),this._InternalFormsSharedModule_3=new h.a,this._FormsModule_4=new c.a,this._HttpModule_5=new l.c,this._AppModule_6=new r.a,this._ErrorHandler_9=o.d(),this._ApplicationInitStatus_10=new u.a(this.parent.get(u.b,null)),this._Testability_11=new p.a(this.parent.get(M.a)),this._ApplicationRef__12=new d.b(this.parent.get(M.a),this.parent.get(V.a),this,this._ErrorHandler_9,this,this._ApplicationInitStatus_10,this.parent.get(p.b,null),this._Testability_11),this._DomSharedStylesHost_20=new g.a(this._DOCUMENT_16),this._AppModule_6},e.prototype.getInternal=function(t,e){return t===_.a?this._CommonModule_0:t===s.d?this._ApplicationModule_1:t===o.c?this._BrowserModule_2:t===h.a?this._InternalFormsSharedModule_3:t===c.a?this._FormsModule_4:t===l.c?this._HttpModule_5:t===r.a?this._AppModule_6:t===D.a?this._LOCALE_ID_7:t===a.b?this._NgLocalization_8:t===j.a?this._ErrorHandler_9:t===u.a?this._ApplicationInitStatus_10:t===p.a?this._Testability_11:t===d.b?this._ApplicationRef__12:t===d.c?this._ApplicationRef_13:t===f.a?this._Compiler_14:t===P.b?this._APP_ID_15:t===B.a?this._DOCUMENT_16:t===x.c?this._HAMMER_GESTURE_CONFIG_17:t===m.b?this._EVENT_MANAGER_PLUGINS_18:t===m.a?this._EventManager_19:t===g.a?this._DomSharedStylesHost_20:t===U.a?this._AnimationDriver_21:t===y.b?this._DomRootRenderer_22:t===L.a?this._RootRenderer_23:t===b.b?this._DomSanitizer_24:t===G.a?this._Sanitizer_25:t===C.a?this._AnimationQueue_26:t===v.ViewUtils?this._ViewUtils_27:t===Y.a?this._IterableDiffers_28:t===F.a?this._KeyValueDiffers_29:t===g.b?this._SharedStylesHost_30:t===k.a?this._Title_31:t===w.a?this._RadioControlRegistry_32:t===R.a?this._BrowserXhr_33:t===E.b?this._ResponseOptions_34:t===X.a?this._XSRFStrategy_35:t===T.a?this._XHRBackend_36:t===A.b?this._RequestOptions_37:t===z.a?this._Http_38:t===O.a?this._PomodoroService_39:e},e.prototype.destroyInternal=function(){this._ApplicationRef__12.ngOnDestroy(),this._DomSharedStylesHost_20.ngOnDestroy()},e}(i.a),W=new i.b(K,r.a)},lZAQ:function(t,e,n){"use strict";var i=n("kqMG"),r=n("bgHk"),_=n("qs5H");n.d(e,"a",function(){return s});var s=function(){function t(t){this._changed=!1,this.context=new i.a(t),this._expr_0=r.b,this._expr_1=r.b,this._expr_2=r.b,this._expr_3=r.b,this._expr_4=r.b,this._expr_5=r.b,this._expr_6=r.b}return t.prototype.ngOnDetach=function(t,e,n){},t.prototype.ngOnDestroy=function(){},t.prototype.ngDoCheck=function(t,e,n){var i=this._changed;return this._changed=!1,i},t.prototype.checkHost=function(t,e,n,i){var r=this.context.ngClassUntouched;_.checkBinding(i,this._expr_0,r)&&(t.renderer.setElementClass(n,"ng-untouched",r),this._expr_0=r);var s=this.context.ngClassTouched;_.checkBinding(i,this._expr_1,s)&&(t.renderer.setElementClass(n,"ng-touched",s),this._expr_1=s);var o=this.context.ngClassPristine;_.checkBinding(i,this._expr_2,o)&&(t.renderer.setElementClass(n,"ng-pristine",o),this._expr_2=o);var h=this.context.ngClassDirty;_.checkBinding(i,this._expr_3,h)&&(t.renderer.setElementClass(n,"ng-dirty",h),this._expr_3=h);var c=this.context.ngClassValid;_.checkBinding(i,this._expr_4,c)&&(t.renderer.setElementClass(n,"ng-valid",c),this._expr_4=c);var l=this.context.ngClassInvalid;_.checkBinding(i,this._expr_5,l)&&(t.renderer.setElementClass(n,"ng-invalid",l),this._expr_5=l);var a=this.context.ngClassPending;_.checkBinding(i,this._expr_6,a)&&(t.renderer.setElementClass(n,"ng-pending",a),this._expr_6=a)},t.prototype.handleEvent=function(t,e){return!0},t.prototype.subscribe=function(t,e){this._eventHandler=e},t}();!function(){function t(t){this._changed=!1,this.context=new i.b(t),this._expr_0=r.b,this._expr_1=r.b,this._expr_2=r.b,this._expr_3=r.b,this._expr_4=r.b,this._expr_5=r.b,this._expr_6=r.b}t.prototype.ngOnDetach=function(t,e,n){},t.prototype.ngOnDestroy=function(){},t.prototype.ngDoCheck=function(t,e,n){var i=this._changed;return this._changed=!1,i},t.prototype.checkHost=function(t,e,n,i){var r=this.context.ngClassUntouched;_.checkBinding(i,this._expr_0,r)&&(t.renderer.setElementClass(n,"ng-untouched",r),this._expr_0=r);var s=this.context.ngClassTouched;_.checkBinding(i,this._expr_1,s)&&(t.renderer.setElementClass(n,"ng-touched",s),this._expr_1=s);var o=this.context.ngClassPristine;_.checkBinding(i,this._expr_2,o)&&(t.renderer.setElementClass(n,"ng-pristine",o),this._expr_2=o);var h=this.context.ngClassDirty;_.checkBinding(i,this._expr_3,h)&&(t.renderer.setElementClass(n,"ng-dirty",h),this._expr_3=h);var c=this.context.ngClassValid;_.checkBinding(i,this._expr_4,c)&&(t.renderer.setElementClass(n,"ng-valid",c),this._expr_4=c);var l=this.context.ngClassInvalid;_.checkBinding(i,this._expr_5,l)&&(t.renderer.setElementClass(n,"ng-invalid",l),this._expr_5=l);var a=this.context.ngClassPending;_.checkBinding(i,this._expr_6,a)&&(t.renderer.setElementClass(n,"ng-pending",a),this._expr_6=a)},t.prototype.handleEvent=function(t,e){return!0},t.prototype.subscribe=function(t,e){this._eventHandler=e},t}()},oCP0:function(t,e,n){"use strict";var i=n("adwO"),r=n("bgHk"),_=n("R2h3"),s=n("qs5H"),o=n("TTjD"),h=n("jzTW"),c=n("gWLF"),l=n("vU4g"),a=n("sZlv"),u=n("QJYN"),p=n("AK3I"),d=n("lZAQ"),f=n("dJaa"),x=n("JvYf"),m=n("lNBv"),g=n("Oh1W"),y=n("Hwfe"),b=n("kqMG");n.d(e,"b",function(){return v}),n.d(e,"a",function(){return T});var C=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},v=function(){function t(){this._changed=!1,this.context=new i.a,this._expr_0=r.b,this._expr_1=r.b}return t.prototype.ngOnDetach=function(t,e,n){},t.prototype.ngOnDestroy=function(){this.subscription0&&this.subscription0.unsubscribe()},t.prototype.check_text=function(t,e,n){(n||s.checkBinding(e,this._expr_0,t))&&(this._changed=!0,this.context.text=t,this._expr_0=t)},t.prototype.check_timer=function(t,e,n){(n||s.checkBinding(e,this._expr_1,t))&&(this._changed=!0,this.context.timer=t,this._expr_1=t)},t.prototype.ngDoCheck=function(t,e,n){var i=this._changed;return this._changed=!1,n||0===t.numberOfChecks&&this.context.ngOnInit(),i},t.prototype.checkHost=function(t,e,n,i){},t.prototype.handleEvent=function(t,e){return!0},t.prototype.subscribe=function(t,e,n){this._eventHandler=e,n&&(this.subscription0=this.context.timerChange.subscribe(e.bind(t,"timerChange")))},t}(),k=s.createRenderComponentType("",0,o.b.None,[],{}),w=function(t){function e(n,i,r,_){t.call(this,e,k,h.a.HOST,n,i,r,_,c.b.CheckAlways)}return C(e,t),e.prototype.createInternal=function(t){return this._el_0=s.selectOrCreateRenderHostElement(this.renderer,"app-timers",s.EMPTY_INLINE_ARRAY,t,null),this.compView_0=new T(this.viewUtils,this,0,this._el_0),this._TimersComponent_0_3=new v,this.compView_0.create(this._TimersComponent_0_3.context),this.init(this._el_0,this.renderer.directRenderer?null:[this._el_0],null),new l.a(0,this,this._el_0,this._TimersComponent_0_3.context)},e.prototype.injectorGetInternal=function(t,e,n){return t===i.a&&0===e?this._TimersComponent_0_3.context:n},e.prototype.detectChangesInternal=function(t){this._TimersComponent_0_3.ngDoCheck(this,this._el_0,t),this.compView_0.internalDetectChanges(t)},e.prototype.destroyInternal=function(){this.compView_0.destroy(),this._TimersComponent_0_3.ngOnDestroy()},e.prototype.visitRootNodesInternal=function(t,e){t(this._el_0,e)},e}(_.a),R=(new l.b("app-timers",w,i.a),[a.a]),E=s.createRenderComponentType("",0,o.b.Emulated,R,{}),T=function(t){function e(n,i,_,s){t.call(this,e,E,h.a.COMPONENT,n,i,_,s,c.b.CheckAlways),this._expr_29=r.b,this._expr_30=r.b}return C(e,t),e.prototype.createInternal=function(t){var e=this.renderer.createViewRoot(this.parentElement);this._text_0=this.renderer.createText(e,"",null),this._el_1=s.createRenderElement(this.renderer,e,"div",new s.InlineArray2(2,"class","row"),null),this._text_2=this.renderer.createText(this._el_1,"\n\n  ",null),this._el_3=s.createRenderElement(this.renderer,this._el_1,"div",new s.InlineArray2(2,"style","width: 100px; height: 100px; display: flex; margin-left: 13px;"),null),this._text_4=this.renderer.createText(this._el_3,"\n\n    ",null),this._el_5=s.createRenderElement(this.renderer,this._el_3,"span",new s.InlineArray2(2,"style","display: inline-block; width: 50px; height: 100px;"),null),this._text_6=this.renderer.createText(this._el_5,"\n        ",null),this._el_7=s.createRenderElement(this.renderer,this._el_5,"button",new s.InlineArray2(2,"class","btn btn-primary my-button"),null),this._text_8=this.renderer.createText(this._el_7,"+",null),this._text_9=this.renderer.createText(this._el_5,"\n        ",null),this._el_10=s.createRenderElement(this.renderer,this._el_5,"button",new s.InlineArray2(2,"class","btn btn-primary my-button"),null),this._text_11=this.renderer.createText(this._el_10,"-",null),this._text_12=this.renderer.createText(this._el_5,"\n      ",null),this._text_13=this.renderer.createText(this._el_3,"\n\n    ",null),this._el_14=s.createRenderElement(this.renderer,this._el_3,"div",new s.InlineArray2(2,"style","padding-left: 5px;"),null),this._text_15=this.renderer.createText(this._el_14,"\n      ",null),this._el_16=s.createRenderElement(this.renderer,this._el_14,"div",s.EMPTY_INLINE_ARRAY,null),this._el_17=s.createRenderElement(this.renderer,this._el_16,"b",s.EMPTY_INLINE_ARRAY,null),this._text_18=this.renderer.createText(this._el_17,"",null),this._text_19=this.renderer.createText(this._el_14,"\n      ",null),this._el_20=s.createRenderElement(this.renderer,this._el_14,"input",new s.InlineArray2(2,"class","timer-number"),null),this._DefaultValueAccessor_20_3=new u.a(this.renderer,new f.a(this._el_20)),this._NG_VALUE_ACCESSOR_20_4=[this._DefaultValueAccessor_20_3.context],this._NgModel_20_5=new p.a(null,null,null,this._NG_VALUE_ACCESSOR_20_4),this._NgControl_20_6=this._NgModel_20_5.context,this._NgControlStatus_20_7=new d.a(this._NgControl_20_6),this._text_21=this.renderer.createText(this._el_14,"\n    ",null),this._text_22=this.renderer.createText(this._el_3,"\n  ",null),this._text_23=this.renderer.createText(this._el_1,"\n\n",null);var n=s.subscribeToRenderElement(this,this._el_7,new s.InlineArray2(2,"click",null),this.eventHandler(this.handleEvent_7)),i=s.subscribeToRenderElement(this,this._el_10,new s.InlineArray2(2,"click",null),this.eventHandler(this.handleEvent_10)),r=s.subscribeToRenderElement(this,this._el_20,new s.InlineArray8(6,"ngModelChange",null,"input",null,"blur",null),this.eventHandler(this.handleEvent_20));return this._NgModel_20_5.subscribe(this,this.eventHandler(this.handleEvent_20),!0),this.init(null,this.renderer.directRenderer?null:[this._text_0,this._el_1,this._text_2,this._el_3,this._text_4,this._el_5,this._text_6,this._el_7,this._text_8,this._text_9,this._el_10,this._text_11,this._text_12,this._text_13,this._el_14,this._text_15,this._el_16,this._el_17,this._text_18,this._text_19,this._el_20,this._text_21,this._text_22,this._text_23],[n,i,r]),null},e.prototype.injectorGetInternal=function(t,e,n){return t===x.a&&20===e?this._DefaultValueAccessor_20_3.context:t===m.a&&20===e?this._NG_VALUE_ACCESSOR_20_4:t===g.a&&20===e?this._NgModel_20_5.context:t===y.a&&20===e?this._NgControl_20_6:t===b.a&&20===e?this._NgControlStatus_20_7.context:n},e.prototype.detectChangesInternal=function(t){this._DefaultValueAccessor_20_3.ngDoCheck(this,this._el_20,t);var e=this.context.timer;this._NgModel_20_5.check_model(e,t,!1),this._NgModel_20_5.ngDoCheck(this,this._el_20,t),this._NgControlStatus_20_7.ngDoCheck(this,this._el_20,t);var n=s.inlineInterpolate(1," ",this.context.initiateCD,"\n\n");s.checkBinding(t,this._expr_29,n)&&(this.renderer.setText(this._text_0,n),this._expr_29=n);var i=s.inlineInterpolate(1,"",this.context.text,"");s.checkBinding(t,this._expr_30,i)&&(this.renderer.setText(this._text_18,i),this._expr_30=i),this._NgControlStatus_20_7.checkHost(this,this,this._el_20,t)},e.prototype.destroyInternal=function(){this._NgModel_20_5.ngOnDestroy()},e.prototype.handleEvent_7=function(t,e){this.markPathToRootAsCheckOnce();var n=!0;if("click"==t){n=this.context.changeTimer(!0)!==!1&&n}return n},e.prototype.handleEvent_10=function(t,e){this.markPathToRootAsCheckOnce();var n=!0;if("click"==t){n=this.context.changeTimer(!1)!==!1&&n}return n},e.prototype.handleEvent_20=function(t,e){this.markPathToRootAsCheckOnce();var n=!0;if(n=this._DefaultValueAccessor_20_3.handleEvent(t,e)&&n,"ngModelChange"==t){n=this.context.emitValue(e)!==!1&&n}return n},e}(_.a)},sZlv:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var i=[".my-button[_ngcontent-%COMP%]{width:50px;height:50px;border:solid #fff;padding:1px}.timer-number[_ngcontent-%COMP%]{width:50px;font-size:45px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;border:none}"]},vA8A:function(t,e,n){"use strict";var i=n("Bp7H"),r=n("Rw+2");n.d(e,"a",function(){return _});var _=function(){function t(t){this.service=t,this.clockAction=new r.K}return Object.defineProperty(t.prototype,"timer",{set:function(t){this.minutes=Math.floor(t/60),this.seconds=(t%60).toLocaleString(void 0,{minimumIntegerDigits:2})},enumerable:!0,configurable:!0}),t.prototype.ngOnInit=function(){this.getTimerStatus()},t.prototype.initiateCD=function(){this.clockAction.emit("pause/resume"),this.getTimerStatus()},t.prototype.reset=function(){this.clockAction.emit("reset")},t.prototype.getTimerStatus=function(){this.status=this.service.getInitiateCD()?"Stop":"Start"},t.ctorParameters=function(){return[{type:i.a}]},t}()},x35b:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=(n("XS25"),n("Rw+2")),r=n("kZql"),_=n("D8Yg"),s=n("kke6");r.a.production&&n.i(i.a)(),n.i(_.a)().bootstrapModuleFactory(s.a)}},[1]);