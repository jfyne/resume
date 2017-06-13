import { CvPage } from './app.po';

describe('cv App', () => {
  let page: CvPage;

  beforeEach(() => {
    page = new CvPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
