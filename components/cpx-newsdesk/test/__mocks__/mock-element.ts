export class MockElement {
    id = '';
    tag = 'HTML';
    innerHTML = '';
    value = '';
    name = '';
    disabled = false;
    style: any = { display: 'block', backgroundColor: 'red' };
    children: MockElement[] = [];
    classList = new class {
        data: string[] = [];
        contains(s: string): boolean {
            return this.data.find(a => a == s) != null;
        }
        add(s: string) {
            this.data.push(s);
        }
    }();
    constructor(tag = '', id = '') {
        this.id = id;
        this.tag = tag;
    }
    createElement(t: string, id = '') {
        return new MockElement(t, id);
    }
    appendChild(x: any) {
        this.children.push(x);
        return x;
    }
    clear() {
        this.children = [];
    }
    querySelector(sel: string) {
        // too hard to implement correctly, so just hack something
        let list = this.getElementsByTagName(sel);
        return list.length > 0 ? list[0] : this.children[0];
    }
    querySelectorAll(sel: string) {
        // too hard to implement correctly, so just return all children
        return this.children;
    }
    getElementById(id: string): any {
        // if not found, just CREATE one!!
        return this.children.find(x => x.id == id) || this.appendChild(this.createElement('', id));
    }
    getElementsByClassName(classname: string): any[] {
        return this.children.filter((x: any) => x.classList.contains(classname));
    }
    getElementsByName(name: string): any[] {
        return this.children.filter((x: any) => x.name == name);
    }
    getElementsByTagName(tag: string): any[] {
        return this.children.filter((x: any) => x.tag == tag.toUpperCase());
    }
}