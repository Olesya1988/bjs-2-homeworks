class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        if(id === undefined) {
            throw new Error('Таймер не задан');
        }
        
        let even = (element) => element.id === id;

        if(this.alarmCollection.some(even)) {
            console.error('Такой таймер уже создан');
        } else {
            this.alarmCollection.push({id, time, callback});
        }
    }

    removeClock(id) {
        let removeId = this.alarmCollection.findIndex(item => item.id === id);
        
        if(removeId !== -1) {
            this.alarmCollection.splice(removeId, 1);
            return true;            
        } else {
            return false;
        }
    }

    getCurrentFormattedTime() {
        let today = new Date;
        let currentHours = today.getHours();
        let currentMinuts = today.getMinutes();

        if(currentHours < 10) {
            currentHours = `0${currentHours}`;
        }

        if(currentMinuts < 10) {
            currentMinuts = `0${currentMinuts}`;
        }

        return `${currentHours}:${currentMinuts}`;
    };

    start() {
        if(this.timerId) {
            return;            
        }

        let checkClock = (item) => {
            if(this.getCurrentFormattedTime() === item.time) {
                item.callback();
            }
        }

        this.timerId = setInterval(() => {
            this.alarmCollection.forEach(item => {
                checkClock(item);
            });
        }, 1000);        
    }

    stop() {
        if(this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        this.alarmCollection.forEach((item) => {
            console.log(`Таймер ${item.id} заведен на ${item.time}`);
        });
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}

function testCase() {
    let someAlarmClock = new AlarmClock();
    const anyValue = () => console.log('Время просыпаться :)');
    const anyValue2 = () => console.log('Пора вставать!');
    const anyValue3 = () => console.log('Подъем! Мы опазываем!');

    someAlarmClock.addClock('16:57', anyValue(), 1);

    someAlarmClock.addClock('16:58', anyValue2(), 2);

    someAlarmClock.addClock('16:59', anyValue3(), 3);    

    someAlarmClock.printAlarms();

    someAlarmClock.start();
}

testCase();