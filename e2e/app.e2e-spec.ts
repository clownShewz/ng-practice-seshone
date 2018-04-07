import { NgPracticeSeshonePage } from './app.po';

describe('ng-practice-seshone App', () => {
  let page: NgPracticeSeshonePage;

  beforeEach(() => {
    page = new NgPracticeSeshonePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
