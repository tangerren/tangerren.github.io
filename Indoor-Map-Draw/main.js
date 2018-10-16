(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<panel></panel>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent(elementRef) {
        this.elementRef = elementRef;
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _draw_tool_draw_tool_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./draw-tool/draw-tool.component */ "./src/app/draw-tool/draw-tool.component.ts");
/* harmony import */ var _services_saveToDb_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/saveToDb.service */ "./src/app/services/saveToDb.service.ts");
/* harmony import */ var _floor_floor_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./floor/floor.component */ "./src/app/floor/floor.component.ts");
/* harmony import */ var _modal_dialog_modal_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modal-dialog/modal-dialog.component */ "./src/app/modal-dialog/modal-dialog.component.ts");
/* harmony import */ var _room_properties_room_properties_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./room-properties/room-properties.component */ "./src/app/room-properties/room-properties.component.ts");
/* harmony import */ var _panel_panel_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./panel/panel.component */ "./src/app/panel/panel.component.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/esm5/antd.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/locales/zh */ "./node_modules/@angular/common/locales/zh.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _project_modal_project_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./project-modal/project-modal.component */ "./src/app/project-modal/project-modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















Object(_angular_common__WEBPACK_IMPORTED_MODULE_14__["registerLocaleData"])(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_15___default.a);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _draw_tool_draw_tool_component__WEBPACK_IMPORTED_MODULE_4__["DrawToolComponent"],
                _floor_floor_component__WEBPACK_IMPORTED_MODULE_6__["FloorComponent"],
                _modal_dialog_modal_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ModalDialogComponent"],
                _room_properties_room_properties_component__WEBPACK_IMPORTED_MODULE_8__["RoomPropertiesComponent"],
                _panel_panel_component__WEBPACK_IMPORTED_MODULE_9__["PanelComponent"],
                _map_map_component__WEBPACK_IMPORTED_MODULE_10__["MapComponent"],
                _project_modal_project_modal_component__WEBPACK_IMPORTED_MODULE_16__["ProjectModalComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                /** 导入 ng-zorro-antd 模块 **/
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_13__["NgZorroAntdModule"]
            ],
            providers: [_services_saveToDb_service__WEBPACK_IMPORTED_MODULE_5__["SaveToDbService"], { provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_13__["NZ_I18N"], useValue: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_13__["zh_CN"] }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/draw-tool/draw-tool.component.css":
/*!***************************************************!*\
  !*** ./src/app/draw-tool/draw-tool.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".map-tools {\r\n\ttop: 20px;\r\n\tright: 20px;\r\n \tposition: absolute;\r\n\tz-index: 999;\r\n}"

/***/ }),

/***/ "./src/app/draw-tool/draw-tool.component.html":
/*!****************************************************!*\
  !*** ./src/app/draw-tool/draw-tool.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"map-tools\">\r\n\t<button class=\"btn btn-primary\" [disabled]=\"newMallDisable\" (click)=\"creat('mall')\">新建楼宇</button>\r\n\t<button class=\"btn btn-primary\" [disabled]=\"!newMallDisable\" (click)=\"edit($event)\">编辑</button>\r\n\t<!-- <button class=\"btn btn-primary\" [disabled]=\"!newMallDisable\" (click)=\"drawClipLine($event)\">分割</button> -->\r\n\t<button class=\"btn btn-primary\" [disabled]=\"!newMallDisable\" (click)=\"draw($event,'Polygon')\">画面</button>\r\n\t<button class=\"btn btn-primary\" [disabled]=\"!newMallDisable\" (click)=\"writeRoomProp($event)\">赋属性</button>\r\n\t<button class=\"btn btn-success\" [disabled]=\"!newMallDisable\" (click)=\"save()\">保存</button>\r\n\t<button class=\"btn btn-warning\" (click)=\"log()\">打印当前数据</button>\r\n\t<floor [floors]=\"floors\" (addFloor)=\"creat('floor')\"></floor>\r\n</div>\r\n<!-- Waring -->\r\n<modal-dialog *ngIf=\"warningModalVisible\">\r\n\t<ng-template #header>\r\n\t\t<strong>\r\n\t\t\t<span class=\"label label-danger\">提示</span>\r\n\t\t</strong>\r\n\t</ng-template>\r\n\t<ng-template #content>\r\n\t\t<div class=\"alert alert-danger\">\r\n\t\t\t{{errInfo}}\r\n\t\t</div>\r\n\t</ng-template>\r\n\t<ng-template #footer>\r\n\t\t<button class=\"btn btn-primary\" (click)=\"warningModalVisible=false\">好的</button>\r\n\t</ng-template>\r\n</modal-dialog>\r\n<!-- Mall & Floor -->\r\n<modal-dialog [title]=\"'楼宇信息'\" *ngIf=\"modalVisible\" (modalHidden)=\"modalHidden($event)\">\r\n\t<ng-template #content>\r\n\t\t<fieldset class=\"form-group\">\r\n\t\t\t<label for=\"formGroupExampleInput\">建筑物名称</label>\r\n\t\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"mall.name\" required placeholder=\"例如：光华大厦\">\r\n\t\t</fieldset>\r\n\t\t<fieldset class=\"form-group\">\r\n\t\t\t<label for=\"formGroupExampleInput2\">总层数</label>\r\n\t\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"mall.floors\" required placeholder=\"例如：1\">\r\n\t\t</fieldset>\r\n\t\t<fieldset class=\"form-group\">\r\n\t\t\t<label for=\"formGroupExampleInput2\">最低楼层数</label>\r\n\t\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"mall.startFloor\" required placeholder=\"例如：-2\">\r\n\t\t</fieldset>\r\n\t\t<label for=\"formGroupExampleInput2\">层高</label>\r\n\t\t<div class=\"input-group\">\r\n\t\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"mall.floorHeight\" required placeholder=\"例如：4\">\r\n\t\t\t<div class=\"input-group-append\">\r\n\t\t\t\t<span class=\"input-group-text\">米</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\r\n\t\t<div *ngIf=\"validInfo!=''\">\r\n\t\t\t<span class=\"badge badge-warning\">提示</span>\r\n\t\t\t{{validInfo}}\r\n\t\t</div>\r\n\t</ng-template>\r\n</modal-dialog>\r\n<!-- Mall & Floor -->\r\n<modal-dialog [title]=\"'房间信息'\" *ngIf=\"roomModalVisible\" (modalHidden)=\"roomModalHidden($event)\">\r\n\t<ng-template #content>\r\n\t\t<room-properties [properties]=\"roomProperties\" #roomProp></room-properties>\r\n\t\t<div *ngIf=\"validRoomInfo!=''\">\r\n\t\t\t<span class=\"badge badge-warning\">提示</span>\r\n\t\t\t{{validRoomInfo}}\r\n\t\t</div>\r\n\t</ng-template>\r\n</modal-dialog>"

/***/ }),

