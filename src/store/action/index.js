
// 弹窗状态
const SEND_ALERT_STATUS = 'SEND_ALERT_STATUS';
// 关闭、打开弹窗
function alertOperateFn(text,cb){
    return (dispatch, getState)=>{
        let {alertData:{alertStatus},callbackData:{callback}}=getState();
        dispatch({type: SEND_ALERT_STATUS,data:{alertStatus:!alertStatus, alertText:text}}) // 关闭弹窗
        if(cb){
            callback() // 回调
        }
    }
}
// 如果点击确定，要执行回调，先执行callback
const SEND_CALLBACK_STATUS = 'SEND_CALLBACK_STATUS';
function alertCallbackFn(func){
    return (dispatch, getState)=>{
        func() // 回调
    }
}
export {
    SEND_ALERT_STATUS
    ,alertOperateFn
    ,SEND_CALLBACK_STATUS
    ,alertCallbackFn
};