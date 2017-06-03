import { PostownikPage } from './app.po';

describe('postownik App', () => {
  let page: PostownikPage;

  beforeEach(() => {
    page = new PostownikPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