/***/ "./src/app/draw-tool/draw-tool.component.ts":
/*!**************************************************!*\
  !*** ./src/app/draw-tool/draw-tool.component.ts ***!
  \**************************************************/
/*! exports provided: DrawToolComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawToolComponent", function() { return DrawToolComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var openlayers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! openlayers */ "./node_modules/openlayers/dist/ol.js");
/* harmony import */ var openlayers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(openlayers__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _room_properties_room_properties_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../room-properties/room-properties.component */ "./src/app/room-properties/room-properties.component.ts");
/* harmony import */ var _utils_split_polygon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/split-polygon */ "./src/utils/split-polygon.ts");
/* harmony import */ var _turf_turf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @turf/turf */ "./node_modules/@turf/turf/turf.min.js");
/* harmony import */ var _turf_turf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_turf_turf__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DrawToolComponent = /** @class */ (function () {
    function DrawToolComponent() {
        // 输入内容验证结果提示信息
        this.validInfo = '';
        this.validRoomInfo = '';
        // 模态框是否可见
        this.modalVisible = false;
        // 按钮是否可用
        this.newMallDisable = false;
        this.floors = [];
        // 建筑物属性
        this.mall = {
            id: '',
            name: '',
            floors: 1,
            startFloor: 1
        };
        // 房间属性
        this.roomProperties = {
            id: '3sds4sfpcjtbslf8bmhiebhri4',
            name: '',
            floor: 2,
            type: 'sm',
            pName: '张无忌',
            pTel: '15333333333' // 联系人电话
        };
        // 当前绘图的图层，用于绘制内容和编辑
        this.layerSource = new openlayers__WEBPACK_IMPORTED_MODULE_1__["source"].Vector();
        // 缓存要素数组，每一层楼的要素临时存放位置
        this.features = [];
        this.formatGeojson = new openlayers__WEBPACK_IMPORTED_MODULE_1__["format"].GeoJSON();
        this.style = new openlayers__WEBPACK_IMPORTED_MODULE_1__["style"].Style({
            fill: new openlayers__WEBPACK_IMPORTED_MODULE_1__["style"].Fill({
                color: 'rgba(255, 255, 255, 0.2)'
            }),
            stroke: new openlayers__WEBPACK_IMPORTED_MODULE_1__["style"].Stroke({
                color: '#ffcc33',
                width: 6,
                lineJoin: 'bevel',
                lineDash: [10, 10, 10],
                lineCap: 'square'
            }),
            image: new openlayers__WEBPACK_IMPORTED_MODULE_1__["style"].Circle({
                radius: 7,
                fill: new openlayers__WEBPACK_IMPORTED_MODULE_1__["style"].Fill({
                    color: '#ffcc33'
                })
            })
        });
    }
    DrawToolComponent.prototype.ngOnInit = function () {
        var _this = this;
        // 创建绘图图层
        this.vectorLayer = new openlayers__WEBPACK_IMPORTED_MODULE_1__["layer"].Vector({
            source: this.layerSource,
            style: this.style
        });
        this.map.addLayer(this.vectorLayer);
        // 创建绘图要素
        this.polyLineDraw = new openlayers__WEBPACK_IMPORTED_MODULE_1__["interaction"].Draw({
            source: this.layerSource,
            type: 'LineString'
        });
        //   在绘制结束后添加属性 drawend 事件
        this.polyLineDraw.on('drawend', function (e) {
            var prop = null;
            // 分割要素
            var sP = new _utils_split_polygon__WEBPACK_IMPORTED_MODULE_3__["PolygonSlice"]();
            console.log(_this.polygonSelect.getFeatures[0]);
            var eG = e.feature.getGeometry();
            var splited = sP.split(_this.polygonSelect.getFeatures[0], Object(_turf_turf__WEBPACK_IMPORTED_MODULE_4__["lineString"])(eG.getCoordinates()));
            console.log(splited);
        });
        this.map.addInteraction(this.polyLineDraw);
        this.polyLineDraw.setActive(false);
        // 创建绘图要素
        this.polygonDraw = new openlayers__WEBPACK_IMPORTED_MODULE_1__["interaction"].Draw({
            source: this.layerSource,
            type: 'Polygon'
        });
        //   在绘制结束后添加属性 drawend 事件
        this.polygonDraw.on('drawend', function (e) {
            var prop = null;
            // 绘制结束后，判断当前楼层，如果是0层，则表示是建筑物轮廓
            if (!_this.currentFloor) {
                // 当前绘制或展示的是mall轮廓
                _this.creat('floor');
                // TODO:  使用turf计算中心点
                prop = { id: _this.randomString(32), floor: 0, floors: _this.mall.floors, center: [0, 0] };
            }
            else {
                // 绘制的是floor
                prop = { id: _this.randomString(32), floor: _this.currentFloor };
            }
            e.feature.setProperties(prop);
        });
        // 添加绘图交互
        this.map.addInteraction(this.polygonDraw);
        this.polygonDraw.setActive(false);
        // 选中交互
        this.polygonSelect = new openlayers__WEBPACK_IMPORTED_MODULE_1__["interaction"].Select();
        this.map.addInteraction(this.polygonSelect);
        // this.polygonSelect.setActive(false);
        // 选中之后编辑交互
        this.polygonModify = new openlayers__WEBPACK_IMPORTED_MODULE_1__["interaction"].Modify({
            features: this.polygonSelect.getFeatures()
        });
        this.map.addInteraction(this.polygonModify);
        this.polygonModify.setActive(false);
        // 注册选中事件
        var selectedFeatures = this.polygonSelect.getFeatures();
        this.polygonSelect.on('change:active', function () {
            selectedFeatures.forEach(selectedFeatures.remove, selectedFeatures);
        });
        // 添加捕捉功能，必须要在Draw和Modi之后添加
        // The snap interaction must be added after the Modify and Draw interactions in order for its map browser event handlers to be fired first.
        // Its handlers are responsible of doing the snapping.
        var snap = new openlayers__WEBPACK_IMPORTED_MODULE_1__["interaction"].Snap({
            source: this.layerSource
        });
        this.map.addInteraction(snap);
    };
    /**
     * 创建MALL或者Floor
     * @param type 绘制类型
     */
    DrawToolComponent.prototype.creat = function (type) {
        if (type === 'mall') {
            this.modalVisible = true;
            this.currentFloor = 0;
        }
        else if (isNaN(this.currentFloor)) {
            this.warningModalVisible = true;
            this.errInfo = "请先创建Mall！";
            console.log('请先创建Mall！');
            return false;
        }
        else if (this.layerSource.getFeatures().length === 1) {
            // 如果当前绘制楼层为空，则不允许绘制新的楼层
            this.warningModalVisible = true;
            this.errInfo = "当前楼层为空，请在当前楼层中绘制！";
            console.log('当前楼层为空，请在当前楼层中绘制！');
            return false;
        }
        else {
            if (this.currentFloor === 0) {
                this.currentFloor = this.mall.startFloor;
            }
            else {
                // 如果是从负楼层开始，则跳过0层（mall）
                if (this.currentFloor++ === 0) {
                    this.currentFloor++;
                }
            }
            // TODO:  最大楼层检测
            this.floors.push(this.currentFloor);
            this.saveToCache();
        }
        this.clearInteraction();
        this.polygonDraw.setActive(true);
    };
    /**
     * 新建楼层时候，把上一步绘制的floor缓存到缓存要素数组中
     * @param type 当前绘制的类型
     */
    DrawToolComponent.prototype.saveToCache = function () {
        var layerCurrentFeatures = this.layerSource.getFeatures();
        // 要创建floor，必须已经创建了mall，也即vector中要至少有一个要素
        if (layerCurrentFeatures.length > 0) {
            // 已经绘制了mall
            var floorIndex = this.features.length;
            // 如果是新建Floor，则把上次绘制的Floor放到临时缓存图层数组中
            // 除去第一个要素（Mall的轮廓）之外的就是上一层Floor的要素
            this.features[floorIndex] = layerCurrentFeatures.slice(1);
            for (var i = 0; i < this.features[floorIndex].length; i++) {
                var element = this.features[floorIndex][i];
                this.layerSource.removeFeature(element);
            }
        }
    };
    DrawToolComponent.prototype.draw = function (event, type) {
        event.stopPropagation();
        this.clearInteraction();
        this.polygonDraw.setActive(true);
    };
    DrawToolComponent.prototype.edit = function (event) {
        // 不能编辑Mall对应的要素，因为编辑之后，要素顺序会改变
        event.stopPropagation();
        this.clearInteraction();
        this.polygonSelect.setActive(true);
        this.polygonModify.setActive(true);
    };
    DrawToolComponent.prototype.drawClipLine = function (event, type) {
        event.stopPropagation();
        this.clearInteraction();
        this.polyLineDraw.setActive(true);
    };
    /**
     * 保存当前图层为geojson
     */
    DrawToolComponent.prototype.save = function () {
        var saveFeatures = [];
        // 保存之前，把所有的floor都保存到临时缓存图层中,所以vectorLayer只有一个feature
        if (this.layerSource.getFeatures().length === 1) {
            this.saveToCache();
        }
        // mall
        saveFeatures[0] = this.layerSource.getFeatures()[0];
        // floors
        this.features.forEach(function (item) {
            saveFeatures = saveFeatures.concat(item);
        });
        // export
        var geojson = this.formatGeojson.writeFeatures(saveFeatures);
        console.log(geojson);
        this.createAndDownloadFile('geo.json', geojson);
    };
    // 模态框关闭事件
    DrawToolComponent.prototype.modalHidden = function (event) {
        if (event.result === 'cancle') {
            this.clearInteraction();
        }
        else {
            if (this.mall.name.trim() === '' || this.mall.startFloor.toString().trim() === '') {
                this.validInfo = "请输入楼宇名称和最低楼层！";
                return;
            }
            this.mall.startFloor = parseInt(this.mall.startFloor.toString().trim(), 0);
            if (isNaN(this.mall.startFloor)) {
                this.validInfo = "请输入正确的楼层数！";
                return;
            }
            this.validInfo = "";
            this.newMallDisable = true;
        }
        this.modalVisible = false;
    };
    DrawToolComponent.prototype.roomModalHidden = function (event) {
        if (event.result === 'ok') {
            this.validRoomInfo = this.roomProp.validate();
            if (!this.validRoomInfo) {
                return;
            }
            else {
                this.roomProp.saveInfo();
            }
        }
        // this.clearInteraction();
        this.roomModalVisible = false;
    };
    // 赋属性
    DrawToolComponent.prototype.writeRoomProp = function (event) {
        var _this = this;
        this.clearInteraction();
        this.polygonSelect.setActive(true);
        this.polygonSelect.on('select', function (e) {
            _this.roomProperties.id = e.selected[0].getProperties().id;
            _this.roomModalVisible = true;
        });
    };
    // log st.
    DrawToolComponent.prototype.log = function () {
        console.log(this.vectorLayer);
        console.log(this.layerSource);
        console.log('%c 当前图层中的要素：', 'color:green;font-weight:bold;');
        console.log(this.vectorLayer.getSource().getFeatures());
        // geometry 只有图形要素，没有属性，属性在feature上
        this.layerSource.getFeatures()[0].setProperties({ type: 'mall', id: '1s3334' });
        this.layerSource.getFeatures()[0].getGeometry().setProperties({ name: 'test', id: '1s3334' });
        console.log('%c 当前缓存中的要素：', 'color:green;font-weight:bold;');
        console.log(this.features);
        console.log(this.formatGeojson.writeFeatures(this.features[0]));
    };
    DrawToolComponent.prototype.clearInteraction = function () {
        // this.polygonSelect.setActive(false);
        this.polygonModify.setActive(false);
        this.polygonDraw.setActive(false);
        this.polygonSelect.un('select', null);
    };
    // 下载文件
    DrawToolComponent.prototype.createAndDownloadFile = function (fileName, content) {
        var aTag = document.createElement('a');
        var blob = new Blob([content]);
        aTag.download = fileName;
        aTag.href = URL.createObjectURL(blob);
        aTag.click();
        URL.revokeObjectURL(aTag.href);
    };
    /**
     * 生成随机字符串
     * @param len 字符串长度
     */
    DrawToolComponent.prototype.randomString = function (len) {
        len = len || 32;
        var $chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890'; /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
        var maxPos = $chars.length;
        var pwd = '';
        for (var i = 0; i < len; i++) {
            pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
        }
        return pwd;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", openlayers__WEBPACK_IMPORTED_MODULE_1__["Map"])
    ], DrawToolComponent.prototype, "map", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('roomProp'),
        __metadata("design:type", _room_properties_room_properties_component__WEBPACK_IMPORTED_MODULE_2__["RoomPropertiesComponent"])
    ], DrawToolComponent.prototype, "roomProp", void 0);
    DrawToolComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'draw-tool',
            template: __webpack_require__(/*! ./draw-tool.component.html */ "./src/app/draw-tool/draw-tool.component.html"),
            styles: [__webpack_require__(/*! ./draw-tool.component.css */ "./src/app/draw-tool/draw-tool.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DrawToolComponent);
    return DrawToolComponent;
}());



