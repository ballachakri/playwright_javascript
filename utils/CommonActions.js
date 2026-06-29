
export default class CommonActions {

    constructor(page) {
        this.page = page;
    }

    async navigateTo(url) {
        await this.page.goto(url);
    }

    async enterText(selector, item) {
        await this.page.fill(selector, item);
    }

    async click(selector) {
        await this.page.click(selector);
    }

    async getText(selector) {
        return await this.page.textContent(selector);
    }

    async isCheckBoxChecked(selector){
        return await this.page.isChecked(selector);
    }
}