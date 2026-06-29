import { allure } from 'allure-playwright';
import PomManager from '../pom_manager/PomManager';

export default class CommonHooks {
    
    static beforeEach(page){
        return new PomManager(page);
    }

    static async afterEach(page) {
        const screenshot = await page.screenshot();
        await allure.attachment('Screenshot' , screenshot , 'image/png');
        await page.close();
    }
}

