/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from '../../../../src/app/texts/texts.module';
import * as i2 from './queued/queued.component.ngfactory';
import * as i3 from './sent/sent.component.ngfactory';
import * as i4 from './received/received.component.ngfactory';
import * as i5 from './type/type.component.ngfactory';
import * as i6 from '../../../node_modules/@angular/material/typings/index.ngfactory';
import * as i7 from '../../../../src/app/texts/can-activate.guard';
import * as i8 from '../../../../src/app/core/services/auth.service';
import * as i9 from '@angular/router';
import * as i10 from '@angular/common';
import * as i11 from '@angular/forms';
import * as i12 from '@angular/cdk/bidi';
import * as i13 from '@angular/platform-browser';
import * as i14 from '@angular/cdk/platform';
import * as i15 from '@angular/cdk/scrolling';
import * as i16 from '@angular/cdk/overlay';
import * as i17 from '@angular/material';
import * as i18 from '@angular/cdk/observers';
import * as i19 from '@angular/cdk/a11y';
import * as i20 from '@angular/http';
import * as i21 from '@angular/flex-layout/media-query/match-media';
import * as i22 from '@angular/flex-layout/media-query/breakpoints/break-point-registry';
import * as i23 from '@angular/flex-layout/media-query/breakpoints/break-points';
import * as i24 from '@angular/flex-layout/media-query/media-monitor';
import * as i25 from '@angular/flex-layout/media-query/observable-media-service';
import * as i26 from '../../../../src/app/texts/texts-routing.module';
import * as i27 from '@angular/cdk/portal';
import * as i28 from '@angular/cdk/table';
import * as i29 from '@angular/flex-layout/media-query/_module';
import * as i30 from '@angular/flex-layout/flexbox/_module';
import * as i31 from '../../../../src/app/core/shared.module';
import * as i32 from '../../../../src/app/texts/queued/queued.component';
import * as i33 from '../../../../src/app/texts/sent/sent.component';
import * as i34 from '../../../../src/app/texts/received/received.component';
import * as i35 from '../../../../src/app/texts/type/type.component';
export const TextsModuleNgFactory:i0.NgModuleFactory<i1.TextsModule> = i0.ɵcmf(i1.TextsModule,
    ([] as any[]),(_l:any) => {
      return i0.ɵmod([i0.ɵmpd(512,i0.ComponentFactoryResolver,i0.ɵCodegenComponentFactoryResolver,
          [[8,[i2.QueuedComponentNgFactory,i3.SentComponentNgFactory,i4.ReceivedComponentNgFactory,
              i5.TypeComponentNgFactory,i6.MdDialogContainerNgFactory,i6.MdDatepickerContentNgFactory,
              i6.TooltipComponentNgFactory,i6.MdSnackBarContainerNgFactory,i6.SimpleSnackBarNgFactory]],
              [3,i0.ComponentFactoryResolver],i0.NgModuleRef]),i0.ɵmpd(4608,i7.CanActivateGuard,
          i7.CanActivateGuard,[i8.AuthService,i9.Router]),i0.ɵmpd(4608,i10.NgLocalization,
          i10.NgLocaleLocalization,[i0.LOCALE_ID]),i0.ɵmpd(4608,i11.FormBuilder,i11.FormBuilder,
          ([] as any[])),i0.ɵmpd(4608,i11.ɵi,i11.ɵi,([] as any[])),i0.ɵmpd(6144,i12.DIR_DOCUMENT,
          (null as any),[i13.DOCUMENT]),i0.ɵmpd(4608,i12.Directionality,i12.Directionality,
          [[2,i12.DIR_DOCUMENT]]),i0.ɵmpd(4608,i14.Platform,i14.Platform,([] as any[])),
          i0.ɵmpd(5120,i15.ScrollDispatcher,i15.SCROLL_DISPATCHER_PROVIDER_FACTORY,
              [[3,i15.ScrollDispatcher],i0.NgZone,i14.Platform]),i0.ɵmpd(5120,i15.ViewportRuler,
              i15.VIEWPORT_RULER_PROVIDER_FACTORY,[[3,i15.ViewportRuler],i15.ScrollDispatcher]),
          i0.ɵmpd(4608,i16.ScrollStrategyOptions,i16.ScrollStrategyOptions,[i15.ScrollDispatcher,
              i15.ViewportRuler]),i0.ɵmpd(5120,i16.OverlayContainer,i16.ɵa,[[3,i16.OverlayContainer]]),
          i0.ɵmpd(4608,i16.ɵf,i16.ɵf,[i15.ViewportRuler]),i0.ɵmpd(4608,i16.Overlay,
              i16.Overlay,[i16.ScrollStrategyOptions,i16.OverlayContainer,i0.ComponentFactoryResolver,
                  i16.ɵf,i0.ApplicationRef,i0.Injector,i0.NgZone]),i0.ɵmpd(5120,i16.ɵc,
              i16.ɵd,[i16.Overlay]),i0.ɵmpd(5120,i17.MD_AUTOCOMPLETE_SCROLL_STRATEGY,
              i17.MD_AUTOCOMPLETE_SCROLL_STRATEGY_PROVIDER_FACTORY,[i16.Overlay]),
          i0.ɵmpd(5120,i17.FocusOriginMonitor,i17.FOCUS_ORIGIN_MONITOR_PROVIDER_FACTORY,
              [[3,i17.FocusOriginMonitor],i0.NgZone,i14.Platform]),i0.ɵmpd(5120,i17.UniqueSelectionDispatcher,
              i17.ɵb,[[3,i17.UniqueSelectionDispatcher]]),i0.ɵmpd(4608,i18.MdMutationObserverFactory,
              i18.MdMutationObserverFactory,([] as any[])),i0.ɵmpd(4608,i19.InteractivityChecker,
              i19.InteractivityChecker,[i14.Platform]),i0.ɵmpd(4608,i19.FocusTrapFactory,
              i19.FocusTrapFactory,[i19.InteractivityChecker,i14.Platform,i0.NgZone]),
          i0.ɵmpd(5120,i19.LiveAnnouncer,i19.LIVE_ANNOUNCER_PROVIDER_FACTORY,[[3,i19.LiveAnnouncer],
              [2,i19.LIVE_ANNOUNCER_ELEMENT_TOKEN],i14.Platform]),i0.ɵmpd(5120,i17.MD_DIALOG_SCROLL_STRATEGY,
              i17.MD_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY,[i16.Overlay]),i0.ɵmpd(4608,
              i17.MdDialog,i17.MdDialog,[i16.Overlay,i0.Injector,i17.MD_DIALOG_SCROLL_STRATEGY,
                  [2,i10.Location],[3,i17.MdDialog]]),i0.ɵmpd(5120,i17.MdIconRegistry,
              i17.ICON_REGISTRY_PROVIDER_FACTORY,[[3,i17.MdIconRegistry],[2,i20.Http],
                  i13.DomSanitizer]),i0.ɵmpd(4608,i17.MdDatepickerIntl,i17.MdDatepickerIntl,
              ([] as any[])),i0.ɵmpd(5120,i17.MD_DATEPICKER_SCROLL_STRATEGY,i17.MD_DATEPICKER_SCROLL_STRATEGY_PROVIDER_FACTORY,
              [i16.Overlay]),i0.ɵmpd(5120,i17.ɵl,i17.ɵm,[i16.Overlay]),i0.ɵmpd(5120,
              i17.MD_SELECT_SCROLL_STRATEGY,i17.MD_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY,
              [i16.Overlay]),i0.ɵmpd(5120,i17.MD_TOOLTIP_SCROLL_STRATEGY,i17.MD_TOOLTIP_SCROLL_STRATEGY_PROVIDER_FACTORY,
              [i16.Overlay]),i0.ɵmpd(4608,i17.MdPaginatorIntl,i17.MdPaginatorIntl,
              ([] as any[])),i0.ɵmpd(4608,i13.HAMMER_GESTURE_CONFIG,i17.GestureConfig,
              ([] as any[])),i0.ɵmpd(4608,i17.MdSnackBar,i17.MdSnackBar,[i16.Overlay,
              i19.LiveAnnouncer,i0.Injector,[3,i17.MdSnackBar]]),i0.ɵmpd(4608,i17.MdSortHeaderIntl,
              i17.MdSortHeaderIntl,([] as any[])),i0.ɵmpd(4608,i21.MatchMedia,i21.MatchMedia,
              [i0.NgZone]),i0.ɵmpd(4608,i22.BreakPointRegistry,i22.BreakPointRegistry,
              [i23.BREAKPOINTS]),i0.ɵmpd(4608,i24.MediaMonitor,i24.MediaMonitor,[i22.BreakPointRegistry,
              i21.MatchMedia]),i0.ɵmpd(4608,i25.ObservableMedia,i25.MediaService,[i21.MatchMedia,
              i22.BreakPointRegistry]),i0.ɵmpd(512,i9.RouterModule,i9.RouterModule,
              [[2,i9.ɵa],[2,i9.Router]]),i0.ɵmpd(512,i26.TextsRoutingModule,i26.TextsRoutingModule,
              ([] as any[])),i0.ɵmpd(512,i10.CommonModule,i10.CommonModule,([] as any[])),
          i0.ɵmpd(512,i11.ɵba,i11.ɵba,([] as any[])),i0.ɵmpd(512,i11.ReactiveFormsModule,
              i11.ReactiveFormsModule,([] as any[])),i0.ɵmpd(512,i17.CompatibilityModule,
              i17.CompatibilityModule,([] as any[])),i0.ɵmpd(512,i12.BidiModule,i12.BidiModule,
              ([] as any[])),i0.ɵmpd(256,i17.MATERIAL_SANITY_CHECKS,true,([] as any[])),
          i0.ɵmpd(512,i17.MdCommonModule,i17.MdCommonModule,[[2,i13.DOCUMENT],[2,i17.MATERIAL_SANITY_CHECKS]]),
          i0.ɵmpd(512,i14.PlatformModule,i14.PlatformModule,([] as any[])),i0.ɵmpd(512,
              i15.ScrollDispatchModule,i15.ScrollDispatchModule,([] as any[])),i0.ɵmpd(512,
              i17.MdRippleModule,i17.MdRippleModule,([] as any[])),i0.ɵmpd(512,i17.MdPseudoCheckboxModule,
              i17.MdPseudoCheckboxModule,([] as any[])),i0.ɵmpd(512,i17.MdOptionModule,
              i17.MdOptionModule,([] as any[])),i0.ɵmpd(512,i27.PortalModule,i27.PortalModule,
              ([] as any[])),i0.ɵmpd(512,i16.OverlayModule,i16.OverlayModule,([] as any[])),
          i0.ɵmpd(512,i17.MdAutocompleteModule,i17.MdAutocompleteModule,([] as any[])),
          i0.ɵmpd(512,i17.StyleModule,i17.StyleModule,([] as any[])),i0.ɵmpd(512,i17.MdButtonModule,
              i17.MdButtonModule,([] as any[])),i0.ɵmpd(512,i17.MdButtonToggleModule,
              i17.MdButtonToggleModule,([] as any[])),i0.ɵmpd(512,i17.MdCardModule,
              i17.MdCardModule,([] as any[])),i0.ɵmpd(512,i17.MdChipsModule,i17.MdChipsModule,
              ([] as any[])),i0.ɵmpd(512,i18.ObserversModule,i18.ObserversModule,([] as any[])),
          i0.ɵmpd(512,i17.MdCheckboxModule,i17.MdCheckboxModule,([] as any[])),i0.ɵmpd(512,
              i19.A11yModule,i19.A11yModule,([] as any[])),i0.ɵmpd(512,i17.MdDialogModule,
              i17.MdDialogModule,([] as any[])),i0.ɵmpd(512,i17.MdIconModule,i17.MdIconModule,
              ([] as any[])),i0.ɵmpd(512,i17.MdDatepickerModule,i17.MdDatepickerModule,
              ([] as any[])),i0.ɵmpd(512,i28.CdkTableModule,i28.CdkTableModule,([] as any[])),
          i0.ɵmpd(512,i17.MdTableModule,i17.MdTableModule,([] as any[])),i0.ɵmpd(512,
              i17.MdExpansionModule,i17.MdExpansionModule,([] as any[])),i0.ɵmpd(512,
              i17.MdFormFieldModule,i17.MdFormFieldModule,([] as any[])),i0.ɵmpd(512,
              i17.MdLineModule,i17.MdLineModule,([] as any[])),i0.ɵmpd(512,i17.MdGridListModule,
              i17.MdGridListModule,([] as any[])),i0.ɵmpd(512,i17.MdInputModule,i17.MdInputModule,
              ([] as any[])),i0.ɵmpd(512,i17.MdListModule,i17.MdListModule,([] as any[])),
          i0.ɵmpd(512,i17.MdMenuModule,i17.MdMenuModule,([] as any[])),i0.ɵmpd(512,
              i17.MdSelectModule,i17.MdSelectModule,([] as any[])),i0.ɵmpd(512,i17.MdTooltipModule,
              i17.MdTooltipModule,([] as any[])),i0.ɵmpd(512,i17.MdPaginatorModule,
              i17.MdPaginatorModule,([] as any[])),i0.ɵmpd(512,i17.MdProgressBarModule,
              i17.MdProgressBarModule,([] as any[])),i0.ɵmpd(512,i17.MdProgressSpinnerModule,
              i17.MdProgressSpinnerModule,([] as any[])),i0.ɵmpd(512,i17.MdRadioModule,
              i17.MdRadioModule,([] as any[])),i0.ɵmpd(512,i17.MdSidenavModule,i17.MdSidenavModule,
              ([] as any[])),i0.ɵmpd(512,i17.MdSliderModule,i17.MdSliderModule,([] as any[])),
          i0.ɵmpd(512,i17.MdSlideToggleModule,i17.MdSlideToggleModule,([] as any[])),
          i0.ɵmpd(512,i17.MdSnackBarModule,i17.MdSnackBarModule,([] as any[])),i0.ɵmpd(512,
              i17.MdSortModule,i17.MdSortModule,([] as any[])),i0.ɵmpd(512,i17.MdTabsModule,
              i17.MdTabsModule,([] as any[])),i0.ɵmpd(512,i17.MdToolbarModule,i17.MdToolbarModule,
              ([] as any[])),i0.ɵmpd(512,i17.MaterialModule,i17.MaterialModule,([] as any[])),
          i0.ɵmpd(512,i29.MediaQueriesModule,i29.MediaQueriesModule,([] as any[])),
          i0.ɵmpd(512,i30.FlexLayoutModule,i30.FlexLayoutModule,([] as any[])),i0.ɵmpd(512,
              i31.SharedModule,i31.SharedModule,([] as any[])),i0.ɵmpd(512,i1.TextsModule,
              i1.TextsModule,([] as any[])),i0.ɵmpd(1024,i9.ROUTES,() => {
            return [[{path:'queued',component:i32.QueuedComponent,canActivate:[i7.CanActivateGuard]},
                {path:'sent',component:i33.SentComponent,canActivate:[i7.CanActivateGuard]},
                {path:'received',component:i34.ReceivedComponent,canActivate:[i7.CanActivateGuard]},
                {path:'type',component:i35.TypeComponent,canActivate:[i7.CanActivateGuard]}]];
          },([] as any[])),i0.ɵmpd(256,i17.MD_MENU_DEFAULT_OPTIONS,{overlapTrigger:true,
              xPosition:'after',yPosition:'below'},([] as any[])),i0.ɵmpd(256,i23.BREAKPOINTS,
              i23.RAW_DEFAULTS,([] as any[]))]);
    });
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvQWxleC9Db2RlL0phdmFTY3JpcHQvdHh0ci5pby9zcmMvYXBwL3RleHRzL3RleHRzLm1vZHVsZS5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9DOi9Vc2Vycy9BbGV4L0NvZGUvSmF2YVNjcmlwdC90eHRyLmlvL3NyYy9hcHAvdGV4dHMvdGV4dHMubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIiAiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