/***/ }),

/***/ "./src/app/floor/floor.component.css":
/*!*******************************************!*\
  !*** ./src/app/floor/floor.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/floor/floor.component.html":
/*!********************************************!*\
  !*** ./src/app/floor/floor.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <span>楼层：</span>\n  <button class=\"btn btn-praimary\" (click)=\"floorAdd($event)\">添加...</button>\n  <ul>\n    <li *ngFor=\"let floor of floors\">{{floor}}层</li>\n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/floor/floor.component.ts":
/*!******************************************!*\
  !*** ./src/app/floor/floor.component.ts ***!
  \******************************************/
/*! exports provided: FloorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloorComponent", function() { return FloorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FloorComponent = /** @class */ (function () {
    function FloorComponent() {
        this.addFloor = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    FloorComponent.prototype.ngOnInit = function () {
    };
    FloorComponent.prototype.floorAdd = function (event) {
        event.stopPropagation();
        // 发送事件
        this.addFloor.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], FloorComponent.prototype, "floors", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FloorComponent.prototype, "addFloor", void 0);
    FloorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'floor',
            template: __webpack_require__(/*! ./floor.component.html */ "./src/app/floor/floor.component.html"),
            styles: [__webpack_require__(/*! ./floor.component.css */ "./src/app/floor/floor.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FloorComponent);
    return FloorComponent;
}());



/***/ }),

