"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./auth/auth.module");
const users_module_1 = require("./users/users.module");
const contact_module_1 = require("./contact/contact.module");
const product_module_1 = require("./product/product.module");
const platform_express_1 = require("@nestjs/platform-express");
const address_module_1 = require("./address/address.module");
const order_module_1 = require("./order/order.module");
const order_details_module_1 = require("./order-details/order-details.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [platform_express_1.MulterModule.register({
                dest: './images',
            }), auth_module_1.AuthModule, users_module_1.UsersModule, typeorm_1.TypeOrmModule.forRoot(), contact_module_1.ContactModule, product_module_1.ProductModule, address_module_1.AddressModule, order_module_1.OrderModule, order_details_module_1.OrderDetailsModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map