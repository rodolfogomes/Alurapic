angular.module('fotoDiretiva',[])
    .directive('minhaFoto',function(){
        var ddo = {}
        // Define que a diretiva pode ser usada como atributo e elemento. 
       //Uso como elemento <meu-painel></meu-painel>
        ddo.restrict='AE';
        ddo.transclude = true;
        ddo.scope = {
            titulo: '@'
        }; 

        ddo.templateUrl = 'js/directives/minha-foto.html'; 
           
        return ddo;
    }); 