/***/ "./src/app/map/map.component.css":
/*!***************************************!*\
  !*** ./src/app/map/map.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/map/map.component.html":
/*!****************************************!*\
  !*** ./src/app/map/map.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"width:100%;height:100%;\" id='map'>\n  <draw-tool [map]=\"map\"></draw-tool>\n</div>"

/***/ }),

/***/ "./src/app/map/map.component.ts":
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var openlayers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! openlayers */ "./node_modules/openlayers/dist/ol.js");
/* harmony import */ var openlayers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(openlayers__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_split_polygon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/split-polygon */ "./src/utils/split-polygon.ts");
/* harmony import */ var _turf_turf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @turf/turf */ "./node_modules/@turf/turf/turf.min.js");
/* harmony import */ var _turf_turf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_turf_turf__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MapComponent = /** @class */ (function () {
    function MapComponent(elementRef) {
        this.elementRef = elementRef;
    }
    MapComponent.prototype.ngOnInit = function () {
        this.createMap();
        this.testSplitPolygon();
    };
    MapComponent.prototype.testSplitPolygon = function () {
        var mian = Object(_turf_turf__WEBPACK_IMPORTED_MODULE_3__["polygon"])([[
                [0, 0],
                [0, 10],
                [10, 10],
                [10, 0],
                [0, 0]
            ]]);
        var xian = Object(_turf_turf__WEBPACK_IMPORTED_MODULE_3__["lineString"])([
            [5, 15],
            [5, -15]
        ]);
        var sP = new _utils_split_polygon__WEBPACK_IMPORTED_MODULE_2__["PolygonSlice"]();
        var splited = sP.split(mian, xian);
        console.log(splited);
    };
    MapComponent.prototype.createMap = function () {
        var imageStyle = new openlayers__WEBPACK_IMPORTED_MODULE_1__["style"].Style({
            stroke: new openlayers__WEBPACK_IMPORTED_MODULE_1__["style"].Stroke({
                color: 'blue',
                width: 3
            }),
            image: new openlayers__WEBPACK_IMPORTED_MODULE_1__["style"].Icon({
                src: 'https://woshisunwukong.github.io/image/indoor-map.jpg',
                crossOrigin: 'Anonymous',
                scale: 1,
                rotateWithView: true
            }),
        });
        var vecLayer = new openlayers__WEBPACK_IMPORTED_MODULE_1__["layer"].Vector({
            style: imageStyle,
            source: new openlayers__WEBPACK_IMPORTED_MODULE_1__["source"].Vector({
                features: [new openlayers__WEBPACK_IMPORTED_MODULE_1__["Feature"]({
                        geometry: openlayers__WEBPACK_IMPORTED_MODULE_1__["geom"].Polygon.fromExtent([11855662.310034806, 3452759.5557873524, 11855728.822132856, 3452823.3714489955])
                    })]
            })
        });
        var imageLayer = new openlayers__WEBPACK_IMPORTED_MODULE_1__["layer"].Image({
            source: new openlayers__WEBPACK_IMPORTED_MODULE_1__["source"].ImageStatic({
                url: 'https://woshisunwukong.github.io/image/indoor-map.jpg',
                imageExtent: [11855662.310034806, 3452759.5557873524, 11855728.822132856, 3452823.3714489955],
                projection: 'EPSG:3857'
            })
        });
        var ele = this.elementRef.nativeElement.querySelector('#map');
        console.log(ele);
        this.map = new openlayers__WEBPACK_IMPORTED_MODULE_1__["Map"]({
            target: 'map',
            layers: [
                new openlayers__WEBPACK_IMPORTED_MODULE_1__["layer"].Tile({
                    source: new openlayers__WEBPACK_IMPORTED_MODULE_1__["source"].OSM()
                })
            ],
            view: new openlayers__WEBPACK_IMPORTED_MODULE_1__["View"]({
                center: openlayers__WEBPACK_IMPORTED_MODULE_1__["proj"].fromLonLat([106.50164388120174, 29.6043605183267]),
                zoom: 20
            }),
            controls: [new openlayers__WEBPACK_IMPORTED_MODULE_1__["control"].MousePosition({
                    className: 'position-lable',
                    projection: 'EPSG:3857'
                })]
        });
        this.map.addLayer(vecLayer);
        this.map.addLayer(imageLayer);
    };
    MapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! ./map.component.html */ "./src/app/map/map.component.html"),
            styles: [__webpack_require__(/*! ./map.component.css */ "./src/app/map/map.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/modal-dialog/modal-dialog.component.css":
/*!*********************************************************!*\
  !*** ./src/app/modal-dialog/modal-dialog.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-container {\r\n\tposition: fixed;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tbackground-color: rgba(255, 255, 255, 0.5);\r\n\tz-index: 999;\r\n}\r\n\r\n.modal-content {\r\n\ttop: 200px;\r\n}\r\n\r\n.fadeIn {\r\n\t-webkit-animation: fadeIn 1s;\r\n\t        animation: fadeIn 1s;\r\n}\r\n\r\n.fadeOut {\r\n\t-webkit-animation: fadeOut 1s;\r\n\t        animation: fadeOut 1s;\r\n}\r\n\r\n@-webkit-keyframes fadeIn {\r\n\t0% {\r\n\t\topacity: 0;\r\n\t\t-webkit-transform: scale(0);\r\n\t\t        transform: scale(0);\r\n\t}\r\n\t50% {\r\n\t\topacity: 1;\r\n\t\t-webkit-transform: scale(1);\r\n\t\t        transform: scale(1);\r\n\t}\r\n}\r\n\r\n@keyframes fadeIn {\r\n\t0% {\r\n\t\topacity: 0;\r\n\t\t-webkit-transform: scale(0);\r\n\t\t        transform: scale(0);\r\n\t}\r\n\t50% {\r\n\t\topacity: 1;\r\n\t\t-webkit-transform: scale(1);\r\n\t\t        transform: scale(1);\r\n\t}\r\n}\r\n\r\n@-webkit-keyframes fadeOut {\r\n\t0% {\r\n\t\topacity: 1;\r\n\t\t-webkit-transform: scale(1);\r\n\t\t        transform: scale(1);\r\n\t}\r\n\t50% {\r\n\t\topacity: 0.2;\r\n\t\t-webkit-transform: scale(0.2);\r\n\t\t        transform: scale(0.2);\r\n\t}\r\n}\r\n\r\n@keyframes fadeOut {\r\n\t0% {\r\n\t\topacity: 1;\r\n\t\t-webkit-transform: scale(1);\r\n\t\t        transform: scale(1);\r\n\t}\r\n\t50% {\r\n\t\topacity: 0.2;\r\n\t\t-webkit-transform: scale(0.2);\r\n\t\t        transform: scale(0.2);\r\n\t}\r\n}"

/***/ }),

/***/ "./src/app/modal-dialog/modal-dialog.component.html":
/*!**********************************************************!*\
  !*** ./src/app/modal-dialog/modal-dialog.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-container\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <span *ngIf=\"!headerTmp\">{{title}}</span>\n        <ng-template [ngTemplateOutlet]=\"headerTmp\" *ngIf=\"headerTmp\"></ng-template>\n      </div>\n\n      <div class=\"modal-body\" *ngIf=\"contentTmp\">\n        <ng-template [ngTemplateOutlet]=\"contentTmp\"></ng-template>\n      </div>\n\n      <div class=\"modal-footer\">\n        <ng-template [ngTemplateOutlet]=\"footerTmp\" *ngIf=\"footerTmp\"></ng-template>\n        <button type=\"button\" class=\"btn btn-secondary\" *ngIf=\"!footerTmp\" (click)=\"cancle()\">取消</button>\n        <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"!footerTmp\" (click)=\"ok()\">确定</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/modal-dialog/modal-dialog.component.ts":
/*!********************************************************!*\
  !*** ./src/app/modal-dialog/modal-dialog.component.ts ***!
  \********************************************************/
/*! exports provided: ModalDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalDialogComponent", function() { return ModalDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModalDialogComponent = /** @class */ (function () {
    function ModalDialogComponent(elementRef) {
        this.elementRef = elementRef;
        this.modalHidden = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ModalDialogComponent.prototype.ngOnInit = function () {
        this.title = this.title || "信息";
        this.ele = this.elementRef.nativeElement.querySelector('.modal-content');
        this.ele.className = 'modal-content fadeIn';
    };
    ModalDialogComponent.prototype.ngOnDestroy = function () {
        this.ele.className = 'modal-content fadeOut';
    };
    ModalDialogComponent.prototype.cancle = function () {
        this.modalHidden.emit({ result: 'cancle' });
        console.log("取消模态框内容！");
    };
    ModalDialogComponent.prototype.ok = function () {
        this.modalHidden.emit({ result: 'ok' });
        console.log("确认模态框内容！");
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ModalDialogComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ModalDialogComponent.prototype, "modalHidden", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])('header'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], ModalDialogComponent.prototype, "headerTmp", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])('content'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], ModalDialogComponent.prototype, "contentTmp", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])('footer'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], ModalDialogComponent.prototype, "footerTmp", void 0);
    ModalDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'modal-dialog',
            template: __webpack_require__(/*! ./modal-dialog.component.html */ "./src/app/modal-dialog/modal-dialog.component.html"),
            styles: [__webpack_require__(/*! ./modal-dialog.component.css */ "./src/app/modal-dialog/modal-dialog.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ModalDialogComponent);
    return ModalDialogComponent;
}());



