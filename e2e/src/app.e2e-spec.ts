import {UltimaPage} from './app.po';

describe('ultima App', function () {
    let page: UltimaPage;

    beforeEach(() => {
        page = new UltimaPage();
    });

    it('should display welcome message', () => {
        page.navigateTo();
        expect(page.getTitleText()).toEqual('Welcome to Ultima!');
    });

});
