
<script setup>
  
definePageMeta({
  titleTemplate: '% :: Home',
  name: 'quote',
  layout: 'web',
})
</script>

<template>
     <section class="contact">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12">
                    <div class="contact-infoinquery">
                        <div class="row">
                            <!-- Contact Information -->
                            <div class="col-lg-3 col-md-4 contact-leftside">
                                <div class="row">
                                    <div class="col-md-12 text-center contact-info">
                                        <div class="contact-circle"><i class="la la-map-marker"></i></div>
                                        <h5>Address</h5>
                                        <div class="branch-address">
                                            <span>7 Corsican Sq, London E3 3YD, United Kingdom</span>
                                        </div>
                                        <div class="branch-address">
                                            <h6>Branch</h6>
                                            <span>126 Commercial Road, E1 1NL</span>
                                        </div>
                                    </div>
                                    <div class="col-md-12 text-center contact-info">
                                        <div class="contact-circle"><i class="la la-envelope-open"></i></div>
                                        <h5>Email</h5>
                                        <span>contact@gmail.com</span>
                                    </div>
                                    <div class="col-md-12 text-center contact-info">
                                        <div class="contact-circle"><i class="la la-phone"></i></div>
                                        <h5>Phone</h5>
                                        <span>+44 7888 185120</span>
                                    </div>
                                </div>
                            </div>

                            <!-- Contact Query -->
                            <div class="col-lg-9 col-md-8 mt-3 contact-form">
                                <h3 class="text-center mb-2">3 Min Quote Form</h3>
                                <div class="contact-linbar"></div>
                                <form>
                                    <div class="row">
                                        <div class="col-md-12 mb-2">
                                            <div class="teeprint-radio-inline">
                                                <div class="teeprint-radio-box">
                                                    <label class="teeprint-radio">
                                                        <input type="radio" name="delivery_type" />
                                                        Same Day Delivery
                                                        <span></span>
                                                    </label>
                                                </div>
                                                <div class="teeprint-radio-box">
                                                    <label class="teeprint-radio">
                                                        <input type="radio" name="delivery_type" />
                                                        Next Day Delivery
                                                        <span></span>
                                                    </label>
                                                </div>
                                                <div class="teeprint-radio-box">
                                                    <label class="teeprint-radio">
                                                        <input type="radio" name="delivery_type" />
                                                        Standard Delivery (3-7 Days)
                                                        <span></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label>Last Delivery Date</label>
                                                <input type="date" class="form-control" placeholder="Choose Date">
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label>Full Name</label>
                                                <input type="text" class="form-control" placeholder="Full Name">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Email Address</label>
                                                <input type="email" class="form-control" placeholder="Email">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Phone Number</label>
                                                <input type="text" class="form-control" placeholder="E.g. +44 07960686747">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label>Requirements</label>
                                        <textarea class="form-control" rows="3" placeholder="Write your requirements E.g. product type, quantity, size, artwork placement area etc."></textarea>
                                    </div>
                                    <div class="form-group text-right">
                                        <button class="teeprint-button teeprint-theme-btn query-submit-btn" type="button">Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-12 col-md-12 map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14598.870478587069!2d90.42758835!3d23.8286384!3m2!1i1024!2i768!4f13.1!4m3!3e6!4m0!4m0!5e0!3m2!1sen!2sbd!4v1541788650678" frameborder="0" style="border:0" allowfullscreen></iframe>
                </div>
                <div class="col-lg-12 col-md-12">
                    
                    <div class="row my-4">
                        <div class="col-md-12">
                            <div class="section-main-heading text-center">
                                <h4 class="section-heading-title-small">
                                    <span class="line-decoration"></span> Promise
                                </h4>
                                <h2 class="section-heading-title-big">
                                    Our Promise
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div class="promiss-section">
                        <img src="/img/quote-page-card-image-1.jpeg" alt="">
                        <div class="our-promiss">
                            <p>We bring your vision to life with creative designs that leave a lasting impression. Your dream is our mission, your satisfaction is our commitment, and delivering excellence is our promise</p>
                        </div>
                        <img src="/img/quote-page-card-image-2.jpeg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </section>
  </template>
  

  
  
  <style scoped>
  
  .promiss-section{
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px; 
  }
  .promiss-section img{
    width: 30%;
  }
  .promiss-section img:first-child{
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
  }
  .promiss-section img:last-child{
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
  }
  .promiss-section .our-promiss{
    padding: 20px 20px;
    text-align: justify;
    background-color: rgb(241, 241, 241); 
  }

  @media screen and (max-width: 768px) {
    .promiss-section{ 
        flex-direction: column;
    }
    .promiss-section img{
        width: 100%;
    }
    .promiss-section img:first-child{
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
        border-bottom-left-radius: 0px;
    }
    .promiss-section img:last-child{
        border-top-right-radius: 0px;
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
    }
    .promiss-section .our-promiss{
        padding: 20px 20px;
        text-align: justify;
        background-color: rgb(241, 241, 241); 
    }
  }


  </style>
  