import LoginPage from "../pages/LoginPage";
import SecurePage from "../pages/SecurePage";
import CheckboxesPage from "../pages/CheckboxesPage";

export default class PomManager {

    constructor(page) {
        this.page = page;
        this.loginpage = new LoginPage(page);
        this.securepage = new SecurePage(page);
        this.checkboxespage = new CheckboxesPage(page);
    }

}