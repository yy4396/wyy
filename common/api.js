import { baseUrl } from './config.js'

export function topList(){
	
	let listIds=['3','0','2','1'];
	
	return new Promise(function(reslove,reject){
		uni.request({
			url:`${baseUrl}/toplist/detail`,
			method:'GET',
			data:{},
			success:res=>{
				let result = res.data.list;
			    result.length= 4;
				for(var i=0;i<listIds.length;i++){
					result[i].listId = listIds[i];
				}
				reslove(result);
			},
			fail: () => {},
			complete: () => {}
		});
	});
}

export function list(listId){
	let Id=['19723756','3779629','2884035','3778678'];
	for(var i=0;i<Id.length;i++){
		return uni.request({
			url:`${baseUrl}/playlist/detail?id=${Id[i]}`,
			method:'GET'
		});
	}
}

//http://localhost:3000/song/detail?ids=1885421530

export function songDetail(songId){
		return uni.request({
			url:`${baseUrl}/song/detail?ids=${songId}`,
			method:'GET'
		});
}

//http://localhost:3000/simi/song?id=1885421530

export function songSimi(songId){
		return uni.request({
			url:`${baseUrl}/simi/song?id=${songId}`,
			method:'GET'
		});
}
//http://localhost:3000/comment/music?id=1885421530
export function songComment(songId){
		return uni.request({
			url:`${baseUrl}/comment/music?id=${songId}`,
			method:'GET'
		});
}
//http://localhost:3000/lyric?id=1885421530
export function songLyric(songId){
		return uni.request({
			url:`${baseUrl}/lyric?id=${songId}`,
			method:'GET'
		});
}
//http://localhost:3000/song/url?id=1885421530
export function songUrl(songId){
		return uni.request({
			url:`${baseUrl}/song/url?id=${songId}`,
			method:'GET'
		});
}

//http://localhost:3000/search/hot/detai
export function searchHot(){
		return uni.request({
			url:`${baseUrl}/search/hot/detail`,
			method:'GET'
		});
}
//http://localhost:3000/search?keywords=少年
export function searchWord(word){
		return uni.request({
			url:`${baseUrl}/search?keywords=${word}`,
			method:'GET'
		});
}
//http://localhost:3000/search/suggest?keywords=少年&type=mobile
export function searchSuggest(word){
		return uni.request({
			url:`${baseUrl}/search/suggest?keywords=${word}&type=mobile`,
			method:'GET'
		});
}