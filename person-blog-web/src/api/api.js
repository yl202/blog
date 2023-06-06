import { get } from '../requirest/http'

export const testGetApi = p => get('user/login', p)
// export const testPostApi = p => post('user/login', p)
// export const testGetSynamicApi = p => getDynamicynamic('user/login', p)
// export const testExportApi = p => getFileUseBlobByPost('user/login', p)