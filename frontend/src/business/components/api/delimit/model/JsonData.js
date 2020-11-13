/* 用例等级 */
export const PRIORITY = [
  {name: 'P0', id: 'P0'},
  {name: 'P1', id: 'P1'},
  {name: 'P2', id: 'P2'},
  {name: 'P3', id: 'P3'}
]

export const OPTIONS = [
  {value: 'HTTP', name: 'HTTP'},
  {value: 'DUBBO', name: 'DUBBO'},
  {value: 'TCP', name: 'TCP'},
  {value: 'SQL', name: 'SQL'}
]

export const DEFAULT_DATA = [{
  "id": "root",
  "name": "默认模块",
  "level": 0,
  "children": [],
}]

export const REQ_METHOD = [
  {id: 'GET', label: 'GET'},
  {id: 'POST', label: 'POST'}
]

export const API_STATUS = [
  {id: 'Prepare', label: '未开始'},
  {id: 'Underway', label: '进行中'},
  {id: 'Completed', label: '已完成'}
]

export const API_METHOD_COLOUR = [
  ['GET', "#61AFFE"], ['POST', '#49CC90'], ['PUT', '#fca130'],
  ['PATCH', '#E2EE11'], ['DELETE', '#f93e3d'], ['OPTIONS', '#0EF5DA'],
  ['HEAD', '#8E58E7'], ['CONNECT', '#90AFAE'],
  ['DUBBO', '#C36EEF'], ['SQL', '#0AEAD4'], ['TCP', '#0A52DF'],
]

export const REQUIRED = [
  {name: '必填', id: true},
  {name: '非必填', id: false}
]
