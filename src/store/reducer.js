import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM } from './actionTypes'
const defaultState = {
  inputValue: 'Write Something',
  list: ['早上4点起床，锻炼身体', '中午下班游泳一小时'],
}
const reducer = (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
  console.log(state)
  if (action.type === CHANGE_INPUT) {
    newState.inputValue = action.value
    return newState
  }
  if (action.type === ADD_ITEM) {
    //根据type值，编写业务逻辑
    if (!newState.inputValue) {
      return
    }
    newState.list.push(newState.inputValue) //push新的内容到列表中去
    newState.inputValue = ''
    return newState
  }
  if (action.type === DELETE_ITEM) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index, 1) //删除数组中对应的值
    return newState
  }
  return newState
}
export default reducer
