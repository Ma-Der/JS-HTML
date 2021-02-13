const dataDelayedTags = document.querySelectorAll('[data-delayed-href], [data-delayed-duration]');

function onClick(event: Event){
    event.preventDefault();
    console.log('kliknięte z opóźnieniem');
}
const checkTag = (tag: Element): boolean => {
    if (tag.tagName === "A") {
      return true;
    } else return false;
  };

const areBothAttributesExistsOnATag = (tag: Element): boolean => {
  if (tag.hasAttribute("data-delayed-href") && tag.hasAttribute("data-delayed-duration")) return true;
  return false;
  };

  const durationAttr = (tag: Element) => {
    const duration = tag.getAttribute("data-delayed-duration") as string;
    const durationReg = /^[0-9]*$/;
    if(!durationReg.test(duration)) throw new Error("It accepts only numbers.");
    const durationNumber = parseInt(duration);
    return durationNumber;
  }

  const delayedHref = (tag: Element) => {
    const dataDelayedHrefValue = tag.getAttribute('data-delayed-href') as string;
    const hrefAtt = document.createAttribute("href");
    hrefAtt.value = dataDelayedHrefValue;
    tag.setAttributeNode(hrefAtt);
  };

  dataDelayedTags.forEach(tag => {
    if (checkTag(tag) === false) {
        if(tag.hasAttribute('data-delayed-href')) tag.removeAttribute('data-delayed-href');
        if(tag.hasAttribute('data-delayed-duration')) tag.removeAttribute('data-delayed-duration');
    } else {
        if(!areBothAttributesExistsOnATag(tag)) throw new Error("One of the attributes ['data-delayed-duration' or 'data-delayed-href'] is missing.");

        const dataDelayedHrefValue = tag.getAttribute('data-delayed-href') as string;

        if(tag.getAttribute('href') === null) delayedHref(tag);
        tag.setAttribute('href', dataDelayedHrefValue);
        
        const duration = durationAttr(tag);

        tag.addEventListener('click', (e) => {
            e.preventDefault();
            onClick(e);
            setTimeout(() => {
                window.location.href = dataDelayedHrefValue;
            }, duration);
        });
    }
});