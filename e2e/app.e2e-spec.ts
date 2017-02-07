import { UltimaPage } from './app.po';

describe('ultima App', function() {
  let page: UltimaPage;

  beforeEach(() => {
    page = new UltimaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
