/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
import * as i0 from '@angular/core';
import * as i1 from '../../../src/app/app.module';
import * as i2 from '../../../src/app/app.component';
import * as i3 from '../../node_modules/@angular/material/typings/index.ngfactory';
import * as i4 from './core/login/login.component.ngfactory';
import * as i5 from './core/toolbar/toolbar.component.ngfactory';
import * as i6 from './app.component.ngfactory';
import * as i7 from '@angular/common';
import * as i8 from '@angular/platform-browser';
import * as i9 from '@angular/material';
import * as i10 from '@angular/animations/browser';
import * as i11 from '@angular/platform-browser/animations';
import * as i12 from '@angular/animations';
import * as i13 from '@angular/common/http';
import * as i14 from '../../../src/app/core/services/session-storage.service';
import * as i15 from '../../../src/app/core/http.interceptors';
import * as i16 from '@angular/forms';
import * as i17 from '@angular/cdk/bidi';
import * as i18 from '@angular/cdk/platform';
import * as i19 from '@angular/cdk/scrolling';
import * as i20 from '@angular/cdk/overlay';
import * as i21 from '@angular/cdk/observers';
import * as i22 from '@angular/cdk/a11y';
import * as i23 from '@angular/http';
import * as i24 from '@angular/flex-layout/media-query/match-media';
import * as i25 from '@angular/flex-layout/media-query/breakpoints/break-point-registry';
import * as i26 from '@angular/flex-layout/media-query/breakpoints/break-points';
import * as i27 from '@angular/flex-layout/media-query/media-monitor';
import * as i28 from '@angular/flex-layout/media-query/observable-media-service';
import * as i29 from '../../../src/app/core/services/auth.service';
import * as i30 from '@angular/router';
import * as i31 from '@angular/cdk/portal';
import * as i32 from '@angular/cdk/table';
import * as i33 from '@angular/flex-layout/media-query/_module';
import * as i34 from '@angular/flex-layout/flexbox/_module';
import * as i35 from '../../../src/app/core/shared.module';
import * as i36 from '../../../src/app/core/core.module';
import * as i37 from '../../../src/app/core/login/login.component';
import * as i38 from '../../../src/app/app-routing.module';
import * as i39 from '../../../src/app/core/login/login-routing.module';
import * as i40 from '../../../src/app/core/login/login.module';
import * as i41 from '../../../src/app/core/toolbar/toolbar.module';
export var AppModuleNgFactory = i0.ɵcmf(i1.AppModule, [i2.AppComponent], function (_l) {
    return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i3.MdDialogContainerNgFactory, i3.MdDatepickerContentNgFactory, i3.TooltipComponentNgFactory,
                    i3.MdSnackBarContainerNgFactory, i3.SimpleSnackBarNgFactory, i4.LoginComponentNgFactory,
                    i5.ToolbarComponentNgFactory, i6.AppComponentNgFactory]], [3, i0.ComponentFactoryResolver],
            i0.NgModuleRef]), i0.ɵmpd(5120, i0.LOCALE_ID, i0.ɵm, [[3, i0.LOCALE_ID]]),
        i0.ɵmpd(4608, i7.NgLocalization, i7.NgLocaleLocalization, [i0.LOCALE_ID]), i0.ɵmpd(5120, i0.APP_ID, i0.ɵf, []), i0.ɵmpd(5120, i0.IterableDiffers, i0.ɵk, []), i0.ɵmpd(5120, i0.KeyValueDiffers, i0.ɵl, []),
        i0.ɵmpd(4608, i8.DomSanitizer, i8.ɵe, [i7.DOCUMENT]), i0.ɵmpd(6144, i0.Sanitizer, null, [i8.DomSanitizer]), i0.ɵmpd(4608, i8.HAMMER_GESTURE_CONFIG, i9.GestureConfig, []), i0.ɵmpd(5120, i8.EVENT_MANAGER_PLUGINS, function (p0_0, p1_0, p2_0, p2_1) {
            return [new i8.ɵDomEventsPlugin(p0_0), new i8.ɵKeyEventsPlugin(p1_0),
                new i8.ɵHammerGesturesPlugin(p2_0, p2_1)];
        }, [i7.DOCUMENT, i7.DOCUMENT, i7.DOCUMENT, i8.HAMMER_GESTURE_CONFIG]), i0.ɵmpd(4608, i8.EventManager, i8.EventManager, [i8.EVENT_MANAGER_PLUGINS, i0.NgZone]),
        i0.ɵmpd(135680, i8.ɵDomSharedStylesHost, i8.ɵDomSharedStylesHost, [i7.DOCUMENT]),
        i0.ɵmpd(4608, i8.ɵDomRendererFactory2, i8.ɵDomRendererFactory2, [i8.EventManager,
            i8.ɵDomSharedStylesHost]), i0.ɵmpd(5120, i10.AnimationDriver, i11.ɵc, []),
        i0.ɵmpd(5120, i10.ɵAnimationStyleNormalizer, i11.ɵd, []), i0.ɵmpd(4608, i10.ɵAnimationEngine, i11.ɵb, [i10.AnimationDriver, i10.ɵAnimationStyleNormalizer]),
        i0.ɵmpd(5120, i0.RendererFactory2, i11.ɵe, [i8.ɵDomRendererFactory2, i10.ɵAnimationEngine,
            i0.NgZone]), i0.ɵmpd(6144, i8.ɵSharedStylesHost, null, [i8.ɵDomSharedStylesHost]),
        i0.ɵmpd(4608, i0.Testability, i0.Testability, [i0.NgZone]), i0.ɵmpd(4608, i8.Meta, i8.Meta, [i7.DOCUMENT]), i0.ɵmpd(4608, i8.Title, i8.Title, [i7.DOCUMENT]),
        i0.ɵmpd(4608, i12.AnimationBuilder, i11.ɵBrowserAnimationBuilder, [i0.RendererFactory2,
            i8.DOCUMENT]), i0.ɵmpd(4608, i13.HttpXsrfTokenExtractor, i13.ɵg, [i7.DOCUMENT,
            i0.PLATFORM_ID, i13.ɵe]), i0.ɵmpd(4608, i13.ɵh, i13.ɵh, [i13.HttpXsrfTokenExtractor,
            i13.ɵf]), i0.ɵmpd(4608, i14.SessionStorageService, i14.SessionStorageService, []), i0.ɵmpd(5120, i13.HTTP_INTERCEPTORS, function (p0_0, p1_0) {
            return [p0_0, new i15.HttpInterceptorService(p1_0)];
        }, [i13.ɵh, i14.SessionStorageService]), i0.ɵmpd(4608, i13.ɵd, i13.ɵd, []),
        i0.ɵmpd(6144, i13.XhrFactory, null, [i13.ɵd]), i0.ɵmpd(4608, i13.HttpXhrBackend, i13.HttpXhrBackend, [i13.XhrFactory]), i0.ɵmpd(6144, i13.HttpBackend, null, [i13.HttpXhrBackend]), i0.ɵmpd(5120, i13.HttpHandler, i13.ɵinterceptingHandler, [i13.HttpBackend, [2, i13.HTTP_INTERCEPTORS]]), i0.ɵmpd(4608, i13.HttpClient, i13.HttpClient, [i13.HttpHandler]), i0.ɵmpd(4608, i16.FormBuilder, i16.FormBuilder, []), i0.ɵmpd(4608, i16.ɵi, i16.ɵi, []), i0.ɵmpd(6144, i17.DIR_DOCUMENT, null, [i8.DOCUMENT]), i0.ɵmpd(4608, i17.Directionality, i17.Directionality, [[2, i17.DIR_DOCUMENT]]), i0.ɵmpd(4608, i18.Platform, i18.Platform, []), i0.ɵmpd(5120, i19.ScrollDispatcher, i19.SCROLL_DISPATCHER_PROVIDER_FACTORY, [[3, i19.ScrollDispatcher], i0.NgZone, i18.Platform]), i0.ɵmpd(5120, i19.ViewportRuler, i19.VIEWPORT_RULER_PROVIDER_FACTORY, [[3, i19.ViewportRuler], i19.ScrollDispatcher]),
        i0.ɵmpd(4608, i20.ScrollStrategyOptions, i20.ScrollStrategyOptions, [i19.ScrollDispatcher,
            i19.ViewportRuler]), i0.ɵmpd(5120, i20.OverlayContainer, i20.ɵa, [[3, i20.OverlayContainer]]),
        i0.ɵmpd(4608, i20.ɵf, i20.ɵf, [i19.ViewportRuler]), i0.ɵmpd(4608, i20.Overlay, i20.Overlay, [i20.ScrollStrategyOptions, i20.OverlayContainer, i0.ComponentFactoryResolver,
            i20.ɵf, i0.ApplicationRef, i0.Injector, i0.NgZone]), i0.ɵmpd(5120, i20.ɵc, i20.ɵd, [i20.Overlay]), i0.ɵmpd(5120, i9.MD_AUTOCOMPLETE_SCROLL_STRATEGY, i9.MD_AUTOCOMPLETE_SCROLL_STRATEGY_PROVIDER_FACTORY, [i20.Overlay]), i0.ɵmpd(5120, i9.FocusOriginMonitor, i9.FOCUS_ORIGIN_MONITOR_PROVIDER_FACTORY, [[3, i9.FocusOriginMonitor],
            i0.NgZone, i18.Platform]), i0.ɵmpd(5120, i9.UniqueSelectionDispatcher, i9.ɵb, [[3, i9.UniqueSelectionDispatcher]]), i0.ɵmpd(4608, i21.MdMutationObserverFactory, i21.MdMutationObserverFactory, []), i0.ɵmpd(4608, i22.InteractivityChecker, i22.InteractivityChecker, [i18.Platform]), i0.ɵmpd(4608, i22.FocusTrapFactory, i22.FocusTrapFactory, [i22.InteractivityChecker, i18.Platform, i0.NgZone]),
        i0.ɵmpd(5120, i22.LiveAnnouncer, i22.LIVE_ANNOUNCER_PROVIDER_FACTORY, [[3, i22.LiveAnnouncer],
            [2, i22.LIVE_ANNOUNCER_ELEMENT_TOKEN], i18.Platform]), i0.ɵmpd(5120, i9.MD_DIALOG_SCROLL_STRATEGY, i9.MD_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY, [i20.Overlay]), i0.ɵmpd(4608, i9.MdDialog, i9.MdDialog, [i20.Overlay, i0.Injector, i9.MD_DIALOG_SCROLL_STRATEGY,
            [2, i7.Location], [3, i9.MdDialog]]), i0.ɵmpd(5120, i9.MdIconRegistry, i9.ICON_REGISTRY_PROVIDER_FACTORY, [[3, i9.MdIconRegistry], [2, i23.Http],
            i8.DomSanitizer]), i0.ɵmpd(4608, i9.MdDatepickerIntl, i9.MdDatepickerIntl, []), i0.ɵmpd(5120, i9.MD_DATEPICKER_SCROLL_STRATEGY, i9.MD_DATEPICKER_SCROLL_STRATEGY_PROVIDER_FACTORY, [i20.Overlay]), i0.ɵmpd(5120, i9.ɵl, i9.ɵm, [i20.Overlay]), i0.ɵmpd(5120, i9.MD_SELECT_SCROLL_STRATEGY, i9.MD_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY, [i20.Overlay]), i0.ɵmpd(5120, i9.MD_TOOLTIP_SCROLL_STRATEGY, i9.MD_TOOLTIP_SCROLL_STRATEGY_PROVIDER_FACTORY, [i20.Overlay]), i0.ɵmpd(4608, i9.MdPaginatorIntl, i9.MdPaginatorIntl, []),
        i0.ɵmpd(4608, i9.MdSnackBar, i9.MdSnackBar, [i20.Overlay, i22.LiveAnnouncer,
            i0.Injector, [3, i9.MdSnackBar]]), i0.ɵmpd(4608, i9.MdSortHeaderIntl, i9.MdSortHeaderIntl, []), i0.ɵmpd(4608, i24.MatchMedia, i24.MatchMedia, [i0.NgZone]),
        i0.ɵmpd(4608, i25.BreakPointRegistry, i25.BreakPointRegistry, [i26.BREAKPOINTS]),
        i0.ɵmpd(4608, i27.MediaMonitor, i27.MediaMonitor, [i25.BreakPointRegistry, i24.MatchMedia]),
        i0.ɵmpd(4608, i28.ObservableMedia, i28.MediaService, [i24.MatchMedia, i25.BreakPointRegistry]),
        i0.ɵmpd(4608, i29.AuthService, i29.AuthService, [i13.HttpClient, i14.SessionStorageService,
            i30.Router]), i0.ɵmpd(5120, i30.ActivatedRoute, i30.ɵf, [i30.Router]), i0.ɵmpd(4608, i30.NoPreloading, i30.NoPreloading, []), i0.ɵmpd(6144, i30.PreloadingStrategy, null, [i30.NoPreloading]), i0.ɵmpd(135680, i30.RouterPreloader, i30.RouterPreloader, [i30.Router, i0.NgModuleFactoryLoader, i0.Compiler,
            i0.Injector, i30.PreloadingStrategy]), i0.ɵmpd(4608, i30.PreloadAllModules, i30.PreloadAllModules, []), i0.ɵmpd(5120, i30.ROUTER_INITIALIZER, i30.ɵi, [i30.ɵg]), i0.ɵmpd(5120, i0.APP_BOOTSTRAP_LISTENER, function (p0_0) {
            return [p0_0];
        }, [i30.ROUTER_INITIALIZER]), i0.ɵmpd(512, i7.CommonModule, i7.CommonModule, []), i0.ɵmpd(1024, i0.ErrorHandler, i8.ɵa, []), i0.ɵmpd(1024, i0.NgProbeToken, function () {
            return [i30.ɵb()];
        }, []), i0.ɵmpd(512, i30.ɵg, i30.ɵg, [i0.Injector]), i0.ɵmpd(1024, i0.APP_INITIALIZER, function (p0_0, p0_1, p1_0) {
            return [i8.ɵc(p0_0, p0_1), i30.ɵh(p1_0)];
        }, [[2, i8.NgProbeToken], [2, i0.NgProbeToken], i30.ɵg]), i0.ɵmpd(512, i0.ApplicationInitStatus, i0.ApplicationInitStatus, [[2, i0.APP_INITIALIZER]]), i0.ɵmpd(131584, i0.ɵe, i0.ɵe, [i0.NgZone, i0.ɵConsole, i0.Injector, i0.ErrorHandler, i0.ComponentFactoryResolver,
            i0.ApplicationInitStatus]), i0.ɵmpd(2048, i0.ApplicationRef, null, [i0.ɵe]), i0.ɵmpd(512, i0.ApplicationModule, i0.ApplicationModule, [i0.ApplicationRef]),
        i0.ɵmpd(512, i8.BrowserModule, i8.BrowserModule, [[3, i8.BrowserModule]]), i0.ɵmpd(512, i11.BrowserAnimationsModule, i11.BrowserAnimationsModule, []),
        i0.ɵmpd(512, i13.HttpClientXsrfModule, i13.HttpClientXsrfModule, []),
        i0.ɵmpd(512, i13.HttpClientModule, i13.HttpClientModule, []), i0.ɵmpd(512, i16.ɵba, i16.ɵba, []), i0.ɵmpd(512, i16.ReactiveFormsModule, i16.ReactiveFormsModule, []), i0.ɵmpd(512, i9.CompatibilityModule, i9.CompatibilityModule, []), i0.ɵmpd(512, i17.BidiModule, i17.BidiModule, []),
        i0.ɵmpd(256, i9.MATERIAL_SANITY_CHECKS, true, []), i0.ɵmpd(512, i9.MdCommonModule, i9.MdCommonModule, [[2, i8.DOCUMENT], [2, i9.MATERIAL_SANITY_CHECKS]]), i0.ɵmpd(512, i18.PlatformModule, i18.PlatformModule, []), i0.ɵmpd(512, i19.ScrollDispatchModule, i19.ScrollDispatchModule, []), i0.ɵmpd(512, i9.MdRippleModule, i9.MdRippleModule, []), i0.ɵmpd(512, i9.MdPseudoCheckboxModule, i9.MdPseudoCheckboxModule, []), i0.ɵmpd(512, i9.MdOptionModule, i9.MdOptionModule, []), i0.ɵmpd(512, i31.PortalModule, i31.PortalModule, []), i0.ɵmpd(512, i20.OverlayModule, i20.OverlayModule, []),
        i0.ɵmpd(512, i9.MdAutocompleteModule, i9.MdAutocompleteModule, []),
        i0.ɵmpd(512, i9.StyleModule, i9.StyleModule, []), i0.ɵmpd(512, i9.MdButtonModule, i9.MdButtonModule, []), i0.ɵmpd(512, i9.MdButtonToggleModule, i9.MdButtonToggleModule, []), i0.ɵmpd(512, i9.MdCardModule, i9.MdCardModule, []), i0.ɵmpd(512, i9.MdChipsModule, i9.MdChipsModule, []),
        i0.ɵmpd(512, i21.ObserversModule, i21.ObserversModule, []), i0.ɵmpd(512, i9.MdCheckboxModule, i9.MdCheckboxModule, []), i0.ɵmpd(512, i22.A11yModule, i22.A11yModule, []), i0.ɵmpd(512, i9.MdDialogModule, i9.MdDialogModule, []), i0.ɵmpd(512, i9.MdIconModule, i9.MdIconModule, []),
        i0.ɵmpd(512, i9.MdDatepickerModule, i9.MdDatepickerModule, []), i0.ɵmpd(512, i32.CdkTableModule, i32.CdkTableModule, []), i0.ɵmpd(512, i9.MdTableModule, i9.MdTableModule, []), i0.ɵmpd(512, i9.MdExpansionModule, i9.MdExpansionModule, []), i0.ɵmpd(512, i9.MdFormFieldModule, i9.MdFormFieldModule, []), i0.ɵmpd(512, i9.MdLineModule, i9.MdLineModule, []),
        i0.ɵmpd(512, i9.MdGridListModule, i9.MdGridListModule, []), i0.ɵmpd(512, i9.MdInputModule, i9.MdInputModule, []), i0.ɵmpd(512, i9.MdListModule, i9.MdListModule, []), i0.ɵmpd(512, i9.MdMenuModule, i9.MdMenuModule, []), i0.ɵmpd(512, i9.MdSelectModule, i9.MdSelectModule, []),
        i0.ɵmpd(512, i9.MdTooltipModule, i9.MdTooltipModule, []), i0.ɵmpd(512, i9.MdPaginatorModule, i9.MdPaginatorModule, []), i0.ɵmpd(512, i9.MdProgressBarModule, i9.MdProgressBarModule, []), i0.ɵmpd(512, i9.MdProgressSpinnerModule, i9.MdProgressSpinnerModule, []),
        i0.ɵmpd(512, i9.MdRadioModule, i9.MdRadioModule, []), i0.ɵmpd(512, i9.MdSidenavModule, i9.MdSidenavModule, []), i0.ɵmpd(512, i9.MdSliderModule, i9.MdSliderModule, []), i0.ɵmpd(512, i9.MdSlideToggleModule, i9.MdSlideToggleModule, []), i0.ɵmpd(512, i9.MdSnackBarModule, i9.MdSnackBarModule, []), i0.ɵmpd(512, i9.MdSortModule, i9.MdSortModule, []), i0.ɵmpd(512, i9.MdTabsModule, i9.MdTabsModule, []),
        i0.ɵmpd(512, i9.MdToolbarModule, i9.MdToolbarModule, []), i0.ɵmpd(512, i9.MaterialModule, i9.MaterialModule, []), i0.ɵmpd(512, i33.MediaQueriesModule, i33.MediaQueriesModule, []), i0.ɵmpd(512, i34.FlexLayoutModule, i34.FlexLayoutModule, []), i0.ɵmpd(512, i35.SharedModule, i35.SharedModule, []), i0.ɵmpd(512, i36.CoreModule, i36.CoreModule, []),
        i0.ɵmpd(1024, i30.ɵa, i30.ɵd, [[3, i30.Router]]), i0.ɵmpd(512, i30.UrlSerializer, i30.DefaultUrlSerializer, []), i0.ɵmpd(512, i30.ChildrenOutletContexts, i30.ChildrenOutletContexts, []), i0.ɵmpd(256, i30.ROUTER_CONFIGURATION, {}, []), i0.ɵmpd(1024, i7.LocationStrategy, i30.ɵc, [i7.PlatformLocation,
            [2, i7.APP_BASE_HREF], i30.ROUTER_CONFIGURATION]), i0.ɵmpd(512, i7.Location, i7.Location, [i7.LocationStrategy]), i0.ɵmpd(512, i0.Compiler, i0.Compiler, []), i0.ɵmpd(512, i0.NgModuleFactoryLoader, i0.SystemJsNgModuleLoader, [i0.Compiler, [2, i0.SystemJsNgModuleLoaderConfig]]), i0.ɵmpd(1024, i30.ROUTES, function () {
            return [[{ path: '', pathMatch: 'full', redirectTo: 'login' }, { path: 'texts',
                        loadChildren: 'app/texts/texts.module#TextsModule' }, { path: '**',
                        pathMatch: 'full', redirectTo: 'login' }], [{ path: 'login', component: i37.LoginComponent }]];
        }, []), i0.ɵmpd(1024, i30.Router, i30.ɵe, [i0.ApplicationRef, i30.UrlSerializer,
            i30.ChildrenOutletContexts, i7.Location, i0.Injector, i0.NgModuleFactoryLoader,
            i0.Compiler, i30.ROUTES, i30.ROUTER_CONFIGURATION, [2, i30.UrlHandlingStrategy],
            [2, i30.RouteReuseStrategy]]), i0.ɵmpd(512, i30.RouterModule, i30.RouterModule, [[2, i30.ɵa], [2, i30.Router]]), i0.ɵmpd(512, i38.AppRoutingModule, i38.AppRoutingModule, []), i0.ɵmpd(512, i39.LoginRoutingModule, i39.LoginRoutingModule, []), i0.ɵmpd(512, i40.LoginModule, i40.LoginModule, []),
        i0.ɵmpd(512, i41.ToolbarModule, i41.ToolbarModule, []), i0.ɵmpd(512, i1.AppModule, i1.AppModule, []), i0.ɵmpd(256, i13.ɵe, 'XSRF-TOKEN', []), i0.ɵmpd(256, i13.ɵf, 'X-XSRF-TOKEN', []), i0.ɵmpd(256, i9.MD_MENU_DEFAULT_OPTIONS, { overlapTrigger: true, xPosition: 'after', yPosition: 'below' }, []), i0.ɵmpd(256, i26.BREAKPOINTS, i26.RAW_DEFAULTS, [])]);
});
//# sourceMappingURL=app.module.ngfactory.js.map