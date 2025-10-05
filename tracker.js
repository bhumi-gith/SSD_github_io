// Q6: Universal Click & Page View Tracker
(function() {
    function getObjectType(target) {
        if (target.tagName === 'IMG') return 'image';
        if (target.tagName === 'SELECT') return 'drop_down';
        if (target.tagName === 'INPUT') return target.type === 'text' ? 'text' : target.type;
        if (target.tagName === 'TEXTAREA') return 'text';
        if (target.tagName === 'BUTTON') return 'button';
        if (target.tagName === 'A') return 'link';
        return target.tagName.toLowerCase();
    }
    // Log page view
    console.log(JSON.stringify({
        timestamp: new Date().toISOString(),
        type_of_event: 'view',
        event_object: 'page',
        url: window.location.pathname
    }));
    // Log all click events
    document.addEventListener('click', function(event) {
        let target = event.target;
        let objectType = getObjectType(target);
        console.log(JSON.stringify({
            timestamp: new Date().toISOString(),
            type_of_event: 'click',
            event_object: objectType,
            tag: target.tagName.toLowerCase(),
            id: target.id || undefined,
            class: target.className || undefined
        }));
    }, true);
})();
