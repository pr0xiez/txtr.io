import { Queries } from '../../core/services/queries';
import { Subject } from 'rxjs/Subject';
/**
 * @author ADH - 9.13.17 - <alex.hall@united-installs.com>
 * @description handles data stream needed by queued component
 */
var TypesDataSource = (function () {
    function TypesDataSource(httpClient, authService) {
        this.httpClient = httpClient;
        this.authService = authService;
        this.messages$ = new Subject;
        this.getQueuedMessages().subscribe();
    }
    TypesDataSource.prototype.messagesChanged = function (msgs) {
        this.messages$.next(msgs);
    };
    TypesDataSource.prototype.connect = function () {
        return this.messages$.asObservable();
    };
    TypesDataSource.prototype.disconnect = function () {
        // TODO ??
    };
    TypesDataSource.prototype.getQueuedMessages = function () {
        var _this = this;
        var body = {
            query: Queries.queries.messageTypes
        };
        return this.httpClient.post(this.authService.endpointURL, body)
            .map(function (res) {
            console.log('getMessageTypes', res);
            _this.messagesChanged(res.data.msgTypes);
            return res;
        });
    };
    return TypesDataSource;
}());
export { TypesDataSource };
//# sourceMappingURL=type.data.js.map