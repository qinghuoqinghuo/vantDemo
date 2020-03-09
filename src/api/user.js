import request from '@/utils/request'

/**
 * 获取直播资源
 * */
export function getLiveSource(data) {
  return request({
    url: 'https://api.eyunzhu.com/plugin/eyunzhu_vatfs_api/api/getLiveSource',
    method: 'get',
    data
  })
}
/**
 * 获取影视搜索列表id
 * */
export function getVideoList(data){
  return request({
      url:'https://api.eyunzhu.com/api/vatfs/resource_site_collect/search?kw='+ data.kw+'&per_page='+ data.per_page+'&page='+data.page,
      method:'get',
      data
  })
}
/**
 * 根据id获取影视详情信息
 * */
export function getVideoDetail(data){
    return request({
        url:'https://api.eyunzhu.com/api/vatfs/resource_site_collect/getVDetail?vid='+data.vid,
        method:'get',
        data
    })
}
