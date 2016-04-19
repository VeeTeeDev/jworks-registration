import IDirective = angular.IDirective;
import IScope = angular.IScope;
import IAugmentedJQuery = angular.IAugmentedJQuery;
import IAttributes = angular.IAttributes;
import INgModelController = angular.INgModelController;
import IQService = angular.IQService;
import IHttpService = angular.IHttpService;
export class UniqueUsernameDirective implements IDirective {
    static NAME:string = "uniqueUsername";

    constructor(private $q:IQService, private $http:IHttpService) {
    }

    restrict:string = 'A';
    require:string = '^?ngModel';

    link:angular.IDirectiveLinkFn = (scope:IScope, el:IAugmentedJQuery, attrs:IAttributes, ctrl:INgModelController) => {
        ctrl.$asyncValidators[UniqueUsernameDirective.NAME] = (modelValue, viewValue)=> {
            var deferred = this.$q.defer();
            if (modelValue) {
                if (modelValue && modelValue.length > 3 && modelValue.length < 21) {
                    console.log('ok');
                    this.$http.post('http://jworks-registrar.veeteedev.eu/checkusername',
                        {username: modelValue}
                    ).then((response)=> {
                        console.dir(response.data);
                        deferred.resolve();
                    }, (error)=> {
                        console.dir(error.data.error);
                        deferred.reject('Username has already been taken')
                    });
                }
            } else {
                deferred.reject('required');
            }
            return deferred.promise;
        };
    };

    static factory():any {
        const directive =
            ($q:IQService, $http:IHttpService) => new UniqueUsernameDirective($q, $http);

        directive.$inject = ['$q', '$http'];

        return directive;
    }
}
