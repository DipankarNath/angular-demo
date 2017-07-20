import { AngularDemosPage } from './app.po';

describe('angular-demos App', () => {
  let page: AngularDemosPage;

  beforeEach(() => {
    page = new AngularDemosPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
