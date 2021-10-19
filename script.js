/**
 * Converts given text to speech
 * @param {string} text - Message to speak
 * @return {void} Nothing
 */
function speak(text) {
    console.log(text);
    var msg = new SpeechSynthesisUtterance();
    speechSynthesis.cancel();

    msg.lang = "en-US";
    msg.text = text;

    msg.onend = (e) => {
        console.log('Finished in ' + (e.elapsedTime / 1000).toPrecision(3) + ' seconds.');
    };

    speechSynthesis.speak(msg);
}

var sampleText = "TP Vision is a dedicated company in the world of visual digital entertainment; fully committed to the renowned Philips TV brand."

var textareaElement = document.querySelector("#message");
var submitButton = document.querySelector("#submit");

textareaElement.value = sampleText;

['mouseover', 'focus', 'click'].forEach(evt => {
    textareaElement.addEventListener(evt, () => speak(textareaElement.value));
    submitButton.addEventListener(evt, () => speak(submitButton.value));
});

['mouseleave'].forEach(evt => {
    textareaElement.addEventListener(evt, () => speechSynthesis.cancel());
    submitButton.addEventListener(evt, () => speechSynthesis.cancel());
});
