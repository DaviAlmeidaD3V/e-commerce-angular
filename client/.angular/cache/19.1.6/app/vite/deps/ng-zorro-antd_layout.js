import {
  NavigationEnd,
  Router,
  RouterLink
} from "./chunk-HYWMWAWJ.js";
import {
  CdkConnectedOverlay,
  CdkOverlayOrigin,
  NzNoAnimationDirective,
  OverlayModule,
  POSITION_MAP,
  collapseMotion,
  getPlacementName,
  slideMotion,
  zoomBigMotion
} from "./chunk-D7FMITTD.js";
import {
  Directionality,
  NzBreakpointService,
  NzIconDirective,
  NzIconModule,
  NzOutletModule,
  NzStringTemplateOutletDirective,
  siderResponsiveMap
} from "./chunk-PIN5UR6G.js";
import {
  Platform
} from "./chunk-QEJOD6NU.js";
import {
  inNextTick,
  numberAttributeWithZeroFallback,
  toCssPixel
} from "./chunk-KYMHPBRL.js";
import "./chunk-4NCN5ELN.js";
import "./chunk-A6GK534F.js";
import "./chunk-EGNPDZGF.js";
import "./chunk-OYGSQEEN.js";
import {
  NgTemplateOutlet
} from "./chunk-GTQPQOQO.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  Output,
  Renderer2,
  ViewChild,
  ViewEncapsulation,
  booleanAttribute,
  forwardRef,
  inject,
  setClassMetadata,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵsyntheticHostProperty,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-GTKA4GNV.js";
