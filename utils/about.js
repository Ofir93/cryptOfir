

function buildAbout(location) {
    location.append(`<div class="about">
    <div class="carouselAll">
        <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3"
                    aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4"
                    aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5"
                    aria-label="Slide 6"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="10000">
                    <img src="./photos/horse3.jpg" class="w-50 carousel1" alt="...">
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                    <img src="./photos/mdaCar.jpg" class="w-50 carousel2" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="./photos/horse.jpg" class="w-50 carousel3" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="./photos/miluim19-23.jpg" class="w-50 carousel4" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="./photos/ferry2.jpg" class="w-50 carousel5" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="./photos/mdaAll.jpg" class="w-50 carousel6" alt="...">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>


        <h2>Ofir Ben Yacov</h2>
        <h3>About the author</h3>
        <div class="aboutMe">
            <p>Full Name: Caption ^^</p>
            <p>Location: Geva Carmel</p>
        </div>
        <div class="aboutTheProject">
            <h4>About the project</h4>
            <p>In this project I was ask to create a crypto curency site :)</p>
        </div>
        <p>Open for work!</p>
    </div>
</div>
`)
return
}
export {buildAbout}