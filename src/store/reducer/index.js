import {
    SEND_ALERT_STATUS
    ,SEND_CALLBACK_STATUS
} from '../action';

const alertStatus = { alertStatus:false, alertText:'提示内容' };
export function alertData(alertData = alertStatus, action) {
    switch (action.type) {
        case SEND_ALERT_STATUS:
            return Object.assign({},alertData,action.data);
        default:
            return alertData;
    }
}
const callbackStatus = { callback:()=>{console.warn('Please inject the callback function.')} };
export function callbackData(callbackData = callbackStatus, action) {
    switch (action.type) {
        case SEND_CALLBACK_STATUS:
            return Object.assign({},callbackData,action.data);
        default:
            return callbackData;
    }
}
