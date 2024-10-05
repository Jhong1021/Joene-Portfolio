import React from 'react';
import './Carousel.css'; // Import the CSS file for styles

const Carousel = () => {
    return (
        <div id='tools' className="carousel-container">
            <div className="header">
            </div>
            <div className="scroll-container">
                <div className="carousel">
                    {/* Original Images */}
                    <img src="https://i.pinimg.com/originals/2c/32/1d/2c321d3d1512aa3bd347a24999b2497e.jpg" alt="cat1" />
                    <img src="https://www.codespot.org/assets/css.jpg" alt="cat2" />
                    <img src="https://lh3.googleusercontent.com/9NL6R5ICu8J-zZgDFkyAFE7UZ9oIQjSUg5vGfd2LSmo2IC_TzNGk8m6lDKc35YosEej0l2eyH3zv9PPrHrMEwU3bxSE=s1280-w1280-h800" alt="cat3" />
                    <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--j4setzK5--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://thepracticaldev.s3.amazonaws.com/i/jsv2fncioupdbtf0sbir.png" alt="cat4" />
                    <img src="https://loudcanvas.com/wp-content/uploads/2019/06/bootstrap-wallpaper.png" alt="cat5" />
                    <img src="https://media.licdn.com/dms/image/D5612AQEBQ1bGRD3cZA/article-cover_image-shrink_720_1280/0/1714393636789?e=2147483647&v=beta&t=yZK9HI2WwSWIsUjric39F0TqiXEG9Sq-syWHy3P9nz8" alt="cat6" />
                    <img src="https://media.dev.to/cdn-cgi/image/width=1600,height=900,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Forhfikbukwzcd29ltmug.png" alt="cat7" />
                    <img src="https://jaredchu.com/wp-content/uploads/2020/09/github-wallpaper-uhd-4k-3840x2160-2.jpg" alt="cat8" />
                    <img src="https://www.educative.io/v2api/collection/10370001/5227455105204224/image/6349680696885248" alt="cat9" />
                    {/* Duplicated Images for Infinite Effect */}
                    <img src="https://i.pinimg.com/originals/2c/32/1d/2c321d3d1512aa3bd347a24999b2497e.jpg" alt="cat1" />
                    <img src="https://www.codespot.org/assets/css.jpg" alt="cat2" />
                    <img src="https://lh3.googleusercontent.com/9NL6R5ICu8J-zZgDFkyAFE7UZ9oIQjSUg5vGfd2LSmo2IC_TzNGk8m6lDKc35YosEej0l2eyH3zv9PPrHrMEwU3bxSE=s1280-w1280-h800" alt="cat3" />
                    <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--j4setzK5--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://thepracticaldev.s3.amazonaws.com/i/jsv2fncioupdbtf0sbir.png" alt="cat4" />
                    <img src="https://loudcanvas.com/wp-content/uploads/2019/06/bootstrap-wallpaper.png" alt="cat5" />
                    <img src="https://media.licdn.com/dms/image/D5612AQEBQ1bGRD3cZA/article-cover_image-shrink_720_1280/0/1714393636789?e=2147483647&v=beta&t=yZK9HI2WwSWIsUjric39F0TqiXEG9Sq-syWHy3P9nz8" alt="cat6" />
                    <img src="https://media.dev.to/cdn-cgi/image/width=1600,height=900,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Forhfikbukwzcd29ltmug.png" alt="cat7" />
                    <img src="https://jaredchu.com/wp-content/uploads/2020/09/github-wallpaper-uhd-4k-3840x2160-2.jpg" alt="cat8" />
                    <img src="https://www.educative.io/v2api/collection/10370001/5227455105204224/image/6349680696885248" alt="cat9" />
                </div>
            </div>
        </div>
    );
};

export default Carousel;
