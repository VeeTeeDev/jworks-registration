import 'angular';
import 'angular-messages';
import 'angular-material';
require('angular-material/angular-material.css');
import {AppComponent} from "./AppComponent";
import {RegistrationComponent} from "./register/RegistrationComponent";
import {UniqueUsernameDirective} from "./register/UniqueUsernameDirective";
export const APP_MODULE_NAME = "registrar";

const APP_MODULE_DEPENDENCIES:Array<string> = [
    'ngMaterial',
    'ngMessages'
];

angular
    .module(
        APP_MODULE_NAME,
        APP_MODULE_DEPENDENCIES
    )
    .component(AppComponent.NAME, new AppComponent())
    .component(RegistrationComponent.NAME, new RegistrationComponent())
    .directive(UniqueUsernameDirective.NAME, UniqueUsernameDirective.factory());
