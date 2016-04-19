import {RegistrationComponent, RegistrationController, ICredentials} from "./RegistrationComponent";
import IAugmentedJQuery = angular.IAugmentedJQuery;
import {APP_MODULE_NAME} from "../AppModule";
import IScope = angular.IScope;
var jqry = require('jquery');

describe('Registration component', ()=> {
    var compile, scope;
    var rootScope;
    var ctrl:RegistrationController;
    var isolateScope:IScope;

    beforeEach(angular.mock.module(APP_MODULE_NAME));

    beforeEach(angular.mock.inject(($compile, $rootScope) => {
        rootScope = $rootScope;
        compile = $compile;
        scope = $rootScope.$new();
    }));

    var registrationTestComponent:RegistrationComponent = new RegistrationComponent();


    it('Exist', function () {
        expect(registrationTestComponent).toBeDefined();
    });

    it('Template defined', function () {
        // console.log(registrationTestComponent.template);
        expect(registrationTestComponent.template).toBeDefined();
    });

    it('Elements defined', function () {
        //  scope.username = 'TiVi';
        //  scope.password = 'P@ssw0rd';
        //  scope.email = 'TiVi@ordina.be';


        //  Keep in mind that this function will not find elements by tag name / CSS selector.
        //  For lookups by tag name, try instead angular.element(document).find(...) or $document.find(),
        //  or use the standard DOM APIs, e.g. document.querySelectorAll().


        var el = getCompiledElement(undefined);
        var form = el.find('form');
        var inputs = el.find('input');

        var element = jqry(el);
        var useremail = element.find('.js-useremail');
        var username = element.find('.js-username');
        var userpassword = element.find('.js-userpassword');

        //  console.log(useremail);
        //  console.log(username);
        //  console.log(userpassword);
        //
        //  console.log(useremail.length);
        //  console.log(username.length);
        //  console.log(userpassword.length);

        console.log(username.val());

        console.log("before " + ctrl.user.email);
        ctrl.user.email = "reyan@mail.be";
        ctrl.onChange({},'useremail');
        isolateScope.$digest();
        console.log("after " + ctrl.user.email);
        console.log('names' + ctrl.user.username);

        expect(form.length).toBeGreaterThan(0);
        expect(useremail.length).toBeGreaterThan(0);
        expect(username.length).toBeGreaterThan(0);
        expect(userpassword.length).toBeGreaterThan(0);

    });

    function getCompiledElement(template) {
        var template = template || registrationTestComponent.template;
        var element = angular.element(registrationTestComponent.template);

        var scope = rootScope.$new();
        var compiledElement:IAugmentedJQuery = compile('<register></register>')(scope);
        scope.$digest();

        var scpe:IScope = compiledElement.scope();
        isolateScope = compiledElement.isolateScope();
        ctrl = isolateScope['$ctrl'];

        return compiledElement;
    }

});