/***/ }),

/***/ "./src/app/panel/panel.component.css":
/*!*******************************************!*\
  !*** ./src/app/panel/panel.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep .trigger {\r\n  font-size: 18px;\r\n  line-height: 64px;\r\n  padding: 0 24px;\r\n  cursor: pointer;\r\n  transition: color .3s;\r\n}\r\n\r\n:host ::ng-deep .trigger:hover {\r\n  color: #1890ff;\r\n}\r\n\r\n:host ::ng-deep .logo {\r\n  height: 32px;\r\n  background: rgba(255, 255, 255, .2);\r\n  margin: 16px;\r\n}\r\n\r\n.logo {\r\n  width: 120px;\r\n  height: 31px;\r\n  background: rgba(255, 255, 255, .2);\r\n  margin: 16px 28px 16px 0;\r\n  float: left;\r\n}\r\n"

/***/ }),

/***/ "./src/app/panel/panel.component.html":
/*!********************************************!*\
  !*** ./src/app/panel/panel.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-layout style=\"width: 100%;height: 100%;\">\n  <nz-sider nzCollapsible [(nzCollapsed)]=\"isCollapsed\" [nzTrigger]=\"triggerTemplate\">\n    <div class=\"logo\">\n    </div>\n    <ul nz-menu [nzTheme]=\"'dark'\" [nzMode]=\"'inline'\" [nzInlineCollapsed]=\"isCollapsed\">\n      <li nz-submenu>\n        <span title>\n          <i class=\"anticon anticon-user\"></i>\n          <span class=\"nav-text\">楼宇类型</span>\n        </span>\n        <ul>\n          <li nz-menu-item>商场</li>\n          <li nz-menu-item>菜市场</li>\n          <li nz-menu-item>写字楼</li>\n        </ul>\n      </li>\n    </ul>\n  </nz-sider>\n  <nz-layout>\n    <nz-header style=\"background: #fff; padding:0;\">\n      <i class=\"anticon trigger\" [class.anticon-menu-fold]=\"!isCollapsed\" [class.anticon-menu-unfold]=\"isCollapsed\" (click)=\"isCollapsed=!isCollapsed\"></i>\n      <div style=\"float: right;padding: 2px 20px;\">\n        <nz-avatar nzIcon=\"anticon anticon-search\" style=\"background-color:#87d068;\"></nz-avatar>&nbsp;&nbsp;&nbsp;&nbsp;\n        <nz-avatar nzIcon=\"anticon anticon-bell\" style=\"background-color:#87d068;\"></nz-avatar>&nbsp;&nbsp;&nbsp;&nbsp;\n        <nz-avatar nzIcon=\"anticon anticon-user\" style=\"background-color:#87d068;\"></nz-avatar>&nbsp;&nbsp;\n        <span>张 三</span>\n      </div>\n    </nz-header>\n    <nz-content style=\"margin:0 16px;\">\n      <nz-breadcrumb style=\"margin:16px 0;\">\n        <nz-breadcrumb-item>楼宇类型</nz-breadcrumb-item>\n        <nz-breadcrumb-item>商场</nz-breadcrumb-item>\n      </nz-breadcrumb>\n      <div style=\"padding:24px; background: #fff;\">\n        <project-modal title=\"新建楼宇\" lable=\"新建\" [mall]=\"newproj\"></project-modal>\n        <nz-card style=\"width:300px;margin: 10px;\" nzTitle=\"{{proj.name}}\" *ngFor=\"let proj of projs\">\n          <div class=\"proj-date\">{{proj.date}}</div>\n          <div class=\"proj-creator\">{{proj.creator}}</div>\n          <div class=\"proj-address\">{{proj.address}}</div>\n          <project-modal title=\"编辑楼宇\" lable=\"编辑\" [mall]=\"proj\"></project-modal>\n        </nz-card>\n      </div>\n    </nz-content>\n    <nz-footer style=\"text-align: center;\">xxxxxxxxxxxxx</nz-footer>\n  </nz-layout>\n</nz-layout>\n<ng-template #trigger>\n  <i class=\"anticon anticon-up\"></i>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/panel/panel.component.ts":
/*!******************************************!*\
  !*** ./src/app/panel/panel.component.ts ***!
  \******************************************/
