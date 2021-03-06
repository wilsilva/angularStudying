/**
 * Created by william on 12/09/15.
 */

var homeServices = angular.module('homeServices', []);

homeServices.factory('PessoaList', ['$resource', function ($resource) {
    return $resource("http://localhost/studyingPhpRest/listpessoas", {},{
        get: {  method: 'GET', cache: false, isArray: true   }
   });
}]);

homeServices.factory("Pessoa",['$resource',function($resource){
   return $resource("http://localhost/studyingPhpRest/pessoa",{},{ 
       save: {  method: 'POST', cache: false, isArray: false    }
   });
}]);
