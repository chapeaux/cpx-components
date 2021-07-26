class CPXTabStream extends HTMLElement {
    static get tag() { return 'cpx-tab-stream'; }
    static get html() {
        return `
<style>
        :host {
            width: 100vw;
            height: 100vh;
            background: #ccc;
        }
        video {
            width: 100%;
        }
</style>
<video id="streambox"></video>`
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = CPXTabStream.html;
        this.video = this.shadowRoot.querySelector('video');
        this.media = new MediaStream();
    }

    connectedCallback() {
        navigator.getUserMedia({
            video: true,
            audio: false
        }, (stream) => {
            this.video.srcObject = stream;
            this.video.play();
        }, error => {
            console.warn('Error! Error! Error!', error)
        })
    }

    video;
    media;

}

window.customElements.define(CPXTabStream.tag, CPXTabStream);