/*! exports provided: PanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelComponent", function() { return PanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PanelComponent = /** @class */ (function () {
    function PanelComponent() {
        this.newproj = {
            id: "",
            name: "",
            date: "",
            creator: "",
            address: "",
            pName: "",
            pTel: ""
        };
        this.projs = [{
                name: "嘉华大厦",
                date: "2018-05-27",
                creator: "王丽",
                address: "博古街36号",
                id: "",
                startFloor: 0,
                endFloor: 0,
                floors: 0,
                pName: "王丽",
                pTel: "15320283736"
            }, {
                name: "嘉华大厦2",
                date: "2018-09-26",
                creator: "张柏",
                address: "博古街36号",
                id: "",
                startFloor: 0,
                endFloor: 0,
                floors: 0,
                pName: "张柏",
                pTel: "13623428767"
            }, {
                name: "嘉华大厦3",
                date: "2018-11-16",
                creator: "王小",
                address: "博古街36号",
                id: "",
                startFloor: 0,
                endFloor: 0,
                floors: 0,
                pName: "王小",
                pTel: "15822328878"
            }];
        this.isCollapsed = false;
        this.triggerTemplate = null;
    }
    PanelComponent.prototype.ngOnInit = function () { };
    /** custom trigger can be TemplateRef **/
    PanelComponent.prototype.changeTrigger = function () {
        this.triggerTemplate = this.customTrigger;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('trigger'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], PanelComponent.prototype, "customTrigger", void 0);
    PanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'panel',
            template: __webpack_require__(/*! ./panel.component.html */ "./src/app/panel/panel.component.html"),
            styles: [__webpack_require__(/*! ./panel.component.css */ "./src/app/panel/panel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PanelComponent);
    return PanelComponent;
}());



/***/ }),

