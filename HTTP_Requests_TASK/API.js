// класс с методами к апи:
// 1) method POST url: 'http://78jqd.mocklab.io/json"
// 2) method GET; descr: GET a json resource; url 'http://78jqd.mocklab.io/json/1'
// 3) method PUT; only match if Accept header is for application/json;
// 4) method GET; only match if query parametr is present and in the correct format;

class Http {
    constructor(basicUrl = "http://78jqd.mocklab.io") {
        this.basicUrl = basicUrl;
    }
    changeBasicUrl(url) {
        return  this.basicUrl = url
    };
    post() {
        return fetch(`${this.basicUrl}/json`, {
            method: 'POST',
            body: JSON.stringify({
                "id": 12345,
                "value": "abc-def-ghi"
            })
        }).then((res) => res.json());
    };
    get() {
        return fetch(`${this.basicUrl}/json/1`)
        .then((res) => res.json)
    };
    put() {
        return fetch(`${this.basicUrl}/json/2`, {
            method: 'PUT',
            headers: {
                Accept: 'application/json'
            },
            body: JSON.stringify({
                "id": 1234,
                "value": "abc"
            })
        });
    };
    getSearch(arg = '?q=aaa') {
      return  fetch(`${this.basicUrl}/search${arg}`)
    };
}
let http = new Http;
http.post();
http.get();
http.put();
http.getSearch(arg);
console.log(http);
http.changeBasicUrl(url);
console.log(http);


