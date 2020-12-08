// 参考资料：https://jsmanifest.com/the-publish-subscribe-pattern-in-javascript/
function pubSub() {
    const subscribers = {};

    function publish(eventName, data) {
        if (!Array.isArray(subscribers[eventName])) {
            return;
        }
        subscribers[eventName].forEach((callback) => {callback(data)})
    }

    function subscribe(eventName, callback) {
        if (!Array.isArray(subscribers[eventName])) {
            subscribers[eventName] = [];
        }
        subscribers[eventName].push(callback);
    }

    function unsubscribe(eventName, callback) {
        if (!Array.isArray(subscribers[eventName])) {
            return;
        } 
        subscribers[eventName].splice(subscribers[eventName].indexOf(callback))
    }

    return {
        publish,
        subscribe,
        unsubscribe
    }
}

// test
function showMeTheMoney(money) {
    console.log(money)
}

const ps = pubSub()
ps.subscribe('show-money', showMeTheMoney)
ps.publish('show-money', 100000)
ps.unsubscribe('show-money', showMeTheMoney)
ps.publish('show-money', 100000)