/***/ "./src/app/project-modal/project-modal.component.css":
/*!***********************************************************!*\
  !*** ./src/app/project-modal/project-modal.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/project-modal/project-modal.component.html":
/*!************************************************************!*\
  !*** ./src/app/project-modal/project-modal.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button nz-button [nzType]=\"'primary'\" (click)=\"showModal()\">\n  <span>{{lable}}</span>\n</button>\n<nz-modal [nzTitle]=\"title\" [(nzVisible)]=\"modalVisible\" (nzOnCancel)=\"handleCancel()\" (nzOnOk)=\"handleOk()\">\n\n  <form nz-form [formGroup]=\"mallForm\">\n    <nz-form-item>\n      <nz-form-label [nzSpan]=\"5\" nzRequired nzFor=\"name\">建筑物名称</nz-form-label>\n      <nz-form-control [nzSpan]=\"12\">\n        <input id=\"name\" type=\"text\" nz-input formControlName=\"name\">\n        <nz-form-explain *ngIf=\"mallForm.get('name').dirty && mallForm.get('name').errors\">Please input mall username!</nz-form-explain>\n      </nz-form-control>\n    </nz-form-item>\n\n    <nz-form-item>\n      <nz-form-label [nzSpan]=\"5\" nzRequired nzFor=\"floors\">总层数</nz-form-label>\n      <nz-form-control [nzSpan]=\"12\">\n        <input id=\"floors\" type=\"text\" nz-input formControlName=\"floors\">\n        <nz-form-explain *ngIf=\"mallForm.get('floors').dirty && mallForm.get('floors').errors\">Please input mall floors!</nz-form-explain>\n      </nz-form-control>\n    </nz-form-item>\n\n    <nz-form-item>\n      <nz-form-label [nzSpan]=\"5\" nzRequired nzFor=\"startFloor\">最低楼层数</nz-form-label>\n      <nz-form-control [nzSpan]=\"12\">\n        <input id=\"startFloor\" type=\"text\" nz-input formControlName=\"startFloor\">\n        <nz-form-explain *ngIf=\"mallForm.get('startFloor').dirty && mallForm.get('startFloor').errors\">Please input mall startFloor!</nz-form-explain>\n      </nz-form-control>\n    </nz-form-item>\n\n  </form>\n</nz-modal>\n"

/***/ }),

/***/ "./src/app/project-modal/project-modal.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/project-modal/project-modal.component.ts ***!
  \**********************************************************/
/*! exports provided: ProjectModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectModalComponent", function() { return ProjectModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _types_MallProp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types/MallProp */ "./src/app/types/MallProp.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectModalComponent = /** @class */ (function () {
    function ProjectModalComponent(fb) {
        this.fb = fb;
        this.modalVisible = false;
    }
    ProjectModalComponent.prototype.ngOnInit = function () {
        this.mallForm = this.fb.group({
            name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            floors: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            startFloor: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
        this.mallForm.get('name').setValue(this.mall.name);
        this.mallForm.get('floors').setValue(this.mall.floors);
        this.mallForm.get('startFloor').setValue(this.mall.startFloor);
    };
    ProjectModalComponent.prototype.showModal = function () {
        this.modalVisible = true;
    };
    ProjectModalComponent.prototype.handleOk = function () {
        console.log('Button ok clicked!');
        this.modalVisible = false;
    };
    ProjectModalComponent.prototype.handleCancel = function () {
        console.log('Button cancel clicked!');
        this.modalVisible = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ProjectModalComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ProjectModalComponent.prototype, "lable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _types_MallProp__WEBPACK_IMPORTED_MODULE_2__["MallProp"])
    ], ProjectModalComponent.prototype, "mall", void 0);
    ProjectModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'project-modal',
            template: __webpack_require__(/*! ./project-modal.component.html */ "./src/app/project-modal/project-modal.component.html"),
            styles: [__webpack_require__(/*! ./project-modal.component.css */ "./src/app/project-modal/project-modal.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], ProjectModalComponent);
    return ProjectModalComponent;
}());



/***/ }),

/***/ "./src/app/room-properties/room-properties.component.css":
/*!***************************************************************!*\
  !*** ./src/app/room-properties/room-properties.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/room-properties/room-properties.component.html":
/*!****************************************************************!*\
  !*** ./src/app/room-properties/room-properties.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\">\n  <label>房间ID</label>\n  <input type=\"text\" class=\"form-control\" readonly [(ngModel)]=\"properties.id\">\n  <small class=\"form-text text-muted\">系统自动生成</small>\n</div>\n<div class=\"form-group\">\n  <label>房间名称</label>\n  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"properties.name\" placeholder=\"输入房间名称\">\n</div>\n<div class=\"form-group\">\n  <label>房间类型</label>\n  <input type=\"text\" class=\"form-control\" placeholder=\"超市、电商、餐饮...\">\n</div>\n<div class=\"form-row\">\n  <div class=\"form-group col-md-6\">\n    <label>联系人</label>\n    <input type=\"text\" class=\"form-control\" placeholder=\"联系人姓名\">\n  </div>\n  <div class=\"form-group col-md-6\">\n    <label>联系电话</label>\n    <input type=\"tel\" class=\"form-control\" placeholder=\"联系人电话\">\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/room-properties/room-properties.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/room-properties/room-properties.component.ts ***!
  \**************************************************************/
