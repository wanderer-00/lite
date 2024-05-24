var posts = document.getElementsByClassName('posts')[0];

for( i=0; i<posts_data.length; i++ ){
posts.innerHTML += `
                    <div class="post">
                        <div class="poster" style="background-image: url(img/news/${i+1}.jpg)"></div>
                        <div>
                            <div class="head">${posts_data[i].head}</div>
                            <div class="time">${posts_data[i].time}</div>
                            <div class="note">${posts_data[i].note}</div>
                        </div>
                    </div>
`};