import { Queries } from '../../core/services/queries';
import { Subject } from 'rxjs/Subject';
/**
 * @author ADH - 9.13.17 - <alex.hall@united-installs.com>
 * @description handles data stream needed by queued component
 */
var QueuedDataSource = (function () {
    function QueuedDataSource(httpClient, authService) {
        this.httpClient = httpClient;
        this.authService = authService;
        this.messages$ = new Subject;
        this.getQueuedMessages().subscribe();
    }
    QueuedDataSource.prototype.messagesChanged = function (msgs) {
        this.messages$.next(msgs);
    };
    QueuedDataSource.prototype.connect = function () {
        return this.messages$.asObservable();
    };
    QueuedDataSource.prototype.disconnect = function () {
        // TODO ??
    };
    QueuedDataSource.prototype.getQueuedMessages = function () {
        var _this = this;
        var body = {
            query: Queries.queries.queuedMessages
        };
        return this.httpClient.post(this.authService.endpointURL, body)
            .map(function (res) {
            console.log('getQueuedMessages', res);
            _this.messagesChanged(res.data.queuedMsgs);
            return res;
        });
    };
    return QueuedDataSource;
}());
export { QueuedDataSource };
//# sourceMappingURL=queued.data.js.map