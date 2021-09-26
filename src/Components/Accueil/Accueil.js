import React from 'react'

export default function Accueil() {
  return (
    <div>
      <body id="top" class="ss-preload">


{/*<!-- preloader
================================================== -->*/}
<div id="preloader">
    <div id="loader"></div>
</div>

{/*<!-- header
================================================== -->*/}
<header class="s-header">
    <div class="row s-header__nav-wrap">
        <nav class="s-header__nav">
            <ul>
                <li class="current"><a class="smoothscroll" href="#hero">Home</a></li>
                <li><a class="smoothscroll" href="#about">About</a></li>
                <li><a class="smoothscroll" href="#resume">Resume</a></li>
                <li><a class="smoothscroll" href="#portfolio">Works</a></li>
                <li><a class="smoothscroll" href="#testimonials">Testimonials</a></li>
                <li><a class="smoothscroll" href="#contact">Say Hello</a></li>
            </ul>
        </nav>
    </div> {/*<!-- end row -->*/}
    
    <a class="s-header__menu-toggle" href="#0" title="Menu">
        <span class="s-header__menu-icon"></span>
    </a>
</header> {/*<!-- end s-header -->*/}


{/*<!-- hero
================================================== -->*/}
<section id="hero" class="s-hero target-section">

    <div class="s-hero__bg rellax" data-rellax-speed="-7"></div>

    <div class="row s-hero__content">
        <div class="column">

            <div class="s-hero__content-about">

                <h1>I'm Jonathan Doe.</h1>

                <h3>
                I'm a Manila based <span>graphic designer</span>, <span>illustrator</span> and <span>webdesigner</span> creating awesome and
                effective visual identities for companies of all sizes around the globe. Let's <a class="smoothscroll" href="#about">start scrolling</a>
                and learn more <a class="smoothscroll" href="#about">about me</a>.
                </h3>

                <div class="s-hero__content-social">
                    <a href="#0"><i class="fab fa-facebook-square" aria-hidden="true"></i></a>
                    <a href="#0"><i class="fab fa-twitter" aria-hidden="true"></i></a>
                    <a href="#0"><i class="fab fa-instagram" aria-hidden="true"></i></a>
                    <a href="#0"><i class="fab fa-dribbble" aria-hidden="true"></i></a>
                    <a href="#0"><i class="fab fa-behance" aria-hidden="true"></i></a>
                    <a href="#0"><i class="fab fa-linkedin" aria-hidden="true"></i></a>
                </div>

            </div> {/*<!-- end s-hero__content-about -->*/}

        </div>
    </div> {/*<!-- s-hero__content -->*/}

    <div class="s-hero__scroll">
        <a href="#about" class="s-hero__scroll-link smoothscroll">
            <span class="scroll-arrow">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill:rgba(0, 0, 0, 1);transform:;-ms-filter:"><path d="M18.707 12.707L17.293 11.293 13 15.586 13 6 11 6 11 15.586 6.707 11.293 5.293 12.707 12 19.414z"></path></svg>
            </span>
            <span class="scroll-text">Scroll Down</span>
        </a>
    </div> {/*<!-- s-hero__scroll -->*/}

</section> {/*<!-- end s-hero -->*/}


{/*<!-- about
================================================== -->*/}
<section id="about" class="s-about target-section">

    <div class="row">
        <div class="column large-3 tab-12">
            <img class="s-about__pic" src="images/avatars/user-06.jpg" alt=""/>
        </div>
        <div class="column large-9 tab-12 s-about__content">
            <h3>About Me</h3>
            <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa 
            quae ab illo inventore veritatis et quasi architecto beatae vitae 
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit 
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores 
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, 
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, 
            sed quia non numquam eius modi tempora incidunt ut labore et dolore 
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis 
            nostrum exercitationem ullam corporis suscipit laboriosam.
            </p>

            <hr/>

            <div class="row s-about__content-bottom">
                <div class="column w-1000-stack">
                    <h3>Contact Details</h3>

                    <p>
                    Jonathan Doe <br/>
                    1600 Amphitheatre Parkway <br/>
                    Mountain View, CA 94043 US <br/>
                    <a href="tel:+1975432345">+197 543 2345</a> <br/>
                    <a href="mailto:#0">sayhello@ceevee.com</a>
                    </p>
                    
                </div>
                <div class="column w-1000-stack">
                    <a href="#0" class="btn btn--download">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill:rgba(0, 0, 0, 1);transform:;-ms-filter:"><path d="M12 16L16 11 13 11 13 4 11 4 11 11 8 11z"></path><path d="M20,18H4v-7H2v7c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2v-7h-2V18z"></path></svg>
                        Download CV
                    </a>
                </div>
            </div>
        </div>
    </div> {/*<!-- end row -->*/}

</section> {/*<!-- end s-about -->*/}


{/*<!-- resume
================================================== -->*/}
<section id="resume" class="s-resume target-section">
    
    <div class="row s-resume__section">
        <div class="column large-3 tab-12">
            <h3 class="section-header-allcaps">Career</h3>
        </div>
        <div class="column large-9 tab-12">
            <div class="resume-block">

                <div class="resume-block__header">
                    <h4 class="h3">Dropbox</h4>
                    <p class="resume-block__header-meta">
                        <span>Product Designer</span> 
                        <span class="resume-block__header-date">
                            August 2019 - Present
                        </span>
                    </p>
                </div>

                <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore 
                vero quidem nobis maxime dolorem aliquam quisquam eum ipsum amet. Vitae 
                aut atque fuga dolorem. Vel voluptatibus fugiat nam. Impedit aperiam 
                nesciunt facilis! Porro architecto dicta inventore tempora ratione quia odio.
                </p>

            </div> {/*<!-- end resume-block -->*/}

            <div class="resume-block">

                <div class="resume-block__header">
                    <h4 class="h3">Facebook</h4>
                    <p class="resume-block__header-meta">
                        <span>UI/UX Designer</span> 
                        <span class="resume-block__header-date">
                            August 2016 - July 2019
                        </span>
                    </p>
                </div>

                <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore 
                vero quidem nobis maxime dolorem aliquam quisquam eum ipsum amet. Vitae 
                aut atque fuga dolorem. Vel voluptatibus fugiat nam. Impedit aperiam 
                nesciunt facilis! Porro architecto dicta inventore tempora ratione quia odio.
                </p>

            </div> {/*<!-- end resume-block -->*/}
        </div>
    </div> {/*<!-- s-resume__section -->*/}


    <div class="row s-resume__section">
        <div class="column large-3 tab-12">
            <h3 class="section-header-allcaps">Education</h3>
        </div>
        <div class="column large-9 tab-12">
            <div class="resume-block">

                <div class="resume-block__header">
                    <h4 class="h3">University of Life</h4>
                    <p class="resume-block__header-meta">
                        <span>Master in Graphic Design</span> 
                        <span class="resume-block__header-date">
                            April 2015
                        </span>
                    </p>
                </div>

                <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore 
                vero quidem nobis maxime dolorem aliquam quisquam eum ipsum amet. Vitae 
                aut atque fuga dolorem. Vel voluptatibus fugiat nam. Impedit aperiam 
                nesciunt facilis! Porro architecto dicta inventore tempora ratione quia odio.
                </p>

            </div> {/*<!-- end resume-block -->*/}

            <div class="resume-block">

                <div class="resume-block__header">
                    <h4 class="h3">School of Cool Designers</h4>
                    <p class="resume-block__header-meta">
                        <span>B.A. Degree in Graphic Design</span> 
                        <span class="resume-block__header-date">
                            August 2012
                        </span>
                    </p>
                </div>

                <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore 
                vero quidem nobis maxime dolorem aliquam quisquam eum ipsum amet. Vitae 
                aut atque fuga dolorem. Vel voluptatibus fugiat nam. Impedit aperiam 
                nesciunt facilis! Porro architecto dicta inventore tempora ratione quia odio.
                </p>

            </div> {/*<!-- end resume-block -->*/}
        </div>
    </div> {/*<!-- s-resume__section -->*/}


    <div class="row s-resume__section">
        <div class="column large-3 tab-12">
            <h3 class="section-header-allcaps">Skills</h3>
        </div>
        <div class="column large-9 tab-12">
            <div class="resume-block">

                <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore 
                vero quidem nobis maxime dolorem aliquam quisquam eum ipsum amet. Vitae 
                aut atque fuga dolorem. Vel voluptatibus fugiat nam. Impedit aperiam 
                nesciunt facilis! Porro architecto dicta inventore tempora ratione quia odio.
                </p>

                <ul class="skill-bars-fat">
                    <li>
                    <div class="progress percent85"></div>
                    <strong>HTML</strong>
                    </li>
                    <li>
                    <div class="progress percent85"></div>
                    <strong>CSS</strong>
                    </li>
                    <li>
                    <div class="progress percent65"></div>
                    <strong>Javascript</strong>
                    </li>
                    <li>
                    <div class="progress percent90"></div>
                    <strong>Figma</strong>
                    </li>
                    <li>
                    <div class="progress percent75"></div>
                    <strong>Illustrator</strong>
                    </li>
                    <li>
                    <div class="progress percent60"></div>
                    <strong>Photoshop</strong>
                    </li>
                </ul>

            </div> {/*<!-- end resume-block -->*/}

        </div>
    </div> {/*<!-- s-resume__section -->*/}

</section> {/*<!-- end s-resume -->*/}


{/*<!-- portfolio
================================================== -->*/}
<section id="portfolio" class="s-portfolio target-section">

    <div class="row s-portfolio__header">
        <div class="column large-12">
            <h3>A Few Of My Latest Creations</h3>
        </div>
    </div>

    <div class="row collapse block-large-1-4 block-medium-1-3 block-tab-1-2 block-500-stack folio-list">

        <div class="column folio-item">
            <a href="#modal-01" class="folio-item__thumb">
                <img src="images/portfolio/droplet.jpg" 
                     srcset="images/portfolio/droplet.jpg 1x, 
                             images/portfolio/droplet@2x.jpg 2x" alt=""/>
            </a>
        </div> {/*<!-- end folio-item -->*/}

        <div class="column folio-item">
            <a href="#modal-02" class="folio-item__thumb">
                <img src="images/portfolio/lamp.jpg" 
                     srcset="images/portfolio/lamp.jpg 1x, 
                             images/portfolio/lamp@2x.jpg 2x" alt=""/>
            </a>
        </div> {/*<!-- end folio-item -->*/}

        <div class="column folio-item">
            <a href="#modal-03" class="folio-item__thumb">
                <img src="images/portfolio/minimalismo.jpg" 
                     srcset="images/portfolio/minimalismo.jpg 1x, 
                             images/portfolio/minimalismo@2x.jpg 2x" alt=""/>
            </a>
        </div> {/*<!-- end folio-item -->*/}

        <div class="column folio-item">
            <a href="#modal-04" class="folio-item__thumb">
                <img src="images/portfolio/shutterbug.jpg" 
                     srcset="images/portfolio/shutterbug.jpg 1x, 
                             images/portfolio/shutterbug@2x.jpg 2x" alt=""/>
            </a>
        </div> {/*<!-- end folio-item -->*/}

        <div class="column folio-item">
            <a href="#modal-05" class="folio-item__thumb">
                <img src="images/portfolio/fuji.jpg" 
                     srcset="images/portfolio/fuji.jpg 1x, 
                             images/portfolio/fuji@2x.jpg 2x" alt=""/>
            </a>
        </div> {/*<!-- end folio-item -->*/}

        <div class="column folio-item">
            <a href="#modal-06" class="folio-item__thumb">
                <img src="images/portfolio/skaterboy.jpg" 
                     srcset="images/portfolio/skaterboy.jpg 1x, 
                             images/portfolio/skaterboy@2x.jpg 2x" alt=""/>
            </a>
        </div> {/*<!-- end folio-item -->*/}

        <div class="column folio-item">
            <a href="#modal-07" class="folio-item__thumb">
                <img src="images/portfolio/rucksack.jpg" 
                     srcset="images/portfolio/rucksack.jpg 1x, 
                             images/portfolio/rucksack@2x.jpg 2x" alt=""/>
            </a>
        </div> {/*<!-- end folio-item -->*/}

        <div class="column folio-item">
            <a href="#modal-08" class="folio-item__thumb">
                <img src="images/portfolio/sanddunes.jpg" 
                     srcset="images/portfolio/sanddunes.jpg 1x, 
                             images/portfolio/sanddunes@2x.jpg 2x" alt=""/>
            </a>
        </div> {/*<!-- end folio-item -->*/}

    </div> {/*<!-- end folio-list -->*/}


    {/*<!-- Modal Templates Popup
    =========================================================== -->*/}
    <div id="modal-01" hidden>
        <div class="modal-popup">
            <img src="images/portfolio/gallery/g-droplet.jpg" alt="" />

            <div class="modal-popup__desc">
                <h5>Droplet</h5>
                <p>Odio soluta enim quos sit asperiores rerum rerum repudiandae cum. Vel voluptatem alias qui assumenda iure et expedita voluptatem. Ratione officiis quae.</p>
                <ul class="modal-popup__cat">
                    <li>Branding</li>
                    <li>Product Design</li>
                </ul>
            </div>

            <a href="https://www.behance.net/" class="modal-popup__details">Project link</a>
        </div>
    </div> {/*<!-- end modal -->*/}

    <div id="modal-02" hidden>
        <div class="modal-popup">
            <img src="images/portfolio/gallery/g-lamp.jpg" alt="" />

            <div class="modal-popup__desc">
                <h5>The Lamp</h5>
                <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                <ul class="modal-popup__cat">
                    <li>Branding</li>
                </ul>
            </div>

            <a href="https://www.behance.net/" class="modal-popup__details">Project link</a>
        </div>
    </div> {/*<!-- end modal -->*/}

    <div id="modal-03" hidden>
        <div class="modal-popup">
            <img src="images/portfolio/gallery/g-minimalismo.jpg" alt="" />

            <div class="modal-popup__desc">
                <h5>Minimalismo</h5>
                <p>Exercitationem reprehenderit quod explicabo consequatur aliquid ut magni ut. Deleniti quo corrupti illum velit eveniet ratione necessitatibus ipsam mollitia.</p>
                <ul class="modal-popup__cat">
                    <li>Product Design</li>
                </ul>
            </div>

            <a href="https://www.behance.net/" class="modal-popup__details">Project link</a>
        </div>
    </div> {/*<!-- end modal -->*/}

    <div id="modal-04" hidden>
        <div class="modal-popup">
            <img src="images/portfolio/gallery/g-shutterbug.jpg" alt="" />

            <div class="modal-popup__desc">
                <h5>Shutterbug</h5>
                <p>Dolores velit qui quos nobis. Aliquam delectus voluptas quos possimus non voluptatem voluptas voluptas. Est doloribus eligendi porro doloribus voluptatum.</p>
                <ul class="modal-popup__cat">
                    <li>E-Commerce</li>
                </ul>
            </div>

            <a href="https://www.behance.net/" class="modal-popup__details">Project link</a>
        </div>
    </div> {/*<!-- end modal -->*/}

    <div id="modal-05" hidden>
        <div class="modal-popup">

            <img src="images/portfolio/gallery/g-fuji.jpg" alt="" />

            <div class="modal-popup__desc">
                <h5>Fuji</h5>
                <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                <ul class="modal-popup__cat">
                    <li>Product Design</li>
                </ul>
            </div>

            <a href="https://www.behance.net/" class="modal-popup__details">Project link</a>
        </div>
    </div> {/*<!-- end modal -->*/}

    <div id="modal-06" hidden>
        <div class="modal-popup">
            <img src="images/portfolio/gallery/g-skaterboy.jpg" alt="" />

            <div class="modal-popup__desc">
                <h5>Skaterboy</h5>
                <p>Quisquam vel libero consequuntur autem voluptas. Qui aut vero. Omnis fugit mollitia cupiditate voluptas. Aenean sollicitudin, lorem quis bibendum auctor.</p>
                <ul class="modal-popup__cat">
                    <li>Branding</li>
                    <li>Product Design</li>
                </ul>
            </div>

            <a href="https://www.behance.net/" class="modal-popup__details">Project link</a>
        </div>
    </div> {/*<!-- end modal -->*/}

    <div id="modal-07" hidden>
        <div class="modal-popup">
            <img src="images/portfolio/gallery/g-rucksack.jpg" alt="" />

            <div class="modal-popup__desc">
                <h5>Rucksack</h5>
                <p>Odio soluta enim quos sit asperiores rerum rerum repudiandae cum. Vel voluptatem alias qui assumenda iure et expedita voluptatem. Ratione officiis quae.</p>
                <ul class="modal-popup__cat">
                    <li>Branding</li>
                    <li>Product Design</li>
                </ul>
            </div>

            <a href="https://www.behance.net/" class="modal-popup__details">Project link</a>
        </div>
    </div> {/*<!-- end modal -->*/}

    <div id="modal-08" hidden>
        <div class="modal-popup">
            <img src="images/portfolio/gallery/g-sanddunes.jpg" alt="" />

            <div class="modal-popup__desc">
                <h5>Sand Dunes</h5>
                <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                <ul class="modal-popup__cat">
                    <li>Web Design</li>
                </ul>
            </div>

            <a href="https://www.behance.net/" class="modal-popup__details">Project link</a>
        </div>
    </div> {/*<!-- end modal -->*/}


</section> {/*<!-- end s-portfolio -->*/}


{/*<!-- CTA
================================================== -->*/}
<section class="s-cta">

    <div class="row">
        <div class="column">
            <h3 class="h2 section-desc">
                Need a great reliable web hosting?
            </h3>
        </div>
    </div> {/*<!-- end heading-block -->*/}

    <div class="row cta-content">
        <div class="column">
            <p>
            We highly recommend <a href="https://www.dreamhost.com/r.cgi?287326">DreamHost</a>.
            Powerful web and Wordpress hosting. Guaranteed.
            Starting at $2.95 per month.
            </p>

            <a href="https://www.dreamhost.com/r.cgi?287326" class="btn btn--primary h-full-width">Get Started</a>
        </div>
    </div> {/*<!-- end cta-content -->*/}

</section> {/*<!-- end s-cta -->*/}


{/*<!-- testimonials
================================================== -->*/}
<section id="testimonials" class="s-testimonials target-section">

    <div class="s-testimonials__bg"></div>

    <div class="row s-testimonials__header">
        <div class="column large-12">
            <h3>Hear What My Clients Says</h3>
        </div>
    </div>

    <div class="row s-testimonials__content">

        <div class="column">

            <div class="swiper-container testimonial-slider">

                <div class="swiper-wrapper">

                    <div class="testimonial-slider__slide swiper-slide">
                        <div class="testimonial-slider__author">
                            <img src="images/avatars/user-02.jpg" alt="Author image" class="testimonial-slider__avatar"/>
                            <cite class="testimonial-slider__cite">
                                <strong>Tim Cook</strong>
                                <span>CEO, Apple</span>
                            </cite>
                        </div>
                        <p>
                        Molestiae incidunt consequatur quis ipsa autem nam sit enim magni. Voluptas tempore rem. 
                        Explicabo a quaerat sint autem dolore ducimus ut consequatur neque.  Nisi dolores quaerat fuga rem nihil nostrum.
                        Laudantium quia consequatur molestias delectus culpa.
                        </p>
                    </div> {/*<!-- end testimonial-slider__slide -->*/}
    
                    <div class="testimonial-slider__slide swiper-slide">
                        <div class="testimonial-slider__author">
                            <img src="images/avatars/user-03.jpg" alt="Author image" class="testimonial-slider__avatar"/>
                            <cite class="testimonial-slider__cite">
                                <strong>Sundar Pichai</strong>
                                <span>CEO, Google</span>
                            </cite>
                        </div>
                        <p>
                        Excepturi nam cupiditate culpa doloremque deleniti repellat. Veniam quos repellat voluptas animi adipisci.
                        Nisi eaque consequatur. Voluptatem dignissimos ut ducimus accusantium perspiciatis.
                        Quasi voluptas eius distinctio. Atque eos maxime.
                        </p>
                    </div> {/*<!-- end testimonial-slider__slide -->*/}
    
                    <div class="testimonial-slider__slide swiper-slide">
                        <div class="testimonial-slider__author">
                            <img src="images/avatars/user-04.jpg" alt="Author image" class="testimonial-slider__avatar"/>
                            <cite class="testimonial-slider__cite">
                                <strong>Satya Nadella</strong>
                                <span>CEO, Microsoft</span>
                            </cite>
                        </div>
                        <p>
                        Repellat dignissimos libero. Qui sed at corrupti expedita voluptas odit. Nihil ea quia nesciunt. Ducimus aut sed ipsam.  
                        Autem eaque officia cum exercitationem sunt voluptatum accusamus. Quasi voluptas eius distinctio.
                        Voluptatem dignissimos ut.
                        </p>
                    </div> {/*<!-- end testimonial-slider__slide -->*/}

                    <div class="testimonial-slider__slide swiper-slide">
                        <div class="testimonial-slider__author">
                            <img src="images/avatars/user-05.jpg" alt="Author image" class="testimonial-slider__avatar"/>
                            <cite class="testimonial-slider__cite">
                                <strong>Jeff Bezos</strong>
                                <span>CEO, Amazon</span>
                            </cite>
                        </div>
                        <p>
                        Nunc interdum lacus sit amet orci. Vestibulum dapibus nunc ac augue. Fusce vel dui. In ac felis 
                        quis tortor malesuada pretium. Curabitur vestibulum aliquam leo. Qui sed at corrupti expedita voluptas odit. 
                        Nihil ea quia nesciunt. Ducimus aut sed ipsam.
                        </p>
                    </div> {/*<!-- end testimonial-slider__slide -->*/}

                </div> {/*<!-- end testimonial slider swiper-wrapper -->*/}

                <div class="swiper-pagination"></div>

            </div> {/*<!-- end swiper-container -->*/}

        </div> {/*<!-- end column -->*/}

    </div> {/*<!-- end row -->*/}

</section> {/*<!-- end s-testimonials -->*/}


{/*<!-- contact
================================================== -->*/}
<section id="contact" class="s-contact target-section">

    <div class="row s-contact__header">
        <div class="column large-12">
            <h3 class="section-header-allcaps">Say Hello</h3>
        </div>
    </div>

    <div class="row s-contact__content">

        <div class="column large-7 medium-12">

            <h4 class="huge-text">
            Have a new project in mind? Let's collaborate and build something awesome. 
            Let's turn that idea to an even greater product :)
            </h4>

        </div>

        <div class="column large-4 medium-12">

            <div class="row contact-infos">
                <div class="column large-12 medium-6 tab-12">
                    <div class="contact-block">
                        <h5 class="contact-block__header">
                            Email
                        </h5>
                        <p class="contact-block__content">
                            <a class="mailtoui" href="mailto:sayhello@ceevee.com">sayhello@ceevee.com</a>
                        </p>
                    </div> {/*<!-- end contact-block -->*/}
                </div>
                <div class="column large-12 medium-6 tab-12">
                    <div class="contact-block">
                        <h5 class="contact-block__header">
                            Phone
                        </h5>
                        <p class="contact-block__content">
                            <a href="tel:+1975432345">+197 543 2345</a>
                        </p>
                    </div> {/*<!-- end contact-block -->*/}
                </div>

                <div class="column large-12">
                    <a href="mailto:sayhello@ceevee.com" class="mailtoui btn btn--primary h-full-width">Let's Talk</a>
                </div>
            </div> {/*<!-- end contact-infos -->*/}

        </div>
    </div> {/*<!-- s-contact__content -->*/}

</section> {/*<!-- end s-contact -->*/}


{/*<!-- footer
================================================== -->*/}
<footer class="s-footer">
    <div class="row">
        <div class="column large-4 medium-6 w-1000-stack s-footer__social-block">
            <ul class="s-footer__social">
                <li><a href="#0"><i class="fab fa-facebook-f" aria-hidden="true"></i></a></li>
                <li><a href="#0"><i class="fab fa-twitter" aria-hidden="true"></i></a></li>
                <li><a href="#0"><i class="fab fa-instagram" aria-hidden="true"></i></a></li>
                <li><a href="#0"><i class="fab fa-dribbble" aria-hidden="true"></i></a></li>
                <li><a href="#0"><i class="fab fa-linkedin-in" aria-hidden="true"></i></a></li>
            </ul>
        </div>

        <div class="column large-7 medium-6 w-1000-stack ss-copyright">
            <span>© Copyright Ceevee 2021</span> 
            <span>Design by <a href="https://www.styleshout.com/">StyleShout</a></span>
        </div>
    </div>

    <div class="ss-go-top">
        <a class="smoothscroll" title="Back to Top" href="#top">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6 4h12v2H6zm5 10v6h2v-6h5l-6-6-6 6z"/></svg>
         </a>
    </div> {/*<!-- end ss-go-top -->*/}
</footer>


{/*<!-- Java Script
================================================== -->*/}
<script src="js/plugins.js"></script>
<script src="js/main.js"></script>

</body>
    </div>
  )
}
