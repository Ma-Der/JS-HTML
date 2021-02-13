class getAllParams {
    url: string;
    
    constructor(url: string) {
        this.url = url;
    }

    getParams() {
        const regExp = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i;
        let url: URL;
        if (regExp.test(this.url)) {
            url = new URL(this.url);
        } else url = new URL("http://" + this.url);
        let searchParams = new URLSearchParams(url.search);
        let obj = {};
        searchParams.forEach((value, key) => obj = {...obj, ...{[key]: value}});
        return JSON.stringify(obj);
    }
}

const urlString = "http://url.com/post?page=10&id=1" ;
const urlString1 = "url.com/post?page=20&id=2";


const getParam = new getAllParams(urlString).getParams();
const getParam1 = new getAllParams(urlString1).getParams();

console.log(getParam);
console.log(getParam1);