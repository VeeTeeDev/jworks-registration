import IComponentOptions = angular.IComponentOptions;
import IHttpService = angular.IHttpService;
import IAugmentedJQuery = angular.IAugmentedJQuery;
import IControllerService = angular.IControllerService;
import INgModelController = angular.INgModelController;
import IFormController = angular.IFormController;
import IScope = angular.IScope;

export class RegistrationComponent implements IComponentOptions {
    static NAME:string = 'register';

    controller:Function = RegistrationController;
    template:string = require('./register-template.html');
}
export class RegistrationController {
    static NAME:string = 'RegistrationController';

    public registerForm:IFormController;
    public title:string = "Register";
    public user:ICredentials = <ICredentials>{};

    /*
     * Controller Dependencies
     * */
    static $inject = ['$http', '$element','$scope'];

    constructor(public $http:IHttpService, public $element:IAugmentedJQuery, public $scope:MyScope) {
            $scope.init = true;
    }

    /*
     * component lifecycle hooks
     * */
    $postLink():void {
    }

    onChange(data:any, field:string):void {
        console.log(field);
        switch (field) {
            case 'useremail':
                this.updateUsername(this.user);
                break;

            case 'username':
                break;

            case 'password':
                break;
        }
    }

    register():void {
        var self = this;
        console.debug('register');
        this.$http.post('http://jworks-registrar.veeteedev.eu/register',
                 this.user
             ).then((response)=> {
             console.dir(response.data);
             self.registerSuccess();
         }, (error)=> {
             console.dir(error);
             self.registerError();
         });

    }

    registerSuccess():void {
        console.debug('validateSuccess');
        this.$scope.init = false;
    }

    registerError():void {
        console.debug('validateError');
    }

    onBlur():void {
        console.debug('onBlur');
    }

    //  update username the moment the user types @.. in the email field.
    updateUsername(data:ICredentials):ICredentials {
        if (data.email) {
            var name:string = data.email.substr(0, data.email.indexOf('@'));
            data.username = name;
        }
        return data;
    }
}
export interface ICredentials {
    username:string;
    email:string;
    password:string;
}
export interface MyScope extends IScope {
    init: boolean;
}
