afterEach(() => {
    jest.resetModules();
});

describe('config', () => {
    it('bilibilib cookie', () => {
        process.env.BILIBILI_COOKIE_12 = 'cookie1';
        process.env.BILIBILI_COOKIE_34 = 'cookie2';

        import config from '../lib/config').value;
        expect(config.bilibili.cookies).toMatchObject({
            12: 'cookie1',
            34: 'cookie2',
        });

        delete process.env.BILIBILI_COOKIE_12;
        delete process.env.BILIBILI_COOKIE_34;
    });

    it('twitter token', () => {
        process.env.TWITTER_TOKEN_12 = 'token1';
        process.env.TWITTER_TOKEN_34 = 'token2';

        import config from '../lib/config').value;
        expect(config.twitter.tokens).toMatchObject({
            12: 'token1',
            34: 'token2',
        });

        delete process.env.TWITTER_TOKEN_12;
        delete process.env.TWITTER_TOKEN_34;
    });

    it('email config', () => {
        process.env['EMAIL_CONFIG_xx.qq.com'] = 'token1';
        process.env['EMAIL_CONFIG_oo.qq.com'] = 'token2';

        import config from '../lib/config').value;
        expect(config.email.config).toMatchObject({
            'xx.qq.com': 'token1',
            'oo.qq.com': 'token2',
        });

        delete process.env['EMAIL_CONFIG_xx.qq.com'];
        delete process.env['EMAIL_CONFIG_oo.qq.com'];
    });
});