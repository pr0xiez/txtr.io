import { Queries } from '../../core/services/queries';
import { Subject } from 'rxjs/Subject';
var SentMessagesDataSource = (function () {
    function SentMessagesDataSource(httpClient, authService) {
        this.httpClient = httpClient;
        this.authService = authService;
        this.messages$ = new Subject;
        this.getSentMessages().subscribe();
    }
    SentMessagesDataSource.prototype.messagesChanged = function (msgs) {
        this.messages$.next(msgs);
    };
    SentMessagesDataSource.prototype.connect = function () {
        return this.messages$.asObservable();
    };
    SentMessagesDataSource.prototype.disconnect = function () {
        // TODO ??
    };
    SentMessagesDataSource.prototype.getSentMessages = function () {
        var _this = this;
        var body = {
            query: Queries.queries.sentMessages
        };
        return this.httpClient.post(this.authService.endpointURL, body)
            .map(function (res) {
            console.log('getSentMessages', res);
            _this.messagesChanged(res.data.sentMsgs);
            return res;
        });
    };
    return SentMessagesDataSource;
}());
export { SentMessagesDataSource };
//# sourceMappingURL=sent.data.js.map