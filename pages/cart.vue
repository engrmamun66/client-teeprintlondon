<template>
    <section class="teeprint-cart-wrapper">
        <div class="container">
            <div class="row teeprint-cart-top">
                <div class="col-lg-12">
                    <div class="teeprint-cart-ordertable">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th></th>
                                    <th>Product</th>
                                    <th>Unit Price</th>
                                    <th>Quantity</th>
                                    <th>Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><i class="la la-times cart-remove"></i></td>
                                    <td><img src="https://teeprint.london/wp-content/uploads/2024/08/AM1120GYM20FRONT-6.jpg" /></td>
                                    <td>
                                        <b>Anthem Organic Long Sleeve T-Shirt</b>
                                        <br>
                                        Delivery:Urgent 2-3 days
                                        <br>
                                        Colour:Blac
                                    </td>
                                    <td>$2000</td>
                                    <td>1</td>
                                    <td>$2000.00</td>
                                </tr>

                                <tr>
                                    <td><i class="la la-times cart-remove"></i></td>
                                    <td><img src="https://teeprint.london/wp-content/uploads/2024/08/AM1120GYM20FRONT-6.jpg" /></td>
                                    <td>
                                        <b>Anthem Organic Long Sleeve T-Shirt</b>
                                        <br>
                                        Delivery:Urgent 2-3 days
                                        <br>
                                        Colour:Blac
                                    </td>
                                    <td>$2000</td>
                                    <td>4</td>
                                    <td>$8000.00</td>
                                </tr>

                                <tr>
                                    <td><i class="la la-times cart-remove"></i></td>
                                    <td><img src="https://teeprint.london/wp-content/uploads/2024/08/AM1120GYM20FRONT-6.jpg" /></td>
                                    <td>
                                        <b>Anthem Organic Long Sleeve T-Shirt</b>
                                        <br>
                                        Delivery:Urgent 2-3 days
                                        <br>
                                        Colour:Blac
                                    </td>
                                    <td>$2000</td>
                                    <td>1</td>
                                    <td>$2000.00</td>
                                </tr>
                                <tr>
                                    <td colspan="3">
                                        <div class="d-flex">
                                            <input class="coupon-code-input" type="text" placeholder="Coupon Code" />
                                            <button class="teeprint-button teeprint-theme-btn teeprint-apply-coupon-btn" type="submit">Apply Coupon</button>
                                        </div>
                                    </td>
                                    <td colspan="3">
                                        <a class="teeprint-button teeprint-theme-btn teeprint-proceed-checkout-btn" href="checkout.html">Proceed Checkout<i class="la la-arrow-right"></i> </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="teeprint-row teeprint-cart-bottom">
                <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="teeprint-cart-order-summery">
                        <h5>Cart Total</h5>
                        <table class="table">
                            <tbody>
                                <tr>
                                    <td>Subtotal</td>
                                    <td>
                                        <span><b> $12000.00 </b></span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Shipping Charge</td>
                                    <td><span> $0.00 </span></td>
                                </tr>
                                <tr>
                                    <td>Discount</td>
                                    <td><span> $0.00</span></td>
                                </tr>
                                <tr>
                                    <td>Tax</td>
                                    <td><span> $0.00</span></td>
                                </tr>
                                <tr>
                                    <td>Deposited Amount</td>
                                    <td><span> $0.00</span></td>
                                </tr>
                                <tr>
                                    <td>
                                        <h4>Total</h4>
                                    </td>
                                    <td>
                                        <h4> $12000.00</h4>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

definePageMeta({
titleTemplate: '% :: cart',
name: 'cart',
layout: 'web',
})
</script>
