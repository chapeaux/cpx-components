globalThis.appEventData = globalThis.appEventData || [];
export const Newsdesk = {
    handleEvent(event) {
        const details = event.toJSON();
        globalThis.appEventData.push(details);
        globalThis.dispatchEvent(new CustomEvent('newsflash',{
            composed: true,
            bubbles: true,
            detail: details
        }));
    }
}
// Test
globalThis.addEventListener('cpx-report', Newsdesk);