globalThis.appEventData = globalThis.appEventData || [];
export const Newsdesk = {
    handleEvent(event) {
        globalThis.appEventData.push(event.toJSON());
    }
}

globalThis.addEventListener('cpx-report', Newsdesk);