/*! exports provided: RoomPropertiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomPropertiesComponent", function() { return RoomPropertiesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RoomPropertiesComponent = /** @class */ (function () {
    function RoomPropertiesComponent() {
        this.properties = {
            id: '3sds4sfpcjtbslf8bmhiebhri4',
            name: '',
            floor: 2,
            type: 'sm',
            pName: '张无忌',
            pTel: '15333333333' // 联系人电话
        };
    }
    RoomPropertiesComponent.prototype.ngOnInit = function () {
    };
    RoomPropertiesComponent.prototype.validate = function () {
        var errInfo;
        errInfo = '';
        return errInfo;
    };
    RoomPropertiesComponent.prototype.saveInfo = function () {
        console.log(this.properties);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RoomPropertiesComponent.prototype, "properties", void 0);
    RoomPropertiesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'room-properties',
            template: __webpack_require__(/*! ./room-properties.component.html */ "./src/app/room-properties/room-properties.component.html"),
            styles: [__webpack_require__(/*! ./room-properties.component.css */ "./src/app/room-properties/room-properties.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RoomPropertiesComponent);
    return RoomPropertiesComponent;
}());



/***/ }),

/***/ "./src/app/services/saveToDb.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/saveToDb.service.ts ***!
  \**********************************************/
/*! exports provided: SaveToDbService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveToDbService", function() { return SaveToDbService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Layer和geojson之间相互转换
 */
var SaveToDbService = /** @class */ (function () {
    function SaveToDbService() {
    }
    // TODO:
    /**
     * 根据当前MALL对应的layergroup数组，生成组合GeoJSON
     */
    SaveToDbService.prototype.toGeoJSON = function () {
    };
    SaveToDbService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SaveToDbService);
    return SaveToDbService;
}());



/***/ }),

/***/ "./src/app/types/MallProp.ts":
/*!***********************************!*\
  !*** ./src/app/types/MallProp.ts ***!
  \***********************************/
/*! exports provided: MallProp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MallProp", function() { return MallProp; });
/**
 * 楼宇属性
 */
var MallProp = /** @class */ (function () {
    function MallProp() {
    }
    return MallProp;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/utils/split-polygon.ts":
/*!************************************!*\
  !*** ./src/utils/split-polygon.ts ***!
  \************************************/
/*! exports provided: PolygonSlice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolygonSlice", function() { return PolygonSlice; });
/* harmony import */ var _turf_turf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @turf/turf */ "./node_modules/@turf/turf/turf.min.js");
/* harmony import */ var _turf_turf__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_turf_turf__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _turf_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @turf/helpers */ "./node_modules/@turf/helpers/main.es.js");


/**
 * var polygon = {
 *   "geometry": {
 *     "type": "Polygon",
 *     "coordinates": [[
 *         [0, 0],
 *         [0, 10],
 *         [10, 10],
 *         [10, 0],
 *         [0, 0]
 *     ]]
 *   }
 * };
 * var linestring =  {
 *     "type": "Feature",
 *     "properties": {},
 *     "geometry": {
 *       "type": "LineString",
 *       "coordinates": [
 *         [5, 15],
 *         [5, -15]
 *       ]
 *     }
 *   }
 * var sliced = turf.polygonSlice(polygon, linestring);
*/
var PolygonSlice = /** @class */ (function () {
    function PolygonSlice() {
    }
    PolygonSlice.prototype.slice = function (poly, splitter) {
        var results = [];
        var coords = Object(_turf_turf__WEBPACK_IMPORTED_MODULE_0__["getCoords"])(poly);
        var outer = Object(_turf_helpers__WEBPACK_IMPORTED_MODULE_1__["lineString"])(coords[0]);
        var inners = this.innerLineStrings(poly);
        // Split outers
        Object(_turf_turf__WEBPACK_IMPORTED_MODULE_0__["featureEach"])(Object(_turf_turf__WEBPACK_IMPORTED_MODULE_0__["lineSplit"])(outer, splitter), function (line) {
            results.push(line);
        });
        // Split inners
        Object(_turf_turf__WEBPACK_IMPORTED_MODULE_0__["featureEach"])(inners, function (inner) {
            Object(_turf_turf__WEBPACK_IMPORTED_MODULE_0__["featureEach"])(Object(_turf_turf__WEBPACK_IMPORTED_MODULE_0__["lineSplit"])(inner, splitter), function (line) {
                results.push(line);
            });
        });
        // Split splitter
        Object(_turf_turf__WEBPACK_IMPORTED_MODULE_0__["featureEach"])(Object(_turf_turf__WEBPACK_IMPORTED_MODULE_0__["lineSplit"])(splitter, poly), function (line) {
            results.push(line);
        });
        return Object(_turf_helpers__WEBPACK_IMPORTED_MODULE_1__["featureCollection"])(results);
    };
    PolygonSlice.prototype.split = function (poly, splitter) {
        var splied = this.slice(poly, splitter);
        var polygons = [];
        for (var i = 0; i < splied.features.length; i++) {
            var element = splied.features[i];
            if (element.geometry.coordinates.length >= 3) {
                polygons.push(Object(_turf_turf__WEBPACK_IMPORTED_MODULE_0__["lineToPolygon"])(element));
            }
        }
        return polygons;
    };
    // feature to featureCollection
    PolygonSlice.prototype.innerLineStrings = function (poly) {
        var results = [];
        var coords = Object(_turf_turf__WEBPACK_IMPORTED_MODULE_0__["getCoords"])(poly);
        coords.slice(1, coords.length).forEach(function (coord) {
            return results.push(Object(_turf_helpers__WEBPACK_IMPORTED_MODULE_1__["lineString"])(coord));
        });
        return Object(_turf_helpers__WEBPACK_IMPORTED_MODULE_1__["featureCollection"])(results);
    };
    return PolygonSlice;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\Indoor-Map-Draw\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map