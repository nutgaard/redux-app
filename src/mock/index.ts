// tslint:disable no-console
import FetchMock, { Middleware, MiddlewareUtils } from 'yet-another-fetch-mock';
import { boredomActivity } from './boredomActivity';

const loggingMiddleware: Middleware = (request, response) => {
    console.groupCollapsed(request.url);
    console.groupCollapsed('config');
    console.log('url', request.url);
    console.log('queryParams', request.queryParams);
    console.log('pathParams', request.pathParams);
    console.log('body', request.body);
    console.groupEnd();

    try {
        console.log('response', JSON.parse(response.body));
    } catch (e) {
        console.log('response', response);
    }

    console.groupEnd();
    return response;
};

console.log('#############');
console.log(' USING MOCKS');
console.log('#############');

const mock = FetchMock.configure({
    enableFallback: true,
    middleware: MiddlewareUtils.combine(
        MiddlewareUtils.delayMiddleware(500),
        loggingMiddleware
    )
});

mock.get('https://www.boredapi.com/api/activity', boredomActivity);
