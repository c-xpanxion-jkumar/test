import { Selector } from 'testcafe';

fixture `Getting Started`
    .page `https://www.cnn.com`;

test('Navigation tests', async t => {
    await t
    .click(Selector('#nav',{ visibilityCheck: true }).find('.edition-picker__current-edition'))
    .expect(Selector('.edition-picker__radio-button-label').innerText).eql('Set edition preference:')
    .click(Selector('#menu'))
    .expect(Selector('.nav-open').exists).ok();
});

test('Hamburger navigation opens', async t => {
    await t
    .click(Selector('#menu'))
    .expect(Selector('.nav-open').exists).ok();
});

test('Weather card check in the footer',async t => {
    await t
    .expect(Selector('.l-footer__tools--weather').exists).ok('Weather card is available in footer')
    .expect(Selector('.el-weather__footer-temperature .js-temp').innerText).within(0,100)
})


test('Hamburger navigation opens', async t => {
    await t
    .click(Selector('#menu'))
    .expect(Selector('.nav-open').exists).ok();
});

test('Weather card check in the footer',async t => {
    await t
    .expect(Selector('.l-footer__tools--weather').exists).ok('Weather card is available in footer')
    .expect(Selector('.el-weather__footer-temperature .js-temp').innerText).within(0,100)
})