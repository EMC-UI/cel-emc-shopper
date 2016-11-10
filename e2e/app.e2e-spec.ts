import { CelEmcShopperPage } from './app.po';

describe('cel-emc-shopper App', function() {
  let page: CelEmcShopperPage;

  beforeEach(() => {
    page = new CelEmcShopperPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
