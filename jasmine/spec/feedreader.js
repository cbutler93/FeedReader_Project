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

    /* TODO: Write a new test suite named "Initial Entries" */

    describe('Initial Entries', function() {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

        beforeEach(function(done) {
            /* Load feed with first ID and pass in done function for loadFeed to call when the request status is determined and loadFeed is complete. */
            loadFeed(0, done);
        })

        it('should have at least a single entry', function() {
            const feed = document.querySelector('.feed');
            expect(feed.childNodes.length > 0).toBe(true);
        })
    });
    /* TODO: Write a new test suite named "New Feed Selection" */

    /* TODO: Write a test that ensures when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     * Remember, loadFeed() is asynchronous.
     */
}());