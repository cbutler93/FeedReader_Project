$(function() {

    describe('RSS Feeds', function() {

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('have valid URLs', function() {
            allFeeds.forEach(feed => {
                expect(feed.url.length > 0).toBe(true);
            });
        });

        it('have valid names', function() {
            allFeeds.forEach(feed => {
                expect(feed.name.length > 0).toBe(true);
            });
        });
    });

    describe('The Menu', function() {
        var body = document.querySelector('body');
        var menuIcon = document.querySelector('.menu-icon-link');
        var menuHidden;

        it('is hidden by default', function() {
            expect(body.classList.contains('menu-hidden')).toBe(true);
        });

        it('toggles in/out when clicked', function() {
            /* Click the menuIcon twice. After the first click, menu-hidden should not be a class of the body. After the second click, menu-hidden should be a class of the body.*/
            for (let i = 0; i < 2; i++) {
                menuIcon.click();
                menuHidden = body.classList.contains('menu-hidden');
                if (i === 0) { // First Click.
                    expect(menuHidden).toBe(false);
                } else { // Second Click.
                    expect(menuHidden).toBe(true);
                }
            }
        });
    });

    describe('Initial Entries', function() {

        beforeEach(function(done) {
            /* Load feed with first ID and pass in done for loadFeed to call when the request status is determined (async work complete). */
            loadFeed(0, done);
        });

        it('should have at least a single entry', function() {
            const feed = document.querySelector('.feed');
            expect(feed.childNodes.length > 0).toBe(true);
        });
    });

    describe('New Feed Selection', function() {
        var feedOne, feedTwo;

        beforeAll(function(done) {
            // Load first feed and store links in feedOne.
            loadFeed(0, function() {
                feedOne = document.querySelectorAll('.feed a');
                // Load second feed and store links in feedTwo.
                loadFeed(1, function() {
                    feedTwo = document.querySelectorAll('.feed a');
                    done(); // All async work complete.
                });
            });
        });

        it('should have different content', function() {
            /* Check to make sure the first nodes in each NodeList are not equal (content has changed). */
            expect(feedOne[0].isEqualNode(feedTwo[0])).toBe(false);
        });
    });
}());