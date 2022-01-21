$(function () {
    // Search Items
    $('#search').on('keyup paste', function (e) {
        var query = $(this).val().toLowerCase();
        var $el = $('.navigation > .navbar-collapse > ul');

        $el.find('.tree-item').addClass('tree-closed');
        $el.find('.itemMembers').hide();
        $el.find('a').removeClass('highlight');

        if (query) {
            $el.find('a').each(function () {
                var $item = $(this);

                if ($item.text().toLowerCase().indexOf(query) !== -1) {
                    $item.addClass('highlight');
                    $item.parents('.tree-item.tree-closed').removeClass('tree-closed');
                    $item.parents('.itemMembers:eq(0)').show();
                }
            });
        } else {
            treeCheckAutoOpen($el);
        }

        $el.scrollTop(0);
    });

    // Toggle when click an item element
    $('.navigation').on('click', '.title', function (e) {
        if ($(this).parent().closest('.item').hasClass('currentItem')) {
            e.preventDefault();
        }

        $(this).parent().find('> .itemMembers').toggle();
    });

    // Tree
    (function () {
        $('.navigation .tree-icon').on('click', function () {
            $(this).parents('.tree-item:eq(0)').toggleClass('tree-closed');
        });
        window.treeCheckAutoOpen = function (listEl) {
            var items = listEl.find('> .tree-item');
            if (items.length === 1) {
                items.toggleClass('tree-closed');
                treeCheckAutoOpen(items.find(' > .list'));
            }
        };
        treeCheckAutoOpen($('.navigation > .navbar-collapse > ul'));
    })();

    // Show an item related a current documentation automatically
    var filename = $('.page-title').data('filename').replace(/\.[a-z]+$/, '');
    var $currentItem = $('.navigation .item[data-name*="' + filename + '"]:eq(0)');

    if ($currentItem.length) {
        $currentItem
            .show()
            .addClass('currentItem')
            .find('.itemMembers')
            .show();

        $currentItem.parents('.tree-item').removeClass('tree-closed');

        setTimeout(function () {
            $('.navigation > .navbar-collapse > .list').scrollTop($currentItem.find('> .title').offset().top - $('.navigation > .navbar-collapse > .list').offset().top - 10);
        });
    }

    // Auto resizing on navigation
    var _onResize = function () {
        var height = $(window).height();
        var $el = $('.navigation');

        $el.height(height).find('> .navbar-collapse > .list').height(height - $el.find('.applicationName').outerHeight(true) - $el.find('.search').outerHeight(true));

        // Classes tree
        (function () {
            var width = 0;
            $('.class-tree').each(function (i, el) {
                width = Math.max($(el).find('th .title').outerWidth(true), width);
            });
            $('.class-tree th').css('width', width + 25);
            $('.class-tree td div').css('width', $('header .applicationName').width() - width - 25);
        })();
    };

    $(window).on('resize', _onResize);
    $(document).ready(function () {
        _onResize();
    });

    // disqus code
    if (config.disqus) {
        $(window).on('load', function () {
            var disqus_shortname = config.disqus; // required: replace example with your forum shortname
            var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
            dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
            var s = document.createElement('script'); s.async = true;
            s.type = 'text/javascript';
            s.src = 'http://' + disqus_shortname + '.disqus.com/count.js';
            document.getElementsByTagName('BODY')[0].appendChild(s);
        });
    }

    $(".nav-tabs a").click(function () {
        $(this).tab('show');
    });
});