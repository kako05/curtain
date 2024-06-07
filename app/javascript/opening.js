function post (){

  const videoElement = document.getElementById('opening-video');

  if (videoElement) { // 動画要素が存在する場合
    videoElement.play(); // 動画を再生
  } else {
    console.error('Opening video element not found.'); // 動画要素が見つからない場合、エラーメッセージを出力
  }
};

window.addEventListener('turbo:load', post);
window.addEventListener("turbo:render", post);