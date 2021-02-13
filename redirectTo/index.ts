function redirectTo(nextPageUrl: string) {
  const urlReg = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i;
  const actualURL = window.location.href;

  if (/^\/.*$/gi.test(nextPageUrl))
    nextPageUrl = actualURL + nextPageUrl.slice(1);
  if (!urlReg.test(nextPageUrl)) nextPageUrl = actualURL + nextPageUrl;
  const dataNextPageElement = document.querySelectorAll("[data-next-page]");
  if (dataNextPageElement.length !== 1)
    throw new Error(
      "There's got to be only one element with attribute [data-next-page]"
    );

  const tag = dataNextPageElement[0] as HTMLElement;

  function scroll() {
    const scrollTop = document.body.scrollTop - tag.offsetTop;
    const clientBottom = tag.clientHeight - document.body.clientHeight / 2;
  
    if (scrollTop >= clientBottom) {
      window.location.href = nextPageUrl;
    }
  }

  window.addEventListener("scroll", scroll);
}

redirectTo("http://www.onet.pl");
