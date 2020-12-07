// Documentation of the HTTP protocol for mandatory / optionnal fields : https://quicwg.org/base-drafts/draft-ietf-quic-http.html#name-http-request-lifecycle

export type ConnectorRequest = {
    url: string;
    method:
        | 'GET'
        | 'PUT'
        | 'POST'
        | 'DELETE'
        | 'HEAD'
        | 'CONNECT'
        | 'OPTIONS'
        | 'TRACE'
        | 'PATCH';
    request: {
        headers: Record<string, string | string[]>;
        body?: unknown;
    };
    response: {
        headers: Record<string, string | string[]>;
        body?: unknown;
        status?: number;
    };
};
