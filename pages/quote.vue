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
                                            <span>4000 Highland Rd, Highland Charter Township, MI 48357, United States</span>
                                        </div>
                                    </div>
                                    <div class="col-md-12 text-center contact-info">
                                        <div class="contact-circle"><i class="la la-envelope-open"></i></div>
                                        <h5>Email</h5>
                                        <span>info@gmail.com</span>
                                    </div>
                                    <div class="col-md-12 text-center contact-info">
                                        <div class="contact-circle"><i class="la la-phone"></i></div>
                                        <h5>Phone</h5>
                                        <span>+009959845894</span>
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
                                            <label class="teeprint-radio">
                                                <input type="radio" name="delivery_type" />
                                                Same Day Delivery
                                                <span></span>
                                            </label>
                                            <label class="teeprint-radio">
                                                <input type="radio" name="delivery_type" />
                                                Next Day Delivery
                                                <span></span>
                                            </label>
                                            <label class="teeprint-radio">
                                                <input type="radio" name="delivery_type" />
                                                Standard Delivery (3-7 Days)
                                                <span></span>
                                            </label>
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
            </div>
        </div>
    </section>
  </template>
  
  <script setup>
  
  definePageMeta({
    titleTemplate: '% :: Home',
    name: 'quote',
    layout: 'web',
  })
  </script>
  
  
  <style scoped>
  
  </style>
  