app.controller('historyController', 
    ['$scope', '$http', '$location', 'requestHistory', 'requestResult',
    function ($scope, $http, $location, requestHistory, requestResult) {
    let recentHistory = requestHistory.getHistory().slice().reverse();
    $scope.historyList = recentHistory.slice(0,10);
    $scope.clearHistory = function (){
        requestHistory.setHistory([]);
        $scope.historyList = [];
    };
    $scope.viewResult = function(oRequest){
        requestResult.setURL(oRequest.url);
        requestResult.setMethod(oRequest.method);
        requestResult.setBody(oRequest.body);
        requestResult.setResponse(oRequest.data);
        requestResult.setHeaders(oRequest.headers);
        requestResult.setContentType(oRequest.contentType);
        let path = "result/" + "RANDOMKEY"; //TODO:// Generate some random request id ..
        $location.path(path);
    };

    $scope.showMore = function(length){
        $scope.historyList = recentHistory.slice(0, length + 10);
    };
}]);