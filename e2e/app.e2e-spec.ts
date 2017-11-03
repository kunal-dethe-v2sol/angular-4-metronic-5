import { RecproWebsitePage } from './app.po';

describe('recpro-website App', () => {
  let page: RecproWebsitePage;

  beforeEach(() => {
    page = new RecproWebsitePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