import {
  merge
} from "./chunk-D6A7BPUU.js";
import "./chunk-HPDQVLCV.js";
import {
  BehaviorSubject,
  Subject,
  auditTime,
  combineLatest,
  distinctUntilChanged,
  filter,
  map,
  mergeMap,
  startWith,
  switchMap,
  takeUntil
} from "./chunk-I2SI46AA.js";
import "./chunk-WDMUDEB6.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-menu.mjs
var _c0 = ["nz-menu-item", ""];
var _c1 = ["*"];
var _c2 = ["nz-submenu-inline-child", ""];
function NzSubmenuInlineChildComponent_ng_template_0_Template(rf, ctx) {
}
var _c3 = ["nz-submenu-none-inline-child", ""];
function NzSubmenuNoneInlineChildComponent_ng_template_1_Template(rf, ctx) {
}
var _c4 = ["nz-submenu-title", ""];
function NzSubMenuTitleComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-icon", 0);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("nzType", ctx_r0.nzIcon);
  }
}
function NzSubMenuTitleComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "span", 4);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r0.nzTitle);
  }
}
function NzSubMenuTitleComponent_Conditional_3_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-icon", 5);
  }
}
function NzSubMenuTitleComponent_Conditional_3_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-icon", 6);
  }
}
function NzSubMenuTitleComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 2);
    ɵɵtemplate(1, NzSubMenuTitleComponent_Conditional_3_Case_1_Template, 1, 0, "nz-icon", 5)(2, NzSubMenuTitleComponent_Conditional_3_Case_2_Template, 1, 0, "nz-icon", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵconditional((tmp_1_0 = ctx_r0.dir) === "rtl" ? 1 : 2);
  }
}
function NzSubMenuTitleComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 3);
  }
}
var _c5 = ["nz-submenu", ""];
var _c6 = [[["", "title", ""]], "*"];
var _c7 = ["[title]", "*"];
function NzSubMenuComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
  }
}
function NzSubMenuComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 3);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    const subMenuTemplate_r3 = ɵɵreference(6);
    ɵɵproperty("mode", ctx_r1.mode)("nzOpen", ctx_r1.nzOpen)("@.disabled", !!(ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation))("nzNoAnimation", ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation)("menuClass", ctx_r1.nzMenuClassName)("templateOutlet", subMenuTemplate_r3);
  }
}
function NzSubMenuComponent_Conditional_4_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 6);
    ɵɵlistener("subMenuMouseState", function NzSubMenuComponent_Conditional_4_ng_template_0_Template_div_subMenuMouseState_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.setMouseEnterState($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    const subMenuTemplate_r3 = ɵɵreference(6);
    ɵɵproperty("theme", ctx_r1.theme)("mode", ctx_r1.mode)("nzOpen", ctx_r1.nzOpen)("position", ctx_r1.position)("nzDisabled", ctx_r1.nzDisabled)("isMenuInsideDropDown", ctx_r1.isMenuInsideDropDown)("nzTriggerSubMenuAction", ctx_r1.nzTriggerSubMenuAction)("templateOutlet", subMenuTemplate_r3)("menuClass", ctx_r1.nzMenuClassName)("@.disabled", !!(ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation))("nzNoAnimation", ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation);
  }
}
function NzSubMenuComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵtemplate(0, NzSubMenuComponent_Conditional_4_ng_template_0_Template, 1, 11, "ng-template", 5);
    ɵɵlistener("positionChange", function NzSubMenuComponent_Conditional_4_Template_ng_template_positionChange_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onPositionChange($event));
    })("overlayOutsideClick", function NzSubMenuComponent_Conditional_4_Template_ng_template_overlayOutsideClick_0_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.setMouseEnterState(false));
    });
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    const origin_r6 = ɵɵreference(1);
    ɵɵproperty("cdkConnectedOverlayPositions", ctx_r1.overlayPositions)("cdkConnectedOverlayOrigin", origin_r6)("cdkConnectedOverlayWidth", ctx_r1.triggerWidth)("cdkConnectedOverlayOpen", ctx_r1.nzOpen)("cdkConnectedOverlayTransformOriginOn", ".ant-menu-submenu");
  }
}
function NzSubMenuComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 1);
  }
}
var _c8 = ["titleElement"];
var _c9 = ["nz-menu-group", ""];
var _c10 = ["*", [["", "title", ""]]];
var _c11 = ["*", "[title]"];
function NzMenuGroupComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.nzTitle);
  }
}
function NzMenuGroupComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 1);
  }
}
var NzIsMenuInsideDropDownToken = new InjectionToken("NzIsInDropDownMenuToken");
var NzMenuServiceLocalToken = new InjectionToken("NzMenuServiceLocalToken");
var MenuService = class _MenuService {
  /** all descendant menu click **/
  descendantMenuItemClick$ = new Subject();
  /** child menu item click **/
  childMenuItemClick$ = new Subject();
  theme$ = new BehaviorSubject("light");
  mode$ = new BehaviorSubject("vertical");
  inlineIndent$ = new BehaviorSubject(24);
  isChildSubMenuOpen$ = new BehaviorSubject(false);
  onDescendantMenuItemClick(menu) {
    this.descendantMenuItemClick$.next(menu);
  }
  onChildMenuItemClick(menu) {
    this.childMenuItemClick$.next(menu);
  }
  setMode(mode) {
    this.mode$.next(mode);
  }
  setTheme(theme) {
    this.theme$.next(theme);
  }
  setInlineIndent(indent) {
    this.inlineIndent$.next(indent);
  }
  static ɵfac = function MenuService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MenuService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _MenuService,
    factory: _MenuService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenuService, [{
    type: Injectable
  }], null, null);
})();
var NzSubmenuService = class _NzSubmenuService {
  nzMenuService = inject(MenuService);
  mode$ = this.nzMenuService.mode$.pipe(map((mode) => {
    if (mode === "inline") {
      return "inline";
    } else if (mode === "vertical" || this.nzHostSubmenuService) {
      return "vertical";
    } else {
      return "horizontal";
    }
  }));
  level = 1;
  isMenuInsideDropDown = inject(NzIsMenuInsideDropDownToken);
  isCurrentSubMenuOpen$ = new BehaviorSubject(false);
  isChildSubMenuOpen$ = new BehaviorSubject(false);
  /** submenu title & overlay mouse enter status **/
  isMouseEnterTitleOrOverlay$ = new Subject();
  childMenuItemClick$ = new Subject();
  destroy$ = new Subject();
  nzHostSubmenuService = inject(_NzSubmenuService, {
    optional: true,
    skipSelf: true
  });
  /**
   * menu item inside submenu clicked
   *
   * @param menu
   */
  onChildMenuItemClick(menu) {
    this.childMenuItemClick$.next(menu);
  }
  setOpenStateWithoutDebounce(value) {
    this.isCurrentSubMenuOpen$.next(value);
  }
  setMouseEnterTitleOrOverlayState(value) {
    this.isMouseEnterTitleOrOverlay$.next(value);
  }
  constructor() {
    if (this.nzHostSubmenuService) {
      this.level = this.nzHostSubmenuService.level + 1;
    }
    const isClosedByMenuItemClick = this.childMenuItemClick$.pipe(mergeMap(() => this.mode$), filter((mode) => mode !== "inline" || this.isMenuInsideDropDown), map(() => false));
    const isCurrentSubmenuOpen$ = merge(this.isMouseEnterTitleOrOverlay$, isClosedByMenuItemClick);
    const isSubMenuOpenWithDebounce$ = combineLatest([this.isChildSubMenuOpen$, isCurrentSubmenuOpen$]).pipe(map(([isChildSubMenuOpen, isCurrentSubmenuOpen]) => isChildSubMenuOpen || isCurrentSubmenuOpen), auditTime(150), distinctUntilChanged(), takeUntil(this.destroy$));
    isSubMenuOpenWithDebounce$.pipe(distinctUntilChanged()).subscribe((data) => {
      this.setOpenStateWithoutDebounce(data);
      if (this.nzHostSubmenuService) {
        this.nzHostSubmenuService.isChildSubMenuOpen$.next(data);
      } else {
        this.nzMenuService.isChildSubMenuOpen$.next(data);
      }
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  static ɵfac = function NzSubmenuService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzSubmenuService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _NzSubmenuService,
    factory: _NzSubmenuService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSubmenuService, [{
    type: Injectable
  }], () => [], null);
})();
var NzMenuItemComponent = class _NzMenuItemComponent {
  nzMenuService;
  cdr;
  destroy$ = new Subject();
  nzSubmenuService = inject(NzSubmenuService, {
    optional: true
  });
  directionality = inject(Directionality);
  routerLink = inject(RouterLink, {
    optional: true
  });
  router = inject(Router, {
    optional: true
  });
  isMenuInsideDropDown = inject(NzIsMenuInsideDropDownToken);
  level = this.nzSubmenuService ? this.nzSubmenuService.level + 1 : 1;
  selected$ = new Subject();
  inlinePaddingLeft = null;
  dir = "ltr";
  nzPaddingLeft;
  nzDisabled = false;
  nzSelected = false;
  nzDanger = false;
  nzMatchRouterExact = false;
  nzMatchRouter = false;
  listOfRouterLink;
  /** clear all item selected status except this */
  clickMenuItem(e) {
    if (this.nzDisabled) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      this.nzMenuService.onDescendantMenuItemClick(this);
      if (this.nzSubmenuService) {
        this.nzSubmenuService.onChildMenuItemClick(this);
      } else {
        this.nzMenuService.onChildMenuItemClick(this);
      }
    }
  }
  setSelectedState(value) {
    this.nzSelected = value;
    this.selected$.next(value);
  }
  updateRouterActive() {
    if (!this.listOfRouterLink || !this.router || !this.router.navigated || !this.nzMatchRouter) {
      return;
    }
    Promise.resolve().then(() => {
      const hasActiveLinks = this.hasActiveLinks();
      if (this.nzSelected !== hasActiveLinks) {
        this.nzSelected = hasActiveLinks;
        this.setSelectedState(this.nzSelected);
        this.cdr.markForCheck();
      }
    });
  }
  hasActiveLinks() {
    const isActiveCheckFn = this.isLinkActive(this.router);
    return this.routerLink && isActiveCheckFn(this.routerLink) || this.listOfRouterLink.some(isActiveCheckFn);
  }
  isLinkActive(router) {
    return (link) => router.isActive(link.urlTree || "", {
      paths: this.nzMatchRouterExact ? "exact" : "subset",
      queryParams: this.nzMatchRouterExact ? "exact" : "subset",
      fragment: "ignored",
      matrixParams: "ignored"
    });
  }
  constructor(nzMenuService, cdr) {
    this.nzMenuService = nzMenuService;
    this.cdr = cdr;
    if (this.router) {
      this.router.events.pipe(takeUntil(this.destroy$), filter((e) => e instanceof NavigationEnd)).subscribe(() => {
        this.updateRouterActive();
      });
    }
  }
  ngOnInit() {
    combineLatest([this.nzMenuService.mode$, this.nzMenuService.inlineIndent$]).pipe(takeUntil(this.destroy$)).subscribe(([mode, inlineIndent]) => {
      this.inlinePaddingLeft = mode === "inline" ? this.level * inlineIndent : null;
    });
    this.dir = this.directionality.value;
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
    });
  }
  ngAfterContentInit() {
    this.listOfRouterLink.changes.pipe(takeUntil(this.destroy$)).subscribe(() => this.updateRouterActive());
    this.updateRouterActive();
  }
  ngOnChanges(changes) {
    if (changes.nzSelected) {
      this.setSelectedState(this.nzSelected);
    }
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  static ɵfac = function NzMenuItemComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzMenuItemComponent)(ɵɵdirectiveInject(MenuService), ɵɵdirectiveInject(ChangeDetectorRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NzMenuItemComponent,
    selectors: [["", "nz-menu-item", ""]],
    contentQueries: function NzMenuItemComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, RouterLink, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listOfRouterLink = _t);
      }
    },
    hostVars: 20,
    hostBindings: function NzMenuItemComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("click", function NzMenuItemComponent_click_HostBindingHandler($event) {
          return ctx.clickMenuItem($event);
        });
      }
      if (rf & 2) {
        ɵɵstyleProp("padding-left", ctx.dir === "rtl" ? null : ctx.nzPaddingLeft || ctx.inlinePaddingLeft, "px")("padding-right", ctx.dir === "rtl" ? ctx.nzPaddingLeft || ctx.inlinePaddingLeft : null, "px");
        ɵɵclassProp("ant-dropdown-menu-item", ctx.isMenuInsideDropDown)("ant-dropdown-menu-item-selected", ctx.isMenuInsideDropDown && ctx.nzSelected)("ant-dropdown-menu-item-danger", ctx.isMenuInsideDropDown && ctx.nzDanger)("ant-dropdown-menu-item-disabled", ctx.isMenuInsideDropDown && ctx.nzDisabled)("ant-menu-item", !ctx.isMenuInsideDropDown)("ant-menu-item-selected", !ctx.isMenuInsideDropDown && ctx.nzSelected)("ant-menu-item-danger", !ctx.isMenuInsideDropDown && ctx.nzDanger)("ant-menu-item-disabled", !ctx.isMenuInsideDropDown && ctx.nzDisabled);
      }
    },
    inputs: {
      nzPaddingLeft: [2, "nzPaddingLeft", "nzPaddingLeft", numberAttributeWithZeroFallback],
      nzDisabled: [2, "nzDisabled", "nzDisabled", booleanAttribute],
      nzSelected: [2, "nzSelected", "nzSelected", booleanAttribute],
      nzDanger: [2, "nzDanger", "nzDanger", booleanAttribute],
      nzMatchRouterExact: [2, "nzMatchRouterExact", "nzMatchRouterExact", booleanAttribute],
      nzMatchRouter: [2, "nzMatchRouter", "nzMatchRouter", booleanAttribute]
    },
    exportAs: ["nzMenuItem"],
    features: [ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature],
    attrs: _c0,
    ngContentSelectors: _c1,
    decls: 2,
    vars: 0,
    consts: [[1, "ant-menu-title-content"]],
    template: function NzMenuItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "span", 0);
        ɵɵprojection(1);
        ɵɵelementEnd();
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzMenuItemComponent, [{
    type: Component,
    args: [{
      selector: "[nz-menu-item]",
      exportAs: "nzMenuItem",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      preserveWhitespaces: false,
      template: `
    <span class="ant-menu-title-content">
      <ng-content></ng-content>
    </span>
  `,
      host: {
        "[class.ant-dropdown-menu-item]": `isMenuInsideDropDown`,
        "[class.ant-dropdown-menu-item-selected]": `isMenuInsideDropDown && nzSelected`,
        "[class.ant-dropdown-menu-item-danger]": `isMenuInsideDropDown && nzDanger`,
        "[class.ant-dropdown-menu-item-disabled]": `isMenuInsideDropDown && nzDisabled`,
        "[class.ant-menu-item]": `!isMenuInsideDropDown`,
        "[class.ant-menu-item-selected]": `!isMenuInsideDropDown && nzSelected`,
        "[class.ant-menu-item-danger]": `!isMenuInsideDropDown && nzDanger`,
        "[class.ant-menu-item-disabled]": `!isMenuInsideDropDown && nzDisabled`,
        "[style.paddingLeft.px]": `dir === 'rtl' ? null : nzPaddingLeft || inlinePaddingLeft`,
        "[style.paddingRight.px]": `dir === 'rtl' ? nzPaddingLeft || inlinePaddingLeft : null`,
        "(click)": "clickMenuItem($event)"
      }
    }]
  }], () => [{
    type: MenuService
  }, {
    type: ChangeDetectorRef
  }], {
    nzPaddingLeft: [{
      type: Input,
      args: [{
        transform: numberAttributeWithZeroFallback
      }]
    }],
    nzDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzSelected: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzDanger: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzMatchRouterExact: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzMatchRouter: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    listOfRouterLink: [{
      type: ContentChildren,
      args: [RouterLink, {
        descendants: true
      }]
    }]
  });
})();
var NzSubmenuInlineChildComponent = class _NzSubmenuInlineChildComponent {
  elementRef;
  renderer;
  directionality;
  templateOutlet = null;
  menuClass = "";
  mode = "vertical";
  nzOpen = false;
  listOfCacheClassName = [];
  expandState = "collapsed";
  dir = "ltr";
  destroy$ = new Subject();
  constructor(elementRef, renderer, directionality) {
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.directionality = directionality;
  }
  calcMotionState() {
    if (this.nzOpen) {
      this.expandState = "expanded";
    } else {
      this.expandState = "collapsed";
    }
  }
  ngOnInit() {
    this.calcMotionState();
    this.dir = this.directionality.value;
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
    });
  }
  ngOnChanges(changes) {
    const {
      mode,
      nzOpen,
      menuClass
    } = changes;
    if (mode || nzOpen) {
      this.calcMotionState();
    }
    if (menuClass) {
      if (this.listOfCacheClassName.length) {
        this.listOfCacheClassName.filter((item) => !!item).forEach((className) => {
          this.renderer.removeClass(this.elementRef.nativeElement, className);
        });
      }
      if (this.menuClass) {
        this.listOfCacheClassName = this.menuClass.split(" ");
        this.listOfCacheClassName.filter((item) => !!item).forEach((className) => {
          this.renderer.addClass(this.elementRef.nativeElement, className);
        });
      }
    }
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  static ɵfac = function NzSubmenuInlineChildComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzSubmenuInlineChildComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(Directionality));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NzSubmenuInlineChildComponent,
    selectors: [["", "nz-submenu-inline-child", ""]],
    hostAttrs: [1, "ant-menu", "ant-menu-inline", "ant-menu-sub"],
    hostVars: 3,
    hostBindings: function NzSubmenuInlineChildComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵsyntheticHostProperty("@collapseMotion", ctx.expandState);
        ɵɵclassProp("ant-menu-rtl", ctx.dir === "rtl");
      }
    },
    inputs: {
      templateOutlet: "templateOutlet",
      menuClass: "menuClass",
      mode: "mode",
      nzOpen: "nzOpen"
    },
    exportAs: ["nzSubmenuInlineChild"],
    features: [ɵɵNgOnChangesFeature],
    attrs: _c2,
    decls: 1,
    vars: 1,
    consts: [[3, "ngTemplateOutlet"]],
    template: function NzSubmenuInlineChildComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, NzSubmenuInlineChildComponent_ng_template_0_Template, 0, 0, "ng-template", 0);
      }
      if (rf & 2) {
        ɵɵproperty("ngTemplateOutlet", ctx.templateOutlet);
      }
    },
    dependencies: [NgTemplateOutlet],
    encapsulation: 2,
    data: {
      animation: [collapseMotion]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSubmenuInlineChildComponent, [{
    type: Component,
    args: [{
      selector: "[nz-submenu-inline-child]",
      animations: [collapseMotion],
      exportAs: "nzSubmenuInlineChild",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: ` <ng-template [ngTemplateOutlet]="templateOutlet"></ng-template> `,
      host: {
        class: "ant-menu ant-menu-inline ant-menu-sub",
        "[class.ant-menu-rtl]": `dir === 'rtl'`,
        "[@collapseMotion]": "expandState"
      },
      imports: [NgTemplateOutlet]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: Directionality
  }], {
    templateOutlet: [{
      type: Input
    }],
    menuClass: [{
      type: Input
    }],
    mode: [{
      type: Input
    }],
    nzOpen: [{
      type: Input
    }]
  });
})();
var NzSubmenuNoneInlineChildComponent = class _NzSubmenuNoneInlineChildComponent {
  directionality;
  menuClass = "";
  theme = "light";
  templateOutlet = null;
  isMenuInsideDropDown = false;
  mode = "vertical";
  nzTriggerSubMenuAction = "hover";
  position = "right";
  nzDisabled = false;
  nzOpen = false;
  subMenuMouseState = new EventEmitter();
  constructor(directionality) {
    this.directionality = directionality;
  }
  setMouseState(state) {
    if (!this.nzDisabled && this.nzTriggerSubMenuAction === "hover") {
      this.subMenuMouseState.next(state);
    }
  }
  expandState = "collapsed";
  dir = "ltr";
  destroy$ = new Subject();
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  calcMotionState() {
    if (this.nzOpen) {
      if (this.mode === "horizontal") {
        this.expandState = "bottom";
      } else if (this.mode === "vertical") {
        this.expandState = "active";
      }
    } else {
      this.expandState = "collapsed";
    }
  }
  ngOnInit() {
    this.calcMotionState();
    this.dir = this.directionality.value;
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
    });
  }
  ngOnChanges(changes) {
    const {
      mode,
      nzOpen
    } = changes;
    if (mode || nzOpen) {
      this.calcMotionState();
    }
  }
  static ɵfac = function NzSubmenuNoneInlineChildComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzSubmenuNoneInlineChildComponent)(ɵɵdirectiveInject(Directionality));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NzSubmenuNoneInlineChildComponent,
    selectors: [["", "nz-submenu-none-inline-child", ""]],
    hostAttrs: [1, "ant-menu-submenu", "ant-menu-submenu-popup"],
    hostVars: 14,
    hostBindings: function NzSubmenuNoneInlineChildComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("mouseenter", function NzSubmenuNoneInlineChildComponent_mouseenter_HostBindingHandler() {
          return ctx.setMouseState(true);
        })("mouseleave", function NzSubmenuNoneInlineChildComponent_mouseleave_HostBindingHandler() {
          return ctx.setMouseState(false);
        });
      }
      if (rf & 2) {
        ɵɵsyntheticHostProperty("@slideMotion", ctx.expandState)("@zoomBigMotion", ctx.expandState);
        ɵɵclassProp("ant-menu-light", ctx.theme === "light")("ant-menu-dark", ctx.theme === "dark")("ant-menu-submenu-placement-bottom", ctx.mode === "horizontal")("ant-menu-submenu-placement-right", ctx.mode === "vertical" && ctx.position === "right")("ant-menu-submenu-placement-left", ctx.mode === "vertical" && ctx.position === "left")("ant-menu-submenu-rtl", ctx.dir === "rtl");
      }
    },
    inputs: {
      menuClass: "menuClass",
      theme: "theme",
      templateOutlet: "templateOutlet",
      isMenuInsideDropDown: "isMenuInsideDropDown",
      mode: "mode",
      nzTriggerSubMenuAction: "nzTriggerSubMenuAction",
      position: "position",
      nzDisabled: "nzDisabled",
      nzOpen: "nzOpen"
    },
    outputs: {
      subMenuMouseState: "subMenuMouseState"
    },
    exportAs: ["nzSubmenuNoneInlineChild"],
    features: [ɵɵNgOnChangesFeature],
    attrs: _c3,
    decls: 2,
    vars: 17,
    consts: [[3, "ngTemplateOutlet"]],
    template: function NzSubmenuNoneInlineChildComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div");
        ɵɵtemplate(1, NzSubmenuNoneInlineChildComponent_ng_template_1_Template, 0, 0, "ng-template", 0);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.menuClass);
        ɵɵclassProp("ant-dropdown-menu", ctx.isMenuInsideDropDown)("ant-menu", !ctx.isMenuInsideDropDown)("ant-dropdown-menu-vertical", ctx.isMenuInsideDropDown)("ant-menu-vertical", !ctx.isMenuInsideDropDown)("ant-dropdown-menu-sub", ctx.isMenuInsideDropDown)("ant-menu-sub", !ctx.isMenuInsideDropDown)("ant-menu-rtl", ctx.dir === "rtl");
        ɵɵadvance();
        ɵɵproperty("ngTemplateOutlet", ctx.templateOutlet);
      }
    },
    dependencies: [NgTemplateOutlet],
    encapsulation: 2,
    data: {
      animation: [zoomBigMotion, slideMotion]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSubmenuNoneInlineChildComponent, [{
    type: Component,
    args: [{
      selector: "[nz-submenu-none-inline-child]",
      exportAs: "nzSubmenuNoneInlineChild",
      encapsulation: ViewEncapsulation.None,
      animations: [zoomBigMotion, slideMotion],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <div
      [class.ant-dropdown-menu]="isMenuInsideDropDown"
      [class.ant-menu]="!isMenuInsideDropDown"
      [class.ant-dropdown-menu-vertical]="isMenuInsideDropDown"
      [class.ant-menu-vertical]="!isMenuInsideDropDown"
      [class.ant-dropdown-menu-sub]="isMenuInsideDropDown"
      [class.ant-menu-sub]="!isMenuInsideDropDown"
      [class.ant-menu-rtl]="dir === 'rtl'"
      [class]="menuClass"
    >
      <ng-template [ngTemplateOutlet]="templateOutlet"></ng-template>
    </div>
  `,
      host: {
        class: "ant-menu-submenu ant-menu-submenu-popup",
        "[class.ant-menu-light]": "theme === 'light'",
        "[class.ant-menu-dark]": "theme === 'dark'",
        "[class.ant-menu-submenu-placement-bottom]": "mode === 'horizontal'",
        "[class.ant-menu-submenu-placement-right]": "mode === 'vertical' && position === 'right'",
        "[class.ant-menu-submenu-placement-left]": "mode === 'vertical' && position === 'left'",
        "[class.ant-menu-submenu-rtl]": 'dir ==="rtl"',
        "[@slideMotion]": "expandState",
        "[@zoomBigMotion]": "expandState",
        "(mouseenter)": "setMouseState(true)",
        "(mouseleave)": "setMouseState(false)"
      },
      imports: [NgTemplateOutlet]
    }]
  }], () => [{
    type: Directionality
  }], {
    menuClass: [{
      type: Input
    }],
    theme: [{
      type: Input
    }],
    templateOutlet: [{
      type: Input
    }],
    isMenuInsideDropDown: [{
      type: Input
    }],
    mode: [{
      type: Input
    }],
    nzTriggerSubMenuAction: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    nzDisabled: [{
      type: Input
    }],
    nzOpen: [{
      type: Input
    }],
    subMenuMouseState: [{
      type: Output
    }]
  });
})();
var NzSubMenuTitleComponent = class _NzSubMenuTitleComponent {
  cdr;
  directionality;
  nzIcon = null;
  nzTitle = null;
  isMenuInsideDropDown = false;
  nzDisabled = false;
  paddingLeft = null;
  mode = "vertical";
  nzTriggerSubMenuAction = "hover";
  toggleSubMenu = new EventEmitter();
  subMenuMouseState = new EventEmitter();
  dir = "ltr";
  destroy$ = new Subject();
  constructor(cdr, directionality) {
    this.cdr = cdr;
    this.directionality = directionality;
  }
  ngOnInit() {
    this.dir = this.directionality.value;
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  setMouseState(state) {
    if (!this.nzDisabled && this.nzTriggerSubMenuAction === "hover") {
      this.subMenuMouseState.next(state);
    }
  }
  clickTitle() {
    if ((this.mode === "inline" || this.nzTriggerSubMenuAction === "click") && !this.nzDisabled) {
      this.subMenuMouseState.next(true);
      this.toggleSubMenu.emit();
    }
  }
  static ɵfac = function NzSubMenuTitleComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzSubMenuTitleComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Directionality));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NzSubMenuTitleComponent,
    selectors: [["", "nz-submenu-title", ""]],
    hostVars: 8,
    hostBindings: function NzSubMenuTitleComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("click", function NzSubMenuTitleComponent_click_HostBindingHandler() {
          return ctx.clickTitle();
        })("mouseenter", function NzSubMenuTitleComponent_mouseenter_HostBindingHandler() {
          return ctx.setMouseState(true);
        })("mouseleave", function NzSubMenuTitleComponent_mouseleave_HostBindingHandler() {
          return ctx.setMouseState(false);
        });
      }
      if (rf & 2) {
        ɵɵstyleProp("padding-left", ctx.dir === "rtl" ? null : ctx.paddingLeft, "px")("padding-right", ctx.dir === "rtl" ? ctx.paddingLeft : null, "px");
        ɵɵclassProp("ant-dropdown-menu-submenu-title", ctx.isMenuInsideDropDown)("ant-menu-submenu-title", !ctx.isMenuInsideDropDown);
      }
    },
    inputs: {
      nzIcon: "nzIcon",
      nzTitle: "nzTitle",
      isMenuInsideDropDown: "isMenuInsideDropDown",
      nzDisabled: "nzDisabled",
      paddingLeft: "paddingLeft",
      mode: "mode",
      nzTriggerSubMenuAction: "nzTriggerSubMenuAction"
    },
    outputs: {
      toggleSubMenu: "toggleSubMenu",
      subMenuMouseState: "subMenuMouseState"
    },
    exportAs: ["nzSubmenuTitle"],
    attrs: _c4,
    ngContentSelectors: _c1,
    decls: 5,
    vars: 3,
    consts: [[3, "nzType"], [4, "nzStringTemplateOutlet"], [1, "ant-dropdown-menu-submenu-expand-icon"], [1, "ant-menu-submenu-arrow"], [1, "ant-menu-title-content"], ["nzType", "left", 1, "ant-dropdown-menu-submenu-arrow-icon"], ["nzType", "right", 1, "ant-dropdown-menu-submenu-arrow-icon"]],
    template: function NzSubMenuTitleComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵtemplate(0, NzSubMenuTitleComponent_Conditional_0_Template, 1, 1, "nz-icon", 0)(1, NzSubMenuTitleComponent_ng_container_1_Template, 3, 1, "ng-container", 1);
        ɵɵprojection(2);
        ɵɵtemplate(3, NzSubMenuTitleComponent_Conditional_3_Template, 3, 1, "span", 2)(4, NzSubMenuTitleComponent_Conditional_4_Template, 1, 0, "span", 3);
      }
      if (rf & 2) {
        ɵɵconditional(ctx.nzIcon ? 0 : -1);
        ɵɵadvance();
        ɵɵproperty("nzStringTemplateOutlet", ctx.nzTitle);
        ɵɵadvance(2);
        ɵɵconditional(ctx.isMenuInsideDropDown ? 3 : 4);
      }
    },
    dependencies: [NzIconModule, NzIconDirective, NzOutletModule, NzStringTemplateOutletDirective],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSubMenuTitleComponent, [{
    type: Component,
    args: [{
      selector: "[nz-submenu-title]",
      exportAs: "nzSubmenuTitle",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    @if (nzIcon) {
      <nz-icon [nzType]="nzIcon" />
    }
    <ng-container *nzStringTemplateOutlet="nzTitle">
      <span class="ant-menu-title-content">{{ nzTitle }}</span>
    </ng-container>
    <ng-content />
    @if (isMenuInsideDropDown) {
      <span class="ant-dropdown-menu-submenu-expand-icon">
        @switch (dir) {
          @case ('rtl') {
            <nz-icon nzType="left" class="ant-dropdown-menu-submenu-arrow-icon" />
          }
          @default {
            <nz-icon nzType="right" class="ant-dropdown-menu-submenu-arrow-icon" />
          }
        }
      </span>
    } @else {
      <span class="ant-menu-submenu-arrow"></span>
    }
  `,
      host: {
        "[class.ant-dropdown-menu-submenu-title]": "isMenuInsideDropDown",
        "[class.ant-menu-submenu-title]": "!isMenuInsideDropDown",
        "[style.paddingLeft.px]": `dir === 'rtl' ? null : paddingLeft `,
        "[style.paddingRight.px]": `dir === 'rtl' ? paddingLeft : null`,
        "(click)": "clickTitle()",
        "(mouseenter)": "setMouseState(true)",
        "(mouseleave)": "setMouseState(false)"
      },
      imports: [NzIconModule, NzOutletModule]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: Directionality
  }], {
    nzIcon: [{
      type: Input
    }],
    nzTitle: [{
      type: Input
    }],
    isMenuInsideDropDown: [{
      type: Input
    }],
    nzDisabled: [{
      type: Input
    }],
    paddingLeft: [{
      type: Input
    }],
    mode: [{
      type: Input
    }],
    nzTriggerSubMenuAction: [{
      type: Input
    }],
    toggleSubMenu: [{
      type: Output
    }],
    subMenuMouseState: [{
      type: Output
    }]
  });
})();
var listOfVerticalPositions = [POSITION_MAP.rightTop, POSITION_MAP.right, POSITION_MAP.rightBottom, POSITION_MAP.leftTop, POSITION_MAP.left, POSITION_MAP.leftBottom];
var listOfHorizontalPositions = [POSITION_MAP.bottomLeft, POSITION_MAP.bottomRight, POSITION_MAP.topRight, POSITION_MAP.topLeft];
var NzSubMenuComponent = class _NzSubMenuComponent {
  nzMenuService;
  cdr;
  platform;
  nzMenuClassName = "";
  nzPaddingLeft = null;
  nzTitle = null;
  nzIcon = null;
  nzTriggerSubMenuAction = "hover";
  nzOpen = false;
  nzDisabled = false;
  nzPlacement = "bottomLeft";
  nzOpenChange = new EventEmitter();
  cdkOverlayOrigin = null;
  // fix errors about circular dependency
  // Can't construct a query for the property ... since the query selector wasn't defined"
  listOfNzSubMenuComponent = null;
  listOfNzMenuItemDirective = null;
  nzSubmenuService = inject(NzSubmenuService);
  level = this.nzSubmenuService.level;
  destroy$ = new Subject();
  position = "right";
  triggerWidth = null;
  theme = "light";
  mode = "vertical";
  inlinePaddingLeft = null;
  overlayPositions = listOfVerticalPositions;
  isSelected = false;
  isActive = false;
  dir = "ltr";
  isMenuInsideDropDown = inject(NzIsMenuInsideDropDownToken);
  noAnimation = inject(NzNoAnimationDirective, {
    optional: true,
    host: true
  });
  directionality = inject(Directionality);
  /** set the submenu host open status directly **/
  setOpenStateWithoutDebounce(open) {
    this.nzSubmenuService.setOpenStateWithoutDebounce(open);
  }
  toggleSubMenu() {
    this.setOpenStateWithoutDebounce(!this.nzOpen);
  }
  setMouseEnterState(value) {
    this.isActive = value;
    if (this.mode !== "inline") {
      this.nzSubmenuService.setMouseEnterTitleOrOverlayState(value);
    }
  }
  setTriggerWidth() {
    if (this.mode === "horizontal" && this.platform.isBrowser && this.cdkOverlayOrigin && this.nzPlacement === "bottomLeft") {
      this.triggerWidth = this.cdkOverlayOrigin.nativeElement.getBoundingClientRect().width;
    }
  }
  onPositionChange(position) {
    const placement = getPlacementName(position);
    if (placement === "rightTop" || placement === "rightBottom" || placement === "right") {
      this.position = "right";
    } else if (placement === "leftTop" || placement === "leftBottom" || placement === "left") {
      this.position = "left";
    }
  }
  constructor(nzMenuService, cdr, platform) {
    this.nzMenuService = nzMenuService;
    this.cdr = cdr;
    this.platform = platform;
  }
  ngOnInit() {
    this.nzMenuService.theme$.pipe(takeUntil(this.destroy$)).subscribe((theme) => {
      this.theme = theme;
      this.cdr.markForCheck();
    });
    this.nzSubmenuService.mode$.pipe(takeUntil(this.destroy$)).subscribe((mode) => {
      this.mode = mode;
      if (mode === "horizontal") {
        this.overlayPositions = [POSITION_MAP[this.nzPlacement], ...listOfHorizontalPositions];
      } else if (mode === "vertical") {
        this.overlayPositions = listOfVerticalPositions;
      }
      this.cdr.markForCheck();
    });
    combineLatest([this.nzSubmenuService.mode$, this.nzMenuService.inlineIndent$]).pipe(takeUntil(this.destroy$)).subscribe(([mode, inlineIndent]) => {
      this.inlinePaddingLeft = mode === "inline" ? this.level * inlineIndent : null;
      this.cdr.markForCheck();
    });
    this.nzSubmenuService.isCurrentSubMenuOpen$.pipe(takeUntil(this.destroy$)).subscribe((open) => {
      this.isActive = open;
      if (open !== this.nzOpen) {
        this.setTriggerWidth();
        this.nzOpen = open;
        this.nzOpenChange.emit(this.nzOpen);
        this.cdr.markForCheck();
      }
    });
    this.dir = this.directionality.value;
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.markForCheck();
    });
  }
  ngAfterContentInit() {
    this.setTriggerWidth();
    const listOfNzMenuItemDirective = this.listOfNzMenuItemDirective;
    const changes = listOfNzMenuItemDirective.changes;
    const mergedObservable = merge(...[changes, ...listOfNzMenuItemDirective.map((menu) => menu.selected$)]);
    changes.pipe(startWith(listOfNzMenuItemDirective), switchMap(() => mergedObservable), startWith(true), map(() => listOfNzMenuItemDirective.some((e) => e.nzSelected)), takeUntil(this.destroy$)).subscribe((selected) => {
      this.isSelected = selected;
      this.cdr.markForCheck();
    });
  }
  ngOnChanges(changes) {
    const {
      nzOpen
    } = changes;
    if (nzOpen) {
      this.nzSubmenuService.setOpenStateWithoutDebounce(this.nzOpen);
      this.setTriggerWidth();
    }
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  static ɵfac = function NzSubMenuComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzSubMenuComponent)(ɵɵdirectiveInject(MenuService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Platform));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NzSubMenuComponent,
    selectors: [["", "nz-submenu", ""]],
    contentQueries: function NzSubMenuComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, _NzSubMenuComponent, 5);
        ɵɵcontentQuery(dirIndex, NzMenuItemComponent, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listOfNzSubMenuComponent = _t);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listOfNzMenuItemDirective = _t);
      }
    },
    viewQuery: function NzSubMenuComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(CdkOverlayOrigin, 7, ElementRef);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.cdkOverlayOrigin = _t.first);
      }
    },
    hostVars: 34,
    hostBindings: function NzSubMenuComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("ant-dropdown-menu-submenu", ctx.isMenuInsideDropDown)("ant-dropdown-menu-submenu-disabled", ctx.isMenuInsideDropDown && ctx.nzDisabled)("ant-dropdown-menu-submenu-open", ctx.isMenuInsideDropDown && ctx.nzOpen)("ant-dropdown-menu-submenu-selected", ctx.isMenuInsideDropDown && ctx.isSelected)("ant-dropdown-menu-submenu-vertical", ctx.isMenuInsideDropDown && ctx.mode === "vertical")("ant-dropdown-menu-submenu-horizontal", ctx.isMenuInsideDropDown && ctx.mode === "horizontal")("ant-dropdown-menu-submenu-inline", ctx.isMenuInsideDropDown && ctx.mode === "inline")("ant-dropdown-menu-submenu-active", ctx.isMenuInsideDropDown && ctx.isActive)("ant-menu-submenu", !ctx.isMenuInsideDropDown)("ant-menu-submenu-disabled", !ctx.isMenuInsideDropDown && ctx.nzDisabled)("ant-menu-submenu-open", !ctx.isMenuInsideDropDown && ctx.nzOpen)("ant-menu-submenu-selected", !ctx.isMenuInsideDropDown && ctx.isSelected)("ant-menu-submenu-vertical", !ctx.isMenuInsideDropDown && ctx.mode === "vertical")("ant-menu-submenu-horizontal", !ctx.isMenuInsideDropDown && ctx.mode === "horizontal")("ant-menu-submenu-inline", !ctx.isMenuInsideDropDown && ctx.mode === "inline")("ant-menu-submenu-active", !ctx.isMenuInsideDropDown && ctx.isActive)("ant-menu-submenu-rtl", ctx.dir === "rtl");
      }
    },
    inputs: {
      nzMenuClassName: "nzMenuClassName",
      nzPaddingLeft: "nzPaddingLeft",
      nzTitle: "nzTitle",
      nzIcon: "nzIcon",
      nzTriggerSubMenuAction: "nzTriggerSubMenuAction",
      nzOpen: [2, "nzOpen", "nzOpen", booleanAttribute],
      nzDisabled: [2, "nzDisabled", "nzDisabled", booleanAttribute],
      nzPlacement: "nzPlacement"
    },
    outputs: {
      nzOpenChange: "nzOpenChange"
    },
    exportAs: ["nzSubmenu"],
    features: [ɵɵProvidersFeature([NzSubmenuService]), ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature],
    attrs: _c5,
    ngContentSelectors: _c7,
    decls: 7,
    vars: 9,
    consts: [["origin", "cdkOverlayOrigin"], ["subMenuTemplate", ""], ["nz-submenu-title", "", "cdkOverlayOrigin", "", 3, "subMenuMouseState", "toggleSubMenu", "nzIcon", "nzTitle", "mode", "nzDisabled", "isMenuInsideDropDown", "paddingLeft", "nzTriggerSubMenuAction"], ["nz-submenu-inline-child", "", 3, "mode", "nzOpen", "nzNoAnimation", "menuClass", "templateOutlet"], ["cdkConnectedOverlay", "", 3, "cdkConnectedOverlayPositions", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayWidth", "cdkConnectedOverlayOpen", "cdkConnectedOverlayTransformOriginOn"], ["cdkConnectedOverlay", "", 3, "positionChange", "overlayOutsideClick", "cdkConnectedOverlayPositions", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayWidth", "cdkConnectedOverlayOpen", "cdkConnectedOverlayTransformOriginOn"], ["nz-submenu-none-inline-child", "", 3, "subMenuMouseState", "theme", "mode", "nzOpen", "position", "nzDisabled", "isMenuInsideDropDown", "nzTriggerSubMenuAction", "templateOutlet", "menuClass", "nzNoAnimation"]],
    template: function NzSubMenuComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵprojectionDef(_c6);
        ɵɵelementStart(0, "div", 2, 0);
        ɵɵlistener("subMenuMouseState", function NzSubMenuComponent_Template_div_subMenuMouseState_0_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.setMouseEnterState($event));
        })("toggleSubMenu", function NzSubMenuComponent_Template_div_toggleSubMenu_0_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.toggleSubMenu());
        });
        ɵɵtemplate(2, NzSubMenuComponent_Conditional_2_Template, 1, 0);
        ɵɵelementEnd();
        ɵɵtemplate(3, NzSubMenuComponent_Conditional_3_Template, 1, 6, "div", 3)(4, NzSubMenuComponent_Conditional_4_Template, 1, 5, null, 4)(5, NzSubMenuComponent_ng_template_5_Template, 1, 0, "ng-template", null, 1, ɵɵtemplateRefExtractor);
      }
      if (rf & 2) {
        ɵɵproperty("nzIcon", ctx.nzIcon)("nzTitle", ctx.nzTitle)("mode", ctx.mode)("nzDisabled", ctx.nzDisabled)("isMenuInsideDropDown", ctx.isMenuInsideDropDown)("paddingLeft", ctx.nzPaddingLeft || ctx.inlinePaddingLeft)("nzTriggerSubMenuAction", ctx.nzTriggerSubMenuAction);
        ɵɵadvance(2);
        ɵɵconditional(!ctx.nzTitle ? 2 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.mode === "inline" ? 3 : 4);
      }
    },
    dependencies: [NzSubMenuTitleComponent, NzSubmenuInlineChildComponent, NzNoAnimationDirective, NzSubmenuNoneInlineChildComponent, OverlayModule, CdkConnectedOverlay, CdkOverlayOrigin],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSubMenuComponent, [{
    type: Component,
    args: [{
      selector: "[nz-submenu]",
      exportAs: "nzSubmenu",
      providers: [NzSubmenuService],
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      preserveWhitespaces: false,
      template: `
    <div
      nz-submenu-title
      cdkOverlayOrigin
      #origin="cdkOverlayOrigin"
      [nzIcon]="nzIcon"
      [nzTitle]="nzTitle"
      [mode]="mode"
      [nzDisabled]="nzDisabled"
      [isMenuInsideDropDown]="isMenuInsideDropDown"
      [paddingLeft]="nzPaddingLeft || inlinePaddingLeft"
      [nzTriggerSubMenuAction]="nzTriggerSubMenuAction"
      (subMenuMouseState)="setMouseEnterState($event)"
      (toggleSubMenu)="toggleSubMenu()"
    >
      @if (!nzTitle) {
        <ng-content select="[title]" />
      }
    </div>
    @if (mode === 'inline') {
      <div
        nz-submenu-inline-child
        [mode]="mode"
        [nzOpen]="nzOpen"
        [@.disabled]="!!noAnimation?.nzNoAnimation"
        [nzNoAnimation]="noAnimation?.nzNoAnimation"
        [menuClass]="nzMenuClassName"
        [templateOutlet]="subMenuTemplate"
      ></div>
    } @else {
      <ng-template
        cdkConnectedOverlay
        (positionChange)="onPositionChange($event)"
        [cdkConnectedOverlayPositions]="overlayPositions"
        [cdkConnectedOverlayOrigin]="origin"
        [cdkConnectedOverlayWidth]="triggerWidth!"
        [cdkConnectedOverlayOpen]="nzOpen"
        [cdkConnectedOverlayTransformOriginOn]="'.ant-menu-submenu'"
        (overlayOutsideClick)="setMouseEnterState(false)"
      >
        <div
          nz-submenu-none-inline-child
          [theme]="theme"
          [mode]="mode"
          [nzOpen]="nzOpen"
          [position]="position"
          [nzDisabled]="nzDisabled"
          [isMenuInsideDropDown]="isMenuInsideDropDown"
          [nzTriggerSubMenuAction]="nzTriggerSubMenuAction"
          [templateOutlet]="subMenuTemplate"
          [menuClass]="nzMenuClassName"
          [@.disabled]="!!noAnimation?.nzNoAnimation"
          [nzNoAnimation]="noAnimation?.nzNoAnimation"
          (subMenuMouseState)="setMouseEnterState($event)"
        ></div>
      </ng-template>
    }

    <ng-template #subMenuTemplate>
      <ng-content />
    </ng-template>
  `,
      host: {
        "[class.ant-dropdown-menu-submenu]": `isMenuInsideDropDown`,
        "[class.ant-dropdown-menu-submenu-disabled]": `isMenuInsideDropDown && nzDisabled`,
        "[class.ant-dropdown-menu-submenu-open]": `isMenuInsideDropDown && nzOpen`,
        "[class.ant-dropdown-menu-submenu-selected]": `isMenuInsideDropDown && isSelected`,
        "[class.ant-dropdown-menu-submenu-vertical]": `isMenuInsideDropDown && mode === 'vertical'`,
        "[class.ant-dropdown-menu-submenu-horizontal]": `isMenuInsideDropDown && mode === 'horizontal'`,
        "[class.ant-dropdown-menu-submenu-inline]": `isMenuInsideDropDown && mode === 'inline'`,
        "[class.ant-dropdown-menu-submenu-active]": `isMenuInsideDropDown && isActive`,
        "[class.ant-menu-submenu]": `!isMenuInsideDropDown`,
        "[class.ant-menu-submenu-disabled]": `!isMenuInsideDropDown && nzDisabled`,
        "[class.ant-menu-submenu-open]": `!isMenuInsideDropDown && nzOpen`,
        "[class.ant-menu-submenu-selected]": `!isMenuInsideDropDown && isSelected`,
        "[class.ant-menu-submenu-vertical]": `!isMenuInsideDropDown && mode === 'vertical'`,
        "[class.ant-menu-submenu-horizontal]": `!isMenuInsideDropDown && mode === 'horizontal'`,
        "[class.ant-menu-submenu-inline]": `!isMenuInsideDropDown && mode === 'inline'`,
        "[class.ant-menu-submenu-active]": `!isMenuInsideDropDown && isActive`,
        "[class.ant-menu-submenu-rtl]": `dir === 'rtl'`
      },
      imports: [NzSubMenuTitleComponent, NzSubmenuInlineChildComponent, NzNoAnimationDirective, NzSubmenuNoneInlineChildComponent, OverlayModule]
    }]
  }], () => [{
    type: MenuService
  }, {
    type: ChangeDetectorRef
  }, {
    type: Platform
  }], {
    nzMenuClassName: [{
      type: Input
    }],
    nzPaddingLeft: [{
      type: Input
    }],
    nzTitle: [{
      type: Input
    }],
    nzIcon: [{
      type: Input
    }],
    nzTriggerSubMenuAction: [{
      type: Input
    }],
    nzOpen: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzPlacement: [{
      type: Input
    }],
    nzOpenChange: [{
      type: Output
    }],
    cdkOverlayOrigin: [{
      type: ViewChild,
      args: [CdkOverlayOrigin, {
        static: true,
        read: ElementRef
      }]
    }],
    listOfNzSubMenuComponent: [{
      type: ContentChildren,
      args: [forwardRef(() => NzSubMenuComponent), {
        descendants: true
      }]
    }],
    listOfNzMenuItemDirective: [{
      type: ContentChildren,
      args: [NzMenuItemComponent, {
        descendants: true
      }]
    }]
  });
})();
function MenuServiceFactory() {
  const serviceInsideDropDown = inject(MenuService, {
    skipSelf: true,
    optional: true
  });
  const serviceOutsideDropDown = inject(NzMenuServiceLocalToken);
  return serviceInsideDropDown ?? serviceOutsideDropDown;
}
function MenuDropDownTokenFactory() {
  const isMenuInsideDropDownToken = inject(NzIsMenuInsideDropDownToken, {
    skipSelf: true,
    optional: true
  });
  return isMenuInsideDropDownToken ?? false;
}
var NzMenuDirective = class _NzMenuDirective {
  nzMenuService;
  cdr;
  listOfNzMenuItemDirective;
  isMenuInsideDropDown = inject(NzIsMenuInsideDropDownToken);
  listOfNzSubMenuComponent;
  nzInlineIndent = 24;
  nzTheme = "light";
  nzMode = "vertical";
  nzInlineCollapsed = false;
  nzSelectable = !this.isMenuInsideDropDown;
  nzClick = new EventEmitter();
  actualMode = "vertical";
  dir = "ltr";
  inlineCollapsed$ = new BehaviorSubject(this.nzInlineCollapsed);
  mode$ = new BehaviorSubject(this.nzMode);
  destroy$ = new Subject();
  listOfOpenedNzSubMenuComponent = [];
  directionality = inject(Directionality);
  setInlineCollapsed(inlineCollapsed) {
    this.nzInlineCollapsed = inlineCollapsed;
    this.inlineCollapsed$.next(inlineCollapsed);
  }
  updateInlineCollapse() {
    if (this.listOfNzMenuItemDirective) {
      if (this.nzInlineCollapsed) {
        this.listOfOpenedNzSubMenuComponent = this.listOfNzSubMenuComponent.filter((submenu) => submenu.nzOpen);
        this.listOfNzSubMenuComponent.forEach((submenu) => submenu.setOpenStateWithoutDebounce(false));
      } else {
        this.listOfOpenedNzSubMenuComponent.forEach((submenu) => submenu.setOpenStateWithoutDebounce(true));
        this.listOfOpenedNzSubMenuComponent = [];
      }
    }
  }
  constructor(nzMenuService, cdr) {
    this.nzMenuService = nzMenuService;
    this.cdr = cdr;
  }
  ngOnInit() {
    combineLatest([this.inlineCollapsed$, this.mode$]).pipe(takeUntil(this.destroy$)).subscribe(([inlineCollapsed, mode]) => {
      this.actualMode = inlineCollapsed ? "vertical" : mode;
      this.nzMenuService.setMode(this.actualMode);
      this.cdr.markForCheck();
    });
    this.nzMenuService.descendantMenuItemClick$.pipe(takeUntil(this.destroy$)).subscribe((menu) => {
      this.nzClick.emit(menu);
      if (this.nzSelectable && !menu.nzMatchRouter) {
        this.listOfNzMenuItemDirective.forEach((item) => item.setSelectedState(item === menu));
      }
    });
    this.dir = this.directionality.value;
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.nzMenuService.setMode(this.actualMode);
      this.cdr.markForCheck();
    });
  }
  ngAfterContentInit() {
    this.inlineCollapsed$.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.updateInlineCollapse();
      this.cdr.markForCheck();
    });
  }
  ngOnChanges(changes) {
    const {
      nzInlineCollapsed,
      nzInlineIndent,
      nzTheme,
      nzMode
    } = changes;
    if (nzInlineCollapsed) {
      this.inlineCollapsed$.next(this.nzInlineCollapsed);
    }
    if (nzInlineIndent) {
      this.nzMenuService.setInlineIndent(this.nzInlineIndent);
    }
    if (nzTheme) {
      this.nzMenuService.setTheme(this.nzTheme);
    }
    if (nzMode) {
      this.mode$.next(this.nzMode);
      if (!changes.nzMode.isFirstChange() && this.listOfNzSubMenuComponent) {
        this.listOfNzSubMenuComponent.forEach((submenu) => submenu.setOpenStateWithoutDebounce(false));
      }
    }
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  static ɵfac = function NzMenuDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzMenuDirective)(ɵɵdirectiveInject(MenuService), ɵɵdirectiveInject(ChangeDetectorRef));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _NzMenuDirective,
    selectors: [["", "nz-menu", ""]],
    contentQueries: function NzMenuDirective_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, NzMenuItemComponent, 5);
        ɵɵcontentQuery(dirIndex, NzSubMenuComponent, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listOfNzMenuItemDirective = _t);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listOfNzSubMenuComponent = _t);
      }
    },
    hostVars: 34,
    hostBindings: function NzMenuDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("ant-dropdown-menu", ctx.isMenuInsideDropDown)("ant-dropdown-menu-root", ctx.isMenuInsideDropDown)("ant-dropdown-menu-light", ctx.isMenuInsideDropDown && ctx.nzTheme === "light")("ant-dropdown-menu-dark", ctx.isMenuInsideDropDown && ctx.nzTheme === "dark")("ant-dropdown-menu-vertical", ctx.isMenuInsideDropDown && ctx.actualMode === "vertical")("ant-dropdown-menu-horizontal", ctx.isMenuInsideDropDown && ctx.actualMode === "horizontal")("ant-dropdown-menu-inline", ctx.isMenuInsideDropDown && ctx.actualMode === "inline")("ant-dropdown-menu-inline-collapsed", ctx.isMenuInsideDropDown && ctx.nzInlineCollapsed)("ant-menu", !ctx.isMenuInsideDropDown)("ant-menu-root", !ctx.isMenuInsideDropDown)("ant-menu-light", !ctx.isMenuInsideDropDown && ctx.nzTheme === "light")("ant-menu-dark", !ctx.isMenuInsideDropDown && ctx.nzTheme === "dark")("ant-menu-vertical", !ctx.isMenuInsideDropDown && ctx.actualMode === "vertical")("ant-menu-horizontal", !ctx.isMenuInsideDropDown && ctx.actualMode === "horizontal")("ant-menu-inline", !ctx.isMenuInsideDropDown && ctx.actualMode === "inline")("ant-menu-inline-collapsed", !ctx.isMenuInsideDropDown && ctx.nzInlineCollapsed)("ant-menu-rtl", ctx.dir === "rtl");
      }
    },
    inputs: {
      nzInlineIndent: "nzInlineIndent",
      nzTheme: "nzTheme",
      nzMode: "nzMode",
      nzInlineCollapsed: [2, "nzInlineCollapsed", "nzInlineCollapsed", booleanAttribute],
      nzSelectable: [2, "nzSelectable", "nzSelectable", booleanAttribute]
    },
    outputs: {
      nzClick: "nzClick"
    },
    exportAs: ["nzMenu"],
    features: [ɵɵProvidersFeature([
      {
        provide: NzMenuServiceLocalToken,
        useClass: MenuService
      },
      /** use the top level service **/
      {
        provide: MenuService,
        useFactory: MenuServiceFactory
      },
      /** check if menu inside dropdown-menu component **/
      {
        provide: NzIsMenuInsideDropDownToken,
        useFactory: MenuDropDownTokenFactory
      }
    ]), ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzMenuDirective, [{
    type: Directive,
    args: [{
      selector: "[nz-menu]",
      exportAs: "nzMenu",
      providers: [
        {
          provide: NzMenuServiceLocalToken,
          useClass: MenuService
        },
        /** use the top level service **/
        {
          provide: MenuService,
          useFactory: MenuServiceFactory
        },
        /** check if menu inside dropdown-menu component **/
        {
          provide: NzIsMenuInsideDropDownToken,
          useFactory: MenuDropDownTokenFactory
        }
      ],
      host: {
        "[class.ant-dropdown-menu]": `isMenuInsideDropDown`,
        "[class.ant-dropdown-menu-root]": `isMenuInsideDropDown`,
        "[class.ant-dropdown-menu-light]": `isMenuInsideDropDown && nzTheme === 'light'`,
        "[class.ant-dropdown-menu-dark]": `isMenuInsideDropDown && nzTheme === 'dark'`,
        "[class.ant-dropdown-menu-vertical]": `isMenuInsideDropDown && actualMode === 'vertical'`,
        "[class.ant-dropdown-menu-horizontal]": `isMenuInsideDropDown && actualMode === 'horizontal'`,
        "[class.ant-dropdown-menu-inline]": `isMenuInsideDropDown && actualMode === 'inline'`,
        "[class.ant-dropdown-menu-inline-collapsed]": `isMenuInsideDropDown && nzInlineCollapsed`,
        "[class.ant-menu]": `!isMenuInsideDropDown`,
        "[class.ant-menu-root]": `!isMenuInsideDropDown`,
        "[class.ant-menu-light]": `!isMenuInsideDropDown && nzTheme === 'light'`,
        "[class.ant-menu-dark]": `!isMenuInsideDropDown && nzTheme === 'dark'`,
        "[class.ant-menu-vertical]": `!isMenuInsideDropDown && actualMode === 'vertical'`,
        "[class.ant-menu-horizontal]": `!isMenuInsideDropDown && actualMode === 'horizontal'`,
        "[class.ant-menu-inline]": `!isMenuInsideDropDown && actualMode === 'inline'`,
        "[class.ant-menu-inline-collapsed]": `!isMenuInsideDropDown && nzInlineCollapsed`,
        "[class.ant-menu-rtl]": `dir === 'rtl'`
      }
    }]
  }], () => [{
    type: MenuService
  }, {
    type: ChangeDetectorRef
  }], {
    listOfNzMenuItemDirective: [{
      type: ContentChildren,
      args: [NzMenuItemComponent, {
        descendants: true
      }]
    }],
    listOfNzSubMenuComponent: [{
      type: ContentChildren,
      args: [NzSubMenuComponent, {
        descendants: true
      }]
    }],
    nzInlineIndent: [{
      type: Input
    }],
    nzTheme: [{
      type: Input
    }],
    nzMode: [{
      type: Input
    }],
    nzInlineCollapsed: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzSelectable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzClick: [{
      type: Output
    }]
  });
})();
function MenuGroupFactory() {
  const isMenuInsideDropDownToken = inject(NzIsMenuInsideDropDownToken, {
    optional: true,
    skipSelf: true
  });
  return isMenuInsideDropDownToken ?? false;
}
var NzMenuGroupComponent = class _NzMenuGroupComponent {
  elementRef;
  renderer;
  nzTitle;
  titleElement;
  isMenuInsideDropDown = inject(NzIsMenuInsideDropDownToken);
  constructor(elementRef, renderer) {
    this.elementRef = elementRef;
    this.renderer = renderer;
    const className = this.isMenuInsideDropDown ? "ant-dropdown-menu-item-group" : "ant-menu-item-group";
    this.renderer.addClass(elementRef.nativeElement, className);
  }
  ngAfterViewInit() {
    const ulElement = this.titleElement.nativeElement.nextElementSibling;
    if (ulElement) {
      const className = this.isMenuInsideDropDown ? "ant-dropdown-menu-item-group-list" : "ant-menu-item-group-list";
      this.renderer.addClass(ulElement, className);
    }
  }
  static ɵfac = function NzMenuGroupComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzMenuGroupComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NzMenuGroupComponent,
    selectors: [["", "nz-menu-group", ""]],
    viewQuery: function NzMenuGroupComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c8, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.titleElement = _t.first);
      }
    },
    inputs: {
      nzTitle: "nzTitle"
    },
    exportAs: ["nzMenuGroup"],
    features: [ɵɵProvidersFeature([
      /** check if menu inside dropdown-menu component **/
      {
        provide: NzIsMenuInsideDropDownToken,
        useFactory: MenuGroupFactory
      }
    ])],
    attrs: _c9,
    ngContentSelectors: _c11,
    decls: 5,
    vars: 6,
    consts: [["titleElement", ""], [4, "nzStringTemplateOutlet"]],
    template: function NzMenuGroupComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef(_c10);
        ɵɵelementStart(0, "div", null, 0);
        ɵɵtemplate(2, NzMenuGroupComponent_ng_container_2_Template, 2, 1, "ng-container", 1)(3, NzMenuGroupComponent_Conditional_3_Template, 1, 0);
        ɵɵelementEnd();
        ɵɵprojection(4);
      }
      if (rf & 2) {
        ɵɵclassProp("ant-menu-item-group-title", !ctx.isMenuInsideDropDown)("ant-dropdown-menu-item-group-title", ctx.isMenuInsideDropDown);
        ɵɵadvance(2);
        ɵɵproperty("nzStringTemplateOutlet", ctx.nzTitle);
        ɵɵadvance();
        ɵɵconditional(!ctx.nzTitle ? 3 : -1);
      }
    },
    dependencies: [NzOutletModule, NzStringTemplateOutletDirective],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzMenuGroupComponent, [{
    type: Component,
    args: [{
      selector: "[nz-menu-group]",
      exportAs: "nzMenuGroup",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [
        /** check if menu inside dropdown-menu component **/
        {
          provide: NzIsMenuInsideDropDownToken,
          useFactory: MenuGroupFactory
        }
      ],
      encapsulation: ViewEncapsulation.None,
      template: `
    <div
      [class.ant-menu-item-group-title]="!isMenuInsideDropDown"
      [class.ant-dropdown-menu-item-group-title]="isMenuInsideDropDown"
      #titleElement
    >
      <ng-container *nzStringTemplateOutlet="nzTitle">{{ nzTitle }}</ng-container>
      @if (!nzTitle) {
        <ng-content select="[title]" />
      }
    </div>
    <ng-content></ng-content>
  `,
      preserveWhitespaces: false,
      imports: [NzOutletModule]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }], {
    nzTitle: [{
      type: Input
    }],
    titleElement: [{
      type: ViewChild,
      args: ["titleElement"]
    }]
  });
})();
var NzMenuDividerDirective = class _NzMenuDividerDirective {
  elementRef;
  constructor(elementRef) {
    this.elementRef = elementRef;
  }
  static ɵfac = function NzMenuDividerDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzMenuDividerDirective)(ɵɵdirectiveInject(ElementRef));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _NzMenuDividerDirective,
    selectors: [["", "nz-menu-divider", ""]],
    hostAttrs: [1, "ant-dropdown-menu-item-divider"],
    exportAs: ["nzMenuDivider"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzMenuDividerDirective, [{
    type: Directive,
    args: [{
      selector: "[nz-menu-divider]",
      exportAs: "nzMenuDivider",
      host: {
        class: "ant-dropdown-menu-item-divider"
      }
    }]
  }], () => [{
    type: ElementRef
  }], null);
})();
var NzMenuModule = class _NzMenuModule {
  static ɵfac = function NzMenuModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzMenuModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _NzMenuModule,
    imports: [NzMenuDirective, NzMenuItemComponent, NzSubMenuComponent, NzMenuDividerDirective, NzMenuGroupComponent, NzSubMenuTitleComponent, NzSubmenuInlineChildComponent, NzSubmenuNoneInlineChildComponent],
    exports: [NzMenuDirective, NzMenuItemComponent, NzSubMenuComponent, NzMenuDividerDirective, NzMenuGroupComponent]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [NzSubMenuComponent, NzMenuGroupComponent, NzSubMenuTitleComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzMenuModule, [{
    type: NgModule,
    args: [{
      imports: [NzMenuDirective, NzMenuItemComponent, NzSubMenuComponent, NzMenuDividerDirective, NzMenuGroupComponent, NzSubMenuTitleComponent, NzSubmenuInlineChildComponent, NzSubmenuNoneInlineChildComponent],
      exports: [NzMenuDirective, NzMenuItemComponent, NzSubMenuComponent, NzMenuDividerDirective, NzMenuGroupComponent]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-layout.mjs
var _c02 = ["*"];
var _c12 = ["nz-sider-trigger", ""];
function NzSiderTriggerComponent_Conditional_0_ng_template_0_Template(rf, ctx) {
}
function NzSiderTriggerComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzSiderTriggerComponent_Conditional_0_ng_template_0_Template, 0, 0, "ng-template", 2);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    const defaultZeroTrigger_r2 = ɵɵreference(5);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.nzZeroTrigger || defaultZeroTrigger_r2);
  }
}
function NzSiderTriggerComponent_Conditional_1_ng_template_0_Template(rf, ctx) {
}
function NzSiderTriggerComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzSiderTriggerComponent_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 2);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    const defaultTrigger_r3 = ɵɵreference(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.nzTrigger || defaultTrigger_r3);
  }
}
function NzSiderTriggerComponent_ng_template_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-icon", 3);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("nzType", ctx_r0.nzCollapsed ? "left" : "right");
  }
}
function NzSiderTriggerComponent_ng_template_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-icon", 3);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("nzType", ctx_r0.nzCollapsed ? "right" : "left");
  }
}
function NzSiderTriggerComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzSiderTriggerComponent_ng_template_2_Conditional_0_Template, 1, 1, "nz-icon", 3)(1, NzSiderTriggerComponent_ng_template_2_Conditional_1_Template, 1, 1, "nz-icon", 3);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵconditional(ctx_r0.nzReverseArrow ? 0 : 1);
  }
}
function NzSiderTriggerComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-icon", 4);
  }
}
function NzSiderComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 2);
    ɵɵlistener("click", function NzSiderComponent_Conditional_2_Template_div_click_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.setCollapsed(!ctx_r1.nzCollapsed));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("matchBreakPoint", ctx_r1.matchBreakPoint)("nzCollapsedWidth", ctx_r1.nzCollapsedWidth)("nzCollapsed", ctx_r1.nzCollapsed)("nzBreakpoint", ctx_r1.nzBreakpoint)("nzReverseArrow", ctx_r1.nzReverseArrow)("nzTrigger", ctx_r1.nzTrigger)("nzZeroTrigger", ctx_r1.nzZeroTrigger)("siderWidth", ctx_r1.widthSetting);
  }
}
var NzContentComponent = class _NzContentComponent {
  elementRef;
  renderer;
  constructor(elementRef, renderer) {
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.renderer.addClass(this.elementRef.nativeElement, "ant-layout-content");
  }
  static ɵfac = function NzContentComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzContentComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NzContentComponent,
    selectors: [["nz-content"]],
    exportAs: ["nzContent"],
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function NzContentComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzContentComponent, [{
    type: Component,
    args: [{
      selector: "nz-content",
      exportAs: "nzContent",
      template: `<ng-content></ng-content>`,
      preserveWhitespaces: false,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }], null);
})();
var NzFooterComponent = class _NzFooterComponent {
  elementRef;
  renderer;
  constructor(elementRef, renderer) {
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.renderer.addClass(this.elementRef.nativeElement, "ant-layout-footer");
  }
  static ɵfac = function NzFooterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzFooterComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NzFooterComponent,
    selectors: [["nz-footer"]],
    exportAs: ["nzFooter"],
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function NzFooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzFooterComponent, [{
    type: Component,
    args: [{
      selector: "nz-footer",
      exportAs: "nzFooter",
      template: `<ng-content></ng-content>`,
      preserveWhitespaces: false,
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }], null);
})();
var NzHeaderComponent = class _NzHeaderComponent {
  elementRef;
  renderer;
  constructor(elementRef, renderer) {
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.renderer.addClass(this.elementRef.nativeElement, "ant-layout-header");
  }
  static ɵfac = function NzHeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzHeaderComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NzHeaderComponent,
    selectors: [["nz-header"]],
    exportAs: ["nzHeader"],
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function NzHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzHeaderComponent, [{
    type: Component,
    args: [{
      selector: "nz-header",
      exportAs: "nzHeader",
      template: `<ng-content></ng-content>`,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      preserveWhitespaces: false
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }], null);
})();
var NzSiderTriggerComponent = class _NzSiderTriggerComponent {
  nzCollapsed = false;
  nzReverseArrow = false;
  nzZeroTrigger = null;
  nzTrigger = void 0;
  matchBreakPoint = false;
  nzCollapsedWidth = null;
  siderWidth = null;
  nzBreakpoint = null;
  isZeroTrigger = false;
  isNormalTrigger = false;
  updateTriggerType() {
    this.isZeroTrigger = this.nzCollapsedWidth === 0 && (this.nzBreakpoint && this.matchBreakPoint || !this.nzBreakpoint);
    this.isNormalTrigger = this.nzCollapsedWidth !== 0;
  }
  ngOnInit() {
    this.updateTriggerType();
  }
  ngOnChanges() {
    this.updateTriggerType();
  }
  static ɵfac = function NzSiderTriggerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzSiderTriggerComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NzSiderTriggerComponent,
    selectors: [["", "nz-sider-trigger", ""]],
    hostVars: 10,
    hostBindings: function NzSiderTriggerComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵstyleProp("width", ctx.isNormalTrigger ? ctx.siderWidth : null);
        ɵɵclassProp("ant-layout-sider-trigger", ctx.isNormalTrigger)("ant-layout-sider-zero-width-trigger", ctx.isZeroTrigger)("ant-layout-sider-zero-width-trigger-right", ctx.isZeroTrigger && ctx.nzReverseArrow)("ant-layout-sider-zero-width-trigger-left", ctx.isZeroTrigger && !ctx.nzReverseArrow);
      }
    },
    inputs: {
      nzCollapsed: "nzCollapsed",
      nzReverseArrow: "nzReverseArrow",
      nzZeroTrigger: "nzZeroTrigger",
      nzTrigger: "nzTrigger",
      matchBreakPoint: "matchBreakPoint",
      nzCollapsedWidth: "nzCollapsedWidth",
      siderWidth: "siderWidth",
      nzBreakpoint: "nzBreakpoint"
    },
    exportAs: ["nzSiderTrigger"],
    features: [ɵɵNgOnChangesFeature],
    attrs: _c12,
    decls: 6,
    vars: 2,
    consts: [["defaultTrigger", ""], ["defaultZeroTrigger", ""], [3, "ngTemplateOutlet"], [3, "nzType"], ["nzType", "bars"]],
    template: function NzSiderTriggerComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, NzSiderTriggerComponent_Conditional_0_Template, 1, 1, null, 2)(1, NzSiderTriggerComponent_Conditional_1_Template, 1, 1, null, 2)(2, NzSiderTriggerComponent_ng_template_2_Template, 2, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor)(4, NzSiderTriggerComponent_ng_template_4_Template, 1, 0, "ng-template", null, 1, ɵɵtemplateRefExtractor);
      }
      if (rf & 2) {
        ɵɵconditional(ctx.isZeroTrigger ? 0 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.isNormalTrigger ? 1 : -1);
      }
    },
    dependencies: [NgTemplateOutlet, NzIconModule, NzIconDirective],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSiderTriggerComponent, [{
    type: Component,
    args: [{
      selector: "[nz-sider-trigger]",
      exportAs: "nzSiderTrigger",
      preserveWhitespaces: false,
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    @if (isZeroTrigger) {
      <ng-template [ngTemplateOutlet]="nzZeroTrigger || defaultZeroTrigger" />
    }

    @if (isNormalTrigger) {
      <ng-template [ngTemplateOutlet]="nzTrigger || defaultTrigger" />
    }
    <ng-template #defaultTrigger>
      @if (nzReverseArrow) {
        <nz-icon [nzType]="nzCollapsed ? 'left' : 'right'" />
      } @else {
        <nz-icon [nzType]="nzCollapsed ? 'right' : 'left'" />
      }
    </ng-template>
    <ng-template #defaultZeroTrigger>
      <nz-icon nzType="bars" />
    </ng-template>
  `,
      host: {
        "[class.ant-layout-sider-trigger]": "isNormalTrigger",
        "[style.width]": "isNormalTrigger ? siderWidth : null",
        "[class.ant-layout-sider-zero-width-trigger]": "isZeroTrigger",
        "[class.ant-layout-sider-zero-width-trigger-right]": "isZeroTrigger && nzReverseArrow",
        "[class.ant-layout-sider-zero-width-trigger-left]": "isZeroTrigger && !nzReverseArrow"
      },
      imports: [NgTemplateOutlet, NzIconModule]
    }]
  }], null, {
    nzCollapsed: [{
      type: Input
    }],
    nzReverseArrow: [{
      type: Input
    }],
    nzZeroTrigger: [{
      type: Input
    }],
    nzTrigger: [{
      type: Input
    }],
    matchBreakPoint: [{
      type: Input
    }],
    nzCollapsedWidth: [{
      type: Input
    }],
    siderWidth: [{
      type: Input
    }],
    nzBreakpoint: [{
      type: Input
    }]
  });
})();
var NzSiderComponent = class _NzSiderComponent {
  platform;
  cdr;
  breakpointService;
  destroy$ = new Subject();
  nzMenuDirective = null;
  nzCollapsedChange = new EventEmitter();
  nzWidth = 200;
  nzTheme = "dark";
  nzCollapsedWidth = 80;
  nzBreakpoint = null;
  nzZeroTrigger = null;
  nzTrigger = void 0;
  nzReverseArrow = false;
  nzCollapsible = false;
  nzCollapsed = false;
  matchBreakPoint = false;
  flexSetting = null;
  widthSetting = null;
  updateStyleMap() {
    this.widthSetting = this.nzCollapsed ? `${this.nzCollapsedWidth}px` : toCssPixel(this.nzWidth);
    this.flexSetting = `0 0 ${this.widthSetting}`;
    this.cdr.markForCheck();
  }
  updateMenuInlineCollapsed() {
    if (this.nzMenuDirective && this.nzMenuDirective.nzMode === "inline" && this.nzCollapsedWidth !== 0) {
      this.nzMenuDirective.setInlineCollapsed(this.nzCollapsed);
    }
  }
  setCollapsed(collapsed) {
    if (collapsed !== this.nzCollapsed) {
      this.nzCollapsed = collapsed;
      this.nzCollapsedChange.emit(collapsed);
      this.updateMenuInlineCollapsed();
      this.updateStyleMap();
      this.cdr.markForCheck();
    }
  }
  constructor(platform, cdr, breakpointService) {
    this.platform = platform;
    this.cdr = cdr;
    this.breakpointService = breakpointService;
  }
  ngOnInit() {
    this.updateStyleMap();
    if (this.platform.isBrowser) {
      this.breakpointService.subscribe(siderResponsiveMap, true).pipe(takeUntil(this.destroy$)).subscribe((map2) => {
        const breakpoint = this.nzBreakpoint;
        if (breakpoint) {
          inNextTick().subscribe(() => {
            this.matchBreakPoint = !map2[breakpoint];
            this.setCollapsed(this.matchBreakPoint);
            this.cdr.markForCheck();
          });
        }
      });
    }
  }
  ngOnChanges(changes) {
    const {
      nzCollapsed,
      nzCollapsedWidth,
      nzWidth
    } = changes;
    if (nzCollapsed || nzCollapsedWidth || nzWidth) {
      this.updateStyleMap();
    }
    if (nzCollapsed) {
      this.updateMenuInlineCollapsed();
    }
  }
  ngAfterContentInit() {
    this.updateMenuInlineCollapsed();
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  static ɵfac = function NzSiderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzSiderComponent)(ɵɵdirectiveInject(Platform), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NzBreakpointService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NzSiderComponent,
    selectors: [["nz-sider"]],
    contentQueries: function NzSiderComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, NzMenuDirective, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nzMenuDirective = _t.first);
      }
    },
    hostAttrs: [1, "ant-layout-sider"],
    hostVars: 18,
    hostBindings: function NzSiderComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵstyleProp("flex", ctx.flexSetting)("max-width", ctx.widthSetting)("min-width", ctx.widthSetting)("width", ctx.widthSetting);
        ɵɵclassProp("ant-layout-sider-zero-width", ctx.nzCollapsed && ctx.nzCollapsedWidth === 0)("ant-layout-sider-light", ctx.nzTheme === "light")("ant-layout-sider-dark", ctx.nzTheme === "dark")("ant-layout-sider-collapsed", ctx.nzCollapsed)("ant-layout-sider-has-trigger", ctx.nzCollapsible && ctx.nzTrigger !== null);
      }
    },
    inputs: {
      nzWidth: "nzWidth",
      nzTheme: "nzTheme",
      nzCollapsedWidth: "nzCollapsedWidth",
      nzBreakpoint: "nzBreakpoint",
      nzZeroTrigger: "nzZeroTrigger",
      nzTrigger: "nzTrigger",
      nzReverseArrow: [2, "nzReverseArrow", "nzReverseArrow", booleanAttribute],
      nzCollapsible: [2, "nzCollapsible", "nzCollapsible", booleanAttribute],
      nzCollapsed: [2, "nzCollapsed", "nzCollapsed", booleanAttribute]
    },
    outputs: {
      nzCollapsedChange: "nzCollapsedChange"
    },
    exportAs: ["nzSider"],
    features: [ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature],
    ngContentSelectors: _c02,
    decls: 3,
    vars: 1,
    consts: [[1, "ant-layout-sider-children"], ["nz-sider-trigger", "", 3, "matchBreakPoint", "nzCollapsedWidth", "nzCollapsed", "nzBreakpoint", "nzReverseArrow", "nzTrigger", "nzZeroTrigger", "siderWidth"], ["nz-sider-trigger", "", 3, "click", "matchBreakPoint", "nzCollapsedWidth", "nzCollapsed", "nzBreakpoint", "nzReverseArrow", "nzTrigger", "nzZeroTrigger", "siderWidth"]],
    template: function NzSiderComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "div", 0);
        ɵɵprojection(1);
        ɵɵelementEnd();
        ɵɵtemplate(2, NzSiderComponent_Conditional_2_Template, 1, 8, "div", 1);
      }
      if (rf & 2) {
        ɵɵadvance(2);
        ɵɵconditional(ctx.nzCollapsible && ctx.nzTrigger !== null ? 2 : -1);
      }
    },
    dependencies: [NzSiderTriggerComponent],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSiderComponent, [{
    type: Component,
    args: [{
      selector: "nz-sider",
      exportAs: "nzSider",
      preserveWhitespaces: false,
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <div class="ant-layout-sider-children">
      <ng-content></ng-content>
    </div>
    @if (nzCollapsible && nzTrigger !== null) {
      <div
        nz-sider-trigger
        [matchBreakPoint]="matchBreakPoint"
        [nzCollapsedWidth]="nzCollapsedWidth"
        [nzCollapsed]="nzCollapsed"
        [nzBreakpoint]="nzBreakpoint"
        [nzReverseArrow]="nzReverseArrow"
        [nzTrigger]="nzTrigger"
        [nzZeroTrigger]="nzZeroTrigger"
        [siderWidth]="widthSetting"
        (click)="setCollapsed(!nzCollapsed)"
      ></div>
    }
  `,
      host: {
        class: "ant-layout-sider",
        "[class.ant-layout-sider-zero-width]": `nzCollapsed && nzCollapsedWidth === 0`,
        "[class.ant-layout-sider-light]": `nzTheme === 'light'`,
        "[class.ant-layout-sider-dark]": `nzTheme === 'dark'`,
        "[class.ant-layout-sider-collapsed]": `nzCollapsed`,
        "[class.ant-layout-sider-has-trigger]": `nzCollapsible && nzTrigger !== null`,
        "[style.flex]": "flexSetting",
        "[style.maxWidth]": "widthSetting",
        "[style.minWidth]": "widthSetting",
        "[style.width]": "widthSetting"
      },
      imports: [NzSiderTriggerComponent]
    }]
  }], () => [{
    type: Platform
  }, {
    type: ChangeDetectorRef
  }, {
    type: NzBreakpointService
  }], {
    nzMenuDirective: [{
      type: ContentChild,
      args: [NzMenuDirective]
    }],
    nzCollapsedChange: [{
      type: Output
    }],
    nzWidth: [{
      type: Input
    }],
    nzTheme: [{
      type: Input
    }],
    nzCollapsedWidth: [{
      type: Input
    }],
    nzBreakpoint: [{
      type: Input
    }],
    nzZeroTrigger: [{
      type: Input
    }],
    nzTrigger: [{
      type: Input
    }],
    nzReverseArrow: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzCollapsible: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzCollapsed: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var NzLayoutComponent = class _NzLayoutComponent {
  directionality;
  listOfNzSiderComponent;
  dir = "ltr";
  destroy$ = new Subject();
  constructor(directionality) {
    this.directionality = directionality;
  }
  ngOnInit() {
    this.dir = this.directionality.value;
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  static ɵfac = function NzLayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzLayoutComponent)(ɵɵdirectiveInject(Directionality));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NzLayoutComponent,
    selectors: [["nz-layout"]],
    contentQueries: function NzLayoutComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, NzSiderComponent, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listOfNzSiderComponent = _t);
      }
    },
    hostAttrs: [1, "ant-layout"],
    hostVars: 4,
    hostBindings: function NzLayoutComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("ant-layout-rtl", ctx.dir === "rtl")("ant-layout-has-sider", ctx.listOfNzSiderComponent.length > 0);
      }
    },
    exportAs: ["nzLayout"],
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function NzLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzLayoutComponent, [{
    type: Component,
    args: [{
      selector: "nz-layout",
      exportAs: "nzLayout",
      template: `<ng-content></ng-content>`,
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      preserveWhitespaces: false,
      host: {
        class: "ant-layout",
        "[class.ant-layout-rtl]": `dir === 'rtl'`,
        "[class.ant-layout-has-sider]": "listOfNzSiderComponent.length > 0"
      }
    }]
  }], () => [{
    type: Directionality
  }], {
    listOfNzSiderComponent: [{
      type: ContentChildren,
      args: [NzSiderComponent]
    }]
  });
})();
var NzLayoutModule = class _NzLayoutModule {
  static ɵfac = function NzLayoutModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzLayoutModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _NzLayoutModule,
    imports: [NzLayoutComponent, NzHeaderComponent, NzContentComponent, NzFooterComponent, NzSiderComponent, NzSiderTriggerComponent],
    exports: [NzLayoutComponent, NzHeaderComponent, NzContentComponent, NzFooterComponent, NzSiderComponent]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [NzSiderComponent, NzSiderTriggerComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzLayoutModule, [{
    type: NgModule,
    args: [{
      imports: [NzLayoutComponent, NzHeaderComponent, NzContentComponent, NzFooterComponent, NzSiderComponent, NzSiderTriggerComponent],
      exports: [NzLayoutComponent, NzHeaderComponent, NzContentComponent, NzFooterComponent, NzSiderComponent]
    }]
  }], null, null);
})();
export {
  NzContentComponent,
  NzFooterComponent,
  NzHeaderComponent,
  NzLayoutComponent,
  NzLayoutModule,
  NzSiderComponent,
  NzSiderTriggerComponent as ɵNzSiderTriggerComponent
};
//# sourceMappingURL=ng-zorro-antd_layout.js.map
