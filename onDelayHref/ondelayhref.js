var dataDelayedTags = document.querySelectorAll('[data-delayed-href], [data-delayed-duration]');
function onClick(event) {
    event.preventDefault();
    console.log('kliknięte z opóźnieniem');
}
var checkTag = function (tag) {
    if (tag.tagName === "A") {
        return true;
    }
    else
        return false;
};
var areBothAttributesExistsOnATag = function (tag) {
    if (tag.hasAttribute("data-delayed-href") && tag.hasAttribute("data-delayed-duration"))
        return true;
    return false;
};
var durationAttr = function (tag) {
    var duration = tag.getAttribute("data-delayed-duration");
    var durationReg = /^[0-9]*$/;
    if (!durationReg.test(duration))
        throw new Error("It accepts only numbers.");
    var durationNumber = parseInt(duration);
    return durationNumber;
};
var delayedHref = function (tag, hrefURL) {
    var hrefAtt = document.createAttribute("href");
    hrefAtt.value = hrefURL.toString();
    tag.setAttributeNode(hrefAtt);
};
dataDelayedTags.forEach(function (tag) {
    if (checkTag(tag) === false) {
        console.log("This " + tag.tagName + " is not  a 'A' tag.");
        if (tag.hasAttribute('data-delayed-href'))
            tag.removeAttribute('data-delayed-href');
        if (tag.hasAttribute('data-delayed-duration'))
            tag.removeAttribute('data-delayed-duration');
    }
    else {
        if (!areBothAttributesExistsOnATag(tag))
            throw new Error("One of the attributes ['data-delayed-duration' or 'data-delayed-href'] is missing.");
        var dataDelayedHrefValue = tag.getAttribute('data-delayed-href');
        var durationAtt = tag.getAttribute('data-delayed-duration');
        var url_1 = new URL(dataDelayedHrefValue, window.location.href);
        if (tag.getAttribute('href') === null)
            delayedHref(tag, url_1);
        tag.setAttribute('href', url_1.toString());
        var duration_1 = durationAttr(tag);
        console.log(duration_1);
        tag.addEventListener('click', function (e) {
            e.preventDefault();
            var time = setTimeout(function () {
                onClick(e);
                window.location.href = url_1.toString();
            }, duration_1);
            clearTimeout(time);
        });
    }
});
