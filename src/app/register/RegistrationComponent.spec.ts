import {RegistrationComponent} from "./RegistrationComponent";
var jqry = require('jquery');

describe('Registration component', ()=> {
    var compile, scope;
    beforeEach(angular.mock.inject(($compile, $rootScope) => {
       compile = $compile;
       scope = $rootScope.$new();
   }));

    var registrationTestComponent:RegistrationComponent = new RegistrationComponent();

    it('Exist', function() {
        expect(registrationTestComponent).toBeDefined();;
    });

    it('Template defined', function() {
      // console.log(registrationTestComponent.template);
        expect(registrationTestComponent.template).toBeDefined();
     });

     it('Elements defined', function() {
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

         expect(form.length).toBeGreaterThan(0);
         expect(useremail.length).toBeGreaterThan(0);
         expect(username.length).toBeGreaterThan(0);
         expect(userpassword.length).toBeGreaterThan(0);

      });

      function getCompiledElement(template){
        var template = template || registrationTestComponent.template;
        var element = angular.element(registrationTestComponent.template);

        var compiledElement = compile(element)(scope);
        scope.$digest();
        return compiledElement;
      }

});
