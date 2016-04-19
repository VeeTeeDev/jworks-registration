import {RegistrationComponent} from "./RegistrationComponent";
import {UniqueUsernameDirective} from "./UniqueUsernameDirective";
import IQService = angular.IQService;


var jqry = require('jquery');

describe('Unique Username directive', ()=> {
    var compile, scope,http,q;
    beforeEach(angular.mock.inject(($compile, $rootScope, $http, $q:IQService) => {
       compile = $compile;
       scope = $rootScope.$new();
       http = $http;
       q = $q;
   }));

    var registrationTestComponent:RegistrationComponent = new RegistrationComponent();
    var uniqueUsernameTestDirective:UniqueUsernameDirective = new UniqueUsernameDirective(q,http);

    it('Exist', function() {
        expect(uniqueUsernameTestDirective).toBeDefined();;
    });

    it('onChange', function() {
        expect(true).toBeTruthy();
     });

     function getCompiledElement(template){
        var template = template || registrationTestComponent.template;
        var element = angular.element(registrationTestComponent.template);
        var compiledElement = compile(element)(scope);
        scope.$digest();
        return compiledElement;
      }

});
