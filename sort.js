const loadSortVideos = async()=>{

    const res = await fetch('https://openapi.programming-hero.com/api/phero-tube/videos');
    const data = await res.json();
    sortVideos(data.videos);
}
loadSortVideos();
function compare(a,b){
    return (b.others.views.split('K')[0])-(a.others.views.split('K')[0]);
 }
const sortVideos= (videos =>{

//    for (const video of videos) {
//       console.log(video.others.views);
//    }
   const newVideos= [...videos];
   newVideos.sort(compare);
   for (const video of newVideos) {
    console.log(video);
 }
   
  
})